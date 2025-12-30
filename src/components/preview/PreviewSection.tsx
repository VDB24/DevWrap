import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import styles from './PreviewSection.module.css';
import { PreviewCard } from './PreviewCard';
import { Card } from '../ui/Card';
import type { WrappedData } from '../../types';

interface PreviewSectionProps {
  data: WrappedData;
}

export const PreviewSection: React.FC<PreviewSectionProps> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [scale, setScale] = useState(1);

  // Auto-scale logic
  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 450;
      const padding = 32;
      
      if (containerWidth < cardWidth + padding) {
        setScale((containerWidth - padding) / cardWidth);
      } else {
        setScale(1);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  const generateImageValues = async () => {
    if (!cardRef.current) return null;
    try {
        const canvas = await html2canvas(cardRef.current, {
            backgroundColor: null,
            scale: 2,
            useCORS: true,
            onclone: (clonedDoc) => {
                 // Fix Scaling
                 const clonedElement = clonedDoc.querySelector(`.${styles.scaler}`) as HTMLElement;
                 if (clonedElement) {
                     clonedElement.style.transform = 'none';
                 }

                 // Fix Title Gradient (html2canvas fails with background-clip: text)
                 const titles = clonedDoc.querySelectorAll(`.${styles.title}`);
                 titles.forEach((el: any) => {
                    el.style.backgroundImage = 'none';
                    el.style.background = 'transparent';
                    el.style.webkitBackgroundClip = 'unset';
                    el.style.backgroundClip = 'unset';
                    el.style.webkitTextFillColor = '#ffffff';
                    el.style.color = '#ffffff';
                    // Force white text
                    el.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
                 });

                 const subTitles = clonedDoc.querySelectorAll(`.${styles.wrapSub}`);
                 subTitles.forEach((el: any) => {
                    el.style.background = 'none';
                    el.style.webkitTextFillColor = '#2dd4bf'; // Keep primary color
                    el.style.color = '#2dd4bf';
                 });
                 
                 // Fix 2025 specifically if needed (it's white usually, but good to ensure)
                 const years = clonedDoc.querySelectorAll(`.${styles.year}`);
                 years.forEach((el: any) => {
                    el.style.webkitTextFillColor = '#ffffff';
                    el.style.color = '#ffffff';
                 });

                 // Icons are now handled by EmbeddableImage (Base64), so no manual fix needed here.
            }
        });
        return canvas;
    } catch (err) {
        console.error(err);
        return null;
    }
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    
    // Wait for the state update (isExporting=true) to apply styles
    setTimeout(async () => {
        const canvas = await generateImageValues();
        if (canvas) {
            const link = document.createElement('a');
            link.download = `Dev-Wrap-2025-${data.details.role || 'Engineer'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
        setIsGenerating(false);
    }, 500); // 500ms delay to ensure images/styles re-flow if needed
  };

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'instagram' | 'native') => {
    const text = `Check out my Developer Wrapped 2025! 🚀\n\n#DevWrap2025 #SoftwareEngineer #Coding`;
    
    // 1. Try Native Share (best for mobile, supports images directly)
    if (platform === 'native' && navigator.share) {
         setIsGenerating(true);
         const canvas = await generateImageValues();
         setIsGenerating(false);
         
         if (canvas) {
             canvas.toBlob(async (blob) => {
                 if (!blob) return;
                 const file = new File([blob], 'dev-wrap-2025.png', { type: 'image/png' });
                 try {
                     if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        await navigator.share({
                            title: 'Dev Wrap 2025',
                            text: text,
                            files: [file]
                        });
                        return;
                     }
                 } catch (err) {
                     console.error('Share failed', err);
                 }
             });
         }
         // If native share fails or doesn't support files, fall through to fallback
    }

    // 2. Instagram: Always needs image
    if (platform === 'instagram') {
        await handleDownload();
        alert("Image downloaded! You can now post it to Instagram.");
        return;
    }

    // 3. Desktop/Web Buttons (Text only)
    let url = '';
    switch (platform) {
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            break;
        case 'linkedin':
            url = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
            break;
        case 'native':
             // Fallback if native share isn't available
             alert("Sharing not supported. Downloading image instead.");
             handleDownload();
             return;
    }

    if (url) {
         window.open(url, '_blank');
    }
  };

  return (
    <div className={styles.wrapper}>
      <Card title="Preview" className={styles.previewContainer}>
        <div className={styles.responsiveWrapper} ref={containerRef}>
            <div 
                className={styles.scaler} 
                style={{ 
                    transform: `scale(${scale})`,
                    transformOrigin: 'top center',
                    marginBottom: scale < 1 ? `-${(1 - scale) * 800}px` : 0 
                }}
            >
                <div ref={cardRef}>
                    <PreviewCard data={data} isExporting={isGenerating} />
                </div>
            </div>
        </div>
      </Card>
      
      <div className={styles.actions}>
        <button 
          className={styles.downloadBtn} 
          onClick={handleDownload}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : (
             <>
               <FiDownload /> Download Image
             </>
          )}
        </button>
        
        <div className={styles.shareSection}>
           <h4>Share to Socials</h4>
           <div className={styles.shareIcons}>
              <button className={styles.shareBtn} onClick={() => handleShare('twitter')} title="Share on X (Twitter)">
                <SiX />
              </button>
              <button className={styles.shareBtn} onClick={() => handleShare('linkedin')} title="Share on LinkedIn">
                <SiLinkedin />
              </button>
              <button className={styles.shareBtn} onClick={() => handleShare('instagram')} title="Post to Instagram">
                <SiInstagram />
              </button>
              <button className={styles.shareBtn} onClick={() => handleShare('native')} title="More Options">
                <FiShare2 />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
