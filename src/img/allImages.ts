// Logos
import logoMain from "@/img/logos/logo-wtd.webp";
import logoHorizontal from "@/img/logos/logo-horizontal.webp";
import separador from "@public/icons/separador.webp";
import IconLastminute from "@/img/extras/icon-lastminute.webp";
// Footer
import customerSuport from "@/img/extras/customer-support-in-cancun.webp";
import secureCheckout from "@/img/extras/stripe-security-guarantee.webp";

// Testimonials
import review1 from "@public/testimonials/home/zachariah-collier-chichen-itza-cenote-and-valladolid-all-inclusive-tour-review-150x150.webp";
import review2 from "@public/testimonials/home/faisal-mcpherson-chichen-itza-all-iclusive-tour-review-150x150.webp";
import review3 from "@public/testimonials/home/edie-sykes-opinion-review-of-tripadvisor-ATV-and-zipline-in-cancun-150x150.webp";
import review4 from "@public/testimonials/home/bonnie-griffin-chichen-itza-cenote-and-valladolid-all-inclusive-tour-review-150x150.webp";
import review5 from "@public/testimonials/home/harrison-atkinson-review-chichen-itza-cenote-and-valladolid-all-inclusive-tour-150x150.webp";

// Slides Home
import HomeDeskEs1 from "@/img/slides/home/2025-new-year-discounts-in-cancun.webp";
import HomeDeskEs2 from "@/img/slides/home/isla-mujeres-catamaran-tour-premium-service.webp";
import HomeDeskEs3 from "@/img/slides/home/atv-zipline-and-cenote-in-cancun-tours.webp";
import HomeDeskEs4 from "@/img/slides/home/city-and-taco-tour-and-tequila-tasting-in-cancun-puerto-morelos.webp";
import HomeDeskEs5 from "@/img/slides/home/cancun-airport-vip-lounge-service.webp";

// Stickers Home
import StickerTripAdvisor from "@/img/extras/banner-tripadvisor.webp";
import StickerHappyCustomer from "@/img/extras/our-happy-customers.webp";

// Slides Restaurant
import Rest1 from "@/img/slides/restaurant/best-reastaurants-in-cancun-with-free-welcome-drink.webp";
import Rest2 from "@/img/slides/restaurant/latina-restaurant.webp";
import Rest3 from "@/img/slides/restaurant/senor-frogs.webp";
import Rest4 from "@/img/slides/restaurant/ilios-restaurant.webp";
import Rest5 from "@/img/slides/restaurant/tora-slide.webp";
import Rest6 from "@/img/slides/restaurant/parole-slide.webp";
import Rest7 from "@/img/slides/restaurant/funky-slide.webp";
import Rest8 from "@/img/slides/restaurant/kultura-slide.webp";

// Slides Combos
import Combo1 from "@/img/slides/combos/atv-jungle-adventure-catamaran-slide.webp";
import Combo2 from "@/img/slides/combos/atv-jungle-adventure-glass-boat-slide.webp";
import Combo3 from "@/img/slides/combos/atv-zipline-cenote-speedboat-slide.webp";
import Combo4 from "@/img/slides/combos/cancun-airport-transfer-mera-vip-lounge-access-slide.webp";
import Combo5 from "@/img/slides/combos/cancun-ultimate-5x1-atv-ziplines-cenote-tequila-reef-snorkel-slide.webp";
import Combo6 from "@/img/slides/combos/speedboat-and-catamaran-full-day-adventure-slide.webp";

const getImgFromLang = (lang: any) => {
    switch (lang) {
        case 'es':
            return {
                slideHome1: HomeDeskEs1,
                slideHome2: HomeDeskEs2,
                slideHome3: HomeDeskEs3,
                slideHome4: HomeDeskEs4,
                slideHome5: HomeDeskEs5,
                slideRest1: Rest1,
                slideRest2: Rest2,
                slideRest3: Rest3,
                slideRest4: Rest4,
                slideRest5: Rest5,
                slideRest6: Rest6,
                slideRest7: Rest7,
                slideRest8: Rest8,
                slideCombo1: Combo1,
                slideCombo2: Combo2,
                slideCombo3: Combo3,
                slideCombo4: Combo4,
                slideCombo5: Combo5,
                slideCombo6: Combo6
            };
        case 'en':
            return {
                slideHome1: HomeDeskEs1,
                slideHome2: HomeDeskEs2,
                slideHome3: HomeDeskEs3,
                slideHome4: HomeDeskEs4,
                slideHome5: HomeDeskEs5,
                slideRest1: Rest1,
                slideRest2: Rest2,
                slideRest3: Rest3,
                slideRest4: Rest4,
                slideRest5: Rest5,
                slideRest6: Rest6,
                slideRest7: Rest7,
                slideRest8: Rest8,
                slideCombo1: Combo1,
                slideCombo2: Combo2,
                slideCombo3: Combo3,
                slideCombo4: Combo4,
                slideCombo5: Combo5,
                slideCombo6: Combo6
            };
        default:
            return {
                slideHome1: HomeDeskEs1,
                slideHome2: HomeDeskEs2,
                slideHome3: HomeDeskEs3,
                slideHome4: HomeDeskEs4,
                slideHome5: HomeDeskEs5,
                slideRest1: Rest1,
                slideRest2: Rest2,
                slideRest3: Rest3,
                slideRest4: Rest4,
                slideRest5: Rest5,
                slideRest6: Rest6,
                slideRest7: Rest7,
                slideRest8: Rest8,
                slideCombo1: Combo1,
                slideCombo2: Combo2,
                slideCombo3: Combo3,
                slideCombo4: Combo4,
                slideCombo5: Combo5,
                slideCombo6: Combo6
            }
    }
}

export {
    getImgFromLang,
    logoMain,
    logoHorizontal,
    customerSuport,
    secureCheckout,
    StickerTripAdvisor,
    StickerHappyCustomer,
    review1,
    review2,
    review3,
    review4,
    review5,
    separador,
    IconLastminute
};