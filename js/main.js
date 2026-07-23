const sections = [
  'navbar',
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact',
  'footer',
];

async function loadSections() {
  const app = document.getElementById('app');

  try {
    const html = await Promise.all(
      sections.map(async (name) => {
        const res = await fetch(`sections/${name}.html`);
        if (!res.ok) throw new Error(`Failed to load ${name}.html`);
        return res.text();
      })
    );

    app.innerHTML = html.join('');
    app.classList.add('loaded');
  } catch (err) {
    app.innerHTML = `<div class="load-error"><p>⚠️ Failed to load content. Please try refreshing.</p><p>${err.message}</p></div>`;
    return;
  }

  init();
}

function init() {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // ===========================
  // SCROLL ANIMATION — Fade Up
  // ===========================

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$('.fade-up').forEach((el) => observer.observe(el));

  // ===========================
  // STAGGER ANIMATION — Grids
  // ===========================

  $$('.skills-grid, .projects-grid, .about-stats, .exp-list').forEach((grid) => {
    Array.from(grid.querySelectorAll('.fade-up')).forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
    });
  });

  // ===========================
  // THEME TOGGLE
  // ===========================

  const html = document.documentElement;
  const toggle = $('.theme-toggle');

  function setTheme(theme) {
    html.classList.add('theme-transitioning');
    html.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'light' ? '☾' : '☀';
    toggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
    localStorage.setItem('theme', theme);
    setTimeout(() => html.classList.remove('theme-transitioning'), 300);
  }

  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else {
    setTheme('dark');
  }

  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    setTheme(next);
  });

  // ===========================
  // HAMBURGER MENU
  // ===========================

  const hamburger = $('.hamburger');
  const navLinks = $('.nav-links');

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    $$('a', navLinks).forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });

    // Close on click outside (click on overlay background)
    navLinks.addEventListener('click', (e) => {
      if (e.target === navLinks) {
        closeMenu();
      }
    });
  }

  // ===========================
  // ACTIVE NAV LINK
  // ===========================

  const navAnchors = $$('.nav-links a');

  function updateActiveLink() {
    let current = '';
    $$('section[id]').forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach((a) => {
      const href = a.getAttribute('href').replace('#', '');
      a.style.fontWeight = href === current ? '700' : '';
      if (href === current) {
        a.style.color = 'var(--accent)';
      } else {
        a.style.color = '';
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ===========================
  // CONTACT FORM
  // ===========================

  const form = $('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = $('.form-submit', form);
      btn.textContent = 'Sending…';
      btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then((res) => {
          if (res.ok) {
            form.innerHTML = '<p class="form-success">Message sent! I\'ll get back to you soon. 🙌</p>';
          } else {
            throw new Error('Server error');
          }
        })
        .catch(() => {
          btn.textContent = 'Try again ↗';
          btn.disabled = false;
        });
    });
  }

  // ===========================
  // SMOOTH SCROLL OFFSET
  // ===========================

  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      if (anchor.getAttribute('href') === '#') return;
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===========================
  // BACK TO TOP
  // ===========================

  const backToTop = $('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===========================
  // TYPEWRITER EFFECT
  // ===========================

  $$('.typewriter').forEach((el) => {
    const words = JSON.parse(el.getAttribute('data-words') || '[]');
    if (!words.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = words[0];
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const current = words[wordIndex];
      el.textContent = current.substring(0, charIndex);

      if (!isDeleting) {
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
        charIndex++;
      } else {
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500);
          return;
        }
        charIndex--;
      }

      setTimeout(type, isDeleting ? 40 : 80);
    }

    type();
  });

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSections);
} else {
  loadSections();
}
