import { Room, Amenity, MenuItem, Attraction, Review, AddonOption } from '../types';
import { hotelImages } from './hotelImages';

export const HOTEL_INFO = {
  name: 'Hotel In N Out',
  area: 'Balaju',
  city: 'Kathmandu',
  country: 'Nepal',
  countryCode: 'NP',
  tagline: 'Modern Comfort, Warm Hospitality & Convenient Ring Road Access',
  address: 'Machhapokhari Ring Road, Balaju, Kathmandu 44600, Nepal',
  locationDetails: 'Conveniently situated along Machhapokhari Ring Road in Balaju, just 350m from Balaju Chowk, 3 km from Thamel & Swayambhunath, and 9.8 km from Tribhuvan International Airport.',
  phone: '+977 1-4382590',
  mobile: '+977 9851123456',
  whatsapp: '+9779851123456',
  email: 'info@hotelinandout.com',
  bookingEmail: 'reservations@hotelinandout.com',
  googleRating: 4.5,
  reviewCount: 186,
  stars: 3,
  checkInTime: '14:00 (2:00 PM)',
  checkOutTime: '12:00 (12:00 PM)',
  currencyRateUSD: 134, // 1 USD = 134 NPR
  googleMapsUrl: 'https://www.google.com/travel/hotels/Buddhanagar%2C%20Kathmandu%2C%20Bagmati%20Province/entity/CgoIivu_r_LS8JMZEAE/overview?q=in%20and%20out%20hotel',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Machhapokhari+Ring+Road+Balaju+Kathmandu+Nepal',
  embedMapQuery: 'Machhapokhari Ring Road, Balaju, Kathmandu, Nepal',
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Room',
    category: 'deluxe',
    tagline: 'Peaceful room with plush queen bedding, soundproof windows, and air conditioning',
    description: 'Designed for solo travelers and couples seeking a restful stay in Kathmandu. Features double-glazed soundproof windows to block out Ring Road traffic, custom wood furnishings, high-speed Wi-Fi, air conditioning, and a private tiled bathroom with 24-hour hot rainfall shower.',
    sizeSqFt: 250,
    bedType: '1 Double / Queen Bed',
    maxGuests: 2,
    priceNPR: 3800,
    priceUSD: 28,
    popular: true,
    images: [
      hotelImages.find((img) => img.id === 'img-del-01')?.src || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-bth-01')?.src || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-del-02')?.src || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Soundproof Windows', 'Air Conditioning', 'Flat-Screen TV', 'Work Desk'],
    amenities: [
      'High-Speed Wi-Fi',
      'Flat-Screen Smart TV with Cable',
      'Air Conditioning & Heating',
      '24/7 Hot & Cold Shower',
      'Electric Kettle with Complimentary Tea & Coffee',
      'Daily Housekeeping',
      'Wardrobe & Clothes Rack',
      'Free Toiletries & Slippers'
    ]
  },
  {
    id: 'deluxe-twin',
    name: 'Deluxe Twin Room',
    category: 'twin',
    tagline: 'Two separate orthopedic single beds ideal for colleagues, trekking partners, and friends',
    description: 'Generously proportioned with two comfortable single orthopedic mattresses, generous luggage space, dedicated charging sockets near each bedside, air conditioning, and a spacious en-suite bathroom.',
    sizeSqFt: 280,
    bedType: '2 Single Twin Beds',
    maxGuests: 2,
    priceNPR: 4200,
    priceUSD: 31,
    popular: false,
    images: [
      hotelImages.find((img) => img.id === 'img-twn-01')?.src || 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-bth-01')?.src || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-twn-02')?.src || 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Two Orthopedic Twin Beds', 'Dual Wardrobe', 'High-Speed Wi-Fi', 'En-Suite Bathroom'],
    amenities: [
      'Complimentary Wi-Fi',
      'Air Conditioning & Heating',
      'Flat-Screen TV',
      'En-Suite Bathroom with Hot Water',
      'Electric Kettle & Tea Setup',
      'Luggage Storage Space',
      'Fresh Linen & Towels',
      'Daily Room Service'
    ]
  },
  {
    id: 'deluxe-apartment',
    name: 'Deluxe Apartment',
    category: 'apartment',
    tagline: 'Self-contained residential apartment with private kitchenette, lounge area, and balcony',
    description: 'Perfect for extended stays, digital nomads, and small families. Offers a master bedroom, dedicated living/dining space, balcony access, and an equipped kitchenette with microwave, refrigerator, sink, and crockery.',
    sizeSqFt: 420,
    bedType: '1 King Bed + Sofa Bed',
    maxGuests: 3,
    priceNPR: 6500,
    priceUSD: 48,
    popular: true,
    images: [
      hotelImages.find((img) => img.id === 'img-fam-01')?.src || 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-fam-02')?.src || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-bth-01')?.src || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Equipped Kitchenette', 'Living Lounge Corner', 'Mini Refrigerator', 'Balcony Access'],
    amenities: [
      'Kitchenette with Sink, Microwave & Fridge',
      'Dining Table & Tableware',
      'Air Conditioning & Heating',
      'High-Speed Wi-Fi',
      'Flat-Screen Smart TV',
      'Spacious Private Bathroom',
      'Electric Kettle & Coffee Selection',
      'Complimentary Bottled Water'
    ]
  },
  {
    id: 'family-room',
    name: 'Family Room',
    category: 'family',
    tagline: 'Interconnected multi-bed layout accommodating up to 4 guests comfortably',
    description: 'Designed for visiting families and small groups. Features a king bed plus twin bedding, abundant wardrobe storage, dual seating, and a modern private bathroom with uninterrupted hot water.',
    sizeSqFt: 400,
    bedType: '1 Double Bed + 2 Single Beds',
    maxGuests: 4,
    priceNPR: 6200,
    priceUSD: 46,
    popular: false,
    images: [
      hotelImages.find((img) => img.id === 'img-fam-01')?.src || 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-twn-01')?.src || 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-bth-02')?.src || 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Sleeps up to 4', 'Family Layout', 'Multiple Luggage Racks', 'Spacious Seating'],
    amenities: [
      'Fast Optical Wi-Fi',
      'Air Conditioning',
      'Large En-Suite Bathroom with Hot Water',
      'Flat-Screen TV',
      'Electric Kettle',
      'Baby Cot / Extra Bed on Request',
      'Daily Housekeeping',
      'Soundproof Glazed Windows'
    ]
  },
  {
    id: 'standard-double',
    name: 'Standard Double Room',
    category: 'standard',
    tagline: 'Practical, clean, and economical accommodation along the Ring Road',
    description: 'A comfortable and budget-friendly choice featuring a double bed, ceiling fan or air conditioning, reading lamps, clean linens, and fast Wi-Fi. Available with private bathroom.',
    sizeSqFt: 210,
    bedType: '1 Double Bed',
    maxGuests: 2,
    priceNPR: 2800,
    priceUSD: 21,
    popular: false,
    images: [
      hotelImages.find((img) => img.id === 'img-std-01')?.src || 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-bth-01')?.src || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-del-01')?.src || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Budget-Friendly', 'Double Bed', 'Free Wi-Fi', 'Desk Area'],
    amenities: [
      'Free Wi-Fi',
      'Private Tiled Bathroom with Hot Shower',
      'Ceiling Fan / Heating Option',
      'Clean Linens & Towels',
      'Electric Kettle on Request',
      'Daily Housekeeping',
      '24/7 Front Desk Access'
    ]
  },
  {
    id: 'executive-room',
    name: 'Executive Deluxe Room',
    category: 'executive',
    tagline: 'Premium top-floor room with panoramic Balaju valley views and executive work desk',
    description: 'Situated on the upper floors with wider windows and pleasant valley views toward Nagarjun. Includes an executive ergonomic desk, high-speed fiber connection, flat-screen smart TV, and premium en-suite rainfall shower.',
    sizeSqFt: 310,
    bedType: '1 King Bed',
    maxGuests: 2,
    priceNPR: 4800,
    priceUSD: 36,
    popular: true,
    images: [
      hotelImages.find((img) => img.id === 'img-del-02')?.src || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-del-01')?.src || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      hotelImages.find((img) => img.id === 'img-bth-01')?.src || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Upper Floor Valley View', 'King Bed', 'Executive Work Desk', 'Smart TV'],
    amenities: [
      'Ultra-Fast 100Mbps Wi-Fi',
      'Large Smart LED TV',
      'Climate Control Air Conditioning',
      'Luxury Rainfall Hot Shower',
      'Tea & Coffee Station',
      'Plush Towels & Toiletries',
      'Work Desk & Ergonomic Chair',
      'Direct Elevator Access'
    ]
  }
];

