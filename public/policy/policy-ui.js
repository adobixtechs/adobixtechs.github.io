(() => {
  "use strict";

  const isPolicyPage = document.body.classList.contains("app-privacy-page");
  if (!isPolicyPage) return;

  const pageRoot = document.querySelector(".app-privacy-page .page");
  if (!pageRoot) return;

  // TOC intentionally disabled per UI preference.
  // Keep this file for future policy-page enhancements.
})();
