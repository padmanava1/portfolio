import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  FileDown, 
  MapPin, 
  Check, 
  Copy, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Sparkles,
  Smartphone,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { FlutterIcon } from './SocialIcons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden radial-glow">
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-flutter-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Location Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-flutter-500/10 text-flutter-300 border border-flutter-500/20">
                <Zap className="w-3.5 h-3.5 text-flutter-400" />
                4.5+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                200+ Screens Delivered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {personalInfo.availability}
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="gradient-flutter">{personalInfo.name}</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight leading-snug">
                {personalInfo.role}
              </p>
              <p className="mt-2 text-base sm:text-lg text-flutter-300/90 font-medium leading-relaxed">
                {personalInfo.headline}
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-flutter-600 hover:bg-flutter-500 text-white font-semibold text-sm transition-all shadow-lg shadow-flutter-600/30 hover:shadow-xl hover:shadow-flutter-600/40 transform hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Padmanava_Karmakar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-flutter-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium border border-slate-800 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Fast Highlights Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-flutter-400" />
                <span>E2EE Encryption & HIPAA Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-flutter-400" />
                <span>Clean Architecture (Riverpod / BLoC)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>50–60 Tickets/Day (Claude Code Automation)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Framed Portrait (No Awkward Floating Badges) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Outer Subtle Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-flutter-600/40 via-cyan-500/30 to-indigo-600/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

              {/* Portrait Device-Style Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-[#0E131F] shadow-2xl p-2.5 bg-gradient-to-b from-slate-800/60 to-[#0E131F]">
                
                {/* Clean Top Header Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-1.5 text-[11px] text-slate-400 font-mono border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-flutter-300 font-semibold">
                    <FlutterIcon className="w-3.5 h-3.5 text-flutter-400" />
                    <span>Flutter 3.x</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span>iOS</span>
                    <span className="text-slate-600">•</span>
                    <span>Android</span>
                  </div>
                </div>

                {/* Portrait Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src={personalInfo.profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/90 via-transparent to-transparent"></div>

                  {/* Clean Bottom Caption Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0E131F]/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-xs font-semibold text-white block">{personalInfo.name}</span>
                      <span className="text-[11px] text-flutter-300 font-mono">AI Flutter Engineer</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      Immediate Joiner
                    </span>
                  </div>
                </div>

                {/* Grounded Status Footer Strip */}
                <div className="mt-2.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-flutter-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-flutter-400"></span>
                    <span>Clean Architecture</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">60 FPS Native</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