export const HOTEL_AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    title: 'Complimentary High-Speed Wi-Fi',
    description: 'Reliable fiber-optic internet connection across all guest rooms, restaurant, bar, and public areas.',
    icon: 'Wifi',
    category: 'connectivity'
  },
  {
    id: 'frontdesk',
    title: '24-Hour Front Desk & Check-In',
    description: 'Round-the-clock reception to assist with late arrivals, currency exchange, early morning departures, and luggage.',
    icon: 'Clock',
    category: 'services'
  },
  {
    id: 'restaurant',
    title: 'In-House Restaurant & Bar',
    description: 'On-site restaurant serving freshly cooked Nepali Khana, handmade momos, American breakfast, and evening drinks.',
    icon: 'Utensils',
    category: 'dining'
  },
  {
    id: 'parking',
    title: 'Free On-Site Secure Parking',
    description: 'Private parking within hotel premises for guest motorcycles, rental cars, and tour jeeps.',
    icon: 'Car',
    category: 'services'
  },
  {
    id: 'elevator',
    title: 'Passenger Elevator / Lift',
    description: 'Modern lift service connecting the ground lobby seamlessly to all guest room floors.',
    icon: 'Building',
    category: 'comfort'
  },
  {
    id: 'hotwater',
    title: '24-Hour Hot & Cold Water',
    description: 'Continuous pressurized hot water supply with solar heating and electrical backup systems.',
    icon: 'Flame',
    category: 'comfort'
  },
  {
    id: 'airport',
    title: 'Airport Transfer & Taxi Coordination',
    description: 'Direct transit to and from Tribhuvan International Airport (TIA) via the convenient Ring Road route.',
    icon: 'Plane',
    category: 'services'
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping & Luggage Storage',
    description: 'Impeccable daily room cleaning, fresh linens, and secure luggage storage for trekkers and tour travelers.',
    icon: 'Sparkles',
    category: 'comfort'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'nepali-thali',
    name: 'Traditional Nepali Dal Bhat Set',
    nepaliName: 'दाल भात तरकारी',
    description: 'Steamed basmati rice, slow-cooked lentil soup, seasonal vegetable curry (Tarkari), local greens (Saag), and authentic homemade pickle.',
    priceNPR: 420,
    category: 'nepali',
    dietary: 'veg',
    popular: true,
    image: hotelImages.find((img) => img.id === 'img-rst-02')?.src || 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'steamed-momo',
    name: 'Steamed Chicken / Veg Momos',
    nepaliName: 'काठमाडौं म:म:',
    description: 'Locally handcrafted dumplings filled with spiced minced chicken or seasoned vegetables, served with roasted tomato timur achar.',
    priceNPR: 300,
    category: 'nepali',
    dietary: 'non-veg',
    popular: true,
    image: hotelImages.find((img) => img.id === 'img-rst-03')?.src || 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'american-breakfast',
    name: 'American Style Cooked Breakfast',
    description: 'Two farm eggs cooked your way, crispy toast with butter and jam, pan-fried potatoes, and a choice of tea or coffee.',
    priceNPR: 480,
    category: 'breakfast',
    dietary: 'non-veg',
    popular: true,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chowmein',
    name: 'Kathmandu Stir-Fried Chowmein',
    nepaliName: 'चाउमिन',
    description: 'Wok-tossed noodles with shredded cabbage, carrots, bell peppers, soy garlic seasoning, and choice of chicken or egg.',
    priceNPR: 280,
    category: 'main',
    dietary: 'non-veg',
    popular: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'himalayan-coffee',
    name: 'Freshly Brewed Himalayan Coffee',
    description: 'Single-origin Arabica beans grown in Nepal, freshly ground and served hot (Americano, Cappuccino, or Espresso).',
    priceNPR: 200,
    category: 'beverages',
    dietary: 'vegan',
    popular: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'masala-chai',
    name: 'Authentic Nepali Masala Milk Tea',
    nepaliName: 'मसला चिया',
    description: 'Fragrant milk tea simmered with green cardamom, fresh ginger, cinnamon sticks, and cloves.',
    priceNPR: 120,
    category: 'beverages',
    dietary: 'veg',
    popular: true,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
  }
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: 'balaju-park',
    name: 'Balaju Water Garden (Baisdhara Park)',
    distanceKm: 0.5,
    driveTimeMin: 3,
    description: 'Historic royal park famous for its 22 carved water spouts (Baisdhara), tranquil ponds, religious shrines, and lush green lawns within walking distance.',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'thamel',
    name: 'Thamel Tourist Hub',
    distanceKm: 3.0,
    driveTimeMin: 10,
    description: "Kathmandu's bustling tourist district for international dining, live music bars, trekking gear shops, currency exchanges, and souvenir markets.",
    category: 'shopping',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'swayambhunath',
    name: 'Swayambhunath Stupa (Monkey Temple - UNESCO)',
    distanceKm: 3.2,
    driveTimeMin: 10,
    description: 'Ancient hilltop Buddhist stupa offering sweeping 360-degree panoramas of Kathmandu Valley, sacred prayer wheels, and resident temple monkeys.',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841839d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'garden-of-dreams',
    name: 'Garden of Dreams & Narayanhiti Palace',
    distanceKm: 3.6,
    driveTimeMin: 12,
    description: 'Neo-classical historical garden built in 1920 with European pavilions, sunken gardens, and peaceful shaded sitting areas near the entrance of Thamel.',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ktm-durbar',
    name: 'Kathmandu Durbar Square (UNESCO)',
    distanceKm: 4.2,
    driveTimeMin: 15,
    description: 'Historic royal palace complex of the Malla and Shah kings, housing the Kumari Ghar (residence of the Living Goddess) and intricate pagoda temples.',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pashupatinath',
    name: 'Pashupatinath Temple (UNESCO)',
    distanceKm: 8.5,
    driveTimeMin: 22,
    description: 'Sacred Hindu temple complex on the banks of Bagmati River, conveniently accessible eastward along the Kathmandu Ring Road from Balaju.',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841839d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'boudhanath',
    name: 'Boudhanath Stupa (UNESCO)',
    distanceKm: 8.8,
    driveTimeMin: 24,
    description: 'One of the largest spherical stupas in the world and the focal point of Tibetan Buddhism in Kathmandu, easily reached via the outer Ring Road.',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'airport',
    name: 'Tribhuvan International Airport (TIA)',
    distanceKm: 9.8,
    driveTimeMin: 25,
    description: "Nepal's international flight gateway. Straightforward vehicular access via the Ring Road avoiding congested downtown choke points.",
    category: 'transit',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Bikash Adhikari',
    country: 'Nepal',
    date: '3 weeks ago',
    rating: 5,
    title: 'Very convenient location on Balaju Ring Road',
    comment: 'Staying at Hotel In N Out made catching our morning bus from Machhapokhari bus terminal effortless. The room was clean, hot water was hot and instant, and having a lift for our heavy luggage was a big plus.',
    tripType: 'Business',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Julian Meyer',
    country: 'Germany',
    date: '1 month ago',
    rating: 5,
    title: 'Clean room, great Wi-Fi, and helpful 24hr reception',
    comment: 'We arrived late from Pokhara and the 24/7 front desk checked us in quickly. Wi-Fi was strong enough for video calls. The on-site restaurant served delicious momos and hot tea. Highly recommended for a quiet stay away from Thamel chaos.',
    tripType: 'Couple',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Kiran Pradhan',
    country: 'Nepal',
    date: '2 months ago',
    rating: 4,
    title: 'Spacious family room with kitchenette',
    comment: 'Booked the family room with kitchenette. The room was tidy and having parking inside the property for our motorcycle was very secure. Friendly and polite management.',
    tripType: 'Family',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Sophie Martin',
    country: 'France',
    date: '3 months ago',
    rating: 5,
    title: 'Great transit hotel with dependable hot showers',
    comment: 'Super convenient location along the Ring Road. Only 10 minutes to Swayambhunath and Thamel by taxi. Staff helped arrange a direct taxi to the airport. Clean sheets and quiet sleep.',
    tripType: 'Solo',
    verified: true
  }
];

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'airport_pickup',
    name: 'TIA Airport Pickup Service',
    description: 'Private car transfer from Tribhuvan International Airport to Hotel In N Out via the Ring Road.',
    priceNPR: 1800,
    priceUSD: 14,
    unit: 'per_stay'
  },
  {
    id: 'buffet_breakfast',
    name: 'Daily Breakfast Package',
    description: 'Freshly cooked American or Nepali breakfast with eggs, toast, butter, seasonal fruit, and Himalayan tea or coffee.',
    priceNPR: 450,
    priceUSD: 4,
    unit: 'per_person'
  },
  {
    id: 'ktm_valley_tour',
    name: 'Kathmandu Heritage Day Tour',
    description: 'Private vehicle with driver for full-day tour to Swayambhunath, Kathmandu Durbar Square, and Pashupatinath.',
    priceNPR: 5500,
    priceUSD: 41,
    unit: 'per_stay'
  },
  {
    id: 'late_checkout',
    name: 'Guaranteed Late Checkout (until 3 PM)',
    description: 'Subject to availability, enjoy your room until afternoon prior to evening departures.',
    priceNPR: 1200,
    priceUSD: 9,
    unit: 'per_stay'
  }
];

