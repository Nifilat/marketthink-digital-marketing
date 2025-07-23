'use client';
import { Logo, HamburgerIcon, CloseIcon, SquigglyLine, HorizontalLine } from '@/app/icons';
import { leftEllipse, rightEllipse, left, right } from '@/assets';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const openSidebar = () => {
    setSidebarVisible(true);
    setTimeout(() => setMobileMenuOpen(true), 10);
  };

  const closeSidebar = () => {
    setMobileMenuOpen(false);
    setTimeout(() => setSidebarVisible(false), 300);
  };

  return (
    <section className="relative w-full min-h-[850px] flex flex-col items-center pt-10 overflow-hidden bg-no-repeat font-rubik bg-[url(/assets/images/hero.svg)] bg-cover bg-bottom">
      {/* Background elements */}
      <Image
        src={leftEllipse}
        alt="Left Ellipse"
        fill={false}
        width={300}
        height={300}
        className="absolute left-1/20 top-1/10"
      />
      <Image
        src={rightEllipse}
        alt=""
        fill={false}
        width={300}
        height={300}
        className="absolute right-0 translate-x-1/3 top-1/10"
      />
      <Image
        src={left}
        alt="Left block"
        fill={false}
        width={400}
        height={400}
        className="absolute left-0 bottom-0 -translate-x-[28%] translate-y-[6%] w-[27vw] min-w-[200px]"
      />
      <Image
        src={right}
        alt="Right block"
        fill={false}
        width={300}
        height={300}
        className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/10 w-[18vw] min-w-[150px]"
      />

      <header className="w-full max-w-7xl flex justify-between items-center px-4 md:px-8 z-30">
        <div className="flex items-center gap-2 md:gap-3">
          <Logo className="h-7 md:h-10 w-7 md:w-8" />
          <span className="text-white text-[26px] md:text-2xl font-bold tracking-[0.02em]">
            markethink
          </span>
        </div>

        <nav className="hidden md:flex gap-8 lg:gap-12 text-white font-normal text-base">
          <Link href="#features" className="hover:underline">
            Features
          </Link>
          <Link href="#pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact Us
          </Link>
        </nav>
        <button className="hidden md:block rounded-full border border-[#EDFF8166] bg-white/10 text-white font-medium text-base px-6 py-3 shadow-sm cursor-pointer transition hover:scale-105 md:px-6 md:py-3 lg:px-8 lg:py-3">
          Free Trial
        </button>

        <button
          className="md:hidden flex justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open menu"
          onClick={openSidebar}
        >
          <HamburgerIcon />
        </button>
      </header>

      {sidebarVisible && (
        <div className="fixed inset-0 z-50 md:hidden">
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
              <a href="#features" onClick={closeSidebar} className="hover:underline">
                Features
              </a>
              <a href="#pricing" onClick={closeSidebar} className="hover:underline">
                Pricing
              </a>
              <a href="#about" onClick={closeSidebar} className="hover:underline">
                About
              </a>
              <a href="#contact" onClick={closeSidebar} className="hover:underline">
                Contact Us
              </a>
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
                <SquigglyLine className="w-full max-w-full" />
              </span>
            </span>
          </h1>
        </div>

        <p className="text-white text-base md:text-[22px] max-w-xl md:max-w-2xl mt-6 mb-8">
          Completely synergize resource taxing relationships via premier niche markets.
          Professionally cultivate one-to-one customer
        </p>

        <button className="mt-8 rounded-full border border-[#98AA28] bg-gradient-to-r from-[#98AA28] to-[#D6FF7E] text-white text-xl font-semibold px-8 py-4 md:px-12 md:py-3 shadow-[0px_34px_50px_0px_#073F4312] transition hover:scale-105 cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}
