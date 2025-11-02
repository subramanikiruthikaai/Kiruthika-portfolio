'use client';
import { useState, useEffect } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    CalendarOutlined,
    TrophyOutlined,
    BookOutlined,
    ProjectOutlined,
    ContactsOutlined,
    SunOutlined,
    MoonOutlined,
    PictureOutlined,
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = ({ darkMode, toggleTheme, activeSection, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { key: 'home', icon: <HomeOutlined />, label: 'Home' },
        { key: 'about', icon: <UserOutlined />, label: 'About' },
        { key: 'experience', icon: <CalendarOutlined />, label: 'Experience' },
        { key: 'achievements', icon: <TrophyOutlined />, label: 'Achievements' },
        { key: 'gallery', icon: <PictureOutlined />, label: 'Gallery' },
        { key: 'books', icon: <BookOutlined />, label: 'Books' },
        { key: 'projects', icon: <ProjectOutlined />, label: 'Projects' },
        { key: 'contact', icon: <ContactsOutlined />, label: 'Contact' },
    ];

    const headerStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: isScrolled
            ? darkMode
                ? 'rgba(26, 26, 26, 0.9)'
                : 'rgba(255, 255, 255, 0.9)'
            : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${darkMode ? '#404040' : '#e8e8e8'}` : 'none',
        transition: 'all 0.3s ease',
    };

    return (
        <>
            <style jsx>{`
        /* Responsive fix between 760px and 1120px */
        @media (min-width: 760px) and (max-width: 1120px) {
          .header-name {
            font-size: 16px !important;
          }
          .ant-menu-horizontal {
            gap: 6px !important;
            font-size: 13px !important;
          }
          .ant-menu-item {
            padding: 0 6px !important;
          }
        }
      `}</style>

            <AntHeader style={headerStyle}>
                <div
                    className="header-name"
                    style={{
                        color: darkMode ? '#ffffff' : '#1f1f1f',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Kiruthika Subramani
                </div>

                <Menu
                    mode="horizontal"
                    selectedKeys={[activeSection]}
                    items={menuItems}
                    onClick={({ key }) => onNavigate(key)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        flex: 1,
                        justifyContent: 'center',
                        color: darkMode ? '#ffffff' : '#1f1f1f',
                        minWidth: 0,
                    }}
                    theme={darkMode ? 'dark' : 'light'}
                />

                <Button
                    type="primary"
                    shape="circle"
                    icon={darkMode ? <SunOutlined /> : <MoonOutlined />}
                    onClick={toggleTheme}
                />
            </AntHeader>
        </>
    );
};

export default Header;
