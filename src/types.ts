export interface JobOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applicationUrl: string;
  companyLogo?: string;
  tags: string[];
}