import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Experiences',
      href: getPermalink('/projects'),
    },
    {
      text: 'Labs',
      href: '/projects/#labs',
    },
    {
      text: 'Updates',
      href: getPermalink('/updates'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Get in touch', href: '/contact', icon: 'tabler:mail' }],
};

export const footerData = {
  links: [
    {
      title: 'Studio',
      links: [
        { text: 'Our Experiences', href: '/projects' },
        { text: 'About FoVR', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { text: 'Experiences in development', href: '/projects/#in-development' },
        { text: 'FoVR Labs', href: '/projects/#labs' },
        { text: 'Updates', href: '/updates' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'contact@fovrinteractive.net', href: 'mailto:contact@fovrinteractive.net' },
        { text: 'Brisbane, Queensland, Australia', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Diamond Easy Privacy', href: '/projects/diamond-easy/privacy-policy' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/fovr.interactive' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/fovr-interactive/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/FovrInteractive' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@fovrinteractive' },
  ],
  footNote: '© 2026 FoVR Interactive. Australian immersive experience studio based in Brisbane, Queensland.',
};
