import { useState } from "react";

export default function TabsBubble(props, lang) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const toggleTab = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className="container mx-auto my-16">
            <div className="flex flex-wrap items-center justify-evenly gap-y-5">
                <button
                    key={0}
                    onClick={() => toggleTab(0)}
                    className={`cursor-pointer border rounded-lg shadow-sm p-2 md:p-4 text-center text-lg md:text-xl font-bold hover:scale-95 transition-all duration-200  ${activeTab === 0 ? 'border-orange-500 text-orange-500' : 'border-slate-300'}`}
                >
                    {lang === 'en' ? 'Shared Bubble Boat' : 'Barco Bubble Compartido'}
                </button>
                <button
                    key={1}
                    onClick={() => toggleTab(1)}
                    className={`cursor-pointer border rounded-lg shadow-sm p-2 md:p-4 text-center text-lg md:text-xl font-bold hover:scale-95 transition-all duration-200  ${activeTab === 1 ? 'border-orange-500 text-orange-500' : 'border-slate-300'}`}
                >
                    {lang === 'en' ? 'Private Bubble Boat' : 'Barco Bubble Privado'}
                </button>
            </div>
            <div className="mt-5 border border-orange-200 rounded-lg p-5 shadow-md">
                <div key={0} className={`mt-5 ${activeTab === 0 ? 'block' : 'hidden'}`}>
                    {props.sharedBoat}
                </div>
                <div key={1} className={`mt-5 ${activeTab === 1 ? 'block' : 'hidden'}`}>
                    {props.privateBoat}
                </div>
            </div>
        </div>
    );
};