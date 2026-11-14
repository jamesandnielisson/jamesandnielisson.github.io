# CLAUDE.md — project handbook (read first, update last)

Personal "about us" website for **James & Nielisson**. Plain HTML/CSS/JS, no build step, no dependencies.
Hosted on GitHub Pages from `main` / root at **https://jamesandnielisson.github.io/** → remote
`https://github.com/jamesandnielisson/jamesandnielisson.github.io.git` (repo renamed from `aboutus` on 2026-10-24; the old
`/aboutus/` URL no longer works). The local folder is still named `aboutus`, which doesn't matter.
The owner is not a developer: `README.md` is the owner-facing guide (keep it in sync when behaviour changes).

## Working rules for Claude
1. **Start of every task:** read this file (auto-loaded), then only the files the task touches. Don't re-explore the whole repo.
2. **End of every task that changes files:** add an entry to the **Change log** below (newest first) and update
   **Open items** / **Architecture notes** if anything changed. Keep entries short (what + which files + why).
3. Content changes go in `js/content.js` only. Layout/logic changes go in `main.js` / `feed.js` / `styles.css`.
4. Match the existing style: ES5 IIFEs (`var`, `function`, no modules/arrow functions), the `el()` / `setText()` /
   `image()` helpers, BEM-ish CSS classes (`block__elem`, `is-open`, `is-visible`), colours via `:root` tokens.
5. Anything added to `index.html` that also exists on `feed.html` (header/menu, footer) must be mirrored in both,
   and the JS for it lives in both `main.js` and `feed.js` (they are not shared).
