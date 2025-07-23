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
