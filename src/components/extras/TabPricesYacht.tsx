import { useState } from "react";

export default function TabPricesYacht({ infoPrices, lang }: any) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const toggleTab = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className="container mx-auto px-5 md:px-24 mb-5">
            <div className="flex flex-wrap items-center justify-evenly">
                {infoPrices.map((info: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => toggleTab(index)}
                        className={`border rounded-lg shadow-sm w-1/4 p-2 md:p-4 my-2 text-center text-lg md:text-xl font-bold hover:scale-95 transition-all duration-200  ${activeTab === index ? 'border-orange-500 text-orange-500' : 'border-slate-300'}`}
                    >
                        {info.duration}
                    </button>
                ))}
            </div>
            <div className="mt-10">
                {infoPrices.map((info: any, index: number) => (
                    <div key={index} className={`mt-5 ${activeTab === index ? 'block' : 'hidden'}`}>
                        <h3 className="text-xl text-gray-600 font-bold text-center">
                            {lang === 'en' ? 'Price from' : 'Precio desde'}
                        </h3>
                        <p className="mt-5 text-center text-4xl md:text-5xl text-orange-500 font-bold">${info.price} USD</p>
                        {info.information && (
                            <p className="text-center text-base/loose md:text-xl/loose text-gray-600 mt-5">{info.information}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};