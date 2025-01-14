import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar CSS Module
import styles from '@/styles/slider.module.css';

export default function SliderBanner({ slides, i18nButton }: any) {
    return (
        <div className="relative">
            <Swiper
                spaceBetween={5}
                pagination={{
                    el: "#containerForBullets",
                    type: "bullets",
                    bulletClass: `${styles.bulletSliderHome}`,
                    bulletActiveClass: `${styles.bulletSliderHomeActive}`,
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className={`mySwiper ${styles.sliderHome}`}
            >
                {slides.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                        <img
                            className={styles.imgSlider}
                            width="1920"
                            height="994"
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
            <div id="containerForBullets" className={`${styles.containerBullet}`}></div>
        </div>
    );
}
