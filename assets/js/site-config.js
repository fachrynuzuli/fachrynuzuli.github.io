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
    prompts: 'mailto:fachrynuzuli@gmail.com?subject=Prompt%20pack%20waitlist',
    freeware_lab: 'https://cal.com/fachrynuzuli/discovery'
  },
  // Legacy/Alternate keys found in HTML
  links: {
    twitter: 'https://x.com/fachrynuzuli',
    instagram: 'https://instagram.com/fachrynuzuli',
    linkedin: 'https://linkedin.com/in/fachrynuzuli',
    email: 'mailto:fachrynuzuli@gmail.com',
    bookCall: 'https://cal.com/fachrynuzuli/discovery',
    sprintCTA: 'https://cal.com/fachrynuzuli/discovery',
    contentPack: 'mailto:fachrynuzuli@gmail.com?subject=Freebuilder%20waitlist%3A%20Content%20Creation%20Pack',
    contextPack: 'mailto:fachrynuzuli@gmail.com?subject=Freebuilder%20waitlist%3A%20Context%20Management%20Pack',
    vibeCoding: 'mailto:fachrynuzuli@gmail.com?subject=Freebuilder%20waitlist%3A%20Vibe%20Coding%20Starter',
    seoPack: 'mailto:fachrynuzuli@gmail.com?subject=Freebuilder%20waitlist%3A%20SEO%20and%20Automation%20Pack',
    bundleCTA: 'mailto:fachrynuzuli@gmail.com?subject=Freebuilder%20waitlist%3A%20Complete%20Bundle',
    runbookCTA: 'https://fachry.substack.com'
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
