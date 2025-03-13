// Load common sections
function loadCommonSections() {
    fetch("partials/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("partials/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
}

// Toggle FAQ answers
function setupFAQ() {
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle("active");
        });
    });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadCommonSections();
    setupFAQ();
});
