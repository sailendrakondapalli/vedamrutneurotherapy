import { useRef, useEffect } from 'react';
import './Achievements.css';

const achievements = [
  { icon: '🏆', title: 'Best Neurotherapy Award', desc: 'Recognized as the best neurotherapy centre in Warangal district.' },
  { icon: '🎓', title: 'Certified Therapist', desc: 'NT. Parmar Ashok Kumar is nationally certified in neurotherapy.' },
  { icon: '❤️', title: 'Trusted by 1500+ Patients', desc: 'Over a decade of building trust through results-driven treatment.' },
  { icon: '📚', title: 'Professional Training', desc: 'Continuous learning with advanced neurotherapy methods and techniques.' },
  { icon: '🌿', title: 'Natural Healing Expert', desc: 'Pioneering drug-free, surgery-free neurotherapy in Telangana.' },
  { icon: '🤝', title: 'Community Service', desc: 'Dedicated to making quality neurotherapy accessible for all.' },
  { icon: '⭐', title: '4.9 Star Rating', desc: 'Consistently top-rated by patients across all platforms.' },
  { icon: '🔬', title: 'Research & Innovation', desc: 'Continuously advancing neurotherapy techniques and practices.' },
];

const Achievements = () => {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.5;

    const animate = () => {
      posRef.current -= speed;
      // Reset when first half scrolled through (seamless loop)
      const half = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= half) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animRef.current);
    const resume = () => { animRef.current = requestAnimationFrame(animate); };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animRef.current);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, []);

  // Duplicate cards for seamless loop
  const doubled = [...achievements, ...achievements];

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title">
            Our <span className="highlight">Recognition</span>
          </h2>
        </div>
      </div>

      {/* Full-width carousel — no container constraint */}
      <div className="achievements-carousel-wrap">
        <div className="achievements-track" ref={trackRef}>
          {doubled.map((a, i) => (
            <div key={i} className="achievement-card">
              <div className="achievement-icon">{a.icon}</div>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
