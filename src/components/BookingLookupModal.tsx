import React, { useState, useEffect } from 'react';
import { X, Search, Calendar, User, Phone, CheckCircle, BedDouble, AlertCircle } from 'lucide-react';
import { BookingDetails, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { HotelLogo } from './HotelLogo';

interface BookingLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const BookingLookupModal: React.FC<BookingLookupModalProps> = ({
  isOpen,
  onClose,
  currency
}) => {
  const [query, setQuery] = useState('');
  const [savedBookings, setSavedBookings] = useState<BookingDetails[]>([]);
  const [searchResult, setSearchResult] = useState<BookingDetails | null>(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (isOpen) {
      try {
        const list = JSON.parse(localStorage.getItem('inandout_bookings') || '[]');
        setSavedBookings(list);
        if (list.length > 0 && !query) {
          setSearchResult(list[0]);
          setSearched(true);
        }
      } catch {
        setSavedBookings([]);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const cleanQuery = query.trim().toLowerCase();
    const found = savedBookings.find(
      (b) =>
        b.referenceNumber.toLowerCase().includes(cleanQuery) ||
        b.guestEmail.toLowerCase().includes(cleanQuery) ||
        b.guestPhone.includes(cleanQuery)
    );
    setSearchResult(found || null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3.5">
            <HotelLogo variant="mark" size="sm" />
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                In N Out HOTEL • Kathmandu
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Retrieve Your Reservation
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Booking Reference (e.g. IOH-KTM-...) or Email"
                className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 border border-stone-300 rounded-lg bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 bg-stone-900 hover:bg-amber-900 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>

          {searched && searchResult && (
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider">Reference</span>
                  <div className="font-mono font-bold text-amber-900 text-sm">{searchResult.referenceNumber}</div>
                </div>
                <div className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Confirmed
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-stone-700">
                <div>
                  <span className="text-stone-500 block">Guest Name:</span>
                  <strong className="text-stone-900">{searchResult.guestName}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block">Room:</span>
                  <strong className="text-stone-900">{searchResult.roomName}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block">Check-in:</span>
                  <span>{searchResult.checkIn}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Check-out:</span>
                  <span>{searchResult.checkOut} ({searchResult.nights} nights)</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Total Due:</span>
                  <strong className="text-amber-900">{formatPrice(searchResult.totalNPR, currency)}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block">Payment:</span>
                  <span>Pay on arrival</span>
                </div>
              </div>
            </div>
          )}

          {searched && !searchResult && (
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>No reservation found</strong>
                <p className="mt-0.5 text-amber-800">
                  We could not find a booking matching "{query}". Please check your reference code or contact hotel reception directly at +977 1-4782910.
                </p>
              </div>
            </div>
          )}

          {savedBookings.length > 0 && !searched && (
            <div className="text-xs text-stone-500">
              <span>You have {savedBookings.length} active booking(s) saved on this browser.</span>
            </div>
          )}

          <div className="pt-2 text-right">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
