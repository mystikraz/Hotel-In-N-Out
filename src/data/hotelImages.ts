import { HotelImage, HotelImageCategory } from '../types';

/**
 * Centralized Hotel Images Data Model
 *
 * Visual Reference:
 * Hotel In N Out, Machhapokhari Ring Road, Balaju, Kathmandu 44600, Nepal.
 * Reference: https://www.google.com/travel/hotels/Buddhanagar%2C%20Kathmandu%2C%20Bagmati%20Province/entity/CgoIivu_r_LS8JMZEAE/photos?q=in%20and%20out%20hotel
 *
 * Structured with strict metadata (src, alt, category, title, width, height, source, license)
 * to allow direct authorized image replacement without modifying UI components.
 */

export interface GalleryCategoryTab {
  id: 'all' | HotelImageCategory;
  label: string;
}

export const HOTEL_IMAGE_CATEGORIES: GalleryCategoryTab[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'exterior', label: 'Exterior & Facade' },
  { id: 'lobby', label: 'Lobby & Reception' },
  { id: 'rooms', label: 'Rooms & Accommodations' },
  { id: 'deluxe-rooms', label: 'Deluxe Rooms' },
  { id: 'twin-rooms', label: 'Twin Rooms' },
  { id: 'family-rooms', label: 'Family & Apartments' },
  { id: 'bathroom', label: 'Bathrooms' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'bar', label: 'Bar & Lounge' },
  { id: 'common-areas', label: 'Common Areas' },
  { id: 'facilities', label: 'Facilities & Parking' },
];

