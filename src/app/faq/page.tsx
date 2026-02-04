'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { language } = useGameStore();
    const t = translations[language];
    const p = t.faqPage;

    let globalIndex = 0;

    return (
        <div className="content-page">
            <div className="content-wrapper">
                <Link href="/" className="content-back-btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t.backToGame}
                </Link>

                <header className="content-header">
                    <h1 className="content-title">{p.title}</h1>
                    <p className="content-subtitle">{p.subtitle}</p>
                </header>

                {p.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="content-card">
                        <h2 className="content-card-title">
                            {section.category}
                        </h2>
                        {section.faqs.map((faq, faqIndex) => {
                            const currentIndex = globalIndex++;
                            return (
                                <div key={faqIndex} className="faq-item">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                                        className="faq-question"
                                    >
                                        <span>{faq.q}</span>
                                        <svg
                                            className={`faq-chevron ${openIndex === currentIndex ? 'open' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openIndex === currentIndex && (
                                        <div className="faq-answer">{faq.a}</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}

                {/* Still have questions? */}
                <div className="content-banner">
                    <div className="content-banner-title">{p.stillHaveQuestions}</div>
                    <p className="content-banner-text">{p.hereToHelp}</p>
                    <Link href="/contact" className="content-banner-btn">
                        {p.contactUs}
                    </Link>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        {p.startPlaying}
                    </Link>
                </div>
            </div>
        </div>
    );
}
