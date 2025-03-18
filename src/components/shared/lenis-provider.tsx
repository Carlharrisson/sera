'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
    children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
    useEffect(() => {
        const lenisInstance = new Lenis();

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return <>{children}</>;
} 