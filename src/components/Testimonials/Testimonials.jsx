import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/FmxHM6aVGXPh7ksz6';

const reviews = [
  {
    name: 'Sujatha Chakrapani',
    location: 'Warangal',
    time: '7 months ago',
    review: 'I reached out to Vedamrut for paralysis treatment — I have been suffering for almost 5 years. Thank you ASHOK sir and Vimal madam for helping me recover faster than expected. Started the treatment and I can say it is The Best Treatment I have ever taken. Tried many medicines, tried other treatments but the result was nothing. After joining here I can see the result in just one month. The Best Best Treatment and I would suggest 100%.',
    rating: 5,
    initials: 'SC',
    color: '#0B6E4F',
  },
  {
    name: 'Madhavi Aleti',
    location: 'Hanamkonda',
    time: '5 months ago',
    review: 'I have taken treatment for my cervical pain and neck stiffness. I have been suffering from the last 6 months. I felt relief within a short time and I am very much satisfied with the treatment. Thank you Dr. Ashok garu for this kind of treatment.',
    rating: 5,
    initials: 'MA',
    color: '#1D9A6C',
  },
  {
    name: 'Vashi Nani',
    location: 'Warangal',
    time: '7 months ago',
    review: 'Recently I have taken the treatment for my back pain. I am fully satisfied with the treatment. There are no side effects and it is cured with neurotherapy. This is a new method which I experienced with no medicine. Thank you DR. Ashok Parmar garu for providing this kind of treatment.',
    rating: 5,
    initials: 'VN',
    color: '#0B6E4F',
  },
  {
    name: 'Vijaya Laxmi',
    location: 'Warangal',
    time: '5 months ago',
    review: 'I Vijayalaxmi had taken neurotherapy treatment by Vedamrut Pain Management Therapy for six weeks and got relief in my knees and sciatica nerve pain. I am happy for their treatment.',
    rating: 5,
    initials: 'VL',
    color: '#1D9A6C',
  },
  {
    name: 'Meenakshi JNTU',
    location: 'Warangal',
    time: '4 weeks ago',
    review: 'Good healing, immediate result in short span. Therapy was good compared to medicines.',
    rating: 5,
    initials: 'MJ',
    color: '#0B6E4F',
  },
  {
    name: 'Vinay Ji',
    location: 'Telangana',
    time: '8 months ago',
    review: 'The best neurotherapy treatment all over Telangana. First I had back pain — after visiting this hospital I am completely cured now. Very good professional treatment is available here.',
    rating: 5,
    initials: 'VJ',
    color: '#1D9A6C',
  },
  {
    name: 'Farook Sharief',
    location: 'Warangal',
    time: '5 months ago',
    review: 'My son had chronic constipation and abdomen pain and was taking laxatives for six months. After taking treatment from Ashok Parmar sir he is now completely fine and doesn\'t require any medicine. His treatment is very good. I am fully satisfied and I recommend other people to use his services.',
    rating: 5,
    initials: 'FS',
    color: '#0B6E4F',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
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
          {/* Google rating summary */}
          <div className="testi-google-row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="testi-rating-text">4.9 ★ on Google &nbsp;·&nbsp; 7+ Reviews</span>
          </div>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {getVisible().map((review, i) => (
              <div
                key={`${current}-${i}`}
                className={`testimonial-card ${i === 1 ? 'active' : ''}`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{review.review}</p>
                <div className="testimonial-stars">★★★★★</div>
                <div className="testimonial-author">
                  <div
                    className="testi-avatar"
                    style={{ background: `linear-gradient(135deg, ${review.color}, #1D9A6C)` }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location} · {review.time}</span>
                  </div>
                  {/* Google icon */}
                  <svg className="testi-google-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
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

          {/* Give Review CTA */}
          <div className="testi-review-cta">
            <p>Happy with our treatment? Share your experience!</p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="testi-review-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Give a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
