import { defineCollection } from 'astro:content';
import { z } from "astro/zod";

const postCollection = defineCollection({
  schema: ({ image }) =>  z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: image(),

    img_alt: z.string().optional(),
    description: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  external: z.boolean().optional(),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    excerpt: z.string(),
    category: z.string().optional(),
    status: z.string().optional(),
    releaseStage: z.enum(['released', 'development', 'labs']).optional(),
    highlight: z.boolean().optional(),
    order: z.number().optional(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    trailer: z
      .object({
        youtubeId: z.string(),
        title: z.string().optional(),
      })
      .optional(),
    role: z.string().optional(),
    platforms: z.array(z.string()).optional(),
    techStack: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    links: z.array(linkSchema).optional(),
  }),
});

const updates = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      publishDate: z.date(),
      draft: z.boolean().default(true),
      project: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
      cover: z.object({ src: image(), alt: z.string().min(1) }).optional(),
    }),
});

export const collections = {
  post: postCollection,
  projects,
  updates,
};