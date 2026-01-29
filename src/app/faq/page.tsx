'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqSections = [
        {
            category: 'General Questions',
            icon: '&#10067;',
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
            icon: '&#9881;&#65039;',
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
            icon: '&#127918;',
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
            icon: '&#128218;',
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
            icon: '&#128274;',
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
            icon: '&#128295;',
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
                    a: 'That means you are the Imposter! As the Imposter, you only see the category and must figure out the word from other players\' clues.'
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
        <div className="content-page">
            <div className="content-wrapper">
                <Link href="/" className="content-back-btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Game
                </Link>

                <header className="content-header">
                    <h1 className="content-title">Frequently Asked Questions</h1>
                    <p className="content-subtitle">Everything you need to know about WordImposter</p>
                </header>

                {faqSections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="content-card">
                        <h2 className="content-card-title">
                            {section.category}
                        </h2>
                        {section.faqs.map((faq, faqIndex) => {
                            const currentIndex = globalIndex++;
                            return (
                                <div key={faqIndex} className="faq-item">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                                        className="faq-question"
                                    >
                                        <span>{faq.q}</span>
                                        <svg
                                            className={`faq-chevron ${openIndex === currentIndex ? 'open' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openIndex === currentIndex && (
                                        <div className="faq-answer">{faq.a}</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}

                {/* Still have questions? */}
                <div className="content-banner">
                    <div className="content-banner-title">Still have questions?</div>
                    <p className="content-banner-text">We are here to help! Reach out to us anytime.</p>
                    <Link href="/contact" className="content-banner-btn">
                        Contact Us
                    </Link>
                </div>

                {/* CTA */}
                <div className="content-cta">
                    <Link href="/" className="content-cta-btn">
                        Start Playing Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
