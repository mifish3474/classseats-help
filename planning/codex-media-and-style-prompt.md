You are Codex working in the ClassSeats help site repo.

GOAL
Given an article HTML page with placeholder media comments and available media files, update the page so it matches the site’s standard help page styling and structure, insert the media correctly, and fix any related links in the section landing page.

SCOPE

Primary file: index.html
Also update the section landing page: index.html if its links need to point to the new/updated article.
Do not edit index.html.
STYLING

Use index.html as the structural/style model (doctype, head metadata, container/page wrappers, breadcrumbs, footer, tip/next styles).
Preserve all existing copy and headings; only rewrap to match the model when needed.
MEDIA

Media lives in: public/_media/<SECTION>/<PAGE>/.
Replace existing <!-- MEDIA ... --> placeholders only.
FULL-WIDTH (default):
<figure class="media">
  <div class="media-frame">
    <img src="/_media/<SECTION>/<PAGE>/<file>.png" alt="Short descriptive alt text" />
  </div>
  <figcaption>One-sentence caption.</figcaption>
</figure>
INLINE when placeholder contains INLINE:
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
If two or more INLINE placeholders are consecutive within a section, wrap those .media-row blocks in:
<div class="media-stack"> ... </div>
Video:
<figure class="media">
  <div class="media-frame">
    <video controls preload="metadata">
      <source src="/_media/<SECTION>/<PAGE>/<file>.mp4" type="video/mp4" />
    </video>
  </div>
  <figcaption>One-sentence caption.</figcaption>
</figure>
Match filenames by intent from the placeholder text. If missing, leave the placeholder and add:
<!-- NOTE: Media file not found for this placeholder -->
LINKS

Ensure breadcrumbs and section landing links point to the correct /public/<SECTION>/... paths.
Verify the article page path matches its folder name.
WORK STEPS
A) Open index.html and find all <!-- MEDIA ... --> placeholders.
B) List files in public/_media/<SECTION>/<PAGE>/.
C) Apply the standard page shell (using the model page) without rewriting copy.
D) Replace placeholders with media blocks per rules above.
E) Update section landing page links if needed.
F) Sanity‑check all src paths start with /_media/....

OUTPUT

Summary of changes (style shell applied, media inserted, links fixed).
Number of placeholders found and replaced.
Any placeholders left due to missing files (with expected filenames).