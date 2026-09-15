import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { TechBackground } from './components/common/TechBackground';
import { ThreeBackground3D } from './components/3d/ThreeBackground3D';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { BackToTop } from './components/common/BackToTop';
import { AnimatedPage } from './components/common/AnimatedPage';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { CreativePage } from './pages/CreativePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top restoration component
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <HomePage />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <AboutPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/experience"
          element={
            <AnimatedPage>
              <ExperiencePage />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage>
              <ProjectsPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/project/:slug"
          element={
            <AnimatedPage>
              <ProjectDetailPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/skills"
          element={
            <AnimatedPage>
              <SkillsPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/education"
          element={
            <AnimatedPage>
              <EducationPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/certifications"
          element={
            <AnimatedPage>
              <CertificationsPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/creative"
          element={
            <AnimatedPage>
              <CreativePage />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <ContactPage />
            </AnimatedPage>
          }
        />
        <Route
          path="*"
          element={
            <AnimatedPage>
              <NotFoundPage />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopOnNavigate />
        <div className="relative min-h-screen flex flex-col justify-between selection:bg-brand-500 selection:text-white">
          <ThreeBackground3D />
          <TechBackground />
          <Navbar />

          <main className="flex-1 w-full" id="main-content">
            <AnimatedRoutes />
          </main>

          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
