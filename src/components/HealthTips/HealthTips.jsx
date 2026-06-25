import './HealthTips.css';

const tips = [
  {
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80',
    category: 'Back Health',
    title: '5 Easy Exercises to Relieve Back Pain at Home',
    desc: 'Simple stretches and exercises you can do daily to strengthen your back muscles and reduce pain naturally.',
    readTime: '3 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
    category: 'Neck Health',
    title: 'Neck Exercise Routine for Office Workers',
    desc: 'Desk workers often suffer from neck stiffness. These targeted exercises help relieve neck tension and improve posture.',
    readTime: '4 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    category: 'Lifestyle',
    title: 'Healthy Habits for a Pain-Free Life',
    desc: 'Discover the lifestyle changes that can dramatically reduce chronic pain and improve your overall wellbeing.',
    readTime: '5 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    category: 'Natural Healing',
    title: 'How Natural Healing Outperforms Painkillers',
    desc: 'Learn why neurotherapy and natural healing methods provide long-term relief while painkillers only mask symptoms.',
    readTime: '6 min read',
  },
];

const HealthTips = () => {
  return (
    <section className="healthtips-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Health Tips</span>
          <h2 className="section-title">
            Latest <span className="highlight">Health Insights</span>
          </h2>
          <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            Expert-backed tips and advice to help you live a healthier, pain-free life.
          </p>
        </div>
        <div className="healthtips-grid">
          {tips.map((tip, i) => (
            <div key={i} className="healthtip-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="healthtip-img">
                <img src={tip.img} alt={tip.title} loading="lazy" />
                <span className="healthtip-category">{tip.category}</span>
              </div>
              <div className="healthtip-body">
                <h3 className="healthtip-title">{tip.title}</h3>
                <p className="healthtip-desc">{tip.desc}</p>
                <div className="healthtip-footer">
                  <span className="healthtip-time">⏱ {tip.readTime}</span>
                  <a href="#contact" className="healthtip-link">Read More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
