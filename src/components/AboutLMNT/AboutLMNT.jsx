import { useState } from 'react';
import './AboutLMNT.css';

const principles = [
  {
    icon: '🛡️',
    title: 'Boosts Immunity',
    desc: 'Stimulates immune-related organs (thymus, lymph nodes) to help the body fight infections naturally.',
  },
  {
    icon: '✅',
    title: 'Zero Side Effects',
    desc: 'Nothing foreign is introduced to the body. Can also detoxify and reverse side effects of medicines.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Suitable for All Ages',
    desc: 'From newborns to elderly. For infants, the therapist uses palms instead of feet.',
  },
  {
    icon: '🧬',
    title: 'Physiologically Sound',
    desc: 'Based on modern anatomy & physiology — stimulates glands and organs to produce natural chemicals.',
  },
  {
    icon: '🩺',
    title: 'Non-Invasive',
    desc: 'No medicines, oils, injections, or surgical tools. Only precise hand or foot pressure techniques.',
  },
  {
    icon: '🌿',
    title: 'Treats Root Cause',
    desc: 'Restores natural blood flow, lymphatic circulation and nervous communication — not just symptoms.',
  },
];

const conditions = [
  { icon: '🦋', title: 'Hypothyroidism', desc: 'Restores digestive function to normalize thyroid hormone production naturally.' },
  { icon: '🦴', title: 'Osteoporosis', desc: 'Improves intestinal function to enhance calcium uptake without supplements.' },
  { icon: '💎', title: 'Kidney Stones / Spurs', desc: 'Stimulates parathyroid glands to regulate excess calcium deposition.' },
  { icon: '❤️', title: 'Cardiac & Stroke Recovery', desc: 'Activates liver and lungs to produce natural heparin and dissolve clots.' },
  { icon: '🧠', title: 'Neurological Disorders', desc: 'Parkinson\'s, MS, MND, Muscular Dystrophy, Guillain–Barré Syndrome.' },
  { icon: '🩸', title: 'Digestive Disorders', desc: 'Constipation, acidity, bloating, ulcers — quick relief without medicines.' },
  { icon: '👩', title: 'Women\'s Health', desc: 'Menstrual disorders, fibroids, cysts, hormonal imbalances treated naturally.' },
  { icon: '🫀', title: 'Cholesterol & Liver', desc: 'Improves liver performance to regulate cholesterol and detoxification.' },
];

const summaryPoints = [
  'Drugless — no medicines, no side effects',
  'Non-invasive — no surgery, no injections',
  'Physiologically sound — based on modern science',
  'Clinically effective across thousands of cases',
  'Suitable for all age groups including newborns',
  'Treats root cause, not just symptoms',
];

const IMAGES = [
  '/images/APNQkAEsNsnwFmaq6pVEuhg2BCMn7u13w52BSgMc9blmG4av-ioqMM6O7Do7tJAvnGTQZxguSw3-9-JdXd7aHyhS2NSkGWobIeMj-cjzpGVZPStl4aUL8_ZpcaIzjysTTRBkNUcK_H3OxOzozLTw2048-h1365-k-no.jpg.jpeg',
  '/images/APNQkAGLCjhTXwz1LQ5AD6pRQubZFvIeVOnzTq3KhhnjMC8YFVhDO4D1ASmqQd0HPPW-1y2iD9BcO2Hs-6xdj3ZOEYTxTyW5hFQioRL_ut8z-9xrg6bZc74Y9XIplVeSKrHKJ6RmZA385vyiH5G6w1600-h1200-k-no.jpg.jpeg',
  '/images/APNQkAEDHw-6LOLZb33DXVvTX_k09UhdGTlFR9MYxm1w27L-5KsadUSyva-0twQ7EsFulS4xSumlxEmAOQe5DcmG132WrQDz4PGAdQOd6y7EpM_iqzqnpS_Y_qDKmHVSLItgiq5PgdJ3aHn7pCPjw1920-h1080-k-no.jpg.jpeg',
];

