export interface CourseItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  vehicleType: string;
  description: string;
  features: string[];
  popularFor: string;
  estimatedLessons: string;
  priceTag?: string;
  badge?: string;
  accentColor: string;
}

export interface BranchLocation {
  id: string;
  area: string;
  address: string;
  suburb: string;
  city: string;
}

export interface TestimonialItem {
  id: string;
  learnerName: string;
  licenseCode: string;
  quote: string;
  rating: number;
  location: string;
  avatarUrl?: string;
  dateTag: string;
}

export interface BrandingImage {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'fleet' | 'branding' | 'instruction';
}

export interface LearnerGalleryItem {
  id: string;
  url: string;
  learnerName: string;
  licenseCode: string;
  quote: string;
  dateTag: string;
}

export interface K53TestTip {
  id: string;
  title: string;
  category: 'Yard Test' | 'Road Test' | 'Pre-Trip Inspection';
  steps: string[];
  proTip: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
