'use client';
import Header from '@/app/components/Header';
import MobileNavbar from '@/app/components/MobileNavbar';
import { SquigglyLine, HorizontalLine } from '@/app/icons';
import { leftEllipse, rightEllipse, left, right } from '@/assets';
import React, { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openSidebar = () => setMobileMenuOpen(true);
  const closeSidebar = () => setMobileMenuOpen(false);

  return (
    <>
      <Header openSidebar={openSidebar} variant="solid" />

      <MobileNavbar visible={mobileMenuOpen} onClose={closeSidebar} />

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

        {/* Hero content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center mt-16 md:mt-28 px-4">
          <div className="flex items-center gap-5 mb-4">
            <HorizontalLine />
            <span className="text-white text-sm md:text-xl lg:text-4xl font-semibold">
              The Best
            </span>
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
    </>
  );
}
