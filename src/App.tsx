import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { GallerySection } from './components/GallerySection';
import { RoomDetailModal } from './components/RoomDetailModal';
import { BookingModal } from './components/BookingModal';
import { BookingLookupModal } from './components/BookingLookupModal';
import { AmenitiesSection } from './components/AmenitiesSection';
import { DiningSection } from './components/DiningSection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Currency, Room, BookingDetails } from './types';
import { HOTEL_INFO } from './data/hotelData';
import { MessageCircle, Phone, ArrowUp, Calendar } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('NPR');
  const [activeRoomDetail, setActiveRoomDetail] = useState<Room | null>(null);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  // Lookup Modal State
  const [lookupModalOpen, setLookupModalOpen] = useState(false);

  // Success Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'NPR' ? 'USD' : 'NPR'));
  };

  const handleOpenBooking = (prefill?: {
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }) => {
    if (prefill) {
      setBookingPrefill(prefill);
    } else {
      setBookingPrefill({});
    }
    setBookingModalOpen(true);
  };

  const handleBookingSuccess = (booking: BookingDetails) => {
    setToastMessage(`Booking ${booking.referenceNumber} confirmed for ${booking.guestName}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-800 selection:bg-amber-100 selection:text-amber-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-stone-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-amber-500/50 flex items-center gap-3 text-xs sm:text-sm animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-stone-400 hover:text-white text-xs ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        onOpenBookingModal={(roomId) => handleOpenBooking({ roomId })}
        onOpenLookupModal={() => setLookupModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          currency={currency}
          onOpenBookingModal={handleOpenBooking}
        />

        <RoomsSection
          currency={currency}
          onSelectRoomDetails={(room) => setActiveRoomDetail(room)}
          onBookRoom={(roomId) => handleOpenBooking({ roomId })}
        />

        <GallerySection onBookNow={() => handleOpenBooking()} />

        <AmenitiesSection />

        <DiningSection currency={currency} />

        <LocationSection />

        <ReviewsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5 items-end">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white text-stone-700 hover:text-stone-900 shadow-md border border-stone-200 transition-all hover:scale-105 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp.replace('+', '')}?text=Hello%20In%20%26%20Out%20Hotel%2C%20I%20have%20an%20inquiry%20regarding%20booking.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-transform hover:scale-105 cursor-pointer text-xs font-semibold"
          aria-label="Chat with In and Out Hotel on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        {/* Mobile Quick Book Button */}
        <button
          onClick={() => handleOpenBooking()}
          className="sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg transition-transform hover:scale-105 cursor-pointer text-xs font-semibold"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={activeRoomDetail}
        currency={currency}
        onClose={() => setActiveRoomDetail(null)}
        onBookRoom={(roomId) => {
          setActiveRoomDetail(null);
          handleOpenBooking({ roomId });
        }}
      />

      {/* Booking Engine Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currency={currency}
        prefillRoomId={bookingPrefill.roomId}
        prefillCheckIn={bookingPrefill.checkIn}
        prefillCheckOut={bookingPrefill.checkOut}
        prefillGuests={bookingPrefill.guests}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Booking Lookup Modal */}
      <BookingLookupModal
        isOpen={lookupModalOpen}
        onClose={() => setLookupModalOpen(false)}
        currency={currency}
      />
    </div>
  );
}
