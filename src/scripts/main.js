// Navbar mobile
document.querySelector('.navbarMobile').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.toggle('expanded');
    document.querySelector('.overlayMobile').classList.toggle('expandedOverlay');
    document.querySelector('#body').classList.add('overflow-hidden');
});

document.querySelector('.overlayMobile').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.remove('expanded');
    document.querySelector('.overlayMobile').classList.remove('expandedOverlay');
    document.querySelector('#body').classList.remove('overflow-hidden');
});

document.querySelector('.btnClose').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.remove('expanded');
    document.querySelector('.overlayMobile').classList.remove('expandedOverlay');
    document.querySelector('#body').classList.remove('overflow-hidden');
});
// Icon arrow down navbar mobile
document.querySelectorAll('[id^="nav-link-"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const subMenu = document.getElementById(`sub-menu-${link.id.split('-')[2]}`);
        const svgIcon = link.querySelector('.svgArrowDown');

        if (subMenu.style.height === '0px' || !subMenu.style.height) {
            subMenu.style.height = `${subMenu.scrollHeight}px`;
            subMenu.classList.add('mt-5');
            svgIcon.classList.add('rotate-180');
        } else {
            subMenu.style.height = '0px';
            subMenu.classList.remove('mt-5');
            svgIcon.classList.remove('rotate-180');
        }
    });
});

// Smooth scroll para los links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Evento scroll up Header
const handleScroll = () => {
    let lastScroll = 0;
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll) {
            header.classList.remove('top-3');
            header.classList.add('-top-3');
            header.classList.add('-translate-y-full');
        } else if (currentScroll < lastScroll) {
            header.classList.remove('-translate-y-full');
            header.classList.remove('-top-3');
            header.classList.add('top-3');
        }
        lastScroll = currentScroll;
    });
};

handleScroll();