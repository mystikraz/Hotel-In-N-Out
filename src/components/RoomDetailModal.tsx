import React, { useState } from 'react';
import { X, Check, BedDouble, Users, Maximize2, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Room, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface RoomDetailModalProps {
  room: Room | null;
  currency: Currency;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  currency,
  onClose,
  onBookRoom,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-stone-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Gallery Viewer */}
        <div className="relative h-72 sm:h-96 w-full bg-stone-900">
          <img
            src={room.images[activeImageIndex]}
            alt={`${room.name} image ${activeImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {room.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {room.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'bg-amber-400 w-6' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Hotel In N Out • Balaju, Kathmandu
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                {room.name}
              </h3>
              <p className="text-stone-600 text-sm mt-1">{room.tagline}</p>
            </div>

            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold text-stone-900">
                {formatPrice(room.priceNPR, currency)}
              </div>
              <span className="text-xs text-stone-500">per night (taxes included)</span>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-xl bg-stone-50 border border-stone-200/70 text-center">
            <div>
              <div className="text-xs text-stone-500 flex items-center justify-center gap-1 mb-1">
                <Maximize2 className="w-3.5 h-3.5" /> Room Size
              </div>
              <div className="text-sm font-semibold text-stone-900">{room.sizeSqFt} sq ft</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 flex items-center justify-center gap-1 mb-1">
                <BedDouble className="w-3.5 h-3.5" /> Bed Configuration
              </div>
              <div className="text-sm font-semibold text-stone-900">{room.bedType}</div>
            </div>
            <div>
              <div className="text-xs text-stone-500 flex items-center justify-center gap-1 mb-1">
                <Users className="w-3.5 h-3.5" /> Max Capacity
              </div>
              <div className="text-sm font-semibold text-stone-900">Up to {room.maxGuests} Guests</div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-4 text-stone-700 text-sm leading-relaxed mb-6">
            <h4 className="font-serif font-bold text-stone-900 text-base">Room Overview</h4>
            <p>{room.description}</p>
          </div>

          {/* Room Amenities List */}
          <div className="mb-8">
            <h4 className="font-serif font-bold text-stone-900 text-base mb-3">Room Amenities & Facilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-stone-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-200">
            <div className="text-xs text-stone-500 flex items-center gap-1">
              <span>✓ Instant Booking Confirmation</span>
              <span>•</span>
              <span>Pay at check-in available</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                id={`modal-book-btn-${room.id}`}
                onClick={() => {
                  onClose();
                  onBookRoom(room.id);
                }}
                className="w-1/2 sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Room</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