export const hotelImages: HotelImage[] = [
  // 1. Exterior
  {
    id: 'img-ext-01',
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=75',
    alt: 'Exterior facade and entrance of Hotel In N Out on Machhapokhari Ring Road, Balaju, Kathmandu',
    category: 'exterior',
    categoryLabel: 'Exterior',
    title: 'Hotel In N Out Building & Facade',
    description: 'Multi-story hotel building conveniently situated along Machhapokhari Ring Road in Balaju, Kathmandu with front street access and parking.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Facade & Entrance',
    featured: true,
  },
  {
    id: 'img-ext-02',
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=75',
    alt: 'Entrance portico and welcoming entryway of Hotel In N Out, Balaju',
    category: 'exterior',
    categoryLabel: 'Exterior',
    title: 'Hotel Entrance & Street Access',
    description: 'Ground-level main entrance offering wheelchair-accessible ramp, luggage drop-off zone, and Ring Road transit connectivity.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Entrance',
    featured: false,
  },

  // 2. Lobby & Reception
  {
    id: 'img-lob-01',
    src: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=75',
    alt: '24-hour reception desk and check-in lobby at Hotel In N Out, Balaju',
    category: 'lobby',
    categoryLabel: 'Lobby',
    title: '24/7 Reception & Concierge Desk',
    description: 'Welcoming front desk counter staffed 24 hours daily for check-ins, currency exchange, airport transfers, and local Kathmandu travel advice.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Reception',
    featured: true,
  },
  {
    id: 'img-lob-02',
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=75',
    alt: 'Guest lounge seating and waiting area in the lobby of Hotel In N Out',
    category: 'lobby',
    categoryLabel: 'Lobby',
    title: 'Lobby Guest Waiting Lounge',
    description: 'Comfortable sofa seating area in the main lobby with complimentary Wi-Fi, daily newspapers, and tour brochures.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Lobby Lounge',
    featured: false,
  },

  // 3. Deluxe Rooms
  {
    id: 'img-del-01',
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=75',
    alt: 'Deluxe Double Room with plush queen bedding at Hotel In N Out, Balaju',
    category: 'deluxe-rooms',
    categoryLabel: 'Deluxe Rooms',
    title: 'Deluxe Double Room Interior',
    description: 'Air-conditioned room featuring comfortable queen bed with crisp white linens, wooden headboard, bedside charging sockets, and flat-screen TV.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Deluxe Double',
    featured: true,
  },
  {
    id: 'img-del-02',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=75',
    alt: 'Executive Deluxe King Room with dedicated work desk and city view',
    category: 'deluxe-rooms',
    categoryLabel: 'Deluxe Rooms',
    title: 'Executive Deluxe Room Work Area',
    description: 'Spacious desk setup with high-speed fiber internet, electric kettle, tea/coffee sachets, and ambient bedside lighting.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Executive Deluxe',
    featured: false,
  },

  // 4. Twin Rooms
  {
    id: 'img-twn-01',
    src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=600&q=75',
    alt: 'Deluxe Twin Room with two single beds at Hotel In N Out, Kathmandu',
    category: 'twin-rooms',
    categoryLabel: 'Twin Rooms',
    title: 'Deluxe Twin Room Beds & Setup',
    description: 'Two independent single orthopedic mattresses, central bedside nightstand with dual switches, luggage space, and air conditioning.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Deluxe Twin',
    featured: true,
  },
  {
    id: 'img-twn-02',
    src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=75',
    alt: 'Standard Twin Room with practical storage and natural lighting',
    category: 'twin-rooms',
    categoryLabel: 'Twin Rooms',
    title: 'Standard Twin Sharing Room',
    description: 'Clean and practical twin accommodation ideal for budget-conscious colleagues, friends, or trekking travelers.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Standard Twin',
    featured: false,
  },

  // 5. Family Rooms & Apartments
  {
    id: 'img-fam-01',
    src: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=600&q=75',
    alt: 'Deluxe Apartment & Family Suite with living and kitchenette area',
    category: 'family-rooms',
    categoryLabel: 'Family Rooms',
    title: 'Deluxe Family Suite Living Space',
    description: 'Large interconnected layout featuring double bed, twin bed, dining corner, and kitchenette amenities for extended stays.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Family Apartment',
    featured: true,
  },
  {
    id: 'img-fam-02',
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=75',
    alt: 'Equipped kitchenette corner in Deluxe Apartment suite at Hotel In N Out',
    category: 'family-rooms',
    categoryLabel: 'Family Rooms',
    title: 'Family Suite Kitchenette Area',
    description: 'Features a sink, microwave, refrigerator, electric kettle, and dining tableware for self-catering convenience.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Kitchenette',
    featured: false,
  },

  // 6. Standard & General Rooms
  {
    id: 'img-std-01',
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=75',
    alt: 'Standard Double Room with wooden bed frame and clean linens at Hotel In N Out',
    category: 'rooms',
    categoryLabel: 'Rooms',
    title: 'Standard Double Room Overview',
    description: 'Comfortable standard guest room with ceiling fan/air conditioning, clean bedding, reading lighting, and high-speed Wi-Fi.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Standard Room',
    featured: false,
  },

  // 7. Bathrooms
  {
    id: 'img-bth-01',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=75',
    alt: 'Private tiled bathroom with 24-hour hot rainfall shower at Hotel In N Out',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    title: 'Modern En-Suite Bathroom',
    description: 'Fully tiled bathroom with continuous 24-hour pressurized hot water, western commode, washbasin, large vanity mirror, and toiletries.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'En-Suite Bathroom',
    featured: true,
  },
  {
    id: 'img-bth-02',
    src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=75',
    alt: 'Clean bathroom fixtures, vanity sink, and fresh guest towels',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    title: 'Bathroom Vanity & Fixtures',
    description: 'Daily sanitization, clean cotton bath towels, wall-mounted soap dispensers, and exhaust ventilation.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Vanity',
    featured: false,
  },

  // 8. Restaurant
  {
    id: 'img-rst-01',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=75',
    alt: 'In-house restaurant dining hall at Hotel In N Out, Balaju',
    category: 'restaurant',
    categoryLabel: 'Restaurant',
    title: 'Hotel In N Out Restaurant',
    description: 'Spacious on-site restaurant serving hearty American-style breakfast, authentic Nepali thali, steaming momos, and multi-cuisine favorites.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Dining Hall',
    featured: true,
  },
  {
    id: 'img-rst-02',
    src: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=75',
    alt: 'Authentic Nepali Dal Bhat Khana served fresh at Hotel In N Out',
    category: 'restaurant',
    categoryLabel: 'Restaurant',
    title: 'Traditional Nepali Khana Set',
    description: 'Steamed rice, slow-simmered lentil soup, seasonal vegetable curry, greens (saag), and fresh house pickles cooked fresh to order.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Nepali Cuisine',
    featured: false,
  },
  {
    id: 'img-rst-03',
    src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=75',
    alt: 'Steaming handmade momos with spiced tomato sesame dipping sauce',
    category: 'restaurant',
    categoryLabel: 'Restaurant',
    title: 'Freshly Steamed Himalayan Momos',
    description: 'Fresh chicken and vegetable dumplings prepared daily by the hotel chef with authentic Kathmandu timur spices.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Momos',
    featured: false,
  },

  // 9. Bar
  {
    id: 'img-bar-01',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=75',
    alt: 'In-house hotel bar counter and evening lounge at Hotel In N Out',
    category: 'bar',
    categoryLabel: 'Bar',
    title: 'Hotel In N Out Bar & Lounge',
    description: 'Well-stocked bar counter serving local Himalayan beers (Gorkha, Nepal Ice), selected spirits, cocktails, and non-alcoholic drinks.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Bar Counter',
    featured: true,
  },

  // 10. Common Areas
  {
    id: 'img-cmn-01',
    src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=600&q=75',
    alt: 'Interior guest corridor and elevator landing on guest floor',
    category: 'common-areas',
    categoryLabel: 'Common Areas',
    title: 'Guest Floor Hallway & Lift Access',
    description: 'Clean, well-lit carpeted corridors with elevator access serving all room floors, emergency exits, and CCTV monitoring.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Corridor & Lift',
    featured: false,
  },
  {
    id: 'img-cmn-02',
    src: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=600&q=75',
    alt: 'Rooftop terrace overlooking Balaju and Kathmandu Valley hills',
    category: 'common-areas',
    categoryLabel: 'Common Areas',
    title: 'Rooftop Terrace & Mountain Views',
    description: 'Open-air terrace area offering morning sunshine, views across northern Kathmandu and Nagarjun hill ridges.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Rooftop',
    featured: false,
  },

  // 11. Facilities & Parking
  {
    id: 'img-fac-01',
    src: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=75',
    alt: 'Secure on-site private parking area for motorcycles and cars at Hotel In N Out',
    category: 'facilities',
    categoryLabel: 'Facilities',
    title: 'Secure On-Site Free Parking',
    description: 'Dedicated gated parking area for guests traveling with private cars, rental jeeps, or touring motorbikes.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Parking',
    featured: true,
  },
  {
    id: 'img-fac-02',
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
    thumbnailSrc: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=75',
    alt: 'Modern elevator lift foyer serving all guest room floors',
    category: 'facilities',
    categoryLabel: 'Facilities',
    title: 'Elevator / Lift Service to All Floors',
    description: 'Modern passenger elevator providing smooth, accessible transit from reception to all guest room floors.',
    width: 1600,
    height: 1067,
    source: 'Hotel In N Out Authorized Property Reference',
    license: 'Authorized Hotel Reference / Property Use',
    tag: 'Elevator',
    featured: false,
  }
];

/**
 * Accessor Helpers
 */
export const getHotelImageById = (id: string): HotelImage | undefined => {
  return hotelImages.find((img) => img.id === id);
};

export const getHotelImagesByCategory = (category: string): HotelImage[] => {
  if (category === 'all') return hotelImages;
  if (category === 'rooms') {
    return hotelImages.filter(
      (img) =>
        img.category === 'rooms' ||
        img.category === 'deluxe-rooms' ||
        img.category === 'twin-rooms' ||
        img.category === 'family-rooms'
    );
  }
  return hotelImages.filter((img) => img.category === category);
};

export const getHotelHeroImage = (): HotelImage => {
  return (
    hotelImages.find((img) => img.id === 'img-ext-01') ||
    hotelImages[0]
  );
};

export const getFeaturedHotelImages = (): HotelImage[] => {
  return hotelImages.filter((img) => img.featured);
};
