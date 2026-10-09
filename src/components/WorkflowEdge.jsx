import React from 'react';
import { workflowHighlights } from '../data/portfolioData';
import { 
  Zap, 
  Layers, 
  Bug, 
  Workflow, 
  Sparkles, 
  Terminal, 
  CheckCircle,
  Clock,
  Gauge
} from 'lucide-react';

export default function WorkflowEdge() {
  const icons = [Clock, Layers, Bug, Workflow];

  return (
    <section id="workflow" className="py-20 relative bg-[#090D16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flutter-500/10 border border-flutter-500/20 text-flutter-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-flutter-400" />
            <span>The Developer Multiplier</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {workflowHighlights.title}
          </h2>
          
          <p className="mt-3 text-lg font-medium text-flutter-300">
            {workflowHighlights.subtitle}
          </p>
          
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {workflowHighlights.description}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowHighlights.principles.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#0E131F] border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-flutter-500/10 border border-flutter-500/20 flex items-center justify-center text-flutter-400 mb-5 group-hover:scale-110 group-hover:bg-flutter-500/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-flutter-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Tooling Stack Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0E131F] to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Daily AI Acceleration Arsenal</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Power user of modern AI coding assistants for ultra-fast iteration and bug elimination.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {['Cursor IDE', 'Claude Code', 'Google Antigravity', 'Riverpod Generators', 'FastAPI Scrapers'].map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800/90 text-slate-200 text-xs font-mono border border-slate-700/80 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
