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
    const containerRef = useRef<HTMLDivElement>(null);
    const [adLoaded, setAdLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Check if container has width before loading ad
    useEffect(() => {
        const checkWidth = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                if (width > 0) {
                    setIsVisible(true);
                }
            }
        };

        // Check immediately
        checkWidth();

        // Also check after a short delay (for dynamic layouts)
        const timeoutId = setTimeout(checkWidth, 500);

        // Use ResizeObserver to detect when container becomes visible
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect.width > 0) {
                    setIsVisible(true);
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            clearTimeout(timeoutId);
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        // Only load ad if container is visible and has width
        if (!isVisible || adLoaded) return;

        const loadAd = () => {
            try {
                // Double-check container width before loading
                if (containerRef.current && containerRef.current.offsetWidth === 0) {
                    return;
                }

                // Check if adsbygoogle is available
                if (typeof window !== 'undefined' && window.adsbygoogle) {
                    // Only push if the ad element exists and hasn't been loaded
                    if (adRef.current && !adRef.current.dataset.adStatus) {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                        setAdLoaded(true);
                    }
                }
            } catch (e) {
                // Silently handle AdSense errors
                if (process.env.NODE_ENV === 'development') {
                    console.warn('AdSense warning:', e);
                }
            }
        };

        // Delay to ensure proper rendering
        const timeoutId = setTimeout(loadAd, 300);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isVisible, adLoaded]);

    return (
        <div 
            ref={containerRef}
            className="ad-box" 
            style={{ 
                overflow: 'hidden', 
                minWidth: '250px',
                minHeight: '100px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {isVisible && (
                <ins
                    ref={adRef}
                    className="adsbygoogle"
                    style={style || { display: 'block', width: '100%', minHeight: '100px' }}
                    data-ad-client={client}
                    data-ad-slot={slot}
                    data-ad-format={format}
                    data-full-width-responsive="true"
                />
            )}
        </div>
    );
}
