import React from 'react';
import { CubeIcon, PyramidIcon, CircleIcon, TriangleIcon } from '@/app/components/Icons/ServiceIcons';
import ArrowRightIcon from '@/app/components/Icons/ArrowRightIcon';
import Image from 'next/image';

const services = [
  {
    Icon: CubeIcon,
    title: 'Content Strategy',
    desc: 'All our content marketing service packages include a custom content strategy',
  },
  {
    Icon: PyramidIcon,
    title: 'Content Development',
    desc: 'We create some content calendar for your company’s must-share content',
  },
  {
    Icon: CircleIcon,
    title: 'Content Creation',
    desc: 'Experienced in copywriting and marketing team begins creating content',
  },
  {
    Icon: TriangleIcon,
    title: 'Content Optimization',
    desc: 'Your content marketing management services also include SEO',
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 px-16 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-30">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading, description, see more */}
          <div>
            <h2 className="text-3xl md:[42px] font-bold text-[#253D32] mb-6 leading-[65px];">We’re Strategic Digital <br /> Marketing Agency</h2>
            <p className="text-[#78847D] text-lg md:text-[22px] mb-6 max-w-lg leading-[40px]">
              We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all made, have spare to negatives
            </p>
            <a href="#" className="inline-flex items-center font-semibold transition group">
              <span className="underline text-[#A3B938] text-2xl">See More</span>
              <ArrowRightIcon className="ml-2" />
            </a>
          </div>
          {/* Right: Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-22">
            {services.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-start gap-2">
              <Icon className="w-12 h-12 mb-2" />
              <h3 className="font-bold text-lg text-[#253D32] mb-1">{title}</h3>
              <p className="text-[#78847D] text-sm md:text-base leading-snug">{desc}</p>
            </div>
            ))}
          </div>
        </div>
        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-30">
          {/* Left: Image */}
          <div className="flex justify-start items-center">
            
              <Image src="/assets/svgs/ServiceImage.svg" alt="Service Illustration" width={400} height={300} className="object-cover" />
            
          </div>
          {/* Right: Social Media Reach */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#253D32] mb-7 leading-tight">Increase Business on Social Media Reach</h3>
            <p className="text-[#78847D] text-lg md:text-[22px] mb-12 max-w-lg">Using our network of industry influencers, we help promote your content</p>
            <button
              className="rounded-full text-white text-xl font-semibold px-8 py-4 md:px-12 md:py-3 shadow-[0px_34px_50px_0px_#073F4312] transition hover:scale-105 bg-gradient-to-r from-[#98AA28] to-[#D6FF7E] border border-transparent [border-image:linear-gradient(283.81deg,rgba(255,255,255,0.69)_11.22%,rgba(255,255,255,0.25)_89.57%)_1] cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
