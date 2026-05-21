import { Shield, Target, Compass, Heart, Award, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      title: "Faith & Zeal",
      description: "Developing robust spiritual foundations, nurturing moral integrity, and fostering enthusiasm in all scholastic endeavors.",
      icon: Shield
    },
    {
      title: "Academic Excellence",
      description: "Engaging pupils in rigorous scholarship, cultivating critical query, and equipping them to exceed testing standards.",
      icon: Target
    },
    {
      title: "Inclusion & Community",
      description: "Creating a welcoming environment where each student's unique potential is celebrated and supported.",
      icon: Heart
    },
    {
      title: "Leadership & Character",
      description: "Building integrity, self-discipline, and strong moral leadership skills to prepare students as future community builders.",
      icon: Award
    }
  ];

  const milestones = [
    { year: "1994", event: "Mount La Salle College Naka was founded by the De La Salle Brothers to bring high-quality education to Benue State." },
    { year: "2004", event: "Completed construction of the senior science block and expanded laboratory facilities to support STEM excellence." },
    { year: "2014", event: "Celebrated 20 years of academic distinction and introduced digital computer labs into the junior high curriculum." },
    { year: "2024", event: "Launched the multi-purpose events sports complex and achieved 100% pass rate in national senior school certificate examinations." }
  ];

  return (
    <div className="flex-1 bg-slate-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner Header */}
        <div className="bg-brand-dark rounded-3xl text-white py-16 px-8 relative overflow-hidden shadow-xl text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/95 to-brand-light/80 opacity-90"></div>
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-accent/20 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full">
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              About Mount La Salle College
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Excellence in Learning & Character. A premier co-educational secondary school rooted in Lasallian educational traditions.
            </p>
          </div>
        </div>

        {/* 1. HISTORY & PRINCIPAL'S WELCOME */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          
          {/* Principal Image & Label (Left Column) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg max-w-sm mx-auto bg-slate-100 border border-slate-200">
              <img 
                src="/assets/images/image2.jpeg" 
                alt="Rev. Brother Principal" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <h4 className="font-extrabold text-sm font-heading">Rev. Brother Principal</h4>
                <p className="text-[10px] text-brand-accent font-bold uppercase tracking-wider">Director, MLSCN Institution</p>
              </div>
            </div>
          </div>

          {/* Letter (Right Column) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-light font-bold text-xs uppercase tracking-widest">Principal's Address</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 font-heading">
              Welcome from our Director
            </h2>
            <div className="w-12 h-1 bg-brand-light rounded-full"></div>
            
            <div className="space-y-4 text-slate-650 text-sm leading-relaxed">
              <p className="font-medium text-slate-700 italic">
                "Dear Prospective Students, Parents, and Guardians,"
              </p>
              <p>
                It is my privilege to welcome you to Mount La Salle College Naka (MLSCN). Guided by our foundational mission of "Excellence in Learning & Character," we strive to create a holistic learning environment that enables young boys and girls to explore their full academic, athletic, and moral potential.
              </p>
              <p>
                Our pedagogy is based on the rich, global traditions of Lasallian education, which prioritizes the personal development of every single pupil. In our classrooms, science centers, and sports fields, we emphasize critical inquiry, practical ingenuity, and spiritual fortitude.
              </p>
              <p>
                We look forward to partnering with you to nurture the next generation of outstanding scholars and visionary leaders.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-150/70 flex items-center gap-4">
              <div className="font-cursive text-brand-dark opacity-60 text-xl font-semibold">La Salle Naka</div>
              <div>
                <p className="text-xs font-bold text-slate-800">Rev. Brother Principal, FSC</p>
                <p className="text-[10px] text-slate-400">Head of Mount La Salle College Naka</p>
              </div>
            </div>
          </div>

        </div>

        {/* 2. MISSION, VISION, PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-dark flex items-center justify-center shadow-inner">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 font-heading">Our Mission</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              To provide a comprehensive, qualitative, and faith-integrated education that equips young individuals with academic excellence, rigorous moral standards, vocational readiness, and cooperative character to excel in an evolving global society.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-dark flex items-center justify-center shadow-inner">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 font-heading">Our Vision</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              To remain a leading, highly distinguished secondary institution in Nigeria, celebrated for breeding high-achieving, morally sound, and socially responsible citizens who excel in intellectual prowess and character.
            </p>
          </div>
        </div>

        {/* 3. CORE VALUES GRID */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-light font-bold text-xs uppercase tracking-widest">Our Guiding Virtues</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 font-heading">
              Our Core Lasallian Values
            </h2>
            <div className="w-12 h-1 bg-brand-light mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-mint text-brand-dark flex items-center justify-center shadow-inner">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-base font-heading">{value.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. HISTORICAL MILESTONES (Timeline) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-light font-bold text-xs uppercase tracking-widest">Our Heritage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 font-heading">
              Milestones of Growth
            </h2>
            <div className="w-12 h-1 bg-brand-light mx-auto rounded-full"></div>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l border-slate-200 ml-4 sm:ml-6 max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Node marker */}
                <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-brand-dark text-white text-[10px] font-bold flex items-center justify-center shadow-md border-4 border-slate-50">
                  {idx + 1}
                </div>
                
                {/* Content */}
                <div className="space-y-1 bg-slate-50 hover:bg-brand-mint/20 p-5 rounded-2xl border border-slate-100 transition-colors">
                  <span className="inline-block px-2.5 py-0.5 bg-brand-dark text-white text-xs font-bold rounded-full">
                    {milestone.year}
                  </span>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-medium">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
