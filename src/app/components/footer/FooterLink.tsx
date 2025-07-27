'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { FooterLinkProps } from '@/types';


const FooterLink = ({ href, children, className, ...props }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx('text-[#78847D] text-base hover:text-[#253D32] transition', className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
