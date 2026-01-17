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