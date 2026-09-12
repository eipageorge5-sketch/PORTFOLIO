/* ================================================================
   GEORGE MORUITA EIPA — PORTFOLIO SCRIPTS
   ================================================================
   Sections:
   1.  DOMContentLoaded Guard
   2.  AOS (Animate On Scroll) Init
   3.  Typed.js — Hero Typing Animation
   4.  Hamburger / Mobile Nav
   5.  Smooth Active Nav Link Highlight
   6.  Modal (Python Code Showcase)
   7.  Skill Bar Animation on Scroll
   8.  Navbar Scroll Shadow
   9.  Form Submission Feedback
   10. Keyboard Accessibility Helpers
   ================================================================ */


/* ================================================================
   1. DOMContentLoaded Guard
   — All logic runs after the DOM is fully parsed
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {


  /* ==============================================================
     2. AOS — Animate On Scroll
     ============================================================== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 900,   // animation duration in ms
      once: true,      // animate only the first time element enters view
      offset: 80,      // px from bottom of viewport to trigger
      easing: 'ease-out-cubic',
    });
  }


  /* ==============================================================
     3. Typed.js — Hero Typing Animation
     Strings updated to reflect George's real CV role titles
     ============================================================== */
  if (typeof Typed !== 'undefined') {
    const typingEl = document.querySelector('.typing');
    if (typingEl) {
      new Typed('.typing', {
        strings: [
          'Full-Stack Software Engineer',
          'Backend API Developer',
          'SaaS Platform Builder',
          'Digital Archivist',
        ],
        typeSpeed:  75,
        backSpeed:  45,
        backDelay:  1800,
        startDelay: 400,
        loop:       true,
        smartBackspace: true,
      });
    }
  }


  /* ==============================================================
     4. Hamburger / Mobile Nav
     Toggles .active on #mobile-nav and updates aria-expanded
     ============================================================== */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {

    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when any link inside it is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile nav when clicking anywhere outside it
    document.addEventListener('click', (e) => {
      if (
        mobileNav.classList.contains('active') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        mobileNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ==============================================================
     5. Active Nav Link Highlight
     Highlights the nav link whose section is currently in view
     ============================================================== */
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  if (sections.length && navAnchors.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navAnchors.forEach(a => {
              a.style.color = '';  // reset all
              if (a.getAttribute('href') === `#${id}`) {
                a.style.color = 'var(--orange)';
              }
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => sectionObserver.observe(section));
  }


  /* ==============================================================
     6. Modal — Python Code Showcase
     Opens / closes #codeModal with .active class
     ============================================================== */
  const modal     = document.getElementById('codeModal');
  const closeBtn  = document.querySelector('.modal-close');

  // openModal() is called from HTML inline onclick — expose globally
  window.openModal = function () {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }
  };

  window.closeModal = function () {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Close button inside modal
  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeModal);
  }

  // Close when clicking the backdrop (outside the modal box)
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      window.closeModal();
    }
  });


  /* ==============================================================
     7. Skill Bar Animation on Scroll
     Animates skill bar widths when the #skills section enters view.
     Each .skill-bar-fill must have its target width set as a
     data-width attribute OR as an inline style="width: XX%"
     already defined in the HTML.
     ============================================================== */
  const skillSection = document.getElementById('skills');
  const skillBars    = document.querySelectorAll('.skill-bar-fill');

  if (skillSection && skillBars.length) {

    // Store target widths before zeroing them out
    skillBars.forEach(bar => {
      const targetWidth = bar.style.width || bar.dataset.width || '0%';
      bar.dataset.width = targetWidth;
      bar.style.width   = '0%';
      bar.style.transition = 'none'; // prevent flash on load
    });

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skillBars.forEach((bar, i) => {
              // Stagger each bar slightly for a cascading effect
              setTimeout(() => {
                bar.style.transition = 'width 1.2s ease-in-out';
                bar.style.width      = bar.dataset.width;
              }, i * 80);
            });
            skillObserver.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.25 }
    );

    skillObserver.observe(skillSection);
  }


  /* ==============================================================
     8. Navbar Scroll Shadow
     Adds a subtle box-shadow to the navbar when page is scrolled
     down, to reinforce the frosted-glass separation.
     ============================================================== */
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    const handleNavScroll = () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // run once on load in case page is already scrolled
  }


  /* ==============================================================
     9. Contact Form Submission Feedback
     Shows an inline success / error message after Formspree
     responds, so the user doesn't get a blank page redirect.
     ============================================================== */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn  = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';

      // Loading state
      if (submitBtn) {
        submitBtn.disabled   = true;
        submitBtn.innerHTML  = 'Sending… <i class="fas fa-spinner fa-spin"></i>';
      }

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method:  'POST',
          body:    formData,
          headers: { 'Accept': 'application/json' },
        });

        if (response.ok) {
          // Success
          showFormMessage(contactForm, 'success', '✅ Message sent! I\'ll get back to you soon.');
          contactForm.reset();
        } else {
          throw new Error('Server error');
        }

      } catch (err) {
        showFormMessage(contactForm, 'error', '❌ Something went wrong. Please email me directly at eipageorge5@gmail.com');
      } finally {
        if (submitBtn) {
          submitBtn.disabled  = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

  /**
   * Injects a temporary feedback message below the form.
   * @param {HTMLElement} form   - The form element
   * @param {'success'|'error'} type
   * @param {string} message
   */
  function showFormMessage(form, type, message) {
    // Remove any existing message
    const existing = form.querySelector('.form-feedback');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = 'form-feedback';
    msg.textContent = message;
    msg.style.cssText = `
      margin-top: 0.75rem;
      font-size: 0.875rem;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid ${type === 'success' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'};
      background: ${type === 'success' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)'};
      color: ${type === 'success' ? '#86efac' : '#fca5a5'};
    `;

    form.appendChild(msg);

    // Auto-remove after 6 seconds
    setTimeout(() => msg.remove(), 6000);
  }


  /* ==============================================================
     10. Keyboard Accessibility Helpers
     ============================================================== */

  // Allow Enter key to trigger buttons styled as links
  document.querySelectorAll('[role="button"]').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });

  // Trap focus inside modal when open (basic implementation)
  if (modal) {
    modal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !modal.classList.contains('active')) return;

      const focusable = modal.querySelectorAll(
        'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }


}); // end DOMContentLoaded
