"use client"

import { useEffect } from 'react'
import { initializeScrollTracking } from '@/components/analytics'

export default function ScrollTracker() {
    useEffect(() => {
        // Initialize scroll tracking when component mounts
        const cleanup = initializeScrollTracking()

        // Return cleanup function
        return cleanup
    }, [])

    // This component doesn't render anything
    return null
} 