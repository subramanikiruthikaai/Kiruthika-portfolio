'use client';
import { useState, useEffect, useCallback } from 'react';
import { Layout, FloatButton, Spin } from 'antd';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ImageGallery from './components/ImageGallery';
import Books from './components/Books';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import { useHydrationReady } from './hooks/useHydrationReady';
import './styles/portfolio.css';

const { Content, Footer } = Layout;

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const isReady = useHydrationReady(400);

  const sections = ['home', 'about', 'experience', 'achievements', 'gallery', 'books', 'projects', 'contact'];

  const updateActiveSection = useCallback(() => {
    const headerHeight = 80;
    const scrollPosition = window.scrollY + headerHeight;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveSection(sections[i]);
          break;
        }

        if (i === sections.length - 1 && scrollPosition >= elementTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, [sections]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateActiveSection]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      setActiveSection(sectionId);
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // 🕓 Delay rendering until styles & theme are ready
  if (!isReady) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: darkMode ? '#1a1a1a' : '#ffffff',
          transition: 'background 0.3s ease',
        }}
      >
        <Spin tip="Loading..." fullscreen />
      </div>
    );
  }

  // ✅ Render full app after styles load
  return (
    <div className={`portfolio-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Layout style={{ background: 'var(--bg-primary)' }}>
        <Header
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        <Content>
          <Hero onNavigate={scrollToSection} />
          <About />
          <Experience />
          <Achievements />
          <ImageGallery />
          <Books />
          <Projects />
          <Contact />
        </Content>

        <Footer style={{
          textAlign: 'center',
          background: 'var(--bg-secondary)',
          color: 'var(--text-secondary)',
          padding: '40px 20px',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '16px', marginBottom: '12px' }}>
              © 2025 Kiruthika Subramani. Built with passion for AI and innovation.
            </p>
            <p style={{ fontSize: '12px', marginTop: '16px', opacity: 0.6 }}>
              &ldquo;The best AI solutions don&apos;t just solve technical problems – they solve human problems with technical excellence.&rdquo;
            </p>
          </div>
        </Footer>
      </Layout>

      <FloatButton.BackTop
        style={{ right: 24, bottom: 24 }}
        visibilityHeight={100}
      />
    </div>
  );
}
