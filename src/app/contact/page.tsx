'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
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
                    Back to Game
                </Link>

                <header className="content-header">
                    <h1 className="content-title">Contact Us</h1>
                    <p className="content-subtitle">We would love to hear from you!</p>
                </header>

                <div className="content-grid-2">
                    {/* Contact Form */}
                    <div className="content-card">
                        <h2 className="content-card-title">Send us a Message</h2>

                        {submitted ? (
                            <div className="content-success">
                                <div className="content-success-icon">&#9989;</div>
                                <div className="content-success-title">Message sent!</div>
                                <div className="content-success-text">We will get back to you soon.</div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                <div>
                                    <label className="content-form-label">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="content-form-input"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="content-form-label">Your Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="content-form-input"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="content-form-label">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        className="content-form-input"
                                        placeholder="Bug report, Feedback, Question..."
                                    />
                                </div>
                                <div>
                                    <label className="content-form-label">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="content-form-input content-form-textarea"
                                        placeholder="Tell us what is on your mind..."
                                    />
                                </div>
                                <button type="submit" className="content-form-submit">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                        <div className="content-card">
                            <h2 className="content-card-title">Contact Information</h2>
                            <div className="content-info-item">
                                <div className="content-info-icon">&#9993;&#65039;</div>
                                <div>
                                    <div className="content-info-label">Email</div>
                                    <div className="content-info-value">
                                        <a href="mailto:oze05607@gmail.com">oze05607@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="content-info-item">
                                <div className="content-info-icon">&#9200;</div>
                                <div>
                                    <div className="content-info-label">Response Time</div>
                                    <div className="content-info-value">Usually within 24-48 hours</div>
                                </div>
                            </div>
                        </div>

                        <div className="content-card">
                            <h2 className="content-card-title">Technical Support</h2>
                            <p className="content-card-text" style={{marginBottom: '0.75rem'}}>Having technical issues? Please include:</p>
                            <ul className="content-bullet-list">
                                <li><span className="content-bullet">&#8226;</span> Browser and version (e.g., Chrome 120)</li>
                                <li><span className="content-bullet">&#8226;</span> Device type (phone, tablet, computer)</li>
                                <li><span className="content-bullet">&#8226;</span> What happened and when</li>
                                <li><span className="content-bullet">&#8226;</span> Screenshots if possible</li>
                            </ul>
                        </div>

                        <div className="content-card">
                            <h2 className="content-card-title">Suggestions Welcome</h2>
                            <p className="content-card-text">
                                Have ideas for new features, categories, or improvements? We love hearing from our players!
                                Your feedback helps make WordImposter better for everyone.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick FAQ */}
                <div className="content-card" style={{marginTop: '1.5rem'}}>
                    <h2 className="content-card-title">Quick Answers</h2>
                    <div className="content-grid-2">
                        <div className="content-feature">
                            <div className="content-feature-title">Is WordImposter free?</div>
                            <p className="content-feature-desc">Yes! Completely free, no hidden fees.</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-title">How many players?</div>
                            <p className="content-feature-desc">3-10 players per game.</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-title">Works on mobile?</div>
                            <p className="content-feature-desc">Yes! Any device with a browser.</p>
                        </div>
                        <div className="content-feature">
                            <div className="content-feature-title">Need an account?</div>
                            <p className="content-feature-desc">No! Just pick a nickname and play.</p>
                        </div>
                    </div>
                    <div style={{marginTop: '1rem', textAlign: 'center'}}>
                        <Link href="/faq" style={{color: '#a78bfa', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500}}>
                            View all FAQs →
                        </Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        Back to Game
                    </Link>
                </div>
            </div>
        </div>
    );
}
