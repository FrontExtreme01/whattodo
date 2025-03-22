import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { useTranslatedPath } from '@/i18n/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const events = [
    {
        nameClub: "the-city",
        nameEvent: "We Own the Night",
        day: "21",
        month: "March",
        image: "https://mandalatickets.com/assets/uploads/eventos/TheCity-march7th%20(3).jpg",
        url: "the-city-cancun"
    }
]


export default function Events({ lang }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);

    const translatePath = useTranslatedPath(lang);

    return (
        <section className="bg-gradient-to-t from-purple-950 to-zinc-950 to-70% py-12 relative mb-10">
            <div className="bg-[url('/assets/backgrounds/background-events.webp')] opacity-40 bg-top bg-cover bg-no-repeat absolute bottom-0 w-full h-5/6 z-0"></div>

            <div className="container mx-auto px-5 md:px-20 py-6 relative z-10">
                <h2 className="text-white text-xl md:text-3xl font-bold mb-8 md:mb-16">{lang === "es" ? "Eventos Próximos" : "Upcomming Events"}</h2>
                {/* Slider Title */}
                <Swiper
                    onSwiper={(swiper) => {
                        setThumbsSwiper(swiper);
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2.3,
                            spaceBetween: 20
                        },
                        940: {
                            slidesPerView: 3.3,
                            spaceBetween: 20
                        }
                    }}
                    freeMode={true}
                    watchSlidesProgress={true}
                    allowTouchMove={false}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-wrap">
                                <div className="w-full items-center flex justify-between mb-8">
                                    <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold w-fit pl-2 py-3 border-l-4 border-purple-700">{event.nameEvent}</h3>
                                    <div className="grid place-items-center">
                                        <p className="text-white font-semibold text-3xl lg:text-5xl">{event.day}</p>
                                        <p className="text-white font-semibold text-base lg:text-xl">{event.month}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Slider Cards */}
                <div className="relative">
                    <Swiper
                        navigation={{
                            nextEl: '.next-event',
                            prevEl: '.prev-event',
                            disabledClass: 'hidden',
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.3,
                                spaceBetween: 20,
                                centeredSlides: true,
                            },
                            640: {
                                slidesPerView: 2.3,
                                spaceBetween: 20,
                            },
                            940: {
                                slidesPerView: 3.3,
                                spaceBetween: 20,
                            }
                        }}
                        modules={[Navigation, Thumbs]}
                        className="mySwiper2"
                        onSlideChange={(swiper) => {
                            swiper.slides.forEach((slide, index) => {
                                if (index === swiper.activeIndex) {
                                    slide.style.backdropFilter = 'blur(0px)';
                                } else {
                                    slide.style.backdropFilter = 'blur(2px)';
                                }
                            });
                            if (swiper.width > 540) {
                                swiperRef.current.slideTo(swiper.activeIndex);
                            }
                        }}
                        onInit={(swiper) => {
                            swiper.slides.forEach((slide, index) => {
                                if (index === swiper.activeIndex) {
                                    slide.style.backdropFilter = 'blur(0px)';
                                } else {
                                    slide.style.backdropFilter = 'blur(2px)';
                                }
                            });
                        }}
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index} className="flex flex-col text-center pb-5">
                                <img className="shadow-md rounded-lg mb-10 w-fit mx-auto" src={event.image} alt="" />
                                <a href={translatePath(`/party/${event.url}/`)} className="mx-auto w-fit block py-3 px-7 lg:py-4 lg:px-10 rounded-full bg-violet-700 hover:bg-violet-600 hover:scale-90 duration-200 transition-all text-white font-semibold text-base lg:text-xl">
                                    {lang === "es" ? "Obtener Boletos" : "Get Tickets"}
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Btn Navigation */}
                    <div className="next-event absolute top-1/2 right-3 -translate-y-1/2 z-10 p-2 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                    </div>
                    <div className="prev-event absolute top-1/2 left-3 -translate-y-1/2 z-10 p-2 sm:p-4 bg-white text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer transition duration-500 hover:bg-slate-200 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                    </div>
                </div>
            </div>
        </section>
    );
}