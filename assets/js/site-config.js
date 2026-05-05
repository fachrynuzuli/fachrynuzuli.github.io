/**
 * site-config.js
 * Centralized configuration for all Fachry Nuzuli portfolio properties.
 */

const CONFIG = {
  socials: {
    x: 'https://x.com/fachrynuzuli',
    instagram: 'https://instagram.com/fachrynuzuli',
    linkedin: 'https://linkedin.com/in/fachrynuzuli',
    substack: 'https://fachrynuzuli.substack.com',
    github: 'https://github.com/fachrynuzuli'
  },
  ctas: {
    email: 'mailto:fachrynuzuli@gmail.com',
    booking: 'https://cal.com/fachrynuzuli/discovery',
    sprint: 'https://cal.com/fachrynuzuli/discovery',
    prompts: 'javascript:void(0)',
    freeware_lab: 'javascript:void(0)'
  },
  // Legacy/Alternate keys found in HTML
  links: {
    twitter: 'https://x.com/fachrynuzuli',
    instagram: 'https://instagram.com/fachrynuzuli',
    linkedin: 'https://linkedin.com/in/fachrynuzuli',
    email: 'mailto:fachrynuzuli@gmail.com',
    bookCall: 'https://cal.com/fachrynuzuli/discovery',
    sprintCTA: 'https://cal.com/fachrynuzuli/discovery',
    contentPack: 'javascript:void(0)',
    contextPack: 'javascript:void(0)',
    vibeCoding: 'javascript:void(0)',
    seoPack: 'javascript:void(0)',
    bundleCTA: 'javascript:void(0)',
    runbookCTA: 'javascript:void(0)'
  },
  meta: {
    year: new Date().getFullYear(),
    lastUpdated: 'April 2026',
    location: 'Riau, Indonesia'
  }
};

function injectConfig() {
  // Inject Links
  const linkElements = document.querySelectorAll('[data-link]');
  linkElements.forEach(el => {
    const key = el.getAttribute('data-link');
    const parts = key.split('.');
    let value = CONFIG;
    
    for (const part of parts) {
      if (value && value[part] !== undefined) {
        value = value[part];
      } else {
        value = undefined;
        break;
      }
    }

    if (value !== undefined) {
      if (el.tagName === 'A') {
        el.href = value;
        if (value === 'javascript:void(0)') {
          el.title = 'Coming soon';
          // Only add styling if not already styled for hover
          if (!el.classList.contains('nav-cta') && !el.classList.contains('btn-primary')) {
             el.style.opacity = '0.6';
          }
        }
      } else {
        el.textContent = value;
      }
    }
  });

  // Inject Meta Text (if any [data-meta] still exist and don't use [data-link] pattern)
  const metaElements = document.querySelectorAll('[data-meta]');
  metaElements.forEach(el => {
    const key = el.getAttribute('data-meta');
    const parts = key.split('.');
    let value = CONFIG;
    
    for (const part of parts) {
      if (value && value[part] !== undefined) {
        value = value[part];
      } else {
        value = undefined;
        break;
      }
    }
    
    if (value !== undefined) {
      el.textContent = value;
    }
  });
}

// Run injection on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectConfig);
} else {
  injectConfig();
}
