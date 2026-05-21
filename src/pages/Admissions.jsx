import { useState } from 'react';
import { 
  User, Mail, Phone, Home, BookOpen, Layers, CheckCircle2, 
  ArrowRight, ArrowLeft, Upload, FileText, Printer, Check 
} from 'lucide-react';

export default function Admissions() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Student
    studentFirstName: '',
    studentLastName: '',
    studentDob: '',
    studentGender: '',
    entryGrade: '',
    prevSchool: '',
    prevGrade: '',
    // Step 2: Guardian
    guardianName: '',
    guardianEmail: '',
    guardianPhone: '',
    guardianAddress: '',
    guardianRelation: '',
    // Step 3: Terms
    declarationAgreed: false
  });

  const [errors, setErrors] = useState({});
  const [appId, setAppId] = useState('');

  const grades = [
    { value: 'jss1', label: 'Junior Secondary School 1 (JSS 1)' },
    { value: 'jss2', label: 'Junior Secondary School 2 (JSS 2)' },
    { value: 'jss3', label: 'Junior Secondary School 3 (JSS 3)' },
    { value: 'sss1', label: 'Senior Secondary School 1 (SSS 1)' },
    { value: 'sss2', label: 'Senior Secondary School 2 (SSS 2)' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateStep = (currentStep) => {
    let tempErrors = {};
    if (currentStep === 1) {
      if (!formData.studentFirstName) tempErrors.studentFirstName = 'First name is required.';
      if (!formData.studentLastName) tempErrors.studentLastName = 'Last name is required.';
      if (!formData.studentDob) tempErrors.studentDob = 'Date of birth is required.';
      if (!formData.studentGender) tempErrors.studentGender = 'Gender selection is required.';
      if (!formData.entryGrade) tempErrors.entryGrade = 'Entry grade is required.';
    } else if (currentStep === 2) {
      if (!formData.guardianName) tempErrors.guardianName = 'Guardian name is required.';
      if (!formData.guardianEmail) {
        tempErrors.guardianEmail = 'Guardian email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.guardianEmail)) {
        tempErrors.guardianEmail = 'Email address is invalid.';
      }
      if (!formData.guardianPhone) tempErrors.guardianPhone = 'Phone number is required.';
      if (!formData.guardianAddress) tempErrors.guardianAddress = 'Residential address is required.';
      if (!formData.guardianRelation) tempErrors.guardianRelation = 'Relationship status is required.';
    } else if (currentStep === 3) {
      if (!formData.declarationAgreed) tempErrors.declarationAgreed = 'You must agree to the academic declaration terms.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Simulate API submission
      const generatedId = `MLSCN-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppId(generatedId);
      setStep(4); // Success screen
    }
  };

  const resetForm = () => {
    setFormData({
      studentFirstName: '',
      studentLastName: '',
      studentDob: '',
      studentGender: '',
      entryGrade: '',
      prevSchool: '',
      prevGrade: '',
      guardianName: '',
      guardianEmail: '',
      guardianPhone: '',
      guardianAddress: '',
      guardianRelation: '',
      declarationAgreed: false
    });
    setErrors({});
    setStep(1);
    setAppId('');
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
              Admissions
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Admissions & Enrollment
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Begin your Lasallian journey. Explore entry guidelines, check basic requirements, and complete our interactive application form.
            </p>
          </div>
        </div>

        {/* 1. ADMISSION PROCESS & FEE GUIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Guidelines (Left Column) */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 font-heading">General Entry Guidelines</h3>
              <div className="w-12 h-1 bg-brand-light rounded-full"></div>
            </div>
            
            <ul className="space-y-4 text-xs sm:text-sm text-slate-650 leading-relaxed">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-mint text-brand-dark flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-slate-800">Age Requirement</h4>
                  <p className="text-slate-500 text-xs">Prospective JSS 1 candidates must be at least 10 years of age by September of the entry year.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-mint text-brand-dark flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-slate-800">Entrance Screening</h4>
                  <p className="text-slate-500 text-xs">All applicants sit for our comprehensive Entrance Examination covering Mathematics, English, and General Aptitude.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-mint text-brand-dark flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-slate-800">Required Documents</h4>
                  <p className="text-slate-500 text-xs">Submit certified transcripts from the previous primary or secondary school, a birth certificate, and a passport photo.</p>
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h4 className="font-bold text-slate-800 text-sm">Need help with admissions?</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Contact our administration desk directly at <strong>admissions@mlscnaka.edu.ng</strong> or call <strong>+234 123 456 7890</strong> for immediate assistance.
              </p>
            </div>
          </div>

          {/* Form Widget - Matches "Admissions Portal Multi-step Form" (Right Column) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col min-h-[500px]">
            
            {/* Step Indicators Header */}
            <div className="bg-slate-50 border-b border-slate-150 px-8 py-5 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm sm:text-base font-heading">
                {step === 4 ? 'Application Successful' : `Step ${step} of 3: ${step === 1 ? 'Student Details' : step === 2 ? 'Guardian Info' : 'Final Review'}`}
              </h3>
              {step < 4 && (
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        s === step ? 'w-8 bg-brand-dark' : s < step ? 'w-2 bg-brand-light' : 'w-2 bg-slate-200'
                      }`}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/* Form Main Body */}
            <form onSubmit={handleSubmit} className="p-8 flex-1 flex flex-col justify-between space-y-8">
              
              {/* STEP 1: STUDENT INFORMATION */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in-up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Student First Name *</label>
                      <input
                        type="text"
                        name="studentFirstName"
                        value={formData.studentFirstName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.studentFirstName ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                        placeholder="John"
                      />
                      {errors.studentFirstName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.studentFirstName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Student Last Name *</label>
                      <input
                        type="text"
                        name="studentLastName"
                        value={formData.studentLastName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.studentLastName ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                        placeholder="Doe"
                      />
                      {errors.studentLastName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.studentLastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        name="studentDob"
                        value={formData.studentDob}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.studentDob ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all text-slate-600`}
                      />
                      {errors.studentDob && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.studentDob}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Gender *</label>
                      <select
                        name="studentGender"
                        value={formData.studentGender}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.studentGender ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all text-slate-650`}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors.studentGender && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.studentGender}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Class Applying For *</label>
                    <select
                      name="entryGrade"
                      value={formData.entryGrade}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border ${errors.entryGrade ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all text-slate-650`}
                    >
                      <option value="">Select Target Class</option>
                      {grades.map((g) => (
                        <option key={g.value} value={g.value}>{g.label}</option>
                      ))}
                    </select>
                    {errors.entryGrade && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.entryGrade}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last School Attended (Optional)</label>
                      <input
                        type="text"
                        name="prevSchool"
                        value={formData.prevSchool}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all"
                        placeholder="Naka Model Primary School"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Class Completed (Optional)</label>
                      <input
                        type="text"
                        name="prevGrade"
                        value={formData.prevGrade}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all"
                        placeholder="Primary 6"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: GUARDIAN INFORMATION */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in-up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Parent/Guardian Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="guardianName"
                          value={formData.guardianName}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-50 border ${errors.guardianName ? 'border-red-400' : 'border-slate-200'} rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                          placeholder="Elizabeth Doe"
                        />
                      </div>
                      {errors.guardianName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.guardianName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Relationship to Student *</label>
                      <select
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.guardianRelation ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all text-slate-650`}
                      >
                        <option value="">Select Relation</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Uncle">Uncle</option>
                        <option value="Aunt">Aunt</option>
                        <option value="Guardian">Legal Guardian</option>
                      </select>
                      {errors.guardianRelation && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.guardianRelation}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="guardianEmail"
                          value={formData.guardianEmail}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-50 border ${errors.guardianEmail ? 'border-red-400' : 'border-slate-200'} rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                          placeholder="guardian@mail.com"
                        />
                      </div>
                      {errors.guardianEmail && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.guardianEmail}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="guardianPhone"
                          value={formData.guardianPhone}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-50 border ${errors.guardianPhone ? 'border-red-400' : 'border-slate-200'} rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                          placeholder="+234 801 234 5678"
                        />
                      </div>
                      {errors.guardianPhone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.guardianPhone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Residential Address *</label>
                    <div className="relative">
                      <Home className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="guardianAddress"
                        value={formData.guardianAddress}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.guardianAddress ? 'border-red-400' : 'border-slate-200'} rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-dark focus:bg-white transition-all`}
                        placeholder="12 Lasallian Way, Naka, Benue State"
                      />
                    </div>
                    {errors.guardianAddress && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.guardianAddress}</p>}
                  </div>
                </div>
              )}

              {/* STEP 3: REVIEW & UPLOAD DECLARATION */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4">
                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Review Information</h4>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold block">Student Name</span>
                        <span className="text-slate-750 font-bold">{formData.studentFirstName} {formData.studentLastName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold block">Class Applying</span>
                        <span className="text-slate-750 font-bold">{grades.find((g) => g.value === formData.entryGrade)?.label || formData.entryGrade}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold block">Parent/Guardian</span>
                        <span className="text-slate-750 font-bold">{formData.guardianName} ({formData.guardianRelation})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold block">Contact Phone</span>
                        <span className="text-slate-750 font-bold">{formData.guardianPhone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Upload widget */}
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-2 hover:border-brand-light transition-colors">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                    <h5 className="font-bold text-slate-800 text-xs">Upload Student Certificate / Photo</h5>
                    <p className="text-[10px] text-slate-400">PDF, PNG or JPG format (Max 4MB total size). Simulating active drop files.</p>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold text-[10px] rounded border border-slate-200">
                        Select Document
                      </span>
                    </div>
                  </div>

                  {/* Agreement checkbox */}
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="declarationAgreed"
                        checked={formData.declarationAgreed}
                        onChange={handleInputChange}
                        className="mt-0.5 rounded text-brand-dark focus:ring-brand-dark border-slate-300 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-xs text-slate-550 leading-relaxed font-semibold">
                        I hereby declare that all information submitted in this registration is true and correct, and I agree to abide by the academic guidelines of Mount La Salle College Naka.
                      </span>
                    </label>
                    {errors.declarationAgreed && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.declarationAgreed}</p>}
                  </div>
                </div>
              )}

              {/* STEP 4: SUCCESS CONGRATULATIONS */}
              {step === 4 && (
                <div className="text-center space-y-6 py-8 animate-fade-in-up flex-1 flex flex-col justify-center items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-md shadow-emerald-100">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-brand-dark font-heading">Congratulations!</h4>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Your admissions application has been submitted successfully. A confirmation message and brochure has been sent to your parent email.
                    </p>
                  </div>

                  <div className="bg-brand-mint/55 border border-brand-light/20 p-4 rounded-2xl max-w-sm w-full space-y-1.5 select-all">
                    <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase block">Your Application Ref Number</span>
                    <span className="text-lg font-black text-brand-dark tracking-wider block">{appId}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-4 py-2 border border-slate-200 text-slate-655 hover:bg-slate-100 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Summary</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 bg-brand-dark hover:bg-brand-medium text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
                    >
                      Apply for Another Student
                    </button>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              {step < 4 && (
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 bg-brand-dark hover:bg-brand-medium text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md shadow-brand-dark/10"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-brand-accent hover:bg-green-500 text-brand-dark rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md shadow-brand-accent/15"
                    >
                      <span>Submit Application</span>
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}
