(() => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('[data-nav]');

  navLinks.forEach((link) => {
    const target = link.getAttribute('href');
    if (!target) return;
    if (target === page || (target === 'index.html' && page === '')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
