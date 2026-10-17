import React from 'react';
import { GraduationCap, MapPin, Award, Users, BookOpen } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  return (
    <section
      id="profile"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D8CEBA] bg-[#F2EBDD]"
      aria-label="Profile — Biography & Institutional Coordinates"
    >
      {/* Section Header Line */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-[#5A5954] pb-4 border-b border-[#D8CEBA] mb-14 sm:mb-20">
        <span className="text-[#9E2939] font-bold flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5 text-[#9E2939]" />
          06 // PROFILE & ACADEMIC STANDING
        </span>
        <span>Institutional Background & Leadership</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Biography & Vision */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-display font-black text-4xl sm:text-6xl text-[#242424] tracking-tight uppercase">
            Sanjay Shriram N.
          </h2>

          <p className="font-sans text-base text-[#5A5954] leading-relaxed">
            Second-year undergraduate computer science student based in Chennai, researching artificial intelligence robustness, model guardrails, and explainable adversarial risk.
          </p>

          <p className="font-sans text-sm text-[#5A5954] leading-relaxed">
            Combining rigorous academic foundations with active campus leadership — serving as Head Coordinator of the App Development Club at Panimalar Engineering College and formerly as Secretariat Rapporteur in Model United Nations assemblies.
          </p>

          {/* Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#9E2939] text-xs font-mono-meta font-bold">
                <Users className="w-3.5 h-3.5" />
                <span>APP DEV CLUB</span>
              </div>
              <p className="font-display font-black text-lg text-[#242424] uppercase">
                Head Coordinator
              </p>
              <p className="text-xs font-mono-meta text-[#5A5954]">
                Leading technical workshops, orientation sessions, and collegiate hackathons at PEC.
              </p>
            </div>

            <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#2448C5] text-xs font-mono-meta font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>MODEL UNITED NATIONS</span>
              </div>
              <p className="font-display font-black text-lg text-[#242424] uppercase">
                Secretariat & Rapporteur
              </p>
              <p className="text-xs font-mono-meta text-[#5A5954]">
                Parliamentary debate preparation, committee moderation, and resolution synthesis.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Bold Oxblood Academic Accreditation Block */}
        <div className="lg:col-span-6 space-y-6">
          {/* Education Ledger — Bold Deliberate Oxblood Block */}
          <div className="p-7 bg-[#9E2939] text-[#F2EBDD] border border-[#7A1E2C] space-y-5 shadow-lg">
            <div className="flex items-center justify-between text-xs font-mono-meta pb-3 border-b border-[#F2EBDD]/25">
              <span className="text-[#F2EBDD] font-bold flex items-center gap-2 tracking-wider">
                <BookOpen className="w-4 h-4 text-[#D5A65A]" />
                ACADEMIC ACCREDITATION
              </span>
              <span className="text-[#D5A65A] font-bold">CLASS OF 2028</span>
            </div>

            <div>
              <p className="font-display font-black text-2xl sm:text-3xl text-[#F2EBDD] uppercase">
                Panimalar Engineering College
              </p>
              <p className="font-mono-meta text-xs text-[#F2EBDD]/90 mt-1">
                Bachelor of Engineering in Computer Science & Engineering (2024–2028)
              </p>
            </div>

            <div className="pt-3 border-t border-[#F2EBDD]/25 flex items-center justify-between font-mono-meta text-xs">
              <span className="text-[#F2EBDD]/90">Current Standing: Semester IV</span>
              <span className="text-[#9E2939] font-black text-sm bg-[#FAF6EE] px-3 py-1 shadow-xs">
                8.3 CGPA
              </span>
            </div>
          </div>

          {/* Geographic Coordinates Card */}
          <div className="p-5 bg-[#FAF6EE] border border-[#D8CEBA] font-mono-meta text-xs text-[#5A5954] space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-[#9E2939] font-bold text-[11px]">
              <MapPin className="w-3.5 h-3.5" />
              <span>GEOGRAPHIC & OPERATIONAL BASE</span>
            </div>
            <p className="text-[#242424] font-medium">
              Chennai, Tamil Nadu, India [13.0827° N, 80.2707° E]
            </p>
            <p className="text-[11px] text-[#8A8981]">
              Indian Standard Time (IST, UTC+05:30) · On-Site & Collaborative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
