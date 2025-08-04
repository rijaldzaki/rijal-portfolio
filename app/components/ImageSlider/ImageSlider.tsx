"use client";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  alt?: string;
  interval?: number; // ms
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  alt = "",
  interval = 3500,
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length, interval]);

  const goTo = (idx: number) => setCurrent(idx);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200 mb-4 select-none">
      <img
        src={images[current]}
        alt={alt}
        className="object-cover w-full h-full transition-all duration-500"
        draggable={false}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-black rounded-full w-10 h-10 flex items-center justify-center shadow focus:outline-none"
            aria-label="Previous"
            type="button"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-black rounded-full w-10 h-10 flex items-center justify-center shadow focus:outline-none"
            aria-label="Next"
            type="button"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  current === idx ? "bg-blue-400" : "bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
