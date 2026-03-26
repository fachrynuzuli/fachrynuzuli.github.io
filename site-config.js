/**
 * site-config.js
 * ──────────────
 * Centralized link & settings management.
 * Edit URLs here — both pages pick them up automatically.
 */

const SITE = {
  links: {
    // ─── CTA / Booking ───
    bookCall:       '#',              // e.g. 'https://calendly.com/fachrynuzuli'
    sprintCTA:      '#',              // e.g. Gumroad checkout for MVP Sprint
    bundleCTA:      '#',              // e.g. Gumroad checkout for Complete Bundle
    runbookCTA:     '#',              // e.g. email signup / lead magnet

    // ─── Product CTAs (Prompt Files) ───
    contentPack:    '#',              // Content Creation Pack checkout
    contextPack:    '#',              // Context Management Pack checkout
    vibeCoding:     '#',              // Vibe Coding Starter checkout
    seoPack:        '#',              // SEO & Automation Pack checkout

    // ─── Social ───
    twitter:        '#',              // e.g. 'https://x.com/fachrynuzuli'
    instagram:      '#',              // e.g. 'https://instagram.com/fachrynuzuli'
    linkedin:       '#',              // e.g. 'https://linkedin.com/in/fachrynuzuli'
    email:          'mailto:#',       // e.g. 'mailto:hello@fachrynuzuli.com'
  },

  meta: {
    year: new Date().getFullYear(),
    location: 'Riau, Indonesia',
  }
};

// ─── Auto-bind links to [data-link] elements ───
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-link]').forEach(el => {
    const key = el.getAttribute('data-link');
    let url = null;

    // Support dot notation: "links.bookCall"
    const parts = key.split('.');
    let ref = SITE;
    for (const part of parts) {
      if (ref && ref[part] !== undefined) {
        ref = ref[part];
      } else {
        ref = null;
        break;
      }
    }
    url = ref;

    if (url && typeof url === 'string') {
      if (el.tagName === 'A') {
        el.href = url;
      } else if (el.tagName === 'BUTTON') {
        el.addEventListener('click', () => window.open(url, '_blank'));
      }
    }
  });

  // Auto-fill meta values
  document.querySelectorAll('[data-meta]').forEach(el => {
    const key = el.getAttribute('data-meta');
    const parts = key.split('.');
    let ref = SITE;
    for (const part of parts) {
      if (ref && ref[part] !== undefined) {
        ref = ref[part];
      } else {
        ref = null;
        break;
      }
    }
    if (ref !== null) {
      el.textContent = ref;
    }
  });
});
