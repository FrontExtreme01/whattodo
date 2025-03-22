import { useState, useEffect } from 'react';
import { iconFeeCancellation, iconLocalExperts, iconSupport, iconTripAdvisorOpinion } from '@/img/allImages';

export default function ContadorDiscount({ i18n, targetDate }: any) {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    function calculateTimeLeft(targetDate: string) {
        const difference = +new Date(targetDate) - +new Date();

        let timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
            minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
            seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2),
        };

        return timeLeft;
    }

    return (
        <section className="bg-gray-100 py-14 bg-[url('/assets/backgrounds/background-contador-movil.webp')] sm:bg-[url('/assets/backgrounds/background-contador.webp')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-4">
                <p className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{i18n.TITLE}</p>
                {/* Contador */}
                <div className="flex justify-center items-center gap-5 mt-10">
                    <div className="flex flex-col items-center p-2 sm:p-5 bg-white/15 shadow-sm border-t-[6px] border-orange-600">
                        <span className="text-3xl sm:text-5xl font-bold text-white">{timeLeft.days}</span>
                        <span className="text-white mt-5 font-bold text-sm sm:text-lg">{i18n.DAYS}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 sm:p-5 bg-white/15 shadow-sm border-t-[6px] border-orange-600">
                        <span className="text-3xl sm:text-5xl font-bold text-white">{timeLeft.hours}</span>
                        <span className="text-white mt-5 font-bold text-sm sm:text-lg">{i18n.HOURS}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 sm:p-5 bg-white/15 shadow-sm border-t-[6px] border-orange-600">
                        <span className="text-3xl sm:text-5xl font-bold text-white">{timeLeft.minutes}</span>
                        <span className="text-white mt-5 font-bold text-sm sm:text-lg">{i18n.MINUTES}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 sm:p-5 bg-white/15 shadow-sm border-t-[6px] border-orange-600">
                        <span className="text-3xl sm:text-5xl font-bold text-white">{timeLeft.seconds}</span>
                        <span className="text-white mt-5 font-bold text-sm sm:text-lg">{i18n.SECONDS}</span>
                    </div>
                </div>
                {/* Info */}
                <ul className="flex flex-wrap justify-center mt-5 text-white font-bold text-base sm:text-lg">
                    <li className="flex items-center w-1/2 lg:w-1/4 p-2 sm:p-5">
                        <img src={iconFeeCancellation.src} alt="" className="w-14 sm:w-20" /> {i18n.FREE_CANCELLATION}
                    </li>
                    <li className="flex items-center w-1/2 lg:w-1/4 p-2 sm:p-5">
                        <img src={iconLocalExperts.src} alt="" className="w-14 sm:w-20" /> {i18n.LOCAL_EXPERTS}
                    </li>
                    <li className="flex items-center w-1/2 lg:w-1/4 p-2 sm:p-5">
                        <img src={iconSupport.src} alt="" className="w-14 sm:w-20" /> {i18n.SUPPORT}
                    </li>
                    <li className="flex items-center w-1/2 lg:w-1/4 p-2 sm:p-5">
                        <img src={iconTripAdvisorOpinion.src} alt="" className="w-14 sm:w-20" /> {i18n.TRIPADVISOR}
                    </li>
                </ul>
            </div>
        </section>
    );
}