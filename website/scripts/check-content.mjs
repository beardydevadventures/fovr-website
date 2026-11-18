import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const home = await read('dist/index.html');
const catalogue = await read('dist/projects/index.html');
const legacy = await read('dist/services/index.html');
const sitemap = await read('dist/sitemap-0.xml');
const copy = JSON.parse(await read('src/data/site/home.json'));
const catalogueCopy = JSON.parse(await read('src/data/site/experiences.json'));

assert(home.includes(copy.text.we_make_experiences), 'Homepage must render editable headline');
assert(home.includes(`/embed/${copy.reel.youtubeId}?`), 'Homepage must render configured reel');
assert(home.includes('Diamond Easy</h2>') && home.includes('Play now</h2>'));
assert(home.indexOf('Diamond Easy</h2>') < home.indexOf('Play now</h2>'), 'Upcoming feature must precede releases');
assert(!home.includes('What we create') && !home.includes('How FoVR works'));
assert(!catalogue.includes('studio projects</span>') && catalogue.includes('/projects/#in-development'));
assert(home.includes(copy.featured.eyebrow), 'Diamond Easy must be labelled upcoming');
assert(!home.includes('experiences/diamond-easy/1007485185105718'), 'Upcoming feature must not imply a store release');
for (const slug of copy.released.slugs) assert(home.includes(`/projects/${slug}`));
for (const group of catalogueCopy.groups) assert(catalogue.includes(`id="${group.id}"`));
const playNow = catalogue.slice(catalogue.indexOf('id="play-now"'), catalogue.indexOf('id="in-development"'));
const development = catalogue.slice(catalogue.indexOf('id="in-development"'), catalogue.indexOf('id="labs"'));
assert(playNow.includes('valve-tutorial') && playNow.includes('store.steampowered.com'));
assert(development.includes('Diamond Easy') && !development.includes('www.meta.com/en-gb/experiences/diamond-easy'));
assert(legacy.includes('noindex') && !sitemap.includes('/services/'));
const contact = await read('dist/contact/index.html');
assert(contact.includes('Player support') && !contact.includes('name="company"') && contact.includes('https://formspree.io/f/xnneraoa'));
const playerPages = ['diamond-easy', 'smash-room', 'forge-of-elements'].map((slug) => `projects/${slug}/index.html`);
for (const route of playerPages) {
  const page = await read(`dist/${route}`);
  assert(page.includes('href="#trailer"') && page.includes('id="trailer"') && page.includes('View on Meta Quest'));
  assert(page.indexOf('id="trailer"') < page.indexOf('Development details'));
}
for (const route of ['index.html', 'about/index.html', 'contact/index.html', 'projects/index.html', 'services/index.html', ...playerPages]) {
  const html = await read(`dist/${route}`);
  assert(!html.includes('"@type":"Service"'));
  for (const [, href] of html.matchAll(/href="(\/[^"?]*)"/g)) {
    if (href.startsWith('//')) continue;
    const [pathname, anchor] = href.split('#');
    let target;
    try { target = await read(`dist${pathname}`); }
    catch { target = await read(`dist${pathname.replace(/\/$/, '')}/index.html`); }
    if (anchor) assert(target.includes(`id="${anchor}"`), `Missing anchor ${href}`);
  }
}
console.log('Content smoke checks passed: editable copy/reel, feature order, release groups, store links, legacy sitemap exclusion and internal links.');
