export interface Activity {
  id: string;
  title: string;
  description: string;
  category: 'camping' | 'training' | 'environment' | 'community' | 'education';
  date: Date;
  location: string;
  imageUrl?: string;
  participants?: number;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  joinDate: Date;
  skills: string[];
  contributions: string[];
  email?: string;
  phone?: string;
}

export interface EducationalResource {
  id: string;
  title: string;
  description: string;
  subject: string;
  level: 'bac' | 'university';
  fileType: 'pdf' | 'video' | 'article' | 'link';
  url?: string;
  downloadCount?: number;
}

export interface UniversityInfo {
  id: string;
  name: string;
  specialty: string;
  requiredAverage: string;
  location: string;
  description: string;
  type: 'science' | 'letters' | 'engineering' | 'medicine' | 'other';
}

export interface ScoutValue {
  icon: string;
  title: string;
  description: string;
}
