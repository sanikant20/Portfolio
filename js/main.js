const sections = [
  'navbar',
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
  'footer',
];

async function loadSections() {
  const app = document.getElementById('app');

  const html = await Promise.all(
    sections.map((name) =>
      fetch(`sections/${name}.html`).then((r) => r.text())
    )
  );

  app.innerHTML = html.join('');

  init();
}

function init() {
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

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  // ===========================
  // STAGGER ANIMATION — Grids
  // ===========================

  document
    .querySelectorAll('.skills-grid, .projects-grid, .about-stats')
    .forEach((grid) => {
      Array.from(grid.querySelectorAll('.fade-up')).forEach((el, i) => {
        el.style.transitionDelay = `${i * 80}ms`;
      });
    });

  // ===========================
  // THEME TOGGLE
  // ===========================

  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'light' ? '☾' : '☀';
    localStorage.setItem('theme', theme);
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
}

loadSections();
