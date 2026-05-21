import { useState } from 'react';
import { Search, Filter, Calendar, FileText, ArrowRight, BookOpen, AlertCircle, Heart } from 'lucide-react';
import NewsletterModal from '../components/NewsletterModal';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);

  const categories = ["All", "Academic", "Celebration", "Outreach", "Sports"];

  const articles = [
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
    },
    {
      id: 4,
      title: "Inter-House Athletic Schedules",
      description: "Get official rosters, match timelines, and points grids for the upcoming athletics tournaments.",
      date: "April 28, 2026",
      tag: "Sports",
      issueNo: "26-04",
      headline: "Athletics 2026: Speed, Strength, and House Pride",
      icon: Calendar
    },
    {
      id: 5,
      title: "Science Lab Upgrade Complete",
      description: "We are thrilled to announce the completion of advanced physics, chemistry, and technical laboratories.",
      date: "April 15, 2026",
      tag: "Academic",
      issueNo: "26-05",
      headline: "Pioneering STEM: Unveiling Modern Laboratory Clusters",
      icon: FileText
    },
    {
      id: 6,
      title: "Alumni Donation & Grants",
      description: "Our esteemed alumni network has graciously funded secondary school grants for top JSS 3 students.",
      date: "March 30, 2026",
      tag: "Outreach",
      issueNo: "26-06",
      headline: "Alumni Synergy: Empowering Deserving Scholars",
      icon: Heart
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || art.tag === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 bg-slate-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner Header */}
        <div className="bg-brand-dark rounded-3xl text-white py-16 px-8 relative overflow-hidden shadow-xl text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/95 to-brand-light/80 opacity-90"></div>
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-accent/20 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full">
              News Feed
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              News & Newsletter Archive
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Stay informed. Access our comprehensive archive of letters, parent advisories, and student progress reports.
            </p>
          </div>
        </div>

        {/* 2. SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search newsletters, keywords, updates..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all"
            />
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-slate-405 hidden sm:block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-dark text-white shadow-md shadow-brand-dark/15 scale-102'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* 3. NEWS GRID CARDS */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {filteredArticles.map((art) => {
              const IconComponent = art.icon;
              return (
                <div 
                  key={art.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{art.date}</span>
                      <span className="px-2.5 py-0.5 bg-brand-mint text-brand-dark font-extrabold text-[9px] rounded-full uppercase tracking-wider">
                        {art.tag}
                      </span>
                    </div>

                    <div className="flex gap-4 items-start pt-2">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 shadow-inner">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-slate-800 text-base leading-snug group-hover:text-brand-dark transition-colors font-heading">
                        {art.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed pt-2 font-medium">
                      {art.description}
                    </p>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Issue: {art.issueNo}</span>
                    <button
                      onClick={() => setSelectedNewsletter(art)}
                      className="text-xs text-brand-light font-extrabold flex items-center gap-1 hover:text-brand-dark hover:underline"
                    >
                      <span>Read Document</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-100 rounded-3xl space-y-3 max-w-md mx-auto shadow-sm">
            <AlertCircle className="w-12 h-12 text-slate-350 mx-auto" />
            <h4 className="font-bold text-slate-800 text-base font-heading">No Newsletters Found</h4>
            <p className="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">
              We couldn't find any articles matching your search criteria. Try modifying your search string or changing filters.
            </p>
          </div>
        )}

      </div>

      <NewsletterModal
        isOpen={selectedNewsletter !== null}
        onClose={() => setSelectedNewsletter(null)}
        newsletter={selectedNewsletter}
      />
    </div>
  );
}
