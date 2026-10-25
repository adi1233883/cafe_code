export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'nails' | 'beauty' | 'wellness';
  description: string;
  duration?: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'nails' | 'beauty' | 'wellness' | 'salon';
  categoryLabel: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export const SALON_DETAILS = {
  name: 'Authentic Beauty Salon & Studio',
  shortName: 'Authentic Beauty',
  tagline: 'Your Beauty. Your Signature.',
  address: {
    street: 'Calea Mănăștur 30–32',
    city: 'Cluj-Napoca',
    country: 'Romania',
    postalCode: '400658',
    full: 'Calea Mănăștur 30–32, Cluj-Napoca, Romania',
    mapQuery: 'Calea+Manastur+30-32+Cluj-Napoca+Romania',
  },
  phone: {
    display: '+40 741 233 181',
    href: 'tel:+40741233181',
  },
  hours: [
    { days: 'Monday – Friday', hours: '09:00 – 20:00' },
    { days: 'Saturday', hours: '09:00 – 17:00' },
    { days: 'Sunday', hours: 'By special appointment' },
  ],
  bookingPlatforms: {
    fresha: 'https://www.fresha.com',
    mero: 'https://mero.ro',
  },
};

export const FEATURED_CATEGORIES = [
  {
    id: 'hair',
    title: 'Hair',
    subtitle: 'Beautiful styling tailored to you.',
    description: 'Bespoke cuts, dimensional coloring, and deep restorative hair treatments designed to enhance your natural texture.',
    imageUrl: '/src/assets/images/services_hair_styling_1792952371236.jpg',
    actionText: 'Explore Hair Services',
  },
  {
    id: 'nails',
    title: 'Nails',
    subtitle: 'Carefully finished details.',
    description: 'Precision manicures, restorative cuticle care, and refined minimalist nail styling for effortless everyday elegance.',
    imageUrl: '/src/assets/images/services_manicure_detail_1792952371242.jpg',
    actionText: 'Explore Nail Care',
  },
  {
    id: 'beauty',
    title: 'Makeup & Facial',
    subtitle: 'Looks designed for your occasion.',
    description: 'Flawless daytime & event makeup, lash lifting, brow architecture, and rejuvenating facial therapies.',
    imageUrl: '/src/assets/images/gallery_makeup_look_1792952389234.jpg',
    actionText: 'Explore Beauty Services',
  },
  {
    id: 'wellness',
    title: 'Beauty & Care',
    subtitle: 'Treatments designed around your self-care routine.',
    description: 'Sensory relaxation rituals, skin hydration, and soothing wellness therapies in a tranquil studio environment.',
    imageUrl: '/src/assets/images/services_facial_skincare_1792952371352.jpg',
    actionText: 'Explore Wellness Care',
  },
];

export const SERVICE_CATEGORIES = [
  { id: 'hair', label: 'Hair' },
  { id: 'nails', label: 'Nails' },
  { id: 'beauty', label: 'Beauty & Skincare' },
  { id: 'wellness', label: 'Wellness' },
] as const;

