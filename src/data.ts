// @ts-ignore
import regeneratedImageLawns from "./assets/images/regenerated_image_1781420341704.jpg";
// @ts-ignore
import regeneratedImageLawn2 from "./assets/images/regenerated_image_1781420487647.jpg";
// @ts-ignore
import regeneratedImageLawn3 from "./assets/images/regenerated_image_1781420772060.jpg";
// @ts-ignore
import regeneratedImageLawn4 from "./assets/images/regenerated_image_1781420915380.jpg";
// @ts-ignore
import regeneratedImageLawn5 from "./assets/images/regenerated_image_1781420925286.jpg";
// @ts-ignore
import regeneratedImageLawn6 from "./assets/images/regenerated_image_1781421170289.jpg";
// @ts-ignore
import regeneratedImageLawn7 from "./assets/images/regenerated_image_1781421310640.jpg";
// @ts-ignore
import regeneratedImageGallery1 from "./assets/images/regenerated_image_1781422266727.jpg";
// @ts-ignore
import regeneratedImageGallery2 from "./assets/images/regenerated_image_1781422611716.jpg";
// @ts-ignore
import regeneratedImageGallery3 from "./assets/images/regenerated_image_1781422790747.jpg";
// @ts-ignore
import regeneratedImageGallery4 from "./assets/images/regenerated_image_1781423075952.jpg";
// @ts-ignore
import regeneratedImageGallery5 from "./assets/images/regenerated_image_1781423319901.jpg";
// @ts-ignore
import regeneratedImageGallery6 from "./assets/images/regenerated_image_1781423568084.jpg";
// @ts-ignore
import regeneratedImageGallery7 from "./assets/images/regenerated_image_1781423788460.jpg";
// @ts-ignore
import regeneratedImageGallery8 from "./assets/images/regenerated_image_1781424044693.jpg";

export interface EventItem {
  title: string;
  desc: string;
  tag: string;
}

export interface LawnItem {
  name: string;
  area: string;
  desc: string;
  features: string[];
  img: string;
  details: string[];
  capacity: string;
}

