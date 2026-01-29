'use client';

import { useGameStore } from '@/lib/gameStore';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
    const { language } = useGameStore();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const content = {
        tr: {
            title: 'İletişim',
            subtitle: 'Görüşlerinizi, önerilerinizi veya sorunlarınızı bizimle paylaşın',
            formTitle: 'İletişim Formu',
            nameLabel: 'Adınız',
            emailLabel: 'E-posta Adresiniz',
            subjectLabel: 'Konu',
            messageLabel: 'Mesajınız',
            sendButton: 'Gönder',
            successMessage: 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.',
            
            contactInfo: {
                title: 'İletişim Bilgileri',
                email: 'E-posta',
                emailValue: 'oze05607@gmail.com',
                responseTime: 'Yanıt Süresi',
                responseValue: 'Genellikle 24-48 saat içinde',
            },
            
            faqs: {
                title: 'Sık Sorulan Sorular',
                items: [
                    {
                        q: 'Oyun ücretsiz mi?',
                        a: 'Evet! WordImposter tamamen ücretsizdir ve hiçbir ücret talep etmez. Kayıt veya üyelik gerektirmez.'
                    },
                    {
                        q: 'Kaç kişiyle oynanabilir?',
                        a: 'WordImposter 3-10 oyuncu arası gruplarla oynanabilir. En ideal oyuncu sayısı 5-8 kişidir.'
                    },
                    {
                        q: 'Mobil cihazlarda çalışır mı?',
                        a: 'Evet! Oyun tüm modern tarayıcılarda ve mobil cihazlarda mükemmel çalışır. Uygulama indirmenize gerek yoktur.'
                    },
                    {
                        q: 'Hesap oluşturmam gerekli mi?',
                        a: 'Hayır, hesap oluşturmanıza veya kişisel bilgilerinizi paylaşmanıza gerek yoktur. Sadece bir takma ad girerek hemen oynamaya başlayabilirsiniz.'
                    },
                    {
                        q: 'Yeni kelimeler ekleyebilir miyim?',
                        a: 'Şu anda kullanıcıların özel kelime eklemesi mümkün değil, ancak bu özellik gelecek güncellemelerde eklenecektir. Kelime önerilerinizi bizimle paylaşabilirsiniz.'
                    },
                    {
                        q: 'Oyunda hata buldum, ne yapmalıyım?',
                        a: 'Lütfen bu sayfadaki formu kullanarak veya doğrudan e-posta ile bizimle iletişime geçin. Hataları en kısa sürede düzeltmeye çalışıyoruz.'
                    },
                    {
                        q: 'Başka diller eklenecek mi?',
                        a: 'Evet! Almanca, Fransızca, İspanyolca ve daha fazla dil desteği üzerinde çalışıyoruz.'
                    }
                ]
            },
            
            suggestions: {
                title: 'Öneri ve Şikayetler',
                content: 'Oyunumuzu geliştirmemize yardımcı olun! Önerileriniz, şikayetleriniz veya geri bildirimleriniz bizim için çok değerlidir. Her türlü görüşünüzü memnuniyetle karşılıyoruz.'
            },
            
            support: {
                title: 'Teknik Destek',
                content: 'Oyun oynarken teknik bir sorunla karşılaşırsanız, lütfen aşağıdaki bilgileri de paylaşın:',
                items: [
                    'Kullandığınız tarayıcı ve sürümü',
                    'Cihaz türü (mobil, tablet, bilgisayar)',
                    'Hatanın ne zaman ve nasıl oluştuğu',
                    'Varsa ekran görüntüsü'
                ]
            },
            
            social: {
                title: 'Bizi Takip Edin',
                content: 'Yeni özellikler, güncellemeler ve haberler için bizi takip edin!'
            }
        },
        
        en: {
            title: 'Contact',
            subtitle: 'Share your opinions, suggestions, or issues with us',
            formTitle: 'Contact Form',
            nameLabel: 'Your Name',
            emailLabel: 'Your Email',
            subjectLabel: 'Subject',
            messageLabel: 'Your Message',
            sendButton: 'Send',
            successMessage: 'Your message has been sent! We will get back to you as soon as possible.',
            
            contactInfo: {
                title: 'Contact Information',
                email: 'Email',
                emailValue: 'oze05607@gmail.com',
                responseTime: 'Response Time',
                responseValue: 'Usually within 24-48 hours',
            },
            
            faqs: {
                title: 'Frequently Asked Questions',
                items: [
                    {
                        q: 'Is the game free?',
                        a: 'Yes! WordImposter is completely free and does not charge any fees. No registration or membership required.'
                    },
                    {
                        q: 'How many players can play?',
                        a: 'WordImposter can be played with groups of 3-10 players. The ideal number of players is 5-8 people.'
                    },
                    {
                        q: 'Does it work on mobile devices?',
                        a: 'Yes! The game works perfectly on all modern browsers and mobile devices. No app download required.'
                    },
                    {
                        q: 'Do I need to create an account?',
                        a: 'No, you don\'t need to create an account or share personal information. Just enter a nickname and start playing immediately.'
                    },
                    {
                        q: 'Can I add new words?',
                        a: 'Currently, users cannot add custom words, but this feature will be added in future updates. You can share your word suggestions with us.'
                    },
                    {
                        q: 'I found a bug in the game, what should I do?',
                        a: 'Please contact us using the form on this page or directly via email. We try to fix bugs as soon as possible.'
                    },
                    {
                        q: 'Will other languages be added?',
                        a: 'Yes! We are working on adding support for German, French, Spanish, and more languages.'
                    }
                ]
            },
            
            suggestions: {
                title: 'Suggestions and Complaints',
                content: 'Help us improve our game! Your suggestions, complaints, or feedback are very valuable to us. We welcome all kinds of opinions.'
            },
            
            support: {
                title: 'Technical Support',
                content: 'If you encounter a technical problem while playing, please also share the following information:',
                items: [
                    'Browser and version you are using',
                    'Device type (mobile, tablet, computer)',
                    'When and how the error occurred',
                    'Screenshot if available'
                ]
            },
            
            social: {
                title: 'Follow Us',
                content: 'Follow us for new features, updates, and news!'
            }
        }
    };

    const c = content[language];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend
        // For now, we'll just show a success message
        setSubmitted(true);
        
        // Create a mailto link as fallback
        const mailtoLink = `mailto:oze05607@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="max-w-6xl mx-auto p-4 md:p-8">
                <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
                    ← {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                </Link>

                <div className="space-y-12">
                    {/* Header */}
                    <header className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {c.title}
                        </h1>
                        <p className="text-xl text-gray-300">
                            {c.subtitle}
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <section className="bg-[#12121a] rounded-2xl p-8 border border-gray-800">
                            <h2 className="text-2xl font-bold mb-6 text-purple-400">{c.formTitle}</h2>
                            
                            {submitted && (
                                <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300">
                                    {c.successMessage}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        {c.nameLabel}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-2 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        {c.emailLabel}
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-2 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        {c.subjectLabel}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        className="w-full px-4 py-2 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        {c.messageLabel}
                                    </label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-2 bg-[#0a0a0f] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-all"
                                >
                                    {c.sendButton}
                                </button>
                            </form>
                        </section>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <section className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
                                <h2 className="text-2xl font-bold mb-4 text-purple-400">{c.contactInfo.title}</h2>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-400">{c.contactInfo.email}</p>
                                        <p className="text-lg font-mono text-purple-300">{c.contactInfo.emailValue}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">{c.contactInfo.responseTime}</p>
                                        <p className="text-lg text-white">{c.contactInfo.responseValue}</p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-[#12121a] rounded-2xl p-8 border border-gray-800">
                                <h2 className="text-2xl font-bold mb-4 text-purple-400">{c.suggestions.title}</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {c.suggestions.content}
                                </p>
                            </section>

                            <section className="bg-[#12121a] rounded-2xl p-8 border border-gray-800">
                                <h2 className="text-2xl font-bold mb-4 text-purple-400">{c.support.title}</h2>
                                <p className="text-gray-300 mb-3">
                                    {c.support.content}
                                </p>
                                <ul className="space-y-2">
                                    {c.support.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-400">
                                            <span className="text-purple-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* FAQs */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">{c.faqs.title}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {c.faqs.items.map((faq, idx) => (
                                <div 
                                    key={idx} 
                                    className="bg-[#12121a] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all"
                                >
                                    <h3 className="text-lg font-semibold mb-3 text-purple-300">{faq.q}</h3>
                                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
