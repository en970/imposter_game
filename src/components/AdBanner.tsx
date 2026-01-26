'use client';

import { useEffect, useRef, useState } from 'react';

interface AdBannerProps {
    slot: string;
    client: string;
    style?: React.CSSProperties;
    format?: 'auto' | 'fluid' | 'rectangle';
}

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export default function AdBanner({ slot, client, style, format = 'auto' }: AdBannerProps) {
    const adRef = useRef<HTMLModElement>(null);
    const [adLoaded, setAdLoaded] = useState(false);

    useEffect(() => {
        // Prevent duplicate ad loading
        if (adLoaded) return;

        // Wait for DOM to be ready and adsbygoogle to be available
        const loadAd = () => {
            try {
                // Check if adsbygoogle is available
                if (typeof window !== 'undefined' && window.adsbygoogle) {
                    // Only push if the ad element exists and hasn't been loaded
                    if (adRef.current && !adRef.current.dataset.adStatus) {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                        setAdLoaded(true);
                    }
                }
            } catch (e) {
                // Silently handle AdSense errors - this is expected when:
                // - AdSense is still reviewing the site
                // - Ad blockers are present
                // - The page is unmounting
                if (process.env.NODE_ENV === 'development') {
                    console.warn('AdSense warning:', e);
                }
            }
        };

        // Small delay to ensure adsbygoogle script is loaded
        const timeoutId = setTimeout(loadAd, 100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [adLoaded]);

    return (
        <div className="ad-box" style={{ overflow: 'hidden', minWidth: '120px' }}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={style || { display: 'block' }}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
