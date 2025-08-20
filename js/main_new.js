// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-button');
    const legacyMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn) {
        console.log('No mobile menu button found on this page - skipping mobile menu setup');
        return;
    }
    
    if (!legacyMenu) {
        console.log('No legacy menu found on this page - skipping mobile menu setup');
        return;
    }

    const isMobile = () => window.innerWidth < 768;
    let panel = null;
    let overlay = null;
    let isMenuOpen = false;

    const createMobileMenu = () => {
        if (!isMobile() || panel) return;
        
        // Create panel
        panel = document.createElement('div');
        panel.id = 'mobile-menu-panel';
        panel.className = 'md:hidden absolute left-0 right-0 mx-4 bg-white rounded-2xl shadow-2xl border border-gray-100 px-3 pt-3 pb-4 z-50';
        panel.style.top = 'calc(100% + 12px)'; // 12px Abstand zur Navbar
        
        // Create inner div with styling
        const inner = document.createElement('div');
        inner.className = 'flex flex-col space-y-1.5';
        
        // Move links from placeholder to panel with styling
        const links = legacyMenu.querySelectorAll('a');
        links.forEach((link) => {
            const newLink = link.cloneNode(false); // Clone without children
            const linkText = link.textContent.trim().toLowerCase();
            let iconPath = '';
            let isCtaButton = false;
            
            // Check if this is the "Platz buchen" button
            if (linkText.includes('platz buchen') || linkText.includes('buchen')) {
                isCtaButton = true;
                newLink.className = 'mobile-link font-semibold px-4 py-3 bg-primary hover:bg-secondary text-white rounded-md transition-all duration-200 flex items-center shadow-md';
                iconPath = 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'; // Calendar icon
            } else {
                newLink.className = 'mobile-link font-heading font-medium px-4 py-3 text-dark hover:bg-primary hover:text-white rounded-md transition-all duration-200 flex items-center';
                
                // Assign icons based on link content
                if (linkText.includes('home') || linkText.includes('startseite')) {
                    iconPath = 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6';
                } else if (linkText.includes('anlage') || linkText.includes('facility')) {
                    iconPath = 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4';
                } else if (linkText.includes('news') || linkText.includes('neuigkeiten') || linkText.includes('events')) {
                    iconPath = 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z';
                } else if (linkText.includes('sponsoren') || linkText.includes('partner')) {
                    iconPath = 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z';
                } else if (linkText.includes('kontakt') || linkText.includes('contact')) {
                    iconPath = 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z';
                } else if (linkText.includes('über') || linkText.includes('about')) {
                    iconPath = 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
                } else {
                    // Default icon for unknown menu items
                    iconPath = 'M13 7l5 5m0 0l-5 5m5-5H6';
                }
            }
            
            // Copy link attributes
            newLink.href = link.href;
            
            // Create icon
            const icon = document.createElement('svg');
            icon.className = isCtaButton ? 'w-4 h-4 mr-2' : 'w-5 h-5 mr-3 opacity-70';
            icon.setAttribute('fill', 'none');
            icon.setAttribute('stroke', 'currentColor');
            icon.setAttribute('viewBox', '0 0 24 24');
            icon.setAttribute('stroke-width', '2');
            
            const path = document.createElement('path');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('d', iconPath);
            icon.appendChild(path);
            
            // Add icon and text to new link
            newLink.appendChild(icon);
            newLink.appendChild(document.createTextNode(link.textContent.trim()));
            
            inner.appendChild(newLink);
        });
        
        panel.appendChild(inner);
        
        // Find the header container and append panel there
        const header = document.querySelector('header .container');
        
        if (header) {
            header.appendChild(panel);
        } else {
            // Fallback: append to legacyMenu's parent if header not found
            const parent = legacyMenu.parentNode;
            
            if (parent) {
                parent.appendChild(panel);
            } else {
                console.error('Could not find suitable parent for mobile menu panel');
                return;
            }
        }
        
        // Create overlay
        overlay = document.createElement('div');
        overlay.id = 'mobile-menu-overlay';
        overlay.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40';
        document.body.appendChild(overlay);
        
        // Add overlay click listener
        overlay.addEventListener('click', closeMenu);
        
        // Auto close when clicking a link
        panel.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                closeMenu();
            }
        });
    };

    const openMenu = () => {
        if (!isMobile()) return;
        createMobileMenu();
        if (panel && overlay) {
            panel.classList.add('open');
            overlay.classList.add('show');
            document.body.classList.add('mobile-menu-open');
            isMenuOpen = true;
        }
    };
    
    const closeMenu = () => {
        if (panel && overlay) {
            panel.classList.remove('open');
            overlay.classList.remove('show');
            document.body.classList.remove('mobile-menu-open');
            isMenuOpen = false;
        }
    };
    
    const toggleMenu = () => {
        if (!isMobile()) return;
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // Main button event listener
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Close on escape
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && isMenuOpen) closeMenu(); 
    });

    // Close on window resize to desktop
    window.addEventListener('resize', () => {
        if (!isMobile() && isMenuOpen) {
            closeMenu();
        }
    });
});
