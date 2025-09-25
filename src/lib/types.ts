export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  partNumber?: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  specs?: { [key: string]: string };
  imageUrls: string[];
  datasheetUrl?: string;
  technicalDrawingUrl?: string;
  relatedSectors: string[]; // Array of sector slugs
  isFeatured: boolean;
  warranty?: string;
  notes?: string;
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
  icon: React.ComponentType<{ className?: string }>;
  imageUrls: string[];
  imageHint: string;
  challenges: string;
  solutionsContent: string;
  description: string;
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
