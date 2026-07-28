# ClassSeats Help Site Current UI Update Plan

This is the working checklist for updating the ClassSeats help site so screenshots, videos, captions, alt text, and step-by-step instructions match the current app UI.

## Goals

- Replace old UI screenshots and videos with current UI media.
- Keep the existing help site structure unless an article is clearly obsolete.
- Update instructions only when the current UI flow, labels, or behavior changed.
- Preserve the existing static HTML media pattern:
  - Images and videos live under `public/_media/`.
  - Help articles embed media directly with `<img>` and `<video>`.
  - No autoplay or loop for help videos.
- Use same-filename replacement when possible:
  - Rename old media to `*-old.ext`.
  - Save the new current UI media using the original filename.
  - Update HTML only when alt text, captions, posters, or nearby instructions need changes.
- Add poster images for controlled videos when the browser shows a blank pre-play frame.

## Known Context

- Fresh replacement screenshots/videos are not available yet for most help articles.
- This repo is much more media-heavy than the public site.
- Current scan found:
  - 47 HTML pages under `public/`.
  - 167 media files under `public/_media/`.
  - 150 images.
  - 17 videos.
  - 33 pages directly embedding help media.

## Open Questions

- Which old help articles still describe valid workflows?
- Which articles should be rewritten because the workflow changed too much?
- Which current UI views should be captured once and reused across multiple articles?
- Which videos need explicit poster images?
- Should any obsolete old media be removed before launch, or kept temporarily as `*-old.ext` during the update pass?

## Recommended Update Order

1. Getting Started.
2. Grouping Students.
3. Seating Arrangements and Seating Charts.
4. Attendance and Daily Notes.
5. Mobile.
6. Printing Reports.
7. Google Drive Sync.
8. Students and Rosters.
9. Index/category pages, search, and final QA.

## Section Inventory

### Getting Started

Status: Reordering around current onboarding flow

Current onboarding order:
1. Signing in.
2. Seating arrangements.
3. Classes.
4. Students.
5. Groups.

Pages:
- `public/getting-started/index.html`
- `public/getting-started/what-is-classseats/index.html`
- `public/getting-started/signing-in/index.html`
- `public/getting-started/creating-seating-arrangements/index.html`
- `public/getting-started/first-class/index.html`
- `public/getting-started/adding-students/index.html`
- `public/getting-started/grouping-students/index.html`

Media folders:
- `public/_media/getting-started/first-class/`
- `public/_media/getting-started/adding-students/`
- `public/_media/getting-started/grouping-students/`
- shared seating-arrangement media used by getting-started articles.

Current concerns:
- The old section order implied creating a class before seating arrangements.
- The current app recommends creating a seating arrangement before adding classes, students, and groups.
- Signing-in content has been split into its own page.
- Creating seating arrangements has been reorganized to start with the setup/onboarding action and now explains Tables / Groups, Single Seat — Grid, and Single Seat — Semicircle.
- First-run/class creation screenshots and videos are likely old UI.
- Adding students/import flow may have changed.
- Grouping and seating arrangement setup likely needs current UI recapture.

Planned updates:
- Reorder Getting Started links and next-step links to match current onboarding.
- Review every getting-started article against current onboarding.
- Replace first-run, class creation, student import, seating setup, and grouping media.
- Update instructions, alt text, and captions after media replacement.

### Grouping Students

Status: Not started

Pages:
- `public/grouping-students/index.html`
- `public/grouping-students/how-do-i-collect-student-preferences/index.html`
- `public/grouping-students/how-do-i-enter-student-preferences/index.html`
- `public/grouping-students/how-do-i-fix-name-mismatches-when-importing-student-picks/index.html`
- `public/grouping-students/how-do-i-keep-students-together-or-apart-in-groupings/index.html`
- `public/grouping-students/how-do-i-use-full-screen-view/index.html`
- `public/grouping-students/how-do-i-use-student-preferences-in-groupings/index.html`
- `public/grouping-students/music-ensembles/index.html`

Media folder:
- `public/_media/grouping-students/`

Current concerns:
- Many screenshots reference older tabs, controls, wizard steps, and grouping result screens.
- Student preference and Google Form workflows may need careful step-by-step verification.
- Full-screen view media likely changed with the new UI.

Planned updates:
- Confirm current grouping workflow labels and views.
- Replace grouping setup/results media.
- Replace student preference wizard media.
- Replace mismatch resolution media if the flow changed.
- Update full-screen view screenshots and instructions.

### Seating Arrangements And Seating Charts

Status: Not started

Pages:
- `public/seating-arrangements/index.html`
- `public/seating-arrangements/how-do-i-add-seat-numbers/index.html`
- `public/seating-arrangements/how-do-i-move-a-table-in-a-seating-arrangement/index.html`
- `public/seating-arrangements/how-do-i-resize-a-table-in-a-seating-arrangement/index.html`
- `public/seating-arrangements/how-do-i-set-preferred-seating/index.html`
- `public/seating-charts/index.html`
- `public/seating-charts/how-do-i-add-a-seat-to-a-table/index.html`
- `public/seating-charts/how-do-i-move-a-student-to-a-different-table/index.html`
- `public/seating-charts/how-do-i-move-a-table-in-a-seating-chart/index.html`
- `public/seating-charts/how-do-i-print-my-seating-chart/index.html`
- `public/seating-charts/how-do-i-remove-a-seat-from-a-table/index.html`
- `public/seating-charts/how-do-i-resize-a-table-in-a-seating-chart/index.html`
- `public/seating-charts/how-do-i-unassign-a-student-from-a-table/index.html`
- `public/seating-charts/how-do-i-view-my-seating-chart/index.html`

Media folder:
- `public/_media/seating-arrangements/`

