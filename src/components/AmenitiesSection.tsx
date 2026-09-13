import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Plane, Utensils, Clock, Flame, Compass, Car, Sparkles, Shield, Coffee } from 'lucide-react';
import { HOTEL_AMENITIES } from '../data/hotelData';

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  Plane,
  Utensils,
  Clock,
  Flame,
  Compass,
  Car,
  Sparkles,
};

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Guest Facilities & Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            Thoughtful Comforts for Every Traveler
          </h2>
          <p className="text-stone-600 text-base mt-3 leading-relaxed">
            Whether arriving after an international flight, preparing for a Himalayan trek, or visiting Kathmandu for business, Hotel In N Out is fully equipped to make your stay effortless.
          </p>
        </motion.div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_AMENITIES.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400/50 hover:bg-amber-50/20 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Banner: Trekkers & Transit Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-2xl bg-stone-900 text-stone-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-white">
                Trekking in Nepal? Free Gear Storage & Early Airport Cabs
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm mt-1">
                Store your heavy duffel bags and city gear in our secure locked storage while you conquer Everest Base Camp, Annapurna, or Langtang.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Inquire Trek Concierge
          </a>
        </motion.div>
      </div>
    </section>
  );
};