export const SERVICES_LIST: ServiceItem[] = [
  // Hair
  {
    id: 'hair-styling',
    category: 'hair',
    name: 'Hair Styling & Blowout',
    description: 'Signature wash, scalp massage, and bespoke blow-dry styling tailored to your occasion.',
    duration: '45–60 min',
    tag: 'Signature',
  },
  {
    id: 'haircuts',
    category: 'hair',
    name: 'Haircuts & Reshaping',
    description: 'Personalized consultation followed by precision cutting, texturizing, and finish styling.',
    duration: '60 min',
  },
  {
    id: 'hair-treatments',
    category: 'hair',
    name: 'Restorative Hair Treatments',
    description: 'Intense hydration, keratin gloss, and bonding therapies to replenish strength and shine.',
    duration: '50 min',
    tag: 'Care',
  },
  {
    id: 'hair-coloring',
    category: 'hair',
    name: 'Coloring & Balayage',
    description: 'Dimensional highlights, gloss toning, grey coverage, and modern custom color formulations.',
    duration: '120–180 min',
  },

  // Nails
  {
    id: 'manicure-classic',
    category: 'nails',
    name: 'Classic & Gel Manicure',
    description: 'Nail shaping, gentle cuticle refinement, nourishing oil treatment, and flawless polish or gel finish.',
    duration: '50–75 min',
    tag: 'Popular',
  },
  {
    id: 'nail-styling',
    category: 'nails',
    name: 'Nail Styling & Minimalist Art',
    description: 'Clean micro French, delicate chrome shimmer, and refined geometric accents tailored to your style.',
    duration: '60–90 min',
  },
  {
    id: 'nail-care',
    category: 'nails',
    name: 'Restorative Nail Care & Strengthening',
    description: 'Deep keratin conditioning, intensive cuticle repair, and natural nail strengthening treatment.',
    duration: '45 min',
  },

  // Beauty
  {
    id: 'makeup-event',
    category: 'beauty',
    name: 'Professional Makeup',
    description: 'Soft glam, daytime elegance, or special occasion makeup customized to your facial features and outfit.',
    duration: '60 min',
    tag: 'Events',
  },
  {
    id: 'eyelashes',
    category: 'beauty',
    name: 'Eyelashes & Lash Lift',
    description: 'Keratin lash lift and tinting to enhance your natural lash curl, length, and depth.',
    duration: '60 min',
  },
  {
    id: 'eyebrows',
    category: 'beauty',
    name: 'Eyebrow Architecture & Tint',
    description: 'Facial-mapping brow shaping, precision tweezing/waxing, and harmonious semi-permanent tinting.',
    duration: '35 min',
  },
  {
    id: 'facial-treatments',
    category: 'beauty',
    name: 'Facial Treatments & Skin Hydration',
    description: 'Deep skin cleansing, customized botanical serum infusion, gentle exfoliation, and relaxing face massage.',
    duration: '60–75 min',
    tag: 'Signature',
  },
  {
    id: 'waxing',
    category: 'beauty',
    name: 'Delicate Waxing Services',
    description: 'Gentle facial and body waxing using sensitive-skin friendly formulations with soothing post-care.',
    duration: '20–45 min',
  },

  // Wellness
  {
    id: 'wellness-massage',
    category: 'wellness',
    name: 'Relaxation & Tension-Relief Massage',
    description: 'Targeted head, neck, and shoulder relaxation techniques to melt away daily stress.',
    duration: '45–60 min',
    tag: 'Ritual',
  },
  {
    id: 'relaxation-treatments',
    category: 'wellness',
    name: 'Botanical Relaxation Treatment',
    description: 'Aromatherapy compress, calming facial pressure points, and restorative warm oil therapy.',
    duration: '60 min',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Salon Interior',
    category: 'salon',
    categoryLabel: 'Salon & Studio',
    imageUrl: '/src/assets/images/hero_salon_interior_1792952369872.jpg',
    aspect: 'landscape',
    caption: 'Bright, serene studio environment with warm travertine finishes and curved arched mirrors on Calea Mănăștur.',
  },
  {
    id: 'g-2',
    title: 'Radiant Skin & Editorial Portrait',
    category: 'beauty',
    categoryLabel: 'Skincare & Portrait',
    imageUrl: '/src/assets/images/about_beauty_portrait_1792952370499.jpg',
    aspect: 'portrait',
    caption: 'Natural, glowing skin finish and effortless styling crafted with a personalized approach.',
  },
  {
    id: 'g-3',
    title: 'Tailored Hair Styling',
    category: 'hair',
    categoryLabel: 'Hair & Styling',
    imageUrl: '/src/assets/images/services_hair_styling_1792952371236.jpg',
    aspect: 'square',
    caption: 'Soft dimensional waves and glossy finish created by our hair styling specialists.',
  },
  {
    id: 'g-4',
    title: 'Clean Minimalist Manicure',
    category: 'nails',
    categoryLabel: 'Nails & Care',
    imageUrl: '/src/assets/images/services_manicure_detail_1792952371242.jpg',
    aspect: 'square',
    caption: 'Meticulous cuticle refinement and modern nude nail aesthetics with botanical nourishment.',
  },
  {
    id: 'g-5',
    title: 'Serene Facial & Skin Ritual',
    category: 'beauty',
    categoryLabel: 'Facial Care',
    imageUrl: '/src/assets/images/services_facial_skincare_1792952371352.jpg',
    aspect: 'landscape',
    caption: 'Restorative botanical serum infusion and calming facial massage for healthy, luminous skin.',
  },
  {
    id: 'g-6',
    title: 'Soft Glam Makeup Look',
    category: 'beauty',
    categoryLabel: 'Makeup',
    imageUrl: '/src/assets/images/gallery_makeup_look_1792952389234.jpg',
    aspect: 'portrait',
    caption: 'Tailored event makeup emphasizing natural features, feathered brows, and luminous skin tone.',
  },
  {
    id: 'g-7',
    title: 'Dimensional Honey Balayage',
    category: 'hair',
    categoryLabel: 'Hair & Coloring',
    imageUrl: '/src/assets/images/gallery_hair_color_1792952389700.jpg',
    aspect: 'portrait',
    caption: 'Hand-painted dimensional balayage with seamless transitions and healthy radiant texture.',
  },
  {
    id: 'g-8',
    title: 'Chic Gold Detail Nail Styling',
    category: 'nails',
    categoryLabel: 'Nails & Styling',
    imageUrl: '/src/assets/images/gallery_nail_art_chic_1792952389507.jpg',
    aspect: 'square',
    caption: 'Subtle micro gold foil detailing on clean manicured nails for an understated luxury statement.',
  },
  {
    id: 'g-9',
    title: 'Relaxation & Wellness Ritual',
    category: 'wellness',
    categoryLabel: 'Wellness',
    imageUrl: '/src/assets/images/gallery_relaxation_wellness_1792952389494.jpg',
    aspect: 'landscape',
    caption: 'Smooth warm stones, soothing aromatherapy, and quiet studio comfort to unwind.',
  },
];

