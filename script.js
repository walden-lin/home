// Smooth scrolling and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state management for single-page site
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');
    
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize active nav link
    updateActiveNavLink();
    
    // Auto-activate Notes subsection when Posts section is accessed
    function activateNotesSubsection() {
        const postsSection = document.getElementById('posts');
        if (postsSection) {
            const notesButton = postsSection.querySelector('[data-target="note-content"]');
            const notesContent = document.getElementById('note-content');
            
            if (notesButton && notesContent) {
                // Remove active from all hamburger buttons in posts section
                const allButtons = postsSection.querySelectorAll('.hamburger-button');
                const allContents = postsSection.querySelectorAll('.content-panel');
                
                allButtons.forEach(btn => btn.classList.remove('active'));
                allContents.forEach(content => content.classList.remove('active'));
                
                // Activate Notes
                notesButton.classList.add('active');
                notesContent.classList.add('active');
            }
        }
    }
    
    // Activate Notes when Posts section is clicked or scrolled to
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#posts') {
                setTimeout(activateNotesSubsection, 100); // Small delay to ensure scroll completes
            }
        });
    });
    
    // Also activate Notes when scrolling to Posts section
    let postsSectionActive = false;
    window.addEventListener('scroll', function() {
        const postsSection = document.getElementById('posts');
        if (postsSection) {
            const sectionTop = postsSection.offsetTop - 100;
            const sectionHeight = postsSection.offsetHeight;
            const isInPostsSection = window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight;
            
            if (isInPostsSection && !postsSectionActive) {
                postsSectionActive = true;
                activateNotesSubsection();
            } else if (!isInPostsSection && postsSectionActive) {
                postsSectionActive = false;
            }
        }
    });
    
    // Posts tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Side drawer functionality for Experience page
    const categoryItems = document.querySelectorAll('.category-item, .year-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const isActive = this.classList.contains('active');
            
            // Close all other items in the same section
            const parentSection = this.closest('.left-panel');
            if (parentSection) {
                const otherItems = parentSection.querySelectorAll('.category-item, .year-item');
                const otherContents = parentSection.parentElement.querySelectorAll('.content-panel');
                
                otherItems.forEach(i => {
                    if (i !== this) {
                        i.classList.remove('active');
                    }
                });
                
                otherContents.forEach(c => {
                    if (c !== targetContent) {
                        c.classList.remove('active');
                    }
                });
            }
            
            // Toggle current item
            if (isActive) {
                this.classList.remove('active');
                targetContent.classList.remove('active');
                // Show default content
                const defaultContent = document.getElementById('default-content');
                if (defaultContent) {
                    defaultContent.classList.add('active');
                }
            } else {
                this.classList.add('active');
                targetContent.classList.add('active');
                // Hide default content
                const defaultContent = document.getElementById('default-content');
                if (defaultContent) {
                    defaultContent.classList.remove('active');
                }
            }
        });
    });
    
    // Education category expandable functionality
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const isActive = this.classList.contains('active');
            
            // Toggle current category
            if (isActive) {
                this.classList.remove('active');
                targetContent.classList.remove('expanded');
            } else {
                this.classList.add('active');
                targetContent.classList.add('expanded');
            }
        });
    });
    
    // Hamburger menu functionality for posts
    const hamburgerButtons = document.querySelectorAll('.hamburger-button');
    
    hamburgerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const isActive = this.classList.contains('active');
            
            // Close all other hamburger buttons
            const parentContainer = this.closest('.posts-hamburger');
            if (parentContainer) {
                const otherButtons = parentContainer.querySelectorAll('.hamburger-button');
                const otherContents = parentContainer.querySelectorAll('.content-panel');
                
                otherButtons.forEach(b => {
                    if (b !== this) {
                        b.classList.remove('active');
                    }
                });
                
                otherContents.forEach(c => {
                    if (c !== targetContent) {
                        c.classList.remove('active');
                    }
                });
            }
            
            // Toggle current button
            if (isActive) {
                this.classList.remove('active');
                targetContent.classList.remove('active');
                // Show default content
                const defaultContent = document.getElementById('default-content');
                if (defaultContent) {
                    defaultContent.classList.add('active');
                }
            } else {
                this.classList.add('active');
                targetContent.classList.add('active');
                // Hide default content
                const defaultContent = document.getElementById('default-content');
                if (defaultContent) {
                    defaultContent.classList.remove('active');
                }
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            navbar.style.backgroundColor = 'rgba(254, 254, 254, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(254, 254, 254, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        
        lastScrollTop = scrollTop;
    });
    
    // Intersection Observer for fade-in animations
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
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.course-item, .conference-card, .photo-item, .note-post');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Keyboard navigation for tabs
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeTab = document.querySelector('.tab-button.active');
            if (activeTab) {
                const tabs = Array.from(tabButtons);
                const currentIndex = tabs.indexOf(activeTab);
                let nextIndex;
                
                if (e.key === 'ArrowLeft') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
                } else {
                    nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
                }
                
                tabs[nextIndex].click();
            }
        }
    });
    
    // Initialize
    updateActiveNavLink();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize dark mode
    initDarkMode();
});

// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Add to navbar
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(darkModeToggle);
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '🌙';
        }
    });
}

// Utility function for smooth scrolling to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality (optional)
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollTop > 300) {
        if (!scrollToTopBtn) {
            const btn = document.createElement('button');
            btn.className = 'scroll-to-top';
            btn.innerHTML = '↑';
            btn.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: none;
                background-color: #4a5568;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                opacity: 0.8;
                transition: all 0.3s ease;
                z-index: 1000;
            `;
            btn.addEventListener('click', scrollToTop);
            btn.addEventListener('mouseenter', () => {
                btn.style.opacity = '1';
                btn.style.transform = 'scale(1.1)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.opacity = '0.8';
                btn.style.transform = 'scale(1)';
            });
            document.body.appendChild(btn);
        }
    } else if (scrollToTopBtn) {
        scrollToTopBtn.remove();
    }
});

// Function to show WeChat ID
function showWeChatID() {
    const wechatID = 'lin1065251277';
    
    // Create a modal or alert to show the WeChat ID
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        font-family: 'Inter', sans-serif;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    modalContent.innerHTML = `
        <h3 style="color: #991b1b; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">WeChat Contact</h3>
        <p style="margin-bottom: 1.5rem; color: #4a5568;">Add me on WeChat:</p>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <p style="font-size: 1.2rem; font-weight: 600; color: #991b1b; margin: 0;">${wechatID}</p>
        </div>
        <button onclick="this.closest('.wechat-modal').remove()" style="
            background: #991b1b;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
        ">Close</button>
    `;
    
    modal.className = 'wechat-modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Visitor Map Functionality
function initializeVisitorMap() {
    // Get or create visitor data in localStorage
    let visitorData = JSON.parse(localStorage.getItem('visitorData')) || {
        visitors: 0,
        pageViews: 0,
        countries: new Set(),
        lastVisit: null
    };
    
    // Check if this is a new visitor (not visited in last 24 hours)
    const now = new Date();
    const lastVisit = visitorData.lastVisit ? new Date(visitorData.lastVisit) : null;
    const isNewVisitor = !lastVisit || (now - lastVisit) > 24 * 60 * 60 * 1000;
    
    if (isNewVisitor) {
        visitorData.visitors += 1;
        visitorData.lastVisit = now.toISOString();
    }
    
    // Always increment page views
    visitorData.pageViews += 1;
    
    // Simulate country detection with realistic distribution
    const countries = [
        { code: 'US', name: 'United States', weight: 0.3 },
        { code: 'CN', name: 'China', weight: 0.2 },
        { code: 'UK', name: 'United Kingdom', weight: 0.15 },
        { code: 'DE', name: 'Germany', weight: 0.1 },
        { code: 'CA', name: 'Canada', weight: 0.08 },
        { code: 'JP', name: 'Japan', weight: 0.07 },
        { code: 'AU', name: 'Australia', weight: 0.05 },
        { code: 'FR', name: 'France', weight: 0.05 }
    ];
    
    // Weighted random selection
    const random = Math.random();
    let cumulativeWeight = 0;
    let selectedCountry = countries[0];
    
    for (const country of countries) {
        cumulativeWeight += country.weight;
        if (random <= cumulativeWeight) {
            selectedCountry = country;
            break;
        }
    }
    
    visitorData.countries.add(selectedCountry.code);
    
    // Save updated data
    localStorage.setItem('visitorData', JSON.stringify({
        ...visitorData,
        countries: Array.from(visitorData.countries)
    }));
    
    // Update display
    updateVisitorStats(visitorData);
    
    // Animate the dots
    animateMapDots();
}

function updateVisitorStats(data) {
    const visitorCountEl = document.getElementById('visitor-count');
    const pageViewsEl = document.getElementById('page-views');
    const countriesEl = document.getElementById('countries');
    
    if (visitorCountEl) {
        animateNumber(visitorCountEl, data.visitors);
    }
    
    if (pageViewsEl) {
        animateNumber(pageViewsEl, data.pageViews);
    }
    
    if (countriesEl) {
        animateNumber(countriesEl, data.countries.length);
    }
}

function animateNumber(element, targetNumber) {
    const startNumber = parseInt(element.textContent) || 0;
    const duration = 2000;
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * easeOutQuart);
        
        element.textContent = currentNumber.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function animateMapDots() {
    const dots = document.querySelectorAll('.map-dot');
    
    dots.forEach((dot, index) => {
        // Stagger the animation
        setTimeout(() => {
            dot.style.animation = 'none';
            dot.offsetHeight; // Trigger reflow
            dot.style.animation = 'pulse 2s infinite';
            
            // Add click event for demonstration
            dot.addEventListener('click', function() {
                showCountryInfo(this.title);
            });
        }, index * 200);
    });
}

function showCountryInfo(countryInfo) {
    // Create a simple tooltip or alert for demonstration
    const [country, visitors] = countryInfo.split(' - ');
    const message = `${country}: ${visitors}`;
    
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
}

// Initialize visitor map when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeVisitorMap();
});
