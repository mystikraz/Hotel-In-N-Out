import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ThumbsUp, MessageSquare, PlusCircle, User } from 'lucide-react';
import { REVIEWS, HOTEL_INFO } from '../data/hotelData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [filterType, setFilterType] = useState<string>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [newName, setNewName] = useState('');
  const [newCountry, setNewCountry] = useState('Nepal');
  const [newRating, setNewRating] = useState(5);
  const [newTripType, setNewTripType] = useState<'Solo' | 'Couple' | 'Family' | 'Business'>('Couple');
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredReviews = filterType === 'all'
    ? reviewsList
    : reviewsList.filter((r) => r.tripType.toLowerCase() === filterType.toLowerCase());

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: newName,
      country: newCountry,
      date: 'Just now',
      rating: newRating,
      title: newTitle || 'Wonderful stay in Kathmandu',
      comment: newComment,
      tripType: newTripType,
      verified: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmitted(false);
      setNewName('');
      setNewTitle('');
      setNewComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 bg-stone-50 border-b border-stone-200">
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
            Guest Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 tracking-tight">
            Loved by Travelers from Around the Globe
          </h2>
          <p className="text-stone-600 text-base mt-3 leading-relaxed">
            Rated 4.5 / 5 on Google Travel. Here is what guests say about our quiet location, friendly team, and authentic hospitality.
          </p>
        </motion.div>

        {/* Ratings Overview Bento Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 mb-12 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-8">
            <div className="text-5xl sm:text-6xl font-serif font-bold text-stone-900">
              {HOTEL_INFO.googleRating}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-stone-500 font-medium">
              Based on {HOTEL_INFO.reviewCount} verified guest reviews on Google Travel
            </div>
            <div className="mt-4">
              <button
                onClick={() => setShowReviewModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 hover:bg-amber-900 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="flex justify-between text-stone-700 font-medium mb-1">
                <span>Staff & Nepali Hospitality</span>
                <span className="font-bold text-stone-900">4.8 / 5</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '96%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-stone-700 font-medium mb-1">
                <span>Value for Money</span>
                <span className="font-bold text-stone-900">4.7 / 5</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '94%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-stone-700 font-medium mb-1">
                <span>Room Cleanliness & Comfort</span>
                <span className="font-bold text-stone-900">4.6 / 5</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-stone-700 font-medium mb-1">
                <span>Balaju Ring Road Location</span>
                <span className="font-bold text-stone-900">4.5 / 5</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-semibold text-stone-500 mr-2">Filter by:</span>
          {['all', 'solo', 'couple', 'family', 'business'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium capitalize transition-all cursor-pointer ${
                filterType === type
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 font-bold flex items-center justify-center text-sm border border-stone-200">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">{review.author}</div>
                      <div className="text-[11px] text-stone-500 flex items-center gap-1">
                        <span>{review.country}</span>
                        <span>•</span>
                        <span>{review.tripType} traveler</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <h4 className="font-serif font-bold text-stone-900 text-sm mb-1.5">
                  "{review.title}"
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Stay
                </span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Write Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-stone-200">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Write a Guest Review
                </h3>
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="p-1 rounded-lg text-stone-500 hover:text-stone-800"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8 text-emerald-700">
                  <CheckCircle className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">Thank you! Your review has been added.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full border border-stone-300 rounded-lg p-2 bg-stone-50"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Country</label>
                      <input
                        type="text"
                        value={newCountry}
                        onChange={(e) => setNewCountry(e.target.value)}
                        placeholder="Nepal, UK, USA..."
                        className="w-full border border-stone-300 rounded-lg p-2 bg-stone-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Rating</label>
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                        className="w-full border border-stone-300 rounded-lg p-2 bg-stone-50"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Average</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Trip Type</label>
                      <select
                        value={newTripType}
                        onChange={(e) => setNewTripType(e.target.value as any)}
                        className="w-full border border-stone-300 rounded-lg p-2 bg-stone-50"
                      >
                        <option value="Couple">Couple</option>
                        <option value="Solo">Solo</option>
                        <option value="Family">Family</option>
                        <option value="Business">Business</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Review Title</label>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. Great peaceful location & friendly team"
                      className="w-full border border-stone-300 rounded-lg p-2 bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your Feedback *</label>
                    <textarea
                      rows={3}
                      required
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your experience regarding room comfort, food, Wi-Fi, staff..."
                      className="w-full border border-stone-300 rounded-lg p-2 bg-stone-50"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewModal(false)}
                      className="px-4 py-2 rounded-lg bg-stone-100 text-stone-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
