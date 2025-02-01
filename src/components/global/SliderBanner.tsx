import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function SliderBanner({ slides, i18nButton }: any) {
    return (
        <div className="hidden md:block relative">
            <div className="next-slide absolute top-1/2 right-[5%] -translate-y-1/2 z-10 p-2.5 sm:p-4 bg-black/40 text-white rounded-full flex items-center justify-center shadow-md cursor-pointer transition duration-500 hover:bg-slate-200">
                <i className="at-arrow-right"></i>
            </div>
            <div className="prev-slide absolute top-1/2 left-[5%] -translate-y-1/2 z-10 p-2.5 sm:p-4 bg-black/40 text-white rounded-full flex items-center justify-center shadow-md cursor-pointer transition duration-500 hover:bg-slate-200">
                <i className="at-arrow-left"></i>
            </div>
            <Swiper
                spaceBetween={5}
                navigation={{
                    nextEl: '.next-slide',
                    prevEl: '.prev-slide',
                    disabledClass: 'hidden',
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-full h-60 sm:h-80 md:h-[80dvh] md:min-h-[400px] bg-slate-100"
            >
                {slides.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                        <img
                            className="object-cover w-full h-full"
                            width={slide.image.width}
                            height={slide.image.height}
                            src={slide.image.src}
                            alt={slide.alt}
                            loading='eager'
                            decoding='async'
                        />
                        {slide.href && (
                            <a href={slide.href} className="absolute bottom-[13%] left-1/2 -translate-x-1/2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 md:py-4 px-8 md:px-14 text-sm md:text-xl rounded-lg focus:outline-none focus:shadow-outline transition">
                                {i18nButton}
                            </a>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
