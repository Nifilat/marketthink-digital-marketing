import { AnchorHTMLAttributes, ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export interface SocialLinkProps {
  href: string;
  alt: string;
  icon: StaticImageData;
}

export interface HeaderProps {
  openSidebar: () => void;
  variant?: 'transparent' | 'solid';
  className?: string;
}

export interface LayoutProps {
  children: ReactNode;
}
