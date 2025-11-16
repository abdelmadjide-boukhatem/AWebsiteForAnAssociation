export interface CharityUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  joinedDate: Date;
  bio?: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  imageUrl?: string;
  category: 'health' | 'social' | 'environment';
  likes: number;
  createdAt: Date;
}

export interface Initiative {
  id: string;
  userId: string;
  userName: string;
  title: string;
  description: string;
  category: 'health' | 'social' | 'environment';
  goal?: string;
  participants: number;
  imageUrl?: string;
  createdAt: Date;
  status: 'active' | 'completed';
}

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Test {
  id: string;
  title: string;
  description: string;
  category: 'health' | 'social' | 'environment';
  questions: TestQuestion[];
  icon: string;
}

export interface TestResult {
  testId: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
}
