import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', problem: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, problem, message } = form;
    const text = `Hello! I would like to book an appointment at Vedamrut Pain Management & Neurotherapy Treatment Centre.

*Name:* ${name}
*Phone:* ${phone}
*Problem:* ${problem}
*Message:* ${message}

Please guide me for the treatment.`;

    const waUrl = `https://wa.me/918499011209?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
          alt="Contact background"
          loading="lazy"
        />
        <div className="contact-overlay"></div>
      </div>

      <div className="container contact-container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle" style={{ color: '#6ee7b7' }}>Get In Touch</span>
          <h2 className="section-title" style={{ color: 'white' }}>
            Contact <span style={{ color: '#6ee7b7' }}>Vedamrut</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left - Info */}
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-info-card">
              <h3 className="contact-clinic-name">Vedamrut Pain Management &amp; Neurotherapy Treatment Centre</h3>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:8499011209">8499011209</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Balasamudram, Hanamkonda,<br />Warangal, Telangana - 506001</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">👨‍⚕️</span>
                <div>
                  <strong>Expert Therapist</strong>
                  <p>NT. Parmar Ashok Kumar</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/FmxHM6aVGXPh7ksz6"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-btn"
              >
                📍 Open in Google Maps
              </a>

              <div className="opening-hours">
                <h4>Opening Hours</h4>
                <div className="hours-row">
                  <span>Monday – Saturday</span>
                  <span className="hours-time">9:00 AM – 7:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span className="hours-appt">Appointment Only</span>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="map-embed" data-aos="fade-up" data-aos-delay="200">
              <iframe
                title="Vedamrut Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.2!2d79.5941!3d18.0001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334b5a1234abcd%3A0x0!2sHanamkonda%2C+Warangal%2C+Telangana+506001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-wrap" data-aos="fade-left">
            <div className="contact-form-card">
              <h3>Book Your Appointment</h3>
              <p>Fill in the details below and we'll send them to our WhatsApp directly.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="problem">Your Problem *</label>
                  <select
                    id="problem"
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your condition</option>
                    <option>Back Pain</option>
                    <option>Neck Pain</option>
                    <option>Knee Pain</option>
                    <option>Sciatica</option>
                    <option>Shoulder Pain</option>
                    <option>Joint Pain</option>
                    <option>Paralysis</option>
                    <option>Migraine</option>
                    <option>Frozen Shoulder</option>
                    <option>Slip Disc</option>
                    <option>Muscle Pain</option>
                    <option>Nerve Disorders</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Describe your symptoms or any additional information..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="form-note">
                  * Your details will be sent directly to our WhatsApp for quick response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
