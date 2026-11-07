// Keep this catalog in sync with the video cards in /video-guides/index.html.
// Each key becomes a shareable /video-guides/watch/?video=KEY link.
const videos = Object.freeze({
  "signing-in": { id: "DO1zGbVFybY", title: "Signing In to ClassSeats", duration: "2:22", guide: "/getting-started/signing-in/" },
  "interface-orientation": { id: "LPgMnCBdPO4", title: "Interface Orientation", duration: "1:58", guide: "/getting-started/interface-orientation/" },
  "seating-arrangements": { id: "uwI0Hs6n9hs", title: "Seating Arrangements", duration: "4:43", guide: "/getting-started/creating-seating-arrangements/" },
  "importing-students": { id: "tIAKNz5s-wU", title: "Importing Students — No Tags", duration: "3:09", guide: "/getting-started/adding-students/" },
  "first-group": { id: "RKHipbld83A", title: "Generating Your First Group", duration: "3:10", guide: "/getting-started/grouping-students/" },
  "full-screen-mode": { id: "ecXloN4XIVQ", title: "Full Screen Mode", duration: "1:15", guide: "/grouping-students/how-do-i-use-full-screen-view/" },
  "printing-seating-charts": { id: "-lOWQs__Mik", title: "Printing Seating Charts", duration: "1:03", guide: "/seating-charts/how-do-i-print-my-seating-chart/" },
  "printing-a-roster": { id: "hj9m23XKhDU", title: "Printing a Roster", duration: "1:00", guide: "/printing-reports/how-do-i-print-a-roster/" },
  "keep-apart-together": { id: "Vo3ZjUksk2U", title: "Keep Apart and Together Groups", duration: "2:17", guide: "/grouping-students/how-do-i-keep-students-together-or-apart-in-groupings/" },
  "collecting-student-picks": { id: "MQiRcnX2uQE", title: "Collecting Student Picks", duration: "3:15", guide: "/grouping-students/how-do-i-collect-student-preferences/" },
  "importing-student-picks": { id: "GkpbHl4VM50", title: "Importing Student Picks", duration: "3:16", guide: "/grouping-students/how-do-i-enter-student-preferences/" },
  "using-student-picks": { id: "Ik_Qrh7bsAU", title: "Using Student Picks in Grouping", duration: "2:21", guide: "/grouping-students/how-do-i-use-student-preferences-in-groupings/" },
  "student-connections": { id: "JR-6tXGB5KQ", title: "Student Connections Tab", duration: "2:30", guide: "/grouping-students/how-do-i-use-student-connections/" },
  "student-pictures": { id: "jt92weTOrU4", title: "Taking Student Pictures", duration: "3:51", guide: "/mobile/how-do-i-add-student-photos/" },
  "taking-attendance": { id: "PjaPs21zbgg", title: "Taking Attendance", duration: "5:23", guide: "/attendance-daily-notes/" },
  "flashcards-audio": { id: "X0P9I4Gc8qQ", title: "Flashcards and Audio", duration: "2:05", guide: "/mobile/how-do-i-use-flashcards-to-learn-student-names/" }
});

const selection = new URLSearchParams(window.location.search).get("video");
const video = Object.prototype.hasOwnProperty.call(videos, selection) ? videos[selection] : null;
const content = document.getElementById("watch-content");
const unavailable = document.getElementById("watch-unavailable");

if (video) {
  document.title = video.title + " | ClassSeats Video Tutorials";
  document.getElementById("watch-title").textContent = video.title;
  document.getElementById("watch-duration").textContent = video.duration + " video";
  document.getElementById("watch-player").title = video.title + " video";
  document.getElementById("watch-player").src = "https://www.youtube-nocookie.com/embed/" + video.id + "?rel=0";
  document.getElementById("watch-guide").href = video.guide;
  content.hidden = false;
} else {
  document.title = "Video not found | ClassSeats Video Tutorials";
  unavailable.hidden = false;
}
