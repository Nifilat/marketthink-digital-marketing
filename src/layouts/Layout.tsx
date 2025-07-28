'use client';

import { LayoutProps } from '@/types';
import Navbar from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
