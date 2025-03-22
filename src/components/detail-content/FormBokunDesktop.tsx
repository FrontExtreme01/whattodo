import { lazy, Suspense, useState } from "react";
import CardTicket from "./CardTicket";

export default function FormBokunDesktop({ data }: any) {
    const LazyLoadBokunScript = lazy(() => import('@/utils/LoadBokunScript'));

    const [isLoad, setIsLoad] = useState(false);

    const scrollTop = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth"
        });
    };

    const loadBokun = () => {
        setIsLoad(!isLoad);
        scrollTop();
    };

    return (
        <>
            <div className="hidden xl:block w-full xl:w-4/12 lg:pl-5">
                <div className={`${!isLoad && 'sticky top-28'}`}>
                    <div className={`border ${data.earlyBird ? 'border-orange-400' : ''} ${data.lastMinute ? 'border-red-600' : ''} border-gray-100  shadow bg-white rounded-lg`}>
                        {/* Title */}
                        <div className={`${data.earlyBird ? 'bg-orange-600/10 text-orange-600' : ''} ${data.lastMinute ? 'bg-red-600/10 text-red-600' : ''} bg-black/10 py-2 px-5 rounded-t-lg flex justify-between items-center`}>
                            <h3 className="text-lg font-bold">
                                {data.earlyBird && data.i18n.TITLE_EARLY_BIRD}
                                {data.lastMinute && data.i18n.TITLE_LAST_MINUTE}
                                {!data.earlyBird && !data.lastMinute && data.i18n.TITLE}
                            </h3>
                            {(data.earlyBird && !data.notCustomEarlyBird) && <span className="font-bold text-lg text-orange-600">{data.i18n.SUBTITLE_EARLY_BIRD}</span>}
                            {data.lastMinute && <span className="font-bold text-lg text-red-600">{data.i18n.SUBTITLE_LAST_MINUTE}</span>}
                        </div>
                        <div className="p-5 sm:p-8">
                            <CardTicket data={data} />
                            {!isLoad && <button className="w-fit block mx-auto px-10 py-4 rounded-full shadow-md bg-orange-600 hover:bg-orange-500 text-white font-bold text-base" onClick={loadBokun}>
                                {data.i18n.BUTTON_MODAL}
                            </button>}
                            {isLoad && (
                                <>
                                    <Suspense fallback={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-loader-quarter animate-spin size-10 mx-auto"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 6l0 -3" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" /></svg>}>
                                        <LazyLoadBokunScript />
                                    </Suspense>
                                    <div className="bokunWidget" data-src={data.urlCalendar}></div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};