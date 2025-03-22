import { useState } from "react";

export default function FloatContact({ lang }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed right-5 md:right-10 bottom-32 md:bottom-20 z-[15]">
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen mb-5' : 'max-h-0'}`}>
                <div className="rounded-full p-4 bg-emerald-500">
                    <a href="https://api.whatsapp.com/send/?phone=529983000040" target="_blank" aria-label="Whatsapp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-7 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                    </a>
                </div>
                <div className="rounded-full p-4 bg-orange-500 mt-3">
                    <a href="tel:+529983000040" aria-label={lang === 'es' ? 'Llamar' : 'Call us'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-7 text-white icon icon-tabler icons-tabler-outline icon-tabler-phone-ringing"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4l-2 2" /><path d="M22 10.5l-2.5 -.5" /><path d="M13.5 2l.5 2.5" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" /></svg>
                    </a>
                </div>
            </div>
            <button className="bg-gradient-to-r from-green-700 to-emerald-500 text-white rounded-full p-4 shadow-md transition-all duration-300 hover:scale-90" type="button" aria-label={lang === 'es' ? 'Contacto' : 'Contact'} onClick={toggleOpen}>
                {!isOpen ?
                    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7"><path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg>)
                    :
                    (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-7 icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>)
                }
            </button>
        </div>
    )
}