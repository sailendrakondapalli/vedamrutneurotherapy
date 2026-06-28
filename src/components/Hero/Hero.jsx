import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';
import './Hero.css';

const waNumber = '918499011209';
const waMsg = encodeURIComponent(
  'Hello! I would like to book an appointment at Vedamrut Pain Management & Neurotherapy Treatment Centre.'
);

function StatCard({ end, suffix, label, started, decimals = 0 }) {
  const val = useCountUp(end, 2200, started, decimals);
  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val);
  return (
    <div className="stat-card">
      <div className="stat-value">{display}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img
          src="/images/APNQkAHIS4f03_iE6lhOm1aNUYsFUbwkoU3BwdL7VYvj1jqyAGSetog1GLLr64qnCob2XHasxKx_lOA9_iOleru5ytHXo0C8QnyUcqD-w8huuJwczfquf96HtkRU9uJJvIVjN7gqHEkhP42QWs3Pw1200-h1599-k-no.jpg.jpeg"
          alt="NT. Parmar Ashok Kumar — Vedamrut Neurotherapy"
          className="hero-bg-img"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content container" ref={ref}>
        <div className="hero-text">
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🏆 First Neurotherapy Centre in Tri-Cities — Warangal · Kazipet · Hanamkonda
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Relieve Pain <span className="hero-highlight">Naturally,</span><br />
            Live Life <span className="hero-highlight">Comfortably</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Non-Surgical &bull; Drug-Free &bull; Safe Neurotherapy Treatment
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.37 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.98C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.22 13.41 13.92 13.77 13.71 14C13.61 14.11 13.5 14.12 13.27 14.01C13.04 13.9 12.32 13.67 11.47 12.91C10.81 12.32 10.36 11.59 10.26 11.36C10.16 11.13 10.26 11.01 10.37 10.9C10.47 10.8 10.62 10.64 10.73 10.54C10.84 10.44 10.87 10.36 10.95 10.19C11.03 10.03 10.99 9.87 10.93 9.76C10.87 9.65 10.42 8.42 10.22 7.96C10.03 7.51 9.83 7.57 9.68 7.56C9.58 7.55 9.42 7.55 9.26 7.55C9.11 7.55 8.86 7.61 8.63 7.86L8.53 7.33Z" />
              </svg>
              Book Appointment
            </a>
            <a href="tel:8499011209" className="btn-hero-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Now
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          ref={ref}
        >
          <StatCard end={1000} suffix="+" label="Happy Patients" started={inView} />
          <StatCard end={98} suffix="%" label="Success Rate" started={inView} />
          <StatCard end={10} suffix="+" label="Years Experience" started={inView} />
          <StatCard end={24} suffix="/7" label="Support" started={inView} />
        </motion.div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,32 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
