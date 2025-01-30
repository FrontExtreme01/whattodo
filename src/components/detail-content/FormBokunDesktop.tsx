import { lazy, Suspense } from "react";
import CardTicket from "./CardTicket";

export default function FormBokunDesktop({ data }: any) {
    const LazyLoadBokunScript = lazy(() => import('@/utils/LoadBokunScript'));

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadBokunScript />
            </Suspense>
            <div className="hidden xl:block w-full xl:w-4/12 lg:pl-5">
                <div className="border border-slate-100 shadow p-5 sm:p-8 bg-white rounded-xl">
                    <CardTicket data={data} />
                    <div className="bokunWidget" data-src={data.urlCalendar}></div>
                </div>
            </div>
        </>
    );
};