import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim();
const dataset = import.meta.env.VITE_SANITY_DATASET?.trim() || "production";

export const sanityConfigured = Boolean(projectId);

export const sanityClient = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2025-03-01",
      useCdn: true,
    })
  : null;

export const homePageQuery = `*[_type == "homePage"][0]{
  heroTitle,
  heroDescription,
  metrics[]{value, title, description},
  services[]{title, description, "imageUrl": image.asset->url},
  processSteps[]{number, title, description},
  pricingPlans[]{name, description, price, priceUnit, label, features},
  testimonials[]{quote, name, role, metric, metricDescription, "imageUrl": image.asset->url},
  faqs[]{question, answer}
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  heroTitle,
  heroSubtitle,
  storyTitle,
  storyBody,
  teamMembers[]{name, role, "imageUrl": image.asset->url},
  awards[]{name, description, year}
}`;

export const projectsQuery = `*[_type == "project"]|order(order asc){
  title,
  "slug": slug.current,
  categories,
  description,
  "coverUrl": cover.asset->url,
  "gallery": gallery[].asset->url,
  order
}`;

export const projectDetailQuery = `*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  categories,
  description,
  "coverUrl": cover.asset->url,
  "gallery": gallery[].asset->url,
  order
}`;

export const blogPostsQuery = `*[_type == "blogPost" && defined(publishedAt)]|order(publishedAt desc){
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "coverUrl": cover.asset->url
}`;

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug && defined(publishedAt)][0]{
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "coverUrl": cover.asset->url,
  body
}`;
