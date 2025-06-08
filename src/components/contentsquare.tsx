'use client';

import { useEffect } from 'react';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

export function ContentSquare() {
    useEffect(() => {
        injectContentsquareScript({
            siteId: "5357467",
            async: true,
            defer: false
        });
    }, []);

    return null;
} 