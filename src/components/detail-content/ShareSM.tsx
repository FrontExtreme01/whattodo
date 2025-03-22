import { useState, useEffect, useRef } from 'react';

export default function ShareSM({ site, i18n }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const url = site;
    const popoverRef = useRef<HTMLDivElement>(null);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={popoverRef}>
            <div className="flex items-center p-2 sm:py-2 sm:px-4 rounded-full bg-white text-gray-800 shadow-md cursor-pointer transition duration-200 hover:bg-orange-600 hover:text-white"
                onClick={togglePopover}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share size-5 sm:mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.7 10.7l6.6 -3.4" /><path d="M8.7 13.3l6.6 3.4" /></svg>
                <p className="hidden sm:block text-sm lg:text-base font-semibold">{i18n.SHARE}</p>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-0 -translate-x-2/4 z-20 bg-white border border-slate-200 shadow-md rounded-lg p-4 w-32 h-auto md:w-60 md:h-40 grid place-items-center">
                    <span className="font-semibold text-sm sm:text-base my-2 block text-center">{i18n.SHARE_LINK}</span>
                    <div className="flex flex-col md:flex-row items-center flex-wrap justify-evenly gap-2 w-full">
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className="grid place-items-center rounded-full w-10 h-10 border border-slate-200 bg-white text-black hover:bg-orange-500 hover:text-white transition shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook size-6"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                        </a>
                        <a href={`https://wa.me/?text=${url}`} target="_blank" rel="noopener noreferrer" className="grid place-items-center rounded-full w-10 h-10 border border-slate-200 bg-white text-black hover:bg-orange-500 hover:text-white transition shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp size-6"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer" className="grid place-items-center rounded-full w-10 h-10 border border-slate-200 bg-white text-black hover:bg-orange-500 hover:text-white transition shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x size-6"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}