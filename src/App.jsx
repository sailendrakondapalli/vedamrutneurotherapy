import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/global.css';

import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Treatments from './components/Treatments/Treatments';
import Process from './components/Process/Process';
import Benefits from './components/Benefits/Benefits';
import Stats from './components/Stats/Stats';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Achievements from './components/Achievements/Achievements';
import Courses from './components/Courses/Courses';
import HealthTips from './components/HealthTips/HealthTips';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';
import TreatmentDetail from './pages/TreatmentDetail';
import AboutPage from './pages/AboutPage';

/* ── Home page (all sections) ── */
const HomePage = () => {
  const sections = [
    Hero, About, WhyChoose, Treatments, Courses, Process,
    Benefits, Stats, Gallery, Testimonials,
    Achievements, HealthTips, FAQ, CTA, Contact,
  ];

  return (
    <>
      <Navbar />
      <main>
        {sections.map((Section, i) => (
          <ErrorBoundary key={i}>
            <Section />
          </ErrorBoundary>
        ))}
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/treatment/:slug" element={
        <ErrorBoundary>
          <TreatmentDetail />
        </ErrorBoundary>
      } />
      <Route path="/about" element={
        <ErrorBoundary>
          <AboutPage />
        </ErrorBoundary>
      } />
      {/* Catch-all → home */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
