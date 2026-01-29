'use client';

import { useGameStore } from '@/lib/gameStore';
import Link from 'next/link';

export default function AboutPage() {
    const { language } = useGameStore();

    const content = {
        tr: {
            title: 'Hakkımızda',
            subtitle: 'WordImposter (KelimeCasusu) - Arkadaşlarınızla Oynayabileceğiniz En Eğlenceli Kelime Oyunu',
            intro: 'WordImposter, arkadaşlarınız ve ailenizle çevrimiçi olarak oynayabileceğiniz ücretsiz bir sosyal çıkarım ve kelime oyunudur. Oyuncular arasındaki casusu bulmaya çalışırken, ipuçları vererek ve birbirinizin davranışlarını analiz ederek stratejik düşünme becerilerinizi geliştirebilirsiniz.',
            
            mission: {
                title: 'Misyonumuz',
                content: 'Amacımız, insanları bir araya getiren, eğlenceli ve tamamen ücretsiz bir oyun deneyimi sunmak. Oyunumuz, uzaktan çalışan ekiplerin team-building aktiviteleri için, arkadaş gruplarının eğlenceli vakitleri için veya ailelerin birlikte kaliteli zaman geçirmeleri için mükemmel bir seçenek.'
            },
            
            howItStarted: {
                title: 'Nasıl Başladı?',
                content: 'WordImposter, popüler sosyal çıkarım oyunlarından ilham alınarak 2026 yılında geliştirilmeye başlandı. Geliştiricimiz, arkadaşlarıyla online oynayabileceği eğlenceli ve ücretsiz bir oyun arayışındayken, böyle bir platformun eksikliğini fark etti ve WordImposter\'ı yaratma fikri doğdu.'
            },
            
            features: {
                title: 'Neden WordImposter?',
                items: [
                    {
                        icon: '🆓',
                        title: 'Tamamen Ücretsiz',
                        desc: 'Hiçbir ücret ödemeden, reklamsız ve sınırsız oyun deneyimi. Kayıt veya üyelik gerektirmez.'
                    },
                    {
                        icon: '🌍',
                        title: 'Çok Dilli',
                        desc: 'Türkçe ve İngilizce dillerinde oynanabilir. Daha fazla dil desteği yakında eklenecek.'
                    },
                    {
                        icon: '📱',
                        title: 'Her Cihazda Çalışır',
                        desc: 'Mobil telefon, tablet veya bilgisayar - her cihazda mükemmel çalışır. Kurulum gerektirmez.'
                    },
                    {
                        icon: '👥',
                        title: 'Sosyal Etkileşim',
                        desc: '3-10 oyuncu arası gruplarla oynayın. Arkadaşlarınızı davet edin ve birlikte eğlenin.'
                    },
                    {
                        icon: '🎯',
                        title: 'Binlerce Kelime',
                        desc: 'Onlarca kategoride binlerce farklı kelime ile her oyun farklı ve heyecan verici.'
                    },
                    {
                        icon: '⚡',
                        title: 'Hızlı ve Kolay',
                        desc: 'Sadece bir oda kodu ile saniyeler içinde oyuna başlayın. Karmaşık kayıt işlemleri yok.'
                    }
                ]
            },
            
            technology: {
                title: 'Teknoloji',
                content: 'WordImposter, modern web teknolojileri kullanılarak geliştirilmiştir: Next.js, React, TypeScript, Firebase Realtime Database ve Tailwind CSS. Oyun, gerçek zamanlı senkronizasyon ile sorunsuz çoklu oyuncu deneyimi sunar.'
            },
            
            privacy: {
                title: 'Gizlilik ve Güvenlik',
                content: 'Kullanıcı gizliliğine önem veriyoruz. Oyun için yalnızca gerekli minimal bilgileri topluyoruz (takma ad ve oda kodu). Kişisel bilgileriniz hiçbir şekilde üçüncü taraflarla paylaşılmaz.'
            },
            
            developer: {
                title: 'Geliştirici',
                content: 'WordImposter, Enes Öz tarafından geliştirilmektedir. Bağımsız bir geliştirici olarak, kullanıcı deneyimini sürekli iyileştirmeye ve yeni özellikler eklemeye devam ediyorum.',
                email: 'İletişim: oze05607@gmail.com'
            },
            
            future: {
                title: 'Gelecek Planları',
                items: [
                    'Daha fazla dil desteği (Almanca, Fransızca, İspanyolca vb.)',
                    'Özel kelime listeleri oluşturma',
                    'Oyun istatistikleri ve liderlik tablosu',
                    'Sesli sohbet desteği',
                    'Daha fazla oyun modu ve varyasyonları',
                    'Mobil uygulamalar (iOS ve Android)'
                ]
            },
            
            support: {
                title: 'Destek ve Geri Bildirim',
                content: 'Oyunumuz hakkında önerileriniz veya sorunlarınız mı var? Lütfen bizimle iletişime geçin. Tüm geri bildirimlere yanıt vermeye çalışıyoruz ve kullanıcı önerilerini dikkate alıyoruz.'
            },
            
            thanks: 'Teşekkürler!',
            thanksMsg: 'WordImposter\'ı seçtiğiniz için teşekkür ederiz. İyi oyunlar!'
        },
        
        en: {
            title: 'About Us',
            subtitle: 'WordImposter - The Most Fun Word Game to Play with Friends',
            intro: 'WordImposter is a free social deduction and word game that you can play online with your friends and family. While trying to find the imposter among players, you can develop your strategic thinking skills by giving clues and analyzing each other\'s behaviors.',
            
            mission: {
                title: 'Our Mission',
                content: 'Our goal is to provide a fun and completely free gaming experience that brings people together. Our game is a perfect choice for team-building activities of remote teams, fun times with friend groups, or for families to spend quality time together.'
            },
            
            howItStarted: {
                title: 'How It Started?',
                content: 'WordImposter was inspired by popular social deduction games and development started in 2026. Our developer, while searching for a fun and free game to play online with friends, noticed the lack of such a platform and the idea of creating WordImposter was born.'
            },
            
            features: {
                title: 'Why WordImposter?',
                items: [
                    {
                        icon: '🆓',
                        title: 'Completely Free',
                        desc: 'Unlimited gaming experience without any fees, ads, or registration required.'
                    },
                    {
                        icon: '🌍',
                        title: 'Multi-language',
                        desc: 'Playable in Turkish and English. More language support coming soon.'
                    },
                    {
                        icon: '📱',
                        title: 'Works on All Devices',
                        desc: 'Mobile phone, tablet, or computer - works perfectly on any device. No installation required.'
                    },
                    {
                        icon: '👥',
                        title: 'Social Interaction',
                        desc: 'Play with groups of 3-10 players. Invite your friends and have fun together.'
                    },
                    {
                        icon: '🎯',
                        title: 'Thousands of Words',
                        desc: 'Thousands of different words in dozens of categories make every game different and exciting.'
                    },
                    {
                        icon: '⚡',
                        title: 'Fast and Easy',
                        desc: 'Start playing in seconds with just a room code. No complicated registration process.'
                    }
                ]
            },
            
            technology: {
                title: 'Technology',
                content: 'WordImposter is developed using modern web technologies: Next.js, React, TypeScript, Firebase Realtime Database, and Tailwind CSS. The game offers a seamless multiplayer experience with real-time synchronization.'
            },
            
            privacy: {
                title: 'Privacy and Security',
                content: 'We value user privacy. We only collect minimal necessary information for the game (nickname and room code). Your personal information is never shared with third parties.'
            },
            
            developer: {
                title: 'Developer',
                content: 'WordImposter is developed by Enes Öz. As an independent developer, I continue to constantly improve the user experience and add new features.',
                email: 'Contact: oze05607@gmail.com'
            },
            
            future: {
                title: 'Future Plans',
                items: [
                    'More language support (German, French, Spanish, etc.)',
                    'Custom word list creation',
                    'Game statistics and leaderboard',
                    'Voice chat support',
                    'More game modes and variations',
                    'Mobile apps (iOS and Android)'
                ]
            },
            
            support: {
                title: 'Support and Feedback',
                content: 'Do you have suggestions or issues about our game? Please contact us. We try to respond to all feedback and take user suggestions into consideration.'
            },
            
            thanks: 'Thank You!',
            thanksMsg: 'Thank you for choosing WordImposter. Have fun playing!'
        }
    };

    const c = content[language];

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="max-w-4xl mx-auto p-4 md:p-8">
                <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
                    ← {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                </Link>

                <div className="space-y-12">
                    {/* Header */}
                    <header className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {c.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300">
                            {c.subtitle}
                        </p>
                    </header>

                    {/* Introduction */}
                    <section className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {c.intro}
                        </p>
                    </section>

                    {/* Mission */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-400">{c.mission.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {c.mission.content}
                        </p>
                    </section>

                    {/* How It Started */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-400">{c.howItStarted.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {c.howItStarted.content}
                        </p>
                    </section>

                    {/* Features */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">{c.features.title}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {c.features.items.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="bg-[#12121a] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all"
                                >
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technology */}
                    <section className="bg-[#12121a] rounded-xl p-8 border border-gray-800">
                        <h2 className="text-3xl font-bold mb-4 text-purple-400">{c.technology.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {c.technology.content}
                        </p>
                    </section>

                    {/* Privacy */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-400">{c.privacy.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {c.privacy.content}
                        </p>
                    </section>

                    {/* Developer */}
                    <section className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
                        <h2 className="text-3xl font-bold mb-4 text-purple-400">{c.developer.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-3">
                            {c.developer.content}
                        </p>
                        <p className="text-purple-300 font-mono">
                            {c.developer.email}
                        </p>
                    </section>

                    {/* Future Plans */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-purple-400">{c.future.title}</h2>
                        <ul className="space-y-3">
                            {c.future.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <span className="text-purple-400 mt-1">▸</span>
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Support */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-400">{c.support.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {c.support.content}
                        </p>
                    </section>

                    {/* Thanks */}
                    <section className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 border border-purple-500/30">
                        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {c.thanks}
                        </h2>
                        <p className="text-xl text-gray-300">
                            {c.thanksMsg}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
