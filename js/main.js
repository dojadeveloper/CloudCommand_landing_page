const navHamburger = document.getElementById('nav-hamburger');
const navLinksList = document.getElementById('nav-links');

navHamburger.addEventListener('click', () => {
    const open = navLinksList.classList.toggle('open');
    navHamburger.classList.toggle('is-open', open);
    navHamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

navLinksList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        navLinksList.classList.remove('open');
        navHamburger.classList.remove('is-open');
        navHamburger.setAttribute('aria-label', 'Abrir menú');
    });
});

// Revela secciones al hacer scroll (respeta prefers-reduced-motion)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('[data-reveal]');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));
}
