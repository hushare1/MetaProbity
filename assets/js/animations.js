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

  revealItems.forEach((el) => revealObserver.observe(el));

  const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      [...entry.target.children].forEach((child, index) => {
        setTimeout(() => child.classList.add('is-visible'), index * 120);
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  staggerGroups.forEach((group) => staggerObserver.observe(group));

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

  strips.forEach((strip) => stripObserver.observe(strip));
})();