Current concerns:
- This is the largest media bucket.
- Many screenshots/videos are precise control-level instructions, so stale UI labels will be especially confusing.
- Seat numbering, table actions, preferred seating, table resizing, printing, and unassigned student flows all need current UI review.

Planned updates:
- Start with overview/view seating chart pages.
- Then update high-use table/student movement articles.
- Then update advanced seat editing and numbering articles.
- Replace old videos and add poster images where helpful.

### Attendance And Daily Notes

Status: Not started

Pages:
- `public/attendance-daily-notes/index.html`
- `public/attendance-daily-notes/how-do-i-take-attendance-on-desktop/index.html`

Media folder:
- `public/_media/attendance-daily-notes/`

Current concerns:
- Desktop attendance UI appears to have changed significantly.
- Status chips, list/table view, progress stats, menus, and Mark Rest controls likely need new screenshots.

Planned updates:
- Replace desktop attendance screenshots with current list/table view media.
- Update terms for Present, Absent, Tardy, Left Early controls.
- Confirm daily notes behavior before changing copy.

### Mobile

Status: Not started

Pages:
- `public/mobile/index.html`
- `public/mobile/how-do-i-access-classseats-on-mobile/index.html`
- `public/mobile/how-do-i-add-student-photos/index.html`
- `public/mobile/how-do-i-take-attendance-on-mobile/index.html`
- `public/mobile/how-do-i-use-flashcards-to-learn-student-names/index.html`

Media folder:
- `public/_media/mobile/`

Current concerns:
- Mobile screenshots may be old UI and may use mixed `.jpg`/`.png` naming.
- Attendance, photos, Drive loading, flashcards, and home-screen setup may need recapture.

Planned updates:
- Confirm current mobile access flow.
- Replace mobile attendance screenshots.
- Replace flashcards screenshots only if UI changed.
- Replace photo capture screenshots if flow changed.

### Printing Reports

Status: Not started

Pages:
- `public/printing-reports/index.html`
- `public/printing-reports/how-do-i-print-a-roster/index.html`

Media folder:
- `public/_media/printing-reports/`

Current concerns:
- Report UI may have changed, but this section is contained.

Planned updates:
- Replace report tab, options, preview, and print button screenshots if current UI differs.
- Update sort/tag/report labels as needed.

### Google Drive Sync

Status: Not started

Pages:
- `public/google-drive-sync/index.html`
- `public/google-drive-sync/how-do-i-connect-to-google-drive/index.html`

Media folder:
- `public/_media/google-drive-sync/`

Current concerns:
- OAuth/Drive flow may still be accurate, but app-side UI may have changed.
- This section needs careful accuracy because it affects account and data expectations.

Planned updates:
- Verify app-side Drive connection entry points.
- Replace welcome/connect/open-or-create screenshots if stale.
- Keep Google permission guidance accurate and current.

### Students And Rosters

Status: Not started

Pages:
- `public/students-rosters/index.html`
- `public/students-rosters/how-do-i-select-students-preferential-seating/index.html`

Media folder:
- `public/_media/students-rosters/`

Current concerns:
- Small section, but likely references old Students tab UI.

Planned updates:
- Replace Students tab and Seating Criteria media if stale.
- Confirm preferential seating instructions.

### Other Category Pages

Status: Not started

Pages:
- `public/index.html`
- `public/accounts-plans/index.html`
- `public/behavior-points/index.html`
- `public/privacy-data/index.html`
- `public/search/index.html`
- `public/student-notes/index.html`

Current concerns:
- Mostly category/index pages with little or no media.
- May need link, title, and product-language cleanup after article updates.

Planned updates:
- Review after main article pages are updated.
- Confirm category descriptions and article links.

## Video Inventory

- `public/_media/getting-started/adding-students/adding-single-students.mp4`
- `public/_media/getting-started/adding-students/bulk-add-students.mp4`
- `public/_media/getting-started/adding-students/paste-import-demo.mp4`
- `public/_media/getting-started/first-class/add-a-class.mp4`
- `public/_media/getting-started/grouping-students/drag-unassigned-students.mp4`
- `public/_media/grouping-students/copy-responses-from-form-screencast.mp4`
- `public/_media/grouping-students/create-preferences-form-screencast.mp4`
- `public/_media/seating-arrangements/add-seat-screencast.mp4`
- `public/_media/seating-arrangements/assign-seat-numbers.mp4`
- `public/_media/seating-arrangements/clear-seat-number.mp4`
- `public/_media/seating-arrangements/drag-student-to-new-table.mp4`
- `public/_media/seating-arrangements/preferred-seats-selection.mp4`
- `public/_media/seating-arrangements/remove-seat-screencast.mp4`
- `public/_media/seating-arrangements/restart-numbering-midway.mp4`
- `public/_media/seating-arrangements/seating-chart-adjust-width-height-screencast.mp4`
- `public/_media/seating-arrangements/seating-chart-drag-table-screencast.mp4`
- `public/_media/seating-arrangements/unassigned-student-screencast.mp4`

## Per-Page Definition Of Done

- All screenshots/videos on the page match the current UI.
- Instructions match current labels, buttons, tabs, and workflow order.
- Alt text describes the current media.
- Captions support the nearby step.
- Any video with a blank or confusing pre-play frame has a poster image.
- No media paths 404.
- Article still reads naturally on desktop and mobile.

## Final QA Checklist

- Search for stale UI labels and old flow language.
- Search for `-old.` media files still referenced in HTML.
- Confirm all `_media` paths exist.
- Confirm all controlled videos load and show useful first frames or posters.
- Run `npm run build` to regenerate Pagefind search.
- Preview key article pages locally.
- Run `git diff --check`.
