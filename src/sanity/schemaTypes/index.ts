import { defineField, defineType } from "sanity";

const imageField = (name = "image", title = "Image") =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
  });

const service = defineType({
  name: "service",
  title: "Service",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    imageField(),
  ],
  preview: { select: { title: "title", media: "image" } },
});

const metric = defineType({
  name: "metric",
  title: "Metric",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Value", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "value" } },
});

const processStep = defineType({
  name: "processStep",
  title: "Process step",
  type: "object",
  fields: [
    defineField({ name: "number", title: "Number", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "number" } },
});

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "metric", title: "Result metric", type: "string" }),
    defineField({ name: "metricDescription", title: "Metric description", type: "string" }),
    imageField(),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});

const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
  ],
  preview: { select: { title: "question" } },
});

const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing plan",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "priceUnit", title: "Price unit", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "name", subtitle: "price" } },
});

const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    imageField(),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});

const award = defineType({
  name: "award",
  title: "Award",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "year", title: "Year", type: "string" }),
  ],
  preview: { select: { title: "name", subtitle: "year" } },
});

const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroDescription", title: "Hero description", type: "text", rows: 3 }),
    defineField({ name: "metrics", title: "Metrics", type: "array", of: [{ type: "metric" }] }),
    defineField({ name: "services", title: "Services", type: "array", of: [{ type: "service" }] }),
    defineField({ name: "processSteps", title: "Process steps", type: "array", of: [{ type: "processStep" }] }),
    defineField({ name: "pricingPlans", title: "Pricing plans", type: "array", of: [{ type: "pricingPlan" }] }),
    defineField({ name: "testimonials", title: "Testimonials", type: "array", of: [{ type: "testimonial" }] }),
    defineField({ name: "faqs", title: "Frequently asked questions", type: "array", of: [{ type: "faq" }] }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "string" }),
    defineField({ name: "storyTitle", title: "Story title", type: "string" }),
    defineField({ name: "storyBody", title: "Story", type: "text", rows: 8 }),
    defineField({ name: "teamMembers", title: "Team members", type: "array", of: [{ type: "teamMember" }] }),
    defineField({ name: "awards", title: "Awards", type: "array", of: [{ type: "award" }] }),
  ],
  preview: { prepare: () => ({ title: "About page" }) },
});

const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{
        type: "string",
        options: {
          list: [
            "Fintech",
            "SaaS",
            "Motion Design",
            "Branding",
            "Web Design",
            "Product Design",
            "UI Design",
            "UX Design",
          ],
        },
      }],
      options: { layout: "tags" },
    }),
    imageField("cover", "Cover image"),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "description", title: "Project result", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "slug.current", media: "cover" } },
});

const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    imageField("cover", "Cover image"),
    defineField({ name: "publishedAt", title: "Publish date", type: "datetime" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  orderings: [
    { title: "Publish date, newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "cover" } },
});

export const schemaTypes = [
  homePage,
  aboutPage,
  project,
  blogPost,
  service,
  metric,
  processStep,
  testimonial,
  faq,
  pricingPlan,
  teamMember,
  award,
];
