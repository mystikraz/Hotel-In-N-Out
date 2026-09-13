import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Images, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  BedDouble, 
  Utensils, 
  Calendar,
  Eye,
  Building,
  Coffee,
  ShieldCheck,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../data/galleryData';
import { HotelImage } from '../types';

interface GallerySectionProps {
  onBookNow?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookNow }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Filter images based on active tab
  const filteredImages: HotelImage[] = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => {
        if (activeCategory === 'rooms') {
          return (
            img.category === 'rooms' ||
            img.category === 'deluxe-rooms' ||
            img.category === 'twin-rooms' ||
            img.category === 'family-rooms'
          );
        }
        return img.category === activeCategory;
      });

  // Lightbox handlers
  const openLightbox = (image: HotelImage) => {
    const idx = filteredImages.findIndex((img) => img.id === image.id);
    if (idx !== -1) {
      setSelectedImageIndex(idx);
      setIsZoomed(false);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const showPrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setIsZoomed(false);
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : filteredImages.length - 1;
    });
  }, [selectedImageIndex, filteredImages.length]);

  const showNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setIsZoomed(false);
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev < filteredImages.length - 1 ? prev + 1 : 0;
    });
  }, [selectedImageIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex, showPrev, showNext]);

  const currentImage: HotelImage | null =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  // Helper icon for category
  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'exterior':
        return <Building className="w-3.5 h-3.5" />;
      case 'lobby':
        return <Compass className="w-3.5 h-3.5" />;
      case 'rooms':
      case 'deluxe-rooms':
      case 'twin-rooms':
      case 'family-rooms':
        return <BedDouble className="w-3.5 h-3.5" />;
      case 'restaurant':
        return <Utensils className="w-3.5 h-3.5" />;
      case 'bar':
        return <Coffee className="w-3.5 h-3.5" />;
      case 'facilities':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      default:
        return <Images className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5 text-amber-700" />
            <span>Authorized Photo Gallery</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            Hotel In N Out Gallery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Authentic photographs of our building exterior, 24/7 lobby, deluxe rooms, twin guest rooms, family apartments, dining restaurant, and on-site parking on Machhapokhari Ring Road, Balaju, Kathmandu.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {GALLERY_CATEGORIES.map((category) => {
            const count = category.id === 'all'
              ? GALLERY_IMAGES.length
              : GALLERY_IMAGES.filter((img) => {
                  if (category.id === 'rooms') {
                    return (
                      img.category === 'rooms' ||
                      img.category === 'deluxe-rooms' ||
                      img.category === 'twin-rooms' ||
                      img.category === 'family-rooms'
                    );
                  }
                  return img.category === category.id;
                }).length;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{category.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive
                      ? 'bg-stone-800 text-amber-400'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid Layout with Proper Aspect Ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredImages.map((image, index) => {
            const isSpan2 = activeCategory === 'all' && (index === 0 || index === 4 || index === 8);

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => openLightbox(image)}
                className={`group relative rounded-2xl overflow-hidden bg-stone-900 shadow-xs border border-stone-200/60 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isSpan2 ? 'sm:col-span-2 lg:col-span-2 sm:aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                {/* Background Image */}
                <img
                  src={image.thumbnailSrc || image.src}
                  alt={image.alt}
                  loading="lazy"
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge: Category / Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-xs text-amber-400 border border-stone-700/60">
                    {image.tag || image.categoryLabel}
                  </span>
                </div>

                {/* Top Right Zoom Icon Button */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-stone-900/85 backdrop-blur-xs text-white flex items-center justify-center border border-white/20 shadow-md">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 transition-transform duration-300">
                  <h3 className="font-serif text-white font-bold text-base sm:text-lg drop-shadow-sm">
                    {image.title}
                  </h3>
                  <p className="text-stone-300 text-xs mt-1 line-clamp-1 group-hover:line-clamp-2 transition-all drop-shadow-xs">
                    {image.description}
                  </p>

                  <div className="mt-2.5 flex items-center gap-1.5 text-amber-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View full photo & details</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Experience Hotel In N Out in Person
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              Authentic Nepali hospitality, comfortable rooms, on-site restaurant & bar, and convenient Ring Road connectivity in Balaju, Kathmandu.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onBookNow && (
              <button
                onClick={onBookNow}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-amber-900 text-white text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Reserve Room Now</span>
              </button>
            )}
            <a
              href="#rooms"
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors border border-stone-300"
            >
              View Room Rates
            </a>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.title}
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between"
          onClick={closeLightbox}
        >
          {/* Lightbox Top Bar */}
          <div
            className="p-4 sm:px-6 flex items-center justify-between text-white border-b border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-mono px-2.5 py-1 rounded-md bg-stone-800 border border-stone-700 text-amber-400">
                {currentImage.tag || currentImage.categoryLabel}
              </span>
              <span className="text-xs text-stone-400">
                Photo {selectedImageIndex + 1} of {filteredImages.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                aria-label={isZoomed ? 'Zoom Out' : 'Zoom In'}
                className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors cursor-pointer border border-stone-700 hidden sm:flex"
                title={isZoomed ? 'Reset zoom' : 'Zoom image'}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>
              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox (Esc)"
                className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors cursor-pointer border border-stone-700"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Photo Display Area */}
          <div
            className="relative flex-1 flex items-center justify-center p-4 sm:p-8 min-h-0 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={showPrev}
              aria-label="Previous Photo (Left Arrow)"
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-white transition-colors cursor-pointer border border-white/20 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              aria-label="Next Photo (Right Arrow)"
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-white transition-colors cursor-pointer border border-white/20 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Container */}
            <div className={`flex flex-col items-center justify-center transition-all duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'max-w-5xl max-h-full cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                key={currentImage.id}
                src={currentImage.src}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-h-[66vh] max-w-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 select-none"
              />
            </div>
          </div>

          {/* Bottom Information & Thumbnails Bar */}
          <div
            className="p-4 sm:p-6 bg-stone-900/95 border-t border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-serif text-white font-bold text-base sm:text-lg">
                  {currentImage.title}
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {currentImage.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-stone-400 font-mono">
                  <span>Source: {currentImage.source}</span>
                  <span>•</span>
                  <span>{currentImage.license}</span>
                  <span>•</span>
                  <span>{currentImage.width}×{currentImage.height}px</span>
                </div>
              </div>

              {/* Quick Thumbnail Carousel */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full shrink-0">
                {filteredImages.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    onClick={() => {
                      setSelectedImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    title={thumb.title}
                    className={`w-12 h-10 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      idx === selectedImageIndex
                        ? 'border-amber-400 scale-105 opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={thumb.thumbnailSrc || thumb.src}
                      alt={thumb.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
