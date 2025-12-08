// SEO Configuration for Bird Net India
// Complete metadata, keywords, and schema definitions

export const siteConfig = {
  siteName: 'NP Bird Net India',
  siteUrl: 'https://birdnetindia.com',
  defaultTitle:
    'NP Bird Net India | Professional Bird Netting Services in Surat, Gujarat',
  defaultDescription:
    'Leading NP bird netting and safety solutions provider in Surat since 2012. Expert installation of bird nets, invisible grills, safety nets, and pigeon control solutions. 10+ years experience, 6500+ happy customers.',
  defaultKeywords:
    'bird netting, bird net installation, pigeon control, balcony safety nets, invisible grills, anti bird nets, bird spikes, pet safety nets, mosquito nets, bird netting Surat, bird netting Gujarat',
  author: 'Bird Net India',
  telephone: '+919026644917',
  email: 'neerajpatel902664@gmail.com',
  address: {
    street: '21.132971, 72.874458',
    city: 'Surat',
    state: 'Gujarat',
    postalCode: '',
    country: 'India',
  },
  social: {
    facebook: 'https://www.facebook.com/neeraj.patel.996137',
    youtube: 'https://www.youtube.com/@funnyeditor69/shorts',
    instagram: '#',
  },
  businessHours: 'Monday-Saturday: 9AM-6PM',
  foundingYear: '2012',
  logo: '/logo.png',
  image: '/og-image.jpg',
}

// Page-specific SEO configurations
export const pagesSEO = {
  home: {
    title:
      'NP Bird Net India | #1 Bird Netting Services in Surat, Gujarat Since 2012',
    description:
      'Professional NP bird netting and pigeon control solutions in Surat. Expert installation of balcony nets, invisible grills, safety nets. 10+ years experience, 6500+ satisfied customers, 15L+ sqft covered. Free consultation.',
    keywords:
      'bird netting Surat, pigeon control Surat, balcony bird netting, bird net installation, anti bird nets, bird spikes Surat, invisible grill Surat, safety nets Gujarat, bird netting services',
    canonical: '/',
    schema: ['Organization', 'LocalBusiness', 'WebSite'],
  },
  about: {
    title:
      'About Us | NP Bird Net India - 10+ Years of Excellence in Bird Control',
    description:
      "Established in 2012, NP Bird Net India is Surat's leading bird netting service provider. Specialist team, 6500+ happy customers, 15L+ sqft covered. Professional bird control solutions for residential, commercial, and industrial properties.",
    keywords:
      'bird net company Surat, professional bird netting, bird control experts, pigeon control services, bird netting installation company, safety net providers Gujarat',
    canonical: '/about',
    schema: ['AboutPage', 'Organization'],
  },
  contact: {
    title: 'Contact | NP Bird Net India - Free Consultation & Site Survey',
    description:
      'Call NP Bird Net India for professional bird netting services in Surat. Call +91 9026644917 for free consultation and site survey. Expert bird control solutions, same-day response, competitive pricing.',
    keywords:
      'bird netting contact Surat, bird net installation quote, pigeon control consultation, bird netting service near me, bird net price Surat, free site survey',
    canonical: '/contact',
    schema: ['ContactPage', 'LocalBusiness'],
  },
  gallery: {
    title:
      'Gallery | NP Bird Netting Installation Photos - NP Bird Net India Projects',
    description:
      'View our bird netting installation gallery. Real projects showcasing residential, commercial, balcony, and industrial bird netting work in Surat. Quality installations, satisfied customers, professional results.',
    keywords:
      'bird netting photos, bird net installation images, pigeon control gallery, balcony netting pictures, invisible grill photos, bird netting work Surat',
    canonical: '/gallery',
    schema: ['ImageGallery'],
  },
  videos: {
    title: 'Videos | NP Bird Net Installation Process - Watch Our Expert Work',
    description:
      'Watch NP bird netting installation videos from NP Bird Net India. See our professional installation process, quality workmanship, and customer testimonials. Learn about bird control solutions through video demonstrations.',,
    keywords:
      'bird netting videos, bird net installation video, pigeon control demonstration, balcony netting installation, bird netting process, how to install bird nets',
    canonical: '/videos',
    schema: ['VideoGallery'],
  },
  blogs: {
    title: 'Blogs | Bird Control Tips, Guides & Expert Advice - NP Bird Net India',
    description:
      'Expert bird control blogs covering installation guides, cost analysis, maintenance tips, and prevention strategies. Learn about bird netting, pigeon control, safety nets, and pest management from industry professionals.',
    keywords:
      'bird control blog, bird netting guide, pigeon control tips, bird net installation guide, bird netting cost, bird control methods, pest control blog',
    canonical: '/blogs',
    schema: ['Blog', 'CollectionPage'],
  },
}

