Contextual Help Button (Full-Screen Modals)

Purpose
Add a reusable, icon-only Help button to full-screen modals where the global header is not visible. The button opens the help site in a new tab and routes to a contextual section using a helpTopic key.

Why
- Full-screen modals hide the global header, so users lose access to Help.
- A consistent, compact icon button keeps modal headers clean and predictable.
- A shared mapping keeps links stable and prevents dead URLs.

How it works
1) Shared help URL mapping
Use a small helper module (for example: src/help/helpLinks.ts) that exports:
- HELP_HOME = "https://help.classseats.app/"
- getHelpUrl(topic?: string): string

getHelpUrl returns:
- The mapped section URL if the helpTopic exists.
- HELP_HOME if the topic is missing or unknown.

Recommended topic mapping (match current help site slugs):
- layout-editor -> /seating-arrangements/
- seat-numbers -> /seating-arrangements/
- preferred-seats -> /seating-arrangements/
- collision-rules -> /seating-arrangements/
- students-rosters -> /students-rosters/
- grouping -> /grouping-students/
- constraints -> /grouping-students/
- attendance -> /attendance-daily-notes/
- drive-sync -> /google-drive-sync/
- photos -> /mobile/

2) Reusable Help icon button
Create a small component (for example: src/components/HelpIconButton.tsx) that:
- Renders an icon-only button (use "❓" text or an existing icon).
- Includes aria-label="Help" and title="Help".
- Opens a new tab using window.open(url, "_blank", "noopener,noreferrer").
- Accepts optional className to fit modal header styles.

3) Add to full-screen modal headers
In any full-screen modal header action cluster (Undo/Done/Hide Editor, etc.):
- Insert <HelpIconButton helpTopic="layout-editor" /> alongside existing actions.
- Prefer placing it near the right side so it is easy to discover but not disruptive.

Where to use
- Layout / Room editor modal (first integration target).
- Future full-screen modals with hidden global header.

Notes
- Keep the button icon-only to fit tight header action bars.
- Always use a real help link (no placeholders).
- If a new help section is added, update the mapping in the shared helper.
