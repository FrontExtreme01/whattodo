import { useTranslatedPath } from '@/i18n/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/effect-coverflow";

export default function SliderDesktop({ slides, lang }: any) {
    const translatedPath = useTranslatedPath(lang);

    return (
        <div className="hidden lg:block relative">
            <Swiper
                loop={true}
                zoom={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.05,
                        spaceBetween: 20,
                    },
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'border border-green-700 rounded-full w-12 h-2 inline-block mx-1 cursor-pointer',
                    bulletActiveClass: 'bg-green-700',
                    el: '.slide-pagination-desktop',
                    type: 'bullets',
                }}
                centeredSlides
                modules={[Autoplay, Pagination]}
                className="mySwiper w-full mt-3"
            >
                {slides.map((slide: any, index: number) => (
                    <SwiperSlide key={index} className="py-5">
                        {slide.href ? (
                            <a href={translatedPath(slide.href)} aria-label={slide.alt} className="block w-full h-full transition-transform duration-300">
                                <img
                                    className="object-cover w-full h-full rounded-lg shadow-md"
                                    width={slide.image.width}
                                    height={slide.image.height}
                                    src={slide.image.src}
                                    alt={slide.alt}
                                    loading={index == 0 ? 'eager' : 'lazy'}
                                    decoding='async'
                                    srcSet={`${slide.image.src} 240w, ${slide.image.src} 600w, ${slide.image.src} 720w, ${slide.image.src} 840w, ${slide.image.src} 994w `}
                                    sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${slide.image.width}px`}
                                />
                            </a>
                        )
                            : (
                                <img
                                    className="object-cover w-full h-full rounded-lg shadow-md"
                                    width={slide.image.width}
                                    height={slide.image.height}
                                    src={slide.image.src}
                                    alt={slide.alt}
                                    loading={index == 0 ? 'eager' : 'lazy'}
                                    decoding='async'
                                    srcSet={`${slide.image.src} 240w, ${slide.image.src} 600w, ${slide.image.src} 720w, ${slide.image.src} 840w, ${slide.image.src} 994w `}
                                    sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${slide.image.width}px`}
                                />
                            )
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slide-pagination-desktop mb-4 text-center"></div>
        </div>
    );
}