// Service pages SEO
export const servicesSEO = {
  'residential-bird-netting': {
    title:
      'Residential Bird Netting Services in Surat | Home Bird Control Solutions',
    description:
      'Professional residential bird netting installation in Surat. Protect your home from pigeons and birds. UV-stabilized HDPE nets, 8-9 year lifespan, expert installation. Free consultation. Call +91 9026644917.',,
    keywords:
      'residential bird netting, home bird control, house pigeon netting, balcony bird nets, window bird protection, residential bird control Surat, home safety nets',
    schema: ['Service', 'Product'],
  },
  'balcony-bird-netting': {
    title:
      'Balcony Bird Netting in Surat | Invisible Balcony Safety Nets Installation',
    description:
      'Expert balcony bird netting services in Surat. Keep your balcony clean and bird-free. Nearly invisible nets, UV-stabilized, weather-resistant. Professional installation with 4-5 year warranty. Free site survey.',
    keywords:
      'balcony bird netting, balcony safety nets, pigeon net for balcony, invisible balcony nets, balcony bird protection, balcony netting Surat, terrace bird nets',
    schema: ['Service', 'Product'],
  },
  'society-bird-netting': {
    title:
      'Society Bird Netting Services | Apartment Complex Bird Control Solutions',
    description:
      'Complete bird netting solutions for housing societies and apartment complexes in Surat. Protect common areas, ducts, and building exteriors. Bulk pricing, professional installation, long-term protection.',
    keywords:
      'society bird netting, apartment bird control, housing society nets, building bird protection, commercial bird netting, society pigeon control, duct area netting',
    schema: ['Service', 'Product'],
  },
  'industrial-bird-netting': {
    title:
      'Industrial Bird Netting | Warehouse & Factory Bird Control Solutions',
    description:
      'Heavy-duty industrial bird netting for warehouses, factories, and commercial facilities in Surat. FDA compliant, OSHA standards, large-scale installations. Protect machinery, maintain hygiene, prevent contamination.',
    keywords:
      'industrial bird netting, warehouse bird control, factory pigeon netting, commercial bird protection, industrial safety nets, large scale bird netting, manufacturing bird control',
    schema: ['Service', 'Product'],
  },
  'bird-spikes': {
    title: 'Bird Spikes Installation in Surat | Stainless Steel Pigeon Spikes',
    description:
      'Professional bird spikes installation in Surat. Durable SS 304 stainless steel and polycarbonate spikes. Prevent birds from landing on ledges, roofs, AC units. Humane, effective, long-lasting. 4-year warranty.',
    keywords:
      'bird spikes Surat, pigeon spikes, stainless steel bird spikes, anti bird spikes, bird deterrent spikes, roof bird spikes, AC bird spikes, bird spike installation',
    schema: ['Service', 'Product'],
  },
  'anti-bird-nets': {
    title: 'Anti Bird Nets in Surat | UV-Stabilized Bird Protection Nets',
    description:
      'High-quality anti bird nets for complete bird protection in Surat. UV-stabilized HDPE nets, weather-resistant, suitable for all property types. Residential, commercial, agricultural applications. Expert installation.',
    keywords:
      'anti bird nets, bird protection nets, HDPE bird nets, UV stabilized nets, agricultural bird netting, crop protection nets, bird control nets Surat',
    schema: ['Service', 'Product'],
  },
  'invisible-grill': {
    title:
      'Invisible Grill in Surat | Stainless Steel Safety Grills for Balconies',
    description:
      'Modern invisible grill installation in Surat. Marine-grade SS wire, aluminum channels, unobstructed views, complete safety. Child-safe, pet-safe, bird-proof. Professional installation with warranty.',
    keywords:
      'invisible grill Surat, invisible window grill, balcony safety grill, stainless steel grill, transparent grill, modern window grill, child safety grill',
    schema: ['Service', 'Product'],
  },
  'pet-safety-nets': {
    title: 'Pet Safety Nets in Surat | Dog & Cat Safety Nets for Balconies',
    description:
      'Protect your pets with professional safety nets in Surat. Heavy-duty HDPE nets, strong anchors, suitable for dogs, cats, and birds. Prevent falls from balconies and windows. Expert installation.',
    keywords:
      'pet safety nets, dog safety nets, cat safety nets, balcony pet protection, pet fall prevention, animal safety nets Surat, pet window nets',
    schema: ['Service', 'Product'],
  },
  'mosquito-nets': {
    title: 'Mosquito Nets in Surat | Window & Door Mosquito Net Installation',
    description:
      'Quality mosquito nets for doors and windows in Surat. Fine mesh, allows air circulation, keeps insects out. Available in various sizes. Professional installation, easy maintenance, affordable pricing.',
    keywords:
      'mosquito nets Surat, window mosquito nets, door mosquito nets, insect nets, mosquito mesh, mosquito screen, mosquito net installation',
    schema: ['Service', 'Product'],
  },
  'sports-turf-nets': {
    title:
      'Sports & Turf Nets in Surat | Cricket Practice Nets & Ground Netting',
    description:
      'Professional sports netting for cricket practice, football fields, and turf protection in Surat. Durable outdoor nets, weather-resistant, custom sizes. Ideal for sports facilities, schools, clubs.',
    keywords:
      'sports nets Surat, cricket practice nets, football ground nets, turf protection nets, sports facility netting, cricket nets installation, playground nets',
    schema: ['Service', 'Product'],
  },
  'aluminium-sliding-window': {
    title: 'Aluminium Sliding Window Nets in Surat | Mosquito Net Windows',
    description:
      'Premium aluminium sliding window nets in Surat. Smooth operation, energy-efficient, modern designs. Mosquito protection with style. Suitable for residential and commercial spaces. Professional installation.',
    keywords:
      'aluminium sliding windows, sliding window nets, mosquito window frames, aluminium windows Surat, sliding mosquito nets, window frames',
    schema: ['Service', 'Product'],
  },
  'safety-construction-nets': {
    title:
      'Safety & Construction Nets in Surat | Building Safety Nets Installation',
    description:
      'Heavy-duty safety nets for construction sites in Surat. Worker safety, debris prevention, OSHA compliant. Durable construction netting, professional installation, meets all safety standards.',
    keywords:
      'construction safety nets, building safety nets, worker safety nets, debris nets, construction site netting, safety nets Surat, fall protection nets',
    schema: ['Service', 'Product'],
  },
}

