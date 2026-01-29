'use client';

export default function Testimonials() {
    const reviews = [
        { name: 'John D.', role: 'Teacher', text: 'Perfect for remote team activities. We play every Friday!', rating: 5 },
        { name: 'Emily R.', role: 'Student', text: 'My favorite party game! Simple but so fun. Love being the Imposter 😄', rating: 5 },
        { name: 'Michael S.', role: 'Developer', text: 'Great game to play with friends online. Works flawlessly!', rating: 5 },
        { name: 'Sarah A.', role: 'Designer', text: 'Beautiful design and works perfectly on mobile. Highly recommend!', rating: 5 },
    ];

    const stats = [
        { number: '10K+', label: 'Players' },
        { number: '50K+', label: 'Games' },
        { number: '12', label: 'Categories' },
        { number: '300+', label: 'Words' }
    ];

    return (
        <div className="space-y-8 py-8">
            {/* Stats Row */}
            <div className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
                <div className="grid grid-cols-4 gap-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                {stat.number}
                            </div>
                            <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Card */}
            <div className="bg-[#12121a]/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 px-6 py-3 border-b border-gray-800/50">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <span className="text-yellow-400">★</span>
                        What Players Say
                    </h3>
                </div>
                <div className="p-4">
                    <div className="grid md:grid-cols-2 gap-3">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-[#0a0a0f]/60 rounded-xl p-4 border border-gray-800/30">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xs">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-300 text-sm mb-3 italic">"{review.text}"</p>
                                <div className="text-xs">
                                    <span className="text-white font-medium">{review.name}</span>
                                    <span className="text-gray-500"> · {review.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
