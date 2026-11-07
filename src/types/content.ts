import type { PortableTextBlock } from "@portabletext/react";

export type ImageValue = string | { asset?: { url?: string } };

export interface Metric {
  value: string;
  title: string;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  imageUrl?: ImageValue;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  metric?: string;
  metricDescription?: string;
  imageUrl?: ImageValue;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price?: string;
  priceUnit?: string;
  label?: string;
  features: string[];
}

export interface HomePageContent {
  heroTitle: string;
  heroDescription: string;
  metrics: Metric[];
  services: Service[];
  processSteps: ProcessStep[];
  pricingPlans: PricingPlan[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl?: ImageValue;
}

export interface Award {
  name: string;
  description: string;
  year: string;
}

export interface AboutPageContent {
  heroTitle: string;
  heroSubtitle: string;
  storyTitle: string;
  storyBody: string;
  teamMembers: TeamMember[];
  awards: Award[];
}

export interface Project {
  title: string;
  slug: string;
  categories: string[];
  description?: string;
  gallery?: ImageValue[];
  coverUrl?: ImageValue;
  order?: number;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverUrl?: ImageValue;
  body?: PortableTextBlock[];
}

export function imageUrl(image?: ImageValue): string | undefined {
  if (!image) return undefined;
  return typeof image === "string" ? image : image.asset?.url;
}
