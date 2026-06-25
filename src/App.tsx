import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import regeneratedImage from "./assets/images/regenerated_image_1781420148682.jpg";
// @ts-ignore
import regeneratedHeroImage from "./assets/images/regenerated_image_1781760992857.jpg";
import { VenetianGardenLogo } from "./components/VenetianGardenLogo";
import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Compass, 
  Calendar, 
  Award, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  Download, 
  BookOpen, 
  Users, 
  Car, 
  Clock, 
  Heart, 
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Facebook,
  Instagram,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Eye,
  Film,
  Tv
} from "lucide-react";
import { 
  eventsData, 
  lawnsData, 
  galleryItems, 
  testimonials, 
  advantagesData, 
  faqsData,
  videoTestimonialsUrls
} from "./data";

// Floating Action Button Component
function FloatingActions() {
  return (
    <>
      {/* WhatsApp float on left bottom corner */}
      <a 
        href="https://wa.me/919044951919" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-gold text-white hover:text-wine-deep p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(201,168,76,0.6)] border-2 border-gold transition-all duration-300 hover:scale-115 flex items-center justify-center group animate-bounce-slow"
        aria-label="Contact us on WhatsApp"
        id="whatsapp-float"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute left-14 bg-charcoal text-gold-light text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-gold/30">
          Chat on WhatsApp
        </span>
      </a>

      {/* Improved Call float on right bottom corner */}
      <a 
        href="tel:+919044951919" 
        className="fixed bottom-6 right-6 z-50 bg-wine hover:bg-gold hover:text-wine-deep text-gold-light p-4 rounded-full shadow-[0_10px_25px_rgba(139,24,56,0.3)] hover:shadow-[0_15px_30px_rgba(201,168,76,0.5)] border-2 border-gold transition-all duration-300 hover:scale-115 flex items-center justify-center group animate-bounce-slow"
        aria-label="Call Concierge"
        id="call-float"
      >
        <Phone className="w-6 h-6 stroke-current animate-wiggle" />
        <span className="absolute right-14 bg-charcoal text-gold-light text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-gold/30">
          Call +91 90449 51919
        </span>
      </a>
    </>
  );
}

// Animate Counters Hook and Component
function CounterItem({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let start = 0;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animate = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elementRef} className="bg-wine-dark/40 p-6 md:p-8 text-center border-r border-gold/15 last:border-r-0 flex flex-col justify-center transition-colors hover:bg-wine-dark/60">
      <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold tracking-tight mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-xs md:text-sm font-medium text-blush tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
}

