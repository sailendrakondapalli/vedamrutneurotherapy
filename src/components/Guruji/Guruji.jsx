import { useState } from 'react';
import './Guruji.css';

const stats = [
  { value: '5M+', label: 'Patients Treated' },
  { value: '3000+', label: 'Neurotherapists Trained' },
  { value: '2000+', label: 'LMNT Centers' },
  { value: '1932–2017', label: 'Life Span' },
];

const timeline = [
  { year: '1932', event: 'Born in Amritsar into a respected family.' },
  { year: '1943', event: 'Cured of chronic stomach ailment by traditional "navel setting" — sparked lifelong passion for drugless healing.' },
  { year: 'Post-Partition', event: 'Family migrated to Mumbai. Despite hardships, continued natural healing practice.' },
  { year: '1986', event: 'Established Bandra clinic. Formally began treating patients with LMNT techniques.' },
  { year: '1994', event: 'Founded Suryamal Ashram, Palghar — free weekly LMNT treatment for tribal communities. Conferred Doctor of Medicine (Colombo).' },
  { year: '1999', event: 'Founded Dr. Lajpatrai Mehra Neurotherapy Academy — residential training & research centre.' },
  { year: '2004', event: 'Conferred Doctor of Science (Mumbai) for path-breaking work in Complementary Medicine.' },
  { year: '2017', event: 'Passed away in October, leaving behind a legacy of 5 million healed, 3000+ trained therapists.' },
];

