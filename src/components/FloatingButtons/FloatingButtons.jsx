import './FloatingButtons.css';

const FloatingButtons = () => {
  const waNumber = '918499011209';
  const waMsg = encodeURIComponent(
    'Hello! I would like to book an appointment at Vedamrut Pain Management & Neurotherapy Treatment Centre.'
  );

  return (
    <div className="floating-btns">
      <a
        href={`https://wa.me/${waNumber}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-wa"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.02L7.55 18.85L4.43 19.65L5.25 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.37 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.98C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.22 13.41 13.92 13.77 13.71 14C13.61 14.11 13.5 14.12 13.27 14.01C13.04 13.9 12.32 13.67 11.47 12.91C10.81 12.32 10.36 11.59 10.26 11.36C10.16 11.13 10.26 11.01 10.37 10.9C10.47 10.8 10.62 10.64 10.73 10.54C10.84 10.44 10.87 10.36 10.95 10.19C11.03 10.03 10.99 9.87 10.93 9.76C10.87 9.65 10.42 8.42 10.22 7.96C10.03 7.51 9.83 7.57 9.68 7.56C9.58 7.55 9.42 7.55 9.26 7.55C9.11 7.55 8.86 7.61 8.63 7.86L8.53 7.33Z" />
        </svg>
        <span className="float-tooltip">Chat on WhatsApp</span>
      </a>

      <a
        href="tel:8499011209"
        className="float-btn float-phone"
        aria-label="Call us"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        <span className="float-tooltip">Call Now</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
