import { useState } from 'react';
import './Gallery.css';

const images = [
  { src: '/images/hsptl.jpg.jpeg', alt: 'Clinic Interior' , span: 'wide' },
  { src: '/images/2.jpg.jpeg', alt: 'Reception Area' },
  { src: '/images/APNQkAEJy7UGLe-ZGXWVDg96MDoApKm_qy5H9qpviotP-2a3KNSmaCF86TrOXUcayVnBS1XvfcU8aYSUok6x7TwOdD_WJviz42-ihJ9klvvbLJmuAz3tQXVAAYebfnvUKyO_vgLJYa2ZO1U1LW0nw3468-h4624-k-no.jpg.jpeg', alt: 'Therapy Session', span: 'tall' },
  { src: '/images/APNQkAEsNsnwFmaq6pVEuhg2BCMn7u13w52BSgMc9blmG4av-ioqMM6O7Do7tJAvnGTQZxguSw3-9-JdXd7aHyhS2NSkGWobIeMj-cjzpGVZPStl4aUL8_ZpcaIzjysTTRBkNUcK_H3OxOzozLTw2048-h1365-k-no.jpg.jpeg', alt: 'Patient Consultation' },
  { src: '/images/APNQkAEC2qgBUvZ1hrIyke8eKwNOmJTCEkdwu1MWZH3ai1Q8Lytd9Dsdd4VR0axt1ub-OGMkX9U-27YNPR7rLRuKIQsD13nrLBJx5y_Vj_oRvgkLXHb2slFt_8jhqwLamrLbYhJ8F8x4g5I8RHcw1080-h1920-k-no.jpg.jpeg', alt: 'Treatment Room' },
  { src: '/images/APNQkAEDHw-6LOLZb33DXVvTX_k09UhdGTlFR9MYxm1w27L-5KsadUSyva-0twQ7EsFulS4xSumlxEmAOQe5DcmG132WrQDz4PGAdQOd6y7EpM_iqzqnpS_Y_qDKmHVSLItgiq5PgdJ3aHn7pCPjw1920-h1080-k-no.jpg.jpeg', alt: 'Clinic Equipment', span: 'wide' },
  { src: '/images/APNQkAEJmTG78-LbcZemgIbWE_obuFZkBV39tRRp6BHmt9SPrcKaEgzGguzh8InRliUfFnDQbG8YiSiH4Sf161AJCYBHEPwhxD3900UjKpuOdpRnCxxtaIHgf-QwXQGkqu0U_nUiJoyut-o2ygow1920-h1080-k-no.jpg.jpeg', alt: 'Neurotherapy Treatment', span: 'wide' },
  { src: '/images/APNQkAEjAqFnEs2Y0eTRSQJXK9nI6HkKTkLt_NpinwKjGUnB4aPlHnT5wlKNcnCuWWH_OOr2Uj-ZwWXnHM0mH4DLkM8-DKoTasRrwdSKVKch3_O6PT9hlLX5kFN2G4mSi-dSMTPPAHHiAZr0Ev3w1080-h2412-k-no.jpg.jpeg', alt: 'Doctor Consultation', span: 'tall' },
  { src: '/images/APNQkAF0O6k8rckPdvAHLLsjVqMYuN7pb8RgnDxU214FEV17EiBYi-Pv4BlPtna1xTHU_QxCPByqFGtUW1qb-SuSUTAoTlvo0utqJNRLSq4iT3es9d2siC4e5B2a7KIATTxqcyu12CNO9zSxE1Mw1080-h1920-k-no.jpg.jpeg', alt: 'Wellness Activity' },
  { src: '/images/APNQkAF24hZ-tw7runG2ZRht-Jd0oDqJmi42HnoEz0hJRXiooqjfWK_8qIT76XUTAnO2gYGY79ESkgixd-YE_cfx88uTc5MYaVJmH0pcYqTGBEBMdWogHBiH3hvxbjcABoDJShsfZyOAgHf-dO4w1214-h1600-k-no.jpg.jpeg', alt: 'Treatment Process' },
  { src: '/images/APNQkAFR5vVbNq1ZynpdG-vDtC2wewAZUO8p1VemgZhqE_pNExCrARPkpxu1cr18a6k30la3-QMIbVCQkwTiSSbP1u_Ph3BdGbBWiUMP02Pr88Mm-HmGFSYkwCN3MW-gP6CQR5BTcgtSU4JdfoNnw3984-h2656-k-no.jpg.jpeg', alt: 'Clinic Staff' },
  { src: '/images/APNQkAG2ktU0gurZC4zIZfwB4XTbFqAgKnbqEIrpu52kZSzxs7eI-MHoh9RkrBy4mdsg_gcj6xsPjEpQBOUU8pfnEN27XUXcQYCuyjYhnPtKgwozfBtLCkGeU3wBE6RH0rCoYSQ8lu56Cni9iMlOw3120-h4160-k-no.jpg.jpeg', alt: 'Patient Recovery' },
  { src: '/images/APNQkAGcF35-ccrvI9xMordhCg3y84Q9u-4Zp74fYdu834l1NT-ezcCyXo-FT7bPJLaBTkqAnwNPqUrEgeLMZ8kN6Q81qaXSKjxFP_qAvADZP_-P6KSLuo7OhZAOrfLD17MZUXbFqbyCC08ja8A4w4095-h2886-k-no.jpg.jpeg', alt: 'Natural Therapy', span: 'wide' },
  { src: '/images/APNQkAGKJToUpd06xx5jtQENgejHUq74x9XyO6I90mE-PqmjehUXaSabm75uG9IuuzmK2sPXDyVkeR6b7ezlDeWIyzbphdofLIGnPl8QFa63e6reFnoeUYVF6D9A8Qn95qZM1pulqfFFjlw3RABNw1080-h2412-k-no.jpg.jpeg', alt: 'Healing Session' },
  { src: '/images/APNQkAGLCjhTXwz1LQ5AD6pRQubZFvIeVOnzTq3KhhnjMC8YFVhDO4D1ASmqQd0HPPW-1y2iD9BcO2Hs-6xdj3ZOEYTxTyW5hFQioRL_ut8z-9xrg6bZc74Y9XIplVeSKrHKJ6RmZA385vyiH5G6w1600-h1200-k-no.jpg.jpeg', alt: 'Clinic View', span: 'wide' },
  { src: '/images/APNQkAHaNMZ_YKgzqi6BzIvfiN4pSWRYmpcRIYUobiec1HjaDV8Hr6vMxIOoaxfa331qoygRpvzVpMpton0BBLSn3P2DGwFtlcsm_5RiLMpdyX9CHCqyZ17KW9zu9KeSwv02UcOv8vtJ4r_16ugw3984-h2656-k-no (1).jpg.jpeg', alt: 'Outdoor Care' },
  { src: '/images/APNQkAHbAPd16R8Mr6ougyLvpCF1ZUJYIcOVwjpUAIXPjT1RnoYqMPUbwiCpKIscgGN-wHMX2zdMAZ3xJgHAm0uVcMhY07n_4uni7Pdry4TovOMEFz1olWq0m9m5b46KZs4T0-uQrWjyyrWmn42xw2656-h3984-k-no.jpg.jpeg', alt: 'Personalised Care', span: 'tall' },
  { src: '/images/APNQkAHIS4f03_iE6lhOm1aNUYsFUbwkoU3BwdL7VYvj1jqyAGSetog1GLLr64qnCob2XHasxKx_lOA9_iOleru5ytHXo0C8QnyUcqD-w8huuJwczfquf96HtkRU9uJJvIVjN7gqHEkhP42QWs3Pw1200-h1599-k-no.jpg.jpeg', alt: 'Expert Therapist' },
  { src: '/images/APNQkAHL8AKmAK8wtEh7TT6okqo4whtWG6GsT9a0Cou1_9Clq9Aq6hp8vt5su8TEmOMdtpQ1mw4OCfqSGT1KkhfT7Q3zB6e-48L-Hp_6kWd0qLHUyJzVjSvxZ9puOHCbwdYg7bu5-DnAcax79Fww3106-h4096-k-no.jpg.jpeg', alt: 'Treatment Environment' },
  { src: '/images/APNQkAHlJAmUzteN1cylkn8relVEoLhWjtizF0stbthJWGsJAMaNgzOv5T1TLg1SX9IZph3nZq47MajDG7RwS6gBctCw_9KZULtjROjzGXs64feWib3OKb1s7AZPLgCWh1IAHutVWSxsFZ6yLZiEw4624-h3468-k-no.jpg.jpeg', alt: 'Holistic Healing', span: 'wide' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Our Gallery</span>
          <h2 className="section-title">
            Inside <span className="highlight">Vedamrut</span>
          </h2>
          <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            A glimpse into our world-class treatment centre and healing environment.
          </p>
        </div>

        <div className="gallery-masonry">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item${img.span ? ` gallery-item--${img.span}` : ''}`}
              data-aos="zoom-in"
              data-aos-delay={Math.min(i * 40, 300)}
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-zoom">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <span className="gallery-label">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
