'use client';
import { useState } from 'react';
import { Layout, FloatButton } from 'antd';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// Import other components as you create them
import { useTheme } from './hooks/useTheme';
import './styles/portfolio.css';

const { Content, Footer } = Layout;

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
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
          {/* Add other components here as you create them */}
        </Content>

        <Footer style={{
          textAlign: 'center',
          background: 'var(--bg-secondary)',
          color: 'var(--text-secondary)'
        }}>
          © 2025 Kiruthika. Built with passion for AI and innovation.
          <br />
          Crafted with React, Next.js, and Ant Design
        </Footer>
      </Layout>

      <FloatButton.BackTop />
    </div>
  );
}