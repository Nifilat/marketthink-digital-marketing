import {
  SlackIcon,
  AmazonIcon,
  LogitechIcon,
  GoogleIcon,
  FacebookIcon,
  CubeIcon,
  PyramidIcon,
  CircleIcon,
  TriangleIcon,
} from '@/app/icons';
import { facebook, twitter, instagram, leftEllipse, right, left, rightEllipse } from '@/assets';

export const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact Us' },
];

export const heroImages = [
  {
    src: leftEllipse,
    alt: 'Left Ellipse',
    className: 'absolute left-1/20 top-1/10',
    width: 300,
    height: 300,
  },
  {
    src: rightEllipse,
    alt: '',
    className: 'absolute right-0 translate-x-1/3 top-1/10',
    width: 300,
    height: 300,
  },
  {
    src: left,
    alt: 'Left block',
    className:
      'absolute left-0 bottom-0 -translate-x-[28%] translate-y-[6%] w-[27vw] min-w-[200px]',
    width: 400,
    height: 400,
  },
  {
    src: right,
    alt: 'Right block',
    className: 'absolute right-0 bottom-0 translate-x-1/2 translate-y-1/10 w-[18vw] min-w-[150px]',
    width: 300,
    height: 300,
  },
];

export const articles = [
  {
    id: 1,
    image: '/assets/images/SEO.png',
    date: 'AUGUST 17, 2021',
    title: '10 Reasons to invest in SEO copywriting services',
    description:
      'SEO copywriting is essential for any business looking to improve its online presence.',
  },
  {
    id: 2,
    image: '/assets/images/digital-marketing.png',
    date: 'AUGUST 17, 2021',
    title: 'How to get hired at a top Digital Marketing',
    description: "Agency life. We've all seen the photos posted on social media – the cool...",
  },
  {
    id: 3,
    image: '/assets/images/copywriting.png',
    date: 'AUGUST 17, 2021',
    title: 'Copywriting guidelines during the coronavirus',
    description: "Since the coronavirus hit earlier this year, it's hard to go anywhere...",
  },
];

export const tabs = [{ label: 'Content Writing' }, { label: 'Content Marketing' }];

export const TAB_TRANSITION_DELAY_MS = 250;

export const brands = [
  { Icon: SlackIcon, key: 'slack' },
  { Icon: AmazonIcon, key: 'amazon' },
  { Icon: LogitechIcon, key: 'logitech' },
  { Icon: GoogleIcon, key: 'google' },
  { Icon: FacebookIcon, key: 'facebook' },
];

export const steps = [
  {
    label: 'Update content on my Website',
  },
  {
    label: 'Improve User Experience',
  },
  {
    label: 'Request Free Website Review',
  },
  {
    label: 'Improve your SEO Rankings',
  },
];

export const services = [
  {
    Icon: CubeIcon,
    title: 'Content Strategy',
    desc: 'All our content marketing service packages include a custom content strategy',
  },
  {
    Icon: PyramidIcon,
    title: 'Content Development',
    desc: 'We create some content calendar for your company’s must-share content',
  },
  {
    Icon: CircleIcon,
    title: 'Content Creation',
    desc: 'Experienced in copywriting and marketing team begins creating content',
  },
  {
    Icon: TriangleIcon,
    title: 'Content Optimization',
    desc: 'Your content marketing management services also include SEO',
  },
];

export const socialLinks = [
  { href: '#', alt: 'Facebook', icon: facebook },
  { href: '#', alt: 'Twitter', icon: twitter },
  { href: '#', alt: 'Instagram', icon: instagram },
];

export const footerSections = [
  {
    title: 'Menu',
    links: [
      { href: '/', label: 'Home' },
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services/strategy', label: 'Content Strategy' },
      { href: '/services/development', label: 'Content Development' },
      { href: '/services/creation', label: 'Content Creation' },
      { href: '/services/optimization', label: 'Content Optimization' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/sitemap', label: 'Site Map' },
      { href: '/terms', label: 'Terms of Use' },
      { href: '/privacy', label: 'Privacy Notice' },
      { href: '/cookies', label: 'Cookies' },
      { href: '/slavery-policy', label: 'Modern Slavery' },
    ],
  },
];
