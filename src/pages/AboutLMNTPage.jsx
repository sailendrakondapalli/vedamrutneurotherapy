import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutLMNTPage.css';
import useSEO from '../hooks/useSEO';

const waNumber = '918499011209';

const principles = [
  { icon: '🛡️', title: 'Boosts Immunity', desc: 'Stimulates immune-related organs (thymus, lymph nodes) to help the body fight infections naturally.' },
  { icon: '✅', title: 'Zero Side Effects', desc: 'Nothing foreign is introduced. Can also detoxify and reverse side effects of medicines.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Suitable for All Ages', desc: 'From newborns to elderly. For infants, the therapist uses palms instead of feet.' },
  { icon: '🧬', title: 'Physiologically Sound', desc: 'Based on modern anatomy & physiology — stimulates glands and organs to produce natural chemicals.' },
  { icon: '🩺', title: 'Non-Invasive', desc: 'No medicines, oils, injections, or surgical tools. Only precise hand or foot pressure techniques.' },
  { icon: '🌿', title: 'Treats Root Cause', desc: 'Restores natural blood flow, lymphatic circulation and nervous communication — not just symptoms.' },
];

const conditions = [
  { icon: '🦋', title: 'Hypothyroidism', desc: 'Restores digestive function to normalize thyroid hormone production naturally.' },
  { icon: '🦴', title: 'Osteoporosis', desc: 'Improves intestinal function to enhance calcium uptake without supplements.' },
  { icon: '💎', title: 'Kidney Stones / Spurs', desc: 'Stimulates parathyroid glands to regulate excess calcium deposition.' },
  { icon: '❤️', title: 'Cardiac & Stroke Recovery', desc: 'Activates liver and lungs to produce natural heparin and dissolve clots.' },
  { icon: '🧠', title: 'Neurological Disorders', desc: "Parkinson's, MS, MND, Muscular Dystrophy, Guillain–Barré Syndrome." },
  { icon: '🍽️', title: 'Digestive Disorders', desc: 'Constipation, acidity, bloating, ulcers — quick relief without medicines.' },
  { icon: '👩', title: "Women's Health", desc: 'Menstrual disorders, fibroids, cysts, hormonal imbalances treated naturally.' },
  { icon: '🫀', title: 'Cholesterol & Liver', desc: 'Improves liver performance to regulate cholesterol and detoxification.' },
];

const tabs = [
  { label: 'What is LMNT?', icon: '🔬' },
  { label: 'Core Principle', icon: '⚡' },
  { label: 'Conditions Treated', icon: '🩺' },
  { label: 'Scientific Basis', icon: '🧬' },
];

const IMAGES = [
  '/images/APNQkAEsNsnwFmaq6pVEuhg2BCMn7u13w52BSgMc9blmG4av-ioqMM6O7Do7tJAvnGTQZxguSw3-9-JdXd7aHyhS2NSkGWobIeMj-cjzpGVZPStl4aUL8_ZpcaIzjysTTRBkNUcK_H3OxOzozLTw2048-h1365-k-no.jpg.jpeg',
  '/images/APNQkAGLCjhTXwz1LQ5AD6pRQubZFvIeVOnzTq3KhhnjMC8YFVhDO4D1ASmqQd0HPPW-1y2iD9BcO2Hs-6xdj3ZOEYTxTyW5hFQioRL_ut8z-9xrg6bZc74Y9XIplVeSKrHKJ6RmZA385vyiH5G6w1600-h1200-k-no.jpg.jpeg',
  '/images/APNQkAEDHw-6LOLZb33DXVvTX_k09UhdGTlFR9MYxm1w27L-5KsadUSyva-0twQ7EsFulS4xSumlxEmAOQe5DcmG132WrQDz4PGAdQOd6y7EpM_iqzqnpS_Y_qDKmHVSLItgiq5PgdJ3aHn7pCPjw1920-h1080-k-no.jpg.jpeg',
  '/images/APNQkAF24hZ-tw7runG2ZRht-Jd0oDqJmi42HnoEz0hJRXiooqjfWK_8qIT76XUTAnO2gYGY79ESkgixd-YE_cfx88uTc5MYaVJmH0pcYqTGBEBMdWogHBiH3hvxbjcABoDJShsfZyOAgHf-dO4w1214-h1600-k-no.jpg.jpeg',
];

