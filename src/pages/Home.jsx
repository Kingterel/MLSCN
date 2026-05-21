import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { 
  FileText, Calendar, Heart, Award, Users, BookOpen, Compass, 
  ChevronRight, ArrowRight, UserCheck, Play, ArrowUpRight 
} from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import NewsletterModal from '../components/NewsletterModal';
import Lightbox from '../components/Lightbox';

export default function Home() {
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // States for stats count animation
  const [stats, setStats] = useState({ years: 0, students: 0, staff: 0, rate: 0 });
  const statsSectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Stats count up animation upon scroll
  useEffect(() => {
    const section = statsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const duration = 2000; // ms
          const start = performance.now();

          const animate = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            
            // Ease out quad
            const ease = progress * (2 - progress);

            setStats({
              years: Math.floor(ease * 30),
              students: Math.floor(ease * 1500),
              staff: Math.floor(ease * 50),
              rate: Math.floor(ease * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setStats({ years: 30, students: 1500, staff: 50, rate: 100 });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const newsletters = [
    {
      id: 1,
      title: "Term 1 Newsletter",
      description: "Get comprehensive updates on the first term academic progress, sports schedules, and student outcomes.",
      date: "May 10, 2026",
      tag: "Academic",
      issueNo: "26-01",
      headline: "Welcome to Term 1: Nurturing Growth and Brilliance",
      icon: FileText
    },
    {
      id: 2,
      title: "Founder's Day Update",
      description: "Join us in celebrating the foundational legacy and core Lasallian virtues at Mount La Salle Naka.",
      date: "May 18, 2026",
      tag: "Celebration",
      issueNo: "26-02",
      headline: "Founder's Day Celebration: Commemorating Faith and Zeal",
      icon: Calendar
    },
    {
      id: 3,
      title: "Community Service Initiative",
      description: "Explore our student-led outreach seminar providing support to neighboring communities in Naka.",
      date: "May 20, 2026",
      tag: "Outreach",
      issueNo: "26-03",
      headline: "Lasallian Outreach: Cultivating Empathy and Service",
      icon: Heart
    }
  ];

  const galleryImages = [
    {
      src: "/assets/images/image6.jpeg",
      title: "Inter-House Sports Championship",
      category: "Sports",
      description: "Students representing their respective houses in track and field athletic events."
    },
    {
      src: "/assets/images/image7.jpeg",
      title: "Cultural Festival & Heritage Day",
      category: "Culture",
      description: "Celebrating Nigeria's diverse cultural traditions through costume, music, and dance."
    },
    {
      src: "/assets/images/image8.jpeg",
      title: "Science & Technology Exhibition",
      category: "Science",
      description: "Junior and senior high school students demonstrating original engineering prototypes."
    },
    {
      src: "/assets/images/image5.jpeg",
      title: "Senior Graduation Ceremony",
      category: "Academics",
      description: "Honoring our senior school graduates as they step forward into prestigious universities."
    },
    {
      src: "/assets/images/image10.jpeg",
      title: "Students Collaborative Workshop",
      category: "Co-curricular",
      description: "Interactive team projects inside our newly upgraded digital research library."
    }
  ];

  const carouselSlides = [
    {
      image: "/assets/images/image1.jpeg",
      title: "Excellence in Learning & Character",
      subtitle: "Nurturing bright minds with high moral integrity since 1994."
    },
    {
      image: "/assets/images/image2.jpeg",
      title: "Modern Classrooms & Science Labs",
      subtitle: "Empowering hands-on academic exploration and innovative research."
    },
    {
      image: "/assets/images/image9.jpeg",
      title: "Vibrant Sports & Co-Curriculars",
      subtitle: "Helping students build teamwork, leadership, and athletic rigor."
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 font-sans">
      
      {/* 1. HERO SECTION (Matches Figma design with forest-green styling) */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-dark">
        {/* Background Image with Green-Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/image1.jpeg" 
            alt="MLSCN Students" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-subtle" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-medium/85 mix-blend-multiply"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light/35 border border-brand-light/50 text-brand-accent text-xs font-bold uppercase tracking-widest">
            <Award className="w-4 h-4" /> Official Portal of Mount La Salle College Naka
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight leading-none text-white max-w-4xl mx-auto">
            Welcome to Mount La Salle <span className="block text-brand-accent">College Naka</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Excellence in Learning & Character. A highly distinguished, faith-centered educational sanctuary empowering young scholars since 1994.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-green-500 text-brand-dark font-extrabold rounded-xl shadow-lg shadow-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-5 h-5 text-brand-dark" />
            </Link>
            <a 
              href="#life-at-mlscn"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/25 hover:border-white/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Decorative Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-50 pointer-events-none" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
      </section>

      {/* 2. LIFE AT MLSCN CAROUSEL SECTION */}
      <section id="life-at-mlscn" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-light font-bold text-xs uppercase tracking-widest">Experience Campus Life</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 font-heading">
            Our Vibrant Campus Life
          </h2>
          <div className="w-16 h-1 bg-brand-light mx-auto rounded-full"></div>
          <p className="text-slate-550 text-sm md:text-base leading-relaxed">
            Mount La Salle College Naka fosters academic excellence alongside dynamic sports, leadership circles, and cultural societies.
          </p>
        </div>

        {/* Swiper Slider with Central Overlay Overlap */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-200 aspect-[16/9] max-h-[550px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            loop
            className="w-full h-full"
          >
            {carouselSlides.map((slide, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
                
                {/* Central Overlap Card - matches the Figma "Life at MLSCN: Discover, Grow, Lead" tag overlay */}
                <div className="absolute inset-x-4 bottom-8 sm:bottom-12 md:bottom-16 max-w-xl mx-auto glass-panel-dark text-white p-6 sm:p-8 rounded-2xl shadow-xl text-center space-y-3 transform translate-y-0 transition-all hover:scale-[1.02] duration-300">
                  <span className="text-brand-accent text-xs font-bold tracking-widest uppercase">Life at MLSCN</span>
                  <h3 className="text-lg sm:text-2xl font-black font-heading tracking-tight">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200">
                    {slide.subtitle}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3. KEY CATEGORIES SECTION (Admissions, Academics, Meet Our Faculty) */}
      <section className="py-16 bg-white border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Admissions */}
          <Link 
            to="/admissions"
            className="group p-8 rounded-2xl bg-slate-50 hover:bg-brand-mint/65 border border-slate-100 hover:border-brand-light/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 bg-emerald-100 text-brand-light group-hover:bg-brand-dark group-hover:text-white rounded-xl flex items-center justify-center shadow-inner transition-colors duration-300">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-dark font-heading">Admissions</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Learn about our customized, comprehensive admissions guidelines, check entry requirements, and apply online today.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-brand-light font-bold text-sm mt-8 group-hover:gap-3 transition-all">
              <span>Online Application</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 2: Academics */}
          <Link 
            to="/academics"
            className="group p-8 rounded-2xl bg-slate-50 hover:bg-brand-mint/65 border border-slate-100 hover:border-brand-light/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 bg-emerald-100 text-brand-light group-hover:bg-brand-dark group-hover:text-white rounded-xl flex items-center justify-center shadow-inner transition-colors duration-300">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-dark font-heading">Academics</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Discover more about our broad curriculum, academic calendar, laboratory centers, and guidance counseling.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-brand-light font-bold text-sm mt-8 group-hover:gap-3 transition-all">
              <span>View Curriculum</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 3: Meet Our Faculty */}
          <Link 
            to="/about"
            className="group p-8 rounded-2xl bg-slate-50 hover:bg-brand-mint/65 border border-slate-100 hover:border-brand-light/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 bg-emerald-100 text-brand-light group-hover:bg-brand-dark group-hover:text-white rounded-xl flex items-center justify-center shadow-inner transition-colors duration-300">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-dark font-heading">Meet Our Faculty</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Get to know our highly qualified, dedicated teaching staff and administrators passionate about child tutoring.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-brand-light font-bold text-sm mt-8 group-hover:gap-3 transition-all">
              <span>Faculty Profiles</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

        </div>
      </section>

      {/* 4. OUR CAMPUS & COMMUNITY (Newsletters + Events Gallery) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-light font-bold text-xs uppercase tracking-widest">School Broadcasts</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 font-heading">
            Our Campus & Community
          </h2>
          <div className="w-16 h-1 bg-brand-light mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Latest News & Newsletters (Figma Left Half) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight font-heading">Latest News & Newsletters</h3>
                <p className="text-xs text-slate-400 font-semibold mt-1">Providing Big Education & Building Future Leaders</p>
              </div>
              <Link to="/news" className="text-brand-light hover:text-brand-dark text-sm font-extrabold flex items-center gap-1 group">
                <span>View All</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Newsletters Cards Stack */}
            <div className="space-y-4">
              {newsletters.map((newsletter) => {
                const IconComponent = newsletter.icon;
                return (
                  <div 
                    key={newsletter.id}
                    className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-mint hover:shadow-lg transition-all duration-300 flex items-start gap-5 relative group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-dark flex flex-shrink-0 items-center justify-center shadow-inner group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">{newsletter.date}</span>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-650 font-bold text-[10px] rounded-full uppercase tracking-wider">
                          {newsletter.tag}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-800 font-heading">{newsletter.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {newsletter.description}
                      </p>
                      <button
                        onClick={() => setSelectedNewsletter(newsletter)}
                        className="inline-flex items-center gap-1.5 text-xs text-brand-light font-extrabold hover:text-brand-dark hover:underline transition-colors mt-2"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Events Gallery (Figma Right Half) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight font-heading">Events Gallery</h3>
                <p className="text-xs text-slate-400 font-semibold mt-1">Glimpses of outstanding student achievements</p>
              </div>
              <Link to="/gallery" className="text-brand-light hover:text-brand-dark text-sm font-extrabold flex items-center gap-1 group">
                <span>View Gallery</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Interactive Grid of Event Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                  
                  <div className="absolute bottom-4 inset-x-4 space-y-2 text-white">
                    <span className="inline-block px-2 py-0.5 bg-brand-light text-white text-[9px] font-bold rounded-full uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h4 className="text-sm font-bold font-heading leading-snug tracking-tight text-slate-100">
                      {image.title}
                    </h4>
                  </div>
                  
                  {/* Hover icon indicator */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. STATS BAR (Figma grey/mint background stats ribbon) */}
      <section 
        ref={statsSectionRef}
        className="py-12 bg-slate-100/80 border-y border-slate-200 px-4 sm:px-6 lg:px-8 w-full select-none"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          
          {/* Stat 1 */}
          <div className="text-center py-4 md:py-0 space-y-1.5 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-5xl font-black text-brand-dark font-heading">
              {stats.years}+
            </span>
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">
              Years of Excellence
            </span>
          </div>

          {/* Stat 2 */}
          <div className="text-center py-4 md:py-0 space-y-1.5 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-5xl font-black text-brand-dark font-heading">
              {stats.students.toLocaleString()}+
            </span>
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">
              Students Enrolled
            </span>
          </div>

          {/* Stat 3 */}
          <div className="text-center py-4 md:py-0 space-y-1.5 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-5xl font-black text-brand-dark font-heading">
              {stats.staff}+
            </span>
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">
              Dedicated Staff
            </span>
          </div>

          {/* Stat 4 */}
          <div className="text-center py-4 md:py-0 space-y-1.5 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-5xl font-black text-brand-dark font-heading">
              {stats.rate}%
            </span>
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">
              Success Rate
            </span>
          </div>

        </div>
      </section>

      {/* Shared Overlays */}
      <NewsletterModal
        isOpen={selectedNewsletter !== null}
        onClose={() => setSelectedNewsletter(null)}
        newsletter={selectedNewsletter}
      />

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />

    </div>
  );
}
