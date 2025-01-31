export default function EarlyBirdPrices({ price, i18n }: any) {
    return (
        <div className="flex flex-wrap justify-center items-center mt-5">
            <img className="w-16 md:w-20 my-2" src="/assets/icons/early-bird-icon.svg" height="80" width="80" alt="icon early bird" />
            <h3 className="text-lg font-semibold mb-5 w-full text-center">{i18n.EARLY_BIRD_TITLE}</h3>
            <div className="w-1/2 pr-1 sm:pr-2">
                <div className="shadow-md shadow-amber-500/50 rounded-md p-2 text-center">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-2 rounded-full">
                        <p className="text-white font-bold text-base uppercase">15 {i18n.EARLY_BIRD_DAYS}</p>
                    </div>
                    <div className="p-5">
                        <span className="font-bold text-red-600 text-2xl uppercase">20% off</span>
                        <p className="font-thin text-sm mt-5">{i18n.EARLY_BIRD_PRICE}</p>
                        <h4 className="font-bold text-2xl">
                            <span className="text-base">$</span>{(price - (price * 0.20)).toFixed(2)}<span className="text-xs">USD</span>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="w-1/2 pl-1 sm:pl-2">
                <div className="shadow-md shadow-red-500/50 rounded-md p-2 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-full">
                        <p className="text-white font-bold text-base uppercase">30 {i18n.EARLY_BIRD_DAYS}</p>
                    </div>
                    <div className="p-5">
                        <span className="font-bold text-red-600 text-2xl uppercase">25% off</span>
                        <p className="font-thin text-sm mt-5">{i18n.EARLY_BIRD_DAYS}</p>
                        <h4 className="font-bold text-2xl">
                            <span className="text-base">$</span>{(price - (price * 0.25)).toFixed(2)}<span className="text-xs">USD</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};