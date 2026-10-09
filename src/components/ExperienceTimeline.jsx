import React from 'react';
import { experience, education } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-[#090D16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work History */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-flutter-500/10 border border-flutter-500/20 text-flutter-300 text-xs font-semibold mb-3 w-fit">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">
              Professional <span className="gradient-flutter">Experience</span>
            </h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-10 group">
                  {/* Timeline Node */}
                  <div className="absolute left-2.5 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-[#0E131F] border-2 border-flutter-500 group-hover:bg-flutter-400 group-hover:scale-125 transition-all shadow-md shadow-flutter-500/20" />

                  <div className="p-6 rounded-2xl bg-[#0E131F] border border-slate-800/80 group-hover:border-flutter-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-lg font-bold text-white group-hover:text-flutter-300 transition-colors">
                        {job.role}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar className="w-3 h-3 text-flutter-400" />
                        {job.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                      <span className="font-semibold text-flutter-400">{job.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="text-slate-400">{job.type}</span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="space-y-2 border-t border-slate-800/70 pt-3">
                      {job.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-flutter-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Background */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education Box */}
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-flutter-500/10 border border-flutter-500/20 text-flutter-300 text-xs font-semibold mb-3 w-fit">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#0E131F] border border-slate-800/80">
                    <span className="text-xs font-mono text-flutter-400 block mb-1">
                      {edu.year}
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {edu.institution}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-flutter-500/10 text-flutter-300 text-xs font-semibold border border-flutter-500/20">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Soft Skills Card */}
            <div className="p-6 rounded-2xl bg-[#0E131F] border border-slate-800/80">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Languages Spoken
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['English (Professional)', 'Hindi (Native)', 'Bengali (Native)', 'Gujarati (Conversational)'].map((lang) => (
                  <div key={lang} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                    {lang}
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-6 mb-3">
                Core Strengths
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {['Clean Architecture', 'Rapid Prototyping', 'Cross-Team Collaboration', 'E2EE Cryptography', 'Agile Delivery', 'Problem Solving'].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
