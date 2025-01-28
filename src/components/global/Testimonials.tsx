import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";

export default function Testimonials({ testimonials, title, description }: any) {
    return (
        <section className="bg-[url('/assets/backgrounds/background-testimonials-opinion-and-reviews.webp')] bg-no-repeat bg-center bg-cover">
            <div className="relative pt-5 pb-20 px-5 md:px-24 container mx-auto text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="next-test absolute top-1/2 right-3 -translate-y-1/2 z-10 p-3 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200">
                    <i className="at-arrow-right"></i>
                </div>
                <div className="prev-test absolute top-1/2 left-3 -translate-y-1/2 z-10 p-3 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200">
                    <i className="at-arrow-left"></i>
                </div>

                <h2 className="mt-16 mb-8 text-2xl md:text-4xl text-orange-500 font-bold">{title}</h2>
                <p className="text-base/loose md:text-xl/loose text-gray-600 mb-8">{description}</p>
                <Swiper
                    className="mySwiper"
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.next-test',
                        prevEl: '.prev-test',
                        disabledClass: 'hidden',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        }
                    }}
                    centeredSlides
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 300,
                        scale: 0.9,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[Autoplay, EffectCoverflow, Navigation]}
                    onSlideChange={(swiper) => {
                        swiper.slides.forEach((slide, index) => {
                            if (index === swiper.activeIndex) {
                                slide.style.opacity = '1';
                            } else {
                                slide.style.opacity = '0.5';
                            }
                        });
                    }}
                    onInit={(swiper) => {
                        swiper.slides.forEach((slide, index) => {
                            if (index === swiper.activeIndex) {
                                slide.style.opacity = '1';
                            } else {
                                slide.style.opacity = '0.5';
                            }
                        });
                    }}
                >
                    {testimonials.map((test: any, index: number) => (
                        <SwiperSlide key={index} className="my-5">
                            <div className="bg-white py-8 px-8 sm:px-14 rounded-lg shadow-xl border border-slate-200">
                                <div className="flex flex-wrap items-center">
                                    <div className="w-3/12 sm:w-2/12">
                                        {test.image ? <img src={test.image.src} alt="" width={test.image.width} height={test.image.height} className="w-14 h-14 rounded-full object-cover" /> : <img src="/assets/testimonials/tours/default-user-review.webp" alt="" className="w-14 h-14 rounded-full object-cover" />}
                                    </div>
                                    <div className="w-7/12 sm:w-8/12 text-start">
                                        <p className="text-base text-gray-600 font-bold">{test.user}</p>
                                        <p className="text-sm text-gray-400">{test.date}</p>
                                    </div>
                                    <div className="w-2/12 sm:w-2/12">
                                        <p className="font-bold text-sm">
                                            <i className="at-star-decor text-amber-500"></i> {test.stars}
                                        </p>
                                    </div>
                                    <div className="w-full mt-5">
                                        <h3 className="font-bold text-slate-800 text-base sm:text-lg text-start mb-2">{test.title}</h3>
                                        <p className="text-justify text-base sm:text-lg text-gray-500">{test.review}</p>
                                    </div>
                                    <div className="w-full flex items-center mt-5">
                                        <img src="/assets/icons/tripadvisor-icon.svg" alt="icon tripadvisor" className="w-8 h-8 rounded-full" />
                                        <p className="font-extrabold ml-2 text-sm">TripAdvisor</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
