"use client"
import Image from 'next/image';
import Logo from './Icons/Logo';
import React, { useState, useRef } from 'react';
import HamburgerIcon from './Icons/HamburgerIcon';
import CloseIcon from './Icons/CloseIcon';
import HorizontalLine from './Icons/HorizontalLine';
import SquigglyLine from './Icons/SquigglyLine';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Open sidebar
  const openSidebar = () => {
    setSidebarVisible(true);
    setTimeout(() => setMobileMenuOpen(true), 10); // allow for mount before animating
  };

  // Close sidebar with animation
  const closeSidebar = () => {
    setMobileMenuOpen(false);
    setTimeout(() => setSidebarVisible(false), 300); // match transition duration
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center pt-[58px] overflow-hidden bg-no-repeat bg-cover font-[Rubik]"
      style={{ backgroundImage: 'url(/assets/images/background-image.png)' }}
    >
      {/* Left blocks */}
      <img
        src="/assets/svgs/left-blocks.svg"
        alt="Left Blocks"
        className="absolute left-0 bottom-0 w-24 md:w-40 lg:w-56 z-10"
        aria-hidden
      />
      {/* Right blocks */}
      <img
        src="/assets/svgs/hero-right-blocks.svg"
        alt="Right Blocks"
        className="absolute right-0 bottom-0 w-20 md:w-36 lg:w-52 z-10"
        aria-hidden
      />
      {/* V-shape lines (left and right diagonals) */}
      <img
        src="/assets/svgs/left-diagonal.svg"
        alt="Left V-shape"
        className="absolute bottom-0 left-0 w-1/2 min-w-[180px] max-w-[50vw] z-20"
        aria-hidden
      />
      <img
        src="/assets/svgs/right-diagonal.svg"
        alt="Right V-shape"
        className="absolute bottom-0 right-0 w-1/2 min-w-[180px] max-w-[50vw] z-20"
        aria-hidden
      />
      {/* Header and nav */}
      <header className="w-full max-w-7xl flex justify-between items-center px-4 md:px-8 z-30">
        <div className="flex items-center gap-2 md:gap-3">
          <Logo className="h-7 md:h-10 w-7 md:w-8" />
          <span className="text-white text-[26px] md:text-2xl font-bold tracking-[0.02em]">markethink</span>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-white font-normal text-base">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
        <button
          className="hidden md:block rounded-full border border-[#EDFF8166] bg-white/10 text-white font-medium text-base px-6 py-3 shadow-sm cursor-pointer transition hover:scale-105 md:px-6 md:py-3 lg:px-8 lg:py-3"
        >
          Free Trial
        </button>
        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open menu"
          onClick={openSidebar}
        >
          <HamburgerIcon />
        </button>
      </header>
      {/* Mobile sidebar nav */}
      {sidebarVisible && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#1A2B22]/80 shadow-2xl transition-transform duration-300 ease-in-out z-50 backdrop-blur-sm
              ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-[#EDFF81] hover:bg-[#d6ff7e] transition focus:outline-none"
              aria-label="Close menu"
              onClick={closeSidebar}
            >
              <CloseIcon />
            </button>
            <nav className="flex flex-col gap-8 text-white font-normal text-base items-center mt-24">
              <a href="#features" onClick={closeSidebar} className="hover:underline">Features</a>
              <a href="#pricing" onClick={closeSidebar} className="hover:underline">Pricing</a>
              <a href="#about" onClick={closeSidebar} className="hover:underline">About</a>
              <a href="#contact" onClick={closeSidebar} className="hover:underline">Contact Us</a>
              <button
                className="mt-8 rounded-full border border-[#EDFF8166] bg-white/10 text-white font-medium text-lg px-8 py-3 shadow-sm transition hover:scale-105 cursor-pointer"
                onClick={closeSidebar}
              >
                Free Trial
              </button>
            </nav>
          </div>
        </div>
      )}
      {/* Hero content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center mt-16 md:mt-28 px-4">
        
        <div className="flex items-center gap-5 mb-4">
          <HorizontalLine />
          <span className="text-white text-sm md:text-xl lg:text-4xl font-semibold">The Best</span>
          <HorizontalLine />
        </div>
        
        <div className="relative flex flex-col items-center mt-5">
          <h1 className="font-semibold text-[2.5rem] md:text-6xl lg:text-[90px] leading-[1] tracking-[0.04em] text-white mb-2 relative inline-block">
            Digital{' '}
            <span className="relative inline-block">
              Marketing
              <span className="absolute left-0 w-full top-full flex justify-center">
          <SquigglyLine className="w-full max-w-[100%]" />
              </span>
            </span>
          </h1>
        </div>
        {/* Description */}
        <p className="text-gray-200 text-base md:text-lg max-w-xl md:max-w-2xl mt-6 mb-8">
          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
        </p>
        {/* Get Started button */}
        <button
          className="rounded-full border text-white text-xl font-semibold px-8 py-4 md:px-12 md:py-5 shadow-lg transition hover:scale-105"
          style={{
            background: 'linear-gradient(328.68deg, #98AA28 13.03%, #D6FF7E 120.61%)',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '192px',
            boxShadow: '0px 34px 50px 0px #073F4312',
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
} 