6. Test by opening `index.html` / `feed.html` directly in a browser (`file://` works; YouTube/Vimeo embeds won't).
7. Never commit or push unless explicitly asked, and don't offer to; the owner does git themselves.
8. All site URLs are relative (no leading `/`), so the site works both at `/aboutus/` and at a domain root.

## File map
| File | Role |
|---|---|
| `index.html` | Home page skeleton (sections: `#home`, video, `#our-story`, `#meet`, `#journey`, `#albums`, `#feed`, closing, `#contact`, footer). Empty elements with ids filled by JS. Backgrounds alternate: video tint → story white → meet tint → journey white → albums tint → feed white → closing tint → contact white. The "Back to the top" button (`#closing-button`) now sits at the bottom of `#contact`. |
| `feed.html` | "Our Feed" page (all posts, Instagram-style grid + post viewer). Same header/menu as home. |
| `js/content.js` | `window.SITE_CONTENT` — **all text, image paths, albums, video, feed posts**. Sections labelled `SECTION 1 … 6`. `PLACEHOLDER` marks unwritten text. |
| `js/feed-posts.js` | Normalises `SITE_CONTENT.feed.posts` → `window.FEED_POSTS` (sorted newest first, `id`, `dateText` en-GB, local-time date parsing). Used by both pages. |
| `js/main.js` | Builds the home page from content: hero (+ "latest feed post" peek card), video, story, albums + lightbox, feed preview, closing, menu/scroll-spy, reveal-on-scroll. |
| `js/feed.js` | Builds `feed.html`: profile header, grid, post viewer, menu toggle. |
| `css/styles.css` | All styles (~820 lines). Tokens in `:root` at top (colours, fonts, radius, shadows, `--header-h`). |
| `assets/images/{hero,story,albums/<name>,closing}` | Resized site images (≤1600 px). Album folders (5, fused 2026-11-11): life-together, family-friends, holidays-celebrations, travel-nature, everyday-animals. Also `meet/` (avatars), `feed/`. |
| `assets/images/OurPhotos/` | Owner's full-size originals (~180 MB). **Not used by the site.** Source for new resized images. |
| `assets/videos/OurIntro.mp4` (+ `poster.jpg`) | Intro video, ~90 MB. |
| `assets/videos/Our_Vacation_2023-2024_Brazil.mp4` | Feed video post, ~13 MB. |

Script load order on both pages: `content.js` → `feed-posts.js` → `main.js` | `feed.js`.

## Architecture notes / gotchas
- **No repeated images** (owner rule, 2026-11-11): each photo appears once across hero/story/meet/albums/feed/closing
  (feed avatar = hero photo is the only exception). Feed photos live in `assets/images/feed/`, not borrowed from albums.
  A dHash check (PowerShell System.Drawing, 9x8 grayscale) catches near-duplicates that file hashes miss.
- Album photos: `folder` + `photos: ["a.jpg", {file, caption}]`; optional `cover`. First photo = cover by default.
- Feed post shape: `{ image?, video?, alt, date: "YYYY-MM-DD", place?, text: string|string[], id? }` — needs `image` or `video`
  (both = image is the video's poster). `FEED_POSTS[i].src` is the image ("" for video-only), `.video` the mp4. Thumbnails go
  through `postThumb()` (in both `main.js` and `feed.js`): image, else a muted `<video src="…#t=0.1">` first frame; video tiles get
  `playBadge()` (`.feed-tile__play`). The post dialog has `#post-img` + `#post-video` (toggled via `hidden`; `stopVideo()` on
  change/close; swipe and arrow keys ignored when the target is the video). Links use `feed.html#<id>` (id from video/image filename). `feed.previewCount` (6), `feed.showLatestOnHome`, `feed.latestLabel`.
- Menu labels come from `SITE_CONTENT.menu` via `[data-menu]` attributes; adding a menu item = add `<li>` in **both** HTML files + a key in `menu`.
- Section numbering in comments (`5b` = feed, `6` = closing) was kept after "5. More About Us" was removed — gaps are intentional, not missing code.
- Node is now installed (v26, seen 2026-11-04): `node --check js/*.js` syntax-checks. The Chrome extension can't open
  `file://` pages, but a tiny Node static server on 127.0.0.1 works for previews. No Python/ffmpeg.
- Menu has 7 links, so it folds into the ☰ button below **1100px** (was 880px). Scroll-spy forces the last link (Contact) active at the page bottom.
- Content shapes: `meet.people[] = { name, age, role, image?, details: [{label,text}], quote?: {label,text,by} }`, `meet.together`;
  `journey = { facts: [{label,value,note?}], notes: [{title,text}], lookingFor: {heading,intro,items:[{title,text}]} }`;
  `contact = { heading, text, email, emailText, phone, links: [{label,url}] }` (empty values hide their line).
- Story chapter `image: { src, alt, fit? }` — `fit: "whole"` disables the 4:5 (desktop) / 4:3 (mobile) cover crop.
- Resizing images without Python: PowerShell `System.Drawing` works (rotate by EXIF tag 274 first).
- `el()` sets every prop with `setAttribute`, so never pass `null`/`undefined` values (they become the string "null").
- GitHub Pages is case-sensitive: paths in `content.js` must match filenames exactly.
- File size limits: GitHub rejects files >100 MB; the web uploader caps at 25 MB.

## Open items / known issues
- [ ] Still `PLACEHOLDER` in `content.js`: closing text, example feed posts.
- [ ] `assets/images/OurPhotos/` (~180 MB of originals, incl. a `.HEIC` and a `.MOV`) **is committed to git**, although the README says to leave it out (it publishes full-size originals). Consider a `.gitignore` + removing it from the repo — ask the owner first.
- [ ] `OurIntro.mp4` is ~90 MB: under GitHub's 100 MB limit but slow for visitors; compressing it (HandBrake) would help.
- [ ] Feed: 6 real posts (texts drafted by Claude, owner to check) + Brazil video. `IMG_2425.MOV` in `OurPhotos/2026-11/` not used (no ffmpeg to convert/preview).
- [ ] `closing-2.jpg` and `story/who-we-are-christmas.jpg` are near-identical shots of the same Christmas-tree selfie; owner said keep home photos, so left as is — ask if they want a different closing photo.
- [ ] Brazil video post: date set to 2026-10-24 (so it shows first) and text is a placeholder — owner to confirm/replace. Could get a cover `image:`.
- [ ] Contact form not yet tested live (fetch to Formspree fails on `file://` previews? it should work, but verify the first submission / Formspree confirmation on the live site).
- [ ] Video-post support not yet checked in a real browser (owner to verify, incl. on a phone).

## Change log (newest first)
- **2026-11-14 (contact form)** — Formspree form (`xyewkval`) replaces the email button in the Contact box. Config in
  `contact.form` (`content.js`); `buildContactForm()` in `main.js` posts via `fetch` (Accept: application/json, no library) with
  plain action/method fallback, `_gotcha` honeypot, `_subject`; status line `.contact-form__status.is-success/is-error`.
  Email address only shown when `form.orText` is set, or when `form.endpoint` is empty. `.contact-form*` CSS. README updated.
- **2026-11-14 (albums)** — Owner removals: family-meal + evening-walk (Family & Friends), concert-night (Holidays),
  forest-vines + rainforest-path + snowy-lookout (Travel & Nature), reading-corner (animals album); image files deleted.
  "Everyday Life & Animal Friends" renamed "Animal Friends" (description no longer mentions everyday life; folder still
  `everyday-animals/`). beach-clean-up.jpg moved to `travel-nature/` (last photo of Travel & Nature). `content.js` only.
  Also removed the gym feed post (paris-workout.jpg, deleted); 6 photo posts + Brazil video remain.
- **2026-11-11 (albums)** — Fused 8 albums into 5 and removed repeats. Holidays & Celebrations (= winter-holidays + celebrations),
  Travel & Nature (= travel + nature), Everyday Life & Animal Friends (= everyday-moments + animals); folders renamed/merged to match.
  Deleted 8 duplicates (album copies of hero/closing/story photos, porch-with-pets twin, giant-fruit twin). Removed the 12
  placeholder feed posts (all reused album photos); buttes-chaumont / toronto-christmas / praia-do-amor moved to `feed/` (feed-only).
  Only `content.js` + image folders + docs touched. (Pre-change content.js was backed up in the session scratchpad only; use git.)
- **2026-11-11 (later)** — Owner wanted the home page kept simple: removed the surrogate callout box and the top `.hero-flag` link
  entirely (content, HTML, JS, CSS, README). Instead added one sentence to the end of the first `hero.intro` paragraph:
  "We're excited to connect with a surrogate to continue our journey to build our family."
- **2026-11-11** — Owner requests: (1) "We're looking for a surrogate" box in the hero (`hero.callout` in `content.js`;
  `#hero-callout` in `index.html`; render code in `main.js`, which also inserts a matching `.hero-flag` link above the eyebrow so
  it's seen above the fold; `.callout*`, `.hero-flag`, `.button--clay`, `heartbeat` keyframes in `styles.css`). (2) Removed
  "Sexual orientation" from both Meet Us cards; quote byline now just "Vitoria". (3) Closing signature without "With warmth,".
  (4) Contact email → jamesonAU2026@gmail.com. (5) Meet Us avatars: `assets/images/meet/{james,nielisson}.jpg` (400px face crops
  from a sunset selfie; avatar now 84px with a white/sage ring). (6) 20 new photos from `newphotos/` resized (screenshots cropped):
  new album "Christmas & Winter Holidays" (`albums/winter-holidays/`, + christmas-tree/dinner moved from `celebrations/`), new
  "Celebrations" album (the folder existed but was never wired up), additions to life-together / family-friends / travel, and
  7 real dated feed posts (`assets/images/feed/` now exists). Owner asked to keep hero/meet/journey photos unchanged (story too).
  Originals archived to `OurPhotos/2026-11/` (incl. `IMG_2425.MOV`, unused); `IMG_3097.JPG` was a duplicate of `dinner-out.jpg`
  and deleted; 4 unused old story images deleted. README updated. Checked in Chrome via local server.
- **2026-11-08** — New photos for all four story chapters (from `OurPhotos/New/`, resized ≤1600 px with EXIF rotation via
  PowerShell System.Drawing) → `assets/images/story/{who-we-are-christmas,how-we-met-paris,our-life-paris,what-matters-christmas-dinner}.jpg`.
  Added optional `image.fit: "whole"` for story chapters (`main.js` → `.chapter__media--whole`, `styles.css`: no 4:5 crop),
  used for the wide Paris collage and the landscape Christmas-dinner photo. Old story images left in place (unused). README updated.
- **2026-11-04** — Removed the "Together" paragraph under the Meet Us cards (owner request): deleted `meet.together` from
  `content.js`. The render code in `main.js` stays and simply hides `#meet-together` when it's missing.
- **2026-11-04** — Added the owner's surrogacy-profile text: hero intro + all four story chapters filled in; new **Meet Us**
  (`#meet`, profile cards for James & Nielisson), **Our Surrogacy Journey** (`#journey`: fact cards, embryos/finance notes,
  "What we're looking for" incl. views on termination) and **Contact** box (`#contact`, end of page). Touched `content.js`
  (`meet`, `journey`, `contact`, `menu.meet/journey/contact`), `index.html`, `feed.html` (menu), `main.js` (render code,
  scroll-spy bottom fix), `styles.css` (new blocks, menu breakpoint 1100px), README. Checked in Chrome via local server.
- **2026-10-24** — Livelier "Latest from our feed" card (CSS only): pulsing green dot (`--live` token, `live-ping`/`live-glow`),
  rotating conic-gradient story ring on the thumbnail (`spin`, faster on hover), green glow on hover. Looping animations are
  explicitly disabled under `prefers-reduced-motion` (the global .01ms rule would make them flicker).
- **2026-10-24** — Repo renamed on GitHub to `jamesandnielisson.github.io` (site now at the root URL); local `origin` updated to match.
- **2026-10-24** — Feed posts can now be videos (`video:` field; optional `image:` = cover). Touched `feed-posts.js`, `main.js`
  (`postThumb`, `playBadge`, feed tiles + hero peek), `feed.js` (tiles, dialog video, `stopVideo`), `feed.html` (`#post-video`),
  `styles.css` (video sizing, `.feed-tile__play`), `content.js` (docs + first video post: Brazil vacation), README.
- **2026-10-24** — Removed the "More About Us" section entirely (owner request): section markup + menu link on both pages, `SITE_CONTENT.more` and `menu.more`, the cards code and `ICONS`/`icon()` in `main.js`, `.more*` CSS, the `.feed-preview { padding-top: 0 }` rule that depended on it, README docs, and `assets/images/more/` (2 photos). Recoverable from commit `3b38ebb`.
- **2026-10-24** — Added this `CLAUDE.md` handbook (project map, rules, open items, change log) so future sessions can resume quickly.
- **2026-10-24** (commit `de09c44` "maj") — Feed page now uses the full site menu (hamburger toggle in `feed.js`) instead of a "Back to home" link; added "Our Feed" to the menu on both pages (`menu.feed`); added a "Latest from our feed" peek card in the hero (`#hero-peek`, `main.js`, styles); removed `feed.page.backText`.
- **2026-10-24** (commit `9d20070` "all files") — Initial site: home page with hero, video, story, albums + lightbox, more-cards, feed preview, closing; `feed.html`; README guide.
