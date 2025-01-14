import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import part1 from '@/img/partners/1-stripe-logo.webp';
import part2 from '@/img/partners/2-expedia-logo.webp';
import part3 from '@/img/partners/3-viator-logo.webp';
import part4 from '@/img/partners/4-get-your-guide-logo.webp';
import part5 from '@/img/partners/5-trip-advisor-logo.webp';
import part6 from '@/img/partners/6-bokun-logo.webp';
import part7 from '@/img/partners/7-vip-lounge-by-mera-cancun-airport.webp';
import part8 from '@/img/partners/8-mandala-cancun-night-club-party.webp';
import part9 from '@/img/partners/9-cocobongo-age-limit-tickets.webp';
import part10 from '@/img/partners/10-rosa-negra-group-cancun-restaurants.webp';
import part11 from '@/img/partners/11-grupo-andersons-cancun-restaurants.webp';
import part12 from '@/img/partners/12-the-yacht-experience-cancun-rental-premium-service.webp';
import part13 from '@/img/partners/13-aquatours-cancun-partner.webp';
import part14 from '@/img/partners/14-enva-tours-logo.webp';
import part15 from '@/img/partners/15-jungle-tour-cancun-speed-boat-logo.webp';
import part16 from '@/img/partners/16-extreme-adventure-cancun-partner-logo.webp';
import part17 from '@/img/partners/17-city-and-taco-tour-cancun-and-puerto-morelos-logo.webp';
import part18 from '@/img/partners/18-cenotes-adventure-logo.webp';
import part19 from '@/img/partners/19-what-to-do-in-mexico-city-logo.webp';
import part20 from '@/img/partners/20-things-to-do-in-madrid-partner-logo.webp';
import part21 from '@/img/partners/21-jopa-nauticos.webp';
import part22 from '@/img/partners/22-senor-frogs.webp';
import part23 from '@/img/partners/23-epic-yachts.webp';

const partners = [
    { img: part1.src, alt: 'logo stripe' },
    { img: part2.src, alt: 'logo expedia' },
    { img: part3.src, alt: 'logo viator' },
    { img: part4.src, alt: 'logo get your guide' },
    { img: part5.src, alt: 'logo trip advisor' },
    { img: part6.src, alt: 'logo bokun' },
    { img: part7.src, alt: 'logo vip lounge by mera' },
    { img: part8.src, alt: 'logo mandala' },
    { img: part9.src, alt: 'logo coco bongo' },
    { img: part10.src, alt: 'logo rosa negra' },
    { img: part11.src, alt: 'logo grupo andersons' },
    { img: part12.src, alt: 'logo the yacht experience' },
    { img: part13.src, alt: 'logo aquatours' },
    { img: part14.src, alt: 'logo enva tours' },
    { img: part15.src, alt: 'logo jungle tour' },
    { img: part16.src, alt: 'logo extreme adventure' },
    { img: part17.src, alt: 'logo city and taco tour' },
    { img: part18.src, alt: 'logo cenotes adventure' },
    { img: part19.src, alt: 'logo what to do in mexico city' },
    { img: part20.src, alt: 'logo things to do in madrid' },
    { img: part21.src, alt: 'logo jopa nauticos' },
    { img: part22.src, alt: 'logo senor frogs' },
    { img: part23.src, alt: 'logo epic yachts' }
]

export default function Partners({ title, description }: any) {

    return (
        <div className="bg-[url('/assets/backgrounds/fondo-testimonials.webp')] bg-no-repeat bg-contain bg-center py-8 md:py-20 px-5 md:px-24 container mx-auto text-center" data-aos="zoom-in" data-aos-delay="500">
            <h2 className="my-8 md:my-16 text-2xl md:text-4xl text-orange-500 font-bold">{title}</h2>
            <p className="text-base md:text-xl mb-8">
                {description}
            </p>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 80
                    },
                    992: {
                        slidesPerView: 6,
                        spaceBetween: 120
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {partners.map((partner: any, index: number) => (
                    <SwiperSlide key={index}>
                        <img src={partner.img} alt={partner.alt} width="350" height="300" decoding="async" loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