// Interactive animated separator which elongates and spins on hover
function PremiumSeparator({ light = false }: { light?: boolean }) {
  return (
    <div className="group/sep flex items-center justify-center gap-4 my-5 cursor-pointer max-w-xs mx-auto" title="Heritage Star Motif">
      <div className={`h-[1.5px] w-12 transition-all duration-750 ease-out group-hover/sep:w-24 ${light ? 'bg-gold/50 group-hover/sep:bg-gold' : 'bg-gold group-hover/sep:bg-wine'}`} />
      <div className={`w-2.5 h-2.5 rotate-45 transition-all duration-750 ease-out group-hover/sep:rotate-[225deg] group-hover/sep:scale-135 ${light ? 'bg-gold' : 'bg-gold group-hover/sep:bg-wine'}`} />
      <div className={`h-[1.5px] w-12 transition-all duration-750 ease-out group-hover/sep:w-24 ${light ? 'bg-gold/50 group-hover/sep:bg-gold' : 'bg-gold group-hover/sep:bg-wine'}`} />
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState("All Works");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);

  // Inquiry form states
  const [inquiryFirstName, setInquiryFirstName] = useState("");
  const [inquiryLastName, setInquiryLastName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryGuestCount, setInquiryGuestCount] = useState("500");
  const [inquiryVenue, setInquiryVenue] = useState("Shivansh Lawn");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<any[]>([]);
  const [showInquiriesDrawer, setShowInquiriesDrawer] = useState(false);

  // Load inquiries from localStorage
  useEffect(() => {
    try {
      const existing = localStorage.getItem("venetian_garden_inquiries");
      if (existing) {
        setSavedInquiries(JSON.parse(existing));
      }
    } catch (e) {
      console.error("Local storage reading error", e);
    }
  }, []);

  const handleInquirySubmit = (e: React.FormEvent) => {
    // We do NOT call e.preventDefault() so standard HTML form submit can target the hidden iframe!
    if (!inquiryLastName || !inquiryPhone) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);

    const fullName = `${inquiryFirstName} ${inquiryLastName}`.trim();
    const newInquiry = {
      id: Date.now(),
      name: fullName,
      phone: inquiryPhone,
      email: inquiryEmail || "Not Provided",
      date: inquiryDate || "Not Decided",
      guestCount: inquiryGuestCount,
      venue: inquiryVenue,
      timestamp: new Date().toLocaleDateString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "short"
      })
    };

    const updated = [newInquiry, ...savedInquiries];
    setSavedInquiries(updated);
    try {
      localStorage.setItem("venetian_garden_inquiries", JSON.stringify(updated));
    } catch (err) {
      console.error("Local storage save error", err);
    }

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Auto reset submission alert after 4.5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setInquiryFirstName("");
      setInquiryLastName("");
      setInquiryPhone("");
      setInquiryEmail("");
      setInquiryDate("");
    }, 4500);
  };

  const deleteInquiry = (id: number) => {
    const filtered = savedInquiries.filter(item => item.id !== id);
    setSavedInquiries(filtered);
    try {
      localStorage.setItem("venetian_garden_inquiries", JSON.stringify(filtered));
    } catch (err) {
      console.error(err);
    }
  };

  const downloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://drive.google.com/file/d/1nMaYpVmckbYFn9nq0DBM_tLpAOMhwwSQ/view", "_blank");
  };

  // Filter gallery items
  const filteredGallery = galleryCategory === "All Works" 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === galleryCategory);

  const galleryTabs = [
    "All Works",
    "Weddings",
    "Receptions",
    "Design Decor",
    "Corporate Galas",
    "Catering Setup",
    "Engagements & Sagan",
    "Celebrations & Parties"
  ];

  // Testimonial Navigation
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-ivory text-text-dark selection:bg-gold selection:text-wine-deep relative">
      
      {/* EXQUISITE STICKY HEADER SYSTEM (Interactive Top Info Ribbon + Solid Luxury Nav) */}
      <header className="sticky top-0 z-[80] w-full shadow-lg">
        
        {/* TOP CONTACT BAR (3 Columns with clickable & hover zoom effects) */}
        <div className="bg-wine-deep border-b border-gold/15 py-2 sm:py-2.5 text-[10px] sm:text-xs text-gold-light/90 relative z-[90] transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left">
            
            {/* Column 1: Client Email */}
            <div className="flex items-center gap-1.5 transition-transform duration-300 hover:scale-[1.04] cursor-pointer">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
              <a href="mailto:thevenetiangarden3@gmail.com" className="hover:text-white transition-colors tracking-wide font-light">
                thevenetiangarden3@gmail.com
              </a>
            </div>

            {/* Column 2: Hotlines & Office Numbers */}
            <div className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-[1.04] cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              <div className="flex items-center gap-1.5 font-medium">
                <a href="tel:+919044951919" className="hover:text-white transition-colors tracking-wider hover:brightness-110">+91 90449 51919</a>
                <span className="text-gold/30">|</span>
                <a href="tel:+919026352450" className="hover:text-white transition-colors tracking-wider hover:brightness-110">+91 90263 52450</a>
              </div>
            </div>

            {/* Column 3: Social Links & Digital Connect */}
            <div className="flex items-center gap-3">
              <span className="text-[9px] uppercase text-gold-light/50 tracking-widest font-light mr-1 hidden md:inline">Connect with us:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/919044951919" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-135 text-gold hover:text-[#25D366] cursor-pointer flex items-center justify-center"
                  title="Contact WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
                </a>
                <a 
                  href="https://www.facebook.com/people/Venetian-Garden/pfbid02ANzVquQFwsS9xTtJLjU8bGRTUhnbyYQUeGbgGHHTCPMs3rtAGJgon28iNyVcfhb6l" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-135 text-gold hover:text-sky-400 cursor-pointer flex items-center justify-center"
                  title="Follow Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 fill-none stroke-current" />
                </a>
                <a 
                  href="https://www.instagram.com/the_venetiangarden_?utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-135 text-gold hover:text-[#E1306C] cursor-pointer flex items-center justify-center"
                  title="Follow Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 fill-none stroke-current" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* SOLID LUXURY MENU BAR / MAIN NAVIGATION BAR */}
        <nav className="bg-wine-deep border-b border-gold/20 py-3 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group transition-all">
            <VenetianGardenLogo className="h-10 w-10 md:h-12 md:w-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
            <div className="transition-transform duration-500 group-hover:scale-105 origin-left">
              <span className="font-serif text-lg md:text-xl font-bold text-ivory tracking-tight block transition-colors duration-300 group-hover:text-gold group-hover:drop-shadow-[0_0_8px_rgba(201,168,76,0.6)]">
                The Venetian Garden
              </span>
              <span className="text-[10px] uppercase text-gold tracking-widest block -mt-1 transition-colors duration-300 group-hover:text-gold-light">
                Luxury Event Venue &middot; Lucknow
              </span>
            </div>
          </a>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center gap-1">
            <a href="#home" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Home</a>
            <a href="#heritage" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Heritage</a>
            <a href="#events" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Events</a>
            <a href="#advantage" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Advantage</a>
            <a href="#lawns" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Lawns</a>
            <a href="#testimonials" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Testimonials</a>
            <a href="#gallery" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Contact</a>
            
            <button 
              onClick={downloadBrochure}
              className="ml-4 text-xs font-semibold text-gold-light px-4 py-2 border border-gold bg-wine hover:bg-gold hover:text-wine-deep transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Brochure
            </button>

            {savedInquiries.length > 0 && (
              <button 
                onClick={() => setShowInquiriesDrawer(true)}
                className="ml-2 text-xs font-semibold text-white px-3 py-2 bg-amber-700/80 hover:bg-amber-600 rounded-md transition-all flex items-center gap-1 relative"
              >
                <Compass className="w-3.5 h-3.5" />
                My Enquiries
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-wine-deep rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px]">
                  {savedInquiries.length}
                </span>
              </button>
            )}
          </div>

          {/* Hamburger Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {savedInquiries.length > 0 && (
              <button 
                onClick={() => setShowInquiriesDrawer(true)}
                className="text-xs font-semibold text-white p-2 bg-amber-700/80 rounded-md transition-all flex items-center justify-center"
                title="View Saved Enquiries"
              >
                <Compass className="w-4 h-4" />
              </button>
            )}

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gold-light hover:text-white p-1"
              aria-label="Toggle navigation list"
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-wine-deep border-b border-gold/30 shadow-2xl z-[90]">
            <div className="px-4 pt-2 pb-6 space-y-3">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Home
              </a>
              <a 
                href="#heritage" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Heritage
              </a>
              <a 
                href="#events" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Events
              </a>
              <a 
                href="#advantage" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Advantage
              </a>
              <a 
                href="#lawns" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Lawns
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Testimonials
              </a>
              <a 
                href="#gallery" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Contact
              </a>
              
              <div className="pt-2 flex flex-col gap-2">
                <button 
                  onClick={(e) => { downloadBrochure(e); setIsMenuOpen(false); }}
                  className="w-full text-center text-sm font-semibold text-gold-light bg-wine border border-gold py-2.5 rounded hover:bg-gold hover:text-wine-deep transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      </header>

      {/* BACKGROUND FLOATER INTERACTION WINDOW */}
      <FloatingActions />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[85vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={regeneratedHeroImage} 
            alt="The Venetian Garden Lucknow Venue Setting" 
            className="w-full h-full object-fit object-cover animate-hero-zoom filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 premium-gradient-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-8">
          <p className="text-xs sm:text-sm font-semibold text-gold tracking-[0.3em] uppercase mb-4 animate-fade-in flex items-center justify-center gap-2">
            <span>✦</span> LUCKNOW'S PREMIER LUXURY RESORT VENUE <span>✦</span>
          </p>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ivory tracking-tight leading-tight mb-6"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="block"
            >
              Where Luxury Celebrations
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-blush pb-1"
            >
              Become Timeless Memories
            </motion.span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-blush/90 leading-relaxed font-light mb-8">
            Experience magnificent dual landscaped lawns, neoclassical high-ceilinged banqueting, and legendary food spreads designed to host elite Indian weddings next to Janeshwar Mishra Park, Lucknow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center px-8 py-4 font-bold text-wine-deep bg-gold hover:bg-transparent hover:text-gold hover:border-gold border border-gold transition-all duration-500 rounded shadow-xl hover:shadow-[0_0_20px_rgba(201,168,76,0.35)] transform hover:-translate-y-1 flex items-center justify-center gap-2.5 uppercase tracking-wider text-xs cursor-pointer group"
            >
              <span>Enquire & Callback</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <button 
              onClick={downloadBrochure}
              className="w-full sm:w-auto text-center px-8 py-3.5 font-semibold text-gold-light bg-transparent hover:bg-white/5 border border-gold/50 hover:border-gold transition-all duration-300 rounded flex items-center justify-center gap-2"
              id="hero-download-brochure"
            >
              <Download className="w-4 h-4" />
              <span>Download Digital Brochure</span>
            </button>
          </div>
        </div>

        {/* Diagonal border aesthetic */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-wine-deep to-transparent opacity-80"></div>
      </section>

      {/* HIGHLIGHTS / COUNTERS DYNAMIC PANEL */}
      <section className="bg-wine-deep text-white border-y border-gold/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-gold/10">
            <CounterItem target={15000} label="Guest Capacity" />
            <CounterItem target={3000} label="Parking Spaces" />
            <CounterItem target={5} label="Premium Lawns" />
            <CounterItem target={3} label="Banquet Halls" />
            <CounterItem target={500} label="Events Hosted" />
            <CounterItem target={24} label="Support Concierge" />
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section id="heritage" className="py-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-1.5 animate-pulse">
              ✦ ESTEEMED LUXURY HERITAGE ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine-dark leading-tight mt-1">
              Lucknow's Grandest Natural <br className="hidden sm:inline" />
              <span className="italic font-normal">Stage of Celebration</span>
            </h2>
            <PremiumSeparator />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <h3 className="font-serif text-2xl font-bold text-wine leading-snug">
                Nestled adjacent to Gomti Nagar Vistar's majestic Janeshwar Mishra Park.
              </h3>
              
              <p className="text-text-mid text-sm sm:text-base leading-relaxed">
                The Venetian Garden is a bespoke luxury event resort architected with classical Roman columns, giant emerald meadows, and modular high-capacity indoor crystal banquets. It provides families the perfect canvas to paint landmark social chapters and grand monumental Indian weddings.
              </p>

              <p className="text-text-mid text-sm sm:text-base leading-relaxed">
                From rich, slow-simmered Nawabi Awadhi feasts curated by traditional Khansamas to pristine global modern fine dining plates, our gourmet experiences are completely personalized to stun your guests. Our lush, manicured garden settings allow you to choose an atmosphere that represents your elevated standard.
              </p>

              {/* Grid properties */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-l-2 border-wine pl-4 hover:border-gold transition-colors duration-300"
                >
                  <div className="font-serif text-lg font-bold text-wine-dark">1.5 Lakh</div>
                  <div className="text-xs text-text-mid">Total Sq. Ft space</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border-l-2 border-wine pl-4 hover:border-gold transition-colors duration-300"
                >
                  <div className="font-serif text-lg font-bold text-wine-dark">Gate No. 5</div>
                  <div className="text-xs text-text-mid">Adjacent Landmark</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="border-l-2 border-wine pl-4 hover:border-gold transition-colors duration-300"
                >
                  <div className="font-serif text-lg font-bold text-wine-dark">3,000+ Cars</div>
                  <div className="text-xs text-text-mid">Valet Area Capacity</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="border-l-2 border-wine pl-4 hover:border-gold transition-colors duration-300"
                >
                  <div className="font-serif text-lg font-bold text-wine-dark">Bespoke</div>
                  <div className="text-xs text-text-mid">Awadhi Food spreads</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Showcase Banner card */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group/image duration-500">
                <img 
                  src={regeneratedImage} 
                  alt="The Venetian Garden upscale wedding reception setting" 
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover/image:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <p className="italic text-blush font-serif text-sm sm:text-base leading-relaxed mb-1">
                    “An emerald floral paradise lined under beautiful classical structures, creating monumental family history.”
                  </p>
                  <p className="text-[10px] text-gold uppercase tracking-widest font-semibold">
                    The Venetian Vision
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-gold/40 rounded-bl-2xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r-4 border-t-4 border-gold/40 rounded-tr-2xl -z-10"></div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* EVENTS WE HOST SECTION */}
      <section id="events" className="py-20 bg-wine-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(114,47,55,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-1.5">
              ✦ LUCKNOW'S MATCHLESS ARENA ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mt-1">
              Celebrated Occasions & Events
            </h2>
            <PremiumSeparator light />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group bg-wine-dark/40 border border-gold/10 hover:border-gold/40 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-gold tracking-wider block mb-3 uppercase">
                    {event.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ivory mb-3 group-hover:text-gold-light transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-blush/80 text-sm leading-relaxed mb-6">
                    {event.desc}
                  </p>
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-light group-hover:text-gold transition-colors"
                >
                  <span>Enquire Setup Structure</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* THE ADVANTAGES SECTION */}
      <section id="advantage" className="py-20 bg-ivory text-text-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-2">
              ✦ OUR PRIME ADVANTAGE VALUE ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine-dark leading-tight">
              Why Choose <span className="italic font-normal">The Venetian Garden</span>
            </h2>
            <PremiumSeparator />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantagesData.map((adv, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#EBE3D5] rounded-xl p-8 hover:shadow-2xl transition-all duration-350 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-bold text-wine bg-wine/5 rounded-full px-3 py-1 uppercase tracking-wider">
                      {adv.tag}
                    </span>
                    {adv.stat && (
                      <span className="font-serif text-sm font-semibold text-gold-light group-hover:text-gold transition-colors">
                        {adv.stat}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-wine-dark mb-2 group-hover:text-wine transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-text-mid text-xs sm:text-sm leading-relaxed mb-4">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400">Verified Facility</span>
                  <Check className="w-4 h-4 text-gold" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DISCOVER SPACES (LAWNS & BANQUETS) */}
      <section id="lawns" className="py-20 bg-wine-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-2">
              ✦ WORLD CLASS SEGMENTS ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine-dark">
              THE MAJESTIC DOMAIN
            </h2>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mt-1">
              Our Curated Celebration Venues
            </p>
            <PremiumSeparator />
            <p className="text-text-mid text-sm sm:text-base max-w-xl mx-auto">
              Explore our masterfully segmented lawns, intimate valleys, and majestic indoor banquet spaces customized for Lucknow's premium hosting requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawnsData.map((lawn, i) => (
              <div key={i} className="group bg-white/75 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_25px_45px_rgba(139,24,56,0.18)] transition-all duration-500 border border-[#E5DEC9]/90 flex flex-col justify-between transform hover:-translate-y-1.5 hover:bg-white/90">
                <div>
                  <div className="h-60 relative overflow-hidden">
                    <img 
                      src={lawn.img} 
                      alt={lawn.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-wine text-gold-light py-1 px-3 text-[11px] font-bold rounded shadow-md border border-gold/20">
                      {lawn.area}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-wine-deep/95 text-gold-light py-1 px-3 text-[11px] font-bold rounded shadow-md border border-gold/30 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-light" />
                      <span>{lawn.capacity}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl text-gold">❧</span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-wine-dark group-hover:text-wine transition-colors">
                        {lawn.name}
                      </h3>
                    </div>
                    
                    <p className="text-text-mid text-xs sm:text-sm leading-relaxed mb-4 font-light">
                      {lawn.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {lawn.features.map((feat, fi) => (
                        <span key={fi} className="text-[9px] font-bold text-wine uppercase tracking-wider bg-wine/5 px-2.5 py-1 rounded-sm border border-wine/10">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Highly descriptive sub-bullets */}
                    <div className="space-y-2 mt-4 pt-4 border-t border-gold/15">
                      {lawn.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-gold text-xs leading-5 select-none mt-0.5">✦</span>
                          <span className="text-xs text-text-mid leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-50">
                  <a 
                    href="#contact" 
                    className="w-full text-center py-2.5 bg-wine hover:bg-gold hover:text-wine-deep text-gold-light text-xs font-semibold rounded block transition-all duration-300 border border-gold/30 shadow-sm"
                  >
                    Schedule Private Lawn Tour →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SLIDER SECTION */}
      <section id="testimonials" className="py-20 bg-wine-deep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-2">
              ✦ PATRON TESTIMONIALS ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
              Praised By Grand Families
            </h2>
            <PremiumSeparator light />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Slide active box */}
            <div className="bg-wine-dark/50 border border-gold/25 rounded-2xl p-8 md:p-12 relative shadow-2xl transition-all duration-500 transform scale-100">
              <span className="text-6xl text-gold/20 font-serif absolute -top-2 left-6 pointer-events-none">“</span>
              
              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl italic text-blush leading-relaxed">
                  {testimonials[testimonialIndex].text}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gold/15 gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="text-base font-bold text-gold">
                        {testimonials[testimonialIndex].name}
                      </h4>
                      <p className="text-xs text-blush/60 uppercase tracking-widest mt-1">Patron Family</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonials[testimonialIndex].stars)].map((_, starI) => (
                      <Star key={starI} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full border border-gold/40 hover:border-gold hover:bg-gold hover:text-wine-deep text-gold-light transition-all flex items-center justify-center cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="text-xs font-medium text-blush/80">
                {testimonialIndex + 1} of {testimonials.length}
              </span>

              <button 
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full border border-gold/40 hover:border-gold hover:bg-gold hover:text-wine-deep text-gold-light transition-all flex items-center justify-center cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* VIDEO TEASERS SECTION */}
      <section className="py-20 bg-ivory text-text-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-2">
              ✦ CINEMATIC CELEBRATIONS ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine-dark">
              Grand Venue Teaser
            </h2>
            <PremiumSeparator />
            <p className="text-sm text-text-mid max-w-xl mx-auto">
              Witness the mesmerizing beauty, neoclassical architecture, and spectacular ambiance of Lucknow's finest luxury banquets and lawns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Elegant Video Presentation Box */}
            <div className="bg-white/75 backdrop-blur-md border border-gold/25 rounded-2xl p-4 sm:p-6 md:p-8 relative shadow-2xl transition-all duration-500">
              
              <div className="relative z-10 space-y-6">
                {/* Embedded Video Display Screen */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-inner border-2 border-gold/30">
                  <iframe 
                    title="The Venetian Garden Official Venue Teaser"
                    src="https://drive.google.com/file/d/1CNNCCOxBTvvEPL1A3v3JXgs4SRCJw34v/preview" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                  />
                </div>

                {/* Video Info Label */}
                <div className="pt-4 border-t border-gold/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-lg md:text-xl font-bold text-wine-dark">
                      Featured Teaser: Cinematic Tour of The Venetian Garden
                    </h4>
                    <p className="text-xs text-gold font-bold tracking-wider uppercase mt-1">
                      Grand Portals • Immersive Architectural Experience
                    </p>
                    <p className="text-xs text-text-mid leading-relaxed mt-2 font-light max-w-2xl">
                      Experience Lucknow's ultimate landmark of luxury celebrations, located adjacent to Janeshwar Mishra Park. Step into 1 Lakh sq. ft. of neoclassical master-crafts, majestic musical fountains, royal wedding staging, beautiful lawns, and exceptional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-wine-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-2">
              ✦ THE CHRONICLE OF BEAUTY ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
              A Visual Promenade
            </h2>
            <PremiumSeparator light />
            <p className="text-blush/80 text-xs sm:text-sm tracking-wide max-w-xl mx-auto">
              Browse our high-contrast photo logs showcasing real weddings, pristine receptions, nighttime lighting arrangements, and royal banquet staging tables.
            </p>
          </div>

          {/* Filtering Categories Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-5xl mx-auto">
            {galleryTabs.map((tab, tid) => (
              <button 
                key={tid}
                onClick={() => setGalleryCategory(tab)}
                className={`text-xs px-4 py-2 border rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  galleryCategory === tab 
                    ? "bg-gold border-gold text-wine-deep shadow-lg scale-105" 
                    : "border-gold/30 hover:border-gold text-gold-light bg-transparent hover:bg-wine/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-xl overflow-hidden aspect-square border border-gold/10 hover:border-gold/40 shadow-md bg-wine-dark/20 h-64 w-full"
              >
                <img 
                  src={item.img} 
                  alt={item.title || "The Venetian Garden View"}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient shade overlays */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <span className="text-[10px] text-gold uppercase tracking-widest mb-1">
                    {item.cat}
                  </span>
                  <p className="font-serif text-sm font-semibold text-white leading-tight">
                    {item.title || "The Venetian Garden Area"}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REQUEST CALLBACK FORM SECTION */}
      <section id="contact" className="py-20 bg-white text-text-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] border border-gold/20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
              
              {/* Info Column */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <span className="text-xs font-semibold text-wine tracking-widest uppercase block mb-2">
                    ✦ LET'S HOST YOUR CELEBRATION ✦
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine-dark leading-tight">
                    Let's Plan Your <br />
                    <span className="italic font-normal">Perfect Event</span>
                  </h2>
                  <div className="h-1 w-16 bg-gold mt-4"></div>
                </div>

                <div className="space-y-6">
                  {/* Address Grid */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-wine text-sm uppercase tracking-wider mb-1">
                        Venue Location
                      </h4>
                      <p className="text-text-mid text-sm leading-relaxed">
                        Near G20 Underpass, Gate No. 5, Janeshwar Mishra Park,<br />Gomti Nagar Vistar, Lucknow, UP - 226010
                      </p>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-wine text-sm uppercase tracking-wider mb-1">
                        Lawn Touring Hours
                      </h4>
                      <p className="text-text-mid text-sm">
                        Daily: 09:30 AM – 08:30 PM &middot; Guided Tour Services
                      </p>
                    </div>
                  </div>

                  {/* Hotlines */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-wine text-sm uppercase tracking-wider mb-1">
                        Concierge Hotlines
                      </h4>
                      <p className="text-text-mid text-sm space-y-1">
                        <span className="block">📞 Call: <a href="tel:+919044951919" className="text-wine font-semibold hover:underline">+91 90449 51919</a></span>
                        <span className="block">📞 Call: <a href="tel:+919026352450" className="text-wine font-semibold hover:underline">+91 90263 52450</a></span>
                      </p>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-wine text-sm uppercase tracking-wider mb-1">
                        Official Correspondence
                      </h4>
                      <p className="text-text-mid text-sm">
                        ✉️ <a href="mailto:thevenetiangarden3@gmail.com" className="text-wine hover:underline">thevenetiangarden3@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                {savedInquiries.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => setShowInquiriesDrawer(true)} 
                      className="text-xs font-bold text-wine hover:text-gold flex items-center gap-1 hover:underline"
                    >
                      <Compass className="w-4 h-4" />
                      View my saved inquiries list ({savedInquiries.length}) &rarr;
                    </button>
                  </div>
                )}
              </div>

              {/* Callback Form Layout */}
              <div className="lg:col-span-6 bg-wine-deep border border-gold/30 rounded-2xl p-8 relative shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_35%)] rounded-2xl"></div>
                
                <h3 className="font-serif text-2xl font-bold text-gold-light mb-2 relative z-10">
                  Request a Dedicated Callback
                </h3>
                <p className="text-xs text-blush/80 mb-6 relative z-10">
                  Fill details below. Our events manager will revert in 2 hours with customized lawn prices and options.
                </p>

                {isSubmitted ? (
                  <div className="bg-wine-dark/70 border-2 border-gold rounded-xl p-8 text-center space-y-4 animate-fade-in relative z-10">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-gold">
                      ✓ Inquiry Submitted Successfully!
                    </h4>
                    <p className="text-xs text-blush leading-relaxed">
                      Thank you, <span className="text-white font-bold">{inquiryFirstName} {inquiryLastName}</span>. Your request has been securely logged. Our lead catering director is preparing customized layouts and will ring you shortly on <span className="text-white font-bold">{inquiryPhone}</span>.
                    </p>
                    <p className="text-[10px] text-gold/60">
                      You can trace, manage, or clear this checklist record inside "My Enquiries".
                    </p>
                  </div>
                ) : (
                  <form 
                    id="webform1217390000000692010" 
                    action="https://crm.zoho.in/crm/WebToContactForm" 
                    name="WebToContacts1217390000000692010" 
                    method="POST" 
                    target="zoho_submit_iframe"
                    onSubmit={handleInquirySubmit} 
                    className="space-y-4 relative z-10"
                    acceptCharset="UTF-8"
                  >
                    {/* Zoho CRM Required Hidden Fields */}
                    <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="0b0c8522cf16d3fc3fc967ad9c869d7fc301db716176b02545e8a2f0c02a0ce0" readOnly />
                    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                    <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="888ea3ac01ee364d28cc8e044ba30b2b4b1b358f83d03459391470919c76fba7e7b920d3d0420806e285e090c8ef657f" readOnly />
                    <input type="text" style={{ display: 'none' }} name="actionType" value="Q29udGFjdHM=" readOnly />
                    <input type="text" style={{ display: 'none' }} name="returnURL" value="https://thevenetiangarden.in/" readOnly />
                    <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" readOnly />

                    {/* Hidden Description carrying celebration parameters */}
                    <textarea 
                      name="Description" 
                      id="Description" 
                      style={{ display: 'none' }}
                      value={`Proposed Celebration Date: ${inquiryDate || "Not Decided"}\nPreferred Segment: ${inquiryVenue}\nEstimated Guest Count: ${inquiryGuestCount}\nInquirer Email: ${inquiryEmail || "Not Provided"}`}
                      readOnly
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                          First Name
                        </label>
                        <input 
                          type="text" 
                          name="First Name"
                          id="First_Name"
                          value={inquiryFirstName}
                          onChange={(e) => setInquiryFirstName(e.target.value)}
                          placeholder="e.g. Ramesh" 
                          className="w-full text-sm p-3.5 bg-black/30 border border-gold/40 focus:border-gold rounded-lg text-white placeholder-gray-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                          Last Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          name="Last Name"
                          id="Last_Name"
                          value={inquiryLastName}
                          onChange={(e) => setInquiryLastName(e.target.value)}
                          placeholder="e.g. Malhotra" 
                          className="w-full text-sm p-3.5 bg-black/30 border border-gold/40 focus:border-gold rounded-lg text-white placeholder-gray-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                          Mobile Number *
                        </label>
                        <input 
                          type="tel" 
                          required
                          name="Mobile"
                          id="Mobile"
                          value={inquiryPhone}
                          onChange={(e) => setInquiryPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210" 
                          className="w-full text-sm p-3.5 bg-black/30 border border-gold/40 focus:border-gold rounded-lg text-white placeholder-gray-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="e.g. name@example.com" 
                          className="w-full text-sm p-3.5 bg-black/30 border border-gold/40 focus:border-gold rounded-lg text-white placeholder-gray-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                          Proposed Celebration Date
                        </label>
                        <input 
                          type="date" 
                          value={inquiryDate}
                          onChange={(e) => setInquiryDate(e.target.value)}
                          className="w-full text-sm p-3.5 bg-black/30 border border-gold/40 focus:border-gold rounded-lg text-white placeholder-gray-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                          Preferred Segment
                        </label>
                        <select 
                          value={inquiryVenue}
                          onChange={(e) => setInquiryVenue(e.target.value)}
                          className="w-full text-sm p-3.5 bg-wine-deep border border-gold/40 focus:border-gold focus:ring-2 focus:ring-gold/40 rounded-lg text-gold outline-none transition-all cursor-pointer font-bold"
                        >
                          <option value="Shivansh Lawn" className="bg-wine-deep text-gold-light font-medium">Shivansh Lawn (1 Lakh Sq Ft)</option>
                          <option value="Sham E Awadh Lawn" className="bg-wine-deep text-gold-light font-medium">Sham E Awadh Lawn (60,000 Sq Ft)</option>
                          <option value="Pine Valley Lawn" className="bg-wine-deep text-gold-light font-medium">Pine Valley Lawn (45,000 Sq Ft)</option>
                          <option value="Nakshatra Banquet" className="bg-wine-deep text-gold-light font-medium">Nakshatra Banquet (Private Ballroom)</option>
                          <option value="Mandapam Banquet" className="bg-wine-deep text-gold-light font-medium">Mandapam Banquet (Main Ballroom)</option>
                          <option value="Bamboo Valley" className="bg-wine-deep text-gold-light font-medium">Bamboo Valley (Botanical Reserve)</option>
                          <option value="Gen Z" className="bg-wine-deep text-gold-light font-medium">Gen Z (Boutique Open-Air)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-1">
                        Estimated Guest Weight
                      </label>
                      <select 
                        value={inquiryGuestCount}
                        onChange={(e) => setInquiryGuestCount(e.target.value)}
                        className="w-full text-sm p-3.5 bg-wine-deep border border-gold/40 focus:border-gold focus:ring-2 focus:ring-gold/40 rounded-lg text-gold outline-none transition-all cursor-pointer font-bold"
                      >
                        <option value="Under 200" className="bg-wine-deep text-gold-light font-medium">Under 200 Guests</option>
                        <option value="200 - 500" className="bg-wine-deep text-gold-light font-medium">200 - 500 Guests</option>
                        <option value="500 - 1500" className="bg-wine-deep text-gold-light font-medium">500 - 1,500 Guests</option>
                        <option value="1500 - 3000" className="bg-wine-deep text-gold-light font-medium">1,500 - 3,000 Guests</option>
                        <option value="Above 3000" className="bg-wine-deep text-gold-light font-medium">Grand Celebrity (3000+ Guests)</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full text-center py-4 bg-gold hover:bg-gold-light text-wine-deep font-bold rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-0.5 transition-all mt-6 uppercase tracking-wider text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Send Booking & Request Callback"}
                    </button>
                  </form>
                )}

                {/* Hidden iframe target for Zoho submission to prevent page reload */}
                <iframe 
                  name="zoho_submit_iframe" 
                  id="zoho_submit_iframe" 
                  className="hidden w-0 h-0 absolute pointer-events-none" 
                  style={{ display: 'none' }}
                />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="faq" className="py-20 bg-ivory text-text-dark border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-2">
              ✦ DETAILED ACCORDION ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine-dark">
              Frequently Asked Questions
            </h2>
            <PremiumSeparator />
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = activeFAQIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-gold/20 rounded-xl overflow-hidden bg-white/70 shadow-sm"
                >
                  <button 
                    onClick={() => setActiveFAQIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left font-serif text-sm sm:text-base font-bold text-wine-dark hover:text-wine hover:bg-wine/5 flex items-center justify-between transition-colors outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold shrink-0 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gold shrink-0 transition-transform" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-gray-100 text-xs sm:text-sm text-text-mid leading-relaxed bg-[#FAF9F6]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* LUXURY PREMIUM CTA SECTION */}
      <section className="relative py-24 bg-wine-deep border-t border-gold/45 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15),transparent_75%)] pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-wine/25 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-3">
            ✦ EXQUISITE RESERVATIONS ✦
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Plan Your Dream <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-blush">
              Celebration Today
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-blush/80 font-light leading-relaxed mb-10">
            Secure Lucknow's premier 7-acre luxury resort destination for your landmark moment. Reach out to our bespoke hospitality concierge now to check open dates and request tailored quotes.
          </p>

          <PremiumSeparator light />

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10">
            {/* Button 1: Download Digital Brochure with ultimate glow & scale */}
            <button 
              onClick={downloadBrochure}
              className="w-full sm:w-auto px-10 py-4.5 bg-gold text-wine-deep font-black text-sm tracking-widest uppercase rounded shadow-[0_10px_25px_rgba(201,168,76,0.3)] hover:shadow-[0_15px_35px_rgba(201,168,76,0.6)] hover:bg-transparent hover:text-gold border border-gold hover:border-gold transition-all duration-500 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-1.5 hover:scale-[1.03] active:scale-95 group"
            >
              <Download className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-1 group-hover:scale-110" />
              <span>Download Digital Brochure</span>
            </button>

            {/* Button 2: Contact Us */}
            <a 
              href="#contact"
              className="w-full sm:w-auto px-10 py-4.5 bg-transparent text-gold hover:text-wine-deep hover:bg-gold font-bold text-sm tracking-widest uppercase rounded border-2 border-gold/40 hover:border-gold shadow-md transition-all duration-500 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-1.5 hover:scale-[1.03] active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </a>

            {/* Button 3: WhatsApp Inquiry (3D theme-based tactile button) */}
            <a 
              href="https://wa.me/919044951919"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm tracking-widest uppercase rounded shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-500 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-1.5 hover:scale-[1.03] active:scale-95 border border-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE FOOTER */}
      <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Logo and Contact Info column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03] hover:translate-x-1 origin-left cursor-pointer group w-fit">
                <VenetianGardenLogo className="h-10 w-10 md:h-12 md:w-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                <span className="font-serif text-xl font-bold text-white tracking-widest hover:text-gold transition-colors duration-300">
                  The Venetian Garden
                </span>
              </div>
              <p className="text-xs text-gold/80 leading-relaxed font-light">
                Where Luxury Celebrations Become Timeless Memories. Experience high-end hospitality, majestic landscape layouts and custom premium events under Lucknow's beautiful skies.
              </p>
              
              <div className="space-y-3 text-xs text-blush/90 font-light">
                <a href="tel:+919044951919" className="flex items-center gap-2.5 transition-all duration-300 hover:text-gold hover:translate-x-1.5 transform origin-left group/contact cursor-pointer">
                  <span className="text-gold transition-transform group-hover/contact:scale-125 duration-300 shrink-0">📞</span> 
                  <span className="hover:underline">Hotline: +91 90449 51919</span>
                </a>
                <a href="tel:+919026352450" className="flex items-center gap-2.5 transition-all duration-300 hover:text-gold hover:translate-x-1.5 transform origin-left group/contact cursor-pointer">
                  <span className="text-gold transition-transform group-hover/contact:scale-125 duration-300 shrink-0">📞</span> 
                  <span className="hover:underline">Office: +91 90263 52450</span>
                </a>
                <a href="mailto:thevenetiangarden3@gmail.com" className="flex items-center gap-2.5 transition-all duration-300 hover:text-gold hover:translate-x-1.5 transform origin-left group/contact cursor-pointer">
                  <span className="text-gold transition-transform group-hover/contact:scale-125 duration-300 shrink-0">✉️</span> 
                  <span className="hover:underline">thevenetiangarden3@gmail.com</span>
                </a>
              </div>

              {/* Social Icons links in theme-based tactile 3D design */}
              <div className="flex gap-4.5 pt-3">
                <a 
                  href="https://www.facebook.com/people/Venetian-Garden/pfbid02ANzVquQFwsS9xTtJLjU8bGRTUhnbyYQUeGbgGHHTCPMs3rtAGJgon28iNyVcfhb6l" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-wine-dark hover:bg-gold border-t border-l border-gold/30 border-b-4 border-r-4 border-gold text-gold hover:text-wine-deep flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_2px_5px_rgba(201,168,76,0.4)] hover:translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer group"
                  title="Follow us on Facebook"
                  aria-label="Facebook Link"
                >
                  <Facebook className="w-4 h-4 text-gold group-hover:text-wine-deep transition-colors duration-200" />
                </a>
                <a 
                  href="https://www.instagram.com/the_venetiangarden_?utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-wine-dark hover:bg-gold border-t border-l border-gold/30 border-b-4 border-r-4 border-gold text-gold hover:text-wine-deep flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_2px_5px_rgba(201,168,76,0.4)] hover:translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer group"
                  title="Follow us on Instagram"
                  aria-label="Instagram Link"
                >
                  <Instagram className="w-4 h-4 text-gold group-hover:text-wine-deep transition-colors duration-200" />
                </a>
                <a 
                  href="https://wa.me/919044951919" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-wine-dark hover:bg-gold border-t border-l border-gold/30 border-b-4 border-r-4 border-gold text-gold hover:text-wine-deep flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_2px_5px_rgba(201,168,76,0.4)] hover:translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer group"
                  title="Contact us via WhatsApp"
                  aria-label="WhatsApp Link"
                >
                  <MessageCircle className="w-4 h-4 text-gold group-hover:text-wine-deep transition-colors duration-200" />
                </a>
              </div>
            </div>

            {/* Sitemap column */}
            <div>
              <h4 className="font-serif text-white font-bold mb-6 border-l-2 border-gold pl-3 uppercase text-xs tracking-wider transition-all duration-300 hover:text-gold hover:border-gold hover:translate-x-2 cursor-pointer transform origin-left">
                Venue Lawns & Suites
              </h4>
              <ul className="space-y-3 text-xs text-gold/80 font-light">
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Shivansh Lawn (1 Lakh Sq Ft)</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Sham E Awadh Lawn (60K Sq Ft)</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Pine Valley Lawns (45K Sq Ft)</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Nakshatra Banquet (990 Sq Ft Room)</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Mandapam Ballroom (5,000 Sq Ft)</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Bamboo Valley Botanical Reserve</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Gen Z open-air sunset lot</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links column */}
            <div>
              <h4 className="font-serif text-white font-bold mb-6 border-l-2 border-gold pl-3 uppercase text-xs tracking-wider transition-all duration-300 hover:text-gold hover:border-gold hover:translate-x-2 cursor-pointer transform origin-left">
                Sitemap Index
              </h4>
              <ul className="space-y-3 text-xs text-gold/80 font-light">
                <li>
                  <a href="#home" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Home Banner</span>
                  </a>
                </li>
                <li>
                  <a href="#heritage" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Our Heritage</span>
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Celebrated Events</span>
                  </a>
                </li>
                <li>
                  <a href="#advantage" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Premium Advantages</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Lawn Master Map</span>
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Guest Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Photo Chronicle</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Request Tour Checklist</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Address & iframe Map column */}
            <div>
              <h4 className="font-serif text-white font-bold mb-6 border-l-2 border-gold pl-3 uppercase text-xs tracking-wider transition-all duration-300 hover:text-gold hover:border-gold hover:translate-x-2 cursor-pointer transform origin-left">
                Location & Map Route
              </h4>
              <p className="text-xs text-gold/80 mb-3 leading-relaxed hover:text-white transition-colors duration-300 cursor-default">
                Near G20 Underpass, Gate No. 5, Janeshwar Mishra Park, Gomti Nagar Vistar, Lucknow, UP, 226010
              </p>
              
              <div className="rounded-lg overflow-hidden border border-gold/30 h-36">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0959681069007!2d80.97914007474137!3d26.83689976334586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd54c80f829d%3A0x1562eba90c7233b2!2sJaneshwar%20Mishra%20Park%20Gate%20No%3A%205!5e0!3m2!1sen!2sin!4v1781009323707!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-gold/65">
            <p>&copy; {new Date().getFullYear()} The Venetian Garden, Lucknow. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 italic">Where Luxury Celebrations Become Timeless Memories.</p>
          </div>

        </div>
      </footer>

      {/* DOCK DRAWER DIALOG FOR VIEWING INQUIRIES LIST (The Persistent Client-Side Verification Layer) */}
      {showInquiriesDrawer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex justify-end z-[120]">
          <div className="w-full max-w-lg bg-white h-screen overflow-y-auto shadow-2xl flex flex-col justify-between">
            
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-wine text-white">
              <div className="flex items-center gap-2">
                <VenetianGardenLogo className="w-8 h-8" />
                <div>
                  <h3 className="font-serif font-bold text-base">Your Tour Scheduling Records</h3>
                  <p className="text-[10px] text-gold-light tracking-wide uppercase">Stored on your client browser</p>
                </div>
              </div>
              <button 
                onClick={() => setShowInquiriesDrawer(false)}
                className="p-1 hover:bg-wine-dark rounded text-gold-light"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 flex-1 space-y-4 overflow-y-auto">
              <p className="text-[11px] text-text-mid bg-beige/30 p-3 rounded border border-[#e5dec9] leading-relaxed">
                You have recorded the following callback inquiries and tour dates with Venetian Garden. Clear or review them at your preference.
              </p>

              {savedInquiries.length === 0 ? (
                <div className="text-center py-12 space-y-2">
                  <span className="text-4xl">📭</span>
                  <p className="text-sm font-bold text-gray-400">No scheduled inquiries yet</p>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Fill the Callback form on our website to record and trace your reservation records.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {savedInquiries.map((item) => (
                    <div key={item.id} className="bg-[#FAF8F4] border border-gold/20 rounded-xl p-4 space-y-3 relative">
                      <button 
                        onClick={() => deleteInquiry(item.id)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-red-700 p-1"
                        title="Remove record"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold"></span>
                        <h4 className="font-serif font-bold text-wine-dark text-sm">{item.name}</h4>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs text-text-mid font-medium bg-white p-3 rounded-lg border border-gray-100">
                        <div>
                          <span className="text-[10px] text-gray-400 block">📞 Contact</span>
                          <span>{item.phone}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 block">📅 Proposed Date</span>
                          <span className="text-bold text-wine">{item.date}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 block">📍 Target Segment</span>
                          <span>{item.venue}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 block">👥 Guests Weight</span>
                          <span>{item.guestCount}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-gray-400 pt-1">
                        <span>Submitted on: {item.timestamp}</span>
                        <span className="text-green-700 font-bold">&#9679; Pending callback support</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col gap-3">
              <a 
                href="tel:+919044951919"
                className="w-full text-center py-3 bg-wine hover:bg-gold text-gold-light hover:text-wine-deep font-bold rounded-lg text-xs tracking-wider transition-all"
              >
                📞 Direct Ring Concierge
              </a>
              <button 
                onClick={() => setShowInquiriesDrawer(false)}
                className="w-full text-center py-2 text-xs font-semibold text-gray-500 hover:text-charcoal"
              >
                Close list Review
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
