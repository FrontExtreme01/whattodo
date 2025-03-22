import React, { useState } from 'react';
import { actions } from 'astro:actions';
import { navigate } from 'astro:transitions/client';
import { useTranslatedPath } from '@/i18n/utils';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function FormReservation({ dataForm }: any) {

    const [counterAdults, setCounterAdults] = useState(1);
    const [counterChildren, setCounterChildren] = useState(0);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const today = new Date();
    const minSelectableDate = new Date(today.setDate(today.getDate() + 1));
    const maxSelectableDate = new Date(today.setDate(today.getDate() + 100));

    const [value, setValue] = useState(minSelectableDate);
    const onChange = (date) => {
        setValue(date);
    };

    const translatedPath = useTranslatedPath(dataForm.lang);

    const handleIncreaseAdults = () => {
        const newCount = counterAdults + 1;
        setCounterAdults(newCount);
    };

    const handleDecreaseAdults = () => {
        const newCount = counterAdults - 1;
        setCounterAdults(newCount);
    };

    const handleIncreaseChildren = () => {
        const newCount = counterChildren + 1;
        setCounterChildren(newCount);
    };

    const handleDecreaseChildren = () => {
        const newCount = counterChildren - 1;
        setCounterChildren(newCount);
    };

    // Funcion para enviar el formulario
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append('lang', dataForm.lang);
        formData.append('adults', counterAdults.toString());
        formData.append('childrens', counterChildren.toString());
        formData.append('nameReservation', dataForm.titleCard);
        formData.append('dateReservation', value.toString());
        formData.append('imgReservation', dataForm.image.src);

        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }

        const { error } = await actions.formReservation(formData);
        if (!error)
            navigate(translatedPath("/thank-you/"));
        else
            navigate(translatedPath("/error-send-email/"))

        setIsSubmitting(false);
    };

    return (
        <>
            {/* Ficha Producto */}
            <div className="rounded-lg border border-gray-200 mb-5 overflow-hidden">
                <div className="flex flex-wrap">
                    <div className="w-4/12">
                        <img className="w-full h-full object-cover" src={dataForm.image.src} alt={dataForm.image.alt} />
                    </div>
                    <div className="w-8/12 p-5">
                        <p className="font-bold text-sm sm:text-base w-full mb-3">{dataForm.titleCard}</p>
                        <ul className="flex flex-wrap gap-3 md:gap-5 w-full text-xs sm:text-sm">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star size-5 text-amber-500 mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
                                <p className="font-bold"> {dataForm.stars}
                                    <span className="text-gray-500 font-thin"> ({dataForm.reviews})</span>
                                </p>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-gray-600 size-5 mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                <p>{dataForm.location}</p>
                            </li>
                        </ul>
                        <div className="flex flex-wrap space-x-4 items-center mt-2">
                            <p className="text-sm md:text-base"> {dataForm.i18n.LABELS.ADULTS}: <span className="font-semibold">{counterAdults}</span></p>
                            <p className="text-sm md:text-base"> {dataForm.i18n.LABELS.CHILDRENS}: <span className="font-semibold">{counterChildren}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Formulario de reserva */}
            <form className="flex flex-wrap" onSubmit={handleSubmit}>
                <div className="w-full flex flex-wrap mb-6">
                    <div className="w-1/2 px-2">
                        <label className="font-bold text-lg text-slate-900" htmlFor="adults">{dataForm.i18n.LABELS.ADULTS}</label>
                        <div className="flex items-center mt-2">
                            {counterAdults > 1 && (
                                <button type="button" onClick={handleDecreaseAdults}
                                    className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                    -
                                </button>
                            )}
                            <span className="text-xl font-bold mx-4">{counterAdults}</span>
                            <button type="button" onClick={handleIncreaseAdults}
                                className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                +
                            </button>
                        </div>
                        <p className="mt-5 text-sm">
                            <i className="at-info-circle"></i> {dataForm.i18n.AGE_ADULT}
                        </p>
                    </div>
                    <div className="w-1/2 px-2">
                        <label className="font-bold text-lg text-slate-900" htmlFor="children">{dataForm.i18n.LABELS.CHILDRENS}</label>
                        <div className="flex items-center mt-2">
                            {counterChildren > 0 && (
                                <button type="button" onClick={handleDecreaseChildren}
                                    className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                    -
                                </button>
                            )}
                            <span className="text-xl font-bold mx-4">{counterChildren}</span>
                            <button type="button" onClick={handleIncreaseChildren}
                                className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                +
                            </button>
                        </div>
                        <p className="mt-5 text-sm">
                            <i className="at-info-circle"></i> {dataForm.i18n.AGE_CHILDREN}
                        </p>
                    </div>
                </div>
                <div className="px-2 w-full mb-6">
                    <label className="font-bold text-lg text-slate-900" htmlFor="date">{dataForm.i18n.LABELS.DATE}</label>
                    <Calendar
                        className="mt-2 rounded-2xl p-3 w-full-important border-none-important"
                        value={value}
                        onChange={onChange}
                        minDate={minSelectableDate}
                        maxDate={maxSelectableDate}
                        locale={dataForm.lang}
                    />
                </div>
                <div className="px-2 w-full mb-6">
                    <label className="font-bold text-lg text-slate-900" htmlFor="fullname">{dataForm.i18n.LABELS.FULLNAME}</label>
                    <input required type="text" id="fullname" name="fullname" placeholder={dataForm.i18n.PLACEHOLDERS.FULLNAME} className="mt-2 w-full bg-slate-100 rounded-2xl p-3 focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                </div>
                <div className="px-2 w-full mb-6">
                    <label className="font-bold text-lg text-slate-900" htmlFor="phone">{dataForm.i18n.LABELS.PHONE}</label>
                    <input required type="text" id="phone" name="phone" placeholder={dataForm.i18n.PLACEHOLDERS.PHONE} className="mt-2 w-full bg-slate-100 rounded-2xl p-3 focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                </div>
                <div className="px-2 w-full mb-6">
                    <label className="font-bold text-lg text-slate-900" htmlFor="email">{dataForm.i18n.LABELS.EMAIL}</label>
                    <input required type="email" id="email" name="email" placeholder={dataForm.i18n.PLACEHOLDERS.EMAIL} className="mt-2 w-full bg-slate-100 rounded-2xl p-3 focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                </div>
                <div className="px-2 w-full md:w-10/12 mt-5 mb-6 mx-auto">
                    <button disabled={isSubmitting} type="submit" className="w-full bg-orange-600 text-white font-bold text-lg px-3 py-4 rounded-2xl hover:bg-orange-500 focus:outline-none focus:shadow-outline focus:border-orange-400 focus:ring-1 focus:ring-orange-400 disabled:bg-slate-200 disabled:text-slate-500 transition">
                        {isSubmitting ? dataForm.i18n.BUTTON_PROCESS : dataForm.i18n.BUTTON_SEND}
                    </button>
                </div>
            </form>
        </>
    );
}