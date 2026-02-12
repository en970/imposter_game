'use client';

import { useEffect, useRef, useState } from 'react';

interface AdBannerProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
    responsive?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const AD_CLIENT = 'ca-pub-8793006985867588';

export default function AdBanner({ slot, format = 'auto', responsive = true, style, className = '' }: AdBannerProps) {
    const adRef = useRef<HTMLModElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [adLoaded, setAdLoaded] = useState(false);

    useEffect(() => {
        if (adLoaded) return;

        const timer = setTimeout(() => {
            try {
                if (
                    typeof window !== 'undefined' &&
                    adRef.current &&
                    !adRef.current.dataset.adStatus &&
                    containerRef.current &&
                    containerRef.current.offsetWidth > 0
                ) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                    setAdLoaded(true);
                }
            } catch {
                // AdSense not ready yet
            }
        }, 600);

        return () => clearTimeout(timer);
    }, [adLoaded]);

    return (
        <div
            ref={containerRef}
            className={`ad-container ${className}`}
            style={{
                overflow: 'hidden',
                width: '100%',
                textAlign: 'center',
                ...style,
            }}
        >
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={AD_CLIENT}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive ? 'true' : 'false'}
            />
        </div>
    );
}
