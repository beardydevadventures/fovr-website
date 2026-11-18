import type { CollectionEntry } from 'astro:content';

export type Experience = CollectionEntry<'projects'>['data'] & { slug: string };

// Existing project entries remain valid. Set releaseStage explicitly for new entries.
export const releaseStage = (project: Experience) =>
  project.releaseStage ??
  (project.category === 'FoVR Labs'
    ? 'labs'
    : project.status?.toLowerCase().startsWith('live')
      ? 'released'
      : 'development');

export const storeLinks = (project: Experience) =>
  (project.links ?? []).filter((link) => {
    try {
      const host = new URL(link.href).hostname;
      return host === 'store.steampowered.com' || host === 'meta.com' || host === 'www.meta.com';
    } catch {
      return false;
    }
  });
