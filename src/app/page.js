'use client';
import { useState, useEffect, useCallback } from 'react';
import { Layout, FloatButton } from 'antd';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ImageGallery from './components/ImageGallery'; // Added gallery import
import Books from './components/Books';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import './styles/portfolio.css';

const { Content, Footer } = Layout;

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  // Updated sections array to include gallery
  const sections = ['home', 'about', 'experience', 'achievements', 'gallery', 'books', 'projects', 'contact'];

  // Memoize the scroll handler to prevent unnecessary re-renders
  const updateActiveSection = useCallback(() => {
    const headerHeight = 80;
    const scrollPosition = window.scrollY + headerHeight;

    // Find the current section
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        // Check if current scroll position is within this section
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveSection(sections[i]);
          break;
        }

        // Special case for the last section
        if (i === sections.length - 1 && scrollPosition >= elementTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, [sections]);

  // Scroll detection with throttling
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

    // Initial call to set active section
    updateActiveSection();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateActiveSection]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      // Immediately update active section for instant feedback
      setActiveSection(sectionId);

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

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
          <ImageGallery /> {/* Added gallery component */}
          <Books />
          <Projects />
          <Contact />
        </Content>

        <Footer style={{
          textAlign: 'center',
          background: 'var(--bg-secondary)',
          color: 'var(--text-secondary)',
          padding: '40px 20px'
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