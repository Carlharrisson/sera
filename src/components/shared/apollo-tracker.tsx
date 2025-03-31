"use client"

import Script from 'next/script'

export function ApolloTracker() {
    return (
        <Script
            id="apollo-tracker"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    function initApollo(){
                        var n=Math.random().toString(36).substring(7),
                        o=document.createElement("script");
                        o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                        o.async=!0,
                        o.defer=!0,
                        o.onload=function(){
                            window.trackingFunctions.onLoad({appId:"67e94fdba139dc001516db2d"})
                        },
                        document.head.appendChild(o)
                    }
                    initApollo();
                `
            }}
        />
    )
} 