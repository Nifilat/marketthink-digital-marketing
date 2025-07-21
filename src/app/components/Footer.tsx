import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-4 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12 items-start mb-10">
          {/* Logo, description, social */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/assets/svgs/footer-logo.svg" alt="markethink logo" width={32} height={32} />
              <span className="text-[#253D32] text-2xl font-bold tracking-[0.02em]">markethink</span>
            </div>
            <p className="text-[#78847D] text-xl max-w-xs leading-relaxed">
              Marketing is a company that focus on developing company’s strategy for increase digital marketing
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="rounded-full  w-10 h-10 flex items-center justify-center  transition">
                <Image src="/assets/svgs/facebook.svg" alt="Facebook" width={40} height={40} />
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full  w-10 h-10 flex items-center justify-center  transition">
                <Image src="/assets/svgs/twitter.svg" alt="Twitter" width={40} height={40} />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full  w-10 h-10 flex items-center justify-center  transition">
                <Image src="/assets/svgs/instagram.svg" alt="Instagram" width={40} height={40} />
              </a>
            </div>
          </div>
          {/* Menu */}
          <div className="flex flex-col gap-2 md:pl-12">
            <h4 className="text-[#253D32] text-xl font-bold mb-2">Menu</h4>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Home</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Features</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Pricing About</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Contact Us</a>
          </div>
          {/* Services */}
          <div className="flex flex-col gap-2 md:pl-12">
            <h4 className="text-[#253D32] text-xl font-bold mb-2">Services</h4>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Content Strategy</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Content Development</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Content Creation</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Content Optimization</a>
          </div>
          {/* Company */}
          <div className="flex flex-col gap-2 md:pl-12">
            <h4 className="text-[#253D32] text-xl font-bold mb-2">Company</h4>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Site Map</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Terms of Use</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Privacy Notice</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Cookies</a>
            <a href="#" className="text-[#78847D] text-base hover:text-[#253D32] transition">Modern Slavery</a>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-[#E6EAE6] my-8" />
        {/* Copyright */}
        <div className="text-center text-[#78847D] text-base py-2">
          © Copyright Markethink. All right reserved
        </div>
      </div>
    </footer>
  );
}
