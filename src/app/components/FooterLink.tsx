'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link href={href} className="text-[#78847D] text-base hover:text-[#253D32] transition">
      {children}
    </Link>
  );
};

export default FooterLink;
