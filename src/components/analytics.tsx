"use client"

import Script from 'next/script'

export default function Analytics() {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

    if (!GA_TRACKING_ID) {
        return null
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
            </Script>
        </>
    )
}

// Utility function for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// Specific tracking functions
export const trackButtonClick = (buttonName: string) => {
    trackEvent('click', 'button', buttonName)
}

export const trackFormSubmit = (formName: string) => {
    trackEvent('submit', 'form', formName)
}

export const trackPageView = (pageName: string) => {
    trackEvent('page_view', 'navigation', pageName)
} 