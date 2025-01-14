import { useState } from 'react';
import MapFrame from './MapFrame';

export default function TabTerminals({ i18n }: any) {
    const [activeTab, setActiveTab] = useState(0);

    const labels = [i18n.TERMINAL_4_INTER, i18n.TERMINAL_4_NAT, i18n.TERMINAL_3, i18n.TERMINAL_2];

    const contents = [
        <MapFrame
            url="https://www.google.com/maps/embed?pb=!4v1710429384984!6m8!1m7!1sCAoSLEFGMVFpcE56LTEwcDNrM1RaanFCQjhUN3p2eTUtOWE2VGt3VVplejQ2LXhM!2m2!1d21.039678137999!2d-86.874398194387!3f5.47!4f-6.890000000000001!5f0.4000000000000002"
            titleAct={i18n.TERMINAL_4_INTER}
            textMap={i18n.TERMINAL_4_INTER}
        />,
        <MapFrame
            url="https://www.google.com/maps/embed?pb=!4v1710429423426!6m8!1m7!1sCAoSLEFGMVFpcE5kLXVrMjJRLW56dWZvUWxLT3doc0ZtQUF5YS1jSmxkZGQ0bV9k!2m2!1d21.046306688004!2d-86.882974771227!3f191.99!4f2.5600000000000023!5f0.7820865974627469"
            titleAct={i18n.TERMINAL_4_NAT}
            textMap={i18n.TERMINAL_4_NAT}
        />,
        <MapFrame
            url="https://www.google.com/maps/embed?pb=!4v1710429455061!6m8!1m7!1sCAoSLEFGMVFpcE5LcnFCME11RFoxdXFfdXV4Mi1hOEg0WXdPR3l6b3NVaXFGOXhq!2m2!1d21.0366551!2d-86.8690541!3f358.84!4f-10.870000000000005!5f0.4000000000000002"
            titleAct={i18n.TERMINAL_3}
            textMap={i18n.TERMINAL_3}
        />,
        <MapFrame
            url="https://www.google.com/maps/embed?pb=!4v1710429504282!6m8!1m7!1sCAoSLEFGMVFpcFBYUmI0UFVSU0tZRC11NjN2WkZCV19xOGo5dklOMHNwQnBya3J4!2m2!1d21.0395643!2d-86.8748113!3f207.05!4f-0.12999999999999545!5f0.7820865974627469"
            titleAct={i18n.TERMINAL_2}
            textMap={i18n.TERMINAL_2}
        />
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