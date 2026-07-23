/**
 * Sustainability — /sustainability/
 */

/** Page title hero — Agriva breadcrumb-wrapper */
export const sustainabilityHero = {
  title: 'Sustainability',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Sustainability' },
  ],
  backgroundImageSrc: '/images/agrometal/2026/03/Top-banner-1-2.webp',
  topImageSrc: '/images/agrometal/2026/03/Top-banner-1-2.webp',
} as const;

/** ESG Commitment intro — Agriva about-section-3 */
export const sustainabilityEsgIntro = {
  id: 'sustainability-esg-intro',
  eyebrow: 'Sustainability & ESG Commitment',
  title: 'Committed to Sustainable Value',
  description:
    'At Agro Metal, we believe responsible business is better business. Our operations impact the environment, society, and the global economy, and we strive to drive positive change through Environmental, Social, and Governance (ESG) principles. We don’t just trade commodities we invest in a sustainable future.',
  imageSrc:
    '/images/agrometal/2026/03/sustainable-development-with-renewable-energy-solutions-ecology-concept-green-business.webp',
  imageAlt: 'Sustainable development and renewable energy',
  secondaryImageSrc: '/images/agrometal/2026/03/Looking-ahead-.webp',
  secondaryImageAlt: 'Team collaborating on sustainability goals',
  panelTitle: 'ESG at a glance',
  panelItems: [
    'Environmental Stewardship',
    'Social Responsibility',
    'Governance & Ethics',
  ],
} as const;

/** ESG pillars — Agriva pricing-section-2 / pricing-box-items */
export const sustainabilityEsgPillars = {
  id: 'sustainability-esg-pillars',
  items: [
    {
      title: 'Environmental Stewardship',
      description: 'We minimise our environmental footprint by prioritising',
      iconSrc: '/images/agrometal/2025/12/Environmental-Stewardship-1.webp',
      iconAlt: 'Environmental Stewardship',
      bullets: [
        {
          label: 'Sustainable Sourcing',
          description:
            'Partnering with suppliers who share our commitment to ethical and responsible practices.',
        },
        {
          label: 'Reduced Carbon Footprint',
          description:
            'Optimising logistics and exploring technologies to cut greenhouse gas emissions.',
        },
        {
          label: 'Waste Management',
          description: 'Promoting recycling and reducing waste across our operations.',
        },
        {
          label: 'Environmental Compliance',
          description: 'Meeting and exceeding environmental regulations.',
        },
      ],
    },
    {
      title: 'Social Responsibility',
      description:
        'We foster positive change in communities and uphold ethical labour practices',
      iconSrc: '/images/agrometal/2025/12/Social-Responsibility-2.webp',
      iconAlt: 'Social Responsibility',
      bullets: [
        {
          label: 'Human Rights',
          description:
            'Prohibiting forced labour, child labour, and discrimination.',
        },
        {
          label: 'Community Engagement',
          description:
            'Investing in education, economic empowerment, and conservation initiatives.',
        },
        {
          label: 'Health & Safety',
          description:
            'Prioritising the well-being of employees, partners, and communities.',
        },
        {
          label: 'Diversity & Inclusion',
          description: 'Cultivating a workplace where everyone is valued.',
        },
      ],
    },
    {
      title: 'Governance & Ethics',
      description: 'We operate with integrity and transparency',
      iconSrc: '/images/agrometal/2025/12/Governance-Ethics-3.webp',
      iconAlt: 'Governance & Ethics',
      bullets: [
        {
          label: 'Transparency & Accountability',
          description: 'Open reporting on ESG performance.',
        },
        {
          label: 'Ethical Business Practices',
          description:
            'Zero tolerance for bribery, corruption, or unethical behaviour.',
        },
        {
          label: 'Risk Management',
          description: 'Proactively mitigating ESG-related risks.',
        },
        {
          label: 'Stakeholder Engagement',
          description:
            'Collaborating with customers, suppliers, employees, and communities to improve performance.',
        },
      ],
    },
  ],
} as const;

/** Looking Ahead — Agriva about-us-two-section */
export const sustainabilityLookingAhead = {
  id: 'sustainability-looking-ahead',
  title: 'Looking Ahead',
  description:
    'Agro Metal is committed to continuous improvement and ambitious ESG goals:',
  goals: [
    'Expanding community initiatives in key regions.',
    'Reducing carbon emissions year on year.',
  ],
  closing:
    'Integrating ESG principles is central to how we create long-term value and contribute to a sustainable, equitable future—one commodity at a time.',
  imageSrc: '/images/agrometal/2026/03/Looking-ahead-.webp',
  imageAlt: 'Looking ahead on Agro Metal sustainability goals',
} as const;

/** Closing video CTA — Agriva drone-video-section (same as product pages) */
export const sustainabilityClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title: 'Sustainable, responsible, and transparent value across every commodity.',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
