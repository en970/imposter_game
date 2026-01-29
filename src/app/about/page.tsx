'use client';

import Link from 'next/link';

export default function AboutPage() {
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
                        About WordImposter
                    </h1>
                    <p className="text-xl text-gray-300">
                        The ultimate social deduction party game
                    </p>
                </header>

                {/* Introduction */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">🎮 What is WordImposter?</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        WordImposter is a free online social deduction game where players try to find the hidden Imposter 
                        among them. It combines word guessing mechanics with hidden roles, creating an exciting and 
                        strategic party game experience.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Perfect for game nights, team building events, virtual hangouts, or whenever you want to have 
                        fun with friends and family. Play with 3-10 players, no downloads or accounts required!
                    </p>
                </section>

                {/* Mission */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">🎯 Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We believe great games should be accessible to everyone. Our mission is to provide a fun, 
                        engaging, and completely free gaming experience that brings people together. Whether you are 
                        connecting with friends across the world or having a local game night, WordImposter makes 
                        it easy to create memorable moments.
                    </p>
                </section>

                {/* Features */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6">✨ Why Choose WordImposter?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <div className="text-3xl mb-2">🆓</div>
                            <h3 className="font-bold text-white mb-1">100% Free</h3>
                            <p className="text-gray-400 text-sm">No hidden fees, no premium features, no pay-to-win. Just pure fun for everyone.</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <div className="text-3xl mb-2">⚡</div>
                            <h3 className="font-bold text-white mb-1">Instant Play</h3>
                            <p className="text-gray-400 text-sm">No downloads, no accounts. Create a room, share the code, and play immediately.</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <div className="text-3xl mb-2">📱</div>
                            <h3 className="font-bold text-white mb-1">Play Anywhere</h3>
                            <p className="text-gray-400 text-sm">Works on any device - phones, tablets, laptops, desktops. Just need a browser!</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <div className="text-3xl mb-2">👥</div>
                            <h3 className="font-bold text-white mb-1">3-10 Players</h3>
                            <p className="text-gray-400 text-sm">Perfect for small groups or larger parties. More players = more chaos!</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <div className="text-3xl mb-2">🌍</div>
                            <h3 className="font-bold text-white mb-1">Multi-Language</h3>
                            <p className="text-gray-400 text-sm">Available in English and Turkish. More languages coming soon!</p>
                        </div>
                        <div className="bg-[#0a0a0f]/50 rounded-xl p-4">
                            <div className="text-3xl mb-2">📚</div>
                            <h3 className="font-bold text-white mb-1">Lots of Categories</h3>
                            <p className="text-gray-400 text-sm">Animals, movies, countries, foods, and many more categories to choose from!</p>
                        </div>
                    </div>
                </section>

                {/* Technology */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">🛠️ Built with Modern Technology</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        WordImposter is built using cutting-edge web technologies to ensure a smooth, fast, and 
                        reliable gaming experience:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Next.js</span>
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">TypeScript</span>
                        <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">Firebase</span>
                        <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">Tailwind CSS</span>
                    </div>
                </section>

                {/* Privacy */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">🔒 Your Privacy Matters</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We take your privacy seriously. WordImposter only collects the minimal data needed for 
                        gameplay (your chosen nickname and room code). We do not track you, sell your data, or 
                        require any personal information. Game data is deleted after each session. Read our full 
                        privacy policy for more details.
                    </p>
                </section>

                {/* Developer */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">👨‍💻 Meet the Developer</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        WordImposter is developed by <strong className="text-white">Enes Oz</strong>, an independent 
                        developer passionate about creating fun, accessible games. Inspired by classic social 
                        deduction games, WordImposter was created to bring friends together through the joy of gaming.
                    </p>
                    <p className="text-gray-400">
                        📧 Contact: <a href="mailto:oze05607@gmail.com" className="text-purple-400 hover:underline">oze05607@gmail.com</a>
                    </p>
                </section>

                {/* Future Plans */}
                <section className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 mb-8">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">🚀 Future Plans</h2>
                    <p className="text-gray-300 mb-4">We are always working to make WordImposter better. Here is what is coming:</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="text-purple-400">•</span>
                            More languages (German, French, Spanish, and more)
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="text-purple-400">•</span>
                            Custom word lists - create your own categories
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="text-purple-400">•</span>
                            Game statistics and leaderboards
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="text-purple-400">•</span>
                            Voice chat integration
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="text-purple-400">•</span>
                            New game modes and variations
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="text-purple-400">•</span>
                            Native mobile apps for iOS and Android
                        </li>
                    </ul>
                </section>

                {/* Thank You */}
                <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-800/30 p-6 text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">🙏 Thank You!</h2>
                    <p className="text-gray-300">
                        Thank you for playing WordImposter! Your support and feedback help us make the game better. 
                        Have fun and happy gaming!
                    </p>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                    >
                        🎮 Play WordImposter Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
