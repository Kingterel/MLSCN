import { useState } from 'react';
import { BookOpen, Award, Users, Compass, Layers, CheckCircle2, ChevronRight, FileSpreadsheet } from 'lucide-react';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('jss');

  const jssSubjects = [
    "Mathematics", "English Studies", "Basic Science", "Basic Technology", 
    "Social Studies", "Civic Education", "Christian Religious Studies", "Agricultural Science",
    "Home Economics", "Computer Science (ICT)", "Business Studies", "Creative & Cultural Arts"
  ];

  const sssSubjects = {
    core: [
      "Mathematics", "English Language", "Civic Education", "Data Processing / Computer Studies"
    ],
    science: [
      "Physics", "Chemistry", "Biology", "Agricultural Science", "Further Mathematics", "Technical Drawing"
    ],
    arts: [
      "Literature in English", "Government", "History", "Christian Religious Knowledge", "Visual Arts", "French"
    ],
    commercial: [
      "Financial Accounting", "Commerce", "Economics", "Office Practice", "Insurance"
    ]
  };

  const terms = [
    { name: "Term 1 (Autumn)", duration: "September - December", focus: "Foundational coursework, baseline testing, and annual inter-house cross-country race." },
    { name: "Term 2 (Spring)", duration: "January - April", focus: "Advanced scientific experiments, cultural festival galas, and national olympiad competitions." },
    { name: "Term 3 (Summer)", duration: "May - July", focus: "Annual promotions examinations, science exhibitions, and senior school graduation honors." }
  ];

  return (
    <div className="flex-1 bg-slate-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner Header */}
        <div className="bg-brand-dark rounded-3xl text-white py-16 px-8 relative overflow-hidden shadow-xl text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/95 to-brand-light/80 opacity-90"></div>
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-brand-accent/20 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full">
              Academics
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Our Academic Curriculum
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Excellence in learning. Exploring interactive disciplines designed to foster logical inquiry, artistic creativity, and life skills.
            </p>
          </div>
        </div>

        {/* 1. CURRICULUM OVERVIEW & CLASS SECTIONS */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-light font-bold text-xs uppercase tracking-widest">Core Structure</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 font-heading">
              Secondary Education Levels
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We separate students into focused divisions to enable close teacher-student tutoring and precise performance tracking.
            </p>
            <div className="w-12 h-1 bg-brand-light mx-auto rounded-full"></div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center border-b border-slate-200">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('jss')}
                className={`py-3 px-6 text-sm sm:text-base font-bold transition-all border-b-4 ${
                  activeTab === 'jss'
                    ? 'border-brand-dark text-brand-dark scale-102'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Junior Secondary (JSS 1-3)
              </button>
              <button
                onClick={() => setActiveTab('sss')}
                className={`py-3 px-6 text-sm sm:text-base font-bold transition-all border-b-4 ${
                  activeTab === 'sss'
                    ? 'border-brand-dark text-brand-dark scale-102'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Senior Secondary (SSS 1-3)
              </button>
            </div>
          </div>

          {/* Tab Contents */}
          <div className="pt-4">
            {activeTab === 'jss' ? (
              <div className="space-y-8 animate-fade-in-up">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-4xl mx-auto space-y-3">
                  <h4 className="font-extrabold text-slate-850 font-heading text-base sm:text-lg">Junior High Structure</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    The junior high levels focus on laying deep academic foundations across diverse subjects. At the completion of JSS 3, students sit for the Basic Education Certificate Examination (BECE) to qualify for senior secondary selection.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {jssSubjects.map((sub, idx) => (
                    <div key={idx} className="p-4 bg-white hover:bg-brand-mint/30 rounded-xl border border-slate-150 flex items-center gap-3 transition-colors shadow-inner">
                      <CheckCircle2 className="w-5 h-5 text-brand-light flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-750">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-12 animate-fade-in-up">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-4xl mx-auto space-y-3">
                  <h4 className="font-extrabold text-slate-850 font-heading text-base sm:text-lg">Senior High Tracks</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    At the senior high levels (SSS 1-3), students specialize into designated career paths. Each student takes 4 Core subjects alongside 5 or 6 specialized pathway electives, preparing for WAEC and NECO licensing.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Core Subjects Card */}
                  <div className="bg-white p-6 rounded-2xl border-2 border-brand-dark/25 shadow-sm space-y-4">
                    <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider font-heading">Core Subjects (Mandatory)</h4>
                    <div className="w-8 h-0.5 bg-brand-light rounded"></div>
                    <ul className="space-y-3">
                      {sssSubjects.core.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-650 leading-normal font-semibold">
                          <ChevronRight className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pathway 1: Science */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider font-heading">Science Pathway</h4>
                    <div className="w-8 h-0.5 bg-slate-300 rounded"></div>
                    <ul className="space-y-3">
                      {sssSubjects.science.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-550 leading-normal font-medium">
                          <ChevronRight className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pathway 2: Arts & Humanities */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider font-heading">Arts & Humanities</h4>
                    <div className="w-8 h-0.5 bg-slate-300 rounded"></div>
                    <ul className="space-y-3">
                      {sssSubjects.arts.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-550 leading-normal font-medium">
                          <ChevronRight className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pathway 3: Business/Commercial */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider font-heading">Commercial Pathway</h4>
                    <div className="w-8 h-0.5 bg-slate-300 rounded"></div>
                    <ul className="space-y-3">
                      {sssSubjects.commercial.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-550 leading-normal font-medium">
                          <ChevronRight className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. TERM STRUCTURES */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-light font-bold text-xs uppercase tracking-widest">Academic Timeline</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 font-heading">
              Our Academic Year Calendar
            </h2>
            <div className="w-12 h-1 bg-brand-light mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {terms.map((term, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-mint text-brand-dark flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h4 className="font-extrabold text-slate-800 text-base sm:text-lg font-heading">{term.name}</h4>
                <span className="inline-block px-3 py-1 bg-brand-mint/55 text-brand-dark font-extrabold text-xs rounded-full">
                  {term.duration}
                </span>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 font-medium">
                  {term.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CO-CURRICULAR & ENRICHMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="space-y-6">
            <span className="text-brand-light font-bold text-xs uppercase tracking-widest">Holistic Development</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 font-heading">
              Beyond the Classroom
            </h2>
            <div className="w-12 h-1 bg-brand-light rounded-full"></div>
            
            <p className="text-slate-550 text-xs sm:text-sm leading-relaxed font-medium">
              We believe a child's complete profile is enriched by peer engagement and collaborative clubs. At Mount La Salle College Naka, students actively participate in numerous co-curricular clubs and societies designed to nurture specialized talents and hobbies:
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Junior Engineers & Technologists (JETS)",
                "Drama & Literary Debating Club",
                "Lasallian Youth Association",
                "School Music & Orchestral Band",
                "Press & Editorial Society",
                "Young Farmers Cooperative"
              ].map((club, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-650">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-light flex-shrink-0" />
                  <span>{club}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md bg-slate-150 border border-slate-200">
            <img 
              src="/assets/images/image9.jpeg" 
              alt="Students in Workshop" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
