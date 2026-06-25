import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Rajesh Kumar',
    location: 'Warangal',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    review: 'I got relief from severe knee pain within just 4 sessions. The treatment is completely natural and effective. Dr. Parmar Ashok Kumar is very experienced and caring.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Hanamkonda',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    review: 'Excellent treatment without any surgery or medicines. I was suffering from back pain for 3 years. After neurotherapy sessions at Vedamrut, I feel completely recovered.',
    rating: 5,
  },
  {
    name: 'Suresh Reddy',
    location: 'Karimnagar',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    review: 'Very caring doctor and wonderful experience. My sciatica pain has reduced by 90%. The centre is clean, well-maintained and the staff is very professional.',
    rating: 5,
  },
  {
    name: 'Lakshmi Devi',
    location: 'Kazipet',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    review: 'I am amazed by the results. Cervical spondylosis pain is completely gone. No medicines, no injections — purely natural healing. Highly recommend Vedamrut!',
    rating: 5,
  },
  {
    name: 'Mohammad Irfan',
    location: 'Hanamkonda',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    review: 'Best neurotherapy centre in Warangal. My shoulder pain and frozen shoulder have improved dramatically after the treatment. Thank you so much Vedamrut!',
    rating: 5,
  },
  {
    name: 'Anitha Rao',
    location: 'Balasamudram',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    review: 'Wonderful treatment for migraine. I used to have severe headaches every week. After 6 sessions, I am free from migraine completely. Very grateful!',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, []);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(current + i) % reviews.length]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-bg">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
          alt="Testimonials background"
          loading="lazy"
        />
        <div className="testimonials-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle" style={{ color: '#6ee7b7' }}>Testimonials</span>
          <h2 className="section-title" style={{ color: 'white' }}>
            What Our <span style={{ color: '#6ee7b7' }}>Patients Say</span>
          </h2>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {getVisible().map((review, i) => (
              <div
                key={`${current}-${i}`}
                className={`testimonial-card ${i === 1 ? 'active' : ''}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{review.review}</p>
                <div className="testimonial-stars">
                  {'★'.repeat(review.rating)}
                </div>
                <div className="testimonial-author">
                  <img src={review.img} alt={review.name} loading="lazy" />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-controls">
            <button onClick={prev} className="testi-btn" aria-label="Previous">‹</button>
            <div className="testi-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="testi-btn" aria-label="Next">›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
