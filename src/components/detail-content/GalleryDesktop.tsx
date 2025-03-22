import Fancybox from "@/utils/Fancybox";
import ShareSM from "@/components/detail-content/ShareSM";

export default function GalleryDesktop({ site, i18n, images, accessibility, children = null }) {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-2 relative xl:h-[500px]">
                {/* Btn Share */}
                <div className="absolute top-4 right-4 z-10">
                    <ShareSM site={site} i18n={i18n} />
                </div>
                {/* Gallery */}
                {children ?
                    (<div className="col-span-2 row-span-2">
                        {children}
                    </div>)
                    :
                    (<div className="col-span-2 row-span-2">
                        <a data-fancybox-trigger="gallery" aria-label={accessibility.ariaLabelGallery} className="cursor-pointer">
                            <img className="rounded-lg w-full h-full object-cover" src={images[0].src} alt={accessibility.altImg} width={images[0].width} height={images[0].height} loading="eager" decoding="async" srcSet={`${images[0].src} 240w, ${images[0].src} 600w, ${images[0].src} 720w, ${images[0].src} 840w, ${images[0].src} 994w `} sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${images[0].width}px`} />
                        </a>
                    </div>)
                }
                <div className="col-start-3">
                    <a data-fancybox-trigger="gallery" aria-label={accessibility.ariaLabelGallery} className="cursor-pointer">
                        <img className="rounded-lg w-full h-full object-cover" src={images[1].src} alt={accessibility.altImg} width={images[1].width} height={images[1].height} loading="lazy" decoding="async" srcSet={`${images[1].src} 240w, ${images[1].src} 600w, ${images[1].src} 720w, ${images[1].src} 840w, ${images[1].src} 994w `} sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${images[1].width}px`} />
                    </a>
                </div>
                <div className="col-start-4 hidden lg:block">
                    <a data-fancybox-trigger="gallery" aria-label={accessibility.ariaLabelGallery} className="cursor-pointer">
                        <img className="rounded-lg w-full h-full object-cover" src={images[2].src} alt={accessibility.altImg} width={images[2].width} height={images[2].height} loading="lazy" decoding="async" srcSet={`${images[2].src} 240w, ${images[2].src} 600w, ${images[2].src} 720w, ${images[2].src} 840w, ${images[2].src} 994w `} sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${images[2].width}px`} />
                    </a>
                </div>
                <div className="col-start-3 row-start-2">
                    <a data-fancybox-trigger="gallery" aria-label={accessibility.ariaLabelGallery} className="cursor-pointer">
                        <img className="rounded-lg w-full h-full object-cover" src={images[3].src} alt={accessibility.altImg} width={images[3].width} height={images[3].height} loading="lazy" decoding="async" srcSet={`${images[3].src} 240w, ${images[3].src} 600w, ${images[3].src} 720w, ${images[3].src} 840w, ${images[3].src} 994w `} sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${images[3].width}px`} />
                    </a>
                </div>
                <div className="col-start-4 row-start-2 hidden lg:block">
                    <a data-fancybox-trigger="gallery" aria-label={accessibility.ariaLabelGallery} className="cursor-pointer">
                        <img className="rounded-lg w-full h-full object-cover" src={images[4].src} alt={accessibility.altImg} width={images[4].width} height={images[4].height} loading="lazy" decoding="async" srcSet={`${images[4].src} 240w, ${images[4].src} 600w, ${images[4].src} 720w, ${images[4].src} 840w, ${images[4].src} 994w `} sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${images[4].width}px`} />
                    </a>
                </div>
                {/* Btn Open Gallery */}
                <div className="absolute bottom-4 right-4 z-10">
                    <a data-fancybox-trigger="gallery" aria-label={accessibility.ariaLabelGallery}>
                        <div className="flex items-center py-2 px-4 rounded-full bg-black/50 text-white shadow-md cursor-pointer transition duration-200 hover:bg-gray-200 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-library-photo size-5 mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" /><path d="M17 7h.01" /><path d="M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644" /></svg>
                            <p className="text-base font-semibold">{i18n.SEE_ALL_GALLERY}</p>
                        </div>
                    </a>
                </div>
                {/* Hidden Fancybox Links */}
                <div className="hidden">
                    {images.map((image, index) => (
                        <a key={index} data-fancybox="gallery" href={image.src} aria-label={accessibility.ariaLabelGallery}></a>
                    ))}
                </div>
            </div>
        </Fancybox>
    );
}