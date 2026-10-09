import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileDown, 
  Check, 
  Copy, 
  ArrowUp,
  Sparkles,
  Heart
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 relative bg-[#06080E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recruiter CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0E131F] to-[#0A0D15] border border-slate-800 relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-flutter-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Ready for Immediate Conversations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Looking for a high-impact <span className="gradient-flutter">Flutter Software Engineer</span>?
            </h2>

            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need to ship a new cross-platform mobile app, refactor legacy architectures to Clean Architecture, or accelerate engineering sprint cycles with AI-augmented workflows, let's talk.
            </p>

            {/* Direct Contact Links Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-flutter-500/10 text-flutter-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs font-medium text-slate-200 hover:text-flutter-300 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyText(personalInfo.email, 'email')}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Direct Phone / WhatsApp</span>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyText(personalInfo.phone, 'phone')}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 sm:col-span-2 lg:col-span-1">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">Location</span>
                  <span className="text-xs font-medium text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                download="Padmanava_Karmakar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-flutter-600 hover:bg-flutter-500 text-white text-sm font-semibold transition-all shadow-lg shadow-flutter-600/30"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-flutter-400" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold border border-slate-700 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/60 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Padmanava Karmakar.</span>
            <span>•</span>
            <span>Crafted with Flutter-blue Precision & Modern Web Speed.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-flutter-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
