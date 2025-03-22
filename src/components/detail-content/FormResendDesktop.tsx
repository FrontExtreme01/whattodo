import FormReservation from "./FormReservation";

export default function FormResendDesktop({ data }: any) {

    return (
        <div className="hidden xl:block w-full xl:w-4/12 lg:pl-5">
            <div className="border border-gray-100 shadow bg-white rounded-lg">
                {/* Title */}
                <div className="bg-black/10 py-2 px-5 rounded-t-lg flex justify-between items-center">
                    <h3 className="text-lg font-bold">
                        {data.i18n.TITLE}
                    </h3>
                </div>
                <div className="p-5 sm:p-8">
                    <FormReservation dataForm={data} />
                </div>
            </div>
        </div>
    );
}