'use client';
import { Button, Space } from 'antd';
import { GithubOutlined, RobotOutlined, CloudOutlined, CodeOutlined } from '@ant-design/icons';
import { personalInfo } from '../data/content';

const Hero = ({ onNavigate }) => {
    const heroStyle = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
    };

    const floatingElements = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
    };

    const floatingElement = {
        position: 'absolute',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite',
    };

    return (
        <section id="home" style={heroStyle}>
            <div style={floatingElements}>
                <RobotOutlined style={{ ...floatingElement, fontSize: '60px', top: '20%', left: '10%', animationDelay: '0s' }} />
                <CloudOutlined style={{ ...floatingElement, fontSize: '50px', top: '60%', left: '80%', animationDelay: '2s' }} />
                <CodeOutlined style={{ ...floatingElement, fontSize: '40px', top: '80%', left: '20%', animationDelay: '4s' }} />
            </div>

            <div style={{ zIndex: 2, maxWidth: '800px', padding: '0 20px' }}>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    animation: 'fadeInUp 1s ease'
                }}>
                    {personalInfo.name}
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                    marginBottom: '2rem',
                    opacity: 0.9,
                    animation: 'fadeInUp 1s ease 0.2s both'
                }}>
                    {personalInfo.title}
                </p>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    opacity: 0.8,
                    animation: 'fadeInUp 1s ease 0.4s both'
                }}>
                    "{personalInfo.quote}"
                </p>

                <Space size="large">
                    <Button type="primary" size="large" onClick={() => onNavigate('about')}>
                        Discover More
                    </Button>
                    <Button
                        size="large"
                        icon={<GithubOutlined />}
                        href={personalInfo.github}
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Space>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
        </section>
    );
};

export default Hero;