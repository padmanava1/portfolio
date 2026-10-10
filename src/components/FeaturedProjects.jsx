import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Users, 
  ChevronRight,
  X,
  Cpu,
  Radio
} from 'lucide-react';

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Mobile', 'Mobile & APIs', 'Python & AI', 'Mobile & Audio'];

  const filteredProjects = filter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(p => {
        if (filter === 'Python & AI') return p.category.includes('Python') || p.category.includes('AI') || p.category.includes('ML');
        return p.category.includes(filter);
      });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flutter-500/10 border border-flutter-500/20 text-flutter-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-flutter">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-base sm:text-lg">
              Battle-tested applications shipped across social impact, healthcare, logistics, and trading intelligence.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-flutter-600 text-white shadow-md shadow-flutter-600/30'
                    : 'bg-[#0E131F] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glow-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/80 bg-[#0E131F]/90"
            >
              <div>
                {/* Project Header Bar */}
                <div className="p-6 border-b border-slate-800/80 bg-slate-900/30">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-flutter-500/15 text-flutter-300 border border-flutter-500/25 text-[11px] font-semibold tracking-wide uppercase">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-flutter-400"></span>
                      #{project.featuredRank}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-flutter-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {project.tagline}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/60 font-mono">
                    <span className="text-flutter-400 font-semibold">{project.role}</span>
                    <span className="text-slate-400">{project.teamSize}</span>
                  </div>
                </div>

                {/* Summary & Architecture Focus */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Architecture Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="flex items-center gap-1.5 text-flutter-300 font-semibold mb-1">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Architecture Highlight</span>
                    </div>
                    <p className="text-slate-300 leading-normal">
                      {project.architectureHighlight}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {project.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack & Deep Dive CTA */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-auto bg-slate-900/10">
                <div className="flex flex-wrap gap-1.5 py-4">
                  {project.techStack.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-400 text-[11px] font-mono">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                      title="Open live product"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Live App</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2.5 px-3.5 rounded-xl bg-slate-800/80 hover:bg-flutter-600 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>View Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#0E131F] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-900/50">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-flutter-500/15 text-flutter-300 border border-flutter-500/30 text-xs font-semibold uppercase">
                    {activeModalProject.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {activeModalProject.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-bold text-flutter-300 uppercase tracking-wider mb-2">Project Overview</h4>
                  <p className="text-slate-300 leading-relaxed">{activeModalProject.summary}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <h4 className="text-xs font-bold text-flutter-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Engineering Architecture
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {activeModalProject.architectureHighlight}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">All Technical Highlights</h4>
                  <ul className="space-y-2.5">
                    {activeModalProject.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Complete Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-slate-800 text-flutter-200 text-xs font-mono border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between">
                {activeModalProject.liveUrl ? (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-emerald-950 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Product ({activeModalProject.liveUrl.replace('https://', '').replace('/', '')})</span>
                  </a>
                ) : <div />}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
