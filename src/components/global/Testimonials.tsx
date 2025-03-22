import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { IconTripAdvisor } from '@/img/allIcons';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";

export default function Testimonials({ testimonials, title }: any) {
    return (
        <section id="reviews" className="bg-slate-100">
            <div className="relative pt-5 pb-20 px-5 md:px-24 container mx-auto">
                <div className="next-test absolute top-1/2 right-3 -translate-y-1/2 z-10 p-2 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
                <div className="prev-test absolute top-1/2 left-3 -translate-y-1/2 z-10 p-2 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                </div>

                <h2 className="mt-16 mb-8 text-2xl md:text-4xl text-gray-800 font-bold">{title}</h2>
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
                                        <p className="text-sm text-gray-500">{test.date}</p>
                                    </div>
                                    <div className="w-2/12">
                                        <p className="font-bold text-sm flex items-center justify-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star text-amber-500 size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
                                            {test.stars}
                                        </p>
                                    </div>
                                    <div className="w-full mt-5">
                                        <h3 className="font-bold text-slate-800 text-base sm:text-lg text-start mb-2">{test.title}</h3>
                                        <p className="text-justify text-base sm:text-lg text-gray-500">{test.review}</p>
                                    </div>
                                    <div className="w-full flex items-center mt-5">
                                        <img src={IconTripAdvisor.src} alt="icon tripadvisor" className="w-8 h-8 rounded-full" />
                                        <p className="font-bold ml-2 text-sm">TripAdvisor</p>
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
