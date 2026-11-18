import { getCollection } from 'astro:content';

const dateFormatter = new Intl.DateTimeFormat('en-AU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatUpdateDate = (date: Date) => dateFormatter.format(date);

export const getPublishedUpdates = async () =>
  (await getCollection('updates', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime() || a.slug.localeCompare(b.slug)
  );
