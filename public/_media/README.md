# ClassSeats Help Site Media Guide

This help site is static HTML hosted on Cloudflare Pages. Media files live under `public/_media/` and are embedded directly with `<img>` and `<video>` tags (no build step, no markdown pipeline).

## Folder structure

Mirror the help URL structure:

public/_media/
├─ getting-started/
│ ├─ first-class/
│ ├─ adding-students/
│ └─ what-is-classseats/
├─ seating-arrangements/
├─ grouping-students/
├─ printing-reports/
├─ attendance-daily-notes/
├─ student-notes/
├─ behavior-points/
├─ mobile/
├─ privacy-data/
└─ accounts-plans/

markdown
Copy code

Rule: if a help page is `/getting-started/first-class/`, its media goes in:

`public/_media/getting-started/first-class/`

## Allowed file types

- Screenshots: **.png**
- Short screen recordings: **.mp4**

(Keep it boring and universal.)

## Naming convention

Name files by *purpose*, not by date.

Format:
- Screenshots: `<topic>-<purpose>.png`
- Videos: `<topic>-<action>.mp4`

Examples:
- `first-run-save-choice.png`
- `local-save-name-field.png`
- `drive-connect-button.png`
- `create-class-quick.mp4`
- `groupings-drag-student.mp4`

Avoid:
- `Screenshot 2026-01-14.png`
- `final-final.mp4`

## Capture checklist (prevent “red dot” / click artifacts)

Before doing a capture batch:
- Turn OFF click indicators / cursor highlight / “show clicks”
- Prefer hiding the cursor for screenshots
- Keep browser zoom at **100%**
- Keep OS scaling consistent
- Crop intentionally:
  - **Context shots**: show the whole relevant panel
  - **Zoom shots**: show only the specific control(s) being explained

If a screenshot includes a click dot/cursor artifact, re-capture or edit it out before embedding.

## Media embedding patterns

All media is embedded using `<figure>` with a consistent frame and caption.

### Full-width media (default)

Use for:
- first-run screens
- “stop and read this” modals
- complex multi-panel UI

HTML:

```html
<figure class="media">
  <div class="media-frame">
    <img src="/_media/SECTION/PAGE/file.png" alt="Short description" />
  </div>
  <figcaption>One-sentence caption.</figcaption>
</figure>
Inline media (paired with specific text)
Use for:

zoomed/cropped screenshots tied to a nearby paragraph or bullet list

Wrap text + media together in a .media-row so placement is stable (no floats).

html
Copy code
<div class="media-row">
  <div>
    <!-- The text this image supports -->
  </div>

  <figure class="media inline">
    <div class="media-frame">
      <img src="/_media/SECTION/PAGE/file.png" alt="Short description" />
    </div>
    <figcaption>One-sentence caption.</figcaption>
  </figure>
</div>
Video
Keep videos short (5–15s), one action per clip.

html
Copy code
<figure class="media">
  <div class="media-frame">
    <video controls preload="metadata">
      <source src="/_media/SECTION/PAGE/clip.mp4" type="video/mp4" />
    </video>
  </div>
  <figcaption>One-sentence caption.</figcaption>
</figure>
No autoplay. No loop.

How we tell Codex inline vs full-width
Media is inserted at existing <!-- MEDIA ... --> placeholders.

Default: placeholders become full-width figures (<figure class="media">).

Inline: placeholders that include the token INLINE must be embedded as inline media using the .media-row wrapper and <figure class="media inline">.

Example placeholder (inline):

html
Copy code
<!-- MEDIA (required): INLINE — Cropped screenshot highlighting the class name field and “Save on this device” button. -->
Example placeholder (full-width):

html
Copy code
<!-- MEDIA (required): Screenshot of the first-run welcome screen showing the save options. -->
Definition of done (per page)
A page is “media-complete” when:

All required placeholders are filled

No media 404s (paths correct)

No click/cursor artifacts unless intentional

Images do not dominate the page

Each media item clearly supports nearby text

How to make this effortless with Codex (recommended)

Tell Codex this once and you’re done:

“If a section contains two or more INLINE media placeholders back-to-back, wrap their generated media-rows in a .media-stack container.”

CODEX GENERIC PROMPT:

YOU ARE CODEX WORKING IN THE ClassSeats help site repo.

GOAL
Insert captured media files into ONE help article using existing MEDIA placeholders.
Follow the established media system (full-width vs inline) without redesigning anything.

HARD CONSTRAINTS
- Static HTML only. No frameworks, no build steps.
- Do NOT rewrite copy or headings.
- Do NOT touch layout shell, breadcrumbs, or Next links.
- Do NOT touch public/index.html.
- Only modify the single page listed below.
- Only replace existing <!-- MEDIA ... --> placeholders.

SCOPE (ONLY THIS FILE)
- public/<SECTION>/<PAGE>/index.html

MEDIA LOCATION
- All media files for this page are located in:
  public/_media/<SECTION>/<PAGE>/

MEDIA RULES (IMPORTANT)
1) Default media is FULL-WIDTH:
   - Use <figure class="media">.

2) INLINE media:
   - If the placeholder comment includes the token "INLINE",
     embed the media as inline:
       - wrap in a .media-row
       - use <figure class="media inline">

3) Alternation:
   - If two or more INLINE media placeholders appear back-to-back
     within the same section, wrap the generated .media-row blocks
     in a single <div class="media-stack"> container.
   - Do NOT wrap single inline items in media-stack.

4) Do NOT guess:
   - Match filenames by intent from the placeholder text.
   - If a required file is missing, leave the placeholder comment
     and add:
       <!-- NOTE: Media file not found for this placeholder -->

HTML STRUCTURE (MUST FOLLOW EXACTLY)

FULL-WIDTH IMAGE:
<figure class="media">
  <div class="media-frame">
    <img src="/_media/<SECTION>/<PAGE>/<file>.png" alt="Short descriptive alt text" />
  </div>
  <figcaption>One-sentence caption.</figcaption>
</figure>

INLINE IMAGE:
<div class="media-row">
  <div>
    <!-- existing explanatory text -->
  </div>
  <figure class="media inline">
    <div class="media-frame">
      <img src="/_media/<SECTION>/<PAGE>/<file>.png" alt="Short descriptive alt text" />
    </div>
    <figcaption>One-sentence caption.</figcaption>
  </figure>
</div>

VIDEO:
<figure class="media">
  <div class="media-frame">
    <video controls preload="metadata">
      <source src="/_media/<SECTION>/<PAGE>/<file>.mp4" type="video/mp4" />
    </video>
  </div>
  <figcaption>One-sentence caption.</figcaption>
</figure>

ALT TEXT + CAPTIONS
- Alt text: concise, UI-focused, no quotes unless escaped.
- Captions: one calm sentence describing what the reader is seeing.

WORK STEPS
A) Open the target index.html and locate all <!-- MEDIA ... --> placeholders.
B) List files in public/_media/<SECTION>/<PAGE>/.
C) Replace each placeholder with the correct media block.
D) Apply INLINE + media-stack rules exactly as described.
E) Sanity-check src paths start with "/_media/...".

OUTPUT
Provide a short summary:
- Number of placeholders found
- Number replaced
- Any placeholders left due to missing files (with expected filenames)
Do NOT propose additional edits or design changes.


## How you will use this in practice:

How you’ll use this in practice

For each page:

Capture media

Drop files into public/_media/<section>/<page>/

Update placeholders to include INLINE where appropriate

Paste this prompt into Codex

Review results

Move on

That’s your repeatable assembly line.