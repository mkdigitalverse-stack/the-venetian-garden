import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, MessageCircle, ExternalLink, Sparkles, Compass } from "lucide-react";

interface ContactPageProps {
  onBackToHome: () => void;
}

export function ContactPage({ onBackToHome }: ContactPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-6 pb-24 bg-ivory text-text-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Return to Home */}
        <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
          <button 
            onClick={onBackToHome}
            className="text-wine hover:text-gold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            ← Home
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-gold-light font-medium">Contact & Reservations</span>
        </div>

        {/* Header Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border border-gold/20 bg-wine-deep h-[300px] md:h-[350px] flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15),transparent_75%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/45 z-0"></div>
          
          <div className="relative z-10 max-w-3xl px-4 space-y-4">
            <span className="text-xs font-bold text-gold tracking-widest uppercase block animate-pulse">
              ✦ BESPOKE EVENTS & HOSPITALITY ✦
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Bespoke <span className="italic font-normal text-gold-light">Concierge</span>
            </h1>
            <p className="text-xs sm:text-sm text-blush/90 max-w-xl mx-auto font-light leading-relaxed">
              We look forward to hosting your dream celebrations under Lucknow's beautiful skies. Get in touch with our dedicated relationship managers.
            </p>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Information & Cards: Column 1 */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#FAF8F5] border border-gold/20 rounded-2xl p-6 md:p-8 space-y-6 shadow-md">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-wine-dark border-b border-gold/20 pb-4">
                Corporate Headquarters & Venue
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wine text-xs uppercase tracking-wider mb-1">
                      Venue Location
                    </h4>
                    <p className="text-text-mid text-sm leading-relaxed">
                      Near G20 Underpass, Gate No. 5, Janeshwar Mishra Park,<br />
                      Gomti Nagar Vistar, Lucknow, UP - 226010
                    </p>
                    <a 
                      href="https://maps.google.com/?q=The+Venetian+Garden+Janeshwar+Mishra+Park+Lucknow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-gold font-bold hover:text-wine mt-2 transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wine text-xs uppercase tracking-wider mb-1">
                      Lawn Touring Hours
                    </h4>
                    <p className="text-text-mid text-sm">
                      Daily: 09:30 AM – 08:30 PM &middot; Guided Tour Services
                    </p>
                    <p className="text-[11px] text-text-light mt-1">
                      *Tours must be scheduled 1 hour in advance.
                    </p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wine text-xs uppercase tracking-wider mb-1">
                      Concierge Hotlines
                    </h4>
                    <div className="text-text-mid text-sm space-y-1 mt-1 font-medium">
                      <div className="flex items-center gap-2">
                        <span>📞 Call:</span>
                        <a href="tel:+919044951919" className="text-wine font-bold hover:underline">+91 90449 51919</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📞 Call:</span>
                        <a href="tel:+919026352450" className="text-wine font-bold hover:underline">+91 90263 52450</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-wine/5 rounded-lg text-wine shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wine text-xs uppercase tracking-wider mb-1">
                      Official Correspondence
                    </h4>
                    <p className="text-text-mid text-sm mt-1">
                      ✉️ <a href="mailto:thevenetiangarden3@gmail.com" className="text-wine hover:underline font-medium">thevenetiangarden3@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map embed preview card */}
            <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-md h-64 bg-wine-dark/10 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.8407421113945!2d81.0001000!3d26.8132000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ4JzQ3LjUiTiA4McKwMDAnMDAuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter brightness-95"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location of The Venetian Garden"
              />
            </div>

          </div>

          {/* Zoho Form Placement / Button Card: Column 2 */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-wine-deep border border-gold/30 rounded-2xl p-8 relative shadow-2xl text-center flex flex-col justify-between min-h-[500px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_35%)] rounded-2xl pointer-events-none"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 mx-auto">
                  <Sparkles className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gold-light">
                  Request a Dedicated Callback
                </h3>
                <p className="text-xs text-blush/80 max-w-sm mx-auto">
                  Our events manager will revert in 2 hours with customized lawn layouts, catering packages, and live date pricing.
                </p>
              </div>

              {/* Dedicated Link for Zoho Webform */}
              <div className="relative z-10 my-8 py-8 px-6 bg-black/20 border border-gold/15 rounded-xl space-y-6">
                <p className="text-xs text-white/90 leading-relaxed max-w-sm mx-auto">
                  For secure bookings and official callback registration, please proceed to fill our web inquiry form.
                </p>

                {/* Zoho Webform Redirect / Custom Button Link */}
                <a 
                  href="https://thevenetiangarden.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-gold hover:bg-gold-light text-wine-deep font-bold rounded-lg shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wider text-xs font-serif"
                >
                  <span>Open Zoho Webform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="text-[10px] text-gold/50">
                  Secure submission &bull; Integrated Zoho CRM verification
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold pt-4 border-t border-gold/10">
                <a 
                  href="https://wa.me/919044951919" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] stroke-none" />
                  <span>Chat on WhatsApp</span>
                </a>
                <span className="text-gold/20 hidden sm:inline">|</span>
                <a 
                  href="tel:+919044951919" 
                  className="text-white hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-gold-light" />
                  <span>Instant Call</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
