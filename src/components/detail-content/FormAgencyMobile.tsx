import { lazy, Suspense, useState } from 'react';
import { Close } from '@/img/allIcons';
import CardTicket from '@components/detail-content/CardTicket';
import AgencyPromo from './AgencyPromo';

export default function FormAgencyMobile({ data }: any) {
    const LazyLoadBokunScript = lazy(() => import('@/utils/LoadBokunScript'));

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        isOpen ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <div className="flex xl:hidden w-full justify-center items-center sticky bottom-0 bg-white p-5 mt-5 border border-t-slate-200 z-10">
                <div className="w-[45%] grid justify-center items-center">
                    {!data.price && (
                        <p className="text-gray-900 text-sm sm:text-base font-semibold">{data.titleCard}</p>
                    )}
                    {(data.price || data.price > 0) && (
                        <>
                            <p className="text-gray-900 text-xs sm:text-lg font-semibold">{data.i18n.PRICE_FROM}</p>
                            <p className="text-gray-900 font-bold text-lg sm:text-2xl">${data.price} USD <span className="text-gray-900 text-xs sm:text-lg font-normal">{data.i18n.PER_PERSON}</span></p>
                        </>
                    )}
                </div>
                <div className="w-[55%] text-center">
                    <button className="mx-auto w-fit block px-7 py-3.5 rounded-full shadow-md bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-lg" onClick={toggleModal}>
                        {data.i18n.BUTTON_MODAL}
                    </button>
                </div>
            </div>
            {isOpen && (
                <>
                    <Suspense fallback={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-loader-quarter animate-spin size-10 mx-auto"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 6l0 -3" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" /></svg>}>
                        <LazyLoadBokunScript />
                    </Suspense>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5000]" onClick={toggleModal}></div>
                    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[5001] bg-white overflow-y-scroll h-[87%] w-full rounded-t-[40px] shadow-md">
                        {/* Header Modal */}
                        <div className="w-full sticky top-0 z-[5001] px-2 pt-8 pb-3 bg-white">
                            <p className="text-lg font-bold px-5">{data.i18n.TITLE}</p>
                            <hr className="h-0.5 bg-slate-200 mt-5" />
                            <button className="absolute top-8 right-8 text-red-700 text-xl" onClick={toggleModal}>
                                <img src={Close.src} alt="Close" className="size-5" />
                            </button>
                        </div>
                        {/* Content */}
                        <div className="pb-7 px-5 pt-2">
                            <AgencyPromo agencyLogo={data.agencyLogo} />
                            <CardTicket data={data} />
                            <div className="bokunWidget mb-10" data-src={data.agencyCalendar}></div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}