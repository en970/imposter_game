'use client';

import Link from 'next/link';

export default function HowToPlayPage() {
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
                        How to Play
                    </h1>
                    <p className="text-xl text-gray-300">
                        Complete guide to playing WordImposter
                    </p>
                </header>

                {/* Introduction Card */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">🎮 What is WordImposter?</h2>
                    <p className="text-gray-300 leading-relaxed">
                        WordImposter is an exciting social deduction party game combining word guessing with hidden roles. 
                        Play with 3-10 friends and find the Imposter among you! The Imposter does not know the secret word 
                        that everyone else sees - they only know the category. Can you catch them before they blend in?
                    </p>
                </section>

                {/* Game Setup */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6">⚙️ Game Setup</h2>
                    <div className="grid gap-4">
                        <div className="flex gap-4 items-start p-4 bg-[#0a0a0f]/50 rounded-xl">
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg shrink-0">1</div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Create a Room</h3>
                                <p className="text-gray-400 text-sm">Click Create Room to get a unique 4-digit code. Share this with friends!</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-4 bg-[#0a0a0f]/50 rounded-xl">
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg shrink-0">2</div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Invite Players</h3>
                                <p className="text-gray-400 text-sm">Friends join by entering the room code. Each player picks a nickname. 3-10 players needed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-4 bg-[#0a0a0f]/50 rounded-xl">
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg shrink-0">3</div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Choose Category</h3>
                                <p className="text-gray-400 text-sm">Room host selects a word category: Animals, Movies, Countries, Foods, and many more!</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-4 bg-[#0a0a0f]/50 rounded-xl">
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg shrink-0">4</div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Start the Game</h3>
                                <p className="text-gray-400 text-sm">Once everyone is ready, the host starts the game and roles are assigned!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gameplay Phases */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6">🎯 Gameplay Phases</h2>
                    
                    <div className="space-y-6">
                        <div className="border-l-4 border-purple-500 pl-4">
                            <h3 className="text-xl font-semibold text-white mb-2">Phase 1: Role Assignment</h3>
                            <p className="text-gray-400 mb-3">When the game starts, everyone receives a secret card:</p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    <span><strong>Civilians:</strong> See the secret word (e.g., Lion)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-400">✗</span>
                                    <span><strong>Imposter:</strong> Only sees the category (e.g., Animals)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-pink-500 pl-4">
                            <h3 className="text-xl font-semibold text-white mb-2">Phase 2: Clue Round</h3>
                            <p className="text-gray-400 mb-3">Each player gives a ONE-WORD clue about the secret word:</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Civilians prove they know the word (but not too obviously!)</li>
                                <li>• Imposter tries to blend in by giving generic clues</li>
                                <li>• You CANNOT say the word or any derivatives</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-white mb-2">Phase 3: Discussion</h3>
                            <p className="text-gray-400 mb-3">After all clues are given:</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Analyze everyones clues</li>
                                <li>• Question suspicious players</li>
                                <li>• Debate who might be the Imposter</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-white mb-2">Phase 4: Voting</h3>
                            <p className="text-gray-400 mb-3">Everyone votes for who they think is the Imposter:</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Player with most votes is revealed</li>
                                <li>• If correct → <span className="text-green-400 font-semibold">Civilians WIN!</span></li>
                                <li>• If wrong → <span className="text-red-400 font-semibold">Imposter WINS!</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Winning Conditions */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6">🏆 Winning Conditions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-5">
                            <h3 className="text-xl font-bold text-green-400 mb-3">👥 Civilians Win</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>✓ Vote out the Imposter correctly</li>
                                <li>✓ Catch the Imposter giving suspicious clues</li>
                            </ul>
                        </div>
                        <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-5">
                            <h3 className="text-xl font-bold text-red-400 mb-3">🕵️ Imposter Wins</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>✓ An innocent Civilian gets voted out</li>
                                <li>✓ Correctly guess the secret word (bonus!)</li>
                                <li>✓ Stay hidden until the end</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Important Rules */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6">📋 Important Rules</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-3 bg-[#0a0a0f]/50 rounded-lg">
                            <span className="text-2xl">🔒</span>
                            <p className="text-gray-300">Keep your screen private - do not show your role!</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#0a0a0f]/50 rounded-lg">
                            <span className="text-2xl">☝️</span>
                            <p className="text-gray-300">Clues must be ONE word only</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#0a0a0f]/50 rounded-lg">
                            <span className="text-2xl">🚫</span>
                            <p className="text-gray-300">Never say the secret word or derivatives</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#0a0a0f]/50 rounded-lg">
                            <span className="text-2xl">🎭</span>
                            <p className="text-gray-300">Lying during discussion is allowed!</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#0a0a0f]/50 rounded-lg">
                            <span className="text-2xl">👀</span>
                            <p className="text-gray-300">Do not peek at other players screens</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-[#0a0a0f]/50 rounded-lg">
                            <span className="text-2xl">😊</span>
                            <p className="text-gray-300">Be respectful and have fun!</p>
                        </div>
                    </div>
                </section>

                {/* Example Round */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6">📝 Example Round</h2>
                    <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                        <p className="text-gray-400 mb-4">
                            <strong className="text-white">Category:</strong> Animals | <strong className="text-white">Secret Word:</strong> Penguin | <strong className="text-white">Players:</strong> 5
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="bg-green-600 px-2 py-1 rounded text-xs">CIVILIAN</span>
                                <span className="font-semibold">Alex:</span>
                                <span className="text-gray-400">Cold</span>
                                <span className="text-gray-500 text-sm">- Good clue!</span>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="bg-red-600 px-2 py-1 rounded text-xs">IMPOSTER</span>
                                <span className="font-semibold">Jordan:</span>
                                <span className="text-gray-400">Cute</span>
                                <span className="text-gray-500 text-sm">- Too generic...</span>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="bg-green-600 px-2 py-1 rounded text-xs">CIVILIAN</span>
                                <span className="font-semibold">Sam:</span>
                                <span className="text-gray-400">Antarctica</span>
                                <span className="text-gray-500 text-sm">- Perfect!</span>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="bg-green-600 px-2 py-1 rounded text-xs">CIVILIAN</span>
                                <span className="font-semibold">Taylor:</span>
                                <span className="text-gray-400">Tuxedo</span>
                                <span className="text-gray-500 text-sm">- Creative!</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className="text-green-400 font-semibold">
                                🎉 Jordans clue was too vague. Players voted correctly - CIVILIANS WIN!
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                    >
                        🎮 Play Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
