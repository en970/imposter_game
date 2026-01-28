'use client';

import { useGameStore } from '@/lib/gameStore';

export default function SEOContent() {
    const { language } = useGameStore();

    const content = {
        tr: {
            title: 'WordImposter (KelimeCasusu) Nedir?',
            desc: 'WordImposter, arkadaşlarınızla online olarak oynayabileceğiniz eğlenceli ve heyecan verici bir sosyal bulmaca oyunudur. Casusu bulmak için kelimeleri tarif edin, ancak sırrınızı belli etmeyin!',
            howTo: 'Kelime Casusu Nasıl Oynanır?',
            steps: [
                {
                    t: '1. Odaya Katılın veya Oluşturun',
                    d: 'Bir oda kodu ile arkadaşlarınızın odasına katılabilir veya kendi odanızı oluşturup arkadaşlarınızı davet edebilirsiniz. En az 3 kişi ile oynanır.'
                },
                {
                    t: '2. Rolünüzü Öğrenin',
                    d: 'Oyun başladığında herkese gizli bir kelime verilir. Ancak Casus kelimeyi bilmez, sadece kategoriyi görür.'
                },
                {
                    t: '3. İpuçları Verin',
                    d: 'Herkes sırayla kelime hakkında tek kelimelik bir ipucu verir. Siviller kelimeyi bildiklerini kanıtlamaya çalışırken, Casus sivilleri taklit ederek kelimeyi tahmin etmeye çalışır.'
                },
                {
                    t: '4. Casusu Oylayın',
                    d: 'Tüm ipuçları verildikten sonra tartışma başlar. Herkes şüphelendiği kişiyi oylar. Eğer Casus yakalanırsa Siviller, yakalanamazsa Casus kazanır!'
                }
            ],
            features: 'Oyun Özellikleri',
            featureList: [
                'Çoklu Dil Desteği (Türkçe & İngilizce)',
                'Onlarca Farklı Kategori ve Binlerce Kelime',
                'Özel Oda Oluşturma ve Arkadaşlarla Oynama',
                'Tamamen Ücretsiz ve Kurulum Gerektirmez',
                'Mobil ve Masaüstü Uyumlu Modern Tasarım'
            ]
        },
        en: {
            title: 'What is WordImposter?',
            desc: 'WordImposter is a fun and exciting social puzzle game you can play with friends online. Describe words to find the imposter, but don\'t give away the secret!',
            howTo: 'How to Play WordImposter?',
            steps: [
                {
                    t: '1. Join or Create a Room',
                    d: 'Join your friends\' room with a code or create your own and invite others. Played with at least 3 players.'
                },
                {
                    t: '2. Get Your Role',
                    d: 'When the game starts, everyone gets a secret word. However, the Imposter doesn\'t know the word, they only see the category.'
                },
                {
                    t: '3. Give Clues',
                    d: 'Everyone takes turns giving a one-word clue about the word. Civilians try to prove they know the word, while the Imposter tries to mimic them and guess the word.'
                },
                {
                    t: '4. Vote for the Imposter',
                    d: 'After all clues are given, the discussion begins. Everyone votes for the person they suspect. If the Imposter is caught, Civilians win; otherwise, the Imposter wins!'
                }
            ],
            features: 'Game Features',
            featureList: [
                'Multi-language Support (Turkish & English)',
                'Dozens of Categories and Thousands of Words',
                'Private Rooms to Play with Friends',
                'Completely Free and No Installation Required',
                'Mobile and Desktop Compatible Modern Design'
            ]
        }
    };

    const c = content[language];

    return (
        <section className="seo-content mt-20 px-4 md:px-8 pb-20 border-t border-gray-800/30">
            <div className="max-w-4xl mx-auto space-y-12 pt-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        {c.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        {c.desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#12121a]/50 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all">
                        <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">?</span>
                            {c.howTo}
                        </h3>
                        <div className="space-y-6">
                            {c.steps.map((step, idx) => (
                                <div key={idx} className="space-y-1">
                                    <h4 className="text-purple-400 font-semibold text-sm uppercase tracking-wider">{step.t}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#12121a]/50 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/30 transition-all">
                        <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-sm">★</span>
                            {c.features}
                        </h3>
                        <ul className="space-y-4">
                            {c.featureList.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                            <p className="text-xs text-purple-300/80 leading-relaxed italic text-center">
                                {language === 'tr'
                                    ? 'KelimeCasusu, sosyal ortamlarda, ev partilerinde veya online olarak arkadaşlarınızla vakit geçirmenin en eğlenceli yoludur.'
                                    : 'WordImposter is the most fun way to spend time with your friends in social gatherings, house parties, or online.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Style Section for better Keyword density */}
                <div className="pt-8 text-center">
                    <div className="inline-flex flex-wrap justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                        <span>WORD GAME</span>
                        <span>•</span>
                        <span>SPY GAME</span>
                        <span>•</span>
                        <span>PARTY GAME</span>
                        <span>•</span>
                        <span>KELİME OYUNU</span>
                        <span>•</span>
                        <span>CASUS BULMACA</span>
                        <span>•</span>
                        <span>FRIENDS GAME</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
