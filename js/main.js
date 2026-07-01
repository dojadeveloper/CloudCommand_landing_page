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
