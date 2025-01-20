export const languages: Record<string, { code: string; name: string; }> = {
    es: {
        code: 'es',
        name: 'Español'
    },
    en: {
        code: 'en',
        name: 'English'
    }
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
    es: {
        'nav.allTours': 'Todos los tours',
        'nav.tours': 'Actividades',
        'nav.tours.cheap': 'Tours baratos',
        'nav.tours.favorite': 'Favoritos de los viajeros',
        'nav.tours.adventure': 'Tours de aventura',
        'nav.tours.couples': 'Para parejas',
        'nav.tours.water': 'Actividades acuáticas',
        'nav.tours.ruins': 'Ruinas mayas',
        'nav.funParty': 'Diversión y fiesta',
        'nav.funParty.events': 'Eventos en Cancún',
        'nav.funParty.nightClubs': 'Discotecas en Cancún',
        'nav.funParty.beachClub': 'Clubs de playa en Cancún',
        'nav.golf': 'Golf',
        'nav.yachts': 'Yates',
        'nav.lastMinute': 'Ofertas',
        'nav.rest': 'Restaurantes',
        'nav.transportation': 'Transporte',
        'nav.combos': 'Combos',
        'nav.contact': 'Contacto',
        'nav.aboutUs': 'Sobre nosotros',
        'nav.terms': 'Términos de servicio',
        'nav.privacy': 'Política de privacidad',
        'footer.copyrigth': 'Derechos de autor WhatToDoInCancun.com Todos los derechos reservados.',
        'footer.design': 'Diseñado por What To Do In Cancun',
    },
    en: {
        'nav.allTours': 'All tours',
        'nav.tours': 'Tours',
        'nav.tours.cheap': 'Cheap Tours',
        'nav.tours.favorite': 'Traveles Favorite',
        'nav.tours.adventure': 'Adventure Tours',
        'nav.tours.couples': 'Tours for Couples',
        'nav.tours.water': 'Water Activities',
        'nav.tours.ruins': 'Mayan Ruins',
        'nav.funParty': 'Fun & Party',
        'nav.funParty.events': 'Events in Cancun',
        'nav.funParty.nightClubs': 'NightClubs in Cancun',
        'nav.funParty.beachClub': 'BeachClubs in Cancun',
        'nav.golf': 'Golf',
        'nav.yachts': 'Yachts',
        'nav.lastMinute': 'Last Minutes Deals',
        'nav.rest': 'Restaurants',
        'nav.transportation': 'Transportation',
        'nav.combos': 'Combos',
        'nav.contact': 'Contact',
        'nav.aboutUs': 'About us',
        'nav.terms': 'Terms of services',
        'nav.privacy': 'Privacy policy',
        'footer.copyrigth': 'Copyright WhatToDoInCancun.com All Rights Reserved.',
        'footer.design': 'Design by What To Do In Cancun',
    },
} as const;