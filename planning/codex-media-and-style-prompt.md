You are Codex working in the ClassSeats help site repo.

FILL IN THESE PATHS FIRST
Primary article file: /home/mnlfish/classseats-help/public/<SECTION>/<PAGE>/index.html
Section landing page: /home/mnlfish/classseats-help/public/<SECTION>/index.html
Model page for styling: /home/mnlfish/classseats-help/public/<SECTION>/<MODEL_PAGE>/index.html
Media folder: /home/mnlfish/classseats-help/public/_media/<SECTION>/<PAGE>/

GOAL
Given an article HTML page with placeholder media comments and available media files, update the page so it matches the site’s standard help page styling and structure, insert the media correctly, and fix any related links in the section landing page.

SCOPE
- Edit the primary article file above.
- Also update the section landing page if its links need to point to the new/updated article.
- Do NOT edit /home/mnlfish/classseats-help/public/index.html.

STYLING
- Use the model page (full path above) as the structural/style reference (doctype, head metadata, container/page wrappers, breadcrumbs, footer, tip/next styles).
- Preserve all existing copy and headings; only rewrap to match the model when needed.

MEDIA RULES
- Replace existing <!-- MEDIA ... --> placeholders only.
- Match filenames by intent from the placeholder text. If missing, leave the placeholder and add:
  <!-- NOTE: Media file not found for this placeholder -->
- FULL-WIDTH (default):
  <figure class="media">
    <div class="media-frame">
      <img src="/_media/<SECTION>/<PAGE>/<file>.png" alt="Short descriptive alt text" />
    </div>
    <figcaption>One-sentence caption.</figcaption>
  </figure>
- INLINE when placeholder contains INLINE:
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
- If two or more INLINE placeholders are consecutive within a section, wrap those .media-row blocks in:
  <div class="media-stack"> ... </div>
- VIDEO:
  <figure class="media">
    <div class="media-frame">
      <video controls preload="metadata">
        <source src="/_media/<SECTION>/<PAGE>/<file>.mp4" type="video/mp4" />
      </video>
    </div>
    <figcaption>One-sentence caption.</figcaption>
  </figure>

TIP BOX FORMAT
Use the one-line format with a colon:
<div class="tip">
  <strong>Tip:</strong> Sentence text continues here.
</div>

LINKS
- Ensure breadcrumbs and section landing links point to the correct /<SECTION>/... paths.
- Verify the article page path matches its folder name.

WORK STEPS
A) Open the primary article file and find all <!-- MEDIA ... --> placeholders.
B) List files in the media folder.
C) Apply the standard page shell (using the model page) without rewriting copy.
D) Replace placeholders with media blocks per rules above.
E) Update the section landing page links if needed.
F) Sanity-check all src paths start with /_media/....

OUTPUT
- Summary of changes (style shell applied, media inserted, links fixed).
- Number of placeholders found and replaced.
- Any placeholders left due to missing files (with expected filenames).
