'use client';

export default function Testimonials() {
    const reviews = [
        { name: 'John D.', role: 'Teacher', text: 'Perfect for remote team activities. We play every Friday!' },
        { name: 'Emily R.', role: 'Student', text: 'My favorite party game! Simple but so fun. Love being the Imposter!' },
        { name: 'Michael S.', role: 'Developer', text: 'Great game to play with friends online. Works flawlessly!' },
        { name: 'Sarah A.', role: 'Designer', text: 'Beautiful design and works perfectly on mobile. Highly recommend!' },
    ];

    const stats = [
        { number: '10K+', label: 'Players' },
        { number: '50K+', label: 'Games' },
        { number: '12', label: 'Categories' },
        { number: '300+', label: 'Words' }
    ];

    return (
        <div className="testimonials-section">
            {/* Stats */}
            <div className="stats-card">
                <div className="stats-grid">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews */}
            <div className="reviews-card">
                <div className="reviews-header">
                    <span className="reviews-star-icon">&#9733;</span>
                    What Players Say
                </div>
                <div className="reviews-grid">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="review-item">
                            <div className="review-stars">
                                <span className="review-star">&#9733;</span>
                                <span className="review-star">&#9733;</span>
                                <span className="review-star">&#9733;</span>
                                <span className="review-star">&#9733;</span>
                                <span className="review-star">&#9733;</span>
                            </div>
                            <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                            <div className="review-author">
                                <span className="review-name">{review.name}</span>
                                <span className="review-role"> &middot; {review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
