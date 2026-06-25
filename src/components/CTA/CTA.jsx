import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  const waNumber = '918499011209';
  const waMsg = encodeURIComponent(
    'Hello! I would like to book an appointment at Vedamrut Pain Management & Neurotherapy Treatment Centre.'
  );

  return (
    <section className="cta-section">
      <div className="cta-bg">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80"
          alt="Start your healing journey"
          loading="lazy"
        />
        <div className="cta-overlay"></div>
      </div>

      <div className="container cta-content">
        <motion.div
          className="cta-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="cta-badge">🌿 Natural Healing Awaits</span>
          <h2 className="cta-title">
            Start Your Journey Towards a<br />
            <span className="cta-highlight">Pain-Free Life</span>
          </h2>
          <p className="cta-desc">
            Join 1500+ patients who have found lasting relief through our natural neurotherapy treatments.
            Book your consultation today — no surgery, no medicines, no side effects.
          </p>

          <div className="cta-buttons">
            <a
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-primary"
            >
              📲 Book Appointment on WhatsApp
            </a>
            <a href="tel:8499011209" className="cta-btn-secondary">
              📞 Call: 8499011209
            </a>
          </div>

          <div className="cta-features">
            {['Free Consultation', 'No Waiting', 'Experienced Therapist', 'Proven Results'].map((f, i) => (
              <span key={i} className="cta-feature-tag">✓ {f}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="cta-float-ring ring-1"></div>
      <div className="cta-float-ring ring-2"></div>
    </section>
  );
};

export default CTA;