const AboutLMNTPage = () => {
  useSEO({
    title: 'What is LMNT? — Lajpatrai Mehra Neurotherapy Explained',
    description: 'Learn about LMNT (Lajpatrai Mehra Neurotherapy) — a drug-free, surgery-free natural healing system based on modern physiology. Treats thyroid, diabetes, paralysis, joint pain & more.',
    keywords: 'what is LMNT, Lajpatrai Mehra Neurotherapy, LMNT treatment, drugless therapy India, natural healing system, neurotherapy explained',
    canonical: '/about-lmnt',
  });

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="alp-page">
      {/* Navbar */}
      <nav className="alp-navbar">
        <div className="alp-navbar-inner">
          <Link to="/" className="alp-logo">
            <span className="alp-logo-icon"><img src="/images/guruji.png" alt="Vedamrut" /></span>
            <div>
              <span className="alp-logo-name">Vedamrut</span>
              <span className="alp-logo-sub">Pain &amp; Neurotherapy Centre</span>
            </div>
          </Link>
          <div className="alp-nav-actions">
            <a href="tel:8499011209" className="alp-call-btn">📞 8499011209</a>
            <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to book an appointment.')}`} target="_blank" rel="noopener noreferrer" className="alp-book-btn">Book Appointment</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="alp-hero">
        <div className="alp-hero-overlay" />
        <div className="alp-hero-content">
          <Link to="/" className="alp-breadcrumb">← Back to Home</Link>
          <h1>What is <span>LMNT?</span></h1>
          <p>Lajpatrai Mehra Neurotherapy — An Ancient Science Empowered by Modern Physiology</p>
        </div>
      </section>

      <div className="alp-body">

        {/* Intro */}
        <section className="alp-section alp-container">
          <div className="alp-intro-grid">
            <div className="alp-intro-text">
              <span className="alp-tag">About LMNT</span>
              <h2>A Unique Indian System of Natural Healing</h2>
              <p><strong>Lajpatrai Mehra Neurotherapy (LMNT)</strong> is a unique and holistic Indian system of health restoration, discovered by Dr. Lajpatrai Mehra of Mumbai. This non-invasive, drugless approach combines ancient healing wisdom with principles from modern medical science — particularly physiology and anatomy.</p>
              <p>It requires <strong>no medicines, oils, injections, or surgical tools</strong>. Instead, LMNT involves applying precise, calculated pressure on specific points of the body using the therapist's feet or hands, depending on the patient's age and condition. This technique is completely distinct from acupressure or acupuncture.</p>
              <div className="alp-summary">
                {['Drugless — no medicines, no side effects','Non-invasive — no surgery, no injections','Based on modern physiology & anatomy','Clinically effective across thousands of cases','Suitable for all age groups including newborns','Treats root cause, not just symptoms'].map((pt, i) => (
                  <div key={i} className="alp-sum-item">
                    <span className="alp-check">✓</span><span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="alp-intro-imgs">
              {IMAGES.slice(0,3).map((img, i) => (
                <div key={i} className={`alp-icard alp-icard-${i}`}>
                  <img src={img} alt={`LMNT ${i+1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="alp-section alp-container">
          <div className="alp-tabs-wrap">
            <div className="alp-tabs">
              {tabs.map((t, i) => (
                <button key={i} className={`alp-tab${activeTab===i?' active':''}`} onClick={() => setActiveTab(i)}>
                  <span>{t.icon}</span> {t.label}
                </button>
              ))}
            </div>

            <div className="alp-tab-content">

              {/* Tab 0 */}
              {activeTab === 0 && (
                <div className="alp-panel">
                  <p className="alp-panel-intro">LMNT supports natural healing through these key mechanisms:</p>
                  <div className="alp-principles-grid">
                    {principles.map((p, i) => (
                      <div key={i} className="alp-pcard">
                        <div className="alp-picon">{p.icon}</div>
                        <h4>{p.title}</h4>
                        <p>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 1 */}
              {activeTab === 1 && (
                <div className="alp-panel">
                  <div className="alp-core-grid">
                    <div className="alp-core-text">
                      <h3>The Core Principle of Neurotherapy</h3>
                      <p>The human body is capable of producing all the chemicals it needs to maintain health — such as hormones, enzymes, and neurotransmitters. But due to lifestyle issues like poor diet, stress, pollution, incorrect posture, or emotional trauma, this natural balance is disrupted. Organs or glands may start overproducing or underproducing, leading to disease.</p>
                      <p>LMNT works by <strong>restoring the natural blood flow, lymphatic circulation, and nervous communication</strong> to under-functioning glands or organs, thus stimulating the body's own ability to heal.</p>
                      <div className="alp-heparin-box">
                        <h4>🩸 Heparin Production &amp; Clot Management</h4>
                        <p>The body produces heparin — an anticoagulant — in the liver and lungs. If the body fails to do this, dangerous clots may form, leading to heart attacks, paralysis, or strokes. LMNT protocols activate the liver, pancreas, and lungs, encouraging the body to produce natural heparin and dissolve existing clots — without medications or surgery. Remarkable success in cardiac and post-stroke recovery.</p>
                      </div>
                    </div>
                    <div className="alp-core-img">
                      <img src={IMAGES[3]} alt="LMNT core" loading="lazy" />
                      <div className="alp-core-badges">
                        {['Blood Flow','Lymphatic Circulation','Nerve Communication','Hormonal Balance'].map((b,i) => (
                          <span key={i} className="alp-cbadge">{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2 */}
              {activeTab === 2 && (
                <div className="alp-panel">
                  <p className="alp-panel-intro">LMNT has shown promising results in managing a wide range of disorders — from common chronic conditions to complex cases once thought untreatable.</p>
                  <div className="alp-cond-grid">
                    {conditions.map((c, i) => (
                      <div key={i} className="alp-ccard">
                        <span className="alp-cicon">{c.icon}</span>
                        <div><h4>{c.title}</h4><p>{c.desc}</p></div>
                      </div>
                    ))}
                  </div>
                  <div className="alp-adv-box">
                    <h4>🌟 Hope in Advanced Conditions</h4>
                    <p>LMNT has shown documented improvements in patients with AIDS, Cancer, and Autoimmune conditions — by strengthening the immune system, detox pathways, and metabolic balance, enhancing patient resilience and quality of life even in advanced stages.</p>
                  </div>
                </div>
              )}

              {/* Tab 3 */}
              {activeTab === 3 && (
                <div className="alp-panel">
                  <p className="alp-panel-intro">LMNT's strength lies in applying modern physiological understanding to stimulate natural healing processes within the body.</p>
                  <div className="alp-sci-grid">
                    {[
                      {icon:'🦋',title:'Hypothyroidism',desc:'Thyroid hormone production depends on tyrosine, synthesized during protein digestion. If digestion is weak, thyroid dysfunction follows. LMNT restores digestive function, normalizing thyroid hormones naturally.'},
                      {icon:'🦴',title:'Osteoporosis',desc:'Calcium deficiency in bones results from poor intestinal absorption. LMNT improves intestinal function, enhancing calcium uptake — even without supplements.'},
                      {icon:'💎',title:'Calcium Misplacement',desc:'Spurs, Kidney Stones, Ankylosing Spondylitis — LMNT stimulates parathyroid glands to regulate excess calcium. Coupled with Heparin treatment, supports healthy calcium metabolism.'},
                      {icon:'🫀',title:'Liver & Cholesterol',desc:'Improper liver function leads to plaque formation in arteries. LMNT improves liver performance, regulating cholesterol, enhancing detoxification, and supporting cardiovascular health.'},
                      {icon:'🍽️',title:'Digestive System',desc:'LMNT places strong emphasis on abdominal health. Navel displacement (Nabhi) correction addresses constipation, gas, acidity, and indigestion. Many chronic ailments originate from digestive disturbances.'},
                      {icon:'👩',title:"Women's Hormonal Health",desc:'Fibroids and cysts are addressed by stimulating the pancreas (which produces somatostatin — an anti-growth hormone). Remarkable success in reducing fibroids and cysts without medication or surgery.'},
                    ].map((s,i) => (
                      <div key={i} className="alp-scicard">
                        <div className="alp-sci-icon">{s.icon}</div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="alp-section alp-container">
          <div className="alp-summary-box">
            <h3>In Summary — LMNT is:</h3>
            <div className="alp-summary-grid">
              {['Drugless','Non-invasive','Physiologically Sound','Clinically Effective','Suitable for All Ages','Transformational'].map((s,i)=>(
                <div key={i} className="alp-sum-card"><span>✓</span><strong>{s}</strong></div>
              ))}
            </div>
            <p className="alp-summary-quote">"LMNT is not just an alternative — it is a transformational system of natural healing, empowering the body to restore itself."</p>
          </div>
        </section>

        {/* CTA */}
        <section className="alp-section alp-container">
          <div className="alp-cta">
            <div><h3>Experience LMNT at Vedamrut</h3><p>Natural, drugless neurotherapy in Warangal. Book your free consultation today.</p></div>
            <div className="alp-cta-btns">
              <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to book an LMNT appointment at Vedamrut Neurotherapy.')}`} target="_blank" rel="noopener noreferrer" className="alp-wa-btn">📲 Book Appointment</a>
              <Link to="/guruji" className="alp-guruji-btn">About Guruji →</Link>
            </div>
          </div>
        </section>
      </div>

      <div className="alp-footer-strip">
        <p>© {new Date().getFullYear()} Vedamrut Pain Management &amp; Neurotherapy Treatment Centre · Warangal</p>
        <Link to="/">← Back to Home</Link>
      </div>

      <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to know about LMNT neurotherapy.')}`} target="_blank" rel="noopener noreferrer" className="alp-float-wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/></svg>
      </a>
    </div>
  );
};

export default AboutLMNTPage;
