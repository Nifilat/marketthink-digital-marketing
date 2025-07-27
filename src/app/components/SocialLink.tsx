import Image, { StaticImageData } from 'next/image';
import FooterLink from './FooterLink';
import { SocialLinkProps } from '@/types';

const SocialLink = ({ href, alt, icon }: SocialLinkProps) => (
  <FooterLink
    href={href}
    aria-label={alt}
    className="rounded-full w-10 h-10 flex items-center justify-center transition"
  >
    <Image src={icon} alt={alt} width={40} height={40} />
  </FooterLink>
);

export default SocialLink;
