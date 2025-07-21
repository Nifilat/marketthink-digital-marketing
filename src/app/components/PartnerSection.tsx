"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';
import { SlackIcon, AmazonIcon, LogitechIcon, GoogleIcon, FacebookIcon } from './Icons/BrandIcons';

const brands = [
  { Icon: SlackIcon, key: 'slack' },
  { Icon: AmazonIcon, key: 'amazon' },
  { Icon: LogitechIcon, key: 'logitech' },
  { Icon: GoogleIcon, key: 'google' },
  { Icon: FacebookIcon, key: 'facebook' },
];

export default function PartnerSection() {
  return (
    <section className="w-full bg-[#F6FBF9] pt-12 pb-12 px-16 md:px-20 overflow-hidden border-b border-[#F0F4F2]">
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="w-full"
        >
          {brands.map(({ Icon, key }) => (
            <div key={key} className="flex-shrink-0 flex items-center justify-center px-8 md:px-12" style={{ minWidth: 160 }}>
              <Icon />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
} 