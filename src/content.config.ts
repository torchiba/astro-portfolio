import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work experience collection
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    logo: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

// Education collection
const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    logo: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const bullet = z.object({
  text: z.string().min(2).max(140),
  impact: z.string().optional(),
  metric: z.string().optional(),
  link: z.string().url().optional(),
});
// Projects collection
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    role: z.string().optional(),
    companyAlias: z.string().optional(),
    engagement: z.string().optional(),
    domain: z.string().optional(),
    skills: z.array(z.string()),
    responsibilities: z.array(bullet).default([]).optional(),
    highlights: z.array(bullet).default([]).optional()
  }),
});

// Hackathons collection
const hackathons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hackathons" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    logo: z.string().optional(),
    sourceLink: z.string().url().optional(),
  }),
});

// Blog collection
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// About collection
const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    photo: z.string().optional(),
  }),
});

export const collections = {
  work,
  education,
  projects,
  hackathons,
  blog,
  about,
};
