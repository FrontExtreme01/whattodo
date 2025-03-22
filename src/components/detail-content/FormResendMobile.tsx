import { useState } from "react";
import { Close } from '@/img/allIcons';
import FormReservation from "./FormReservation";

export default function FormResendMobile({ data }: any) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex xl:hidden w-full justify-center items-center sticky bottom-0 bg-white p-5 mt-5 border border-t-slate-200 z-10">
                <div className="w-[45%]">
                    {!data.price && (
                        <p className="text-gray-900 text-sm sm:text-base font-semibold">{data.titleCard}</p>
                    )}
                    {(data.price || data.price > 0) && (
                        <>
                            <p className="text-gray-900 text-xs font-semibold">{data.i18n.PRICE_FROM}</p>
                            <p className="text-gray-900 font-bold text-xl">${data.price} USD <span className="text-gray-900 text-xs font-normal">{data.i18n.PER_PERSON}</span></p>
                        </>
                    )}
                </div>
                <div className="w-[55%] text-center">
                    <button className="mx-auto w-fit block px-7 py-3.5 rounded-full shadow-md bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base" onClick={toggleModal}>
                        {data.i18n.BUTTON_MODAL}
                    </button>
                </div>
            </div>
            {isOpen && (
                <>
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
                        <div className="pb-7 px-5">
                            <FormReservation dataForm={data} />
                        </div>
                    </div>
                </>
            )
            }
        </>
    );
}