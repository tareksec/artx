import { useState, useEffect, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight, Video as VideoIcon } from "lucide-react";

interface AutoMediaPreviewProps {
  image?: string;
  images?: string[];
  video?: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  interval?: number;
  showDots?: boolean;
  enableHoverPause?: boolean;
}

export function AutoMediaPreview({
  image,
  images,
  video,
  alt,
  aspectRatio = "aspect-[4/3]",
  className = "",
  interval = 3500,
  showDots = true,
  enableHoverPause = true,
}: AutoMediaPreviewProps) {
  // Normalize image list
  const allImages = images && images.length > 0 ? images : image ? [image] : [];
  const hasMultipleImages = allImages.length > 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide effect for multiple images
  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasMultipleImages, isPaused, allImages.length, interval]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  // If video is provided, render autoplaying looping video
  if (video) {
    return (
      <div className={`relative ${aspectRatio} w-full overflow-hidden bg-neutral-950 ${className}`}>
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />

        {/* Live Video Indicator Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-emerald-400 border border-emerald-500/30 shadow-sm pointer-events-none">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Video</span>
        </div>
      </div>
    );
  }

  // If multiple images, render smooth auto-slider
  if (hasMultipleImages) {
    return (
      <div
        className={`relative ${aspectRatio} w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 group/slider ${className}`}
        onMouseEnter={() => enableHoverPause && setIsPaused(true)}
        onMouseLeave={() => enableHoverPause && setIsPaused(false)}
      >
        {/* Images Layer */}
        {allImages.map((imgSrc, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={imgSrc}
              alt={`${alt} - slide ${idx + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Multi-image count badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/10 shadow-sm pointer-events-none">
          <span>{currentIndex + 1}</span>
          <span className="text-white/50">/</span>
          <span>{allImages.length}</span>
        </div>

        {/* Prev / Next controls on hover */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/90 shadow-md"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/90 shadow-md"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Slide Indicator Dots */}
        {showDots && allImages.length <= 8 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md pointer-events-auto">
            {allImages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(dotIdx);
                }}
                aria-label={`Jump to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === currentIndex
                    ? "w-4 h-1.5 bg-[#f95738]"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Single static image
  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 ${className}`}>
      {allImages[0] ? (
        <img
          src={allImages[0]}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center text-xs text-muted-foreground">
          No Preview Available
        </div>
      )}
    </div>
  );
}
