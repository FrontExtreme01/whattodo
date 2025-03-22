import BannerLastMinute from "./BannerLastMinute";
import EarlyBirdPrices from "./EarlyBirdPrices";

export default function CardTicket({ data }: any) {
    return (
        <>
            {(data.earlyBird && !data.notCustomEarlyBird) && <EarlyBirdPrices price={data.price} i18n={data.i18n} />}
            {data.lastMinute && <BannerLastMinute i18n={data.i18n} />}
            {/* Ficha Producto */}
            <div className="rounded-lg border border-gray-200 mb-3 overflow-hidden">
                <div className="flex flex-wrap">
                    <div className="w-4/12">
                        <img className="w-full h-full object-cover" src={data.image.src} alt={data.image.alt} />
                    </div>
                    <div className="w-8/12 p-5">
                        <p className="font-bold text-sm sm:text-base w-full mb-3">{data.titleCard}</p>
                        <ul className="flex flex-wrap gap-3 md:gap-5 w-full text-xs sm:text-sm">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star size-5 text-amber-500 mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
                                <p className="font-bold"> {data.stars}
                                    <span className="text-gray-500 font-thin"> ({data.reviews})</span>
                                </p>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-gray-600 size-5 mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                <p>{data.location}</p>
                            </li>
                        </ul>
                    </div>
                    {(data.price || data.price > 0) && (
                        <div className="w-full flex flex-wrap justify-between items-center px-5 py-3 bg-gray-100">
                            <p className="text-base font-semibold">{data.i18n.PRICE_FROM}</p>
                            <p className="font-bold text-lg sm:text-xl">${data.price} USD <span className="text-gray-900 text-xs sm:text-sm font-normal">{data.i18n.PER_PERSON}</span></p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}