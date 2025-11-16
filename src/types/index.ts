export type UserType = 'company' | 'candidate';

export type User = {
  id: string;
  email: string;
  type: UserType;
  name: string;
  createdAt: Date;
};

export type Company = {
  id: string;
  userId: string;
  companyName: string;
  description: string;
  website?: string;
  location: string;
  size?: string;
  logo?: string;
};

export type Candidate = {
  id: string;
  userId: string;
  fullName: string;
  phone?: string;
  location: string;
  title?: string;
  summary?: string;
  cvUrl?: string;
  cvFileName?: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
};

export type Job = {
  id: string;
  companyId: string;
  title: string;
  description: string;
  requirements: string[];
  qualifications: string[];
  responsibilities: string[];
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  remote: boolean;
  experienceLevel: 'entry' | 'mid' | 'senior' | 'lead';
  postedDate: Date;
  status: 'active' | 'closed';
};

export type Application = {
  id: string;
  jobId: string;
  candidateId: string;
  status: 'pending' | 'reviewing' | 'interview' | 'rejected' | 'accepted';
  appliedDate: Date;
  coverLetter?: string;
};
