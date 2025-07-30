'use client';
import { useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openSidebar = () => setIsMobileMenuOpen(true);
  const closeSidebar = () => setIsMobileMenuOpen(false);

  return (
    <>
      <DesktopNavbar openSidebar={openSidebar} />
      <MobileNavbar visible={isMobileMenuOpen} onClose={closeSidebar} />
    </>
  );
}
