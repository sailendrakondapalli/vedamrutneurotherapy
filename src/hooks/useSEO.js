import { useEffect } from 'react';

const BASE_URL = 'https://neurotherapyindia.website';
const DEFAULT_IMAGE = `${BASE_URL}/images/guruji.png`;
const SITE_NAME = 'Vedamrut Neurotherapy';

/**
 * useSEO — dynamically updates <title>, meta, canonical, OG & Twitter tags.
 *
 * @param {object} options
 * @param {string} options.title        - Page title (without site name suffix)
 * @param {string} options.description  - Meta description (≤ 160 chars)
 * @param {string} options.keywords     - Comma-separated keywords
 * @param {string} [options.canonical]  - Canonical path e.g. "/about"
 * @param {string} [options.ogImage]    - Absolute image URL for OG/Twitter card
 * @param {string} [options.schema]     - JSON string for ld+json structured data
 */
const useSEO = ({
  title,
  description,
  keywords,
  canonical = '',
  ogImage = DEFAULT_IMAGE,
  schema = null,
} = {}) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Vedamrut Neurotherapy — Warangal`
      : 'Vedamrut Pain Management & Neurotherapy | NT. Parmar Ashok Kumar | Warangal';

    const canonicalURL = `${BASE_URL}${canonical}`;

    /* ── Title ── */
    document.title = fullTitle;

    const setMeta = (selector, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.match(/\[([^\]]+)="([^"]+)"\]/);
        if (attr) el.setAttribute(attr[1], attr[2]);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    /* ── Standard meta ── */
    setMeta('meta[name="description"]', description);
    setMeta('meta[name="keywords"]', keywords);

    /* ── Canonical ── */
    setLink('canonical', canonicalURL);

    /* ── Open Graph ── */
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalURL);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:site_name"]', SITE_NAME);
    setMeta('meta[property="og:type"]', 'website');

    /* ── Twitter Card ── */
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);
    setMeta('meta[name="twitter:card"]', 'summary_large_image');

    /* ── JSON-LD structured data (per-page) ── */
    const existingScript = document.getElementById('page-schema');
    if (schema) {
      if (existingScript) {
        existingScript.textContent = schema;
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-schema';
        script.textContent = schema;
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }

    /* ── Cleanup: restore home defaults on unmount ── */
    return () => {
      document.title =
        'Vedamrut Pain Management & Neurotherapy Treatment Centre | NT. Parmar Ashok Kumar | Warangal';
      const s = document.getElementById('page-schema');
      if (s) s.remove();
    };
  }, [title, description, keywords, canonical, ogImage, schema]);
};

export default useSEO;
