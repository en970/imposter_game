'use client';

export default function SEOContent() {
    return (
        <section className="mt-16 px-4 md:px-8 pb-16">
            <div className="max-w-5xl mx-auto">
                {/* Main Info Card */}
                <div className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 px-6 py-4 border-b border-gray-800/50">
                        <h2 className="text-xl font-bold text-white flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                <span className="text-purple-400">?</span>
                            </span>
                            What is WordImposter?
                        </h2>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            WordImposter is a fun and exciting online social deduction game you can play with friends. 
                            Give clues to prove you know the secret word, but be careful — one player is the Imposter 
                            who doesn't know the word and is trying to blend in!
                        </p>

                        {/* How to Play Grid */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-[#0a0a0f]/60 rounded-xl p-4 border border-gray-800/30">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">1</span>
                                    <h4 className="text-white font-semibold text-sm">Create or Join a Room</h4>
                                </div>
                                <p className="text-gray-400 text-sm pl-9">Get a room code and invite 3-10 friends to play together online.</p>
                            </div>
                            
                            <div className="bg-[#0a0a0f]/60 rounded-xl p-4 border border-gray-800/30">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">2</span>
                                    <h4 className="text-white font-semibold text-sm">Get Your Role</h4>
                                </div>
                                <p className="text-gray-400 text-sm pl-9">Everyone sees a secret word except the Imposter, who only sees the category.</p>
                            </div>
                            
                            <div className="bg-[#0a0a0f]/60 rounded-xl p-4 border border-gray-800/30">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold">3</span>
                                    <h4 className="text-white font-semibold text-sm">Give One-Word Clues</h4>
                                </div>
                                <p className="text-gray-400 text-sm pl-9">Take turns giving clues. Civilians prove they know the word; the Imposter tries to blend in.</p>
                            </div>
                            
                            <div className="bg-[#0a0a0f]/60 rounded-xl p-4 border border-gray-800/30">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold">4</span>
                                    <h4 className="text-white font-semibold text-sm">Vote & Win</h4>
                                </div>
                                <p className="text-gray-400 text-sm pl-9">Discuss and vote out the Imposter. Civilians win if they catch them!</p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20">Free to Play</span>
                            <span className="px-3 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-full border border-pink-500/20">No Download</span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20">3-10 Players</span>
                            <span className="px-3 py-1 bg-green-500/10 text-green-300 text-xs rounded-full border border-green-500/20">Mobile Friendly</span>
                            <span className="px-3 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded-full border border-yellow-500/20">12+ Categories</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
