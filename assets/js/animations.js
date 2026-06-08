(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');
  const staggerGroups = document.querySelectorAll('.reveal-stagger');
  const strips = document.querySelectorAll('.stage-strip');

  if (reduced) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
    staggerGroups.forEach((group) => {
      [...group.children].forEach((child) => child.classList.add('is-visible'));
    });
    strips.forEach((strip) => {
      strip.querySelectorAll('.stage-node').forEach((node) => node.classList.add('is-visible'));
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  revealItems.forEach((el) => {
    // Check if element is already visible in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      revealObserver.observe(el);
    }
  });

  const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      [...entry.target.children].forEach((child, index) => {
        setTimeout(() => child.classList.add('is-visible'), index * 120);
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  staggerGroups.forEach((group) => {
    const rect = group.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      [...group.children].forEach((child, index) => {
        setTimeout(() => child.classList.add('is-visible'), index * 120);
      });
    } else {
      staggerObserver.observe(group);
    }
  });

  const stripObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const nodes = entry.target.querySelectorAll('.stage-node');
      nodes.forEach((node, index) => {
        setTimeout(() => node.classList.add('is-visible'), index * 140);
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.28 });

  strips.forEach((strip) => {
    const rect = strip.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const nodes = strip.querySelectorAll('.stage-node');
      nodes.forEach((node, index) => {
        setTimeout(() => node.classList.add('is-visible'), index * 140);
      });
    } else {
      stripObserver.observe(strip);
    }
  });

  // Fallback: Ensure reveal elements are visible after a delay in case calculations failed
  // Use multiple timeouts to catch edge cases with slow DOM rendering or network delays
  const ensureVisibility = () => {
    revealItems.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        el.classList.add('is-visible');
      }
    });
    staggerGroups.forEach((group) => {
      [...group.children].forEach((child) => {
        if (!child.classList.contains('is-visible')) {
          child.classList.add('is-visible');
        }
      });
    });
    strips.forEach((strip) => {
      strip.querySelectorAll('.stage-node').forEach((node) => {
        if (!node.classList.contains('is-visible')) {
          node.classList.add('is-visible');
        }
      });
    });
  };

  // Immediate fallback for safety
  setTimeout(ensureVisibility, 0);

  // Primary fallback: 100ms (quick catch for slow DOM rendering)
  setTimeout(ensureVisibility, 100);

  // Secondary fallback: 300ms
  setTimeout(ensureVisibility, 300);

  // Tertiary fallback: 1000ms (catches very slow network scenarios)
  setTimeout(ensureVisibility, 1000);

  // Quaternary fallback: Ensure visibility on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(ensureVisibility, 50);
    });
  } else {
    // Page already loaded, ensure visibility now
    setTimeout(ensureVisibility, 50);
  }

  // Final safety net: ensure visibility after all other events
  window.addEventListener('load', () => {
    setTimeout(ensureVisibility, 100);
  });
})();