const AboutLMNT = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'What is LMNT?', icon: '🔬' },
    { label: 'Core Principle', icon: '⚡' },
    { label: 'Conditions Treated', icon: '🩺' },
    { label: 'Scientific Basis', icon: '🧬' },
  ];

  return (
    <section id="about-lmnt" className="lmnt-section">
      <div className="lmnt-bg-pattern" />

      <div className="container">
        {/* Header */}
        <div className="lmnt-header" data-aos="fade-up">
          <span className="section-subtitle">About LMNT</span>
          <h2 className="section-title">
            What Exactly is <span className="highlight">LMNT?</span>
          </h2>
          <p className="section-desc" style={{ margin: '14px auto 0', textAlign: 'center' }}>
            Lajpatrai Mehra Neurotherapy — An Ancient Science Empowered by Modern Physiology
          </p>
          <div className="lmnt-tricities-badge">
            🏆 First Neurotherapy Centre in Tri-Cities &nbsp;·&nbsp; Warangal &nbsp;·&nbsp; Kazipet &nbsp;·&nbsp; Hanamkonda
          </div>
        </div>

        {/* Intro split */}
        <div className="lmnt-intro-grid" data-aos="fade-up">
          <div className="lmnt-intro-text">
            <p className="lmnt-intro-para">
              <strong>Lajpatrai Mehra Neurotherapy (LMNT)</strong> is a unique and holistic Indian system of
              health restoration, discovered by Dr. Lajpatrai Mehra of Mumbai. This non-invasive, drugless
              approach combines ancient healing wisdom with principles from modern medical science —
              particularly physiology and anatomy.
            </p>
            <p className="lmnt-intro-para">
              It requires <strong>no medicines, oils, injections, or surgical tools</strong>. Instead, LMNT
              involves applying precise, calculated pressure on specific points of the body using the
              therapist's feet or hands, depending on the patient's age and condition. This technique is
              completely distinct from acupressure or acupuncture.
            </p>
            <div className="lmnt-summary">
              {summaryPoints.map((pt, i) => (
                <div key={i} className="lmnt-summary-item">
                  <span className="lmnt-check">✓</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lmnt-intro-images">
            {IMAGES.map((img, i) => (
              <div key={i} className={`lmnt-img-card lmnt-img-${i}`} data-aos="zoom-in" data-aos-delay={i * 80}>
                <img src={img} alt={`LMNT therapy ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="lmnt-tabs-wrap" data-aos="fade-up">
          <div className="lmnt-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`lmnt-tab${activeTab === i ? ' active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <span>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          <div className="lmnt-tab-content">
            {/* Tab 0 — What is LMNT */}
            {activeTab === 0 && (
              <div className="lmnt-tab-panel" data-aos="fade-up">
                <div className="lmnt-principles-grid">
                  {principles.map((p, i) => (
                    <div key={i} className="lmnt-principle-card">
                      <div className="lmnt-principle-icon">{p.icon}</div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 1 — Core Principle */}
            {activeTab === 1 && (
              <div className="lmnt-tab-panel" data-aos="fade-up">
                <div className="lmnt-core-grid">
                  <div className="lmnt-core-text">
                    <h3>The Core Principle of Neurotherapy</h3>
                    <p>
                      The human body is capable of producing all the chemicals it needs to maintain
                      health — such as hormones, enzymes, and neurotransmitters. But due to lifestyle
                      issues like poor diet, stress, pollution, incorrect posture, or emotional trauma,
                      this natural balance is disrupted. Organs or glands may start overproducing or
                      underproducing, leading to disease.
                    </p>
                    <p>
                      LMNT works by <strong>restoring the natural blood flow, lymphatic circulation,
                      and nervous communication</strong> to under-functioning glands or organs, thus
                      stimulating the body's own ability to heal.
                    </p>
                    <div className="lmnt-heparin-box">
                      <h4>🩸 Heparin Production &amp; Clot Management</h4>
                      <p>
                        The body produces heparin — an anticoagulant — in the liver and lungs. If the
                        body fails to do this, dangerous clots may form, leading to heart attacks,
                        paralysis, or strokes. LMNT protocols activate the liver, pancreas, and lungs,
                        encouraging the body to produce natural heparin and dissolve existing clots —
                        without medications or surgery. This has shown remarkable success in cardiac
                        and post-stroke recovery.
                      </p>
                    </div>
                  </div>
                  <div className="lmnt-core-visual">
                    <img
                      src="/images/APNQkAF24hZ-tw7runG2ZRht-Jd0oDqJmi42HnoEz0hJRXiooqjfWK_8qIT76XUTAnO2gYGY79ESkgixd-YE_cfx88uTc5MYaVJmH0pcYqTGBEBMdWogHBiH3hvxbjcABoDJShsfZyOAgHf-dO4w1214-h1600-k-no.jpg.jpeg"
                      alt="LMNT core healing"
                      loading="lazy"
                    />
                    <div className="lmnt-core-badges">
                      {['Blood Flow', 'Lymphatic Circulation', 'Nerve Communication', 'Hormonal Balance'].map((b, i) => (
                        <span key={i} className="lmnt-core-badge">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 — Conditions */}
            {activeTab === 2 && (
              <div className="lmnt-tab-panel" data-aos="fade-up">
                <p className="lmnt-tab-intro">
                  LMNT has shown promising results in managing a wide range of disorders — from common
                  chronic conditions to complex cases once thought untreatable.
                </p>
                <div className="lmnt-conditions-grid">
                  {conditions.map((c, i) => (
                    <div key={i} className="lmnt-condition-card">
                      <span className="lmnt-cond-icon">{c.icon}</span>
                      <div>
                        <h4>{c.title}</h4>
                        <p>{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="lmnt-advanced-box">
                  <h4>🌟 Hope in Advanced Conditions</h4>
                  <p>
                    LMNT has shown documented improvements in patients with AIDS, Cancer, and Autoimmune
                    conditions — by strengthening the immune system, detox pathways, and metabolic balance,
                    enhancing patient resilience and quality of life even in advanced stages.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3 — Scientific Basis */}
            {activeTab === 3 && (
              <div className="lmnt-tab-panel" data-aos="fade-up">
                <p className="lmnt-tab-intro">
                  LMNT's strength lies in applying modern physiological understanding to stimulate
                  natural healing processes within the body.
                </p>
                <div className="lmnt-science-grid">
                  <div className="lmnt-science-card">
                    <div className="lmnt-sci-icon">🦋</div>
                    <h4>Hypothyroidism</h4>
                    <p>
                      Thyroid hormone production depends on tyrosine, an amino acid synthesized during
                      protein digestion. If digestion is weak, thyroid dysfunction follows. LMNT restores
                      digestive function, thereby normalizing thyroid hormones naturally.
                    </p>
                  </div>
                  <div className="lmnt-science-card">
                    <div className="lmnt-sci-icon">🦴</div>
                    <h4>Osteoporosis</h4>
                    <p>
                      Calcium deficiency in bones can result from poor intestinal absorption. LMNT improves
                      intestinal function, enhancing calcium uptake — even without supplements.
                    </p>
                  </div>
                  <div className="lmnt-science-card">
                    <div className="lmnt-sci-icon">💎</div>
                    <h4>Calcium Misplacement</h4>
                    <p>
                      Spurs, Kidney Stones, Ankylosing Spondylitis — LMNT stimulates the parathyroid glands
                      to regulate excess calcium. Coupled with "Heparin treatment", it supports healthy calcium
                      metabolism and non-invasive resolution of calcified conditions.
                    </p>
                  </div>
                  <div className="lmnt-science-card">
                    <div className="lmnt-sci-icon">🫀</div>
                    <h4>Liver &amp; Cholesterol</h4>
                    <p>
                      Improper liver function leads to plaque formation in arteries. LMNT improves liver
                      performance, regulating cholesterol, enhancing detoxification, and supporting
                      cardiovascular health.
                    </p>
                  </div>
                  <div className="lmnt-science-card">
                    <div className="lmnt-sci-icon">🍽️</div>
                    <h4>Digestive System</h4>
                    <p>
                      LMNT places strong emphasis on abdominal health. Navel displacement (Nabhi) correction
                      addresses constipation, gas, acidity, and indigestion. Many chronic ailments originate
                      from digestive disturbances.
                    </p>
                  </div>
                  <div className="lmnt-science-card">
                    <div className="lmnt-sci-icon">👩</div>
                    <h4>Women's Hormonal Health</h4>
                    <p>
                      Fibroids and cysts are addressed by stimulating the pancreas (which produces
                      somatostatin — an anti-growth hormone). LMNT has shown remarkable success in reducing
                      fibroids and cysts without medication or surgery.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLMNT;
