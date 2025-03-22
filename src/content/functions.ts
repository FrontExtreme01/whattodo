import { getCollection } from "astro:content";
import type { collections } from "./config";

// -----------------------------------
// FUNCIONES ESPECIFICAS
// -----------------------------------

// Todos los Tours
export async function   getAllTours(lang: string) {
    const allTours = await getCollection('tours');
    return allTours.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && !tour.data.combo).map((tour) => {
        const new_slug = tour.slug.split('/')[0];
        return { ...tour, new_slug };
    });
}

// Tours destacados
export async function getToursHome(lang: string) {
    const tourHome = await getCollection('tours');
    return tourHome.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && tour.data.home === 1 && !tour.data.combo).map((tour) => {
        const new_slug = tour.slug.split('/')[0];
        return { ...tour, new_slug };
    });
}

// Tours por categoria
export async function getToursByCategory(category: string, lang: string) {
    const toursByCategory = await getCollection('tours');
    return toursByCategory.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && tour.data.categories?.includes(category)).map((tour) => {
        const new_slug = tour.slug.split('/')[0];
        return { ...tour, new_slug };
    });
}

// Tours con Promo de Agencia
export async function getToursAgency(lang: string) {
    const toursAgency = await getCollection('tours');
    return toursAgency.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && tour.data.agencyPromo?.slugAgency ).map((tour) => {
        const new_slug = tour.slug.split('/')[0];
        return { ...tour, new_slug };
    });
}

// Todos los Combos
export async function getAllCombos(lang: string) {
    const comboTours = await getCollection('tours');
    return comboTours.filter((combo) => combo.data.lang === lang && combo.data.status === 1 && combo.data.combo === 1).map((combo) => {
        const new_slug = combo.slug.split('/')[0];
        return { ...combo, new_slug };
    });
}

// Todas las fiestas por tipo
export async function getPartiesType(type: string, lang: string) {
    const partiesType = await getCollection('parties');
    return partiesType.filter((party) => party.data.lang === lang && party.data.status === 1 && party.data.type === type).map((party) => {
        const new_slug = party.slug.split('/')[0];
        return { ...party, new_slug };
    });
};

// Todos los eventos
// export async function getPartiesEvent(lang: string) {
//     const partiesEvent = await getCollection('parties');
//     return partiesEvent.filter((party) => party.data.lang === lang && party.data.status === 1 && party.data.event === 1).map((party) => {
//         const new_slug = party.slug.split('/')[0];
//         return { ...party, new_slug };
//     });
// };

// Todos las ofertas Last Minute || Early Birds
export async function getTypeDeal(typeDeal: string, lang: string) {
    const tours = await getCollection('tours');
    const parties = await getCollection('parties');

    const dealTours = tours.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && tour.data[typeDeal] === 1);
    const dealParties = parties.filter((party) => party.data.lang === lang && party.data.status === 1 && party.data[typeDeal] === 1);

    const combinedEntries = [...dealTours, ...dealParties];

    return combinedEntries.map((entry) => {
        const new_slug = entry.slug.split('/')[0];
        return { ...entry, new_slug };
    });
}

// Blog Top 10 Things to Do
export async function getTopThings(lang: string) {
    const topThings = await getCollection('topthings');
    return topThings.filter((top) => top.data.lang === lang).map((top) => {
        return { ...top };
    });
}

// -----------------------------------
// FUNCIONES GENERALES
// -----------------------------------

// Colecciones por nombre
export async function getCollectionByName(nameCollection: keyof typeof collections, lang: string) {
    const collectionAll = await getCollection(nameCollection);
    return collectionAll.filter((coll) => coll.data.lang === lang && coll.data.status === 1).map((coll) => {
        const new_slug = coll.slug.split('/')[0];
        return { ...coll, new_slug };
    });
}

// Colecciones destacadas
export async function getCollectionHome(nameCollection: keyof typeof collections, lang: string) {
    const collectionHome = await getCollection(nameCollection);
    return collectionHome.filter((collHome) => collHome.data.lang === lang && collHome.data.status === 1 && collHome.data.home === 1).map((collHome) => {
        const new_slug = collHome.slug.split('/')[0];
        return { ...collHome, new_slug };
    });
}

// -----------------------------------
// FUNCIONES DE UTILIDAD
// -----------------------------------

// Truncar textos
export function truncateText(text: string, limit: number) {
    if (text.length <= limit) {
        return { visibleText: text, hiddenText: '' };
    }

    const visibleText = text.slice(0, limit);
    const hiddenText = text.slice(limit);

    return { visibleText, hiddenText };
}