export interface GalleryItem {
  cat: string;
  img: string;
  title?: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
  stars: number;
  avatar?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface AdvantageItem {
  title: string;
  desc: string;
  tag: string;
  stat?: string;
}

export const eventsData: EventItem[] = [
  { 
    title: "Wedding Celebrations", 
    desc: "Symphonized under Lucknow's skies. Sprawling manicured lawns for grand functions.", 
    tag: "Wedding Lawn" 
  },
  { 
    title: "Destination Weddings", 
    desc: "All-inclusive premium resort experiences with complete bridal suites and logistics.", 
    tag: "Resort for Events" 
  },
  { 
    title: "Engagement ceremonies", 
    desc: "Roka rituals under romantic fairy-light canopies and pristine floral backdrops.", 
    tag: "Engagement Venue" 
  },
  { 
    title: "Corporate Events", 
    desc: "Conferences, executive awards, and corporate gala dinners utilizing high-performance layouts.", 
    tag: "Corporate Venue" 
  },
  { 
    title: "Birthday Parties", 
    desc: "Trendy outdoor sundowners, young themes, and live mocktail lounges close to nature.", 
    tag: "Birthday Venue" 
  },
  { 
    title: "Indoor Banqueting", 
    desc: "High-ceilinged neoclassical indoor crystal halls with premium temperature control.", 
    tag: "Banquet Hall" 
  }
];

export const lawnsData: LawnItem[] = [
  { 
    name: "Shivansh Lawn", 
    area: "1,00,000 Sq. Ft.",
    capacity: "1,000 – 6,000 Guests",
    desc: "Our signature and largest lawn domain adjacent to Janeshwar Mishra Park, designed for grand monumental Indian weddings, high-end celebrity nights, and majestic elite blockbusters.", 
    features: ["Grand Indian Weddings", "State Banquets", "Live Concerts & Festivals", "Mega Receptions"], 
    img: regeneratedImageLawns,
    details: [
      "Colossal 1 lakh sq. ft. of continuous manicured grass area",
      "Perfect for premium stage & German Hanger installations",
      "Glow-ambient perimeter lighting & grand classic archways",
      "High-capacity dedicated food & catering zones"
    ]
  },
  { 
    name: "Sham E Awadh Lawn", 
    area: "60,000 Sq. Ft.",
    capacity: "500 – 3,000 Guests",
    desc: "An absolute visual masterpiece reflecting the heritage luxury and royal essence of Lucknow. Soft landscape illumination paired with manicured margins creates pure celebratory magic.", 
    features: ["Traditional Sangeet", "Cultural Festivals", "Grand Awadhi Theme Nights", "Royal Receptions"], 
    img: regeneratedImageLawn2,
    details: [
      "Lush, seamless 60,000 sq. ft. premium green carpet",
      "Aesthetic design crafted for traditional Awadhi evenings & Sangeet",
      "Stately peripheral visual planters & designer white pergolas",
      "Vibrant pre-function zones for interactive live gastronomic bars"
    ]
  },
  { 
    name: "Pine Valley", 
    area: "45,000 Sq. Ft.",
    capacity: "300 – 1,500 Guests",
    desc: "A dreamy alpine-inspired secret garden retreat right inside Lucknow. Towering pine borders and romantic lighting wrap your guests in an intimate, high-class European resort glow.", 
    features: ["Destination Garden Weddings", "Intimate Cocktail Nights", "Forest Engagements", "Rustic Themed Banquets"], 
    img: regeneratedImageLawn3,
    details: [
      "Spectacular woodland glade enclosed by towering alpine style pines",
      "Immersive warm fairy-light canopy for starry evening celebrations",
      "Bespoke rustic botanical pathways and interactive live bars",
      "Premium boutique custom gazebo perfect for exquisite ring ceremonies"
    ]
  },
  { 
    name: "Nakshatra Banquet", 
    area: "990 Sq. Ft.",
    capacity: "30 – 100 Guests",
    desc: "A jewel box of pure architectural elegance. Exquisite gold accents, luxury glass facades, and modular seating choices make every intimate celebration truly stellar.", 
    features: ["ROKA CEREMONIES", "PRIVATE FAMILY DINNERS", "LEGACY VOWS & RITUALS", "EXECUTIVE BOARD MEETS"], 
    img: regeneratedImageLawn4,
    details: [
      "Intimate custom layout adorned with atmospheric cosmic lighting",
      "Perfect for close-knit legacy rituals, Roka, or executive board meets",
      "Advanced acoustic system and premium marble interior finishes",
      "Fully air-conditioned luxury seating and personal butler configurations"
    ]
  },
  { 
    name: "Mandapam", 
    area: "5,000 Sq. Ft.",
    capacity: "50 – 200 Guests",
    desc: "Our high-end indoor ballroom masterpiece. Combining classic Italian marble underflooring with modern absolute climate comfort for flawless celebrations.", 
    features: ["Grand Pre-Wedding Functions", "Sagan & Haldi Ceremonies", "Corporate Seminars & Keynotes", "Premium Social Gatherings"], 
    img: regeneratedImageLawn5,
    details: [
      "Stately double-height classical ceilings with gilded moldings",
      "Imported premium Belgian crystal chandeliers for a warm gold wash",
      "Dedicated indoor stage tailored for pre-wedding rituals & sagai",
      "Direct interconnected access to luxury air-conditioned bridal walk-ins"
    ]
  },
  { 
    name: "Bamboo Valley", 
    area: "5,000 Sq. Ft.",
    capacity: "50 – 300 Guests",
    desc: "Lucknow's first botanical bamboo reserve styled with gorgeous organic layouts. Wrap your daytime rituals in lush, vibrant green shade and cooling tropical breezes.", 
    features: ["DAY MEHENDI LOUNGES", "VIBRANT HALDI CEREMONIES", "EXOTIC OPEN-AIR HIGH TEAS", "TROPICAL COCKTAIL MIXERS"], 
    img: regeneratedImageLawn6,
    details: [
      "Enclosed by beautiful, natural high-climbing bamboo groves",
      "Exotic open-air layout with premium rustic natural aesthetics",
      "Perfect for organic biological mocktail lounges and day mehendi",
      "Integrated designer warm landscape downlighting for evening charms"
    ]
  },
  { 
    name: "Gen Z", 
    area: "2,000 Sq. Ft.",
    capacity: "10 – 100 Guests",
    desc: "A boutique natural open-air canvas designed for modern minimalists. Its visual geometric tiers and custom lighting accents offer the ultimate high-fashion photogenic setup.", 
    features: ["High-Fashion Cocktail Meetups", "Trendy Sundowner Sessions", "Aesthetic Art & Photo Shoots", "Modern Minimalist Socials"], 
    img: regeneratedImageLawn7,
    details: [
      "Highly artistic, modern multi-tiered open lawn layout",
      "Relaxed minimal loungers paired with panoramic visual greenery",
      "Bespoke audio system configurations & custom artisan mocktail bar",
      "Ultimate choice for trendy young cohorts & high-fashion cocktail meetups"
    ]
  }
];

export const galleryItems: GalleryItem[] = [
  { cat: "Weddings", img: regeneratedImageGallery1, title: "Luxury Wedding Stage" },
  { cat: "Receptions", img: regeneratedImageGallery2, title: "Elegant Reception Set Table" },
  { cat: "Design Decor", img: regeneratedImageGallery3, title: "Floral Ceiling Sculptures" },
  { cat: "Corporate Galas", img: regeneratedImageGallery4, title: "Sleek Executive Stage" },
  { cat: "Catering Setup", img: regeneratedImageGallery5, title: "Gourmet Awadhi Buffet Layout" },
  { cat: "Engagements & Sagan", img: regeneratedImageGallery6, title: "Sagan Floral Entry Set-up" },
  { cat: "Celebrations & Parties", img: regeneratedImageGallery7, title: "Starlight Pathway Lights" },
  { cat: "Weddings", img: regeneratedImageGallery8, title: "Classical Mandap Setup" }
];

export const testimonials: TestimonialItem[] = [
  { 
    name: "Aanya & Rohan Sharma", 
    text: "The Venetian Garden made our wedding day feel like a fairy tale. Every guest was mesmerized by the decor and service. Truly the best luxury wedding venue in Lucknow!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=150&h=150&fit=crop&q=80"
  },
  { 
    name: "Priya & Vikram Gupta", 
    text: "Absolutely magnificent! The team handled our grand reception with precision. World-class culinary spreads, elite valet logistics and exquisite lighting.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=150&h=150&fit=crop&q=80"
  },
  { 
    name: "Sunita Agarwal", 
    text: "Best corporate event experience in Lucknow. Professional staff, flawless execution, premium stage support and stunning natural ambience.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80"
  },
  { 
    name: "Meera & Arjun Kapoor", 
    text: "Pine Valley was dreamy! The fairy forest lighting and natural beauty created sheer magic for our cozy engagement night.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=150&h=150&fit=crop&q=80"
  },
  { 
    name: "Rajesh Khanna Family", 
    text: "Royal hospitality, exquisite Awadhi catering, and massive lush lawns. Highly recommended for premium family weddings.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=150&h=150&fit=crop&q=80"
  },
  { 
    name: "Kriti Mehra", 
    text: "The Bamboo Valley for our daytime Mehendi was incredibly fresh and unique. It is a stunning background for perfect photos!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?w=150&h=150&fit=crop&q=80"
  }
];

export const advantagesData: AdvantageItem[] = [
  {
    title: "7 Acres of Landscaped Event Space",
    desc: "A gigantic botanical resort next to Janeshwar Mishra Park Gate No. 5, featuring pure flora.",
    tag: "RESORT ESTATE",
    stat: "7 Acres"
  },
  {
    title: "Capacity up to 15,000 Guests",
    desc: "Engineered with majestic proportions optimized to host Lucknow's blockbuster celebrity weddings.",
    tag: "MAJESTIC PROPORTIONS",
    stat: "15,000+"
  },
  {
    title: "Parking for 3,000+ Vehicles",
    desc: "Lucknow's largest secure paved parking lot with seamless dual-bay valet services.",
    tag: "CONGESTION-FREE",
    stat: "3,000+"
  },
  {
    title: "Premium Banquets & Wedding Lawns",
    desc: "Elite hybrid layouts providing modular high-ceilinged indoor luxury or magnificent open meadows.",
    tag: "ELITE HYBRID",
    stat: "7 Venues"
  },
  {
    title: "Fine Dining & Gourmet Catering",
    desc: "Lucknow's finest chef-led culinary experiences, from authentic Awadhi feasts to Global fine foods.",
    tag: "GASTRONOMY",
    stat: "Awadhi & Global"
  },
  {
    title: "Luxury Rooms & Suites Included",
    desc: "Elegant luxury accommodations, private guest lounges and specialized bridal vanity suites.",
    tag: "LUXURY HOSPITALITY",
    stat: "Deluxe Rooms"
  }
];

export const faqsData: FAQItem[] = [
  {
    q: "What types of events can be hosted at The Venetian Garden?",
    a: "The Venetian Garden hosts luxury weddings, receptions, engagement ceremonies, corporate events, social gatherings, birthday celebrations, and large-scale private events."
  },
  {
    q: "What is the maximum guest capacity available?",
    a: "Our venue is designed to accommodate celebrations of different scales with event spaces that can host intimate gatherings as well as grand events for up to 15,000+ guests."
  },
  {
    q: "Do you provide catering and decoration services?",
    a: "Yes, we offer complete event support including catering, decoration, hospitality coordination, and venue arrangements to help create a seamless celebration experience."
  },
  {
    q: "Is parking available for guests?",
    a: "Yes, The Venetian Garden provides spacious parking facilities with capacity for 3,000+ vehicles to ensure convenience for all guests."
  },
  {
    q: "Are there multiple venue options available for different event sizes?",
    a: "Yes, we offer multiple venue spaces including premium lawns, banquet halls, and dedicated celebration areas suitable for different guest capacities and event styles."
  },
  {
    q: "Can we schedule a venue visit before booking?",
    a: "Absolutely. We encourage guests to schedule a venue visit and experience the ambiance, infrastructure, and available spaces before confirming their celebration."
  }
];

export const videoTestimonialsUrls: string[] = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ"
];
