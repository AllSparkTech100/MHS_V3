import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * useScrollReveal
 * A small reusable hook that applies a consistent on-scroll reveal animation
 * to elements matched by selector (default: [data-animate]).
 *
 * Options: { selector, start, y, duration, stagger }
 */
export default function useScrollReveal(options = {}) {
  const {
    selector = '[data-animate]',
    start = 'top 85%',
    y = 30,
    duration = 0.7,
    stagger = 0.12,
    ease = 'power2.out',
  } = options;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = gsap.utils.toArray(selector);

    if (prefersReduced) {
      targets.forEach((t) => gsap.set(t, { clearProps: 'all', opacity: 1 }));
      return;
    }

    targets.forEach((el) => {
      // animate immediate children for a staggered reveal while keeping layout
      const children = el.children && el.children.length ? Array.from(el.children) : [el];
      gsap.set(children, { y, opacity: 0 });
      gsap.to(children, {
        y: 0,
        opacity: 1,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch {
        // ignore
      }
    };
    // selector intentionally not included in deps to allow static usage per page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
