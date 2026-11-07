/**
 * Portfolio Data Source of Truth
 * Derived strictly from Charan N's verified resume and project documentation.
 * No fabricated dates, metrics, companies, or technologies.
 */

export const personalInfo = {
  name: 'Charan N',
  role: 'React & Full-Stack Developer',
  subtitle: 'Aspiring Software Developer',
  location: 'Bengaluru, India',
  email: 'charann539@gmail.com',
  summary:
    'Enthusiastic and detail-oriented aspiring Software Developer with a solid foundation in Python, Java, SQL, and JavaScript. Experienced in developing responsive web interfaces with React JS, architecting backend services with Flask, and designing relational schemas in MySQL with disciplined Git workflows.',
  profileImage: '../assets/profile1.png',
  fallbackImage: '../assets/profile1.png',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Charan-n-03',
      label: 'Visit Charan N on GitHub',
      username: 'Charan-n-03'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/charann03/',
      label: 'Connect with Charan N on LinkedIn',
      username: 'charann03'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/charanu03/',
      label: 'View Charan N problem solving on LeetCode',
      username: 'charanu03'
    }
  ]
};

export const skillsData = [
  {
    category: 'Programming Languages',
    description: 'Core languages used for algorithmic problem-solving and software development.',
    skills: ['Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    category: 'Frontend Development',
    description: 'Modern, component-driven client-side engineering with clean markup.',
    skills: ['React JS', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend & Frameworks',
    description: 'Server architecture, RESTful routing, and session authentication.',
    skills: ['Flask', 'Jinja2', 'PyMySQL']
  },
  {
    category: 'Databases & Storage',
    description: 'Relational data modeling, indexing, and transactional schemas.',
    skills: ['MySQL']
  },
  {
    category: 'Tools & Version Control',
    description: 'Source control, collaborative workflows, and deployment tooling.',
    skills: ['Git', 'GitHub']
  }
];

export const featuredProjects = [
  {
    id: 'tastego',
    title: 'TasteGo',
    tagline: 'Online Food Delivery Web Application',
    type: 'Internship Project',
    year: '2025',
    category: 'Full-Stack Web Development / Food-Tech',
    liveUrl: 'https://tastego-sigma.vercel.app/',
    summary:
      'A full-stack food delivery platform connecting customers, restaurant owners, delivery partners, and system administrators with granular role-based access.',
    features: [
      'Role-Based Access Control (RBAC) supporting Customer, Staff, Delivery Partner, and Admin personas.',
      'Interactive restaurant browsing and dynamic menu item catalog management.',
      'Session-based shopping cart with single-vendor order containment rules.',
      'Comprehensive administrative control panel for moderating restaurants and system oversight.',
      'Secure session management and hashed credential verification.'
    ],
    technologies: ['Python', 'Flask', 'MySQL', 'Jinja2', 'JavaScript', 'HTML5', 'CSS3', 'PyMySQL']
  }
];

export const educationHistory = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Government Engineering College, Ramanagar',
    period: '2022 – 2026',
    score: 'CGPA: 7.29 / 10',
    details: 'Focus on core computer science foundations, algorithms, data structures, database management systems, and software engineering methodologies.'
  },
  {
    degree: 'Pre-University Certificate (PCMB)',
    institution: 'Sri Gangadhareshwara PU College',
    period: '2020 – 2022',
    score: 'Score: 89%',
    details: 'Physics, Chemistry, Mathematics, and Biology background fostering quantitative and analytical discipline.'
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Jaiveer Public School',
    period: '2020',
    score: 'Score: 91.2%',
    details: 'Foundational secondary education with distinction in mathematics and sciences.'
  }
];

export const personalInterests = [
  {
    title: 'Photography & Videography',
    description: 'Cultivating an eye for visual composition, lighting, perspective, and detail.'
  },
  {
    title: 'Chess',
    description: 'Exercising strategic foresight, analytical problem solving, and calculated decision-making.'
  }
];