// Blog SEO configurations
export const blogsSEO = {
  'complete-guide-bird-net-installation': {
    title:
      'Complete Guide to Bird Net Installation: Process, Cost & Benefits 2024',
    description:
      'Expert guide to bird net installation covering types, installation process, costs, and benefits. Learn how professional bird netting protects your property from bird damage.',
    keywords:
      'bird net installation guide, bird netting process, bird net cost, bird netting benefits, how to install bird nets, bird control installation, bird netting types',
    category: 'Installation Guide',
  },
  'balcony-safety-nets-installation-guide': {
    title: 'Balcony Safety Nets: Installation Guide, Cost & Benefits for 2024',
    description:
      'Complete guide to balcony safety nets covering installation, types, costs, and benefits. Protect your family and property with professional balcony netting solutions.',
    keywords:
      'balcony safety nets guide, balcony netting installation, balcony net cost, balcony bird protection, balcony safety solutions, terrace netting guide',
    category: 'Safety Solutions',
  },
  'pigeon-control-solutions-guide': {
    title:
      'Pigeon Control Solutions: Complete Guide to Methods, Costs & Prevention 2024',
    description:
      'Expert guide to pigeon control covering humane removal methods, prevention strategies, costs, and long-term solutions. Protect your property from pigeon damage.',
    keywords:
      'pigeon control guide, pigeon removal methods, pigeon prevention, pigeon control cost, how to control pigeons, pigeon pest control, pigeon deterrents',
    category: 'Pest Control',
  },
  'industrial-bird-netting-solutions': {
    title:
      'Industrial Bird Netting: Complete Guide for Warehouses & Factories 2024',
    description:
      'Comprehensive guide to industrial bird netting for warehouses, factories, and commercial facilities. Learn about installation, costs, compliance, and ROI.',
    keywords:
      'industrial bird netting, warehouse bird control, factory bird netting, commercial bird protection, industrial pest control, large scale bird netting',
    category: 'Commercial Solutions',
  },
  'bird-spikes-installation-guide': {
    title:
      'Bird Spikes Installation: Complete Guide to Types, Costs & Effectiveness 2024',
    description:
      'Expert guide to bird spikes covering types, installation methods, costs, and effectiveness. Learn how bird spikes prevent roosting and protect your property.',
    keywords:
      'bird spikes guide, bird spike installation, bird spike types, bird spike cost, pigeon spikes, bird deterrent spikes, how to install bird spikes',
    category: 'Deterrent Solutions',
  },
  'anti-bird-solutions-deterrent-methods': {
    title:
      'Anti-Bird Solutions: Complete Guide to Deterrents, Methods & Prevention 2024',
    description:
      'Comprehensive guide to anti-bird solutions covering all deterrent methods, prevention strategies, and effectiveness. Find the right bird control solution.',
    keywords:
      'anti bird solutions, bird deterrents, bird control methods, bird prevention, bird repellents, bird control techniques, humane bird control',
    category: 'Prevention Guide',
  },
  'apartment-bird-protection-solutions': {
    title:
      'Apartment Bird Protection: Complete Guide for Multi-Unit Buildings 2024',
    description:
      'Comprehensive guide to bird protection for apartments covering HOA approval, balcony solutions, building-wide strategies, and tenant rights.',
    keywords:
      'apartment bird control, multi-unit bird protection, HOA bird netting, apartment balcony nets, building bird solutions, tenant bird control',
    category: 'Residential Solutions',
  },
  'bird-netting-benefits-roi-analysis': {
    title:
      'Bird Netting Benefits & ROI: Complete Value Analysis & Cost Savings 2024',
    description:
      'Comprehensive analysis of bird netting benefits and ROI covering health, financial, and property value advantages. Discover why bird netting pays for itself.',
    keywords:
      'bird netting benefits, bird netting ROI, bird control cost savings, bird netting value, bird netting investment, bird control financial benefits',
    category: 'Investment Guide',
  },
  'bird-netting-maintenance-care-guide': {
    title: 'Bird Netting Maintenance: Complete Care Guide for Longevity 2024',
    description:
      'Expert guide to bird netting maintenance covering inspection schedules, cleaning procedures, repairs, and tips to extend lifespan.',
    keywords:
      'bird netting maintenance, bird net care, bird netting cleaning, bird net repair, bird netting inspection, bird net longevity',
    category: 'Maintenance Guide',
  },
  'bird-control-pricing-cost-guide': {
    title: 'Bird Control Pricing Guide: Complete Cost Breakdown & Factors 2024',
    description:
      'Comprehensive bird control pricing guide covering all cost factors, solution comparisons, budgeting tips, and how to get accurate quotes.',
    keywords:
      'bird control pricing, bird netting cost, bird control prices, bird net installation cost, pigeon control pricing, bird control budget',
    category: 'Pricing Guide',
  },
}

// Generate structured data schemas
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
  description: siteConfig.defaultDescription,
  telephone: siteConfig.telephone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  foundingDate: siteConfig.foundingYear,
  sameAs: [siteConfig.social.facebook, siteConfig.social.youtube],
})

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.siteName,
  image: `${siteConfig.siteUrl}${siteConfig.image}`,
  url: siteConfig.siteUrl,
  telephone: siteConfig.telephone,
  email: siteConfig.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '21.132971',
    longitude: '72.874458',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '6500',
  },
})

export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
})

export const generateBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteConfig.siteUrl}${item.path}`,
  })),
})

export const generateServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.title,
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.siteName,
    telephone: siteConfig.telephone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Surat',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: service.title,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
        },
      },
    ],
  },
})

export const generateArticleSchema = (blog) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: blog.title,
  description: blog.description,
  author: {
    '@type': 'Organization',
    name: siteConfig.siteName,
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.siteUrl}${siteConfig.logo}`,
    },
  },
  datePublished: blog.date || '2024-12-01',
  dateModified: blog.date || '2024-12-01',
})

export const generateFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
