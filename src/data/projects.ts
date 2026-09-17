export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  heading: string;
  text: string;
  photos: Photo[];
}

export interface Category {
  slug: string;
  navLabel: string;
  pageTitle: string;
  pageDescription: string;
  projects: Project[];
}

const extensionsText =
  'We are experts in extensions and conversions. Our long term experience in building means we can help you enhance the value of your property. We work with our architect, or yours, to provide an economical solution to your requirements.';

const refurbishmentText = 'We are constantly refurbishing property – either for our clients or for our own investment.';

const kitchenBathroomText = 'We have extensive experience of refitting kitchens and bathrooms.';

const optimisingText =
  'Optimising the space to create a modern 5 bedroom home, with 2 extra bedrooms built into the second-floor loft with ensuite bathrooms and extended living area on the ground floor.';

const newBuildText =
  'We have built houses and flats in the local area and can help you maximise the potential of any surplus land you might have. We are always looking for land to develop and will consider either outright purchase or joint ventures.';

const projectData: Record<string, Project> = {
  'extension-build-4': {
    slug: 'extension-build-4',
    heading: 'Extension Build',
    text: extensionsText,
    photos: [
      { src: '/images/projects/extension-build-4/01.jpg', alt: 'Extension Build — photo 1', width: 700, height: 525 },
      { src: '/images/projects/extension-build-4/02.jpg', alt: 'Extension Build — photo 2', width: 700, height: 525 },
      { src: '/images/projects/extension-build-4/03.jpg', alt: 'Extension Build — photo 3', width: 700, height: 525 },
      { src: '/images/projects/extension-build-4/04.jpg', alt: 'Extension Build — photo 4', width: 700, height: 525 },
      { src: '/images/projects/extension-build-4/05.jpg', alt: 'Extension Build — photo 5', width: 700, height: 525 },
      { src: '/images/projects/extension-build-4/06.jpg', alt: 'Extension Build — photo 6', width: 700, height: 525 },
    ],
  },
  'extension-build-3': {
    slug: 'extension-build-3',
    heading: 'Extension Build',
    text: extensionsText,
    photos: [
      { src: '/images/projects/extension-build-3/01.jpg', alt: 'Extension Build — photo 1', width: 700, height: 525 },
      { src: '/images/projects/extension-build-3/02.jpg', alt: 'Extension Build — photo 2', width: 525, height: 700 },
      { src: '/images/projects/extension-build-3/03.jpg', alt: 'Extension Build — photo 3', width: 700, height: 525 },
      { src: '/images/projects/extension-build-3/04.jpg', alt: 'Extension Build — photo 4', width: 700, height: 525 },
      { src: '/images/projects/extension-build-3/05.jpg', alt: 'Extension Build — photo 5', width: 700, height: 525 },
      { src: '/images/projects/extension-build-3/06.jpg', alt: 'Extension Build — photo 6', width: 700, height: 525 },
      { src: '/images/projects/extension-build-3/07.jpg', alt: 'Extension Build — photo 7', width: 700, height: 421 },
    ],
  },
  'extension-build-2': {
    slug: 'extension-build-2',
    heading: 'Extension Build',
    text: extensionsText,
    photos: [
      { src: '/images/projects/extension-build-2/01.jpg', alt: 'Extension Build — photo 1', width: 700, height: 525 },
      { src: '/images/projects/extension-build-2/02.jpg', alt: 'Extension Build — photo 2', width: 700, height: 525 },
      { src: '/images/projects/extension-build-2/03.jpg', alt: 'Extension Build — photo 3', width: 700, height: 525 },
    ],
  },
  'extension-build': {
    slug: 'extension-build',
    heading: 'Extension Build',
    text: extensionsText,
    photos: [
      { src: '/images/projects/extension-build/01.jpg', alt: 'Extension Build — photo 1', width: 700, height: 525 },
      { src: '/images/projects/extension-build/02.jpg', alt: 'Extension Build — photo 2', width: 960, height: 1280 },
      { src: '/images/projects/extension-build/03.jpg', alt: 'Extension Build — photo 3', width: 525, height: 700 },
      { src: '/images/projects/extension-build/04.jpg', alt: 'Extension Build — photo 4', width: 700, height: 525 },
      { src: '/images/projects/extension-build/05.jpg', alt: 'Extension Build — photo 5', width: 700, height: 525 },
    ],
  },
  'garage-conversion-2': {
    slug: 'garage-conversion-2',
    heading: 'Garage Conversion',
    text: extensionsText,
    photos: [
      { src: '/images/projects/garage-conversion-2/01.jpg', alt: 'Garage Conversion — photo 1', width: 700, height: 525 },
      { src: '/images/projects/garage-conversion-2/02.jpg', alt: 'Garage Conversion — photo 2', width: 700, height: 523 },
      { src: '/images/projects/garage-conversion-2/03.jpg', alt: 'Garage Conversion — photo 3', width: 700, height: 523 },
      { src: '/images/projects/garage-conversion-2/04.jpg', alt: 'Garage Conversion — photo 4', width: 700, height: 523 },
    ],
  },
  'garage-conversion': {
    slug: 'garage-conversion',
    heading: 'Garage Conversion',
    text: extensionsText,
    photos: [
      { src: '/images/projects/garage-conversion/01.jpg', alt: 'Garage Conversion — photo 1', width: 700, height: 525 },
      { src: '/images/projects/garage-conversion/02.jpg', alt: 'Garage Conversion — photo 2', width: 700, height: 610 },
      { src: '/images/projects/garage-conversion/03.jpg', alt: 'Garage Conversion — photo 3', width: 700, height: 525 },
      { src: '/images/projects/garage-conversion/04.jpg', alt: 'Garage Conversion — photo 4', width: 700, height: 520 },
    ],
  },
  'conservatory': {
    slug: 'conservatory',
    heading: 'Conservatory Extension',
    text: extensionsText,
    photos: [
      { src: '/images/projects/conservatory/01.jpg', alt: 'Conservatory Extension — photo 1', width: 700, height: 525 },
      { src: '/images/projects/conservatory/02.jpg', alt: 'Conservatory Extension — photo 2', width: 563, height: 750 },
      { src: '/images/projects/conservatory/03.jpg', alt: 'Conservatory Extension — photo 3', width: 700, height: 525 },
      { src: '/images/projects/conservatory/04.jpg', alt: 'Conservatory Extension — photo 4', width: 700, height: 525 },
    ],
  },
  'water-damage-refurbishment': {
    slug: 'water-damage-refurbishment',
    heading: 'Water Damage Refurbishment',
    text: refurbishmentText,
    photos: [
      { src: '/images/projects/water-damage-refurbishment/01.jpg', alt: 'Water Damage Refurbishment — photo 1', width: 525, height: 700 },
      { src: '/images/projects/water-damage-refurbishment/02.jpg', alt: 'Water Damage Refurbishment — photo 2', width: 700, height: 525 },
      { src: '/images/projects/water-damage-refurbishment/03.jpg', alt: 'Water Damage Refurbishment — photo 3', width: 525, height: 700 },
      { src: '/images/projects/water-damage-refurbishment/04.jpg', alt: 'Water Damage Refurbishment — photo 4', width: 525, height: 700 },
    ],
  },
  'house-refurbishment-2': {
    slug: 'house-refurbishment-2',
    heading: 'House Refurbishment',
    text: refurbishmentText,
    photos: [
      { src: '/images/projects/house-refurbishment-2/01.jpg', alt: 'House Refurbishment — photo 1', width: 700, height: 525 },
      { src: '/images/projects/house-refurbishment-2/02.jpg', alt: 'House Refurbishment — photo 2', width: 700, height: 525 },
      { src: '/images/projects/house-refurbishment-2/03.jpg', alt: 'House Refurbishment — photo 3', width: 700, height: 525 },
      { src: '/images/projects/house-refurbishment-2/04.jpg', alt: 'House Refurbishment — photo 4', width: 700, height: 525 },
    ],
  },
  'kitchen-refit-2': {
    slug: 'kitchen-refit-2',
    heading: 'Kitchen Refit',
    text: kitchenBathroomText,
    photos: [
      { src: '/images/projects/kitchen-refit-2/01.jpg', alt: 'Kitchen Refit — photo 1', width: 700, height: 525 },
      { src: '/images/projects/kitchen-refit-2/02.jpg', alt: 'Kitchen Refit — photo 2', width: 700, height: 525 },
    ],
  },
  'kitchen-refit': {
    slug: 'kitchen-refit',
    heading: 'Kitchen Refit',
    text: kitchenBathroomText,
    photos: [
      { src: '/images/projects/kitchen-refit/01.jpg', alt: 'Kitchen Refit — photo 1', width: 700, height: 525 },
      { src: '/images/projects/kitchen-refit/02.jpg', alt: 'Kitchen Refit — photo 2', width: 700, height: 525 },
    ],
  },
  'bathroom-refit-2': {
    slug: 'bathroom-refit-2',
    heading: 'Bathroom Refit',
    text: kitchenBathroomText,
    photos: [
      { src: '/images/projects/bathroom-refit-2/01.jpg', alt: 'Bathroom Refit — photo 1', width: 525, height: 700 },
      { src: '/images/projects/bathroom-refit-2/02.jpg', alt: 'Bathroom Refit — photo 2', width: 525, height: 700 },
    ],
  },
  'bathroom-refit': {
    slug: 'bathroom-refit',
    heading: 'Bathroom Refit',
    text: kitchenBathroomText,
    photos: [
      { src: '/images/projects/bathroom-refit/01.jpg', alt: 'Bathroom Refit — photo 1', width: 525, height: 702 },
      { src: '/images/projects/bathroom-refit/02.jpg', alt: 'Bathroom Refit — photo 2', width: 525, height: 702 },
    ],
  },
  'optimising-living-space': {
    slug: 'optimising-living-space',
    heading: 'Optimising Living Space',
    text: optimisingText,
    photos: [
      { src: '/images/projects/optimising-living-space/01.jpg', alt: 'Optimising Living Space — photo 1', width: 800, height: 679 },
      { src: '/images/projects/optimising-living-space/02.jpg', alt: 'Optimising Living Space — photo 2', width: 800, height: 582 },
      { src: '/images/projects/optimising-living-space/03.jpg', alt: 'Optimising Living Space — photo 3', width: 800, height: 533 },
      { src: '/images/projects/optimising-living-space/04.jpg', alt: 'Optimising Living Space — photo 4', width: 800, height: 533 },
      { src: '/images/projects/optimising-living-space/05.jpg', alt: 'Optimising Living Space — photo 5', width: 800, height: 533 },
    ],
  },
  'new-build-block-of-flats': {
    slug: 'new-build-block-of-flats',
    heading: 'New Build Block of Flats',
    text: newBuildText,
    photos: [
      { src: '/images/projects/new-build-block-of-flats/01.jpg', alt: 'New Build Block of Flats — photo 1', width: 700, height: 525 },
      { src: '/images/projects/new-build-block-of-flats/02.jpg', alt: 'New Build Block of Flats — photo 2', width: 700, height: 525 },
      { src: '/images/projects/new-build-block-of-flats/03.jpg', alt: 'New Build Block of Flats — photo 3', width: 700, height: 525 },
      { src: '/images/projects/new-build-block-of-flats/04.jpg', alt: 'New Build Block of Flats — photo 4', width: 700, height: 525 },
      { src: '/images/projects/new-build-block-of-flats/05.jpg', alt: 'New Build Block of Flats — photo 5', width: 700, height: 525 },
    ],
  },
  'new-build-home': {
    slug: 'new-build-home',
    heading: 'New Build Home',
    text: newBuildText,
    photos: [
      { src: '/images/projects/new-build-home/01.jpg', alt: 'New Build Home — photo 1', width: 700, height: 525 },
      { src: '/images/projects/new-build-home/02.jpg', alt: 'New Build Home — photo 2', width: 700, height: 525 },
      { src: '/images/projects/new-build-home/03.jpg', alt: 'New Build Home — photo 3', width: 700, height: 525 },
      { src: '/images/projects/new-build-home/04.jpg', alt: 'New Build Home — photo 4', width: 700, height: 525 },
    ],
  },
  'new-build-in-wheathampstead-hertfordshire': {
    slug: 'new-build-in-wheathampstead-hertfordshire',
    heading: 'New Build Home',
    text: newBuildText,
    photos: [
      { src: '/images/projects/new-build-in-wheathampstead-hertfordshire/01.jpg', alt: 'New Build Home — photo 1', width: 700, height: 444 },
      { src: '/images/projects/new-build-in-wheathampstead-hertfordshire/02.jpg', alt: 'New Build Home — photo 2', width: 700, height: 444 },
      { src: '/images/projects/new-build-in-wheathampstead-hertfordshire/03.jpg', alt: 'New Build Home — photo 3', width: 700, height: 438 },
      { src: '/images/projects/new-build-in-wheathampstead-hertfordshire/04.jpg', alt: 'New Build Home — photo 4', width: 700, height: 519 },
      { src: '/images/projects/new-build-in-wheathampstead-hertfordshire/05.jpg', alt: 'New Build Home — photo 5', width: 700, height: 525 },
    ],
  },
};

