export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  imageUrls: string[];
  datasheetUrl?: string;
  relatedSectors: string[]; // Array of sector slugs
  isFeatured: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  content: string;
}

export interface Sector {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageHint: string;
  challenges: string;
  solutionsContent: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  clientName?: string;
  sector: string; // Sector slug
  coverImage: string;
  imageHint: string;
  challenge: string;
  solution: string;
  result: string;
  usedProducts: string[]; // Array of product slugs
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  publishDate: string; // ISO string date
  content: string;
  tags: string[];
  coverImage: string;
  imageHint: string;
  summary: string;
}
