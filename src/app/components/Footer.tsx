import Image from 'next/image';
import { footerLogo } from '@/assets';
import FooterLink from './FooterLink';
import SocialLink from './SocialLink';
import { socialLinks } from '../constants';
import { footerSections } from '../constants';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-4 px-12 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-12 items-start mb-10">
          <div className="flex flex-col gap-6 md:gap-7">
            <div className="flex items-center gap-2 mb-2">
              <Image src={footerLogo} alt="markethink logo" width={32} height={32} />
              <span className="text-[#253D32] text-2xl font-bold tracking-[0.02em]">
                markethink
              </span>
            </div>
            <p className="text-[#78847D] text-xl max-w-xs leading-relaxed">
              Marketing is a company that focus on developing company’s strategy for increase
              digital marketing
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map(({ href, alt, icon }) => (
                <SocialLink key={alt} href={href} alt={alt} icon={icon} />
              ))}
            </div>
          </div>
          {/* Footer Links */}
          {footerSections.map(section => (
            <div key={section.title} className="flex flex-col gap-2 md:pl-12">
              <h4 className="text-[#253D32] text-xl font-bold mb-2">{section.title}</h4>
              {section.links.map(({ href, label }) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-[#E6EAE6] my-8" />

        <div className="text-center text-[#78847D] text-base py-2">
          © Copyright Markethink. All right reserved
        </div>
      </div>
    </footer>
  );
}
