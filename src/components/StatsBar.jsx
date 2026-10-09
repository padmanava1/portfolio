import React from 'react';
import { stats } from '../data/portfolioData';
import { Briefcase, Smartphone, Users, Zap } from 'lucide-react';

export default function StatsBar() {
  const icons = [Briefcase, Smartphone, Users, Zap];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-[#0A0E17]/60 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={item.label}
                className="p-5 rounded-2xl bg-[#0E131F]/70 border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-flutter-500/10 text-flutter-400 group-hover:bg-flutter-500/20 group-hover:text-flutter-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-300">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
