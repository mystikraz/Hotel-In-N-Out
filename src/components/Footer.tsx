import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Star, ExternalLink, Heart } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { HotelLogo } from './HotelLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <HotelLogo variant="full" theme="dark" size="md" subtitle="Machhapokhari Ring Road • Balaju" />

            <p className="text-stone-400 text-xs leading-relaxed">
              Warm Nepalese hospitality, comfortable modern rooms, authentic dining, and convenient Ring Road connectivity on Machhapokhari Ring Road, Balaju, Kathmandu.
            </p>

            <div className="flex items-center gap-2 text-amber-400 font-medium">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.5 / 5 Rating on Google Travel ({HOTEL_INFO.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition-colors">
                  Hotel Facilities & Services
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-400 transition-colors">
                  Restaurant & Rooftop Café Menu
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Kathmandu & Balaju Guide
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Guest Reviews & Ratings
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Reception Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Direct Desk */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Hotel Reception
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {HOTEL_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white">
                  {HOTEL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Listing Link */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Google Listing
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Find us on Google Travel and Google Maps for navigation and genuine guest photo uploads.
            </p>
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-medium text-xs transition-colors border border-stone-700"
            >
              <span>View on Google Travel</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
            <div className="text-[11px] text-stone-500 pt-1">
              Check-in: 14:00 • Check-out: 12:00
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Hotel In N Out, Balaju, Kathmandu, Nepal. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Atithi Devo Bhava (अतिथि देवो भव)</span>
            <span>•</span>
            <span>Kathmandu, Bagmati Province, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
