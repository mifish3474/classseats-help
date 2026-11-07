# ClassSeats Help — Onboarding Video Integration Specification

## Purpose

This document is the technical handoff for continuing the ClassSeats onboarding-video integration in another Codex chat or on another machine.

The intended experience is:

- Long-form narrated walkthroughs are uploaded to YouTube as **Unlisted** videos.
- The help site embeds them with YouTube's privacy-enhanced player.
- Each video appears in the help article most closely related to its topic.
- Existing written instructions, screenshots, and short action clips remain in place.
- Large source MP4 files must not be committed to this repository.

## Repository

- GitHub repository: `https://github.com/mifish3474/classseats-help.git`
- Default branch: `main`
- Site type: static HTML hosted on Cloudflare Pages
- Site source: `public/`
- Shared styles: `public/_shared/help.css`
- Shared JavaScript: `public/_shared/help.js`
- Search indexer: Pagefind 1.4
- Search build command: `npm run build`

The project does not use a framework or a Markdown-to-HTML pipeline. Help articles are edited directly as HTML files.

## Current Baseline

As of November 3, 2026, the pilot implementation is committed and synced:

- Commit: `a6b7542`
- Commit message: `added test tutorial video`
- Pilot video: **Interface Orientation**
- YouTube watch URL: `https://www.youtube.com/watch?v=LPgMnCBdPO4`
- YouTube video ID: `LPgMnCBdPO4`
- Channel: `ClassSeats`

The pilot added:

- `public/getting-started/interface-orientation/index.html`
- A link in `public/getting-started/index.html`
- Responsive YouTube embed styles in `public/_shared/help.css`

The pilot was tested successfully at desktop and responsive widths. The YouTube player loaded correctly through the privacy-enhanced domain.

## Hosting Decision

Use **YouTube Unlisted** for the narrated onboarding videos.

Reasons:

- No video-hosting cost
- Adaptive playback quality
- Automatic caption generation, subject to human review
- Built-in playback controls and analytics
- No large binary files in Git
- No Cloudflare Pages asset-size conflict

Use Google Drive only as an optional archive for the original source videos. Do not use Drive as the production embed provider.

### Why the MP4 files are not stored in Git

The original collection contains 17 MP4 files totaling approximately 501.7 MiB. Nine files exceed Cloudflare Pages' 25 MiB per-file asset limit. A prior video-only Git commit was canceled and removed before it reached GitHub.

Do not recreate that commit. Do not add an onboarding-video directory containing the source MP4 files.

Relevant platform references:

- Cloudflare Pages limits: `https://developers.cloudflare.com/pages/platform/limits/`
- YouTube unlisted visibility: `https://support.google.com/youtube/answer/157177`
- YouTube privacy-enhanced embedding: `https://support.google.com/youtube/answer/171780`

## Established Embed Pattern

The shared stylesheet already defines the responsive `.video-embed` wrapper. Do not duplicate or replace that CSS on each page.

Use this HTML structure:

```html
<div class="section">
  <h2>Watch the walkthrough</h2>

  <figure class="media">
    <div class="media-frame">
      <div class="video-embed">
        <iframe
          src="https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0"
          title="ACCESSIBLE VIDEO TITLE"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <figcaption>One calm sentence describing what the walkthrough covers.</figcaption>
  </figure>
</div>
```

Requirements:

- Use `https://www.youtube-nocookie.com/embed/VIDEO_ID`.
- Keep `loading="lazy"`.
- Include a concise, descriptive iframe `title`.
- Include `allowfullscreen`.
- Do not autoplay.
- Do not loop.
- Keep the existing `.media`, `.media-frame`, and `.video-embed` structure.
- Add a useful `figcaption`.
- Do not replace detailed written instructions with a video.

## Placement Guidance

For an existing article, place the narrated video near the beginning of the article, normally immediately after the summary and before the first detailed instructional section.

The preferred order is:

1. Page title
2. Written summary
3. `Watch the walkthrough` section
4. Existing step-by-step written instructions
5. Existing screenshots and short action clips

Long narrated videos and short local MP4 demonstrations serve different purposes:

- Narrated YouTube walkthroughs provide orientation and context.
- Existing short local clips demonstrate one exact interaction.

Preserve both when both are helpful.

## Planned Video-to-Article Map

