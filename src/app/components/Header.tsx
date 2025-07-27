'use client';
import Link from 'next/link';
import { Logo, HamburgerIcon } from '../icons';
import { HeaderProps } from '@/types';


export default function Header({ openSidebar, variant = 'solid', className = '' }: HeaderProps) {
  const baseClasses = 'w-full z-50';
  const variantClasses = variant === 'transparent' ? 'bg-transparent' : 'sticky top-0 bg-[#1A2B22]';

  return (
    <header className={`${baseClasses} ${variantClasses} ${className}`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
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

        <button className="hidden md:block rounded-full border border-[#EDFF8166] bg-white/10 text-white font-medium text-base px-6 py-3 shadow-sm transition hover:scale-105">
          Free Trial
        </button>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open menu"
          onClick={openSidebar}
        >
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
}
