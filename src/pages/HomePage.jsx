import React from 'react';
import { HeroSection } from '../components/byldr/HeroSection';
import { AboutProfileSection } from '../components/byldr/AboutProfileSection';
import { SelectedWorkSection } from '../components/byldr/SelectedWorkSection';
import { DirectCollaborationSection } from '../components/byldr/DirectCollaborationSection';
import { CapabilitiesSection } from '../components/byldr/CapabilitiesSection';
import { ProcessSection } from '../components/byldr/ProcessSection';
import { StartProjectSection } from '../components/byldr/StartProjectSection';
import { NoTemplateSection } from '../components/byldr/NoTemplateSection';
import { ContactSection } from '../components/byldr/ContactSection';

export const HomePage = () => {
  return (
    <div className="w-full font-sans bg-[var(--bg)] text-[var(--text)] animate-page-in overflow-hidden transition-colors duration-300">
      {/* 00. HERO — High-impact Typography, Positioning, Stats Band & Project Ticker */}
      <HeroSection />

      {/* 01. ABOUT & PROFILE — Nguyễn Quang Anh (VKU, PICON Tech, Interview AI, Skills, Real Avatar) */}
      <AboutProfileSection />

      {/* 02. SELECTED WORK — 3-Laptop Interactive 3D Turntable */}
      <SelectedWorkSection />

      {/* 03. DIRECT COLLABORATION — Interactive Command Terminal & 1-1 Promises */}
      <DirectCollaborationSection />

      {/* 04. CAPABILITIES / MY TOOLKIT — 4 Domain Groups & Authentic UI Snapshots */}
      <CapabilitiesSection />

      {/* 05. HOW IT RUNS / BRIEF TO LIVE — 4-Step Transparent Collaboration */}
      <ProcessSection />

      {/* 06. START YOUR PROJECT / LET'S BUILD YOURS — 2 Interactive Lane Cards */}
      <StartProjectSection />

      {/* MANIFESTO / DIFFERENTIATION — No Generic Templates Ever */}
      <NoTemplateSection />

      {/* 07. CONTACT / LET'S BUILD — Quick Project Inquiry & Direct Communication */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
