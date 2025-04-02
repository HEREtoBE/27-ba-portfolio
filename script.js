// Simple Single Page Application functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to show a specific page and hide others
    function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active-page');
        });
        
        // Show the selected page
        const activePage = document.getElementById(`${pageId}-page`);
        if (activePage) {
            activePage.classList.add('active-page');
        } else {
            // Default to home page if page not found
            document.getElementById('home-page').classList.add('active-page');
        }
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Update URL hash
        window.location.hash = pageId;
    }
    
    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // Handle initial page load based on URL hash
    const initialPage = window.location.hash.substring(1) || 'home';
    showPage(initialPage);
    
    // Handle browser back/forward navigation
    window.addEventListener('hashchange', function() {
        const pageId = window.location.hash.substring(1) || 'home';
        showPage(pageId);
    });
    
    // Simple form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});
