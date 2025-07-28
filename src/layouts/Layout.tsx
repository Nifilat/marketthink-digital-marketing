'use client';

import { LayoutProps } from '@/types';
import Navbar from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
