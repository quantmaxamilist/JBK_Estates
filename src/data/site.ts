export const site = {
  name: 'JBK Estates Ltd',
  legalName: 'JBK Estates Ltd',
  shortName: 'JBK Estates',
  tagline: 'JBK Estates Ltd – High Spec New Builds & Developments',
  subTagline: 'We are always looking for new plots and developments.',
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
  ctaPrimary: 'Contact Us',
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

export const categoryNav = [
  { label: 'JBK\nEstates', href: '/' },
  { label: 'Extensions\n& Conversions', href: '/extensions-conversions/' },
  { label: 'House\nRefurbishments', href: '/house-refurbishments/' },
  { label: 'Kitchens\n& Bathrooms', href: '/kitchens-bathrooms/' },
  { label: 'General\nBuilding Works', href: '/general-building-works/' },
  { label: 'New\nBuilds', href: '/new-builds/' },
] as const;
