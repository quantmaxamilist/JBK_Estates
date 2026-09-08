export const site = {
  name: 'JBK Estates Ltd',
  legalName: 'JBK Estates Ltd',
  shortName: 'JBK Estates',
  tagline: 'Property development and building works.',
  description:
    'JBK Estates Ltd is a local property development and building company. Work covers extensions, conversions, house refurbishments, kitchens and bathrooms, general building works and new builds.',
  phone: '07734 489559',
  phoneHref: 'tel:+447734489559',
  email: 'tony@tonyberk.com',
  emailHref: 'mailto:tony@tonyberk.com',
  address: '15 Mount Road, Wheathampstead, Hertfordshire, AL4 8BX',
  addressLines: ['15 Mount Road', 'Wheathampstead', 'Hertfordshire, AL4 8BX'] as const,
  streetAddress: '15 Mount Road',
  city: 'Wheathampstead',
  region: 'Hertfordshire',
  postcode: 'AL4 8BX',
  companyNumber: '11268352',
  url: 'https://www.jbkestates.co.uk',
  areaServed: ['Hertfordshire', 'Essex', 'London', 'East of England'],
  ctaPrimary: 'Get a quote',
  ctaSecondary: 'Call 07734 489559',
} as const;

export const contacts = [
  {
    name: 'Tony Berk',
    phone: '07734 489559',
    phoneHref: 'tel:+447734489559',
    email: 'tony@tonyberk.com',
    emailHref: 'mailto:tony@tonyberk.com',
  },
  {
    name: 'Katie Florez',
    phone: '07973 620477',
    phoneHref: 'tel:+447973620477',
    email: 'katie.berk@gmail.com',
    emailHref: 'mailto:katie.berk@gmail.com',
  },
] as const;

export const coverage = ['Hertfordshire', 'Essex', 'London', 'East of England'] as const;

export const coverageLine = coverage.join(' · ');

export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const credentials = [
  'Fully insured for domestic and commercial building works',
  'Work from the client’s drawings, or with our architect',
  'Site left tidy at the end of each day',
  'Quotes priced against the job, not a standard package',
] as const;
