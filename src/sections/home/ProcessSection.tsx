"use client";
import React, { useState } from 'react';
import ArrowRightIcon from '@/app/components/Icons/ArrowRightIcon';
import VerticalDottedLine from '@/app/components/Icons/VerticalDottedLine';
import { GreenPyramidIcon } from '@/app/components/Icons/ServiceIcons';
import Image from 'next/image';

const steps = [
  {
    label: 'Update content on my Website',
  },
  {
    label: 'Improve User Experience',
  },
  {
    label: 'Request Free Website Review',
  },
  {
    label: 'Improve your SEO Rankings',
  },
];

export default function ProcessSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full bg-[#F7FBF9] py-16 px-16 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-4xl md:text-[42px] font-bold text-[#253D32] text-center mb-7">How Can We Help You?</h2>
        <p className="text-[#78847D] text-xl md:text-[22px] text-center mb-12">Let&apos;s do great work together</p>

        {/* Steps Row - Responsive (now using lg breakpoint) */}
        <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between gap-0 mb-8 relative">
          {steps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <div className={`flex flex-col items-center mb-8 lg:mb-0 ${'lg:flex-1'}`}>
                {/* Reserve space for the largest circle in all steps */}
                <div className="h-[100px] flex items-center justify-center">
                  <button
                    className="focus:outline-none bg-transparent border-none p-0"
                    onClick={() => setSelected(idx)}
                    tabIndex={0}
                    aria-label={step.label}
                  >
                    {selected === idx ? (
                      <span className="w-[100px] h-[100px] rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300">

                        <GreenPyramidIcon />
                      </span>
                    ) : (
                      <span className="w-10 h-10 rounded-full border border-[#BFD6C5] flex items-center justify-center transition-all duration-300" />
                    )}
                  </button>
                </div>
                {/* Label */}
                <span
                  className={`mt-6 w-[180px] min-h-[66px] text-center text-[22px] leading-tight ${selected === idx ? 'font-semibold text-[#253D32]' : 'font-normal text-[#253D32]'}`}
                >
                  {step.label}
                </span>
              </div>
              {/* Dotted Line (except after last step) */}
              {idx < steps.length - 1 && (
                <>
                  {/* Horizontal on lg+ */}
                  <div className="hidden lg:flex h-[100px] items-center justify-center">
                    <Image
                      src="/assets/svgs/dottedLine.svg"
                      alt="dotted line"
                      width={180}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  {/* Vertical on mobile/tablet */}
                  <div className="flex lg:hidden items-center justify-center w-full h-12">
                    <VerticalDottedLine />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* See More Link */}
        <a href="#" className="inline-flex items-center font-semibold transition group">
          <span className="underline text-[#A3B938] text-2xl">See More</span>
          <ArrowRightIcon className="ml-2" />
        </a>
      </div>
    </section>
  );
}