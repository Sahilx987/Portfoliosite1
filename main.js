/**
 * Portfolio JavaScript
 * Minimal script for mobile menu and smooth interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ================================================
    // Mobile Menu Toggle
    // ================================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // ================================================
    // Navbar Scroll Effect
    // ================================================
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            navbar.style.background = 'rgba(10, 14, 26, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        }
        lastScrollY = window.scrollY;
    });
    
    // ================================================
    // Active Navigation Link on Scroll
    // ================================================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');
    
    function highlightNavigation() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ================================================
    // Smooth Scroll Enhancement
    // ================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just # or #resume (handled separately)
            if (href === '#' || !href.startsWith('#')) {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ================================================
    // Scroll Reveal Animation (Optional Enhancement)
    // ================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards for scroll animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // ================================================
    // GitHub Link Validation (Placeholder)
    // ================================================
    const githubLinks = document.querySelectorAll('a[href*="github.com"]');
    githubLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'https://github.com/sahilkumar' || 
            href.includes('github.com/sahilkumar/')) {
            link.addEventListener('click', function(e) {
                if (!confirm('This is a placeholder GitHub link.\n\nUpdate the links in index.html with your actual GitHub profile and repository URLs.\n\nContinue to placeholder link?')) {
                    e.preventDefault();
                }
            });
        }
    });
    
    // ================================================
    // LinkedIn Link Validation (Placeholder)
    // ================================================
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
    linkedinLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'https://linkedin.com/in/sahilkumar') {
            link.addEventListener('click', function(e) {
                if (!confirm('This is a placeholder LinkedIn link.\n\nUpdate the links in index.html with your actual LinkedIn profile URL.\n\nContinue to placeholder link?')) {
                    e.preventDefault();
                }
            });
        }
    });
    
    // ================================================
    // Architecture Diagram Link Handlers
    // ================================================
    const diagramLinks = document.querySelectorAll('.project-link.secondary');
    diagramLinks.forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Architecture Diagram:\n\nAdd your project architecture diagrams to an /assets folder and update the href attribute.\n\nExample: href="./assets/project-architecture.png"');
            });
        }
    });
    
    // ================================================
    // Certificate Verification Link (Placeholder)
    // ================================================
    const certLinks = document.querySelectorAll('a[href*="verification"]');
    certLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (link.textContent.includes('Verify') || link.textContent.includes('View Certificate')) {
                e.preventDefault();
                alert('Certificate Link:\n\nReplace this placeholder with your actual AWS certification verification URL or certificate PDF.\n\nYou can get your verification link from aws.training or Credly.');
            }
        });
    });
    
    // ================================================
    // Console Message for Developers
    // ================================================
    console.log('%c👨‍💻 Portfolio by Sahil Kumar', 'font-size: 20px; font-weight: bold; color: #00D9FF;');
    console.log('%cCloud & DevOps Engineer', 'font-size: 14px; color: #4A9EFF;');
    console.log('%c\nReplace placeholder links with your actual:\n• GitHub repositories\n• LinkedIn profile\n• Resume PDF\n• Architecture diagrams\n• Certificate verification URLs', 'font-size: 12px; color: #B4BCC8;');
    
});

// ================================================
// Performance: Lazy Loading for Images (if added later)
// ================================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
