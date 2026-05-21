import { useState } from 'react';
import { Eye, Image as ImageIcon, Filter, Play } from 'lucide-react';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = ["All", "Sports", "Culture", "Science", "Academics", "Campus"];

  const images = [
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
      category: "Campus",
      description: "Interactive team projects inside our newly upgraded digital research library."
    },
    {
      src: "/assets/images/image9.jpeg",
      title: "Classroom Lecture Sessions",
      category: "Academics",
      description: "Senior secondary scholars participating in an mathematics workshop."
    },
    {
      src: "/assets/images/image3.jpeg",
      title: "Science Chemistry Laboratory Experiments",
      category: "Science",
      description: "Hands-on analysis of chemical compositions inside our advanced science labs."
    },
    {
      src: "/assets/images/image4.jpeg",
      title: "Inter-House Football Finals",
      category: "Sports",
      description: "Our school senior team competing in the annual football finals."
    }
  ];

  const filteredImages = images.filter(img => 
    activeFilter === 'All' || img.category === activeFilter
  );

  return (
    <div className="flex-1 bg-slate-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner Header */}
        <div className="bg-brand-dark rounded-3xl text-white py-16 px-8 relative overflow-hidden shadow-xl text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/95 to-brand-light/80 opacity-90"></div>
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-accent/20 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full">
              Photo Gallery
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Our Campus Events Gallery
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Snapshots of Excellence. Browse photos depicting outstanding athletic tournaments, science labs, and cultural celebrations.
            </p>
          </div>
        </div>

        {/* 2. FILTER CONTROLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm max-w-3xl mx-auto">
          <Filter className="w-4 h-4 text-slate-450 mr-1 hidden sm:block" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeFilter === filter
                  ? 'bg-brand-dark text-white shadow-md shadow-brand-dark/15 scale-102'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 3. IMAGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
          {filteredImages.map((image, idx) => {
            // Find global index in images array for lightbox sync
            const globalIdx = images.findIndex(img => img.src === image.src);
            return (
              <div 
                key={idx}
                onClick={() => {
                  setLightboxIndex(globalIdx !== -1 ? globalIdx : 0);
                  setLightboxOpen(true);
                }}
                className="group relative h-64 rounded-2xl overflow-hidden bg-slate-200 cursor-pointer shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                  <span className="inline-block px-2.5 py-0.5 bg-brand-light text-white text-[9px] font-bold rounded-full uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold font-heading leading-tight tracking-tight text-slate-100 line-clamp-2">
                    {image.title}
                  </h4>
                </div>

                {/* Floating Preview Eye Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
}
