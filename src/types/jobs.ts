export type UserType = 'company' | 'candidate';

export interface User {
  id: string;
  email: string;
  name: string;
  type: UserType;
  createdAt: Date;
}

export interface Company extends User {
  type: 'company';
  logo?: string;
  description: string;
  location: string;
  industry: string;
  website?: string;
  employeeCount?: string;
}

export interface Candidate extends User {
  type: 'candidate';
  avatar?: string;
  phone?: string;
  location: string;
  title?: string;
  bio?: string;
  skills: string[];
  experience?: string;
  education?: string;
  cv?: string;
}

export type JobType = 'full-time' | 'part-time' | 'contract' | 'remote';
export type JobStatus = 'active' | 'closed';

export interface Job {
  id: string;
  companyId: string;
  companyName: string;
  companyLogo?: string;
  title: string;
  description: string;
  location: string;
  type: JobType;
  salary?: string;
  requirements: string[];
  responsibilities: string[];
  status: JobStatus;
  postedAt: Date;
  applicants: number;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  candidateName: string;
  candidateEmail: string;
  coverLetter?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: Date;
}
