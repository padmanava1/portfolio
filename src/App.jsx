import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FeaturedProjects from './components/FeaturedProjects';
import WorkflowEdge from './components/WorkflowEdge';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col selection:bg-flutter-500/30 selection:text-flutter-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <FeaturedProjects />
        <WorkflowEdge />
        <SkillsMatrix />
        <ExperienceTimeline />
      </main>
      <ContactFooter />
    </div>
  );
}
