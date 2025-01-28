import React, { lazy, Suspense, useState } from 'react';
import CardTicket from '@components/detail-content/CardTicket';

export default function FormBokunMobile({ data }: any) {
    const LazyLoadBokunScript = lazy(() => import('@/utils/LoadBokunScript'));

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="lg:hidden flex w-full justify-center items-center sticky bottom-0 bg-white p-5 mt-5 border border-t-slate-200 z-10">
                <div className="w-1/2">
                    <p className="text-slate-900 text-sm font-bold">{data.price ? data.i18n.PRICE_FROM : data.titleCard}</p>
                    {data.price && (
                        <p className="text-green-700 font-bold text-base">${data.price} USD <span className="text-slate-400 text-sm">{data.i18n.PER_PERSON}</span></p>
                    )}
                </div>
                <div className="w-1/2 text-center">
                    <button className="w-10/12 py-3 rounded-full shadow-md bg-orange-600 hover:bg-orange-500 text-white font-bold text-base" onClick={toggleModal}>
                        {data.i18n.BUTTON_MODAL}
                    </button>
                </div>
            </div>
            {isOpen && (
                <>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadBokunScript />
                    </Suspense>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5000]" onClick={toggleModal}></div>
                    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[5001] bg-white w-11/12 overflow-y-scroll h-5/6 py-7 px-5 rounded shadow-lg">
                        <button className="absolute top-5 right-5 text-red-700 text-xl" onClick={toggleModal}>
                            <i className="at-xmark-circle"></i>
                        </button>
                        <CardTicket data={data} />
                        <div className="bokunWidget mb-10" data-src={data.urlCalendar}></div>
                    </div>
                </>
            )}
        </>
    );
}