import { z, defineCollection } from "astro:content";

// Define un `type` y un `schema` para cada colección
const toursCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.number(),
        lang: z.string().optional(),
        home: z.number().optional(),
        combo: z.number().optional(),
        lastMinute: z.number().optional(),
        earlyBird: z.number().optional(),
        notCustomEarlyBird: z.number().optional(),
        agencyPromo: z.object({
            slugAgency: z.string(),
            logo: z.string(),
            agencyName: z.string(),
            calendar: z.string().url()
        }).optional(),
        notShouldBring: z.number().optional(),
        slugGallery: z.string(),
        titleSeo: z.string().optional(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        categories: z.array(z.string()).optional(),
        price: z.number(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        highlights: z.array(z.string()).optional(),
        recommendedFor: z.array(z.string()).optional(),
        bokun: z.string().url().optional(),
        calendar: z.string().url().optional(),
        location: z.string(),
        duration: z.string(),
        transportation: z.string().optional(),
        frameYoutube: z.string().url().optional(),
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
        faqs: z.array(z.object({
            question: z.string(),
            answer: z.string()
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
        titleSeo: z.string().optional(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        averageCost: z.number().optional(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        highlights: z.array(z.string()),
        recommendedFor: z.array(z.string()).optional(),
        bokun: z.string().optional(),
        calendar: z.string().optional(),
        location: z.string(),
        cuisine: z.string(),
        dressCode: z.string(),
        menuPDF: z.string().optional(),
        hours: z.array(z.object({
            day: z.string(),
            open: z.string(),
        })).optional(),
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

const golfsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.number(),
        lang: z.string().optional(),
        home: z.number().optional(),
        slugGallery: z.string(),
        titleSeo: z.string().optional(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        price: z.number(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        duration: z.string(),
        holes: z.string(),
        yards: z.string(),
        bokun: z.string().optional(),
        calendar: z.string().optional(),
        location: z.string(),
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

const yachtsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.number(),
        lang: z.string().optional(),
        home: z.number().optional(),
        slugGallery: z.string(),
        titleSeo: z.string().optional(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        price: z.number(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        capacity: z.string(),
        size: z.string(),
        highlights: z.array(z.string()),
        bokun: z.string().optional(),
        calendar: z.string().optional(),
        location: z.string(),
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
        faqs: z.array(z.object({
            question: z.string(),
            answer: z.string()
        })).optional(),
    })
});

const partiesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.number(),
        lang: z.string().optional(),
        home: z.number().optional(),
        type: z.enum(['NIGHTCLUB', 'BEACHCLUB']),
        slugGallery: z.string(),
        titleSeo: z.string().optional(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        lastMinute: z.number().optional(),
        earlyBird: z.number().optional(),
        price: z.number(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        video: z.string().optional(),
        duration: z.string(),
        music: z.string().optional(),
        dressCode: z.string().optional(),
        consumption: z.string(),
        admission: z.string(),
        bokun: z.string().optional(),
        calendar: z.string().optional(),
        location: z.string(),
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

const topThingsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.number().optional(),
        home: z.number().optional(),
        lang: z.string().optional(),
        title: z.string(),
        description: z.string(),
        recommend: z.string(),
        price: z.number().optional(),
        duration: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        url: z.string().optional(),
        highlights: z.array(z.object({
            title: z.string(),
            description: z.string()
        })).optional(),
        includes: z.array(z.string()).optional(),
        notIncludes: z.array(z.string()).optional(),
    })
});

export const collections = {
    tours: toursCollection,
    restaurants: restaurantsCollection,
    golfs: golfsCollection,
    yachts: yachtsCollection,
    parties: partiesCollection,
    topthings: topThingsCollection
};