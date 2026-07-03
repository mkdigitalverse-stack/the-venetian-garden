import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import regeneratedImage from "./assets/images/regenerated_image_1781420148682.jpg";
// @ts-ignore
import regeneratedHeroImage from "./assets/images/regenerated_image_1781760992857.jpg";
// @ts-ignore
import inaugurationImage from "./assets/images/regenerated_image_1782312634284.jpg";
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

const venueOptions = [
  { id: "Shivansh Lawn", name: "Shivansh Lawn", size: "1 Lakh Sq Ft" },
  { id: "Sham E Awadh Lawn", name: "Sham E Awadh Lawn", size: "60,000 Sq Ft" },
  { id: "Pine Valley Lawn", name: "Pine Valley Lawn", size: "45,000 Sq Ft" },
  { id: "Nakshatra Banquet", name: "Nakshatra Banquet", size: "Private Ballroom" },
  { id: "Mandapam Banquet", name: "Mandapam Banquet", size: "Main Ballroom" },
  { id: "Bamboo Valley", name: "Bamboo Valley", size: "Botanical Reserve" },
  { id: "Gen Z", name: "Gen Z", size: "Boutique Open-Air" },
];

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
  const [inquiryGuestCount, setInquiryGuestCount] = useState("");
  const [inquiryVenues, setInquiryVenues] = useState<string[]>(["Shivansh Lawn"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Separate Contact page routing state
  const [currentPage, setCurrentPage] = useState<"home" | "contact">("home");

  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      if (path === "/contact" || path === "/contact/" || hash === "#contact" || hash === "#/contact") {
        setCurrentPage("home");
        setTimeout(() => {
          const targetEl = document.getElementById("contact");
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      } else {
        setCurrentPage("home");
        if (hash && hash !== "#home") {
          setTimeout(() => {
            const targetEl = document.getElementById(hash.substring(1));
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    };

    handleRouting();
    window.addEventListener("popstate", handleRouting);
    window.addEventListener("hashchange", handleRouting);
    return () => {
      window.removeEventListener("popstate", handleRouting);
      window.removeEventListener("hashchange", handleRouting);
    };
  }, []);

  // Load Zoho CRM Analytics Tracking code dynamically
  useEffect(() => {
    const existingScript = document.getElementById("wf_anal");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "wf_anal";
      script.src = "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=43c9efb3ab04109a04ae54036117d4adab775baf2790b44f1de168f7b06bc184093d14a3e9b14da6d2c183dbfd6d2f41gid033b54fb57eaa7d433c4b99bd73d3c95a9cf59e4ebc0f5a4258f9376f972b229gid16eb2179b00d447556396d894dd2d105a60c10c22b8a80279d034c2507f5236cgida6824a120d4c00734295e51dda9c84173b30e00ef675aec4d1bcfd9f69df87c2&tw=c04ab0ff9bcc081fcf6081a9599fe2fda972ce15f78dcef6f64ae5a34968aea8";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Update Zoho iframe with referrerName query param dynamically to ensure smooth attribution capture
  useEffect(() => {
    try {
      const zf_frame = document.getElementById("ziframe_188412") as HTMLIFrameElement | null;
      if (zf_frame) {
        const targetUrl = 'https://forms.zohopublic.in/thevenetiangarden1/form/TheVenetianGarden/formperma/ngroHLCf4yoHfzl1lNrPqEqrFfuJmGLCyFrVG8fi_Aw';
        let ifrmSrc = targetUrl;
        
        if (!(/[?&]referrername=/.test(ifrmSrc))) {
          let rfr = window.location.href;
          try {
            rfr = window.self !== window.top ? 
              window.top.location.href : 
              (/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : "");
          } catch (e) {
            rfr = window.location.href; // Fallback to current URL if access is blocked
          }
          
          if (rfr && rfr !== "") {
            if (rfr.length > 1800) {
              const queryIndex = rfr.indexOf('?');
              if (queryIndex > -1) {
                rfr = rfr.substring(0, queryIndex);
              }
              if (rfr.length > 1800) {
                rfr = rfr.substring(0, 1800);
              }
            }
            ifrmSrc += (ifrmSrc.indexOf('?') > 0 ? '&' : '?') + 'referrername=' + encodeURIComponent(rfr);
          }
        }
        if (zf_frame.src !== ifrmSrc) {
          zf_frame.src = ifrmSrc;
        }
      }
    } catch (e) {
      console.error("Zoho Form Referrer Injection failed:", e);
    }
  }, []);

  // Toggle venue selection
  const toggleVenue = (venueId: string) => {
    setInquiryVenues(prev => {
      if (prev.includes(venueId)) {
        return prev.filter(v => v !== venueId);
      } else {
        return [...prev, venueId];
      }
    });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    // We validate last name is not empty
    if (!inquiryLastName) {
      alert("Last Name cannot be empty.");
      e.preventDefault();
      return;
    }

    // Email validation matching checkMandatory
    if (inquiryEmail.trim().length !== 0) {
      const atpos = inquiryEmail.indexOf('@');
      const dotpos = inquiryEmail.lastIndexOf('.');
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inquiryEmail.length) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
      }
    }

    if (inquiryVenues.length === 0) {
      alert("Please select at least one Venue.");
      e.preventDefault();
      return;
    }

    // Handle Zoho smarturl service parameters dynamically
    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
      const webform = document.getElementById('webform1361941000000535132');
      if (webform) {
        const service = urlparams.get('service') || '';
        let smarturlfield = webform.querySelector('input[name="service"]');
        if (!smarturlfield) {
          smarturlfield = document.createElement('input');
          smarturlfield.setAttribute('type', 'hidden');
          smarturlfield.setAttribute('name', 'service');
          webform.appendChild(smarturlfield);
        }
        smarturlfield.setAttribute('value', service);
      }
    }

    setIsSubmitting(true);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);

    // Auto reset submission alert after 4.5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setInquiryFirstName("");
      setInquiryLastName("");
      setInquiryPhone("");
      setInquiryEmail("");
      setInquiryDate("");
      setInquiryGuestCount("");
      setInquiryVenues(["Shivansh Lawn"]);
    }, 4500);
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

  const navigateToHome = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentPage("home");
    window.history.pushState({ page: "home" }, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage("home");
    window.history.pushState({ page: "home" }, "", `/${hash}`);
    setTimeout(() => {
      const targetEl = document.getElementById(hash.substring(1));
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
          <a href="/" onClick={navigateToHome} className="flex items-center gap-3 group transition-all">
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
            <a href="/" onClick={navigateToHome} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Home</a>
            <a href="#heritage" onClick={handleSectionClick('#heritage')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Heritage</a>
            <a href="#inauguration" onClick={handleSectionClick('#inauguration')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Inauguration</a>
            <a href="#events" onClick={handleSectionClick('#events')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Events</a>
            <a href="#advantage" onClick={handleSectionClick('#advantage')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Advantage</a>
            <a href="#lawns" onClick={handleSectionClick('#lawns')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Lawns</a>
            <a href="#testimonials" onClick={handleSectionClick('#testimonials')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Testimonials</a>
            <a href="#gallery" onClick={handleSectionClick('#gallery')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Gallery</a>
            <a href="#contact" onClick={handleSectionClick('#contact')} className="text-sm font-medium text-ivory/90 hover:text-gold-light px-3 py-2 transition-colors">Contact</a>
            
            <button 
              onClick={downloadBrochure}
              className="ml-4 text-xs font-semibold text-gold-light px-4 py-2 border border-gold bg-wine hover:bg-gold hover:text-wine-deep transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Brochure
            </button>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
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
                href="/" 
                onClick={(e) => { navigateToHome(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Home
              </a>
              <a 
                href="#heritage" 
                onClick={(e) => { handleSectionClick('#heritage')(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Heritage
              </a>
              <a 
                href="#inauguration" 
                onClick={(e) => { handleSectionClick('#inauguration')(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Inauguration
              </a>
              <a 
                href="#events" 
                onClick={(e) => { handleSectionClick('#events')(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Events
              </a>
              <a 
                href="#advantage" 
                onClick={(e) => { handleSectionClick('#advantage')(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Advantage
              </a>
              <a 
                href="#lawns" 
                onClick={(e) => { handleSectionClick('#lawns')(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Lawns
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => { handleSectionClick('#testimonials')(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Testimonials
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => { handleSectionClick('#gallery')(e); setIsMenuOpen(false); }}
                className="block text-base font-medium text-white/90 hover:text-gold-light py-2 border-b border-gold/10"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                onClick={(e) => { handleSectionClick('#contact')(e); setIsMenuOpen(false); }}
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

      {/* Render main home content directly */}
      <>
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
              onClick={handleSectionClick('#contact')}
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
                Celebrate Beside the Iconic Janeshwar Mishra Park—One of Asia's Largest Urban Parks
              </h3>
              
              <p className="text-text-mid text-sm sm:text-base leading-relaxed">
                Situated beside the iconic <em className="font-medium text-wine-dark not-italic">Janeshwar Mishra Park</em>—recognized among <em className="italic text-wine-dark">Asia’s largest urban park destinations</em>— <em className="font-medium text-wine-dark not-italic">The Venetian Garden</em> offers a rare celebration experience where luxury, nature, and unforgettable moments come together in the heart of Lucknow.
              </p>

              <div className="space-y-4 text-text-mid text-sm sm:text-base leading-relaxed">
                <p>
                  Strategically located at <strong className="text-wine font-semibold">Gate No. 5, Janeshwar Mishra Park, Gomti Nagar Vistar</strong>, near the prestigious <strong className="text-wine font-semibold">G20 Road corridor</strong>, The Venetian Garden is designed for those who seek grand celebrations in an environment that feels both exclusive and connected.
                </p>
                <p>
                  Spread across approximately <strong className="text-wine font-semibold">7 acres</strong> and embraced by nearly <strong className="text-wine font-semibold">3 km</strong> of lush natural surroundings, our destination creates a peaceful and refined atmosphere unlike conventional venues. Every celebration here is elevated by open landscapes, elegant event spaces, premium hospitality, and an ambiance that transforms occasions into timeless memories.
                </p>
                <p>
                  Whether it is a luxury wedding, corporate gathering, social celebration, or private occasion, The Venetian Garden delivers experiences crafted with elegance, scale, and attention to every detail.
                </p>
                
                <p>
                  Blending exceptional accessibility with the serenity of nature, The Venetian Garden stands as more than a venue—it is a destination where celebrations feel extraordinary and memories remain timeless.
                </p>
                <p className="font-serif italic font-semibold text-wine text-base sm:text-lg border-t border-wine/10 pt-4 mt-4">
                  “Where Luxury Celebrations Become Timeless Memories.”
                </p>
              </div>

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

            {/* Right Showcase Column (Image + Proximity Highlights) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
              {/* Showcase Banner Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group/image duration-500">
                  <img 
                    src={regeneratedImage} 
                    alt="The Venetian Garden upscale wedding reception setting" 
                    className="w-full h-[320px] sm:h-[350px] object-cover transition-transform duration-700 group-hover/image:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-center">
                    <p className="italic text-blush font-serif text-xs sm:text-sm leading-relaxed mb-1">
                      “An emerald floral paradise lined under beautiful classical structures, creating monumental family history.”
                    </p>
                    <p className="text-[9px] text-gold uppercase tracking-widest font-semibold">
                      The Venetian Vision
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-4 border-b-4 border-gold/40 rounded-bl-2xl -z-10"></div>
                <div className="absolute -top-3 -right-3 w-16 h-16 border-r-4 border-t-4 border-gold/40 rounded-tr-2xl -z-10"></div>
              </motion.div>

              {/* Proximity Highlights Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative bg-gradient-to-br from-white via-ivory/50 to-wine-dark/[0.01] p-5 sm:p-6 rounded-2xl border-2 border-wine/10 shadow-[0_15px_30px_rgba(114,47,55,0.03)] space-y-4 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-wine/5 rounded-full blur-3xl -z-10"></div>
                
                {/* Decorative golden accent bar on left */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold via-wine to-gold-light"></div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-wine/5 border border-wine/10 flex items-center justify-center shrink-0 shadow-[0_4px_8px_rgba(114,47,55,0.04)]">
                    <Compass className="w-5 h-5 text-gold animate-spin-slow" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold text-gold uppercase tracking-widest block">✦ PROXIMITY HIGHLIGHTS ✦</span>
                    <h4 className="font-serif text-wine-dark font-bold text-sm sm:text-base leading-snug">
                      Perfectly Positioned Within Lucknow’s Most Elite Zone
                    </h4>
                  </div>
                </div>

                <div className="space-y-3.5 pt-1">
                  {/* Radius Group 1 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 border-b border-wine/5 pb-1">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      <div className="font-serif text-[11px] font-bold text-wine tracking-wide uppercase">Within Approx. 3 KM</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { name: "Taj Hotel", desc: "Luxury Stay" },
                        { name: "Gomti Nagar Station", desc: "Rapid Transit" },
                        { name: "Ekana Stadium", desc: "Sports Hub" },
                        { name: "Palacio Mall", desc: "Premium Retail" },
                        { name: "Lulu Mall", desc: "Mega Shopping" },
                        { name: "Shaheed Path", desc: "Express Link" }
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col p-1.5 px-2 rounded-lg bg-wine-dark/[0.02] border border-wine/5 hover:border-gold/30 hover:bg-white hover:shadow-sm transition-all duration-300">
                          <span className="text-[10px] font-semibold text-wine-dark leading-tight">{item.name}</span>
                          <span className="text-[8px] text-text-mid font-mono mt-0.5 leading-none">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Radius Group 2 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 border-b border-wine/5 pb-1">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      <div className="font-serif text-[11px] font-bold text-wine tracking-wide uppercase">Within Approx. 5 KM</div>
                    </div>
                    
                    <div className="flex flex-col p-2 rounded-lg bg-wine-dark/[0.02] border border-wine/5 hover:border-gold/30 hover:bg-white hover:shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-wine-dark">Hazratganj</span>
                        <span className="text-[8px] text-gold font-bold font-serif italic">City Landmark</span>
                      </div>
                      <span className="text-[9px] text-text-mid mt-0.5 leading-relaxed">
                        Lucknow's Iconic Heritage Heart & Business Center
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* DEPUTY CM INAUGURATION SECTION */}
      <section id="inauguration" className="py-24 bg-white text-text-dark relative overflow-hidden border-t border-wine/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wine-dark/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image with exquisite decorative frame */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-ivory group/inauguration duration-500">
                <img 
                  src={inaugurationImage} 
                  alt="Hon'ble Deputy Chief Minister Shri Brajesh Pathak inaugurating The Venetian Garden" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover/inauguration:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/95 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <p className="font-serif italic text-gold text-base mb-1">
                    “A monumental contribution to Lucknow's landscape of luxury hospitality.”
                  </p>
                  <p className="text-[11px] text-ivory/80 uppercase tracking-widest font-semibold">
                    Hon'ble Deputy CM • Shri Brajesh Pathak
                  </p>
                </div>
              </div>
              
              {/* Outer classic geometric borders for premium aesthetic */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-gold rounded-br-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-gold rounded-tl-2xl -z-10"></div>
            </motion.div>
            
            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-gold tracking-widest uppercase block">
                  ✦ Government Recognition ✦
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine leading-tight">
                  A Historic Inauguration That Marked the Beginning of Timeless Celebrations
                </h2>
                <p className="text-wine-dark/75 font-serif italic text-lg sm:text-xl border-l-2 border-gold pl-4 mt-2">
                  Inaugurated by Hon'ble Deputy Chief Minister of Uttar Pradesh, Shri Brajesh Pathak
                </p>
              </div>

              <div className="space-y-4 text-text-mid text-sm sm:text-base leading-relaxed">
                <p>
                  The Venetian Garden commenced its journey of unmatched elite celebrations with a magnificent inauguration ceremony graced by the <strong className="text-wine-dark font-semibold">Hon'ble Deputy Chief Minister of Uttar Pradesh, Shri Brajesh Pathak</strong>. This distinguished milestone marked the official opening of Lucknow’s most anticipated luxury resort destination.
                </p>
                <p>
                  During the event, the Hon'ble Deputy CM expressed great appreciation for the resort’s architectural marvel, highlighting how the classical Roman colonnades, grand structures, and massive 7-acre emerald landscape represent a monumental contribution to the state's destination hospitality sector.
                </p>
                <p>
                  Perfectly positioned adjacent to the landmark <strong className="text-wine font-semibold">Gate No. 5, Janeshwar Mishra Park</strong>, this high-profile inauguration solidifies The Venetian Garden as the premier destination for landmark social chapters, majestic Indian weddings, and prominent corporate conclaves in the region.
                </p>
              </div>

              {/* Highlighting metrics or features */}
              <div className="grid grid-cols-2 gap-4 border-t border-wine/10 pt-6 mt-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-wine/5 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wine text-sm sm:text-base">Royal Endorsement</h4>
                    <p className="text-xs text-text-mid mt-0.5">Praised by state leadership for setting new benchmarks in hospitality.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-wine/5 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wine text-sm sm:text-base">Prestigious Canvas</h4>
                    <p className="text-xs text-text-mid mt-0.5">Lucknow's premier 7-acre arena crafted for grand celebrations.</p>
                  </div>
                </div>
              </div>
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
                  onClick={handleSectionClick('#contact')}
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
                    onClick={handleSectionClick('#contact')}
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

      {/* EMBEDDED ZOHO CONTACT SECTION */}
      <section id="contact" className="relative py-20 bg-ivory border-t border-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.05),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-gold tracking-widest uppercase block mb-3">
              ✦ BESPOKE INQUIRIES ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-wine-deep tracking-tight">
              Connect With Us
            </h2>
            <div className="h-0.5 w-16 bg-gold mx-auto mt-4 mb-4"></div>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-text-mid font-light leading-relaxed">
              Please share your celebration details below. Our luxury concierge team will review your requirements and coordinate back with open dates and curated packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Address Card */}
              <div className="bg-white/80 p-5 rounded-2xl border border-gold/15 shadow-sm flex items-start gap-4 hover:border-gold/35 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-wine/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-wine-deep text-sm sm:text-base">
                    Official Address
                  </h3>
                  <p className="text-xs sm:text-sm text-text-mid mt-1.5 leading-relaxed font-light">
                    Near G20 Underpass, Gate No. 5, Janeshwar Mishra Park, Gomti Nagar Vistar, Lucknow, UP, 226010
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Janeshwar+Mishra+Park+Gate+No+5+Lucknow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2.5 text-[11px] font-semibold text-gold hover:text-wine-deep uppercase tracking-wider transition-colors"
                  >
                    View Map Directions →
                  </a>
                </div>
              </div>

              {/* Call Direct Card */}
              <div className="bg-white/80 p-5 rounded-2xl border border-gold/15 shadow-sm flex items-start gap-4 hover:border-gold/35 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-wine/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-wine-deep text-sm sm:text-base">
                    Direct Concierge Numbers
                  </h3>
                  <div className="mt-2 space-y-1.5">
                    <a 
                      href="tel:+919044951919" 
                      className="block text-xs sm:text-sm text-text-mid hover:text-wine transition-colors font-light"
                    >
                      <span className="font-semibold text-wine-deep">Hotline:</span> +91 90449 51919
                    </a>
                    <a 
                      href="tel:+919026352450" 
                      className="block text-xs sm:text-sm text-text-mid hover:text-wine transition-colors font-light"
                    >
                      <span className="font-semibold text-wine-deep">Office:</span> +91 90263 52450
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/80 p-5 rounded-2xl border border-gold/15 shadow-sm flex items-start gap-4 hover:border-gold/35 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-wine/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-wine-deep text-sm sm:text-base">
                    Electronic Mail
                  </h3>
                  <p className="text-xs sm:text-sm text-text-mid mt-1.5 leading-relaxed font-light">
                    For corporate bookings, brand partnerships, or custom catering walkthroughs:
                  </p>
                  <a 
                    href="mailto:thevenetiangarden3@gmail.com" 
                    className="inline-block mt-1 text-xs sm:text-sm text-gold hover:text-wine-deep hover:underline transition-colors font-medium"
                  >
                    thevenetiangarden3@gmail.com
                  </a>
                </div>
              </div>

              {/* Private Tours Reminder */}
              <div className="bg-wine-deep p-5 rounded-2xl border border-gold/20 shadow-md flex items-start gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gold text-sm sm:text-base">
                    Exquisite Private Tours
                  </h3>
                  <p className="text-xs text-white/85 mt-1 leading-relaxed font-light">
                    Walk through our neoclassical pillars. Private lawn and site tours are available daily from 10:00 AM to 7:30 PM by prior appointment.
                  </p>
                </div>
              </div>

            </div>

            {/* Zoho Form iframe Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="bg-white p-3 sm:p-6 rounded-2xl shadow-xl border border-gold/20 backdrop-blur-sm h-full flex flex-col justify-center overflow-hidden">
                <iframe 
                  id="ziframe_188412"
                  aria-label="The Venetian Garden" 
                  frameBorder="0"     
                  style={{ height: '520px', width: '100%', border: 'none' }} 
                  src='https://forms.zohopublic.in/thevenetiangarden1/form/TheVenetianGarden/formperma/ngroHLCf4yoHfzl1lNrPqEqrFfuJmGLCyFrVG8fi_Aw'
                />
              </div>
            </div>

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
              onClick={handleSectionClick('#contact')}
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
      </>

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
                  <a href="/" onClick={navigateToHome} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Home Banner</span>
                  </a>
                </li>
                <li>
                  <a href="#heritage" onClick={handleSectionClick('#heritage')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Our Heritage</span>
                  </a>
                </li>
                <li>
                  <a href="#inauguration" onClick={handleSectionClick('#inauguration')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Resort Inauguration</span>
                  </a>
                </li>
                <li>
                  <a href="#events" onClick={handleSectionClick('#events')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Celebrated Events</span>
                  </a>
                </li>
                <li>
                  <a href="#advantage" onClick={handleSectionClick('#advantage')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Premium Advantages</span>
                  </a>
                </li>
                <li>
                  <a href="#lawns" onClick={handleSectionClick('#lawns')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Lawn Master Map</span>
                  </a>
                </li>
                <li>
                  <a href="#testimonials" onClick={handleSectionClick('#testimonials')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Guest Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="#gallery" onClick={handleSectionClick('#gallery')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
                    <span className="text-[8px] text-gold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">✦</span>
                    <span>Photo Chronicle</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleSectionClick('#contact')} className="hover:text-gold-light flex items-center gap-1.5 transition-all duration-300 hover:translate-x-2 group/item">
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



    </div>
  );
}
