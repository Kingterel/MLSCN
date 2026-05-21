import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubsubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubsubscribed(true);
    setEmail('');
    setTimeout(() => setSubsubscribed(false), 5000);
  };

  return (
    <footer className="bg-brand-dark text-slate-100 mt-auto pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-brand-medium/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-brand-light/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Contact Info (Matches Figma "Contact Info") */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <GraduationCapSVG className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-tight font-heading">
                MOUNT LA SALLE <span className="block text-xs text-brand-accent tracking-widest">COLLEGE NAKA</span>
              </span>
            </div>
            <p className="text-slate-355 text-sm leading-relaxed max-w-md">
              Committed to providing high-quality, comprehensive educational experiences, building character and academic excellence, and nurturing future leaders who excel in learning and character.
            </p>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contact Details</h4>
              <ul className="space-y-3 text-sm text-slate-350">
                <li>
                  <a href="tel:+2341234567890" className="flex items-center gap-3 hover:text-brand-accent transition-colors duration-300 group">
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-brand-light/20 transition-colors">
                      <Phone className="w-4 h-4 text-brand-accent" />
                    </span>
                    <span>+234 123 456 7890</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mlscnaka.edu.ng" className="flex items-center gap-3 hover:text-brand-accent transition-colors duration-300 group">
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-brand-light/20 transition-colors">
                      <Mail className="w-4 h-4 text-brand-accent" />
                    </span>
                    <span>info@mlscnaka.edu.ng</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 group">
                    <span className="p-2 rounded-lg bg-white/5 mt-0.5">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                    </span>
                    <span className="leading-relaxed">Naka, Gwer-West Local Government Area, Benue State, Nigeria</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <Link to="/" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" /> Home
              </Link>
              <Link to="/about" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" /> About Us
              </Link>
              <Link to="/academics" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" /> Academics
              </Link>
              <Link to="/admissions" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" /> Admissions
              </Link>
              <Link to="/news" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" /> News
              </Link>
              <Link to="/gallery" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" /> Gallery
              </Link>
              <Link to="/contact" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" /> Contact
              </Link>
              <Link to="/portal" className="text-slate-350 hover:text-brand-accent text-sm flex items-center gap-1 transition-colors duration-300 font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent" /> Student Portal
              </Link>
            </div>
          </div>

          {/* Newsletter Section (Matches Figma "Newsletter") */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-heading">Newsletter Signup</h4>
            <p className="text-slate-350 text-sm leading-relaxed">
              Stay up-to-date with school announcements, upcoming events, academic timelines, and student newsletters.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pr-28 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-brand-light hover:bg-brand-accent text-white font-bold text-xs rounded-lg transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-green-900/35 active:scale-95"
                >
                  <Send className="w-3 h-3" />
                  <span>Sign Up</span>
                </button>
              </div>
              
              {error && <p className="text-red-400 text-xs mt-1 font-semibold">{error}</p>}
              {subscribed && (
                <div className="flex items-center gap-2 text-brand-accent text-xs font-semibold animate-fade-in-up">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed successfully! Thank you.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Matches Figma Bottom Ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-350">
            <span>&copy; {new Date().getFullYear()} Mount La Salle College Naka. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span>Excellence in Learning & Character</span>
          </div>

          {/* Social Media Grid - Custom vector SVGs for brand safety */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-light flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-light flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-light flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Simple internal SVG component for clean layout branding
function GraduationCapSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.263 10.184a1.5 1.5 0 011.087-.416h13.3a1.5 1.5 0 011.087.416c.334.333.393.844.156 1.25l-2.455 4.195a1.5 1.5 0 01-1.282.75H7.944a1.5 1.5 0 01-1.282-.75l-2.455-4.195a1.5 1.5 0 01.156-1.25z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.25l-9 4.5 9 4.5 9-4.5-9-4.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 9.75v5.25c0 1.25 3 2.25 6.75 2.25s6.75-1 6.75-2.25V9.75"
      />
    </svg>
  );
}