const Guruji = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <section id="guruji" className="guruji-section">
      <div className="guruji-bg-pattern" />

      <div className="container">
        {/* Section Header */}
        <div className="guruji-header" data-aos="fade-up">
          <span className="section-subtitle">Our Inspiration</span>
          <h2 className="section-title">
            About <span className="highlight">Guruji</span>
          </h2>
          <p className="section-desc" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            The visionary founder of LMNT — the man who revolutionized natural, drugless healing in India.
          </p>
        </div>

        {/* Main split layout */}
        <div className="guruji-grid">
          {/* Left — Image */}
          <div className="guruji-image-col" data-aos="fade-right">
            <div className="guruji-img-card">
              <img
                src="/images/guruji.png"
                alt="Late Dr. Lajpatrai Mehra — Founder of LMNT"
                loading="lazy"
              />
            </div>
            <div className="guruji-name-plate">
              <h3>Late Dr. Lajpatrai Mehra</h3>
              <p>N.D., M.D.(ASM)</p>
              <span>Founder of LMNT | 1932 – 2017</span>
            </div>
            {/* Stats */}
            <div className="guruji-stats">
              {stats.map((s, i) => (
                <div key={i} className="guruji-stat">
                  <strong>{s.value}</strong>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Content */}
          <div className="guruji-content-col" data-aos="fade-left">
            <div className="guruji-title-block">
              <h3>Late Dr. Lajpatrai Mehra (Guruji)</h3>
              <p className="guruji-subtitle-text">
                N.D., M.D.(ASM) &nbsp;|&nbsp; Founder of LMNT &nbsp;|&nbsp; Humanitarian &nbsp;|&nbsp; Innovator &nbsp;|&nbsp; Spiritual Scientist
              </p>
            </div>

            <p className="guruji-para">
              Guruji – Late Dr. Lajpatrai Mehra ji (1932–2017) was a self-made scientist, healer, and humanitarian
              whose visionary contribution to healthcare revolutionized natural and drugless healing in India.
              He was the Founder of Dr. Lajpatrai Mehra's Neurotherapy (LMNT) — a ground-breaking, medicine-free
              system of healing rooted in the wisdom of ancient Indian physiology and his own clinical innovations.
            </p>

            <div className="guruji-highlight-box">
              <span className="quote-mark">"</span>
              <p>Health is the birth right of every individual.</p>
              <span className="quote-author">— Late Dr. Lajpatrai Mehra (Guruji)</span>
            </div>

            {/* Early life */}
            <div className="guruji-sub-section">
              <h4>🌱 Early Inspiration</h4>
              <p>
                Born in Amritsar into a large, respected family, young Lajpatrai's life changed at the age of 11
                when he was miraculously cured of a chronic stomach ailment by an old woman (Daayi) using a
                traditional "navel setting" technique. That moment awakened in him a lifelong passion to help
                others without the use of medicines.
              </p>
            </div>

            <div className="guruji-sub-section">
              <h4>💪 From Adversity to Innovation</h4>
              <p>
                After losing everything during the Partition, his family migrated to Mumbai. Despite hardships,
                he continued to heal people using his growing understanding of natural body mechanics and
                pressure-based therapy. With just a 10th standard formal education, he earned a degree in
                Naturopathy and immersed himself in intensive self-study of human anatomy, physiology, and
                ancient Indian healing systems.
              </p>
            </div>

            <div className="guruji-sub-section">
              <h4>🏛️ Birth of LMNT</h4>
              <p>
                By 1986, he established his Bandra clinic and formally began treating patients with his unique
                techniques. Over decades of hands-on practice and study, he created LMNT — a holistic, drugless
                therapy aimed at restoring the body's biochemical and hormonal balance through carefully
                sequenced pressure stimulation. His treatments addressed the root causes of illness, not just
                symptoms, and were tailored to the patient's unique constitution and locality.
              </p>
            </div>

            {showFull && (
              <>
                {/* Global Impact */}
                <div className="guruji-sub-section">
                  <h4>🌍 Global Impact</h4>
                  <ul className="guruji-list">
                    <li>Treated over <strong>5 million patients</strong> across India and abroad (UK, Australia, Canada, Bulgaria, Serbia, Singapore, USA, Hong Kong, Italy, Nepal etc.)</li>
                    <li>Trained more than <strong>3000 neurotherapists</strong>, many of whom now run LMNT centers across <strong>2000+ locations</strong>.</li>
                    <li>Inspired self-employment and community service in youth through vocational training and healing service.</li>
                  </ul>
                </div>

                {/* Institution Builder */}
                <div className="guruji-sub-section">
                  <h4>🏫 Institution Builder &amp; Educator</h4>
                  <ul className="guruji-list">
                    <li>In 1994, established the <strong>Suryamal Ashram</strong> in Dist. Palghar (then Mokhada), offering free weekly LMNT treatment for tribals and the underserved.</li>
                    <li>In 1999, founded the <strong>Dr. Lajpatrai Mehra Neurotherapy Academy</strong>, a residential training and research centre, empowering students from across India and abroad.</li>
                    <li>Authored the <strong>LMNT Manual</strong>, translated into multiple languages, and initiated Annual National LMNT Conventions, case study publications, and research documentation.</li>
                  </ul>
                </div>

                {/* Humanitarian */}
                <div className="guruji-sub-section">
                  <h4>🏅 Humanitarian Service &amp; Recognition</h4>
                  <ul className="guruji-list">
                    <li>Donated and served actively during wartime and natural disasters.</li>
                    <li>Conferred <strong>Doctor of Medicine</strong> (Colombo, 1994) and <strong>Doctor of Science</strong> (Mumbai, 2004) for his path-breaking work in Complementary Medicine.</li>
                    <li>His work was recognized by Parliamentarians, Judges, Doctors, and Social Leaders across India.</li>
                  </ul>
                </div>

                {/* Mission */}
                <div className="guruji-sub-section">
                  <h4>🎯 Mission &amp; Philosophy</h4>
                  <p>
                    Guruji's mission was to ensure that one in every six villages in India had access to drugless
                    healing through LMNT. He believed in healing without medicines regardless of caste, creed, or
                    cost — spreading self-reliance through knowledge sharing and bridging tradition with science.
                    He worked tirelessly, often 16 hours a day, to fulfil this ideal until his last breath in
                    October 2017.
                  </p>
                </div>
              </>
            )}

            <button
              className="guruji-read-more"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? '↑ Show Less' : 'Read Full Biography →'}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="guruji-timeline-wrap" data-aos="fade-up">
          <h3 className="guruji-timeline-title">Journey of a Legend</h3>
          <div className="guruji-timeline">
            {timeline.map((t, i) => (
              <div key={i} className="guruji-tl-item" data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="guruji-tl-dot" />
                <div className="guruji-tl-card">
                  <span className="guruji-tl-year">{t.year}</span>
                  <p>{t.event}</p>
                </div>
              </div>
            ))}
            <div className="guruji-tl-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guruji;
