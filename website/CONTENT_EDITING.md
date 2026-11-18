# Editing FoVR content

The site remains an Astro site. Content changes are rendered at build time; this is not a new hosted CMS or a live database.

## Experiences and Labs

Edit Markdown entries in `src/content/projects/`. The existing Astro collection schema is in `src/content/config.ts`.

- `title`, `tagline`, `excerpt`, `cover`, `status` and `links` control the experience cards and pages.
- `order` controls catalogue sorting. Homepage selection is explicit in `src/data/site/home.json`: `featured.slug` selects the upcoming feature and `released.slugs` selects the released cards. Their titles, images, descriptions, status and store links always come from the collection.
- Set `releaseStage` to `released`, `development` or `labs` to choose the catalogue section. Existing entries without it use `category: FoVR Labs` for Labs, a status beginning with `Live` for Play now, and otherwise In development. Only released cards show store buttons.
- Markdown below the frontmatter supplies the individual experience page content.

No project records, store links, press kits or privacy pages have been removed by the positioning update.

## Studio page copy

Edit the JSON in `src/data/site/` without changing the Astro layouts:

- `home.json`: homepage headings, paragraphs, featured/released slugs, feature and Labs teaser copy, and metadata. `reel.youtubeId` and `reel.enabled` control the preserved background reel.
- `about.json`: studio story, founder bio and metadata.
- `contact.json`: contact/support copy and metadata.
- `experiences.json`: experience listing copy and metadata. The cards still come from the project collection.
- `legacy-services.json`: a neutral signpost at the existing `/services` URL, retained for old bookmarks. It no longer advertises client services, is marked noindex and is excluded from the sitemap.

Keep the existing JSON keys when editing text; those keys are referenced by the layouts. The experience group list can be reordered; keep the group IDs if they are linked in navigation.

Navigation and footer links remain editable in `src/navigation.js`. Site-wide SEO defaults remain in `src/config.yaml`; organisation structured data is in `src/components/common/StructuredData.astro`.

The contact form action and submission behaviour are unchanged. Its field labels and topic choices are in `src/components/widgets/Contact.astro`.

Project pages link to the contact form with the project slug. The optional Experience field uses the corresponding title from the project collection; unknown slugs leave it as General enquiry. The existing contact endpoint receives the title only when an experience is selected.

## Preview and publish

From `website/`, run `npm run dev` to preview content edits, then `npm run build && npm run test:content` to validate the production output. Changes become public only through the site's normal deployment process. This positioning work is prepared on a review branch; it must not be merged or released without approval.

## Studio updates

Copy `src/content/updates/example-update.md` to a new file with a kebab-case name, for example `diamond-easy-first-look.md`. Markdown and MDX are supported. The filename is the public post slug; keep it stable after publishing so shared links still work.

- Set `title`, a one-sentence `description` and `publishDate` (YYYY-MM-DD). Posts are ordered newest first.
- Write the post below the frontmatter. Start with a second-level heading if you need one; the page already adds the title.
- Optional: add `project: diamond-easy` (or another existing project slug) to link back to the experience. To add cover art, set `cover.src` to a local image path relative to the post file (for example `../../assets/images/your-cover.jpg`) and `cover.alt` to a short description of the image.
- Leave `draft: true` while writing (omitting the field also keeps the post off the built site). Drafts don't get a public page and don't appear in the listing, RSS feed or sitemap. Set `draft: false` when a post is ready, then use the normal review and deployment process. The date orders posts; it does not schedule publication. Drafts can still be read in the repository by anyone with access, so do not commit private notes.

Preview the page at `/updates/` and published posts at `/updates/<slug>/`. Edit the listing intro and empty state in `src/data/site/updates.json`. The feed is at `/updates/rss.xml`.
