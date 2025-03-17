// Load Header
document.getElementById('header').innerHTML = `
    <header>
        <a href="index.html" class="logo">
            <img src="assets/icons/logo.png" alt="Expenses Flow Logo">
            Expenses Flow
        </a>
        <div class="header-links">
            <a href="index.html">Home</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms.html">Terms</a>
            <a href="faq.html">FAQ</a>
        </div>
    </header>
`;

// Load Footer
document.getElementById('footer').innerHTML = `
    <footer>
        <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms.html">Terms</a>
            <a href="faq.html">FAQ</a>
        </div>
        <div class="social-icons">
            <a href="https://play.google.com/store/apps/details?id=com.tools.expense_tracker" target="_blank">
                <i class="fab fa-google-play"></i>
            </a>
            <a href="mailto:support@expensesflow.com">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
        <p style="margin-top: 20px; color: #e0e0e0;">© 2024 Expenses Flow. All rights reserved.</p>
    </footer>
`;

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});
