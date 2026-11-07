const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("support@classseats.app");
    copyStatus.textContent = "Email address copied.";
  } catch {
    copyStatus.textContent = "Copy failed. Select the email address above and copy it manually.";
  }
});
