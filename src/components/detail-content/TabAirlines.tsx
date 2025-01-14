import { useState } from 'react';
import Terminal2 from '@components/airlines/Terminal2';
import Terminal3 from '@components/airlines/Terminal3';
import Terminal4 from '@components/airlines/Terminal4';

export default function TabTerminals({ i18n }: any) {
    const [activeTab, setActiveTab] = useState(0);

    const labels = ['Terminal 4', 'Terminal 3', 'Terminal 2'];

    const contents = [
        <Terminal4 />,
        <Terminal3 />,
        <Terminal2 />
    ];

    return (
        <div className="my-10">
            <h3 className="text-lg md:text-2xl font-bold text-orange-600 mt-10 mb-4">{i18n.VIRTUAL_TOUR}</h3>
            <div className="flex flex-wrap gap-5 justify-center rounded-xl">
                {labels.map((label, index) => (
                    <button
                        key={index}
                        className={`rounded-lg py-3 px-6 text-base md:text-lg transition duration-300 ease-in-out transform ${activeTab === index ? 'bg-orange-600 text-white' : 'bg-slate-100 text-black'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="transition duration-300 ease-in-out">
                {contents[activeTab]}
            </div>
        </div>
    );
}