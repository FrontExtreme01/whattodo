export default function BannerLastMinute({ i18n }: any) {
    return (
        <div className="flex flex-wrap justify-center items-center mb-5">
            <div className="rounded-lg border border-red-500 p-5 w-full">
                <div className="flex flex-wrap">
                    <div className="w-2/12 flex items-center justify-center">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="size-16 text-red-600 icon icon-tabler icons-tabler-outline icon-tabler-hourglass-high"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 7h11" /><path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" /><path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" /></svg>
                    </div>
                    <div className="w-8/12 pl-4 md:pl-10">
                        <p className="font-bold text-base sm:text-lg mb-3">{i18n.CARD_LAST_MINUTE.TITLE}</p>
                        <p className="text-sm sm:text-base">{i18n.CARD_LAST_MINUTE.DESCRIPTION}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}