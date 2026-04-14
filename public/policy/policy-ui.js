(() => {
  "use strict";

  const isPolicyPage = document.body.classList.contains("app-privacy-page");
  if (!isPolicyPage) return;

  const pageRoot = document.querySelector(".app-privacy-page .page");
  if (!pageRoot) return;

  const headingNodes = [...pageRoot.querySelectorAll(".card h2")];
  if (!headingNodes.length) return;

  headingNodes.forEach((heading, index) => {
    if (!heading.id) {
      const slug = heading.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      heading.id = slug || `section-${index + 1}`;
    }
  });

  const toc = document.createElement("div");
  toc.className = "policy-toc";
  const tocTitle = document.createElement("h3");
  tocTitle.textContent = "Quick navigation";
  const tocLinks = document.createElement("div");
  tocLinks.className = "policy-toc-links";

  headingNodes.forEach((heading) => {
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.replace(/^\d+\.\s*/, "");
    tocLinks.appendChild(link);
  });

  toc.appendChild(tocTitle);
  toc.appendChild(tocLinks);

  const header = pageRoot.querySelector(".header");
  if (header && header.parentNode) {
    header.parentNode.insertBefore(toc, header.nextSibling);
  } else {
    pageRoot.prepend(toc);
  }
})();
