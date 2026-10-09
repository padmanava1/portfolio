import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileDown, Menu, X, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#080B11]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/30' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <a href="#about" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flutter-600 via-flutter-500 to-indigo-600 p-[1px] shadow-lg shadow-flutter-600/20">
                <div className="w-full h-full bg-[#0E131F] rounded-[11px] flex items-center justify-center font-mono font-bold text-flutter-300 group-hover:text-white transition-colors">
                  &lt;PK/&gt;
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-slate-100 tracking-tight text-lg group-hover:text-flutter-300 transition-colors">
                  Padmanava
                </span>
                <span className="text-xs text-slate-400 block -mt-1 font-mono">
                  flutter.engineer
                </span>
              </div>
            </a>

            {/* Recruiter Availability Chip */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to Opportunities</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-flutter-300 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-flutter-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-flutter-300 hover:bg-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Padmanava_Karmakar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-flutter-600 hover:bg-flutter-500 text-white font-medium text-sm transition-all shadow-md shadow-flutter-600/25 hover:shadow-lg hover:shadow-flutter-600/40 transform hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C111D] border-b border-slate-800 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 text-xs font-medium">Open to Full-Time Roles</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-flutter-300 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-flutter-300">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download="Padmanava_Karmakar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-flutter-600 text-white text-xs font-semibold"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
