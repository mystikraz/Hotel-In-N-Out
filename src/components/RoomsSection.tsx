import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Users, Maximize2, Check, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { Room, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface RoomsSectionProps {
  currency: Currency;
  onSelectRoomDetails: (room: Room) => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  currency,
  onSelectRoomDetails,
  onBookRoom
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Rooms (${ROOMS.length})` },
    { id: 'deluxe', label: 'Deluxe Double' },
    { id: 'twin', label: 'Deluxe Twin' },
    { id: 'apartment', label: 'Deluxe Apartment' },
    { id: 'family', label: 'Family Room' },
    { id: 'standard', label: 'Standard Room' },
    { id: 'executive', label: 'Executive Room' },
  ];

  const filteredRooms = activeCategory === 'all'
    ? ROOMS
    : ROOMS.filter((r) => r.category === activeCategory);

  return (
    <section id="rooms" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Guest Accommodations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            Rooms & Suites at Hotel In N Out
          </h2>
          <p className="text-stone-600 text-base mt-3 leading-relaxed">
            All rooms at Hotel In N Out feature double-glazed soundproof windows to shut out Ring Road traffic, high-speed fiber Wi-Fi, air conditioning, daily housekeeping, and 24/7 hot showers.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-stone-900">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                {/* Popular Badge */}
                {room.popular && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Guest Favorite</span>
                  </div>
                )}

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 shadow-sm flex items-baseline gap-1">
                  <span className="text-xs font-medium text-stone-500">from</span>
                  <span className="text-base font-bold text-amber-800">
                    {formatPrice(room.priceNPR, currency)}
                  </span>
                  <span className="text-[11px] text-stone-500">/night</span>
                </div>

                {/* Quick Spec Icons */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs font-medium drop-shadow-sm">
                  <span className="flex items-center gap-1 bg-stone-900/75 px-2 py-1 rounded-md">
                    <Users className="w-3 h-3 text-amber-400" />
                    <span>Up to {room.maxGuests}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-stone-900/75 px-2 py-1 rounded-md">
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>{room.sizeSqFt} sq ft</span>
                  </span>
                </div>
              </div>

              {/* Room Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                    <BedDouble className="w-3.5 h-3.5" />
                    <span>{room.bedType}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                    {room.name}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-stone-100 text-xs text-stone-700">
                    {room.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-stone-100 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectRoomDetails(room)}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onBookRoom(room.id)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
