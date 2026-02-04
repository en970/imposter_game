'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';

export default function ContactPage() {
    const { language } = useGameStore();
    const t = translations[language];
    const p = t.contactPage;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        const mailtoLink = `mailto:oze05607@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;

        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

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

                <div className="content-grid-2">
                    {/* Contact Form */}
                    <div className="content-card">
                        <h2 className="content-card-title">{p.sendMessage}</h2>

                        {submitted ? (
                            <div className="content-success">
                                <div className="content-success-icon">&#9989;</div>
                                <div className="content-success-title">{p.sent}</div>
                                <div className="content-success-text">{p.sentDesc}</div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                <div>
                                    <label className="content-form-label">{p.yourName}</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="content-form-input"
                                        placeholder={p.namePlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="content-form-label">{p.yourEmail}</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="content-form-input"
                                        placeholder={p.emailPlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="content-form-label">{p.subject}</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        className="content-form-input"
                                        placeholder={p.subjectPlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="content-form-label">{p.message}</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="content-form-input content-form-textarea"
                                        placeholder={p.messagePlaceholder}
                                    />
                                </div>
                                <button type="submit" className="content-form-submit">
                                    {p.send}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                        <div className="content-card">
                            <h2 className="content-card-title">{p.contactInfo}</h2>
                            <div className="content-info-item">
                                <div className="content-info-icon">&#9993;&#65039;</div>
                                <div>
                                    <div className="content-info-label">{p.email}</div>
                                    <div className="content-info-value">
                                        <a href="mailto:oze05607@gmail.com">oze05607@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="content-info-item">
                                <div className="content-info-icon">&#9200;</div>
                                <div>
                                    <div className="content-info-label">{p.responseTime}</div>
                                    <div className="content-info-value">{p.responseTimeValue}</div>
                                </div>
                            </div>
                        </div>

                        <div className="content-card">
                            <h2 className="content-card-title">{p.techSupport}</h2>
                            <p className="content-card-text" style={{marginBottom: '0.75rem'}}>{p.techSupportDesc}</p>
                            <ul className="content-bullet-list">
                                {p.techSupportItems.map((item, idx) => (
                                    <li key={idx}><span className="content-bullet">&#8226;</span> {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="content-card">
                            <h2 className="content-card-title">{p.suggestions}</h2>
                            <p className="content-card-text">{p.suggestionsDesc}</p>
                        </div>
                    </div>
                </div>

                {/* Quick FAQ */}
                <div className="content-card" style={{marginTop: '1.5rem'}}>
                    <h2 className="content-card-title">{p.quickAnswers}</h2>
                    <div className="content-grid-2">
                        {p.quickItems.map((item, idx) => (
                            <div key={idx} className="content-feature">
                                <div className="content-feature-title">{item.title}</div>
                                <p className="content-feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{marginTop: '1rem', textAlign: 'center'}}>
                        <Link href="/faq" style={{color: '#a78bfa', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500}}>
                            {p.viewAllFaqs}
                        </Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        {p.backToGameCta}
                    </Link>
                </div>
            </div>
        </div>
    );
}
