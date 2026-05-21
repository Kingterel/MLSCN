import { X, Download, FileText, Share2, Printer, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterModal({ isOpen, onClose, newsletter }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !newsletter) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-mint text-brand-dark rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base md:text-lg tracking-tight font-heading">{newsletter.title}</h3>
              <p className="text-xs text-slate-500 font-medium">Published: {newsletter.date} &bull; Official MLSCN Release</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Document Reader Mockup */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-100/50 flex justify-center">
          <div className="bg-white w-full max-w-2xl shadow-lg border border-slate-250/65 rounded-xl p-8 md:p-12 relative font-sans text-slate-700 min-h-[600px] flex flex-col justify-between">
            {/* Document Header Mock */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-brand-dark pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-dark text-white rounded-xl flex items-center justify-center font-bold">
                    LS
                  </div>
                  <div>
                    <h2 className="font-extrabold text-brand-dark text-lg leading-tight font-heading">MOUNT LA SALLE</h2>
                    <p className="text-xs font-bold text-brand-light tracking-widest uppercase">College Naka Newsletter</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-brand-mint text-brand-dark font-bold text-xs rounded-full uppercase tracking-wider">
                    {newsletter.tag || 'Official'}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold">Issue No: {newsletter.issueNo || '26-A'}</p>
                </div>
              </div>

              {/* Document Body */}
              <h1 className="text-2xl font-bold text-slate-800 font-heading mb-4 text-center">
                {newsletter.headline || 'Quarterly Academic & Community Updates'}
              </h1>
              
              <div className="space-y-6 text-sm leading-relaxed text-slate-600">
                <p className="italic font-medium text-slate-500 border-l-4 border-brand-light pl-4 mb-6">
                  "Excellence in Learning & Character" — Dear Parents, Guardians, and Friends of MLSCN, welcome to this edition of our newsletter. We share major accomplishments, upcoming academic timelines, and updates from the Naka campus community.
                </p>
                
                <div>
                  <h4 className="font-bold text-slate-800 font-heading mb-2 text-sm uppercase tracking-wider text-brand-dark">1. Academic Progress & Curriculum</h4>
                  <p>
                    Our midterm reviews show exceptional academic performance across all grades. Our implementation of the revised curriculum is yielding high engagement, particularly in the sciences and technology. We thank our faculty for their unwavering commitment.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 font-heading mb-2 text-sm uppercase tracking-wider text-brand-dark">2. Facility Upgrades & Student Life</h4>
                  <p>
                    Work on the new science exhibition hall and IT center is progressing on schedule. These state-of-the-art facilities will empower our students to engage in collaborative, project-based learning. Furthermore, our sports facilities have been upgraded to support physical wellness and teamwork.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 font-heading mb-2 text-sm uppercase tracking-wider text-brand-dark">3. Important Dates & Calendar Reminders</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Midterm Break:</strong> June 5th - June 10th</li>
                    <li><strong>Science & Art Exhibition:</strong> June 18th</li>
                    <li><strong>Founder's Day Celebrations:</strong> June 25th</li>
                    <li><strong>Final Examinations:</strong> July 12th - July 20th</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Document Footer Signatures */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-800">Rev. Brother Principal</p>
                <p className="text-[10px] text-slate-400">Head of Institution, MLSCN</p>
              </div>
              <div className="text-right">
                <div className="font-cursive text-brand-dark opacity-60 text-lg mb-1 select-none">La Salle Naka</div>
                <p className="text-[10px] text-slate-400">Official Campus Seal Verified</p>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-xs font-semibold text-slate-500">File format: PDF Document (1.4 MB) &bull; Printable</span>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-200 border border-slate-200 rounded-xl text-sm font-bold flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share Link</span>
                </>
              )}
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-200 border border-slate-200 rounded-xl text-sm font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Page</span>
            </button>
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent("MLSCN Newsletter Mock PDF Download")}`}
              download={`${newsletter.title.toLowerCase().replace(/ /g, '_')}.pdf`}
              className="px-5 py-2 bg-brand-dark hover:bg-brand-medium text-white rounded-xl text-sm font-bold flex items-center gap-1.5 shadow-md shadow-brand-dark/10 hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