export const WHY_AUTHENTIC = [
  {
    title: 'Beauty in One Place',
    description: 'A range of services designed to make your beauty routine easier.',
    highlight: 'Hair · Nails · Skincare · Wellness',
  },
  {
    title: 'Personal Attention',
    description: 'A welcoming environment focused on individual preferences.',
    highlight: 'Consultation-first approach',
  },
  {
    title: 'Modern Beauty',
    description: 'Contemporary beauty services in a comfortable studio setting.',
    highlight: 'Refined aesthetics & quiet luxury',
  },
  {
    title: 'Cluj-Napoca Location',
    description: 'Conveniently located on Calea Mănăștur.',
    highlight: 'Accessible & central address',
  },
];

export const TESTIMONIAL_PLACEHOLDERS = [
  {
    id: 'rev-1',
    text: 'Add verified client reviews here.',
    author: 'Verified Salon Client',
    treatment: 'Hair Styling & Blowout',
    date: 'Recent Visit',
    source: 'Google Reviews / Fresha',
    isDemoPlaceholder: true,
  },
  {
    id: 'rev-2',
    text: 'Add verified client reviews here.',
    author: 'Verified Salon Client',
    treatment: 'Manicure & Nail Care',
    date: 'Recent Visit',
    source: 'Google Reviews / Fresha',
    isDemoPlaceholder: true,
  },
  {
    id: 'rev-3',
    text: 'Add verified client reviews here.',
    author: 'Verified Salon Client',
    treatment: 'Facial Treatment & Glow',
    date: 'Recent Visit',
    source: 'Google Reviews / Fresha',
    isDemoPlaceholder: true,
  },
];
