import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'What is Neurotherapy?',
    a: "Neurotherapy is a natural, non-invasive treatment that works on the nervous system and muscles to relieve chronic pain. It uses specific hand techniques and pressure points to stimulate the body's natural healing mechanisms, restore nerve function, and improve blood circulation — without any medicines or surgery.",
  },
  {
    q: 'Is the treatment painful?',
    a: 'No, neurotherapy is completely painless. The treatment involves gentle hand techniques and mild pressure applied to specific points on the body. Most patients actually find the sessions relaxing and comfortable. You may feel mild tingling or warmth, which indicates improved circulation.',
  },
  {
    q: 'How many sessions are required?',
    a: 'The number of sessions varies based on the condition, its severity, and individual response to treatment. Most patients experience significant relief within 3–8 sessions. Chronic conditions may require 10–20 sessions. A personalised treatment plan is created after the initial consultation and diagnosis.',
  },
  {
    q: 'Is surgery required?',
    a: 'Absolutely not. Neurotherapy is a completely surgery-free treatment approach. Our methods are non-invasive and work naturally with the body. Many patients who were advised surgery by other doctors have achieved full recovery through our neurotherapy treatments alone.',
  },
  {
    q: 'Are medicines necessary during treatment?',
    a: 'No medicines are required during or after the neurotherapy treatment. This is one of the biggest advantages of our approach. We believe in purely natural healing. However, if you are currently on medication for other conditions, please inform us during consultation.',
  },
  {
    q: 'Who can take neurotherapy treatment?',
    a: 'Neurotherapy is safe for people of all ages — children, adults, and elderly. It is suitable for anyone suffering from chronic pain, nerve disorders, joint problems, paralysis recovery, or wanting to improve overall health. Pregnant women and people with certain medical conditions should consult first.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left" data-aos="fade-right">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">
              Frequently Asked <span className="highlight">Questions</span>
            </h2>
            <p className="section-desc" style={{ marginTop: '16px' }}>
              Have questions about neurotherapy? We have answers. If you need more information,
              feel free to contact us directly.
            </p>
            <div className="faq-img">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80"
                alt="Doctor consultation"
                loading="lazy"
              />
            </div>
          </div>

          <div className="faq-right" data-aos="fade-left">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">{open === i ? '−' : '+'}</span>
                </button>
                {/* Pure CSS accordion — no Framer Motion height:auto issue */}
                <div className="faq-answer-wrap">
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
