import { useState } from 'react';

export default function MapFrame({ url, titleAct, textMap }: any) {
    const [showIframe, setShowIframe] = useState(false);

    return (
        <div className="w-full h-80 md:h-[450px] my-10">
            {showIframe ? (
                <iframe title={`ubicación de ${titleAct}`} className="w-full h-full rounded-2xl" src={url} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            ) : (
                <button onClick={() => setShowIframe(true)} className="w-full h-full rounded-2xl bg-gray-200 text-center py-2" style={{background: `linear-gradient(#00000044,#00000044), url('/assets/backgrounds/preloaderMap.webp') center`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                    <p className="font-bold text-white text-lg md:text-2xl">{textMap}</p>
                </button>
            )}
        </div>
    );
}