import React, { useState, useEffect } from 'react';

interface EmbeddableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const EmbeddableImage: React.FC<EmbeddableImageProps> = ({ src, alt, style, ...props }) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const convertLocalToBase64 = async () => {
      // If it's already a data URL, do nothing
      if (src.startsWith('data:')) {
        setImgSrc(src);
        setIsLoaded(true);
        return;
      }

      try {
        // Fetch the local file
        const response = await fetch(src);
        const blob = await response.blob();
        
        const reader = new FileReader();
        reader.onloadend = () => {
          if (isMounted && reader.result) {
            setImgSrc(reader.result as string);
            setIsLoaded(true);
          }
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.warn('Failed to embed local image:', src, error);
        if (isMounted) {
            setImgSrc(src); // Fallback
            setIsLoaded(true);
        }
      }
    };

    convertLocalToBase64();

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      // Important: No crossOrigin needed for data URLs, but good for fallback
      crossOrigin="anonymous" 
      style={{ 
        ...style, 
        // Ensure it doesn't pop in weirdly, but for export we want it visible immediately
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.2s'
      }}
      {...props} 
    />
  );
};
