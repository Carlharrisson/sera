import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        injectContentsquareScript({
            siteId: "5357467",
            async: true,
            defer: false
        });
    }, []);

    return (
        <>
            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-X54K1QWNTJ"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-X54K1QWNTJ');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp; 