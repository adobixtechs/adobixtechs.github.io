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

// Header and Footer Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Add overlay div
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Menu button functionality
    const menuBtn = document.querySelector('.menu-btn');
    const headerLinks = document.querySelector('.header-links');
    const overlayEl = document.querySelector('.overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            headerLinks.classList.toggle('active');
            overlayEl.classList.toggle('active');
            document.body.style.overflow = headerLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu when clicking overlay
    if (overlayEl) {
        overlayEl.addEventListener('click', function() {
            headerLinks.classList.remove('active');
            overlayEl.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll('.header-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            headerLinks.classList.remove('active');
            overlayEl.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.header-links a, .footer-links a');
    allLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Close all other answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                }
            });
            
            // Toggle current answer
            item.classList.toggle('active');
            if (answer) {
                answer.style.maxHeight = item.classList.contains('active') ? answer.scrollHeight + "px" : null;
            }
        });
    });
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const headerLinks = document.querySelector('.header-links');
    const overlay = document.querySelector('.overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            headerLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = headerLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            headerLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking a link
    const links = document.querySelectorAll('.header-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            headerLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

// Clear data when clicking logo, home button, or navigation links
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[href="index.html"]');
    const logoLink = document.querySelector('.logo');
    const privacyLink = document.querySelector('a[href="privacy-policy.html"]');
    const termsLink = document.querySelector('a[href="terms.html"]');
    const faqLink = document.querySelector('a[href="faq.html"]');
    
    function clearAllData() {
        // Clear any stored data
        localStorage.clear();
        sessionStorage.clear();
        
        // Clear any form data if exists
        const forms = document.querySelectorAll('form');
        forms.forEach(form => form.reset());
        
        // Clear any input fields
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.value = '';
        });
    }

    // Add click event listeners to all navigation links
    [homeLink, logoLink, privacyLink, termsLink, faqLink].forEach(link => {
        if (link) {
            link.addEventListener('click', clearAllData);
        }
    });
});
