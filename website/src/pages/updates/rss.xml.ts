import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import copy from '@/data/site/updates.json';
import { getPublishedUpdates } from '@/utils/updates';

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('Configure the site URL before generating the Updates feed.');

  return rss({
    title: 'FoVR Interactive Updates',
    description: copy.metadata.description,
    site,
    trailingSlash: true,
    items: (await getPublishedUpdates()).map(({ slug, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishDate,
      link: `/updates/${slug}/`,
    })),
  });
};
