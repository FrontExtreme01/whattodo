const domain = import.meta.env.WP_DOMAIN;
const apiURl = `${domain}/wp-json/wp/v2`;

// Obtener el total de posts/entradas
export const getTotalPosts = async () => {
    const response = await fetch(`${apiURl}/posts?per_page=1`);

    if (!response.ok) {
        throw new Error('Failed to fetch total posts');
    }

    const totalPosts = response.headers.get('X-WP-Total');

    if (!totalPosts) {
        throw new Error('No posts found');
    }

    return parseInt(totalPosts, 10);
}

// Obtener la información de una página
export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiURl}/pages?slug=${slug}`);

    if (!response.ok) {
        throw new Error('Failed to fetch page info');
    }

    const [data] = await response.json();
    const { title: { rendered: title }, content: { rendered: content } } = data;

    return { title, content };
};

// Obtener detalles de un post/entrada
export const getPostInfo = async (slug: string) => {
    const response = await fetch(`${apiURl}/posts?slug=${slug}&_embed`);

    if (!response.ok) {
        throw new Error('Failed to fetch page info');
    }

    const [data] = await response.json();
    const {
        title: { rendered: title },
        content: { rendered: content },
        yoast_head_json: { 
            title: seoTitle, 
            description: seoDescription,
            og_type: seoType,
        },
        date,
    } = data;

    const featuredImage = data._embedded['wp:featuredmedia']?.[0]?.source_url;

    const categories = data._embedded['wp:term'][0];

    return { title, content, date, seoTitle, seoDescription, seoType, featuredImage, categories };
};

// Obtener los últimos posts/entradas
export const getLatestPosts = async ({ perPage = 10 }: { perPage?: number } = {}) => {  
    const response = await fetch(`${apiURl}/posts?per_page=${perPage}&_embed`);

    if (!response.ok) {
        throw new Error('Failed to fetch latest posts');
    }

    const results = await response.json();
    if (!results.length) {
        throw new Error('No posts found');
    }

    const posts = results.map(post => {
        const {
            title: { rendered: title },
            excerpt: { rendered: excerpt },
            date,
            slug
        } = post;

        const featuredImage = post._embedded['wp:featuredmedia']?.[0]?.source_url;

        const categories = post._embedded['wp:term'][0];

        return { title, excerpt, date, slug, featuredImage, categories };
    })

    return posts;
}

// Obtener posts/entradas por página
export const getPostsByPage = async ({ perPage = 10, page = 1 }: { perPage?: number; page?: number } = {}) => {  
    const response = await fetch(`${apiURl}/posts?per_page=${perPage}&page=${page}&_embed`);

    if (!response.ok) {
        throw new Error('Failed to fetch posts by page');
    }

    const results = await response.json();
    if (!results.length) {
        throw new Error('No posts found');
    }

    const posts = results.map(post => {
        const {
            title: { rendered: title },
            excerpt: { rendered: excerpt },
            date,
            slug
        } = post;

        const featuredImage = post._embedded['wp:featuredmedia']?.[0]?.source_url;

        const categories = post._embedded['wp:term'][0];

        return { title, excerpt, date, slug, featuredImage, categories };
    })
    
    return posts;
}

// Obtener los posts/entradas por categoría usando el slug
export const getPostsByCategory = async (categorySlug: string, { perPage = 10 }: { perPage?: number } = {}) => {
    // Obtener el ID de la categoría a partir del slug
    const categoryResponse = await fetch(`${apiURl}/categories?slug=${categorySlug}`);
    if (!categoryResponse.ok) {
        throw new Error('Failed to fetch category by slug');
    }

    const [category] = await categoryResponse.json();
    if (!category) {
        throw new Error('Category not found');
    }

    const categoryId = category.id;

    // Obtener los posts de la categoría
    const response = await fetch(`${apiURl}/posts?per_page=${perPage}&categories=${categoryId}&_embed`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts by category');
    }

    const results = await response.json();
    if (!results.length) {
        throw new Error('No posts found');
    }

    const posts = results.map(post => {
        const {
            title: { rendered: title },
            excerpt: { rendered: excerpt },
            date,
            slug
        } = post;

        const featuredImage = post._embedded['wp:featuredmedia']?.[0]?.source_url;

        const categories = post._embedded['wp:term'][0];

        return { title, excerpt, date, slug, featuredImage, categories };
    });

    return posts;
};