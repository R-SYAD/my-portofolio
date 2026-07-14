export type Tech =
  | 'React'
  | 'TypeScript'
  | 'Tailwind'
  | 'Node.js'
  | 'Express'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Next.js'
  | 'Vite'
  | 'Zustand'
  | 'Redux'
  | 'Framer Motion'
  | 'GraphQL'
  | 'Prisma'
  | 'Supabase'
  | 'Firebase'
  | 'Bootstrap'
  | 'Jetpack Compose'
  | 'PHP'
  | 'Laravel'
  | 'MySQL'
  | 'Flutter'
  | 'Dart'
  | 'QR Code'
  | 'JavaScript'
  | 'Python'
  | 'Streamlit'
  | 'Next JS'
  | 'Power BI'
  | 'Pentaho'
  | 'Kotlin'
  | 'Android'
  | 'REST API'
  | 'Face Recognition';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  year: number;
  cover: string; // public image path or data URL
  repo?: string;
  detail?: string;
  gallery?: {
    folder: string; // folder name under /images/Project
    files: string[]; // file names within the folder
  };
  tech: Tech[];
  highlights: string[];
}