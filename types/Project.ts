export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  videoUrl?: string;
  videoEmbed?: string;
  tags: string[];
  featured: boolean;
  client: string;
  year: number;
  services: string[];
}