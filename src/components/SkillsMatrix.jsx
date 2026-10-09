import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Smartphone, Server, Shield, Cpu, CheckCircle } from 'lucide-react';

export default function SkillsMatrix() {
  const iconMap = {
    Smartphone: Smartphone,
    Server: Server,
    Shield: Shield,
    Cpu: Cpu,
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flutter-500/10 border border-flutter-500/20 text-flutter-300 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-flutter">Arsenal & Stack</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A comprehensive matrix of core mobile engineering, backend integration, cryptographic security, and modern developer tooling.
          </p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([key, group]) => {
            const Icon = iconMap[group.icon] || Cpu;
            return (
              <div
                key={key}
                className="p-8 rounded-2xl bg-[#0E131F] border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-flutter-500/10 text-flutter-400 group-hover:bg-flutter-500/20 group-hover:text-flutter-300 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {group.skills.length} core competencies
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 text-xs font-medium border border-slate-800 hover:border-flutter-500/50 hover:text-flutter-300 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-flutter-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
