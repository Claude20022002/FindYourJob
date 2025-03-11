import { JobOffer } from '../types';

export const jobs: JobOffer[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA (Remote)',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications using React and TypeScript.',
    requirements: [
      'At least 5 years of experience with React',
      'Strong TypeScript skills',
      'Experience with state management libraries',
      'Knowledge of modern CSS frameworks',
      'Experience with testing frameworks'
    ],
    postedDate: '2025-04-01',
    applicationUrl: 'https://example.com/apply',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=250&h=250&fit=crop',
    tags: ['React', 'TypeScript', 'Frontend', 'Senior']
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'New York, NY',
    salary: '$110,000 - $140,000',
    description: 'Join our backend team to develop scalable APIs and services. You will work with Node.js, Express, and MongoDB to build robust backend solutions.',
    requirements: [
      'At least 3 years of experience with Node.js',
      'Experience with Express or similar frameworks',
      'Knowledge of MongoDB or other NoSQL databases',
      'Understanding of RESTful API design',
      'Experience with microservices architecture'
    ],
    postedDate: '2025-03-28',
    applicationUrl: 'https://example.com/apply',
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=250&h=250&fit=crop',
    tags: ['Node.js', 'Express', 'MongoDB', 'Backend']
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    location: 'Austin, TX (Hybrid)',
    salary: '$100,000 - $130,000',
    description: 'We are seeking a Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications from front to back.',
    requirements: [
      'Experience with React and Node.js',
      'Knowledge of SQL databases',
      'Understanding of cloud services (AWS/Azure/GCP)',
      'Experience with CI/CD pipelines',
      'Good communication skills'
    ],
    postedDate: '2025-03-25',
    applicationUrl: 'https://example.com/apply',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=250&h=250&fit=crop',
    tags: ['React', 'Node.js', 'Full Stack', 'AWS']
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    salary: '$130,000 - $160,000',
    description: 'Join our DevOps team to build and maintain our cloud infrastructure. You will work with AWS, Kubernetes, and CI/CD pipelines to ensure smooth operations.',
    requirements: [
      'Experience with AWS or other cloud providers',
      'Knowledge of Kubernetes and Docker',
      'Experience with CI/CD tools',
      'Understanding of infrastructure as code',
      'Experience with monitoring and logging tools'
    ],
    postedDate: '2025-03-20',
    applicationUrl: 'https://example.com/apply',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=250&h=250&fit=crop',
    tags: ['DevOps', 'AWS', 'Kubernetes', 'Docker']
  },
  {
    id: '5',
    title: 'UI/UX Designer',
    company: 'DesignHub',
    location: 'Seattle, WA',
    salary: '$90,000 - $120,000',
    description: 'We are looking for a talented UI/UX Designer to create beautiful and functional user interfaces for our web and mobile applications.',
    requirements: [
      'Experience with Figma or similar design tools',
      'Understanding of user-centered design principles',
      'Knowledge of HTML/CSS',
      'Portfolio of previous work',
      'Experience working with development teams'
    ],
    postedDate: '2025-03-15',
    applicationUrl: 'https://example.com/apply',
    companyLogo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=250&h=250&fit=crop',
    tags: ['UI/UX', 'Design', 'Figma', 'Creative']
  }
];