The user will upload videos gradually and provide their YouTube URLs. Extract the 11-character YouTube ID from each URL and use the established embed pattern.

| # | Video title | Original duration | Planned location | Page status |
|---:|---|---:|---|---|
| 1 | Signing In to ClassSeats | 2:21 | `public/getting-started/signing-in/index.html` | Existing article |
| 2 | Interface Orientation | 1:58 | `public/getting-started/interface-orientation/index.html` | **Pilot complete** |
| 3 | Seating Arrangements | 4:42 | `public/getting-started/creating-seating-arrangements/index.html` | Existing article |
| 4 | Importing Students — No Tags | 3:08 | `public/getting-started/adding-students/index.html` | Existing article |
| 5 | Generating Your First Group | 3:10 | `public/getting-started/grouping-students/index.html` | Existing article |
| 6 | Full Screen Mode | 1:14 | `public/grouping-students/how-do-i-use-full-screen-view/index.html` | Existing article |
| 7 | Printing Seating Charts | 1:02 | `public/seating-charts/how-do-i-print-my-seating-chart/index.html` | Existing article |
| 8 | Printing a Roster | 0:59 | `public/printing-reports/how-do-i-print-a-roster/index.html` | Existing article |
| 9 | Mobile Setup | 2:36 | `public/mobile/how-do-i-access-classseats-on-mobile/index.html` | Retired: video and browser setup became outdated when ClassSeats Companion launched as an app |
| 10 | Taking Student Pictures | 3:50 | `public/mobile/how-do-i-add-student-photos/index.html` | Existing article |
| 11 | Keep Apart and Together Groups | 2:16 | `public/grouping-students/how-do-i-keep-students-together-or-apart-in-groupings/index.html` | Existing article |
| 12 | Collecting Student Picks | 3:14 | `public/grouping-students/how-do-i-collect-student-preferences/index.html` | Existing article |
| 13 | Importing Student Picks | 3:16 | `public/grouping-students/how-do-i-enter-student-preferences/index.html` | Existing article |
| 14 | Using Student Picks in Grouping | 2:21 | `public/grouping-students/how-do-i-use-student-preferences-in-groupings/index.html` | Existing article |
| 15 | Student Connections Tab | 2:29 | `public/grouping-students/how-do-i-use-student-connections/index.html` | New article |
| 16 | Taking Attendance | 5:23 | Feature on `public/attendance-daily-notes/index.html`; link from desktop and mobile attendance articles | Landing-page treatment to design |
| 17 | Flashcards and Audio | 2:05 | `public/mobile/how-do-i-use-flashcards-to-learn-student-names/index.html` | Existing article |

### New article suggestions

For video 15, use a URL and title similar to:

- URL: `/grouping-students/how-do-i-use-student-connections/`
- H1: `How do I use the Student Connections tab?`

Before adding workflow details to a new article, inspect the video and confirm its actual terminology and scope with the user. Do not invent workflow details that are not demonstrated in the video or application.

## Per-Video Workflow

For each new YouTube link:

1. Confirm the repository is clean or identify unrelated user changes before editing.
2. Open the YouTube URL or query YouTube's oEmbed endpoint to confirm:
   - Video title
   - Video ID
   - Embedding is enabled
   - Thumbnail metadata is available
   - The footage does not reveal student names, faces, or other identifying details without appropriate permission
3. Confirm the intended article using the placement map above.
4. Inspect the existing article structure and nearby media.
5. Add one `Watch the walkthrough` section using the established embed pattern.
6. Preserve all existing instructions, screenshots, breadcrumbs, search UI, Next links, and footer content unless a new article requires them.
7. If a new article is created:
   - Copy the established article shell from a neighboring page.
   - Add `data-pagefind-body` to the `.page` wrapper.
   - Include breadcrumbs and search.
   - Link the new page from its category landing page.
   - Add a sensible Next link.
8. Run validation.
9. Preview at desktop and responsive widths.
10. Ask the user to review before committing or syncing unless they explicitly requested publication.

## YouTube Upload Guidance for the User

Recommended settings:

- Visibility: **Unlisted**
- Audience: accurately answer YouTube's audience question; do not infer on the user's behalf
- Embedding: enabled
- Title: concise and consistent with the help article
- Thumbnail: use a clear frame showing the relevant interface and a natural presenter pose
- Captions: allow YouTube to generate captions, then review names and ClassSeats terminology manually
- Playlist: optionally create a `ClassSeats Getting Started` playlist after several videos are uploaded

