import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Mail, Phone, Plane, CheckCircle2, ShieldCheck, Download, Printer, MessageCircle, ArrowRight, ArrowLeft, BedDouble, Info } from 'lucide-react';
import { HOTEL_INFO, ROOMS, ADDON_OPTIONS } from '../data/hotelData';
import { Currency, BookingDetails } from '../types';
import { formatPrice, getNightsBetween, getDefaultDates } from '../utils/formatters';
import { HotelLogo } from './HotelLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  prefillRoomId?: string;
  prefillCheckIn?: string;
  prefillCheckOut?: string;
  prefillGuests?: number;
  onBookingSuccess?: (booking: BookingDetails) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  prefillRoomId,
  prefillCheckIn,
  prefillCheckOut,
  prefillGuests,
  onBookingSuccess
}) => {
  const defaultDates = getDefaultDates();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [roomId, setRoomId] = useState(prefillRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState(prefillCheckIn || defaultDates.checkIn);
  const [checkOut, setCheckOut] = useState(prefillCheckOut || defaultDates.checkOut);
  const [guestsCount, setGuestsCount] = useState(prefillGuests || 2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Guest details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [flightArrival, setFlightArrival] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pay_at_hotel' | 'online_card' | 'esewa_khalti'>('pay_at_hotel');

  // Completed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  // Sync props when opening modal
  useEffect(() => {
    if (isOpen) {
      if (prefillRoomId) setRoomId(prefillRoomId);
      if (prefillCheckIn) setCheckIn(prefillCheckIn);
      if (prefillCheckOut) setCheckOut(prefillCheckOut);
      if (prefillGuests) setGuestsCount(prefillGuests);
      setStep(1);
      setConfirmedBooking(null);
    }
  }, [isOpen, prefillRoomId, prefillCheckIn, prefillCheckOut, prefillGuests]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];
  const nights = getNightsBetween(checkIn, checkOut);
  const roomCostNPR = selectedRoom.priceNPR * nights;

  // Calculate addons cost
  let addonsCostNPR = 0;
  selectedAddons.forEach((addonId) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    if (!addon) return;
    if (addon.unit === 'per_stay') {
      addonsCostNPR += addon.priceNPR;
    } else if (addon.unit === 'per_night') {
      addonsCostNPR += addon.priceNPR * nights;
    } else if (addon.unit === 'per_person') {
      addonsCostNPR += addon.priceNPR * guestsCount * nights;
    }
  });

  const totalNPR = roomCostNPR + addonsCostNPR;
  const totalUSD = Math.round(totalNPR / HOTEL_INFO.currencyRateUSD);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    const refNum = `IOH-KTM-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: BookingDetails = {
      referenceNumber: refNum,
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      nights,
      roomId: selectedRoom.id,
      roomName: selectedRoom.name,
      guestsCount,
      selectedAddons,
      totalNPR,
      totalUSD,
      paymentMethod,
      specialRequests,
      flightArrival,
      createdAt: new Date().toISOString()
    };

    // Save to local storage for retrieval
    try {
      const existing = JSON.parse(localStorage.getItem('inandout_bookings') || '[]');
      existing.unshift(newBooking);
      localStorage.setItem('inandout_bookings', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setConfirmedBooking(newBooking);
    if (onBookingSuccess) onBookingSuccess(newBooking);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 border border-stone-200">
        {/* Header Bar */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-4">
            <HotelLogo variant="mark" size="sm" />
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                In N Out HOTEL • Online Reservation
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {step === 4 ? 'Booking Confirmed' : 'Reserve Your Stay in Kathmandu'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper indicator (if not step 4) */}
        {step < 4 && (
          <div className="bg-stone-50 border-b border-stone-200 px-6 py-3 flex items-center justify-between text-xs font-semibold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-amber-800' : 'text-stone-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-amber-700 text-white' : 'bg-stone-200 text-stone-600'}`}>
                1
              </span>
              <span>Room & Dates</span>
            </div>
            <div className="h-0.5 w-8 bg-stone-200" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-amber-800' : 'text-stone-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-amber-700 text-white' : 'bg-stone-200 text-stone-600'}`}>
                2
              </span>
              <span>Perks & Addons</span>
            </div>
            <div className="h-0.5 w-8 bg-stone-200" />
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-amber-800' : 'text-stone-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-amber-700 text-white' : 'bg-stone-200 text-stone-600'}`}>
                3
              </span>
              <span>Guest Details</span>
            </div>
          </div>
        )}

        {/* STEP 1: ROOM & DATES */}
        {step === 1 && (
          <div className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Check-in Date</label>
                <input
                  type="date"
                  value={checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full text-sm border border-stone-300 rounded-lg p-2.5 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Check-out Date ({nights} nights)</label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full text-sm border border-stone-300 rounded-lg p-2.5 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">Select Room Type</label>
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {ROOMS.map((room) => {
                  const isSelected = room.id === roomId;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setRoomId(room.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-amber-700 bg-amber-50/50 shadow-xs'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={room.images[0]}
                          alt={room.name}
                          className="w-14 h-14 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-semibold text-sm text-stone-900">{room.name}</div>
                          <div className="text-xs text-stone-500">{room.bedType} • Max {room.maxGuests} guests</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-amber-900">
                          {formatPrice(room.priceNPR, currency)}
                        </div>
                        <span className="text-[10px] text-stone-500">/ night</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">Number of Guests</label>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full text-sm border border-stone-300 rounded-lg p-2.5 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
              </select>
            </div>

            {/* Price Preview Card */}
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-stone-600">Total for {nights} night(s):</span>
                <div className="text-base font-bold text-stone-900">
                  {formatPrice(roomCostNPR, currency)}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2.5 bg-stone-900 hover:bg-amber-900 text-white rounded-lg font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Continue to Addons</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: ADDONS & PERKS */}
        {step === 2 && (
          <div className="p-6 space-y-5">
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Enhance Your Stay in Kathmandu</h4>
              <p className="text-xs text-stone-500">Select optional airport transit or Himalayan breakfast packages.</p>
            </div>

            <div className="space-y-3">
              {ADDON_OPTIONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'border-amber-700 bg-amber-50/50'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="mt-1 accent-amber-700 rounded"
                      />
                      <div>
                        <div className="text-sm font-semibold text-stone-900">{addon.name}</div>
                        <div className="text-xs text-stone-600 mt-0.5">{addon.description}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-stone-900">
                        +{formatPrice(addon.priceNPR, currency)}
                      </div>
                      <span className="text-[10px] text-stone-500">
                        {addon.unit.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-5 py-2.5 bg-stone-900 hover:bg-amber-900 text-white rounded-lg font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Guest Details ({formatPrice(totalNPR, currency)})</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: GUEST DETAILS & PAYMENT PREFERENCE */}
        {step === 3 && (
          <form onSubmit={handleConfirmReservation} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / Bikram Thapa"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full text-sm border border-stone-300 rounded-lg pl-9 pr-3 py-2 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full text-sm border border-stone-300 rounded-lg pl-9 pr-3 py-2 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Phone or WhatsApp *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+977 9800000000 / +1..."
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full text-sm border border-stone-300 rounded-lg pl-9 pr-3 py-2 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">Flight Arrival No. (Optional)</label>
                <div className="relative">
                  <Plane className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. QR 652 / 6E 1153"
                    value={flightArrival}
                    onChange={(e) => setFlightArrival(e.target.value)}
                    className="w-full text-sm border border-stone-300 rounded-lg pl-9 pr-3 py-2 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">Special Requests (Optional)</label>
              <textarea
                rows={2}
                placeholder="Early check-in request, quiet room, extra pillow, dietary requirements..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full text-sm border border-stone-300 rounded-lg p-2.5 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-2">Payment Mode</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <label
                  className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center gap-2.5 ${
                    paymentMethod === 'pay_at_hotel' ? 'border-amber-700 bg-amber-50/60 font-semibold' : 'border-stone-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'pay_at_hotel'}
                    onChange={() => setPaymentMethod('pay_at_hotel')}
                    className="accent-amber-700"
                  />
                  <div>
                    <span className="block text-stone-900">Pay at Hotel on Arrival</span>
                    <span className="text-[11px] text-stone-500 font-normal">Cash, Visa/Mastercard, or UPI/Fonepay</span>
                  </div>
                </label>

                <label
                  className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center gap-2.5 ${
                    paymentMethod === 'esewa_khalti' ? 'border-amber-700 bg-amber-50/60 font-semibold' : 'border-stone-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'esewa_khalti'}
                    onChange={() => setPaymentMethod('esewa_khalti')}
                    className="accent-amber-700"
                  />
                  <div>
                    <span className="block text-stone-900">eSewa / Khalti / Mobile Banking</span>
                    <span className="text-[11px] text-stone-500 font-normal">Fast digital transfer via QR at arrival</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Total summary */}
            <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="text-amber-950 font-medium">Grand Total ({nights} nights):</span>
                <div className="text-lg font-bold text-amber-900">
                  {formatPrice(totalNPR, currency)}
                </div>
              </div>
              <div className="text-right text-[11px] text-stone-600">
                <span>Free cancellation up to 24 hours prior</span>
                <div className="text-emerald-700 font-medium">No advance deposit required</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                id="submit-booking-btn"
                type="submit"
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Confirm Reservation</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: SUCCESS CONFIRMATION VOUCHER */}
        {step === 4 && confirmedBooking && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-stone-900">
                Reservation Confirmed!
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm">
                Thank you, <strong className="text-stone-900">{confirmedBooking.guestName}</strong>. We look forward to welcoming you to Balaju, Kathmandu!
              </p>
            </div>

            {/* Voucher Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <span className="text-stone-500 uppercase tracking-wider text-[10px]">Booking Reference</span>
                  <div className="text-base font-mono font-bold text-amber-900">
                    {confirmedBooking.referenceNumber}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px]">Status</span>
                  <div className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Confirmed
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 py-1">
                <div>
                  <span className="text-stone-500">Room</span>
                  <div className="font-semibold text-stone-900">{confirmedBooking.roomName}</div>
                </div>
                <div>
                  <span className="text-stone-500">Guests</span>
                  <div className="font-semibold text-stone-900">{confirmedBooking.guestsCount} Guest(s)</div>
                </div>
                <div>
                  <span className="text-stone-500">Check-In</span>
                  <div className="font-semibold text-stone-900">{confirmedBooking.checkIn} (from 14:00)</div>
                </div>
                <div>
                  <span className="text-stone-500">Check-Out</span>
                  <div className="font-semibold text-stone-900">{confirmedBooking.checkOut} (until 12:00)</div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-3 flex items-center justify-between">
                <div>
                  <span className="text-stone-500">Total Payable at Check-in</span>
                  <div className="text-base font-bold text-stone-900">
                    {formatPrice(confirmedBooking.totalNPR, currency)}
                  </div>
                </div>
                <div className="text-right text-stone-600">
                  <span>Method: Pay at Hotel</span>
                </div>
              </div>
            </div>

            {/* Actions: WhatsApp & Print */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                  `Hello Hotel In N Out, I have booked room ${confirmedBooking.roomName} with reference ${confirmedBooking.referenceNumber} for check-in on ${confirmedBooking.checkIn}. Please confirm!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to Hotel on WhatsApp</span>
              </a>

              <button
                onClick={() => window.print()}
                className="w-full sm:w-1/2 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Booking Voucher</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
