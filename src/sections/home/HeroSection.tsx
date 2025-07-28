'use client';
import Image from 'next/image';
import { SquigglyLine, HorizontalLine } from '@/app/icons';
import { heroImages } from '@/app/constants';

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full min-h-[850px] flex flex-col items-center pt-10 overflow-hidden bg-no-repeat font-rubik bg-[url(/assets/svgs/hero.svg)] bg-cover bg-bottom">
        {/* Background elements */}
        {heroImages.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            className={img.className}
            width={img.width}
            height={img.height}
          />
        ))}

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
