'use client';
import { useState, useEffect } from 'react';
import { Layout, FloatButton } from 'antd';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Books from './components/Books';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import './styles/portfolio.css';

const { Content, Footer } = Layout;

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  // Better scroll detection with throttling
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const sections = ['home', 'about', 'experience', 'achievements', 'books', 'projects', 'contact'];
      const headerHeight = 80; // Height of fixed header + some padding
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

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
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
  }, []);

  // Alternative: Intersection Observer approach (more modern)
  useEffect(() => {
    const observerOptions = {
      threshold: [0.2, 0.5, 0.8], // Multiple thresholds for better detection
      rootMargin: '-80px 0px -50% 0px' // Account for header height
    };

    const observerCallback = (entries) => {
      // Find the entry with the highest intersection ratio
      let maxRatio = 0;
      let activeEntry = null;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeEntry = entry;
        }
      });

      // Update active section if we found a good candidate
      if (activeEntry && activeEntry.intersectionRatio > 0.2) {
        setActiveSection(activeEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections with a small delay to ensure DOM is ready
    setTimeout(() => {
      const sections = ['home', 'about', 'experience', 'achievements', 'books', 'projects', 'contact'];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        } else {
          console.warn(`Section with id "${sectionId}" not found`);
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Fixed header height
      const elementPosition = element.offsetTop - headerHeight;

      // Immediately update active section for instant feedback
      setActiveSection(sectionId);

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

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
              © 2025 Kiruthika. Built with passion for AI and innovation.
            </p>
            <p style={{ fontSize: '14px', opacity: 0.8 }}>
              Crafted with React, Next.js, and Ant Design •
              Deployed on Vercel •
              Open Source on GitHub
            </p>
            <p style={{ fontSize: '12px', marginTop: '16px', opacity: 0.6 }}>
              "The best AI solutions don't just solve technical problems – they solve human problems with technical excellence."
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