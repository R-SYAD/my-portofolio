export interface ExperienceItem {
  id: string;
  org: string;
  role: string;
  location: string;
  period: string; // e.g., "Aug 2025" or "Mar 2024 – Apr 2024"
  bullets: string[];
  tags?: string[]; // keywords/skills
  internship?: boolean; // true jika pengalaman berupa magang
}
