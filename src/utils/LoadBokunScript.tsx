import { useEffect } from 'react';

const LoadBokunScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=8b31caec-8877-411a-85ad-682828170619';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default LoadBokunScript;