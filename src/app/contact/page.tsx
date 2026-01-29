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
        
        // Create mailto link
        const mailtoLink = `mailto:oze05607@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Back Button */}
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors mb-8"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Game
                </Link>

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-300">
                        We would love to hear from you!
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
                        <h2 className="text-xl font-bold text-purple-400 mb-6">📬 Send us a Message</h2>
                        
                        {submitted ? (
                            <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">✅</div>
                                <p className="text-green-400 font-semibold">Message sent!</p>
                                <p className="text-gray-400 text-sm mt-1">We will get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                                        placeholder="Bug report, Feedback, Question..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white resize-none"
                                        placeholder="Tell us what is on your mind..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </section>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
                            <h2 className="text-xl font-bold text-purple-400 mb-4">📧 Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <span>✉️</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <a href="mailto:oze05607@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                                            oze05607@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <span>⏱️</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Response Time</p>
                                        <p className="text-white">Usually within 24-48 hours</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
                            <h2 className="text-xl font-bold text-purple-400 mb-4">🔧 Technical Support</h2>
                            <p className="text-gray-400 mb-3">Having technical issues? Please include:</p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">•</span>
                                    Browser and version (e.g., Chrome 120)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">•</span>
                                    Device type (phone, tablet, computer)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">•</span>
                                    What happened and when
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">•</span>
                                    Screenshots if possible
                                </li>
                            </ul>
                        </section>

                        <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
                            <h2 className="text-xl font-bold text-purple-400 mb-4">💡 Suggestions Welcome</h2>
                            <p className="text-gray-400">
                                Have ideas for new features, categories, or improvements? We love hearing from our players! 
                                Your feedback helps make WordImposter better for everyone.
                            </p>
                        </section>
                    </div>
                </div>

                {/* Quick FAQ */}
                <section className="mt-8 bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
                    <h2 className="text-xl font-bold text-purple-400 mb-6">❓ Quick Answers</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <h3 className="font-semibold text-white mb-1">Is WordImposter free?</h3>
                            <p className="text-gray-400 text-sm">Yes! Completely free, no hidden fees.</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <h3 className="font-semibold text-white mb-1">How many players?</h3>
                            <p className="text-gray-400 text-sm">3-10 players per game.</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <h3 className="font-semibold text-white mb-1">Works on mobile?</h3>
                            <p className="text-gray-400 text-sm">Yes! Any device with a browser.</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <h3 className="font-semibold text-white mb-1">Need an account?</h3>
                            <p className="text-gray-400 text-sm">No! Just pick a nickname and play.</p>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <Link href="/faq" className="text-purple-400 hover:text-purple-300 transition-colors">
                            View all FAQs →
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center mt-8">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                    >
                        🎮 Back to Game
                    </Link>
                </div>
            </div>
        </div>
    );
}