export const FAQS = [
  {
    question: 'Where is Hotel In N Out located in Kathmandu?',
    answer: 'Hotel In N Out is located on Machhapokhari Ring Road, Balaju, Kathmandu 44600, Nepal. It is situated just 350 meters from Balaju Chowk bus stop, 500 meters from Balaju Water Garden, and 3 km from Thamel.'
  },
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is from 14:00 (2:00 PM) onwards, and check-out is until 12:00 PM noon. Our front desk operates 24 hours a day, so late check-ins can always be accommodated.'
  },
  {
    question: 'Does the hotel have on-site parking and an elevator?',
    answer: 'Yes! Hotel In N Out provides free secure on-site parking for guests (cars and motorcycles) and a modern passenger elevator/lift serving all guest room floors.'
  },
  {
    question: 'Are there dining facilities available on the property?',
    answer: 'Yes, we have an on-site restaurant and bar serving freshly prepared authentic Nepali Dal Bhat, handmade momos, American-style breakfast, and evening drinks.'
  },
  {
    question: 'How far is the hotel from Tribhuvan International Airport (TIA)?',
    answer: 'The hotel is approximately 9.8 km from Tribhuvan International Airport. Transit via the Ring Road takes roughly 25 minutes by taxi, avoiding dense downtown city congestion. We can arrange airport pickups upon request.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept cash in Nepali Rupees (NPR), major international currencies (USD, EUR), debit/credit cards, and local digital payment methods including eSewa, Khalti, and Fonepay QR.'
  }
];
