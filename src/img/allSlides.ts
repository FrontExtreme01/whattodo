// Slides Home Desktop
import HomeDeskEN1 from "@/img/slides/home/2025-new-year-discounts-in-cancun.webp";
import HomeDeskEN3 from "@/img/slides/home/slide-pirate-ship-cancun-jolly-roger.webp";
import HomeDeskEN4 from "@/img/slides/home/isla-mujeres-catamaran-tour-premium-service.webp";
import HomeDeskEN5 from "@/img/slides/home/atv-zipline-and-cenote-in-cancun-tours.webp";
import HomeDeskEN6 from "@/img/slides/home/city-and-taco-tour-and-tequila-tasting-in-cancun-puerto-morelos.webp";
import HomeDeskEN7 from "@/img/slides/home/cancun-airport-vip-lounge-service.webp";

// Slides Home Mobile
import HomeMobEN1 from "@/img/slides/mobile/home/2025-new-year-discounts-in-cancun-mobile.webp";
import HomeMobEN3 from "@/img/slides/mobile/home/pirate-ship-cancun-jolly-roger-mobile.webp";
import HomeMobEN4 from "@/img/slides/mobile/home/isla-mujeres-catamaran-tour-premium-service-mobile.webp";
import HomeMobEN5 from "@/img/slides/mobile/home/atv-zipline-and-cenote-in-cancun-tours-mobile.webp";
import HomeMobEN6 from "@/img/slides/mobile/home/city-and-taco-tour-and-tequila-tasting-in-cancun-puerto-morelos-mobile.webp";
import HomeMobEN7 from "@/img/slides/mobile/home/cancun-airport-vip-lounge-service-mobile.webp";

// Slides Restaurant
import Rest4 from "@/img/slides/restaurant/ilios-restaurant.webp";
import Rest6 from "@/img/slides/restaurant/parole-slide.webp";
import Rest7 from "@/img/slides/restaurant/funky-slide.webp";
import Rest3 from "@/img/slides/restaurant/senor-frogs.webp";

// Slides Combos
import Combo1 from "@/img/slides/combos/cancun-ultimate-5x1-atv-ziplines-cenote-tequila-reef-snorkel-slide.webp";
import Combo2 from "@/img/slides/combos/atv-jungle-adventure-catamaran-slide.webp";
import Combo3 from "@/img/slides/combos/atv-jungle-adventure-glass-boat-slide.webp";
import Combo4 from "@/img/slides/combos/atv-zipline-cenote-speedboat-slide.webp";
import Combo5 from "@/img/slides/combos/speedboat-and-catamaran-full-day-adventure-slide.webp";

// Slides Yachts Desktop
import YachtDeskEN1 from "@/img/slides/yachts/choose-your-ideal-yacht-in-cancun.webp";
import YachtDeskEN2 from "@/img/slides/yachts/enjoy-the-luxury-in-cancun.webp";
import YachtDeskEN3 from "@/img/slides/yachts/up-to-20-pax-in-private-yacht.webp";
import YachtDeskEN4 from "@/img/slides/yachts/yacht-private-service.webp";

// Slides Yachts Mobile
import YachtMobEN1 from "@/img/slides/mobile/yachts/choose-your-ideal-yacht-in-cancun-mobile.webp";
import YachtMobEN2 from "@/img/slides/mobile/yachts/enjoy-the-luxury-in-cancun-mobile.webp";

// Slides Party
import Party1 from "@/img/slides/party/nightclubs-in-cancun.webp";
import Party3 from "@/img/slides/party/bechclubs-in-cancun.webp";