export const categories: Category[] = [
  {
    slug: 'extensions-conversions',
    navLabel: 'Extensions\n& Conversions',
    pageTitle: 'Extensions & Conversions',
    pageDescription: 'Single and double-storey extensions, loft conversions, garage and conservatory conversions.',
    projects: [projectData['extension-build-4'], projectData['extension-build-3'], projectData['extension-build-2'], projectData['extension-build'], projectData['garage-conversion-2'], projectData['garage-conversion'], projectData['conservatory']],
  },
  {
    slug: 'house-refurbishments',
    navLabel: 'House\nRefurbishments',
    pageTitle: 'House Refurbishments',
    pageDescription: 'Full and partial refurbishments of existing houses, including reinstatement after water damage.',
    projects: [projectData['water-damage-refurbishment'], projectData['house-refurbishment-2']],
  },
  {
    slug: 'kitchens-bathrooms',
    navLabel: 'Kitchens\n& Bathrooms',
    pageTitle: 'Kitchens & Bathrooms',
    pageDescription: 'Kitchen and bathroom fitting and refitting.',
    projects: [projectData['kitchen-refit-2'], projectData['kitchen-refit'], projectData['bathroom-refit-2'], projectData['bathroom-refit']],
  },
  {
    slug: 'general-building-works',
    navLabel: 'General\nBuilding Works',
    pageTitle: 'General Building Works',
    pageDescription: 'Structural alterations, repairs and day-to-day building work on domestic properties.',
    projects: [projectData['extension-build-4'], projectData['water-damage-refurbishment'], projectData['house-refurbishment-2']],
  },
  {
    slug: 'new-builds',
    navLabel: 'New\nBuilds',
    pageTitle: 'New Builds',
    pageDescription: 'New houses and small residential developments, from plot through to completion.',
    projects: [projectData['optimising-living-space'], projectData['new-build-block-of-flats'], projectData['new-build-home'], projectData['new-build-in-wheathampstead-hertfordshire']],
  },
];

export function getCategory(slug: string): Category {
  const category = categories.find((c) => c.slug === slug);
  if (!category) throw new Error(`Unknown category slug: ${slug}`);
  return category;
}

export function findProject(slug: string): Project | undefined {
  return projectData[slug];
}
