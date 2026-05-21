import { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  ShieldAlert, Sparkles 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Full name is required.';
    if (!formData.email) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid.';
    }
    if (!formData.subject) tempErrors.subject = 'Subject selection is required.';
    if (!formData.message) tempErrors.message = 'Message content is required.';

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-1 bg-slate-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner Header */}
        <div className="bg-brand-dark rounded-3xl text-white py-16 px-8 relative overflow-hidden shadow-xl text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/95 to-brand-light/80 opacity-90"></div>
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-accent/20 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Get In Touch
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              We would love to hear from you. Reach out to our campus office for admission inquiries, schedules, or support.
            </p>
          </div>
        </div>

        {/* 1. CONTACT INFO & CHANNELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Phone */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-dark flex items-center justify-center shadow-inner">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading">Call Campus</h4>
            <div className="space-y-1">
              <a href="tel:+2341234567890" className="text-slate-500 hover:text-brand-light text-xs font-semibold block transition-colors">
                +234 123 456 7890
              </a>
              <a href="tel:+2348098765432" className="text-slate-500 hover:text-brand-light text-xs font-semibold block transition-colors">
                +234 809 876 5432
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-dark flex items-center justify-center shadow-inner">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading">Email Registry</h4>
            <div className="space-y-1">
              <a href="mailto:info@mlscnaka.edu.ng" className="text-slate-500 hover:text-brand-light text-xs font-semibold block transition-colors overflow-hidden text-ellipsis">
                info@mlscnaka.edu.ng
              </a>
              <a href="mailto:admissions@mlscnaka.edu.ng" className="text-slate-500 hover:text-brand-light text-xs font-semibold block transition-colors overflow-hidden text-ellipsis">
                admissions@mlscnaka.edu.ng
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-dark flex items-center justify-center shadow-inner">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading">Physical Address</h4>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">
              Naka, Gwer-West Local Government Area, Benue State, Nigeria.
            </p>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-dark flex items-center justify-center shadow-inner">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading">Office Hours</h4>
            <div className="text-slate-500 text-xs font-medium space-y-1">
              <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
              <p className="text-brand-light font-bold">Weekends: Closed</p>
            </div>
          </div>

        </div>

        {/* 2. FORM & HIGH-FIDELITY VECTOR MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Message Form (Left Column) */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800 font-heading">Send Us a Message</h3>
                <p className="text-xs text-slate-400 font-semibold">We typically reply within 24 operational hours.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-750 uppercase mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                    placeholder="Marcus Aurelius"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-755 uppercase mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                    placeholder="marcus@empire.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-750 uppercase mb-1.5">Subject Matter *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${errors.subject ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all text-slate-600`}
                  >
                    <option value="">Select Purpose</option>
                    <option value="General Admission Inquiry">General Admission Inquiry</option>
                    <option value="Tuition Fee Structure">Tuition Fee Structure</option>
                    <option value="Student Record Request">Student Record Request</option>
                    <option value="Career & Technical Hiring">Career & Technical Hiring</option>
                    <option value="Other Feedback">Other Feedback</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-750 uppercase mb-1.5">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                    placeholder="Describe your inquiry in detail..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.message}</p>}
                </div>

                {submitted && (
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl animate-fade-in-up">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Your message has been sent successfully! Thank you.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-dark hover:bg-brand-medium text-white font-bold rounded-xl shadow-md shadow-brand-dark/10 hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* High Fidelity Vector/SVG Campus Map Mockup (Right Column) */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-8 text-white relative shadow-xl overflow-hidden flex flex-col justify-between border border-slate-800">
            {/* SVG Glowing Map Graphics background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 400 400">
                <path d="M 50 150 Q 150 50 250 150 T 350 150" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 50 250 Q 150 150 250 250 T 350 250" fill="none" stroke="#22C55E" strokeWidth="1" />
                <circle cx="150" cy="120" r="100" fill="none" stroke="#22C55E" strokeWidth="0.5" />
                <circle cx="280" cy="220" r="60" fill="none" stroke="#22C55E" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="space-y-4 relative z-10">
              <span className="text-brand-accent text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Interactive Campus Map
              </span>
              <h3 className="text-xl font-bold font-heading text-slate-100">Mount La Salle Naka Campus</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Our beautiful sprawling 15-hectare campus features modern architectural facilities positioned in Naka town, Benue State.
              </p>
            </div>

            {/* Simulated Vector Interface Layout */}
            <div className="my-8 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative aspect-[4/3] flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Compass Indicator */}
              <div className="absolute top-4 right-4 text-[9px] font-bold text-slate-550 border border-slate-800 p-1.5 rounded-lg flex flex-col items-center select-none bg-slate-950">
                <span className="text-brand-accent font-black">N</span>
                <span>W &bull; E</span>
                <span>S</span>
              </div>

              {/* Map Vector Dots & Nodes */}
              <div className="relative w-full h-full">
                
                {/* Node 1: Main Admin Block */}
                <div className="absolute top-1/4 left-1/3 group cursor-pointer flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-brand-accent ring-4 ring-brand-light/35 animate-ping absolute"></div>
                  <div className="w-3 h-3 rounded-full bg-brand-accent ring-2 ring-white z-10"></div>
                  <span className="mt-1 text-[8px] bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded shadow text-slate-300 font-bold whitespace-nowrap opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    Admin Building
                  </span>
                </div>

                {/* Node 2: Science Block */}
                <div className="absolute top-1/2 left-2/3 group cursor-pointer flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/35 animate-ping absolute"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white z-10"></div>
                  <span className="mt-1 text-[8px] bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded shadow text-slate-300 font-bold whitespace-nowrap opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    Science Labs & Exhibition
                  </span>
                </div>

                {/* Node 3: Sports Arena */}
                <div className="absolute bottom-1/4 left-1/2 group cursor-pointer flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white z-10"></div>
                  <span className="mt-1 text-[8px] bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded shadow text-slate-300 font-bold whitespace-nowrap opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    Sports Arena & Pitch
                  </span>
                </div>

              </div>

              {/* Map Footer Bar */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-[9px] text-slate-500 font-bold">
                <span>Scale: 1:2500 &bull; Vector Coordinates</span>
                <span className="text-slate-400">7&deg; 50' 12" N &bull; 8&deg; 12' 35" E</span>
              </div>
            </div>

            {/* Quick directions tip */}
            <div className="flex gap-3 text-xs bg-white/5 border border-white/10 p-4 rounded-2xl relative z-10">
              <ShieldAlert className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="font-bold text-slate-200">How to get here:</h5>
                <p className="text-[11px] text-slate-450 leading-relaxed font-medium">
                  Located along Naka-Makurdi expressway, approximately 35 minutes drive from Makurdi metropolis capital city.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
