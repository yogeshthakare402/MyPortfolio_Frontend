export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  icon: string;
  items: { name: string; level: number }[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
};

export type ProjectData = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  featured: boolean;
  impact: string;
  year: string;
};

export const portfolioData = {
  profile: {
    name: 'Yogesh Thakare',
    role: 'Frontend Engineer',
    location: 'Mumbai, India',
    heroLead:
      'Frontend Engineer focused on performance, architecture, and polished user experiences',
    availability: 'Available for frontend opportunities',
    avatar: '/assets/images/Yogesh_Thakare.png',
    resume: '/assets/docs/Yogesh_Thakare_Resume_V3.pdf',
    quickFacts: [
      '3+ years building React and Next.js products',
      'Focused on performance budgets and UX quality',
      'Comfortable owning design-to-production workflows',
    ],
    heroStats: [
      { label: 'Frontend Projects Shipped', value: '5+' },
      { label: 'Core Web Vitals Focus', value: 'A-grade' },
      { label: 'Years of Product Delivery', value: '3+' },
    ],
  },
  sections: {
    projects: {
      title: 'Featured Projects',
      subtitle: 'High-impact work blending product thinking, premium interface craft, and frontend performance.',
      ctaLabel: 'Explore all projects',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Visual systems, product engineering, and the technical depth behind polished experiences.',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Roles where I shipped resilient interfaces, improved UX quality, and drove measurable outcomes.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let us build something remarkable together.',
      intro:
        'Prefer async collaboration with clear communication, strong execution, and measurable product outcomes.',
    },
  },
  navItems: [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
  ] satisfies NavItem[],
  socials: [
    { label: 'GitHub', href: 'https://github.com/yogeshthakare402' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eryogeshthakare' },
    { label: 'Email', href: 'mailto:yogeshthakare4002@gmail.com' },
  ] satisfies SocialLink[],
  about: {
    title: 'About',
    intro:
      'Passionate about crafting premium, scalable user interfaces with an engineering-first mindset. I focus on performance budgets, accessible interactions, and robust component architecture.',
    highlights: [
      'Architecture for SSR, SSG, and SEO at scale',
      'Design systems and reusable component primitives',
      'Performance profiling and bundle optimization',
      'Subtle motion that enhances every interaction',
    ],
  },
  skills: [
    {
      title: 'Frontend',
      icon: 'UI',
      items: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS / Motion', level: 88 },
      ],
    },
    {
      title: 'Backend',
      icon: 'API',
      items: [
        { name: 'Node.js', level: 78 },
        { name: 'Express', level: 76 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 82 },
      ],
    },
    {
      title: 'Engineering',
      icon: 'OPS',
      items: [
        { name: 'Performance', level: 88 },
        { name: 'Accessibility', level: 84 },
        { name: 'SEO', level: 86 },
        { name: 'Testing Mindset', level: 75 },
      ],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      company: 'Instinct Innovations Pvt Ltd',
      role: 'Associate Software Engineer',
      period: '2023 - Present',
      summary:
        'Build and ship performance-sensitive product features, reusable UI systems, and maintainable frontend architecture.',
      stack: ['React', 'Next.js', 'React Native', 'TypeScript'],
    },
    {
      company: '10X Academy',
      role: 'Full Stack Developer Intern',
      period: '2022 - 2023',
      summary:
        'Developed real-world web applications and strengthened full stack fundamentals from UI to API integration.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      company: 'Stanley David and Associates',
      role: 'Technical Hiring Consultant',
      period: '2021 - 2023',
      summary:
        'Led technical evaluations and role-to-skill mapping for engineering hires across multiple stacks.',
      stack: ['Hiring', 'Evaluation', 'Communication'],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      title: 'Frankross Web Revamp',
      description: 'Built a modern e-commerce experience in Next.js with modular styling and SEO-first architecture.',
      technologies: ['Next.js', 'CSS Modules', 'SEO', 'Performance'],
      image: '/assets/images/frankross.png',
      link: 'https://frankrosspharmacy.com/',
      featured: true,
      impact: 'Modernized storefront UX and improved discoverability.',
      year: '2024',
    },
    {
      title: 'Frankross Health App',
      description: 'Delivered product improvements including payment integration and booking workflows.',
      technologies: ['React Native', 'UI/UX', 'API Integration'],
      image: '/assets/images/frankross-app.png',
      link: 'https://play.google.com/store/apps/details?id=com.frankrosshealth',
      featured: true,
      impact: 'Streamlined booking and payment journeys on mobile.',
      year: '2024',
    },
    {
      title: 'PharmEasy Web Revamp',
      description: 'Enhanced critical commerce pages with improved layout structure and search visibility.',
      technologies: ['Next.js', 'UI/UX', 'Performance', 'SEO'],
      image: '/assets/images/pharmeasy.png',
      link: 'https://pharmeasy.in',
      featured: true,
      impact: 'Upgraded commerce pages with stronger conversion UX.',
      year: '2023',
    },
    {
      title: 'TinyForms',
      description: 'Implemented dynamic, configurable forms with themed customization and reusable components.',
      technologies: ['React', 'Form Builder', 'Customization'],
      image: '/assets/images/tinyform.png',
      link: 'https://www.tinycommand.com/',
      featured: true,
      impact: 'Enabled teams to launch dynamic forms faster.',
      year: '2023',
    },
    {
      title: 'E-Commerce Shopping Cart',
      description: 'A shopping cart app with product listings, cart state, and checkout flow.',
      technologies: ['React', 'Context API', 'CSS'],
      image: '/assets/images/Shopping_Cart.png',
      link: 'https://shopping-cart-yt.netlify.app/',
      featured: false,
      impact: 'Built robust state handling for cart interactions.',
      year: '2022',
    },
    {
      title: 'Real Estate Project',
      description: 'A real estate platform with search, user profiles, and saved properties.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/assets/images/realestate2.png',
      link: 'https://real-estate-app-2.netlify.app/',
      featured: false,
      impact: 'Delivered search and saved-property product flows.',
      year: '2022',
    },
  ] satisfies ProjectData[],
} as const;
