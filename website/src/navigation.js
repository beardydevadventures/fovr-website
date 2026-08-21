import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Discuss a Project', href: '/contact', icon: 'tabler:mail' }],
};

export const footerData = {
  links: [
    {
      title: 'Studio',
      links: [
        { text: 'XR Development Services', href: '/services' },
        { text: 'Projects & Case Studies', href: '/projects' },
        { text: 'About FoVR', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Capabilities',
      links: [
        { text: 'VR Training & Simulation', href: '/services' },
        { text: 'Mixed Reality Development', href: '/services' },
        { text: 'Meta Quest Development', href: '/services' },
        { text: 'XR Prototyping & R&D', href: '/services' },
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
  footNote: '© 2026 FoVR Interactive. Australian XR development studio based in Brisbane, Queensland.',
};