Unlisted videos can still be viewed and reshared by anyone with the URL. They are not access-controlled secrets.

## Validation

Run from the repository root:

```powershell
git diff --check
npm run build
```

Expected Pagefind result:

- The build discovers all HTML pages.
- Pages containing `data-pagefind-body` are indexed.
- The command exits successfully.

Pagefind writes generated files to `public/pagefind/`. That directory is not currently tracked. Keep it in place through the local preview so the search page can load `/pagefind/pagefind-ui.js` and `/pagefind/pagefind-ui.css`. After the preview, remove it if it appears as untracked output; do not include it in a commit unless the project's deployment strategy is intentionally changed. Confirm that the Cloudflare Pages deployment runs `npm run build` before publishing `public/`, since search requires the generated files in the deployed site.

After the local preview and generated-file cleanup described below, check Git state:

```powershell
git status --short
```

Only intended HTML/CSS/specification files should appear.

## Local Preview

The repository currently has no `dev` script. Serve the `public/` directory with any local static server available on the machine.

Examples:

```powershell
python -m http.server 4173 --directory public
```

or:

```powershell
npx serve public --listen 4173
```

Then open:

```text
http://127.0.0.1:4173/getting-started/
```

Pilot page:

```text
http://127.0.0.1:4173/getting-started/interface-orientation/
```

Verify:

- The page returns HTTP 200.
- The YouTube thumbnail appears.
- Playback starts only after user interaction.
- The frame stays within the article card at desktop and mobile widths.
- Breadcrumbs and search remain usable.
- The caption is readable.
- There is no horizontal page overflow.

## Accessibility and Privacy Requirements

- Keep a meaningful written summary even when a video is present.
- Use an iframe `title` that describes the video.
- Provide a visible caption below the player.
- Do not autoplay.
- Use the `youtube-nocookie.com` embed domain.
- Prefer reviewed captions in YouTube Studio.
- Do not put student-identifying information in titles, descriptions, thumbnails, or transcripts.
- Before uploading each video as Unlisted, review its footage and audio for visible or spoken student names, faces, and other identifying details; remove or obscure them unless their inclusion is authorized.
- Do not add tracking scripts solely for the video series.

## Design Constraints

- Preserve the existing ClassSeats help-site visual system.
- Do not introduce a framework or component library.
- Do not redesign the global shell.
- Use the existing 920px article width and `.media` presentation.
- Keep videos full-width within the article rather than placing long narrated videos in the 520px inline-media column.
- Avoid embedding all videos on one page. The video library links to a focused player that loads only the selected video.

## Video Tutorial Library

The standalone library lives at `public/video-guides/index.html`, with focused playback at `public/video-guides/watch/index.html`. The outdated Mobile Setup video is retired; the library includes the 16 current videos.

The library:

- Uses linked cards rather than loading every iframe at once.
- Groups videos into getting started, seating and printing, student picks and connections, and everyday classroom tools.
- Opens one video per focused player view, with a link to its related help article.
- Shows each video's duration.

To add a future video, add a card to the library index and a matching entry to `public/video-guides/videos.js`.

## Definition of Done

The onboarding-video project is complete when:

- All approved videos are uploaded to YouTube as Unlisted.
- Each video is embedded in its canonical help article.
- New articles exist for topics not currently covered.
- Category pages link to newly created articles.
- Existing written instructions and short clips remain intact.
- Every embed uses the privacy-enhanced responsive pattern.
- Captions have been reviewed for ClassSeats terminology.
- Pagefind builds successfully.
- Desktop and responsive previews pass.
- No source onboarding MP4 files exist in Git history or the working tree.
- The user has reviewed the integrated series before final publication.

## Suggested Prompt for the Next Codex Chat

```text
Please read planning/ONBOARDING_VIDEO_INTEGRATION_SPEC.md completely before making changes. Continue the ClassSeats onboarding-video integration using the established YouTube privacy-enhanced embed pattern. I will provide YouTube links one at a time. Inspect the current Git state, preserve existing article content, place each video according to the mapping in the spec, validate with Pagefind, and give me a local preview before committing or syncing.
```
