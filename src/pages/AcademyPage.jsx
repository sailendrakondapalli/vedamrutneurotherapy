import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AcademyPage.css';

const waNumber = '918499011209';

const stats = [
  { value: '3,000+', label: 'Trained Neurotherapists' },
  { value: '1,500+', label: 'Treatment Centers' },
  { value: '6,000+', label: 'Self-Employment Created' },
  { value: '₹300 Cr', label: 'Therapists Earn Per Year' },
  { value: '₹500 Cr', label: 'Society Health Savings/Year' },
  { value: '4,00,000+', label: 'New Patients/Year' },
];

const facultyPoints = [
  { icon: '🎓', title: 'Authentic Training', desc: 'Original LMNT techniques passed directly by Guruji\'s students.' },
  { icon: '🧑‍⚕️', title: 'Therapist to Consultant', desc: 'Mentored to become an independent Neurotherapy Consultant.' },
  { icon: '❤️', title: 'Mentorship That Cares', desc: 'Personalized guidance — intellectual, emotional, and professional growth.' },
  { icon: '🌍', title: 'Multilingual Faculty', desc: 'Hindi, Marathi, Tamil, Punjabi and other regional languages.' },
  { icon: '📋', title: 'Structured Curriculum', desc: 'Disciplined, evidence-based practice with transparent knowledge sharing.' },
  { icon: '🔬', title: 'Modern Diagnostics', desc: 'Interpret blood tests, MRIs, X-rays alongside traditional LMNT methods.' },
  { icon: '📝', title: 'Documentation & Tracking', desc: 'Patient record-keeping, follow-up protocols, treatment evaluation.' },
  { icon: '🤝', title: 'Ethical Conduct', desc: 'Confidentiality, informed consent, respectful patient communication.' },
];

const internshipPoints = [
  { title: 'Clinical Exposure', items: ['Treat real patients under supervision.', 'Observe acute, chronic, pediatric, gynecological, metabolic, neurological cases.', 'Apply diagnosis and therapeutic techniques confidently.'] },
  { title: 'Diagnostic & Therapeutic Expertise', items: ['Identify diseases, interpret lab reports, choose appropriate TRT protocols.', 'Master treatment accuracy, finesse, and patient-centric care.', 'Correct mistakes in real-time through mentor feedback.'] },
  { title: 'Clinic Management', items: ['Reception protocols & consultation processes.', 'Treatment area hygiene and discipline.', 'Record-keeping, patient follow-up, clinic ambience.'] },
  { title: 'Public Awareness & Growth', items: ['Build trust in complex or slow-healing cases.', 'Organize Neurotherapy Awareness Camps and Workshops.', 'Promote Neurotherapy benefits ethically within the LMNT community.'] },
];

const diseases = ['Allergy','Anal Fistula','Angina Pectoris','Arthritis','Bronchitis','Cancer','Children with Special Needs','Cramps','Depression','Diabetes','Epilepsy','Gastric Problem','Hair Falling','Hypothyroid','Parkinson\'s Disease','Menstrual Disorders','Motor Neuron Disease','Piles','Sciatica','Septicemia','Multiple Sclerosis','Muscular Dystrophy','Insomnia','Joint Pain','Chronic Constipation','Obesity','Paralysis','Spondylitis','Swelling','Tennis Elbow','Varicose Veins','Vertigo'];

const outcomes = ['Self-Reliant','Self-Confident','An Idol for Others','Pride for Family & Nation','Well Groomed','Dedicated & Determined','Visionary Professional','Health Consultant','Social Welfare Promoter','Health Awareness Promoter','Mentor for Students','Provider of Employment'];

const AcademyPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['About Faculty','Courses Offered','Internship','Diseases Treated','Career Outcomes'];

  const waMsg = (course) => encodeURIComponent(`Hello! I am interested in enrolling for the ${course} at LMNT Academy. Please guide me.`);

  return (
    <div className="acp-page">
      {/* Navbar */}
      <nav className="acp-navbar">
        <div className="acp-nb-inner">
          <Link to="/" className="acp-logo">
            <span className="acp-logo-icon"><img src="/images/guruji.png" alt="Vedamrut" /></span>
            <div><span className="acp-logo-name">Vedamrut</span><span className="acp-logo-sub">Pain &amp; Neurotherapy</span></div>
          </Link>
          <div className="acp-nav-actions">
            <a href="tel:8499011209" className="acp-call">📞 8499011209</a>
            <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to enroll in LMNT Academy.')}`} target="_blank" rel="noopener noreferrer" className="acp-book">Enquire Now</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="acp-hero">
        <div className="acp-hero-overlay"/>
        <div className="acp-hero-content">
          <Link to="/" className="acp-breadcrumb">← Back to Home</Link>
          <div className="acp-hero-badge">Dr. Lajpatrai Mehra Neurotherapy Academy</div>
          <h1>LMNT <span>Training Academy</span></h1>
          <p>Learn & Earn — Professional Neurotherapy Training from Guruji's Direct Lineage</p>
        </div>
      </section>

      <div className="acp-body">

        {/* Stats */}
        <section className="acp-section acp-container">
          <div className="acp-stats-grid">
            {stats.map((s,i) => (
              <div key={i} className="acp-stat">
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="acp-section acp-container acp-intro">
          <div className="acp-intro-text">
            <span className="acp-tag">About the Academy</span>
            <h2>Dr. Lajpatrai Mehra Neurotherapy Academy</h2>
            <p>Founded in 1999 by Late Dr. Lajpatrai Mehra (Guruji), the Academy is a residential training and research centre empowering students from across India and abroad. Learning Neurotherapy from committed and experienced faculties gives you the best of both worlds — in-depth theoretical knowledge and hands-on clinical experience.</p>
            <p>Most teachers are not only seasoned practitioners but have also trained directly under the founder, the Late Dr. Lajpatrai Mehra ji (Guruji). They uphold his original techniques, values, and vision with sincerity, integrity, and precision. Many are multilingual — fluent in Hindi, Marathi, Tamil, Punjabi, and other regional languages.</p>
          </div>
          <div className="acp-intro-visual">
            <img src="/images/APNQkAEJmTG78-LbcZemgIbWE_obuFZkBV39tRRp6BHmt9SPrcKaEgzGguzh8InRliUfFnDQbG8YiSiH4Sf161AJCYBHEPwhxD3900UjKpuOdpRnCxxtaIHgf-QwXQGkqu0U_nUiJoyut-o2ygow1920-h1080-k-no.jpg.jpeg" alt="LMNT Academy" loading="lazy"/>
            <div className="acp-intro-badge">
              <span className="acp-ib-icon">🎓</span>
              <div><strong>Est. 1999</strong><small>Guruji's Legacy</small></div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="acp-section acp-container">
          <div className="acp-tabs-wrap">
            <div className="acp-tabs">
              {tabs.map((t,i) => (
                <button key={i} className={`acp-tab${activeTab===i?' active':''}`} onClick={() => setActiveTab(i)}>{t}</button>
              ))}
            </div>

            <div className="acp-tab-content">

              {/* Tab 0 — Faculty */}
              {activeTab === 0 && (
                <div className="acp-panel">
                  <p className="acp-pi">Our faculty are trained by Guruji's direct students and bring a service-oriented philosophy to every class.</p>
                  <div className="acp-faculty-grid">
                    {facultyPoints.map((f,i) => (
                      <div key={i} className="acp-fcard">
                        <span>{f.icon}</span>
                        <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                      </div>
                    ))}
                  </div>
                  <div className="acp-quote-box">
                    <p>"Teaching is done with a spirit of service — often at nominal fees — with a mission to produce capable, ethical healers."</p>
                  </div>
                </div>
              )}

              {/* Tab 1 — Courses */}
              {activeTab === 1 && (
                <div className="acp-panel">
                  <div className="acp-courses-grid">
                    {/* Course 1 */}
                    <div className="acp-course-card">
                      <div className="acp-course-top">
                        <span className="acp-cbadge">6 Months</span>
                        <h3>Certificate Course in LMNT</h3>
                        <p className="acp-csub">Part Time — Self Employed Therapist</p>
                      </div>
                      <div className="acp-course-body">
                        <p>A full-fledged six months course training in practical study of Neurotherapy. After completing this course, you will be able to give treatment prescribed by a Senior Neurotherapy Consultant — at a Neurotherapy Centre or through online diagnosis.</p>
                        <div className="acp-detail-rows">
                          <div><span>Duration</span><strong>6 Months (Practical)</strong></div>
                          <div><span>Eligibility</span><strong>10+2 (Any Stream)</strong></div>
                          <div><span>Mode</span><strong>Part Time</strong></div>
                          <div><span>Outcome</span><strong>Self-Employed Therapist</strong></div>
                        </div>
                        <a href={`https://wa.me/${waNumber}?text=${waMsg('6 Months Certificate Course in LMNT')}`} target="_blank" rel="noopener noreferrer" className="acp-enroll-btn">📲 Enroll Now on WhatsApp</a>
                      </div>
                    </div>
                    {/* Course 2 */}
                    <div className="acp-course-card acp-course-featured">
                      <div className="acp-course-top">
                        <span className="acp-cbadge acp-cbadge-gold">1.5 Years</span>
                        <h3>Diploma Course in NT</h3>
                        <p className="acp-csub">Part Time — Full Neurotherapy Consultant</p>
                      </div>
                      <div className="acp-course-body">
                        <p>A full-fledged 1.5-year course in theoretical and practical study of Neurotherapy. Conducted ONLINE on M/W/F and T/T/S in the evening.</p>
                        <div className="acp-detail-rows">
                          <div><span>Duration</span><strong>1 Year + 6 Months</strong></div>
                          <div><span>Theory</span><strong>6 Months (200 hrs)</strong></div>
                          <div><span>Practical + Internship</span><strong>6 + 6 Months (400 hrs)</strong></div>
                          <div><span>Eligibility</span><strong>10+2 (Any Stream)</strong></div>
                          <div><span>Mode</span><strong>Online (M/W/F &amp; T/T/S Evening)</strong></div>
                        </div>
                        <div className="acp-exam-box">
                          <h4>📋 Exam Pattern</h4>
                          <ul>
                            <li>Case History Documentation (Project)</li>
                            <li>Paper I — Human Anatomy &amp; Physiology</li>
                            <li>Paper II — Neurotherapy</li>
                            <li>Paper III — Patient Card, Diagnosis, Treatment, Viva</li>
                          </ul>
                        </div>
                        <div className="acp-disclaimer">
                          <strong>⚠️ Disclaimer:</strong> This diploma does NOT confer the title of "Doctor" or authorize use of the prefix "Dr." You are expected to practice initially as an Intern or Junior Neurotherapist under a Senior Neurotherapist's supervision.
                        </div>
                        <a href={`https://wa.me/${waNumber}?text=${waMsg('1.5 Year Diploma Course in Neurotherapy')}`} target="_blank" rel="noopener noreferrer" className="acp-enroll-btn">📲 Enroll Now on WhatsApp</a>
                      </div>
                    </div>
                  </div>

                  {/* Books */}
                  <div className="acp-books-section">
                    <h3>📚 Study Books Included</h3>
                    <div className="acp-books-grid">
                      {['Basic Introduction to Human Anatomy and Physiology for Neurotherapy (Theory + Question Bank)','Neurotherapy for Various Diseases (Symptoms, Causes, Treatments)','Anatomy and Physiology for Nurses — Evelyn C. Pearce (Jaypee Brothers, 16th Edition)','Taber\'s Cyclopedic Medical Dictionary (F.A. Davis Company, 18th Edition)'].map((b,i) => (
                        <div key={i} className="acp-book-item">
                          <span>📖</span>
                          <p>{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2 — Internship */}
              {activeTab === 2 && (
                <div className="acp-panel">
                  <div className="acp-intern-intro">
                    <h3>🏥 Internship: The Bridge Between Theory and Practice</h3>
                    <p>An internship under experienced faculty is the most transformative phase of your LMNT journey. It's where knowledge becomes practical wisdom.</p>
                  </div>
                  <div className="acp-intern-grid">
                    {internshipPoints.map((ip,i) => (
                      <div key={i} className="acp-icard">
                        <h4>{ip.title}</h4>
                        <ul>
                          {ip.items.map((item,j) => <li key={j}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="acp-intern-message">
                    <h4>💬 A Crucial Message on Internship</h4>
                    <p><em>"We've seen that students who approach their internship with sincerity often go on to build thriving practices. Those who neglect this phase struggle for years — and some even leave the field. Internship is not optional — it is essential."</em></p>
                    <p style={{marginTop:10}}>Your internship is not just about practice — it's your gateway to professional maturity, clinical confidence, and career sustainability.</p>
                  </div>
                </div>
              )}

              {/* Tab 3 — Diseases */}
              {activeTab === 3 && (
                <div className="acp-panel">
                  <p className="acp-pi">After completing the Neurotherapy course, you will be able to treat the following conditions successfully:</p>
                  <div className="acp-diseases-grid">
                    {diseases.map((d,i) => (
                      <div key={i} className="acp-disease-tag">
                        <span>✓</span> {d}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4 — Career */}
              {activeTab === 4 && (
                <div className="acp-panel">
                  <p className="acp-pi">Within 2 years of completing the Neurotherapy course, you will become:</p>
                  <div className="acp-outcomes-grid">
                    {outcomes.map((o,i) => (
                      <div key={i} className="acp-outcome-card">
                        <span>⭐</span>
                        <p>{o}</p>
                      </div>
                    ))}
                  </div>
                  <div className="acp-earn-box">
                    <h3>🌟 Learn &amp; Earn</h3>
                    <p>With the increasing demand of Neurotherapy all across the nation, trained therapists are earning well and making a meaningful difference. Join the growing community of 3000+ neurotherapists across India and abroad.</p>
                    <div className="acp-earn-stats">
                      <div><strong>₹300 Cr</strong><small>Therapists earn per year (India)</small></div>
                      <div><strong>300+</strong><small>New students every year</small></div>
                      <div><strong>All States</strong><small>+ Many Foreign Countries</small></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="acp-section acp-container">
          <div className="acp-cta">
            <div>
              <h3>Start Your Neurotherapy Career Today</h3>
              <p>Enroll in the LMNT Academy and join Guruji's healing legacy.</p>
            </div>
            <div className="acp-cta-btns">
              <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to know about LMNT Academy courses and enrollment.')}`} target="_blank" rel="noopener noreferrer" className="acp-wa-btn">📲 Enquire on WhatsApp</a>
              <Link to="/courses" className="acp-uni-btn">University Programs →</Link>
            </div>
          </div>
        </section>
      </div>

      <div className="acp-footer-strip">
        <p>© {new Date().getFullYear()} Vedamrut Pain Management &amp; Neurotherapy Treatment Centre · Warangal, Telangana</p>
        <Link to="/">← Back to Home</Link>
      </div>

      <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to enroll in LMNT Academy.')}`} target="_blank" rel="noopener noreferrer" className="acp-float-wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/></svg>
      </a>
    </div>
  );
};

export default AcademyPage;
