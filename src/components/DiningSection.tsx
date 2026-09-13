import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Clock, Heart, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data/hotelData';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface DiningSectionProps {
  currency: Currency;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ currency }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'nepali' | 'main' | 'breakfast' | 'beverages'>('all');

  const filteredItems = activeTab === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="dining" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Culinary Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            Hotel In N Out Restaurant & Bar
          </h2>
          <p className="text-stone-600 text-base mt-3 leading-relaxed">
            Savor freshly prepared meals using organic vegetables and spices sourced from the Kathmandu valley. From steaming hot momos to wholesome Dal Bhat and rich Himalayan pour-over coffee.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              All Specials
            </button>
            <button
              onClick={() => setActiveTab('nepali')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'nepali'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Nepali & Newari
            </button>
            <button
              onClick={() => setActiveTab('main')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'main'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Indian & Curries
            </button>
            <button
              onClick={() => setActiveTab('breakfast')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'breakfast'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Himalayan Breakfast
            </button>
            <button
              onClick={() => setActiveTab('beverages')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'beverages'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Himalayan Coffee & Tea
            </button>
          </div>
        </motion.div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-xs flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:border-amber-400/50 transition-all group"
            >
              {item.image && (
                <div className="relative w-full sm:w-28 h-36 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.popular && (
                    <span className="absolute top-1.5 left-1.5 bg-amber-500 text-stone-950 font-bold text-[9px] uppercase px-1.5 py-0.5 rounded">
                      Chef Choice
                    </span>
                  )}
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-900 transition-colors">
                      {item.name}
                    </h4>
                    {item.nepaliName && (
                      <span className="text-xs text-amber-800 font-medium">{item.nepaliName}</span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-stone-900">
                      {formatPrice(item.priceNPR, currency)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  {item.dietary === 'veg' && (
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Vegetarian
                    </span>
                  )}
                  {item.dietary === 'non-veg' && (
                    <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Non-Veg
                    </span>
                  )}
                  {item.dietary === 'vegan' && (
                    <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      100% Plant-Based
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Hours Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 p-5 rounded-2xl bg-white border border-stone-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>
              <strong>Dining Service Hours:</strong> 7:00 AM – 10:00 PM Daily • In-Room Dining Available
            </span>
          </div>
          <div className="text-stone-500">
            * Custom dietary requirements (gluten-free, Jain, halal options) accommodated upon request.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
