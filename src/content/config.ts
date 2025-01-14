import { z, defineCollection, getCollection } from "astro:content";
// Define un `type` y un `schema` para cada colección
const toursCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.number(),
        lang: z.string().optional(),
        home: z.number().optional(),
        combo: z.number().optional(),
        slugGallery: z.string(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        lastMinute: z.number().optional(),
        categories: z.array(z.string()).optional(),
        price: z.number(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        highlights: z.array(z.string()),
        bokun: z.string(),
        calendar: z.string(),
        location: z.string(),
        duration: z.string(),
        testimonials: z.array(z.object({
            user: z.string(),
            stars: z.string(),
            date: z.string(),
            title: z.string(),
            review: z.string(),
            image: z.object({
                src: z.string()
            }).optional(),
        })).optional(),
    })
});

const restaurantsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.number(),
        home: z.number().optional(),
        lang: z.string().optional(),
        slugGallery: z.string(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        featured: z.string(),
        averageCost: z.string(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        highlights: z.array(z.string()),
        bokun: z.string().optional(),
        calendar: z.string().optional(),
        location: z.string(),
        cuisine: z.string(),
        dressCode: z.string(),
        schedule: z.string(),
        availability: z.string(),
        mapFrame: z.string(),
        testimonials: z.array(z.object({
            user: z.string(),
            stars: z.string(),
            date: z.string(),
            title: z.string(),
            review: z.string(),
            image: z.object({
                src: z.string()
            }).optional(),
        })).optional(),
    })
});

export const collections = {
    tours: toursCollection,
    restaurants: restaurantsCollection
};

// funcion para obtener todos los tours
export async function getAllTours(lang: string){
    const allTours = await getCollection('tours');
    return allTours.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && !tour.data.combo ).map((tour) => {
        const new_slug = tour.slug.split('/')[0];
        return { ...tour, new_slug };
    });
}

// Funcion para obtener tours destacados
export async function getToursHome(lang: string) {
    const tourHome = await getCollection('tours');
    return tourHome.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && tour.data.home === 1 && !tour.data.combo).map((tour) => {
        const new_slug = tour.slug.split('/')[0];
        return { ...tour, new_slug };
    });
}

// Funcion para obtener todos los combos de tours
export async function getAllCombos(lang: string) {
    const comboTours = await getCollection('tours');
    return comboTours.filter((combo) => combo.data.lang === lang && combo.data.status === 1 && combo.data.combo === 1).map((combo) => {
        const new_slug = combo.slug.split('/')[0];
        return { ...combo, new_slug };
    });
}

// Funcion para obtener combos destacados
export async function getCombosHome(lang: string) {
    const comboHome = await getCollection('tours');
    return comboHome.filter((combo) => combo.data.lang === lang && combo.data.status === 1 && combo.data.home === 1 && combo.data.combo === 1).map((combo) => {
        const new_slug = combo.slug.split('/')[0];
        return { ...combo, new_slug };
    });
}

// Funcion para obtener todos los last minute de tours
export async function getAllLastMinute(lang: string){
    const allLastMinute = await getCollection('tours');
    return allLastMinute.filter((tour) => tour.data.lang === lang && tour.data.status === 1 && tour.data.lastMinute === 1).map((tour) => {
        const new_slug = tour.slug.split('/')[0];
        return {...tour, new_slug};
    });
}

// Funcion para obtener una coleccion por nombre
export async function getCollectionByName(nameCollection: keyof typeof collections, lang: string) {
    const collectionAll = await getCollection(nameCollection);
    return collectionAll.filter((coll) => coll.data.lang === lang && coll.data.status === 1).map((coll) => {
        const new_slug = coll.slug.split('/')[0];
        return { ...coll, new_slug };
    });
}

// Funcion para obtener colecciones destacadas
export async function getCollectionHome(nameCollection: keyof typeof collections,lang: string) {
    const collectionHome = await getCollection(nameCollection);
    return collectionHome.filter((collHome) => collHome.data.lang === lang && collHome.data.status === 1 && collHome.data.home === 1).map((collHome) => {
        const new_slug = collHome.slug.split('/')[0];
        return { ...collHome, new_slug };
    });
}