import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Menu, X, Calendar, Search, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { Currency } from '../types';
import { HotelLogo } from './HotelLogo';

interface NavbarProps {
  currency: Currency;
  onToggleCurrency: () => void;
  onOpenBookingModal: (roomId?: string) => void;
  onOpenLookupModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  onOpenBookingModal,
  onOpenLookupModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Rooms & Suites', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Restaurant & Café', href: '#dining' },
    { label: 'Kathmandu Guide', href: '#location' },
    { label: 'Guest Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Contact Strip */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Machhapokhari Ring Road, Balaju</span>
              <span className="hidden sm:inline text-stone-500">•</span>
              <span className="hidden sm:inline text-stone-400">Kathmandu, Nepal</span>
            </span>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="hidden md:flex items-center gap-1 text-stone-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.5/5 on Google Reviews ({HOTEL_INFO.reviewCount})</span>
            </a>
            <span className="text-stone-700">|</span>
            {/* Currency Switcher */}
            <button
              id="currency-toggle-btn"
              onClick={onToggleCurrency}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors border border-stone-700 text-xs font-semibold cursor-pointer"
              title="Switch currency between Nepali Rupee (NPR) and US Dollars (USD)"
            >
              <span>Currency:</span>
              <span className="text-amber-400">{currency}</span>
            </button>
            {/* Lookup Reservation */}
            <button
              id="my-booking-btn"
              onClick={onOpenLookupModal}
              className="hidden sm:flex items-center gap-1 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3 text-amber-400" />
              <span>My Booking</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-200'
            : 'bg-white py-4 border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Hotel Identity */}
          <a href="#" className="flex items-center group">
            <HotelLogo variant="full" theme="light" size="md" subtitle="Machhapokhari Ring Road, Balaju" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-800 transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp.replace('+', '')}?text=Hello%20In%20%26%20Out%20Hotel,%20I%20would%20like%20to%20inquire%20about%20a%20room%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp</span>
            </a>

            <button
              id="navbar-book-now-btn"
              onClick={() => onOpenBookingModal()}
              className="px-4 py-2 text-sm font-semibold text-white bg-stone-900 hover:bg-amber-900 active:scale-95 transition-all duration-150 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book a Room</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-5 py-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLookupModal();
              }}
              className="w-full py-2.5 text-sm font-medium text-stone-700 bg-stone-100 rounded-lg flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-stone-500" />
              <span>Find My Booking by Reference ID</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-amber-900 rounded-lg shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book a Room Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
