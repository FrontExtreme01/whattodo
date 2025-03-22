import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

export default function MenuLinks({ menuLinks }: any) {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        if (menuLinks.length > 0) {
            setActiveLink(`#${menuLinks[0].id}`);
        }
    }, [menuLinks]);

    const moveToSection = (e: any) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const element = document.querySelector(target);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setActiveLink(target);
        }
    };

    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper w-full"
        >
            {menuLinks.map((link: any, index: number) => (
                link.show && (
                    <SwiperSlide key={index} style={{ width: 'auto !important', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <p className={`w-full block ${activeLink === `#${link.id}` ? 'text-green-700 font-bold border-b-2 border-green-700 ' : 'text-gray-900'} text-sm sm:text-base py-4 px-5 sm:px-8`}>
                            <a onClick={moveToSection} href={`#${link.id}`}>{link.title}</a>
                        </p>
                    </SwiperSlide>
                )
            ))}
        </Swiper>
    );
};