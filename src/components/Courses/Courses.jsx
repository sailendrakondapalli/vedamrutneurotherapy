import './Courses.css';

const waNumber = '918499011209';

const programs = [
  {
    category: 'Undergraduate Programs',
    categoryIcon: '🎓',
    accent: '#0B6E4F',
    courses: [
      {
        title: 'B.Voc. in Yogic Science Neuro Therapy',
        short: 'B.Voc YSNT',
        partner: 'LMNTRTI Knowledge Partner: OM Sterling Global University',
        details: [
          { label: 'Admission Time', value: 'May, June & July (August Batch)' },
          { label: 'Enrollment Fee', value: 'INR 30,000 / Semester' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
          { label: 'Training', value: 'Authorized NT Centers' },
        ],
      },
    ],
  },
  {
    category: 'Postgraduate Programs',
    categoryIcon: '🏛️',
    accent: '#1D9A6C',
    courses: [
      {
        title: 'M.Voc. in Yogic Science Neuro Therapy',
        short: 'M.Voc YSNT',
        partner: 'LMNTRTI Knowledge Partner: OM Sterling Global University',
        details: [
          { label: 'Eligibility', value: 'Graduation (Any Stream)' },
          { label: 'Admission Time', value: 'May, June & July (August Batch)' },
          { label: 'Enrollment Fee', value: 'INR 35,000 / Semester' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
        ],
      },
    ],
  },
  {
    category: 'Specialized Programs',
    categoryIcon: '📜',
    accent: '#0B6E4F',
    courses: [
      {
        title: 'Diploma in Yogic Science Neuro Therapy',
        short: 'DYSNT',
        partner: 'LMNTRTI Knowledge Partner: OM Sterling Global University',
        details: [
          { label: 'Duration / Eligibility', value: '1 Year / 10+2 (Any Stream)' },
          { label: 'Admission Time', value: 'May, June & July (August Batch)' },
          { label: 'Enrollment Fee', value: 'INR 30,000 / Semester' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
        ],
      },
      {
        title: 'Certificate Course in Neuro Therapy',
        short: 'CCNT',
        partner: 'Gandhinagar University, Ahmedabad, Gujarat',
        details: [
          { label: 'Duration', value: '1 Year (Incl. 6 Months Internship)' },
          { label: 'Eligibility', value: '10+2 (Any Stream)' },
          { label: 'Admission Time', value: 'July / August' },
          { label: 'Enrollment Fee', value: 'INR 25,000' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
          { label: 'Internship Fee', value: 'INR 5,000 / Month' },
        ],
      },
    ],
  },
];

const Courses = () => {
  const waMsg = (title) =>
    encodeURIComponent(
      `Hello! I am interested in enrolling for the ${title} program at Vedamrut Neurotherapy. Please guide me.`
    );

  return (
    <section id="courses" className="courses-section">
      {/* Background */}
      <div className="courses-bg-pattern" />

      <div className="container">
        {/* Header */}
        <div className="courses-header" data-aos="fade-up">
          <span className="section-subtitle">Academic Programs</span>
          <h2 className="section-title">
            Build a Career in <span className="highlight">Neurotherapy</span>
          </h2>
          <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            University-level certificate, graduation, and master's degree programs
            to help you practice neurotherapy professionally.
          </p>
        </div>

        {/* Program categories */}
        {programs.map((group, gi) => (
          <div key={gi} className="courses-group" data-aos="fade-up" data-aos-delay={gi * 80}>
            <div className="courses-group-header">
              <span className="courses-group-icon">{group.categoryIcon}</span>
              <h3 className="courses-group-title">{group.category}</h3>
            </div>

            <div className={`courses-cards ${group.courses.length === 1 ? 'single' : ''}`}>
              {group.courses.map((course, ci) => (
                <div
                  key={ci}
                  className="course-card"
                  style={{ '--accent': group.accent }}
                  data-aos="zoom-in"
                  data-aos-delay={ci * 80}
                >
                  {/* Card top */}
                  <div className="course-card-top">
                    <span className="course-badge">{course.short}</span>
                    <h4 className="course-title">{course.title}</h4>
                    <p className="course-partner">🏫 {course.partner}</p>
                  </div>

                  {/* Details */}
                  <div className="course-details">
                    {course.details.map((d, di) => (
                      <div key={di} className="course-detail-row">
                        <span className="detail-label">{d.label}</span>
                        <span className="detail-value">{d.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enroll */}
                  <a
                    href={`https://wa.me/${waNumber}?text=${waMsg(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-enroll-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/>
                    </svg>
                    Enroll Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="courses-cta" data-aos="fade-up">
          <div className="courses-cta-inner">
            <span>🎓</span>
            <div>
              <strong>Ready to start your neurotherapy career?</strong>
              <p>Contact us today for admission guidance and course details.</p>
            </div>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to know more about your neurotherapy academic programs and admissions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="courses-cta-btn"
            >
              📲 Get Admission Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
