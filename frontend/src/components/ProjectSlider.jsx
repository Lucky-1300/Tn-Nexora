import React, { useEffect, useState } from 'react';

export default function ProjectSlider({ images = [], altPrefix = 'Project image', initialIndex = 0, maxHeight }) {
  const [index, setIndex] = useState(initialIndex || 0);
  const len = images?.length || 0;

  useEffect(() => {
    setIndex(initialIndex || 0);
  }, [images]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % len);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + len) % len);
    }
    if (len > 0) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [len]);

  if (len === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  return (
    <div className="relative">
      <div
        className={`overflow-hidden rounded-lg bg-gray-100 dark:bg-[#071022]`}
        style={maxHeight ? { maxHeight: maxHeight, overflow: 'hidden' } : {}}
      >
        <img
          src={images[index]}
          alt={`${altPrefix} ${index + 1}`}
          className="w-full h-auto block object-contain"
          loading="lazy"
        />
      </div>

      {/* Prev/Next */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow hover:scale-105 transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow hover:scale-105 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-orange-600' : 'bg-gray-300 dark:bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
}
