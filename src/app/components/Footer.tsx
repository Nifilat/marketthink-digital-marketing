import Image from 'next/image';
import { footerLogo, facebook, instagram, twitter } from '@/assets';
import FooterLink from './FooterLink';

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
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full  w-10 h-10 flex items-center justify-center  transition"
              >
                <Image src={facebook} alt="Facebook" width={40} height={40} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full  w-10 h-10 flex items-center justify-center  transition"
              >
                <Image src={twitter} alt="Twitter" width={40} height={40} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full  w-10 h-10 flex items-center justify-center  transition"
              >
                <Image src={instagram} alt="Instagram" width={40} height={40} />
              </a>
            </div>
          </div>
          {/* Menu */}
          <div className="flex flex-col gap-2 md:pl-12">
            <h4 className="text-[#253D32] text-xl font-bold mb-2">Menu</h4>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2 md:pl-12">
            <h4 className="text-[#253D32] text-xl font-bold mb-2">Services</h4>
            <FooterLink href="/services/strategy">Content Strategy</FooterLink>
            <FooterLink href="/services/development">Content Development</FooterLink>
            <FooterLink href="/services/creation">Content Creation</FooterLink>
            <FooterLink href="/services/optimization">Content Optimization</FooterLink>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2 md:pl-12">
            <h4 className="text-[#253D32] text-xl font-bold mb-2">Company</h4>
            <FooterLink href="/sitemap">Site Map</FooterLink>
            <FooterLink href="/terms">Terms of Use</FooterLink>
            <FooterLink href="/privacy">Privacy Notice</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
            <FooterLink href="/slavery-policy">Modern Slavery</FooterLink>
          </div>
        </div>

        <div className="border-t border-[#E6EAE6] my-8" />

        <div className="text-center text-[#78847D] text-base py-2">
          © Copyright Markethink. All right reserved
        </div>
      </div>
    </footer>
  );
}
