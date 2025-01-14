import { lazy, Suspense } from "react";
import CardTicket from "@components/detail-content/CardTicket";

export default function FormBokunDesktop({ data }: any) {
    const LazyLoadBokunScript = lazy(() => import('@/utils/LoadBokunScript'));

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadBokunScript />
            </Suspense>
            <div className="hidden lg:block w-full lg:w-4/12 md:pl-5">
                <div className="border border-slate-100 shadow p-5 sm:p-8 bg-white rounded-xl">
                    <CardTicket data={data} />
                    <div className="bokunWidget" data-src={data.urlCalendar}></div>
                </div>
            </div>
        </>
    );
};