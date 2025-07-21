import React from 'react';
import Image from 'next/image';
import Logo from './Icons/Logo';

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8 relative">
      {/* Right block SVG (absolutely positioned, overlays everything, not clipped) */}
      <div className="absolute right-[4%] bottom-[11%] z-30">
        <Image
          src="/assets/svgs/contact-block.svg"
          alt="decorative right"
          width={400}
          height={400}
          className="w-[21vw] min-w-[150px]"
        />
      </div>
      <div className="relative w-full max-w-6xl mx-auto min-h-[400px] overflow-hidden">
        {/* Background image fills the container */}
        <Image
          src="/assets/svgs/bg-image.svg"
          alt="background"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
        {/* Top left decorative SVG (clipped by overflow-hidden) */}
        <div className="absolute -top-[2%] left-0 -translate-x-1/2 z-10">
          <Image
            src="/assets/svgs/right.svg"
            alt="decorative top"
            width={120}
            height={120}
            className="rotate-180"
          />
        </div>
        {/* Main content (centered and constrained) */}
        <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-white py-12 px-4 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-left mb-6">
            Subscribe to get information, latest<br />
            news and other interesting offers about
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mb-8">
            <Logo className="h-7 md:h-10 w-7 md:w-8" />
            <span className="text-white text-[26px] md:text-2xl font-bold tracking-[0.02em]">markethink</span>
          </div>
          <form className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-full px-6 py-4 text-[#253D32] text-lg w-full sm:w-auto flex-1 bg-white placeholder-[#253D32] focus:outline-none shadow-md"
            />
            <button
              type="submit"
              className="rounded-full text-white text-xl font-semibold px-8 py-4 md:px-12 md:py-3 shadow-[0px_34px_50px_0px_#073F4312] transition hover:scale-105 bg-gradient-to-r from-[#98AA28] to-[#D6FF7E] border border-transparent cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
