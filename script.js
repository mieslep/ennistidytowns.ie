// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// (Removed) Section fade-in on scroll. Content below the fold now renders
// immediately with no artificial delay.

// Modal functionality
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

const closeModal = (modal) => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
};

// Open modal on button/card click
document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Close modal on close button click
document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        closeModal(modal);
    });
});

// Close modal on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal);
        }
    }
});

// Prevent modal content clicks from closing modal
document.querySelectorAll('.modal-content').forEach(content => {
    content.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Polaroid lightbox: click any polaroid in a pair to view a larger square version
(() => {
    const polaroids = document.querySelectorAll('.polaroid-pair .polaroid');
    if (!polaroids.length) return;

    let lightbox;
    const ensureLightbox = () => {
        if (lightbox) return lightbox;
        lightbox = document.createElement('div');
        lightbox.className = 'polaroid-lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.innerHTML = `
            <button type="button" class="polaroid-lightbox-close" aria-label="Close image">
                <i class="fas fa-times"></i>
            </button>
            <figure class="polaroid polaroid-lightbox-figure">
                <img alt="">
                <figcaption></figcaption>
            </figure>
        `;
        document.body.appendChild(lightbox);
        // Close only when the backdrop itself is clicked (not the figure)
        lightbox.addEventListener('click', (e) => {
            if (lightbox.dataset.armed !== 'true') return;
            if (e.target === lightbox) closeLightbox();
        });
        // Explicit close button
        lightbox.querySelector('.polaroid-lightbox-close').addEventListener('click', (e) => {
            e.stopPropagation();
            closeLightbox();
        });
        // Don't let figure clicks bubble up and close
        lightbox.querySelector('.polaroid-lightbox-figure').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        return lightbox;
    };

    const openLightbox = (src, alt, caption) => {
        const lb = ensureLightbox();
        const img = lb.querySelector('img');
        img.src = src;
        img.alt = alt || '';
        const fig = lb.querySelector('.polaroid-lightbox-figure');
        const cap = lb.querySelector('figcaption');
        if (caption) {
            cap.textContent = caption;
            fig.classList.add('polaroid-captioned');
        } else {
            cap.textContent = '';
            fig.classList.remove('polaroid-captioned');
        }
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Arm the backdrop-close after a tick so the synthetic
        // click that opened the lightbox doesn't immediately close it (iOS ghost click)
        lb.dataset.armed = 'false';
        setTimeout(() => { lb.dataset.armed = 'true'; }, 350);
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    polaroids.forEach(p => {
        p.setAttribute('tabindex', '0');
        p.setAttribute('role', 'button');
        p.setAttribute('aria-label', 'View larger image');
        const trigger = (e) => {
            e.preventDefault();
            const img = p.querySelector('img');
            const captionEl = p.querySelector('figcaption');
            const caption = captionEl ? captionEl.textContent.trim() : '';
            if (img) openLightbox(img.currentSrc || img.src, img.alt, caption);
        };
        p.addEventListener('click', trigger);
        p.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') trigger(e);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
})();

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = 'Thank you for your message! We\'ll get back to you soon.';
                formStatus.classList.add('success');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem sending your message. Please try again or contact us on social media.';
            formStatus.classList.add('error');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}
