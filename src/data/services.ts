export interface Service {
  slug: string;
  title: string;
  summary: string;
  detail: string;
}

export const services: Service[] = [
  {
    slug: 'extensions-conversions',
    title: 'Extensions & Conversions',
    summary: 'Single and double-storey extensions, loft conversions and garage conversions.',
    detail:
      'We build extensions and conversions from the client’s drawings, or work with our architect to produce a practical scheme. Loft conversions, garage conversions and rear or side extensions are priced against the structure and the planning position, then built through to finish.',
  },
  {
    slug: 'house-refurbishments',
    title: 'House Refurbishments',
    summary: 'Full and partial refurbishments of existing houses, including reinstatement after damage.',
    detail:
      'Refurbishment work covers occupied homes and investment stock. That includes strip-out, first and second fix, decoration and making good after water damage or long-term neglect. The programme is set against the condition of the building, not a standard specification.',
  },
  {
    slug: 'kitchens-bathrooms',
    title: 'Kitchens & Bathrooms',
    summary: 'Kitchen and bathroom fitting, including first-fix plumbing and making good.',
    detail:
      'We fit kitchens and bathrooms as standalone jobs or as part of a wider refurbishment. First-fix plumbing and electrics, tiling, joinery and decoration are included so the room is left ready to use. Supply can be client-bought or sourced through our suppliers.',
  },
  {
    slug: 'general-building',
    title: 'General Building Works',
    summary: 'Structural alterations, repairs and day-to-day building work on domestic properties.',
    detail:
      'General building covers the jobs that sit around a larger project or stand on their own: structural openings, repairs, drainage, brickwork, plastering and making good. We take these on as the main contractor, with trades coordinated from one site.',
  },
  {
    slug: 'new-builds',
    title: 'New Builds',
    summary: 'New houses and small residential developments, from plot through to completion.',
    detail:
      'New-build work includes individual houses and small developments. We take on plots and joint ventures as well as contracted builds. The site is run to the approved drawings, with the usual inspections and warranties arranged as part of the programme.',
  },
];
