import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  useEffect(() => {
    let isMounted = true;

    const convertToBase64 = async () => {
      // If it's already a data URL, do nothing
      if (src.startsWith('data:')) return;

      try {
        const response = await fetch(src, { mode: 'cors' });
        const blob = await response.blob();
        
        return new Promise<void>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (isMounted && reader.result) {
              setImgSrc(reader.result as string);
              resolve();
            }
          };
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.warn('Failed to load image for export:', src, error);
        // Fallback to original src if fetch fails (e.g. strict CORS blocking)
        if (isMounted) setImgSrc(src);
      }
    };

    convertToBase64();

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      crossOrigin="anonymous" 
      {...props} 
    />
  );
};
