'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { CloseIcon } from '../../icons';
import { navLinks } from '@/app/constants';

export default function MobileNavbar({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-[#1A2B22] shadow-2xl transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-[#EDFF81] hover:bg-[#d6ff7e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#EDFF81] focus:ring-offset-2 focus:ring-offset-[#1A2B22] cursor-pointer"
          aria-label="Close menu"
          onClick={onClose}
        >
          <CloseIcon className="w-5 h-5 text-[#1A2B22]" />
        </button>

        <nav className="flex flex-col gap-15 text-white font-normal text-base items-center justify-start pt-15 h-full px-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-[#EDFF81] transition-colors text-lg">
              {label}
            </Link>
          ))}

          <button
            className="mt-8 rounded-full border border-[#EDFF8166] bg-white/10 text-white font-medium text-lg px-8 py-3 shadow-sm transition-all hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#EDFF81]"
            onClick={onClose}
          >
            Free Trial
          </button>
        </nav>
      </div>
    </div>
  );
}
