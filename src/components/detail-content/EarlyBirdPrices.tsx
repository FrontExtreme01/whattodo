import { IconEarlyBird } from "@/img/allIcons";

export default function EarlyBirdPrices({ price, i18n }: any) {
    return (
        <div className="flex flex-wrap justify-center items-center mb-5">
            <div className="rounded-lg border border-orange-500 p-5 w-full mb-5">
                <div className="flex flex-wrap">
                    <div className="w-2/12 flex items-center justify-center">
                        <img style={{ filter: 'drop-shadow(4px 4px 1px #d8d8d8)' }} src={IconEarlyBird.src} alt="" />
                    </div>
                    <div className="w-8/12 pl-4 md:pl-10">
                        <p className="font-bold text-base sm:text-lg mb-3">{i18n.CARD_EARLY_BIRD.TITLE}</p>
                        <p className="text-sm sm:text-base">{i18n.CARD_EARLY_BIRD.DESCRIPTION}</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 pr-1 sm:pr-2">
                <div className="border border-gray-200 rounded-md p-2 text-center">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-2 rounded-full">
                        <p className="text-white font-bold text-base uppercase">15 {i18n.EARLY_BIRD_DAYS}</p>
                    </div>
                    <div className="p-5">
                        <p className="font-bold text-red-600 text-2xl uppercase">20% off</p>
                        <p className="font-thin text-sm mt-5">{i18n.EARLY_BIRD_PRICE}</p>
                        <h4 className="font-bold text-2xl">
                            <span className="text-base">$</span>{(price - (price * 0.20)).toFixed(2)}<span className="text-xs sm:text-sm"> USD</span>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="w-1/2 pl-1 sm:pl-2">
                <div className="border border-gray-200 rounded-md p-2 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-full">
                        <p className="text-white font-bold text-base uppercase">30 {i18n.EARLY_BIRD_DAYS}</p>
                    </div>
                    <div className="p-5">
                        <p className="font-bold text-red-600 text-2xl uppercase">25% off</p>
                        <p className="font-thin text-sm mt-5">{i18n.EARLY_BIRD_PRICE}</p>
                        <h4 className="font-bold text-2xl">
                            <span className="text-base">$</span>{(price - (price * 0.25)).toFixed(2)}<span className="text-xs sm:text-sm"> USD</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};