You are Codex working in the ClassSeats help site repo.

FILL IN THESE PATHS FIRST
Primary article file: 

Section landing page is noted in the comment at the top of each page.  

Model page for section landing page styling: /home/mnlfish/classseats-help/public/students-rosters/index.html

Model page for article styling: /home/mnlfish/classseats-help/public/getting-started/creating-seating-arrangements/index.html

Media folder is noted in the comment at the top of each page.

GOAL
Given an article HTML page with placeholder media comments and available media files, update the page so it matches the site’s standard help page styling and structure, insert the media correctly, and fix any related links in the section landing page.

SCOPE
- Edit the primary article file above.
- Also update the section landing page if its links need to point to the new/updated article.
- If new content makes a section no longer “Coming Soon,” update:
  - The section landing page “Common questions” list (convert any Coming Soon placeholders to real links).
  - The main help tiles in /home/mnlfish/classseats-help/public/index.html (activate tiles and remove Coming Soon marker when the section has at least one active Common questions link).

STYLING
- Use the model page (full path above) as the structural/style reference (doctype, head metadata, container/page wrappers, header/breadcrumbs, footer, tip/next styles).
- Preserve all existing copy and headings; only rewrap to match the model when needed.
- Ensure the footer includes these two lines at the very bottom on every page:
  - On non-index pages, render both lines inside a single <p> with a <br /> between them:
    ClassSeats&trade; is a product of ClassWare Solutions, LLC.<br />
    © 2026 ClassWare Solutions, LLC. All rights reserved.
  - On /public/index.html, place a single-line version directly under the “Still stuck?” line:
    ClassSeats&trade; is a product of ClassWare Solutions, LLC. © 2026 ClassWare Solutions, LLC. All rights reserved.
- Ensure the help search bar appears on the same line as the breadcrumbs (right-aligned) on all article and section pages (not on /public/index.html).
  Use this exact wrapper snippet in place of the breadcrumbs block:
  <div class="page-header">
    <div class="breadcrumbs" data-pagefind-ignore>
      <a href="/">Help</a> → <a href="/SECTION/">Section</a>
    </div>
    <div class="help-search" data-pagefind-ignore>
      <form action="/search/" method="get">
        <input type="search" name="q" aria-label="Search help articles" placeholder="Search the help center" />
      </form>
    </div>
  </div>

MEDIA RULES
- If the article has <!-- MEDIA ... --> placeholders, replace them.
- If the article has no placeholders but matching media exists, insert media where it makes the most instructional sense (usually inline with the relevant step).
- Match filenames by intent from the placeholder text. If missing, leave the placeholder and add:
  <!-- NOTE: Media file not found for this placeholder -->
- Prefer inline placement: if media clearly matches a specific step, embed it inline with that step using the INLINE format, even if the placeholder does not say INLINE.
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
Use the one-line format with a colon and keep the full sentence on the same line (no manual line breaks inside the sentence):
<div class="tip">
  <strong>Tip:</strong> Sentence text continues here.
</div>
Note: The shared CSS keeps tip labels inline, so use <strong> for emphasis inside tips.

LINKS
- Ensure breadcrumbs and section landing links point to the correct /<SECTION>/... paths.
- Verify the article page path matches its folder name.

COMING SOON CLEANUP
- If the new/updated article replaces a Coming Soon entry in the section landing page, remove the Coming Soon placeholder and restore it as a real <a> link.
- If a section now has at least one active Common questions link, ensure its main tile on /public/index.html is active (not disabled) and shows “View articles →”.
- If a section still has no active Common questions links, keep its tile disabled with the “🛠️ Coming Soon” marker.

WORK STEPS
A) Open the primary article file and find all <!-- MEDIA ... --> placeholders.
B) List files in the media folder.
C) Apply the standard page shell (using the model page) without rewriting copy.
D) Replace placeholders with media blocks per rules above (or insert media where it makes the most instructional sense if no placeholders exist).
E) Update the section landing page links if needed.
F) Apply Coming Soon cleanup rules (section landing + main tiles).
H) Verify the help search bar sits on the same line as the breadcrumbs (right-aligned) on edited pages.
I) Sanity-check all src paths start with /_media/....

OUTPUT
- Summary of changes (style shell applied, media inserted, links fixed).
- Number of placeholders found and replaced (if any).
- Number of media items inserted without placeholders (if any).
- Any placeholders left due to missing files (with expected filenames).