const images = {
    en: {
        DESKTOP: {
            HOME: [
                { image: HomeDeskEN1, alt: "new discounts 2025", href: "" },
                { image: HomeDeskEN3, alt: "tour pirate ship cancun jolly roger", href: "/tour/pirate-show-jolly-roger-cancun/" },
                { image: HomeDeskEN4, alt: "tour isla mujeres catamaran premium service", href: "/tour/isla-mujeres-premium-catamaran-with-transportation-and-dock-fee/" },
                { image: HomeDeskEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeDeskEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeDeskEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            CHEAP: [
                { image: HomeDeskEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeDeskEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeDeskEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            FAVORITES: [
                { image: HomeDeskEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
                { image: HomeDeskEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeDeskEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
            ],
            ADVENTURE: [
                { image: HomeDeskEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeDeskEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeDeskEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            COUPLES: [
                { image: HomeDeskEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeDeskEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeDeskEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            WATER: [
                { image: HomeDeskEN4, alt: "tour isla mujeres catamaran premium service", href: "/tour/isla-mujeres-premium-catamaran-with-transportation-and-dock-fee/" },
                { image: HomeDeskEN3, alt: "tour pirate ship cancun jolly roger", href: "/tour/pirate-show-jolly-roger-cancun/" },
                { image: HomeDeskEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
            ],
            RUINS: [
                { image: HomeDeskEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeDeskEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeDeskEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            RESTAURANT: [
                { image: Rest3, alt: "restaurant senor frogs, fun food and clothes", href: "/restaurant/senor-frogs-restaurant/" },
                { image: Rest4, alt: "restaurant ilios greek estiatorio", href: "/restaurant/ilios-greek-restaurant/" },
                { image: Rest6, alt: "restaurant parole coastal italian food", href: "/restaurant/parole-cancun-italian-restaurant/" },
                { image: Rest7, alt: "restaurant funky geisha asian inspired", href: "/restaurant/funky-geisha-cancun/" },
            ],
            COMBOS: [
                { image: Combo1, alt: "cancun ultimate 5x1 experience", href: "/tour/cancun-ultimate-5x1/" },
                { image: Combo2, alt: "atv jungle with catamaran experience", href: "/tour/atv-jungle-with-ziplines-cenote-isla-mujeres-catamaran-combo/" },
                { image: Combo3, alt: "atv jungle with clear boat experience", href: "/tour/atv-zipline-cenote-adventure-glass-boat-sightseeing-combo/" },
                { image: Combo4, alt: "atv jungle with speedboat experience", href: "/tour/atv-zipline-cenote-adventure-speedboat/" },
                { image: Combo5, alt: "splash dash speedboat with catamaran", href: "/tour/combo-aquatic-tours-in-cancun/" }
            ],
            YACHTS: [
                { image: YachtDeskEN1, alt: "choose your ideal yacht", href: "" },
                { image: YachtDeskEN2, alt: "for all your guest", href: "" },
                { image: YachtDeskEN3, alt: "enjoy the luxury with private yacht", href: "" },
                { image: YachtDeskEN4, alt: "choose the best private service", href: "" }
            ],
            NIGHTCLUB: [
                { image: Party1, alt: "banner the bests nightclubs in cancun", href: "" },
                { image: Party3, alt: "banner beachclubs in cancun", href: "/beachclub-in-cancun/" },
            ],
            BEACHCLUB: [
                { image: Party3, alt: "banner beachclubs in cancun", href: "" },
                { image: Party1, alt: "banner the bests nightclubs in cancun", href: "/nightlife-in-cancun/" },
            ],
        },
        MOBILE: {
            HOME: [
                { image: HomeMobEN1, alt: "new discounts 2025", href: "" },
                { image: HomeMobEN3, alt: "tour pirate ship cancun jolly roger", href: "/tour/pirate-show-jolly-roger-cancun/" },
                { image: HomeMobEN4, alt: "tour isla mujeres catamaran premium service", href: "/tour/isla-mujeres-premium-catamaran-with-transportation-and-dock-fee/" },
                { image: HomeMobEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeMobEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeMobEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            CHEAP: [
                { image: HomeMobEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeMobEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeMobEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            FAVORITES: [
                { image: HomeMobEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
                { image: HomeMobEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeMobEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
            ],
            ADVENTURE: [
                { image: HomeMobEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeMobEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeMobEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            COUPLES: [
                { image: HomeMobEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeMobEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeMobEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            WATER: [
                { image: HomeMobEN4, alt: "tour isla mujeres catamaran premium service", href: "/tour/isla-mujeres-premium-catamaran-with-transportation-and-dock-fee/" },
                { image: HomeMobEN3, alt: "tour pirate ship cancun jolly roger", href: "/tour/pirate-show-jolly-roger-cancun/" },
                { image: HomeMobEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
            ],
            RUINS: [
                { image: HomeMobEN6, alt: "tour city taco and tequila tasting puerto morelos", href: "/tour/city-taco-tour-puerto-morelos/" },
                { image: HomeMobEN5, alt: "tour atv jungle adventure and ziplines", href: "/tour/atv-and-zipline-in-cancun/" },
                { image: HomeMobEN7, alt: "cancun airport vip lounge", href: "/tour/cancun-airport-vip-lounge/" },
            ],
            RESTAURANT: [
                { image: Rest3, alt: "restaurant senor frogs, fun food and clothes", href: "/restaurant/senor-frogs-restaurant/" },
                { image: Rest4, alt: "restaurant ilios greek estiatorio", href: "/restaurant/ilios-greek-restaurant/" },
                { image: Rest6, alt: "restaurant parole coastal italian food", href: "/restaurant/parole-cancun-italian-restaurant/" },
                { image: Rest7, alt: "restaurant funky geisha asian inspired", href: "/restaurant/funky-geisha-cancun/" },
            ],
            COMBOS: [
                { image: Combo1, alt: "cancun ultimate 5x1 experience", href: "/tour/cancun-ultimate-5x1/" },
                { image: Combo2, alt: "atv jungle with catamaran experience", href: "/tour/atv-jungle-with-ziplines-cenote-isla-mujeres-catamaran-combo/" },
                { image: Combo3, alt: "atv jungle with clear boat experience", href: "/tour/atv-zipline-cenote-adventure-glass-boat-sightseeing-combo/" },
                { image: Combo4, alt: "atv jungle with speedboat experience", href: "/tour/atv-zipline-cenote-adventure-speedboat/" },
                { image: Combo5, alt: "splash dash speedboat with catamaran", href: "/tour/combo-aquatic-tours-in-cancun/" }
            ],
            YACHTS: [
                { image: YachtMobEN1, alt: "choose your ideal yacht", href: "" },
                { image: YachtMobEN2, alt: "for all your guest", href: "" },
            ],
            NIGHTCLUB: [
                { image: Party1, alt: "banner the bests nightclubs in cancun", href: "" },
                { image: Party3, alt: "banner beachclubs in cancun", href: "/beachclub-in-cancun/" },
            ],
            BEACHCLUB: [
                { image: Party3, alt: "banner beachclubs in cancun", href: "" },
                { image: Party1, alt: "banner the bests nightclubs in cancun", href: "/nightlife-in-cancun/" },
            ],
        },
    },
};

const getSlides = (category: string, screen: string, lang: string) => {
    const categoryImages = images[lang]?.[screen][category] || images['en'][screen][category];

    if (!categoryImages) {
        return [];
    }

    return categoryImages;
};

export { getSlides };