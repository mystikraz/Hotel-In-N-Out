import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  BedDouble, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Wifi, 
  MapPin, 
  Clock, 
  Car,
  ChevronDown
} from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { getHotelHeroImage } from '../data/hotelImages';
import { Currency } from '../types';
import { formatPrice, getDefaultDates, getNightsBetween } from '../utils/formatters';

interface HeroProps {
  currency: Currency;
  onOpenBookingModal: (prefill?: { roomId?: string; checkIn?: string; checkOut?: string; guests?: number }) => void;
}

export const Hero: React.FC<HeroProps> = ({ currency, onOpenBookingModal }) => {
  const initialDates = getDefaultDates();
  const [checkIn, setCheckIn] = useState(initialDates.checkIn);
  const [checkOut, setCheckOut] = useState(initialDates.checkOut);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[0].id);
  const [guestsCount, setGuestsCount] = useState(2);

  const heroImage = getHotelHeroImage();
  const nights = getNightsBetween(checkIn, checkOut);
  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];
  const estimatedCost = selectedRoom.priceNPR * nights;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      roomId: selectedRoomId,
      checkIn,
      checkOut,
      guests: guestsCount
    });
  };

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white min-h-[85vh] flex items-center">
      {/* Optimized Background Image with Authorized Exterior Hotel Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/65" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-20 md:pt-20 md:pb-28 w-full">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.5 Google Verified Property</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-stone-300 text-xs font-medium backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Machhapokhari Ring Road, Balaju</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-stone-300 text-xs font-medium backdrop-blur-xs hidden sm:inline-flex">
            <Car className="w-3.5 h-3.5 text-stone-400" />
            <span>Free On-Site Parking & Elevator</span>
          </span>
        </motion.div>

        {/* Main Headline & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-4"
        >
          <div className="text-amber-400 font-medium text-base sm:text-lg tracking-wider uppercase">
            Hotel In N Out
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-100 leading-tight">
            Balaju, Kathmandu, Nepal
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
            Welcome to Hotel In N Out. Experience modern comfort, warm Nepalese hospitality, 24-hour reception, on-site dining, and tranquil soundproof rooms conveniently situated on Machhapokhari Ring Road with easy access to Thamel, Swayambhunath, and the airport.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              id="hero-book-stay-cta"
              onClick={() => onOpenBookingModal()}
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-amber-600/30 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
            <a
              id="hero-view-rooms-cta"
              href="#rooms"
              className="px-6 py-3 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-100 border border-stone-700 text-sm font-semibold transition-all flex items-center gap-2"
            >
              <BedDouble className="w-4 h-4 text-amber-400" />
              <span>View Rooms</span>
            </a>
          </div>
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8 pt-6 border-t border-stone-800/80 max-w-4xl text-xs text-stone-300"
        >
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-amber-400 shrink-0" />
            <span>High-Speed Optical Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>24/7 Front Desk & Check-in</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Secure On-Site Free Parking</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Direct Pay-at-Hotel Option</span>
          </div>
        </motion.div>

        {/* Interactive Availability & Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 bg-white text-stone-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-stone-100 max-w-5xl"
        >
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                Check Availability & Reserve Online
              </span>
            </div>
            <div className="text-xs text-stone-500 hidden sm:block">
              Best Direct Rate Guarantee • No Booking Charges
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Check-In */}
            <div className="space-y-1">
              <label htmlFor="hero-checkin" className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                Check-in Date
              </label>
              <input
                id="hero-checkin"
                type="date"
                value={checkIn}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-sm font-medium border border-stone-300 rounded-lg px-3 py-2 text-stone-800 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            {/* Check-Out */}
            <div className="space-y-1">
              <label htmlFor="hero-checkout" className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                Check-out ({nights} {nights === 1 ? 'night' : 'nights'})
              </label>
              <input
                id="hero-checkout"
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-sm font-medium border border-stone-300 rounded-lg px-3 py-2 text-stone-800 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            {/* Room Selection */}
            <div className="space-y-1">
              <label htmlFor="hero-room" className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-stone-400" />
                Room Category
              </label>
              <select
                id="hero-room"
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full text-sm font-medium border border-stone-300 rounded-lg px-3 py-2 text-stone-800 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({formatPrice(r.priceNPR, currency)}/nt)
                  </option>
                ))}
              </select>
            </div>

            {/* Guests Count */}
            <div className="space-y-1">
              <label htmlFor="hero-guests" className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-stone-400" />
                Guests
              </label>
              <select
                id="hero-guests"
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full text-sm font-medium border border-stone-300 rounded-lg px-3 py-2 text-stone-800 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests (Family)</option>
              </select>
            </div>

            {/* Submit CTA */}
            <div className="flex flex-col justify-end">
              <button
                id="hero-search-availability-btn"
                type="submit"
                className="w-full py-2.5 px-4 bg-stone-900 hover:bg-amber-900 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </form>

          {/* Rate Summary Indicator */}
          <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between text-xs text-stone-600">
            <div>
              <span>Estimated stay for </span>
              <strong className="text-stone-900">{nights} {nights === 1 ? 'night' : 'nights'}</strong>:
              <span className="ml-1 text-sm font-bold text-amber-800">{formatPrice(estimatedCost, currency)}</span>
              <span className="text-stone-500 ml-1">(Inclusive of government taxes)</span>
            </div>
            <div className="text-emerald-700 font-medium">
              ✓ Free cancellation up to 24 hours prior to check-in
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
