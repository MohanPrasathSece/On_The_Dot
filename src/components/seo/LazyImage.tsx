import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const LazyImage = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <Suspense 
      fallback={
        <div className={`flex items-center justify-center bg-muted ${className}`}>
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      }
    >
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </Suspense>
  );
};

export default LazyImage;
