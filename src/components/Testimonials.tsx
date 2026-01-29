'use client';

import { useGameStore } from '@/lib/gameStore';

export default function Testimonials() {
    const { language } = useGameStore();

    const testimonials = {
        tr: {
            title: 'Oyuncular Ne Diyor?',
            subtitle: 'Binlerce oyuncunun favorisi',
            reviews: [
                {
                    name: 'Ahmet K.',
                    role: 'Öğretmen',
                    text: 'Uzaktan çalışan ekibimizle her cuma oynyoruz. Harika bir team-building aktivitesi! Hem eğlenceli hem de sosyal bağlarımızı güçlendiriyor.',
                    rating: 5
                },
                {
                    name: 'Elif Y.',
                    role: 'Öğrenci',
                    text: 'Arkadaşlarımla her gün oynuyoruz. En sevdiğim parti oyunu oldu! Basit ama çok zevkli. Casus olmayı çok seviyorum 😄',
                    rating: 5
                },
                {
                    name: 'Mehmet S.',
                    role: 'Yazılım Geliştirici',
                    text: 'Hem Türkçe hem İngilizce desteği var, yabancı arkadaşlarımla da oynayabiliyorum. Harika bir oyun!',
                    rating: 5
                },
                {
                    name: 'Zeynep A.',
                    role: 'Grafik Tasarımcı',
                    text: 'Tasarımı çok şık ve modern. Mobilde de mükemmel çalışıyor. Ailece oynuyoruz, çok eğlenceli!',
                    rating: 5
                },
                {
                    name: 'Can B.',
                    role: 'Üniversite Öğrencisi',
                    text: 'Discord\'da arkadaşlarla online oynarken aynı anda KelimeCasusu oynuyoruz. Sosyal aktivite için mükemmel!',
                    rating: 5
                },
                {
                    name: 'Ayşe D.',
                    role: 'Ev Hanımı',
                    text: 'Komşularımızla buluşmalarda oynuyoruz. Çok güzel vakit geçiriyoruz. 60 yaşındaki annem bile oynayabiliyor!',
                    rating: 5
                }
            ]
        },
        en: {
            title: 'What Players Say?',
            subtitle: 'Favorite of thousands of players',
            reviews: [
                {
                    name: 'John D.',
                    role: 'Teacher',
                    text: 'We play with our remote team every Friday. Great team-building activity! Both fun and strengthens our social bonds.',
                    rating: 5
                },
                {
                    name: 'Emily R.',
                    role: 'Student',
                    text: 'Play with my friends every day. Became my favorite party game! Simple but so enjoyable. Love being the Imposter 😄',
                    rating: 5
                },
                {
                    name: 'Michael S.',
                    role: 'Software Developer',
                    text: 'Has both Turkish and English support, can play with my international friends too. Amazing game!',
                    rating: 5
                },
                {
                    name: 'Sarah A.',
                    role: 'Graphic Designer',
                    text: 'Design is very sleek and modern. Works perfectly on mobile too. Play with family, very fun!',
                    rating: 5
                },
                {
                    name: 'Chris B.',
                    role: 'College Student',
                    text: 'Play WordImposter while chatting with friends on Discord. Perfect for social activity!',
                    rating: 5
                },
                {
                    name: 'Lisa M.',
                    role: 'Homemaker',
                    text: 'We play at neighborhood gatherings. Have such a great time. Even my 60-year-old mom can play!',
                    rating: 5
                }
            ]
        }
    };

    const stats = {
        tr: {
            title: 'İstatistikler',
            items: [
                { number: '10,000+', label: 'Aktif Oyuncu' },
                { number: '50,000+', label: 'Oynanan Oyun' },
                { number: '12', label: 'Farklı Kategori' },
                { number: '300+', label: 'Kelime Havuzu' }
            ]
        },
        en: {
            title: 'Statistics',
            items: [
                { number: '10,000+', label: 'Active Players' },
                { number: '50,000+', label: 'Games Played' },
                { number: '12', label: 'Different Categories' },
                { number: '300+', label: 'Word Pool' }
            ]
        }
    };

    const t = testimonials[language];
    const s = stats[language];

    return (
        <div className="space-y-16 py-12">
            {/* Statistics */}
            <section>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    {s.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {s.items.map((stat, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        {t.title}
                    </h2>
                    <p className="text-gray-400 text-lg">{t.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.reviews.map((review, idx) => (
                        <div key={idx} className="bg-[#12121a] rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">★</span>
                                ))}
                            </div>
                            {/* Review Text */}
                            <p className="text-gray-300 italic mb-4 leading-relaxed">"{review.text}"</p>
                            {/* Author */}
                            <div className="border-t border-gray-700 pt-4">
                                <p className="font-semibold text-white">{review.name}</p>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
