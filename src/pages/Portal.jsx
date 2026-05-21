import { useState } from 'react';
import { 
  User, Lock, LogOut, CheckCircle2, AlertTriangle, HelpCircle, 
  CreditCard, Calendar, BarChart3, GraduationCap, Clock, 
  ChevronRight, BookOpen, UserCheck, DollarSign 
} from 'lucide-react';

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Dashboard Tabs
  const [activeTab, setActiveTab] = useState('overview');
  
  // Fee Payment Loader simulation
  const [paying, setPaying] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);

  const mockStudent = {
    firstName: "Leonard",
    lastName: "Agada",
    admissionNo: "MLSCN/2023/8975",
    grade: "SSS 3 (Science A)",
    advisor: "Rev. Brother Emmanuel, FSC",
    attendance: "96.4%",
    gpa: "3.88 / 4.0",
    termAverage: "84.5%",
    feesStatus: "85% Paid"
  };

  const timetable = [
    { time: "08:15 AM - 09:00 AM", mon: "Mathematics", tue: "Physics", wed: "Chemistry", thu: "English Lang", fri: "Further Math" },
    { time: "09:00 AM - 09:45 AM", mon: "Physics", tue: "Chemistry", wed: "Biology", thu: "Civic Ed", fri: "Mathematics" },
    { time: "09:45 AM - 10:30 AM", mon: "English Lang", tue: "Further Math", wed: "Mathematics", thu: "Technical Drw", fri: "Biology" },
    { time: "10:30 AM - 11:00 AM", break: true, label: "MORNING BREAK INTERVAL" },
    { time: "11:00 AM - 11:45 AM", mon: "Chemistry", tue: "Biology", wed: "Civic Ed", thu: "Mathematics", fri: "Physics" },
    { time: "11:45 AM - 12:30 PM", mon: "Biology", tue: "Technical Drw", wed: "Further Math", thu: "Physics", fri: "English Lang" }
  ];

  const grades = [
    { subject: "Mathematics", ca: 28, exam: 62, total: 90, grade: "A1", remarks: "Outstanding mathematical logical execution." },
    { subject: "English Language", ca: 24, exam: 58, total: 82, grade: "A1", remarks: "Exceptional language composition and analysis." },
    { subject: "Physics", ca: 26, exam: 55, total: 81, grade: "A1", remarks: "Solid understanding of kinematics and forces." },
    { subject: "Chemistry", ca: 23, exam: 51, total: 74, grade: "B2", remarks: "Very good experimental analysis skills." },
    { subject: "Biology", ca: 25, exam: 54, total: 79, grade: "B2", remarks: "Strong command of cellular theory and botany." },
    { subject: "Further Mathematics", ca: 27, exam: 48, total: 75, grade: "B2", remarks: "Strong problem solving in calculus." }
  ];

  const bills = [
    { desc: "School Tuition & Academic Levy", amount: 120000, paid: 120000, status: "Fully Settled" },
    { desc: "Science & Technical Laboratory Fee", amount: 25000, paid: 25000, status: "Fully Settled" },
    { desc: "ICT & Digital Library Access", amount: 15000, paid: 15000, status: "Fully Settled" },
    { desc: "Sports Facility & Wear Levy", amount: 10000, paid: 0, status: "Pending Payment" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please provide all details.');
      return;
    }
    // Simple mock credentials check
    if (username.toLowerCase() === 'student' && password === 'lasalle') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid admission ID or password. Use credentials below.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setActiveTab('overview');
  };

  const handlePayBalance = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setPaySuccess(true);
      setTimeout(() => setPaySuccess(false), 4000);
    }, 2500);
  };

  return (
    <div className="flex-1 bg-slate-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LOGIN SCREEN SECTION */}
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto space-y-6 pt-8 animate-fade-in-up">
            
            {/* Logo and Headings */}
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-brand-dark text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-brand-dark tracking-tight font-heading">
                MLSCN Student Portal
              </h2>
              <p className="text-xs text-slate-505 font-medium leading-relaxed max-w-xs mx-auto">
                Sign in to view your academic scorecard, attendance records, and pay balances.
              </p>
            </div>

            {/* Login Card widget */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-2">Admission ID / Username *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="e.g. student"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all text-slate-700 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-750 uppercase mb-2">Secret Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="e.g. lasalle"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all text-slate-700 font-semibold"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-bold bg-red-50 border border-red-100 p-3 rounded-xl">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-dark hover:bg-brand-medium text-white font-bold rounded-xl shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Access Dashboard</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Mock Credentials Help Tip Bubble */}
            <div className="bg-brand-mint/55 border border-brand-light/20 p-4 rounded-2xl flex gap-3 text-xs">
              <HelpCircle className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="font-bold text-brand-dark">Demo Portal Credentials</h5>
                <p className="text-[11px] text-slate-550 leading-relaxed font-semibold">
                  For immediate grading evaluation, type:<br />
                  Admission ID: <strong className="text-brand-dark select-all">student</strong><br />
                  Password: <strong className="text-brand-dark select-all">lasalle</strong>
                </p>
              </div>
            </div>

          </div>
        ) : (
          
          /* LOGGED-IN PORTAL DASHBOARD SECTION */
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Dashboard Ribbon header */}
            <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/95 to-brand-light/80 opacity-90"></div>
              
              <div className="relative z-10 flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-md">
                  <User className="w-7 h-7 text-brand-accent" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest block">Student Account Panel</span>
                  <h2 className="text-xl sm:text-2xl font-black font-heading tracking-tight">
                    Welcome back, {mockStudent.firstName}!
                  </h2>
                  <p className="text-xs text-slate-300 font-medium">
                    Admission Number: {mockStudent.admissionNo} &bull; {mockStudent.grade}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="relative z-10 px-4 py-2 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout Portal</span>
              </button>
            </div>

            {/* Secondary layout structure: Sidebar Profile details + Tabbed Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Profile Card Left Panel (Grid 4) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  
                  {/* Avatar and Info */}
                  <div className="text-center space-y-3 pb-6 border-b border-slate-100">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 mx-auto shadow-md border-2 border-brand-mint">
                      <img 
                        src="/assets/images/image10.jpeg" 
                        alt="Profile avatar" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-base font-heading">
                        {mockStudent.firstName} {mockStudent.lastName}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 bg-brand-mint text-brand-dark text-[10px] font-bold rounded-full uppercase tracking-wider mt-1">
                        {mockStudent.grade}
                      </span>
                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="space-y-4 text-xs font-medium">
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Principal Advisor</span>
                      <span className="text-slate-800 font-bold">{mockStudent.advisor}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Term Attendance</span>
                      <span className="text-emerald-600 font-black">{mockStudent.attendance}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Academic GPA</span>
                      <span className="text-brand-light font-black">{mockStudent.gpa}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Tuition Status</span>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">{mockStudent.feesStatus}</span>
                    </div>
                  </div>

                </div>

                {/* Left side Quick Tabs navigation */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 space-y-1.5">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-left flex items-center gap-3 transition-all ${
                      activeTab === 'overview'
                        ? 'bg-brand-mint text-brand-dark shadow-inner'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Academic Overview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('grades')}
                    className={`w-full px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-left flex items-center gap-3 transition-all ${
                      activeTab === 'grades'
                        ? 'bg-brand-mint text-brand-dark shadow-inner'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Term Report Card</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('fees')}
                    className={`w-full px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-left flex items-center gap-3 transition-all ${
                      activeTab === 'fees'
                        ? 'bg-brand-mint text-brand-dark shadow-inner'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Billing & Fees Ledger</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Pages Contents Right Panel (Grid 8) */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px] flex flex-col">
                
                {/* TAB 1: ACADEMIC OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-fade-in-up flex-1 flex flex-col justify-between">
                    
                    {/* Attendance chart mock */}
                    <div className="space-y-4">
                      <h3 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading">Monthly Attendance Ledger</h3>
                      <div className="grid grid-cols-5 gap-3 pt-2 text-center h-48 items-end relative select-none">
                        {/* Attendance bars (Dynamic CSS-styled) */}
                        <div className="space-y-2 flex flex-col items-center">
                          <div className="w-full bg-emerald-500 rounded-t-lg transition-all duration-500" style={{ height: '98px' }}></div>
                          <span className="text-[10px] text-slate-400 font-bold">Jan</span>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                          <div className="w-full bg-emerald-500 rounded-t-lg transition-all duration-500" style={{ height: '110px' }}></div>
                          <span className="text-[10px] text-slate-400 font-bold">Feb</span>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                          <div className="w-full bg-emerald-500 rounded-t-lg transition-all duration-500" style={{ height: '88px' }}></div>
                          <span className="text-[10px] text-slate-400 font-bold">Mar</span>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                          <div className="w-full bg-emerald-500 rounded-t-lg transition-all duration-500" style={{ height: '124px' }}></div>
                          <span className="text-[10px] text-slate-400 font-bold">Apr</span>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                          <div className="w-full bg-brand-light rounded-t-lg transition-all duration-500" style={{ height: '135px' }}></div>
                          <span className="text-[10px] text-brand-dark font-black">May</span>
                        </div>
                      </div>
                    </div>

                    {/* Class Timetable Grid */}
                    <div className="space-y-4 pt-6 border-t border-slate-100">
                      <h3 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-light" /> Class Schedule (Timetable)
                      </h3>
                      <div className="overflow-x-auto rounded-xl border border-slate-150 shadow-inner">
                        <table className="w-full text-left text-[11px] border-collapse">
                          <thead>
                            <tr className="bg-slate-50 text-slate-405 font-black uppercase border-b border-slate-150">
                              <th className="p-3">Time Interval</th>
                              <th className="p-3">Mon</th>
                              <th className="p-3">Tue</th>
                              <th className="p-3">Wed</th>
                              <th className="p-3">Thu</th>
                              <th className="p-3">Fri</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-650">
                            {timetable.map((row, idx) => (
                              <tr key={idx} className={row.break ? 'bg-amber-50/50 text-amber-700 italic font-bold' : ''}>
                                <td className="p-3 font-semibold text-slate-500 whitespace-nowrap">{row.time}</td>
                                {row.break ? (
                                  <td colSpan="5" className="p-3 text-center tracking-widest text-[10px]">{row.label}</td>
                                ) : (
                                  <>
                                    <td className="p-3">{row.mon}</td>
                                    <td className="p-3">{row.tue}</td>
                                    <td className="p-3">{row.wed}</td>
                                    <td className="p-3">{row.thu}</td>
                                    <td className="p-3">{row.fri}</td>
                                  </>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                )}

                {/* TAB 2: EXAM REPORT CARD */}
                {activeTab === 'grades' && (
                  <div className="space-y-6 animate-fade-in-up flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                        <div>
                          <h3 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading">Mid-Term Assessment Grades</h3>
                          <p className="text-[10px] text-slate-400 font-semibold">Term Average: 84.5% &bull; Academic Class Stand: 4th of 35</p>
                        </div>
                        <span className="px-3 py-1 bg-brand-mint text-brand-dark font-extrabold text-[10px] rounded-full uppercase self-start sm:self-auto">
                          Verified Official
                        </span>
                      </div>

                      {/* Grades Table */}
                      <div className="overflow-x-auto rounded-xl border border-slate-150">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 text-slate-400 font-bold uppercase border-b border-slate-150 text-[10px]">
                              <th className="p-3.5">Subject</th>
                              <th className="p-3.5 text-center">CA (30)</th>
                              <th className="p-3.5 text-center">Exam (70)</th>
                              <th className="p-3.5 text-center">Total (100)</th>
                              <th className="p-3.5 text-center">Grade</th>
                              <th className="p-3.5">Advisor Remarks</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-650">
                            {grades.map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-3.5 font-bold text-slate-800 whitespace-nowrap">{row.subject}</td>
                                <td className="p-3.5 text-center">{row.ca}</td>
                                <td className="p-3.5 text-center">{row.exam}</td>
                                <td className="p-3.5 text-center font-bold text-slate-700">{row.total}</td>
                                <td className={`p-3.5 text-center font-black ${row.grade === 'A1' ? 'text-brand-dark' : 'text-slate-800'}`}>
                                  {row.grade}
                                </td>
                                <td className="p-3.5 text-slate-500 italic max-w-xs text-[11px] leading-snug">{row.remarks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] text-slate-500 leading-relaxed font-semibold">
                      Please note: The scores presented are finalized mid-term summaries. For full-term inquiries or examination scripts review, contact the academic registration office directly.
                    </div>

                  </div>
                )}

                {/* TAB 3: FEES & BILLS LEDGER */}
                {activeTab === 'fees' && (
                  <div className="space-y-8 animate-fade-in-up flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                        <div>
                          <h3 className="font-extrabold text-slate-800 text-sm sm:text-base font-heading">Outstanding Ledger Balance</h3>
                          <p className="text-[10px] text-slate-400 font-semibold">Financial Session: 2025/2026 Academic Term</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-400 font-bold block">Remaining Due</span>
                          <span className="text-lg font-black text-amber-600">&#8358;10,000</span>
                        </div>
                      </div>

                      {/* Ledger bills table */}
                      <div className="overflow-x-auto rounded-xl border border-slate-150">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 text-slate-400 font-bold uppercase border-b border-slate-150 text-[10px]">
                              <th className="p-3.5">Fee Description</th>
                              <th className="p-3.5 text-right">Levy Amount</th>
                              <th className="p-3.5 text-right">Amount Paid</th>
                              <th className="p-3.5 text-center">Ledger Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-650">
                            {bills.map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50">
                                <td className="p-3.5 font-semibold text-slate-800">{row.desc}</td>
                                <td className="p-3.5 text-right">&#8358;{row.amount.toLocaleString()}</td>
                                <td className="p-3.5 text-right font-semibold text-slate-700">&#8358;{row.paid.toLocaleString()}</td>
                                <td className="p-3.5 text-center">
                                  <span className={`inline-block px-2 py-0.5 text-[9px] font-bold rounded-full uppercase ${
                                    row.status === 'Fully Settled' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                                  }`}>
                                    {row.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Make payment interactive button */}
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">Pending Outstandings</span>
                        <h4 className="font-bold text-slate-800 text-sm">Sports Facility & Wear Levy (&#8358;10,000)</h4>
                      </div>
                      
                      <div className="relative">
                        {paySuccess ? (
                          <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl animate-fade-in-up">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Payment Successful</span>
                          </div>
                        ) : (
                          <button
                            onClick={handlePayBalance}
                            disabled={paying}
                            className="px-6 py-2.5 bg-brand-dark hover:bg-brand-medium text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                          >
                            {paying ? (
                              <>
                                <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                                <span>Securing Gateway...</span>
                              </>
                            ) : (
                              <>
                                <CreditCard className="w-4 h-4" />
                                <span>Pay Balance Online</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
