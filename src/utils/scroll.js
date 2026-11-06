/**
 * Global smooth scroll utility
 * Integrates with Lenis momentum scroll and native fallback
 */
export function smoothScrollTo(target) {
  if (typeof window === "undefined") return;

  if (target === "home" || target === 0) {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const cleanTarget = target.startsWith("#") ? target.slice(1) : target;
  const el = document.getElementById(cleanTarget);

  if (el) {
    if (window.__lenis) {
      window.__lenis.scrollTo(el, {
        offset: -66,
        duration: 1.2
      });
    } else {
      const yOffset = -66;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}
