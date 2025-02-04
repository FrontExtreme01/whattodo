import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, Autoplay } from 'swiper/modules';
import Fancybox from '@/utils/Fancybox';

export default function SliderGallery({ images, accessibility }: any) {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className="relative mb-10">
                <div className="next-gall absolute top-1/2 right-3 -translate-y-1/2 z-10 p-3 sm:p-4 bg-slate-50 text-black rounded-full flex items-center justify-center shadow-md cursor-pointer transition duration-500 hover:bg-slate-200">
                    <i className="at-arrow-right"></i>
                </div>
                <div className="prev-gall absolute top-1/2 left-3 -translate-y-1/2 z-10 p-3 sm:p-4 bg-slate-50 text-black rounded-full flex items-center justify-center shadow-md cursor-pointer transition duration-500 hover:bg-slate-200">
                    <i className="at-arrow-left"></i>
                </div>
                <Swiper
                    spaceBetween={5}
                    effect={'fade'}
                    navigation={{
                        nextEl: '.next-gall',
                        prevEl: '.prev-gall',
                        disabledClass: 'hidden',
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-full h-[280px] sm:h-[400px] md:h-[500px] xl:h-[700px] bg-white rounded-2xl shadow-xl group"
                >
                    {images.map((image: any, index: number) => (
                        <SwiperSlide key={index}>
                            <img 
                            className="w-full h-full object-cover"
                            src={image.src} 
                            alt={accessibility.altImg} 
                            loading="eager"
                            decoding="async" 
                            width={image.width}
                            height={image.height}
                            srcSet={`${image.src} 240w, ${image.src} 600w, ${image.src} 720w, ${image.src} 840w, ${image.src} 994w `}
                            sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${image.width}px`}
                            />
                            <a data-fancybox="gallery" href={image.src} aria-label={accessibility.ariaLabelGallery}>
                                <i className="at-magnifying-glass-plus bg-slate-50 text-black rounded-full p-3 sm:p-4 hover:bg-slate-200 sm:opacity-0 group-hover:opacity-100 transition duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"></i>
                            </a>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </Fancybox>
    );
}
