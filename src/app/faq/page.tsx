'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqSections = [
        {
            category: 'General Questions',
            icon: '❓',
            faqs: [
                {
                    q: 'Is WordImposter free to play?',
                    a: 'Yes! WordImposter is completely free. No fees, no registration, no downloads required. Just open the website and start playing with your friends instantly.'
                },
                {
                    q: 'How many players can play?',
                    a: 'WordImposter supports 3-10 players. The sweet spot is 5-8 players for the best experience. With fewer players, games are faster. With more players, there is more deception and excitement!'
                },
                {
                    q: 'Do I need to create an account?',
                    a: 'No account needed! Just pick a nickname and you are ready to play. We believe in instant fun without barriers.'
                },
                {
                    q: 'What languages are supported?',
                    a: 'Currently available in English and Turkish. We are working on adding more languages including German, French, and Spanish.'
                }
            ]
        },
        {
            category: 'Technical Questions',
            icon: '⚙️',
            faqs: [
                {
                    q: 'What devices can I play on?',
                    a: 'WordImposter works on any device with a modern web browser - desktops, laptops, tablets, and smartphones. No app download required!'
                },
                {
                    q: 'Is there a mobile app?',
                    a: 'Not yet, but the website is fully optimized for mobile devices. It works perfectly in your phone browser. Native iOS and Android apps are planned for the future.'
                },
                {
                    q: 'Do I need internet to play?',
                    a: 'Yes, WordImposter is an online multiplayer game. All players need an internet connection to play together in real-time.'
                },
                {
                    q: 'The game is laggy or not loading. What should I do?',
                    a: 'Try these steps: 1) Refresh the page, 2) Clear your browser cache, 3) Try a different browser, 4) Check your internet connection. If problems persist, contact us!'
                }
            ]
        },
        {
            category: 'Gameplay Questions',
            icon: '🎮',
            faqs: [
                {
                    q: 'How do I create a game room?',
                    a: 'Click Create Room on the homepage. You will get a unique 4-digit code. Share this code with your friends so they can join your room.'
                },
                {
                    q: 'How do friends join my room?',
                    a: 'Friends click Join Room and enter the 4-digit code you shared. Each player picks a nickname, then everyone is ready to play!'
                },
                {
                    q: 'What is the Imposter?',
                    a: 'One player is randomly chosen as the Imposter each game. The Imposter does not see the secret word - only the category. They must blend in by giving clues without knowing the actual word!'
                },
                {
                    q: 'How do I give clues?',
                    a: 'Each player takes turns giving a ONE-WORD clue about the secret word. Clues should hint at the word without making it obvious. You cannot say the word itself or any variations of it.'
                },
                {
                    q: 'How do I win?',
                    a: 'As a Civilian: Help find and vote out the Imposter. As the Imposter: Survive the vote or correctly guess the secret word for a bonus win!'
                },
                {
                    q: 'Can we play multiple rounds?',
                    a: 'Yes! After each game ends, the host can start a new game with the same players. Play as many rounds as you want!'
                }
            ]
        },
        {
            category: 'Word Categories',
            icon: '📚',
            faqs: [
                {
                    q: 'What categories are available?',
                    a: 'We have many categories: Animals, Foods, Countries, Movies, TV Shows, Sports, Professions, Music, and more! New categories are added regularly.'
                },
                {
                    q: 'How many words are in the game?',
                    a: 'Our database contains hundreds of words across all categories. Each category has 20-30+ unique words, ensuring variety in every game.'
                },
                {
                    q: 'Can I suggest new words or categories?',
                    a: 'Absolutely! We love community input. Contact us with your suggestions and we will consider adding them in future updates.'
                }
            ]
        },
        {
            category: 'Privacy and Safety',
            icon: '🔒',
            faqs: [
                {
                    q: 'What data do you collect?',
                    a: 'We only store minimal data needed for gameplay: your chosen nickname and room code. No personal information, emails, or tracking data is collected.'
                },
                {
                    q: 'Is my game data saved?',
                    a: 'No, game data is temporary. Once a game ends, all data is deleted. We do not keep records of your games or statistics.'
                },
                {
                    q: 'Is the game safe for kids?',
                    a: 'Yes! WordImposter is family-friendly. All words are appropriate for all ages. However, we recommend parental supervision for younger children playing online.'
                }
            ]
        },
        {
            category: 'Troubleshooting',
            icon: '🔧',
            faqs: [
                {
                    q: 'Room code is not working. What do I do?',
                    a: 'Make sure you entered the correct 4-digit code. The room might have been closed - ask the host to create a new room. Also try refreshing your page.'
                },
                {
                    q: 'Game will not start. Why?',
                    a: 'You need at least 3 players to start. Make sure all players are in the room and the host clicks the Start button.'
                },
                {
                    q: 'I only see a category, not a word!',
                    a: 'That means you are the Imposter! As the Imposter, you only see the category and must figure out the word from other players clues.'
                },
                {
                    q: 'I got disconnected. Can I rejoin?',
                    a: 'Yes! Just enter the room code again with the same nickname. If the game already started, you might need to wait for the next round.'
                }
            ]
        }
    ];

    let globalIndex = 0;

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
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-300">
                        Everything you need to know about WordImposter
                    </p>
                </header>

                {/* FAQ Sections */}
                <div className="space-y-8">
                    {faqSections.map((section, sectionIndex) => (
                        <section 
                            key={sectionIndex}
                            className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6"
                        >
                            <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                <span>{section.icon}</span>
                                {section.category}
                            </h2>
                            <div className="space-y-3">
                                {section.faqs.map((faq, faqIndex) => {
                                    const currentIndex = globalIndex++;
                                    return (
                                        <div 
                                            key={faqIndex}
                                            className="bg-[#0a0a0f]/50 rounded-xl overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                                                className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-[#0a0a0f]/70 transition-colors"
                                            >
                                                <span className="font-semibold text-white">{faq.q}</span>
                                                <svg 
                                                    className={`w-5 h-5 text-purple-400 transition-transform shrink-0 ${openIndex === currentIndex ? 'rotate-180' : ''}`}
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {openIndex === currentIndex && (
                                                <div className="px-4 pb-4">
                                                    <p className="text-gray-400">{faq.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Still have questions? */}
                <section className="mt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-800/30 p-6 text-center">
                    <h2 className="text-xl font-bold text-white mb-2">Still have questions?</h2>
                    <p className="text-gray-400 mb-4">We are here to help! Reach out to us anytime.</p>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                    >
                        Contact Us
                    </Link>
                </section>

                {/* CTA */}
                <div className="text-center mt-8">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                    >
                        🎮 Start Playing Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
