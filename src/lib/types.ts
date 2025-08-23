export interface Question {
  _id?: string;
  title: string;
  category: 'javascript' | 'react' | 'nodejs' | 'system-design' | 'algorithms' | 'databases';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  answer: string;
  tags: string[];
  createdAt: string;
}