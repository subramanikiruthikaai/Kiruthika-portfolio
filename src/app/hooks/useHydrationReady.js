'use client';
import { useEffect, useState } from 'react';

/**
 * This hook ensures rendering starts only after
 * client-side hydration + CSS/theme load.
 */
export const useHydrationReady = (delay = 300) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, delay); // delay in ms (adjust to ~300–500ms if needed)
        return () => clearTimeout(timer);
    }, [delay]);

    return isReady;
};
