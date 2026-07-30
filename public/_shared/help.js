(function () {
  var lightbox;
  var lightboxImage;
  var lightboxCaption;
  var closeButton;
  var lastFocused;

  function buildLightbox() {
    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Expanded screenshot");
    lightbox.hidden = true;

    var panel = document.createElement("div");
    panel.className = "image-lightbox__panel";

    closeButton = document.createElement("button");
    closeButton.className = "image-lightbox__close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close expanded image");
    closeButton.textContent = "×";

    lightboxImage = document.createElement("img");
    lightboxImage.className = "image-lightbox__image";
    lightboxImage.alt = "";

    lightboxCaption = document.createElement("p");
    lightboxCaption.className = "image-lightbox__caption";

    panel.appendChild(closeButton);
    panel.appendChild(lightboxImage);
    panel.appendChild(lightboxCaption);
    lightbox.appendChild(panel);
    document.body.appendChild(lightbox);

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  function openLightbox(image) {
    if (!lightbox) {
      buildLightbox();
    }

    var figure = image.closest("figure.media");
    var caption = figure ? figure.querySelector("figcaption") : null;

    lastFocused = document.activeElement;
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "";
    lightboxCaption.textContent = caption ? caption.textContent.trim() : "";
    lightboxCaption.hidden = !lightboxCaption.textContent;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) {
      return;
    }

    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
    document.body.classList.remove("lightbox-open");

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function prepareImage(image) {
    if (image.dataset.lightboxReady === "true") {
      return;
    }

    image.dataset.lightboxReady = "true";
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Expand screenshot");

    image.addEventListener("click", function () {
      openLightbox(image);
    });

    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("figure.media img").forEach(prepareImage);
  });
})();
