export default function AgencyPromo({ agencyLogo }: any) {
    return (
        <div className="flex flex-wrap justify-center items-center mb-5">
            <div className="rounded-lg border border-green-700 p-5 w-full">
                <div className="flex flex-wrap">
                    <div className="w-2/12 flex items-center justify-center">
                        <img src={agencyLogo} className="aspect-square" alt="" />
                    </div>
                    <div className="w-8/12 pl-4 md:pl-10">
                        <p className="font-bold text-base sm:text-lg mb-3">Titulo</p>
                        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}