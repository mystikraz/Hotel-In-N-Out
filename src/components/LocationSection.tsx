import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Plane, Car, Clock, ExternalLink, ShieldCheck, Bus, Compass } from 'lucide-react';
import { HOTEL_INFO, NEARBY_ATTRACTIONS } from '../data/hotelData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Prime Kathmandu Location</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            Hotel In N Out Location & Surroundings
          </h2>
          <p className="text-stone-600 text-base mt-3 leading-relaxed">
            Conveniently situated on the Machhapokhari Ring Road in Balaju, Kathmandu. Enjoy effortless connectivity along the Ring Road without the congestion of central tourist districts, while remaining only 10 minutes from Thamel and Swayambhunath.
          </p>
        </motion.div>

        {/* Map & Guide Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map Frame & Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Hotel In N Out
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                    Machhapokhari Ring Road, Balaju, Kathmandu 44600, Nepal
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    350 meters from Balaju Chowk bus stop • 500 meters from historic Balaju Water Garden • 3 km to Thamel & Swayambhunath Stupa.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Maps */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  id="location-get-directions-btn"
                  href={HOTEL_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-95"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
                </a>

                <a
                  id="location-google-maps-btn"
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>View on Google Travel</span>
                </a>
              </div>

              {/* Transit Advice & Balaju Context */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 text-xs text-stone-700">
                  <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                    <Bus className="w-4 h-4 text-amber-700" />
                    <span>Machhapokhari Bus Terminal & Transit Hub</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed text-[11px]">
                    Located just 350 meters from Balaju Chowk and Machhapokhari bus stop, offering direct bus connections to Trishuli, Pokhara highway transit, and regular city buses across the Kathmandu Ring Road.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 text-xs text-stone-700">
                  <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                    <Plane className="w-4 h-4 text-amber-700" />
                    <span>Airport Transit (TIA - 9.8 km)</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed text-[11px]">
                    Direct vehicular access via the outer Ring Road avoiding central downtown traffic bottlenecks. Typical travel time is roughly 25 minutes. Private pre-booked transfers available upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Visual Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 h-72 relative bg-stone-100 shadow-xs">
              <iframe
                title="Hotel In N Out Machhapokhari Ring Road Balaju Kathmandu Map"
                src="https://maps.google.com/maps?q=Machhapokhari%20Ring%20Road%2C%20Balaju%2C%20Kathmandu%2C%20Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-[10px] text-stone-800 font-medium border border-stone-200 shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-amber-600" />
                <span>Hotel In N Out • Balaju, Kathmandu</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Kathmandu Attractions */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Nearby Attractions & Travel Distances
              </h3>
              <span className="text-xs text-stone-500">
                Verified Kathmandu Route Distances
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {NEARBY_ATTRACTIONS.map((attraction) => (
                <div
                  key={attraction.id}
                  className="bg-stone-50 hover:bg-white border border-stone-200 rounded-xl p-4 transition-all duration-200 hover:shadow-sm space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif font-bold text-sm text-stone-900 leading-snug">
                      {attraction.name}
                    </h4>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-amber-100/70 border border-amber-200 text-amber-900 text-[10px] font-bold font-mono">
                      {attraction.distanceKm} km
                    </span>
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed">
                    {attraction.description}
                  </p>

                  <div className="flex items-center gap-3 pt-1 text-[11px] text-stone-500">
                    <span className="flex items-center gap-1 text-amber-800 font-semibold">
                      <Clock className="w-3 h-3" />
                      <span>~{attraction.driveTimeMin} mins</span>
                    </span>
                    <span>•</span>
                    <span className="capitalize">{attraction.category}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Travel Assistance Callout */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <strong className="text-amber-950 block">Need a local taxi or airport pickup?</strong>
                <span className="text-amber-900/80">
                  Our front desk coordinates reliable on-call taxis and tour vehicles with upfront fixed pricing.
                </span>
              </div>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp.replace('+', '')}?text=Hello%20Hotel%20In%20N%20Out,%20can%20you%20help%20me%20with%20travel%20directions%20and%20taxi%20booking%20to%20Balaju?`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shrink-0 text-center transition-colors"
              >
                Inquire via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
