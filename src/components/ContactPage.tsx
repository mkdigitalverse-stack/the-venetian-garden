import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, MessageCircle, ExternalLink, Sparkles, Check, Send } from "lucide-react";

interface ContactPageProps {
  onBackToHome: () => void;
}

const venueOptions = [
  { id: "Shivansh Lawn", name: "Shivansh Lawn", size: "1 Lakh Sq Ft &bull; 3000+ Guests" },
  { id: "Sham E Awadh Lawn", name: "Sham E Awadh Lawn", size: "60,000 Sq Ft &bull; 1500+ Guests" },
  { id: "Pine Valley Lawn", name: "Pine Valley Lawn", size: "45,000 Sq Ft &bull; 1000+ Guests" },
  { id: "Nakshatra Banquet", name: "Nakshatra Banquet", size: "Private Ballroom &bull; 400+ Guests" },
  { id: "Mandapam Banquet", name: "Mandapam Banquet", size: "Main Ballroom &bull; 800+ Guests" },
  { id: "Bamboo Valley", name: "Bamboo Valley", size: "Botanical Reserve &bull; 300+ Guests" },
  { id: "Gen Z", name: "Gen Z", size: "Boutique Open-Air &bull; 200+ Guests" },
];

export function ContactPage({ onBackToHome }: ContactPageProps) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [preferredDate, setPreferredDate] = React.useState("");
  const [selectedVenues, setSelectedVenues] = React.useState<string[]>(["Shivansh Lawn"]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Load Zoho CRM Analytics Tracking code dynamically
  React.useEffect(() => {
    const existingScript = document.getElementById("wf_anal");
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement("script");
    script.id = "wf_anal";
    script.src = "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=89aa37f5fbe8adddcc569180832e4fc3dc145cad6c32b360e6d289b8d582158304fe0888d18b7ccde1e16540f721fe47gid934bce107b2a66f9355c04c92f3058667ce14447f62f682407c7f405b6958924gid8ee0fc771ba72dce87f54717ebab251a383455ddc58b4b1d467badb8766e7bcegid748ee548ecdb44f545398dd4c1aa069d73859c7b9e9da592d97b86149ab621f4&tw=a0bd3e886bbf74ad9a309b8449448697c6101a128a1104b9fd7984b0bbb8f464";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      const s = document.getElementById("wf_anal");
      if (s) {
        s.remove();
      }
    };
  }, []);

  const toggleVenue = (venueId: string) => {
    setSelectedVenues((prev) => {
      if (prev.includes(venueId)) {
        return prev.filter((v) => v !== venueId);
      } else {
        return [...prev, venueId];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Validate mandatory last name
    if (!lastName.trim()) {
      alert("Last Name is required.");
      e.preventDefault();
      return;
    }

    // Validate email format if provided
    if (email.trim().length !== 0) {
      const atpos = email.indexOf("@");
      const dotpos = email.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }
    }

    // Require at least one venue
    if (selectedVenues.length === 0) {
      alert("Please select at least one preferred venue.");
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setPreferredDate("");
    setSelectedVenues(["Shivansh Lawn"]);
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

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
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border border-gold/20 bg-wine-deep h-[240px] md:h-[300px] flex items-center justify-center text-center">
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
          <div className="lg:col-span-5 space-y-6">
            
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

          {/* Zoho Leads Web-to-Entity Form Integration: Column 2 */}
          <div className="lg:col-span-7">
            
            <div className="bg-wine-deep border border-gold/30 rounded-3xl p-6 md:p-8 lg:p-10 relative shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_35%)] rounded-3xl pointer-events-none"></div>
              
              <div className="relative z-10 mb-8">
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase block mb-1">
                  ✦ CUSTOMIZED LAYOUTS & LAWN QUOTES ✦
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                  Request a Dedicated Callback
                </h3>
                <div className="h-0.5 w-12 bg-gold mt-3"></div>
              </div>

              {isSubmitted ? (
                <div className="bg-wine-dark/70 border-2 border-gold rounded-2xl p-8 text-center space-y-6 animate-fade-in relative z-10">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-gold" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl md:text-2xl font-bold text-gold">
                      Inquiry Submitted Successfully!
                    </h4>
                    <p className="text-sm text-blush">
                      Thank you, <span className="text-white font-bold">{firstName} {lastName}</span>. Your request has been logged.
                    </p>
                  </div>
                  
                  <div className="text-xs text-blush/80 leading-relaxed max-w-md mx-auto bg-black/25 p-4 rounded-xl border border-gold/15 space-y-2">
                    <p>
                      Our booking director will ring you shortly on <span className="text-white font-semibold">{mobile || "your contact number"}</span> with customized prices for the selected lawns:
                    </p>
                    <p className="text-gold font-bold">
                      {selectedVenues.join(", ")}
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 border border-gold/30 hover:border-gold text-gold hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form 
                  id="webform1361941000000535143" 
                  action="https://crm.zoho.in/crm/WebToLeadForm" 
                  name="WebToLeads1361941000000535143" 
                  method="POST" 
                  target="zoho_contact_iframe"
                  onSubmit={handleSubmit} 
                  className="space-y-6 relative z-10"
                  acceptCharset="UTF-8"
                >
                  {/* Hidden Zoho configuration values provided in the request signature */}
                  <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="70fa2d9814fd1df39e52cd97ec716845339a56b5068e1016c652c9076cbc06ab" readOnly />
                  <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                  <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="02dc596e5b8ece3bbd6179e6ee1f51080ae892194d4ce3ba0c58984ae155418dec91f7f18aff9f3e8c7cc54a060163e9" readOnly />
                  <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" readOnly />
                  <input type="text" style={{ display: 'none' }} name="returnURL" value="https://thevenetiangarden.in/#contact" readOnly />
                  <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" readOnly />

                  {/* Description input acts as selected Venues mapping */}
                  <textarea 
                    name="Description" 
                    id="Description" 
                    style={{ display: 'none' }}
                    value={selectedVenues.join(", ")}
                    readOnly
                  />

                  {/* Row 1: Name Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-2" htmlFor="First_Name">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        id="First_Name"
                        name="First Name" 
                        maxLength={40}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Ramesh" 
                        className="w-full text-sm p-3.5 bg-black/20 border border-gold/30 focus:border-gold rounded-lg text-white placeholder-gray-500 outline-none transition-all focus:shadow-[0_0_12px_rgba(201,168,76,0.15)]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-2" htmlFor="Last_Name">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        id="Last_Name"
                        name="Last Name" 
                        maxLength={80}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Malhotra" 
                        className="w-full text-sm p-3.5 bg-black/20 border border-gold/30 focus:border-gold rounded-lg text-white placeholder-gray-500 outline-none transition-all focus:shadow-[0_0_12px_rgba(201,168,76,0.15)]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-2" htmlFor="Email">
                        Email Address
                      </label>
                      <input 
                        type="text" 
                        id="Email"
                        name="Email" 
                        maxLength={100}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@example.com" 
                        className="w-full text-sm p-3.5 bg-black/20 border border-gold/30 focus:border-gold rounded-lg text-white placeholder-gray-500 outline-none transition-all focus:shadow-[0_0_12px_rgba(201,168,76,0.15)]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-2" htmlFor="Mobile">
                        Mobile Number
                      </label>
                      <input 
                        type="text" 
                        id="Mobile"
                        name="Mobile" 
                        maxLength={30}
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full text-sm p-3.5 bg-black/20 border border-gold/30 focus:border-gold rounded-lg text-white placeholder-gray-500 outline-none transition-all focus:shadow-[0_0_12px_rgba(201,168,76,0.15)]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Preferred Date of Booking (Designation Field in CRM) */}
                  <div>
                    <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-2" htmlFor="Designation">
                      Preferred Date of Booking
                    </label>
                    <input 
                      type="text" 
                      id="Designation"
                      name="Designation" 
                      maxLength={100}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      placeholder="e.g. 25th Oct 2026" 
                      className="w-full text-sm p-3.5 bg-black/20 border border-gold/30 focus:border-gold rounded-lg text-white placeholder-gray-500 outline-none transition-all focus:shadow-[0_0_12px_rgba(201,168,76,0.15)]"
                    />
                  </div>

                  {/* Interactive Venue Multi-Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-gold uppercase tracking-wider mb-3">
                      Preferred Venues (Select Multiple) <span className="text-red-400">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto p-2 border border-gold/20 rounded-lg bg-black/10">
                      {venueOptions.map((venue) => {
                        const isSelected = selectedVenues.includes(venue.id);
                        return (
                          <button
                            key={venue.id}
                            type="button"
                            onClick={() => toggleVenue(venue.id)}
                            className={`flex items-center justify-between text-left p-3 rounded-lg border transition-all cursor-pointer ${
                              isSelected 
                                ? "bg-gold/15 border-gold text-gold font-bold shadow-[0_0_10px_rgba(201,168,76,0.1)]" 
                                : "bg-black/10 border-gold/15 text-ivory/70 hover:border-gold/30 hover:text-white"
                            }`}
                          >
                            <div className="flex flex-col">
                              <span className="font-semibold text-xs">{venue.name}</span>
                              <span 
                                className="text-[9px] opacity-75 font-mono" 
                                dangerouslySetInnerHTML={{ __html: venue.size }}
                              />
                            </div>
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all shrink-0 ${
                              isSelected ? "border-gold bg-gold text-wine-deep" : "border-gold/30 bg-black/20"
                            }`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submission and Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button 
                      type="submit" 
                      id="formsubmit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 bg-gold hover:bg-gold-light disabled:bg-gold/40 text-wine-deep font-bold rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                    >
                      <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Reservation Inquiry"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-4 border border-gold/30 hover:border-gold hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider text-gold/80 transition-all cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}

              {/* Hidden iframe target for Zoho submission to prevent page reload */}
              <iframe 
                name="zoho_contact_iframe" 
                id="zoho_contact_iframe" 
                className="hidden w-0 h-0 absolute pointer-events-none" 
                style={{ display: 'none' }}
              />

              <div className="text-[10px] text-gold/40 text-center relative z-10 pt-4 border-t border-gold/10 mt-6">
                The Venetian Garden &bull; Premium Event Spaces Lucknow
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
