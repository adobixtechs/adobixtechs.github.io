// Load Header
document.getElementById('header').innerHTML = `
    <header>
        <a href="index.html" class="logo">
            <img src="assets/icons/logo.png" alt="Expenses Flow Logo">
            Expenses Flow
        </a>
        <div class="header-links">
            <a href="index.html" class="${window.location.pathname.endsWith('index.html') ? 'active' : ''}">Home</a>
            <a href="privacy-policy.html" class="${window.location.pathname.endsWith('privacy-policy.html') ? 'active' : ''}">Privacy Policy</a>
            <a href="terms.html" class="${window.location.pathname.endsWith('terms.html') ? 'active' : ''}">Terms</a>
            <a href="faq.html" class="${window.location.pathname.endsWith('faq.html') ? 'active' : ''}">FAQ</a>
        </div>
    </header>
`;


// Load Footer
document.getElementById('footer').innerHTML = `
    <footer>

        <div class="social-icons">
            <a href="https://www.linkedin.com/company/adobixtech", target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/adobix", target="_blank"><i class="fab fa-github"></i></a>
            <a href="mailto:adobixtech@gmail.com" title="Contact Support">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
        <p style="margin-top: 20px; color: #e0e0e0;">© 2025 Adobix Tech. All rights reserved.</p>
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
