import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/navigation";
import ShareSM from './ShareSM';
import Fancybox from '@/utils/Fancybox';

export default function GalleryMobile({ site, i18n, images, accessibility, children = null }) {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className="relative block sm:hidden">
                {/* Btn Share */}
                <div className="absolute top-4 right-3 z-[11]">
                    <ShareSM site={site} i18n={i18n} />
                </div>
                {/* Btn Navigation */}
                <div className="next-gall-mobile absolute top-1/2 right-3 -translate-y-1/2 z-10 p-2 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
                <div className="prev-gall-mobile absolute top-1/2 left-3 -translate-y-1/2 z-10 p-2 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                </div>
                <Swiper
                    loop={false}
                    zoom={true}
                    spaceBetween={5}
                    effect={'fade'}
                    navigation={{
                        nextEl: '.next-gall-mobile',
                        prevEl: '.prev-gall-mobile',
                        disabledClass: 'hidden',
                    }}
                    className="mySwiper w-full h-[300px] bg-white"
                    modules={[Navigation]}
                >
                    {children && (
                        <SwiperSlide>
                            {children}
                        </SwiperSlide>
                    )}
                    {images.map((image: any, index: number) => (
                        <SwiperSlide key={index} className="rounded-lg">
                            <a data-fancybox="gallery" href={image.src} aria-label={accessibility.ariaLabelGallery}>
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={image.src}
                                    alt={accessibility.altImg}
                                    width={image.width}
                                    height={image.height}
                                    loading={index == 0 ? 'eager' : 'lazy'}
                                    decoding='async'
                                    srcSet={`${image.src} 240w, ${image.src} 600w, ${image.src} 720w, ${image.src} 840w, ${image.src} 994w `}
                                    sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${image.width}px`}
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Btn Open Gallery */}
                <div className="absolute bottom-4 right-3 z-10">
                    <a data-fancybox-trigger="gallery" aria-label={accessibility.ariaLabelGallery}>
                        <div className="flex items-center py-2 px-4 rounded-full bg-black/50 text-white shadow-md cursor-pointer transition duration-200 hover:bg-gray-200 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-library-photo size-5 mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" /><path d="M17 7h.01" /><path d="M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644" /></svg>
                            <p className="text-xs font-semibold">{images.length}</p>
                        </div>
                    </a>
                </div>
            </div>
        </Fancybox >
    )
}