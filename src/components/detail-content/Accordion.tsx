import { useState } from "react";

export default function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mt-5" id={props.idHash}>
            <button
                className="flex items-center justify-between w-full text-gray-800 cursor-pointer"
                onClick={() => toggleOpen()}
            >
                <h2 className="font-bold text-lg sm:text-xl">{props.title}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down size-7 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
            </button>
            <div
                className={`w-full overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-full mt-10' : 'max-h-0'}`}
                style={{ transitionProperty: 'max-height, margin-top' }}
            >
                {props.children}
            </div>
            <hr className="h-0.5 bg-slate-200 my-10 border-t-0"/>
        </div>
    );
}