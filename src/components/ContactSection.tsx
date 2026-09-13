import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';
import { HOTEL_INFO, FAQS } from '../data/hotelData';

export const ContactSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            We are Here to Assist You 24/7
          </h2>
          <p className="text-stone-600 text-base mt-3 leading-relaxed">
            Have questions about airport transfers, room availability, or group bookings? Contact our friendly reception desk anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Call Reception</div>
                  <a href={`tel:${HOTEL_INFO.phone}`} className="text-sm font-bold text-stone-900 hover:text-amber-800 block mt-0.5">
                    {HOTEL_INFO.phone}
                  </a>
                  <a href={`tel:${HOTEL_INFO.mobile}`} className="text-xs text-stone-600 hover:text-amber-800 block">
                    {HOTEL_INFO.mobile}
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Instant WhatsApp</div>
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsapp.replace('+', '')}?text=Hello%20Hotel%20In%20N%20Out`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-900 hover:underline block mt-0.5"
                  >
                    Chat on WhatsApp
                  </a>
                  <span className="text-[11px] text-emerald-700 block">Avg reply: &lt; 5 mins</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Email Us</div>
                  <a href={`mailto:${HOTEL_INFO.email}`} className="text-sm font-bold text-stone-900 hover:text-amber-800 block mt-0.5">
                    {HOTEL_INFO.email}
                  </a>
                  <span className="text-[11px] text-stone-500">24/7 inbox monitoring</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Location</div>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Balaju, Kathmandu
                  </span>
                  <span className="text-[11px] text-stone-500">Machhapokhari Ring Road, Nepal</span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-7">
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
                Send Direct Inquiry
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Leave a message for special group rates, extended stay discounts, or airport pickup coordination.
              </p>

              {sent ? (
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs mt-0.5">Our front office team will contact you shortly via email/phone.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Bikash Adhikari"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-stone-300 rounded-lg p-2.5 bg-white text-stone-900 focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="bikash@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-stone-300 rounded-lg p-2.5 bg-white text-stone-900 focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-stone-300 rounded-lg p-2.5 bg-white text-stone-900 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your Message or Inquiry *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Hi, I would like to inquire about room availability from Oct 10 to 15..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full border border-stone-300 rounded-lg p-2.5 bg-white text-stone-900 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-stone-900 hover:bg-amber-900 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Transmit Inquiry to Hotel</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Frequently Asked Questions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-amber-700" />
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-2.5">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-stone-800 hover:text-amber-900 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-3.5 text-xs text-stone-600 leading-relaxed border-t border-stone-200/60 pt-2.5 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Summary Card */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-xs text-amber-950">
              <div className="font-bold flex items-center gap-1.5 text-amber-900">
                <Clock className="w-4 h-4" />
                <span>Check-in & Check-out Policy</span>
              </div>
              <p className="text-[11px] text-amber-900/90 leading-relaxed">
                Check-in is from <strong>2:00 PM (14:00)</strong> onwards. Check-out is until <strong>12:00 PM noon</strong>. Late check-out or luggage keeping until evening flight is happily arranged.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
