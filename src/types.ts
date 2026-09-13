export type Currency = 'NPR' | 'USD';

export type HotelImageCategory =
  | 'exterior'
  | 'lobby'
  | 'rooms'
  | 'deluxe-rooms'
  | 'twin-rooms'
  | 'family-rooms'
  | 'bathroom'
  | 'restaurant'
  | 'bar'
  | 'common-areas'
  | 'facilities';

export interface HotelImage {
  id: string;
  src: string;
  thumbnailSrc?: string;
  alt: string;
  category: HotelImageCategory;
  categoryLabel: string;
  title: string;
  description: string;
  width: number;
  height: number;
  source: string;
  license: string;
  tag?: string;
  featured?: boolean;
}

export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'twin' | 'family' | 'apartment' | 'standard' | 'executive';
  tagline: string;
  description: string;
  sizeSqFt: number;
  bedType: string;
  maxGuests: number;
  priceNPR: number;
  priceUSD: number;
  images: string[];
  features: string[];
  amenities: string[];
  popular?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'comfort' | 'services' | 'dining' | 'connectivity';
}

export interface MenuItem {
  id: string;
  name: string;
  nepaliName?: string;
  description: string;
  priceNPR: number;
  category: 'breakfast' | 'nepali' | 'main' | 'beverages';
  dietary?: 'veg' | 'non-veg' | 'vegan';
  popular?: boolean;
  image?: string;
}

export interface Attraction {
  id: string;
  name: string;
  distanceKm: number;
  driveTimeMin: number;
  description: string;
  category: 'heritage' | 'transit' | 'nature' | 'shopping';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  country: string;
  date: string;
  rating: number;
  title: string;
  comment: string;
  tripType: 'Solo' | 'Couple' | 'Family' | 'Business';
  verified: boolean;
}

export interface AddonOption {
  id: string;
  name: string;
  description: string;
  priceNPR: number;
  priceUSD: number;
  unit: 'per_stay' | 'per_night' | 'per_person';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'premises' | 'rooms' | 'dining';
  categoryLabel: string;
  description: string;
  url: string;
  featured?: boolean;
  tag?: string;
}

export interface BookingDetails {
  referenceNumber: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  roomId: string;
  roomName: string;
  guestsCount: number;
  selectedAddons: string[];
  totalNPR: number;
  totalUSD: number;
  paymentMethod: 'pay_at_hotel' | 'online_card' | 'esewa_khalti';
  specialRequests?: string;
  flightArrival?: string;
  createdAt: string;
}
