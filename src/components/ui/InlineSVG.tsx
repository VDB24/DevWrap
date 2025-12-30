import React, { useState, useEffect } from 'react';

interface InlineSVGProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string; // Kept for API compatibility, though inline SVGs use title/desc
}

export const InlineSVG: React.FC<InlineSVGProps> = ({ src, className, style }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    const fetchSVG = async () => {
      try {
        const response = await fetch(src);
        const text = await response.text();
        if (isMounted) {
            // Basic sanitization/cleanup if needed, but usually local files are safe
            // We strip any existing width/height to let CSS control it
            const cleaned = text
                .replace(/width="[^"]*"/, '')
                .replace(/height="[^"]*"/, '')
                .replace(/<svg/, '<svg width="100%" height="100%"');
            setSvgContent(cleaned);
        }
      } catch (error) {
        console.error('Error loading SVG:', src, error);
      }
    };

    if (src.endsWith('.svg')) {
      fetchSVG();
    }
  }, [src]);

  // Fallback for non-SVG images (like PNGs)
  if (!src.endsWith('.svg')) {
      return <img src={src} className={className} style={style} alt="" crossOrigin="anonymous" />;
  }

  return (
    <div 
      className={className} 
      style={{ 
        display: 'inline-block', 
        lineHeight: 0, 
        ...style 
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  );
};
