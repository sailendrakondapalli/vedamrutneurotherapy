import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';
import './Stats.css';

const statsData = [
  { end: 1500, suffix: '+', label: 'Happy Patients', icon: '😊', light: false },
  { end: 5000, suffix: '+', label: 'Successful Treatments', icon: '💆', light: false },
  { end: 98, suffix: '%', label: 'Recovery Rate', icon: '📈', light: false },
  { end: 4.9, suffix: '★', label: 'Positive Reviews', icon: '⭐', light: true, decimals: 1 },
  { end: 10, suffix: '+', label: 'Years Experience', icon: '🏆', light: false },
];

function StatItem({ stat, started }) {
  const val = useCountUp(stat.end, 2400, started, stat.decimals || 0);
  const display = (stat.decimals || 0) > 0 ? val.toFixed(stat.decimals) : Math.round(val);
  return (
    <div className="stats-card" data-aos="zoom-in">
      <div className="stats-icon">{stat.icon}</div>
      <div className="stats-value" style={{ color: stat.light ? '#fbbf24' : '#6ee7b7' }}>
        {display}{stat.suffix}
      </div>
      <div className="stats-label">{stat.label}</div>
    </div>
  );
}

const Stats = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg">
        <img
          src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&q=80"
          alt="Medical background"
          loading="lazy"
        />
        <div className="stats-overlay"></div>
      </div>

      <div className="container stats-inner">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle" style={{ color: '#6ee7b7' }}>Client Satisfaction</span>
          <h2 className="section-title" style={{ color: 'white' }}>
            Our <span style={{ color: '#6ee7b7' }}>Numbers Speak</span>
          </h2>
        </div>

        <div className="stats-grid">
          {statsData.map((s, i) => (
            <StatItem key={i} stat={s} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
