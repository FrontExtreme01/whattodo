import AOS from 'aos';
AOS.init()

document.querySelector('.navbarMobile').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.toggle('expanded');
    document.querySelector('.overlayMobile').classList.toggle('expandedOverlay');
});

document.querySelector('.overlayMobile').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.remove('expanded');
    document.querySelector('.overlayMobile').classList.remove('expandedOverlay');
});

document.querySelector('.btnClose').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.remove('expanded');
    document.querySelector('.overlayMobile').classList.remove('expandedOverlay');
});

document.querySelectorAll('[id^="nav-link-"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const subMenu = document.getElementById(`sub-menu-${link.id.split('-')[2]}`);
        const svgIcon = link.querySelector('svg');

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