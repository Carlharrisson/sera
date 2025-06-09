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
    if (typeof window !== 'undefined') {
        if (window.gtag) {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value,
            });
        } else if (window.dataLayer) {
            // Fallback to dataLayer if gtag not ready
            window.dataLayer.push({
                event: 'custom_event',
                event_action: action,
                event_category: category,
                event_label: label,
                value: value,
            });
        }
    }
}

// Specific tracking functions
export const trackButtonClick = (buttonName: string) => {
    // If gtag isn't ready, try again after a short delay
    if (typeof window !== 'undefined' && !window.gtag) {
        setTimeout(() => {
            trackEvent('click', 'button', buttonName);
        }, 100);
    } else {
        trackEvent('click', 'button', buttonName);
    }
}

export const trackFormSubmit = (formName: string) => {
    trackEvent('submit', 'form', formName)
}

export const trackPageView = (pageName: string) => {
    trackEvent('page_view', 'navigation', pageName)
}

export const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', 'engagement', sectionName)
}

export const trackExternalLink = (destination: string, source: string) => {
    trackEvent('external_link', 'navigation', `${destination}_from_${source}`)
}

// Scroll depth tracking
export const trackScrollDepth = (percentage: number) => {
    trackEvent('scroll_depth', 'engagement', `${percentage}%`)
}

// Section view tracking
export const trackSectionInView = (sectionName: string) => {
    trackEvent('section_in_view', 'engagement', sectionName)
}

// Initialize scroll tracking
export const initializeScrollTracking = () => {
    if (typeof window === 'undefined') return

    const scrollDepthMarkers = [25, 50, 75, 100]
    const triggeredDepths = new Set<number>()

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = Math.round((scrollTop / docHeight) * 100)

        // Track scroll depth milestones
        scrollDepthMarkers.forEach(marker => {
            if (scrollPercent >= marker && !triggeredDepths.has(marker)) {
                triggeredDepths.add(marker)
                trackScrollDepth(marker)
            }
        })
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll()
                ticking = false
            })
            ticking = true
        }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })

    // Clean up function
    return () => {
        window.removeEventListener('scroll', throttledScroll)
    }
} 