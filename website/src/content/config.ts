import { defineCollection, z } from 'astro:content';

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
  projects,
};
