'use client';

import Link from 'next/link';

export default function StrategiesPage() {
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
                        Game Strategies
                    </h1>
                    <p className="text-xl text-gray-300">
                        Master WordImposter with these pro tips and tactics
                    </p>
                </header>

                {/* Civilian Strategies */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-green-400 mb-6">👥 Civilian Strategies</h2>
                    <p className="text-gray-400 mb-6">As a Civilian, your goal is to prove you know the word while catching the Imposter.</p>
                    
                    <div className="space-y-4">
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs font-semibold">BEGINNER</span>
                                <h3 className="font-bold text-white">Balance Your Clues</h3>
                            </div>
                            <p className="text-gray-400 mb-3">Do not be too obvious (Imposter will guess the word) or too vague (you will look suspicious).</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-sm text-gray-500">If the word is Lion:</p>
                                <p className="text-green-400">✓ Good: Safari, Mane, Pride</p>
                                <p className="text-red-400">✗ Bad: King (too obvious), Animal (too vague)</p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-xs font-semibold">INTERMEDIATE</span>
                                <h3 className="font-bold text-white">Watch Other Players</h3>
                            </div>
                            <p className="text-gray-400 mb-3">Pay attention to clues that do not fit well with others. The Imposter often gives generic or mismatched hints.</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-sm text-gray-500">Red flags to watch:</p>
                                <p className="text-gray-300">• Clues that could fit any word in the category</p>
                                <p className="text-gray-300">• Hesitation before giving a clue</p>
                                <p className="text-gray-300">• Clues that contradict others</p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs font-semibold">ADVANCED</span>
                                <h3 className="font-bold text-white">Set Traps</h3>
                            </div>
                            <p className="text-gray-400 mb-3">Give a slightly misleading clue to see if the Imposter copies your style without truly understanding.</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-sm text-gray-500">Pro tip:</p>
                                <p className="text-gray-300">If everyone says animal features but one person says a random adjective, they might be guessing blindly!</p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-xs font-semibold">INTERMEDIATE</span>
                                <h3 className="font-bold text-white">Be Active in Discussion</h3>
                            </div>
                            <p className="text-gray-400 mb-3">Staying silent makes you look suspicious. Share your analysis and ask questions!</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-gray-300">Sarah, your clue was interesting - why did you choose that?</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Imposter Strategies */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-red-400 mb-6">🕵️ Imposter Strategies</h2>
                    <p className="text-gray-400 mb-6">As the Imposter, blend in with the Civilians and figure out the secret word from their clues.</p>
                    
                    <div className="space-y-4">
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs font-semibold">BEGINNER</span>
                                <h3 className="font-bold text-white">Listen Carefully First</h3>
                            </div>
                            <p className="text-gray-400 mb-3">The first few clues are gold! Look for patterns and common themes to guess the word.</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-sm text-gray-500">Example:</p>
                                <p className="text-gray-300">Clues: Cold, Black, Waddle → Category: Animals → Probably Penguin!</p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs font-semibold">BEGINNER</span>
                                <h3 className="font-bold text-white">Give Safe, Broad Clues</h3>
                            </div>
                            <p className="text-gray-400 mb-3">Use clues that could apply to multiple things in the category.</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-sm text-gray-500">Category Animals - safe clues:</p>
                                <p className="text-green-400">✓ Wild, Nature, Beautiful, Fast</p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-xs font-semibold">INTERMEDIATE</span>
                                <h3 className="font-bold text-white">Deflect Suspicion</h3>
                            </div>
                            <p className="text-gray-400 mb-3">If someone suspects you, calmly redirect attention to another player without being aggressive.</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-gray-300">My clue makes sense because... But actually, did anyone notice Mike clue was pretty vague too?</p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs font-semibold">ADVANCED</span>
                                <h3 className="font-bold text-white">Guess the Word for Bonus Win</h3>
                            </div>
                            <p className="text-gray-400 mb-3">If you figure out the word from clues, you can guess it at the end for an instant win!</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-sm text-gray-500">High risk, high reward!</p>
                                <p className="text-gray-300">Even if you are caught, a correct guess means you still win.</p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-xs font-semibold">INTERMEDIATE</span>
                                <h3 className="font-bold text-white">Act Confident</h3>
                            </div>
                            <p className="text-gray-400 mb-3">Do not hesitate or look nervous. Give your clue confidently like you know exactly what you are doing.</p>
                            <div className="bg-[#0a0a0f] rounded-lg p-3">
                                <p className="text-gray-300">Body language matters in video calls too! Stay calm and composed.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Tactics */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6">🎯 Advanced Tactics</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <h3 className="font-bold text-white mb-2">🧠 Read Player Patterns</h3>
                            <p className="text-gray-400 text-sm">
                                Learn how your friends play. Some people always give obvious clues, others are cryptic. 
                                Notice when someone breaks their pattern!
                            </p>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <h3 className="font-bold text-white mb-2">🎭 Psychology Matters</h3>
                            <p className="text-gray-400 text-sm">
                                Watch for nervousness, over-explaining, or sudden silence. 
                                People often give themselves away through behavior, not just words.
                            </p>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <h3 className="font-bold text-white mb-2">📊 Think Statistically</h3>
                            <p className="text-gray-400 text-sm">
                                With 5 players, there is a 20% chance anyone is the Imposter. 
                                Do not vote randomly - base decisions on evidence!
                            </p>
                        </div>

                        <div className="bg-[#0a0a0f]/50 rounded-xl p-5">
                            <h3 className="font-bold text-white mb-2">🤝 Build Alliances</h3>
                            <p className="text-gray-400 text-sm">
                                Players with complementary clues are likely both Civilians. 
                                Work together to analyze the odd one out!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Common Mistakes */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-orange-400 mb-6">⚠️ Common Mistakes to Avoid</h2>
                    
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-900/30 rounded-lg">
                            <span className="text-red-400">✗</span>
                            <div>
                                <p className="text-white font-semibold">Giving too obvious clues</p>
                                <p className="text-gray-400 text-sm">The Imposter will figure out the word instantly</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-900/30 rounded-lg">
                            <span className="text-red-400">✗</span>
                            <div>
                                <p className="text-white font-semibold">Being too defensive when accused</p>
                                <p className="text-gray-400 text-sm">This makes you look more guilty, even if you are innocent</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-900/30 rounded-lg">
                            <span className="text-red-400">✗</span>
                            <div>
                                <p className="text-white font-semibold">Voting randomly in the first round</p>
                                <p className="text-gray-400 text-sm">You might eliminate an innocent Civilian and help the Imposter win</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-900/30 rounded-lg">
                            <span className="text-red-400">✗</span>
                            <div>
                                <p className="text-white font-semibold">Staying completely silent</p>
                                <p className="text-gray-400 text-sm">Silence looks suspicious - participate in discussions!</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-900/30 rounded-lg">
                            <span className="text-red-400">✗</span>
                            <div>
                                <p className="text-white font-semibold">Accidentally saying the word</p>
                                <p className="text-gray-400 text-sm">This ruins the game for everyone - think before you speak!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                    >
                        🎮 Try These Strategies Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
