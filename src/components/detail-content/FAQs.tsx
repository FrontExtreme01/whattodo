import { useState } from "react";
import Accordion from "./Accordion";

export default function FAQs({ FAQS, title }: any) {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <Accordion title={title}>
            <div id="faqs" className="flex flex-col mx-auto space-y-5">
                {FAQS.map((faq: any, index: number) => (
                    <div key={index} className="rounded-lg border border-gray-200 py-7">
                        <h3 className="w-full text-base sm:text-lg font-semibold text-gray-900 group">
                            <button
                                className="w-full flex justify-evenly items-center"
                                onClick={() => toggleQuestion(index)}
                            >
                                <span className="w-2/12">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-message-question size-7 transition-transform duration-200 mx-auto ${activeQuestion === index ? 'text-green-700' : ''}`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path d="M8 13h6" /><path d="M14 18h-1l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" /><path d="M19 22v.01" /><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>
                                </span>
                                <span className={`w-8/12 pr-2 sm:pr-0 text-start transition-all duration-200 ${activeQuestion === index ? 'text-green-700' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <span className="w-2/12">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down size-7 transition-transform duration-200 ${activeQuestion === index ? 'transform rotate-180 text-green-700' : ''}`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                </span>
                            </button>
                        </h3>
                        <div
                            className={`w-full px-5 md:px-14 overflow-hidden transition-all duration-300 ${activeQuestion === index ? 'max-h-screen mt-6 md:mt-8' : 'max-h-0'}`}
                            style={{ transitionProperty: 'max-height, margin-top' }}
                        >
                            <p className="text-base text-gray-900">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Accordion>
    );
};