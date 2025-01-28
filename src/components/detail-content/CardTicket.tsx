export default function CardTicket({ data }: any) {
    return (
        <>
            <h3 className="text-2xl font-semibold mb-5">
                <i className="at-ticket-check"></i> {data.i18n.TITLE}
            </h3>
            <p className="text-base md:text-lg text-slate-700">{data.i18n.DESCRIPTION}</p>
            {/* Ficha Producto */}
            <div className="relative shadow-sm flex flex-wrap items-center rounded-xl border border-slate-200 my-10 p-2 sm:p-3">
                <div className="w-4/12">
                    <img src={data.image.src} alt="" className="w-full h-24 md:h-32 md:w-full rounded-2xl object-cover" loading="lazy" />
                </div>
                <div className="w-8/12 pl-2">
                    <p className="font-bold text-base">{data.titleCard}</p>
                    <p className="text-sm text-slate-500 mt-1">
                        <i className="at-location text-green-700 font-bold"></i> {data.location}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                        <i className="at-star-decor text-amber-500 font-bold"></i> <b>{data.stars}</b> ({data.reviews})
                    </p>
                    {data.price && (
                        <p className="text-sm text-slate-900 mt-1 font-bold text-end">
                            {data.i18n.PRICE_FROM} <br /><span className="text-amber-500 text-lg"> ${data.price} USD</span>
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}