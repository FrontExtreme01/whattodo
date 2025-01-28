import { useState } from "react";

export default function FAQs({ FAQS, title, description }: any) {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <section className="relative pt-5 pb-20 px-5 md:px-24 container mx-auto text-center">
            <h2 className="mt-16 mb-8 text-2xl md:text-4xl text-orange-500 font-bold">{title}</h2>
            <p className="text-base/loose md:text-xl/loose text-gray-600 mb-8">{description}</p>

            <div className="flex flex-col md:w-3/4 mx-auto space-y-5">
                {FAQS.map((faq: any, index: number) => (
                    <div key={index} className="rounded-lg border border-gray-300 py-10 px-2">
                        <h3 className="w-full text-base sm:text-xl font-semibold text-slate-700 group">
                            <button
                                className="w-full flex justify-evenly items-center"
                                onClick={() => toggleQuestion(index)}
                            >
                                <span className="w-2/12">
                                    <i className={`at-plus-circle text-2xl md:text-3xl transition-all duration-200 ${activeQuestion === index ? 'text-orange-500' : 'text-slate-500'}`}></i>
                                </span>
                                <span className={`w-8/12 text-start transition-all duration-200 ${activeQuestion === index ? 'text-orange-500' : 'text-slate-500'}`}>
                                    {faq.question}
                                </span>
                                <span className="w-2/12">
                                    <svg
                                        className={`w-10 h-10 md:w-8 md:h-8 inline-block mr-2 transition-all duration-200 ${activeQuestion === index ? 'rotate-180 text-orange-500' : 'text-slate-500'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </h3>
                        <div className={`w-full text-left px-5 md:px-10 transition-all duration-200 ${activeQuestion === index ? 'block' : 'hidden'}`}>
                            <p className="text-base text-gray-500 mt-6 md:mt-8">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};