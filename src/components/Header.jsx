import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Shield } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'News & Newsletter', path: '/news' },
    { name: 'Events Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 bg-brand-dark rounded-xl shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-7 h-7 text-white" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-dark leading-tight font-heading">
                MOUNT LA SALLE
              </span>
              <span className="text-xs font-bold tracking-widest text-brand-light font-heading">
                COLLEGE NAKA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 rounded-lg hover:bg-slate-50 ${
                    isActive
                      ? 'text-brand-dark'
                      : 'text-slate-600 hover:text-brand-dark'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-dark rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/portal"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white text-sm font-bold rounded-xl shadow-md shadow-brand-dark/10 hover:bg-brand-medium hover:shadow-lg hover:shadow-brand-dark/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Portal</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-brand-dark hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-dark transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-slate-100 shadow-xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-mint text-brand-dark border-l-4 border-brand-dark'
                    : 'text-slate-600 hover:bg-slate-55 hover:text-brand-dark'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 border-t border-slate-100">
            <Link
              to="/portal"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-brand-dark text-white font-bold rounded-xl shadow-md hover:bg-brand-medium active:scale-98 transition-all duration-300"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Student Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
