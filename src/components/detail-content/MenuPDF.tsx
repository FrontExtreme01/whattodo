import { Menu } from "@/img/allImages"
import Fancybox from "@/utils/Fancybox"

export default function MenuPDF({ srcPDF, title }: any) {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className="mx-auto w-fit">
                <a data-fancybox="pdf" href={srcPDF}>
                    <p className="font-bold text-lg sm:text-xl text-center mb-4">{title}</p>
                    <div className="rounded-md border border-gray-200 hover:scale-90 hover:bg-gray-100 transition-all duration-200 shadow-sm p-2">
                        <img
                            src={Menu.src}
                            alt={title}
                            className="w-fit"
                        />
                    </div>
                </a>
            </div>
        </Fancybox>
    )
}