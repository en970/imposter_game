'use client';

import { useEffect } from 'react';

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
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className="ad-box" style={{ overflow: 'hidden', minWidth: '120px' }}>
            <ins
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
