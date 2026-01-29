'use client';

import { useGameStore } from '@/lib/gameStore';
import Link from 'next/link';

export default function StrategiesPage() {
    const { language } = useGameStore();

    const content = {
        tr: {
            title: 'Oyun Stratejileri',
            subtitle: 'KelimeCasusu\'nda ustalaşmak için en iyi stratejiler ve taktikler',
            
            civilian: {
                title: '👥 Sivil Olarak Oynama Stratejileri',
                intro: 'Sivil olarak amacınız, kelimeyi bildiğinizi kanıtlamak ve Casus\'u bulmaktır. İşte başarı için ipuçları:',
                strategies: [
                    {
                        title: 'Dengeli İpucu Verme',
                        desc: 'Çok açık ipucu vermeyin (Casus anlar), çok kapalı da vermeyin (şüpheli görünürsünüz).',
                        examples: [
                            'Kelime "Aslan" ise: İyi ipucu → "Afrika", "sarı", "vahşi"',
                            'Kötü ipucu → "kral" (çok açık), "canlı" (çok genel)'
                        ],
                        level: 'Temel'
                    },
                    {
                        title: 'Diğer Oyuncuları Gözlemle',
                        desc: 'Her oyuncunun ipucunu not edin. Belirsiz veya genel ipuçlar veren oyuncu Casus olabilir.',
                        examples: [
                            'İyi ipuçları birbirini tamamlar',
                            'Casus genellikle genel ifadeler kullanır'
                        ],
                        level: 'Orta'
                    },
                    {
                        title: 'Geç Sırada Daha Dikkatli Ol',
                        desc: 'İlk oyuncular daha özgür ipucu verebilir. Son sıradaysanız, tekrar etmeden orijinal ipucu verin.',
                        examples: [
                            'Önceki ipuçlardan farklı açıları düşünün',
                            'Kelimeninbir başka özelliğini vurgulayın'
                        ],
                        level: 'İleri'
                    },
                    {
                        title: 'Tartışmada Aktif Ol',
                        desc: 'Sessiz kalmak şüpheli görünür. Görüşlerinizi paylaşın ve diğerlerinin ipuçlarını analiz edin.',
                        examples: [
                            '"X\'in ipucu ilginçti, neden böyle söyledin?" gibi sorular sorun',
                            'Kendi ipucunuzu savunmaya hazır olun'
                        ],
                        level: 'Orta'
                    },
                    {
                        title: 'Blöf Yapma Taktiği',
                        desc: 'Bazen kasıtlı olarak belirsiz ipucu vererek Casus\'u tuzağa düşürebilirsiniz.',
                        examples: [
                            'Casus sizin ipucunuzu taklit etmeye çalışabilir',
                            'Bu taktik risklidir, dikkatli kullanın'
                        ],
                        level: 'İleri'
                    }
                ]
            },
            
            imposter: {
                title: '🕵️ Casus Olarak Oynama Stratejileri',
                intro: 'Casus olarak amacınız, kelimeyi bilmediğiniz halde Sivil gibi görünmektir. İşte taktikler:',
                strategies: [
                    {
                        title: 'Diğerlerini Dikkatle Dinle',
                        desc: 'İlk tur ipuçları çok önemli. Verilen ipuçlardan kelimeyi çıkarmaya çalışın.',
                        examples: [
                            'Ortak temalar arayın (örn: "soğuk", "beyaz", "kutup" → Kutup hayvanı)',
                            'Kategori ile ipuçları birleştirin'
                        ],
                        level: 'Temel'
                    },
                    {
                        title: 'Güvenli ve Genel İpuçlar Ver',
                        desc: 'Çok spesifik ipuçlar risklidir. Kategoriye uyan genel ifadeler kullanın.',
                        examples: [
                            'Kategori "Hayvanlar" ise: "doğa", "yaşayan", "güzel" güvenlidir',
                            'Çok spesifik detaylardan kaçının'
                        ],
                        level: 'Temel'
                    },
                    {
                        title: 'Ortadaki Oyuncu Ol',
                        desc: 'Ne çok öne çıkın ne de çok sessiz kalın. Ortada kalarak dikkat çekmezsiniz.',
                        examples: [
                            'Tartışmalarda dengeli katılım gösterin',
                            'Aşırı savunmacı olmayın'
                        ],
                        level: 'Orta'
                    },
                    {
                        title: 'Başkalarını Şüpheli Göster',
                        desc: 'Dikkat başkalarına çekerek kendinizi koruyun. Ancak çok agresif olmayın.',
                        examples: [
                            '"X\'in ipucu biraz garip gelmedi mi?" gibi sorular sorun',
                            'Kendinize gelen şüpheyi başkasına yönlendirin'
                        ],
                        level: 'İleri'
                    },
                    {
                        title: 'Kelimeyi Tahmin Etme Bonus',
                        desc: 'Eğer kelimeyi çıkarabilirseniz, son aşamada tahmin edebilir ve kazanabilirsiniz!',
                        examples: [
                            'Tüm ipuçları toplandığında en mantıklı kelimeyi düşünün',
                            'Bu ekstra kazanma şansıdır, riske değer'
                        ],
                        level: 'İleri'
                    }
                ]
            },
            
            advanced: {
                title: '🎯 İleri Seviye Taktikler',
                tactics: [
                    {
                        title: 'Meta-Oyun: Oyuncu Profillerini Tanı',
                        desc: 'Düzenli oynadığınız arkadaşlarınızın oyun stillerini öğrenin.',
                        points: [
                            'Kim agresif oynar?',
                            'Kim sessiz kalır?',
                            'Kim çok konuşur?',
                            'Normal davranış vs şüpheli davranışı ayırt edin'
                        ]
                    },
                    {
                        title: 'Psikolojik Taktikler',
                        desc: 'Oyunun psikolojik boyutunu kullanın.',
                        points: [
                            'Göz teması kurun (canlı oyunlarda)',
                            'Kendinize güvenli görünün',
                            'Stres altındayken sakin kalın',
                            'Başkalarının stresini gözlemleyin'
                        ]
                    },
                    {
                        title: 'İstatistiksel Düşünme',
                        desc: 'Oyuncu sayısına göre olasılıkları hesaplayın.',
                        points: [
                            '5 oyuncu = %20 Casus olma şansı',
                            '8 oyuncu = %12.5 Casus olma şansı',
                            'İlk turda random oylama yapmayın',
                            'İpuçlarına dayanarak karar verin'
                        ]
                    },
                    {
                        title: 'Koalisyon Oluşturma',
                        desc: 'Güvendiğiniz oyuncularla ittifak kurun.',
                        points: [
                            'Benzer ipuçları veren oyuncular muhtemelen Sivil',
                            'Birlikte şüpheli oyuncuları analiz edin',
                            'Ancak körü körüne güvenmeyin - herkes yalan söyleyebilir!'
                        ]
                    }
                ]
            },
            
            mistakes: {
                title: '❌ Yaygın Hatalar ve Nasıl Önlenir',
                errors: [
                    {
                        error: 'Çok Açık İpucu Vermek',
                        why: 'Casus kelimeyi kolayca anlar',
                        solution: 'İpucu verin ama açık olmayın. "Dengeli" düşünün.'
                    },
                    {
                        error: 'Çok Genel İpucu Vermek',
                        why: 'Şüpheli görünürsünüz, Casus sanılabilirsiniz',
                        solution: 'Kelimeyle ilgili ama benzersiz özellikler seçin'
                    },
                    {
                        error: 'İlk Turda Random Oylama',
                        why: 'Sivillerin yanlışlıkla atılmasına neden olur',
                        solution: 'İpuçlarını analiz edin, mantıklı oy verin'
                    },
                    {
                        error: 'Aşırı Savunmacı Olmak',
                        why: 'Daha şüpheli görünürsünüz',
                        solution: 'Sakin kalın ve mantıklı savunma yapın'
                    },
                    {
                        error: 'Sessiz Kalmak',
                        why: 'Gizlenmeye çalışıyor gibi görünürsünüz',
                        solution: 'Aktif katılım gösterin, görüş bildirin'
                    },
                    {
                        error: 'Kelimeyi Söylemek (Kural İhlali)',
                        why: 'Oyunu bozar, kimse kazanmaz',
                        solution: 'Kelimeyi hiçbir şekilde söylemeyin!'
                    }
                ]
            },
            
            practice: {
                title: '💪 Nasıl Gelişirsiniz?',
                tips: [
                    'Çok oynayın - deneyim en iyi öğretmendir',
                    'Her oyundan sonra performansınızı değerlendirin',
                    'Farklı oyuncu gruplarıyla oynayın',
                    'Hem Sivil hem Casus rolünde ustalaşın',
                    'Video kayıtları izleyerek başkalarından öğrenin',
                    'Farklı kategorilerde pratik yapın',
                    'Arkadaşlarınızla taktik tartışın'
                ]
            }
        },
        
        en: {
            title: 'Game Strategies',
            subtitle: 'Best strategies and tactics to master WordImposter',
            
            civilian: {
                title: '👥 Playing as Civilian Strategies',
                intro: 'As a Civilian, your goal is to prove you know the word and find the Imposter. Here are tips for success:',
                strategies: [
                    {
                        title: 'Balanced Clue Giving',
                        desc: 'Don\'t give too obvious clues (Imposter understands), don\'t give too vague ones (you look suspicious).',
                        examples: [
                            'Word is "Lion": Good clue → "Africa", "yellow", "wild"',
                            'Bad clue → "king" (too obvious), "living" (too general)'
                        ],
                        level: 'Basic'
                    },
                    {
                        title: 'Observe Other Players',
                        desc: 'Note each player\'s clue. Players giving vague or general clues might be the Imposter.',
                        examples: [
                            'Good clues complement each other',
                            'Imposter usually uses general phrases'
                        ],
                        level: 'Intermediate'
                    },
                    {
                        title: 'Be More Careful in Late Position',
                        desc: 'First players can give freer clues. If you\'re last, give original clues without repeating.',
                        examples: [
                            'Think of different angles from previous clues',
                            'Highlight another feature of the word'
                        ],
                        level: 'Advanced'
                    },
                    {
                        title: 'Be Active in Discussion',
                        desc: 'Staying silent looks suspicious. Share your opinions and analyze others\' clues.',
                        examples: [
                            'Ask questions like "X\'s clue was interesting, why did you say that?"',
                            'Be ready to defend your clue'
                        ],
                        level: 'Intermediate'
                    },
                    {
                        title: 'Bluffing Tactic',
                        desc: 'Sometimes intentionally vague clues can trap the Imposter.',
                        examples: [
                            'Imposter might try to mimic your clue',
                            'This tactic is risky, use carefully'
                        ],
                        level: 'Advanced'
                    }
                ]
            },
            
            imposter: {
                title: '🕵️ Playing as Imposter Strategies',
                intro: 'As Imposter, your goal is to appear like a Civilian even though you don\'t know the word. Here are tactics:',
                strategies: [
                    {
                        title: 'Listen Carefully to Others',
                        desc: 'First round clues are crucial. Try to deduce the word from given clues.',
                        examples: [
                            'Look for common themes (e.g., "cold", "white", "pole" → Polar animal)',
                            'Combine category with clues'
                        ],
                        level: 'Basic'
                    },
                    {
                        title: 'Give Safe and General Clues',
                        desc: 'Very specific clues are risky. Use general phrases that fit the category.',
                        examples: [
                            'Category "Animals": "nature", "living", "beautiful" are safe',
                            'Avoid very specific details'
                        ],
                        level: 'Basic'
                    },
                    {
                        title: 'Be a Middle Player',
                        desc: 'Neither stand out too much nor stay too silent. Staying in the middle doesn\'t draw attention.',
                        examples: [
                            'Show balanced participation in discussions',
                            'Don\'t be overly defensive'
                        ],
                        level: 'Intermediate'
                    },
                    {
                        title: 'Make Others Look Suspicious',
                        desc: 'Protect yourself by drawing attention to others. But don\'t be too aggressive.',
                        examples: [
                            'Ask questions like "Didn\'t X\'s clue seem a bit weird?"',
                            'Redirect suspicion from yourself to others'
                        ],
                        level: 'Advanced'
                    },
                    {
                        title: 'Word Guessing Bonus',
                        desc: 'If you can deduce the word, you can guess it in the final stage and win!',
                        examples: [
                            'Think of the most logical word when all clues are gathered',
                            'This is an extra winning chance, worth the risk'
                        ],
                        level: 'Advanced'
                    }
                ]
            },
            
            advanced: {
                title: '🎯 Advanced Level Tactics',
                tactics: [
                    {
                        title: 'Meta-Game: Know Player Profiles',
                        desc: 'Learn the playing styles of friends you regularly play with.',
                        points: [
                            'Who plays aggressively?',
                            'Who stays quiet?',
                            'Who talks a lot?',
                            'Distinguish normal behavior vs suspicious behavior'
                        ]
                    },
                    {
                        title: 'Psychological Tactics',
                        desc: 'Use the psychological dimension of the game.',
                        points: [
                            'Make eye contact (in live games)',
                            'Appear confident',
                            'Stay calm under stress',
                            'Observe others\' stress'
                        ]
                    },
                    {
                        title: 'Statistical Thinking',
                        desc: 'Calculate probabilities based on player count.',
                        points: [
                            '5 players = 20% chance of being Imposter',
                            '8 players = 12.5% chance of being Imposter',
                            'Don\'t vote randomly in first round',
                            'Make decisions based on clues'
                        ]
                    },
                    {
                        title: 'Coalition Building',
                        desc: 'Form alliances with players you trust.',
                        points: [
                            'Players with similar clues are probably Civilians',
                            'Analyze suspicious players together',
                            'But don\'t blindly trust - everyone can lie!'
                        ]
                    }
                ]
            },
            
            mistakes: {
                title: '❌ Common Mistakes and How to Prevent',
                errors: [
                    {
                        error: 'Giving Too Obvious Clues',
                        why: 'Imposter easily understands the word',
                        solution: 'Give clues but don\'t be obvious. Think "balanced".'
                    },
                    {
                        error: 'Giving Too General Clues',
                        why: 'You look suspicious, might be thought as Imposter',
                        solution: 'Choose features related to the word but unique'
                    },
                    {
                        error: 'Random Voting in First Round',
                        why: 'Causes Civilians to be mistakenly voted out',
                        solution: 'Analyze clues, vote logically'
                    },
                    {
                        error: 'Being Overly Defensive',
                        why: 'Makes you look more suspicious',
                        solution: 'Stay calm and make logical defense'
                    },
                    {
                        error: 'Staying Silent',
                        why: 'Looks like you\'re trying to hide',
                        solution: 'Show active participation, express opinions'
                    },
                    {
                        error: 'Saying the Word (Rule Violation)',
                        why: 'Ruins the game, nobody wins',
                        solution: 'Never say the word in any way!'
                    }
                ]
            },
            
            practice: {
                title: '💪 How to Improve?',
                tips: [
                    'Play a lot - experience is the best teacher',
                    'Evaluate your performance after each game',
                    'Play with different player groups',
                    'Master both Civilian and Imposter roles',
                    'Learn from others by watching video recordings',
                    'Practice in different categories',
                    'Discuss tactics with friends'
                ]
            }
        }
    };

    const c = content[language];

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="max-w-5xl mx-auto p-4 md:p-8">
                <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
                    ← {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                </Link>

                <div className="space-y-12">
                    <header className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {c.title}
                        </h1>
                        <p className="text-xl text-gray-300">{c.subtitle}</p>
                    </header>

                    {/* Civilian Strategies */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-400">{c.civilian.title}</h2>
                        <p className="text-gray-300 mb-6 text-lg">{c.civilian.intro}</p>
                        <div className="space-y-6">
                            {c.civilian.strategies.map((strategy, idx) => (
                                <div key={idx} className="bg-[#12121a] rounded-xl p-6 border border-gray-800">
                                    <div className="flex items-start gap-3 mb-3">
                                        <h3 className="text-xl font-semibold text-white flex-1">{strategy.title}</h3>
                                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">{strategy.level}</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">{strategy.desc}</p>
                                    <div className="bg-[#0a0a0f] rounded-lg p-4 space-y-2">
                                        {strategy.examples.map((ex, exIdx) => (
                                            <div key={exIdx} className="flex items-start gap-2">
                                                <span className="text-purple-400 mt-1">•</span>
                                                <span className="text-gray-400 text-sm">{ex}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Imposter Strategies */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-pink-400">{c.imposter.title}</h2>
                        <p className="text-gray-300 mb-6 text-lg">{c.imposter.intro}</p>
                        <div className="space-y-6">
                            {c.imposter.strategies.map((strategy, idx) => (
                                <div key={idx} className="bg-[#12121a] rounded-xl p-6 border border-gray-800">
                                    <div className="flex items-start gap-3 mb-3">
                                        <h3 className="text-xl font-semibold text-white flex-1">{strategy.title}</h3>
                                        <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">{strategy.level}</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">{strategy.desc}</p>
                                    <div className="bg-[#0a0a0f] rounded-lg p-4 space-y-2">
                                        {strategy.examples.map((ex, exIdx) => (
                                            <div key={exIdx} className="flex items-start gap-2">
                                                <span className="text-pink-400 mt-1">•</span>
                                                <span className="text-gray-400 text-sm">{ex}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Advanced Tactics */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-purple-400">{c.advanced.title}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {c.advanced.tactics.map((tactic, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20">
                                    <h3 className="text-lg font-semibold mb-3 text-blue-400">{tactic.title}</h3>
                                    <p className="text-gray-300 mb-4 text-sm">{tactic.desc}</p>
                                    <ul className="space-y-2">
                                        {tactic.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2 text-sm">
                                                <span className="text-blue-400 mt-1">▸</span>
                                                <span className="text-gray-400">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Common Mistakes */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-red-400">{c.mistakes.title}</h2>
                        <div className="space-y-4">
                            {c.mistakes.errors.map((mistake, idx) => (
                                <div key={idx} className="bg-[#12121a] rounded-xl p-6 border border-red-500/20">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold mb-2 text-red-400">{mistake.error}</h3>
                                            <p className="text-gray-400 text-sm mb-2"><strong className="text-gray-300">{language === 'tr' ? 'Neden Kötü:' : 'Why Bad:'}</strong> {mistake.why}</p>
                                            <p className="text-green-400 text-sm"><strong className="text-green-300">{language === 'tr' ? 'Çözüm:' : 'Solution:'}</strong> {mistake.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Practice Tips */}
                    <section className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20">
                        <h2 className="text-3xl font-bold mb-6 text-green-400">{c.practice.title}</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {c.practice.tips.map((tip, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span className="text-gray-300">{tip}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 border border-purple-500/30">
                        <h2 className="text-2xl font-bold mb-4 text-white">
                            {language === 'tr' ? 'Stratejileri Uygulamaya Hazır mısın?' : 'Ready to Apply These Strategies?'}
                        </h2>
                        <Link href="/" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg transition-all">
                            {language === 'tr' ? 'Hemen Oyna' : 'Play Now'}
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}
