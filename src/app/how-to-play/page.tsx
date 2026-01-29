'use client';

import { useGameStore } from '@/lib/gameStore';
import Link from 'next/link';

export default function HowToPlayPage() {
    const { language } = useGameStore();

    const content = {
        tr: {
            title: 'Nasıl Oynanır?',
            subtitle: 'KelimeCasusu oyununu oynamak için adım adım detaylı rehber',
            
            introduction: {
                title: 'Oyuna Giriş',
                text: 'KelimeCasusu (WordImposter), sosyal çıkarım ve kelime tahmin mekanizmalarını birleştiren heyecan verici bir parti oyunudur. 3-10 kişi arasında oynanır ve amacınız, oyuncular arasındaki "Casus"u bulmaktır. Casus, diğer oyuncuların bildiği gizli kelimeyi bilmez ve sadece kategoriyi görür.'
            },
            
            setup: {
                title: 'Oyun Kurulumu',
                steps: [
                    {
                        title: 'Oda Oluşturma',
                        desc: 'Ana sayfada "Oda Oluştur" butonuna tıklayın. Sistem otomatik olarak 4 haneli benzersiz bir oda kodu oluşturur.',
                        tip: 'İpucu: Oda kodunu arkadaşlarınızla paylaşmadan önce kaydedin.'
                    },
                    {
                        title: 'Oyunculara Katılım',
                        desc: 'Arkadaşlarınız, oda kodunu girerek odanıza katılabilir. Her oyuncu bir takma ad seçer.',
                        tip: 'İpucu: Minimum 3, maksimum 10 oyuncu ile oynanabilir. İdeal oyuncu sayısı 5-8 kişidir.'
                    },
                    {
                        title: 'Dil ve Kategori Seçimi',
                        desc: 'Oda sahibi, oyun dilini (Türkçe/İngilizce) ve kelime kategorisini seçer. Kategoriler arasında: Hayvanlar, Yemekler, Ülkeler, Meslekler ve daha fazlası bulunur.',
                        tip: 'İpucu: Grubunuzun ilgi alanlarına göre kategori seçin.'
                    }
                ]
            },
            
            gameplay: {
                title: 'Oynanış',
                phases: [
                    {
                        title: 'Faz 1: Rol Dağılımı',
                        desc: 'Oyun başladığında herkes gizli bir kart alır:',
                        points: [
                            'Siviller: Gizli kelimeyi görürler (örn: "Aslan")',
                            'Casus: Sadece kategoriyi görür (örn: "Hayvanlar")',
                            'Oyunculardan sadece BİR tanesi Casus olur',
                            'Kimse kimin Casus olduğunu bilmez'
                        ]
                    },
                    {
                        title: 'Faz 2: İpucu Verme Turu',
                        desc: 'Her oyuncu sırayla, kelime hakkında TEK KELİMELİK bir ipucu verir.',
                        points: [
                            'Siviller: Kelimeyi bildiklerini kanıtlamaya çalışır, ancak çok açık ipucu vermemeye dikkat ederler (Casus anlamasın diye)',
                            'Casus: Diğer oyuncuların ipuçlarından kelimeyi anlamaya çalışır ve onları taklit eder',
                            'İpuçları tek kelime olmalıdır (örnekler: "vahşi", "sarı", "Afrika")',
                            'Kelimeyi veya kelimeden türemiş sözcükleri söylemek yasaktır'
                        ]
                    },
                    {
                        title: 'Faz 3: Tartışma',
                        desc: 'Tüm ipuçları verildikten sonra, oyuncular kimin Casus olduğunu tartışır.',
                        points: [
                            'Herkes verilen ipuçlarını analiz eder',
                            'Şüpheli davranışlar not edilir',
                            'Oyuncular birbirlerini sorgulayabilir',
                            'Casus, kendini saklamaya devam eder'
                        ]
                    },
                    {
                        title: 'Faz 4: Oylama',
                        desc: 'Her oyuncu, Casus olduğunu düşündüğü kişiye oy verir.',
                        points: [
                            'Herkes tek bir oyuncu seçer',
                            'En çok oy alan oyuncu açığa çıkar',
                            'Eğer Casus doğru tahmin edildiyse: SİVİLLER KAZANIR',
                            'Eğer bir Sivil yanlışlıkla oylandıysa: CASUS KAZANIR'
                        ]
                    }
                ]
            },
            
            winning: {
                title: 'Kazanma Koşulları',
                conditions: [
                    {
                        title: 'Siviller Kazanır',
                        cases: [
                            'Casus, oylama sonunda doğru tespit edilirse',
                            'Casus, ipuçları aşamasında kendini ele verirse'
                        ]
                    },
                    {
                        title: 'Casus Kazanır',
                        cases: [
                            'Yanlış bir oyuncu (Sivil) oylanırsa',
                            'Casus, kelimeyi doğru tahmin ederse (bonus kazanma şansı)',
                            'Casus, tüm tur boyunca kimliğini gizleyebilirse'
                        ]
                    }
                ]
            },
            
            tips: {
                title: 'Önemli Kurallar',
                rules: [
                    'Ekranınızı kimseyle paylaşmayın - rolünüz gizli kalmalı',
                    'İpuçları mutlaka tek kelime olmalı (iki kelime yasak)',
                    'Kelimeyi veya kelimeden türemiş sözcükleri söylemek yasak',
                    'Tartışma sırasında yalan söyleyebilirsiniz',
                    'Oyun sırasında başka oyuncuların ekranlarına bakmayın',
                    'Nezaket kurallarına uyun ve eğlenin!'
                ]
            },
            
            examples: {
                title: 'Örnek Oyun Senaryosu',
                scenario: 'Kategori: Hayvanlar | Gizli Kelime: Penguen | Oyuncular: 5',
                rounds: [
                    { player: 'Ali (Sivil)', clue: 'Soğuk', analysis: 'Kelimeyle ilgili iyi bir ipucu' },
                    { player: 'Ayşe (Casus)', clue: 'Beyaz', analysis: 'Diğer ipuçlarından tahmin etti' },
                    { player: 'Mehmet (Sivil)', clue: 'Kutup', analysis: 'Açık ipucu verdi' },
                    { player: 'Zeynep (Sivil)', clue: 'Kuş', analysis: 'Çok açık, Casus anladı!' },
                    { player: 'Can (Sivil)', clue: 'Balık', analysis: 'Ne yediğini söyledi' }
                ],
                result: 'Ayşe\'nin ipucu diğerlerinden farklı geldi. Oylama sonunda Ali, Mehmet, Can ve Zeynep, Ayşe\'ye oy verdi. Casus bulundu - SİVİLLER KAZANDI!'
            }
        },
        
        en: {
            title: 'How to Play?',
            subtitle: 'Step-by-step detailed guide to playing WordImposter',
            
            introduction: {
                title: 'Game Introduction',
                text: 'WordImposter is an exciting party game that combines social deduction and word guessing mechanics. Played with 3-10 people, your goal is to find the "Imposter" among the players. The Imposter doesn\'t know the secret word that other players know and only sees the category.'
            },
            
            setup: {
                title: 'Game Setup',
                steps: [
                    {
                        title: 'Creating a Room',
                        desc: 'Click the "Create Room" button on the homepage. The system automatically generates a unique 4-digit room code.',
                        tip: 'Tip: Save the room code before sharing it with friends.'
                    },
                    {
                        title: 'Players Joining',
                        desc: 'Your friends can join your room by entering the room code. Each player chooses a nickname.',
                        tip: 'Tip: Can be played with minimum 3, maximum 10 players. Ideal number is 5-8 players.'
                    },
                    {
                        title: 'Language and Category Selection',
                        desc: 'The room owner selects the game language (Turkish/English) and word category. Categories include: Animals, Foods, Countries, Professions, and more.',
                        tip: 'Tip: Choose a category based on your group\'s interests.'
                    }
                ]
            },
            
            gameplay: {
                title: 'Gameplay',
                phases: [
                    {
                        title: 'Phase 1: Role Distribution',
                        desc: 'When the game starts, everyone receives a secret card:',
                        points: [
                            'Civilians: See the secret word (e.g., "Lion")',
                            'Imposter: Only sees the category (e.g., "Animals")',
                            'Only ONE player is the Imposter',
                            'Nobody knows who the Imposter is'
                        ]
                    },
                    {
                        title: 'Phase 2: Clue Giving Round',
                        desc: 'Each player takes turns giving a ONE-WORD clue about the word.',
                        points: [
                            'Civilians: Try to prove they know the word, but careful not to give too obvious clues (so Imposter doesn\'t understand)',
                            'Imposter: Tries to understand the word from other players\' clues and mimics them',
                            'Clues must be one word (examples: "wild", "yellow", "Africa")',
                            'Saying the word or derivatives is forbidden'
                        ]
                    },
                    {
                        title: 'Phase 3: Discussion',
                        desc: 'After all clues are given, players discuss who the Imposter is.',
                        points: [
                            'Everyone analyzes the given clues',
                            'Suspicious behaviors are noted',
                            'Players can question each other',
                            'Imposter continues to hide their identity'
                        ]
                    },
                    {
                        title: 'Phase 4: Voting',
                        desc: 'Each player votes for who they think is the Imposter.',
                        points: [
                            'Everyone chooses one player',
                            'The player with most votes is revealed',
                            'If Imposter is correctly identified: CIVILIANS WIN',
                            'If a Civilian is mistakenly voted: IMPOSTER WINS'
                        ]
                    }
                ]
            },
            
            winning: {
                title: 'Winning Conditions',
                conditions: [
                    {
                        title: 'Civilians Win',
                        cases: [
                            'If the Imposter is correctly identified in voting',
                            'If the Imposter gives themselves away during clue phase'
                        ]
                    },
                    {
                        title: 'Imposter Wins',
                        cases: [
                            'If the wrong player (Civilian) is voted out',
                            'If the Imposter correctly guesses the word (bonus win chance)',
                            'If the Imposter can hide their identity throughout the game'
                        ]
                    }
                ]
            },
            
            tips: {
                title: 'Important Rules',
                rules: [
                    'Don\'t share your screen with anyone - your role must stay secret',
                    'Clues must be exactly one word (two words forbidden)',
                    'Saying the word or derivatives is forbidden',
                    'You can lie during discussion',
                    'Don\'t look at other players\' screens during the game',
                    'Follow etiquette rules and have fun!'
                ]
            },
            
            examples: {
                title: 'Example Game Scenario',
                scenario: 'Category: Animals | Secret Word: Penguin | Players: 5',
                rounds: [
                    { player: 'Alice (Civilian)', clue: 'Cold', analysis: 'Good clue about the word' },
                    { player: 'Bob (Imposter)', clue: 'White', analysis: 'Guessed from other clues' },
                    { player: 'Charlie (Civilian)', clue: 'Pole', analysis: 'Gave obvious clue' },
                    { player: 'Diana (Civilian)', clue: 'Bird', analysis: 'Too obvious, Imposter understood!' },
                    { player: 'Eve (Civilian)', clue: 'Fish', analysis: 'Said what it eats' }
                ],
                result: 'Bob\'s clue seemed different from others. In voting, Alice, Charlie, Eve, and Diana voted for Bob. Imposter found - CIVILIANS WIN!'
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
                    {/* Header */}
                    <header className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {c.title}
                        </h1>
                        <p className="text-xl text-gray-300">
                            {c.subtitle}
                        </p>
                    </header>

                    {/* Introduction */}
                    <section className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
                        <h2 className="text-2xl font-bold mb-4 text-purple-400">{c.introduction.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {c.introduction.text}
                        </p>
                    </section>

                    {/* Setup */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-purple-400">{c.setup.title}</h2>
                        <div className="space-y-6">
                            {c.setup.steps.map((step, idx) => (
                                <div key={idx} className="bg-[#12121a] rounded-xl p-6 border border-gray-800">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                                            <p className="text-gray-300 mb-3 leading-relaxed">{step.desc}</p>
                                            <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                                                <p className="text-sm text-purple-300">{step.tip}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Gameplay */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-purple-400">{c.gameplay.title}</h2>
                        <div className="space-y-6">
                            {c.gameplay.phases.map((phase, idx) => (
                                <div key={idx} className="bg-[#12121a] rounded-xl p-6 border border-gray-800">
                                    <h3 className="text-xl font-semibold mb-3 text-pink-400">{phase.title}</h3>
                                    <p className="text-gray-300 mb-4">{phase.desc}</p>
                                    <ul className="space-y-2">
                                        {phase.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-3">
                                                <span className="text-purple-400 mt-1">▸</span>
                                                <span className="text-gray-400">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Winning Conditions */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-purple-400">{c.winning.title}</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {c.winning.conditions.map((condition, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/20">
                                    <h3 className="text-xl font-semibold mb-4 text-green-400">{condition.title}</h3>
                                    <ul className="space-y-2">
                                        {condition.cases.map((caseText, cIdx) => (
                                            <li key={cIdx} className="flex items-start gap-3">
                                                <span className="text-green-400">✓</span>
                                                <span className="text-gray-300">{caseText}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Important Rules */}
                    <section className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20">
                        <h2 className="text-3xl font-bold mb-6 text-red-400">{c.tips.title}</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {c.tips.rules.map((rule, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠</span>
                                    <span className="text-gray-300">{rule}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Example Scenario */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-purple-400">{c.examples.title}</h2>
                        <div className="bg-[#12121a] rounded-2xl p-8 border border-gray-800">
                            <div className="bg-purple-500/10 rounded-lg p-4 mb-6 border border-purple-500/20">
                                <p className="text-purple-300 font-mono text-center">{c.examples.scenario}</p>
                            </div>
                            <div className="space-y-3 mb-6">
                                {c.examples.rounds.map((round, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-[#0a0a0f] rounded-lg p-4">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className="font-semibold text-white">{round.player}</span>
                                                <span className="text-purple-400">→</span>
                                                <span className="text-pink-400 font-mono">"{round.clue}"</span>
                                            </div>
                                            <p className="text-sm text-gray-500 italic">{round.analysis}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                                <p className="text-green-300 leading-relaxed">{c.examples.result}</p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 border border-purple-500/30">
                        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {language === 'tr' ? 'Hazır mısın?' : 'Ready to Play?'}
                        </h2>
                        <p className="text-xl text-gray-300 mb-6">
                            {language === 'tr' 
                                ? 'Şimdi arkadaşlarınla bir oda oluştur ve eğlenceye başla!'
                                : 'Create a room with your friends now and start having fun!'}
                        </p>
                        <Link href="/" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg transition-all">
                            {language === 'tr' ? 'Oyuna Başla' : 'Start Playing'}
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}
