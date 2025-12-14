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

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    excerpt: z.string(),
    category: z.string().optional(),
    status: z.string().optional(),
    highlight: z.boolean().optional(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          icon: z.string().optional(),
          external: z.boolean().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  post: postCollection,
  projects,
};
