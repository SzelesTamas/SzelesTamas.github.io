/**
 * Main JavaScript file for Personal Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('change', function() {
            document.body.style.overflow = this.checked ? 'hidden' : '';
        });
    }
    
    // CV Download functionality
    const downloadButtons = document.querySelectorAll('#download-cv, #download-cv-about');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a sample CV file (in a real scenario, this would be a link to an actual file)
            const sampleCV = `
            # Your Name
            Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile
            
            ## Professional Summary
            Experienced professional with expertise in your field. Passionate about creating innovative solutions and delivering high-quality results.
            
            ## Experience
            ### Job Title
            Company Name | 2020 - Present
            - Accomplishment 1
            - Accomplishment 2
            - Accomplishment 3
            
            ### Previous Job Title
            Previous Company | 2018 - 2020
            - Accomplishment 1
            - Accomplishment 2
            - Accomplishment 3
            
            ## Education
            ### Degree Name
            University Name | 2014 - 2018
            - Relevant coursework
            - Academic achievements
            
            ## Skills
            - Skill 1
            - Skill 2
            - Skill 3
            - Skill 4
            `;
            
            // Create a Blob with the CV content
            const blob = new Blob([sampleCV], { type: 'text/plain' });
            
            // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'YourName_CV.txt';
            
            // Append to the body, click, and remove
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            // Clean up the URL object
            URL.revokeObjectURL(downloadLink.href);
        });
    });
    
    // Project and Publication filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get the filter value
                const filter = this.getAttribute('data-filter');
                
                // Get all items
                const items = document.querySelectorAll('[data-category]');
                
                // Filter items
                items.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.featured-item, .project-card, .publication-item, .blog-post');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
