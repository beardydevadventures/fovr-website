import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Portfolio',
      links: [
        { 
          text: 'Streaming Space', 
          href: '/projects/streaming-space' 
        },  
        { 
          text: 'Smash Room', 
          href: '/projects/smash-room' 
        },
        { 
          text: 'Valve Tutorial', 
          href: '/projects/valve-tutorial' 
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'), 
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'Contact', href: '/contact', target: '_blank', icon: 'tabler:mail'}],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Services', href: '/services' },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        { text: 'Streaming Space', href: '/projects/streaming-space' },
        { text: 'Smash Room', href: '/projects/smash-room' },
        { text: 'Valve Tutorial', href: '/projects/valve-tutorial' },
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'View blog', href: '/blog' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { text: 'contact@fovrinteractive.net', href: 'mailto:contact@fovrinteractive.net' },
        { text: 'Brisbane, QLD, 4000', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/fovr-interactive/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/FovrInteractive' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@fovrinteractive' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; 2024 FoVR Interactive. All rights reserved.
  `,
};
