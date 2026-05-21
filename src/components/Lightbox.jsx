import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, images, currentIndex, setCurrentIndex }) {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    // Reset zoom and rotation when image changes or lightbox opens
    setScale(1);
    setRotate(0);
  }, [currentIndex, isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.75));
  const rotateImg = () => setRotate((prev) => (prev + 90) % 365);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md transition-all duration-300">
      
      {/* Lightbox Top Control Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/60 to-transparent relative z-10">
        <div className="text-white">
          <span className="inline-block px-2.5 py-0.5 bg-brand-light text-white text-xs font-bold rounded-full uppercase tracking-wider mb-1">
            {currentImage.category}
          </span>
          <h3 className="text-sm md:text-base font-bold text-slate-100 font-heading">{currentImage.title}</h3>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={zoomIn}
            className="p-2 rounded-lg text-slate-350 hover:text-white hover:bg-white/10 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={zoomOut}
            className="p-2 rounded-lg text-slate-350 hover:text-white hover:bg-white/10 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={rotateImg}
            className="p-2 rounded-lg text-slate-350 hover:text-white hover:bg-white/10 transition-colors"
            title="Rotate"
          >
            <RotateCw className="w-5 h-5" />
          </button>
          <a
            href={currentImage.src}
            download={currentImage.title.toLowerCase().replace(/ /g, '_')}
            className="p-2 rounded-lg text-slate-350 hover:text-white hover:bg-white/10 transition-colors"
            title="Download Image"
          >
            <Download className="w-5 h-5" />
          </a>
          <div className="w-px h-6 bg-white/20 mx-1"></div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-350 hover:text-white hover:bg-white/25 bg-white/5 transition-all"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Slider Viewport */}
      <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden select-none">
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white hover:scale-105 transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white hover:scale-105 transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Dynamic Canvas Image */}
        <div className="max-w-[90vw] max-h-[75vh] flex items-center justify-center transition-all duration-300">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-all duration-200"
            style={{
              transform: `scale(${scale}) rotate(${rotate}deg)`,
              pointerEvents: scale > 1 ? 'auto' : 'none',
            }}
          />
        </div>
      </div>

      {/* Lightbox Thumbnails & Page Counter Bar */}
      <div className="p-6 bg-gradient-to-t from-black/80 to-transparent relative z-10 text-center">
        <div className="text-slate-450 font-bold text-xs mb-4">
          Image {currentIndex + 1} of {images.length}
        </div>
        
        {/* Thumbnails Navigation Row */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-2xl mx-auto px-4 py-2 bg-black/20 rounded-xl">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                idx === currentIndex ? 'border-brand-accent scale-105 ring-2 ring-brand-light/35' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
