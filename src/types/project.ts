export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  location: string;
  year: number;
  partner?: string;
  objectives: string[];
  activities: string[];
  outcomes: string[];
}

