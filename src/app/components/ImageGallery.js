'use client';
import { useState, useEffect, useRef } from 'react';
import { Typography, Card, Row, Col, Image, Tag, Space, Button } from 'antd';
import {
    LeftOutlined,
    RightOutlined,
    PlayCircleOutlined,
    PauseCircleOutlined,
    FullscreenOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    TeamOutlined,
    EyeOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    // Sample images - replace with your actual photos
    const galleryImages = [
        {
            id: 1,
            src: "/api/placeholder/800/600",
            title: "Keynote at AI Ethics Conference",
            description: "Delivering insights on responsible AI development to 500+ attendees",
            category: "Speaking",
            location: "San Francisco, USA",
            date: "March 2024",
            tags: ["AI Ethics", "Keynote", "Conference"]
        },
        {
            id: 2,
            src: "/api/placeholder/800/600",
            title: "Google Developer Expert Recognition",
            description: "Receiving the Google Developer Expert badge for AI/ML contributions",
            category: "Achievement",
            location: "Google Campus",
            date: "January 2024",
            tags: ["GDE", "Recognition", "Google"]
        },
        {
            id: 3,
            src: "/api/placeholder/800/600",
            title: "Women in AI Workshop",
            description: "Leading hands-on workshop on generative AI for women in tech",
            category: "Workshop",
            location: "Montreal, Canada",
            date: "February 2024",
            tags: ["Workshop", "Women in AI", "Teaching"]
        },
        {
            id: 4,
            src: "/api/placeholder/800/600",
            title: "IBM Techxchange 2025",
            description: "Speaking at IBM's premier technical conference on multi-agent AI systems",
            category: "Speaking",
            location: "Florida, USA",
            date: "April 2025",
            tags: ["IBM", "Multi-agent", "AI Systems"]
        },
        {
            id: 5,
            src: "/api/placeholder/800/600",
            title: "Award Ceremony - Aviation Challenge",
            description: "Winning first place in Bombardier & TCS Sustainable AI Aviation Challenge",
            category: "Achievement",
            location: "Toronto, Canada",
            date: "December 2024",
            tags: ["Award", "Aviation", "Sustainability"]
        },
        {
            id: 6,
            src: "/api/placeholder/800/600",
            title: "Community Meetup - AI for Good",
            description: "Organizing community event focused on AI applications for social impact",
            category: "Community",
            location: "Montreal, Canada",
            date: "November 2024",
            tags: ["Community", "AI for Good", "Organizing"]
        },
        {
            id: 7,
            src: "/api/placeholder/800/600",
            title: "Research Collaboration at MILA",
            description: "Working with research team on responsible AI implementations",
            category: "Research",
            location: "MILA, Montreal",
            date: "Ongoing",
            tags: ["Research", "MILA", "Collaboration"]
        },
        {
            id: 8,
            src: "/api/placeholder/800/600",
            title: "Book Launch Event",
            description: "Launching 'Generative AI - Unleashing Imagination' with industry experts",
            category: "Publication",
            location: "Online Event",
            date: "September 2023",
            tags: ["Book Launch", "Generative AI", "Publication"]
        }
    ];

    // Auto-scroll functionality
    useEffect(() => {
        if (isPlaying && !isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 4000); // Change image every 4 seconds
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isPlaying, isPaused, galleryImages.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const currentImage = galleryImages[currentIndex];

    const getCategoryColor = (category) => {
        const colors = {
            'Speaking': '#1890ff',
            'Achievement': '#52c41a',
            'Workshop': '#722ed1',
            'Research': '#fa8c16',
            'Community': '#13c2c2',
            'Publication': '#eb2f96'
        };
        return colors[category] || '#666';
    };

    return (
        <section id="gallery" style={{
            padding: '80px 0',
            background: 'var(--bg-primary)',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: 'var(--text-primary)'
                }}>
                    📸 Journey in Pictures
                </Title>

                <Paragraph style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    marginBottom: '60px',
                    color: 'var(--text-secondary)'
                }}>
                    Capturing moments from conferences, achievements, workshops, and community events
                </Paragraph>

                {/* Main Image Display */}
                <Row gutter={[32, 32]} align="middle">
                    {/* Large Image Section */}
                    <Col xs={24} lg={16}>
                        <div style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            background: 'var(--bg-secondary)',
                            boxShadow: 'var(--shadow)'
                        }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* Main Image */}
                            <div style={{
                                position: 'relative',
                                height: '500px',
                                overflow: 'hidden'
                            }}>
                                <Image
                                    src={currentImage.src}
                                    alt={currentImage.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.5s ease'
                                    }}
                                    fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4="
                                />

                                {/* Image Overlay with Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                    padding: '40px 24px 24px',
                                    color: 'white'
                                }}>
                                    <Tag
                                        color={getCategoryColor(currentImage.category)}
                                        style={{ marginBottom: '12px' }}
                                    >
                                        {currentImage.category}
                                    </Tag>
                                    <Title level={3} style={{ color: 'white', margin: 0, marginBottom: '8px' }}>
                                        {currentImage.title}
                                    </Title>
                                    <Paragraph style={{ color: 'white', margin: 0, opacity: 0.9 }}>
                                        {currentImage.description}
                                    </Paragraph>
                                </div>

                                {/* Navigation Arrows */}
                                <Button
                                    type="text"
                                    icon={<LeftOutlined />}
                                    onClick={goToPrevious}
                                    style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: 'none',
                                        color: 'white',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                />
                                <Button
                                    type="text"
                                    icon={<RightOutlined />}
                                    onClick={goToNext}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: 'none',
                                        color: 'white',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                />

                                {/* Play/Pause Button */}
                                <Button
                                    type="text"
                                    icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                                    onClick={togglePlayPause}
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: 'none',
                                        color: 'white',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Image Indicators */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '8px',
                            marginTop: '20px'
                        }}>
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        background: index === currentIndex ? '#1890ff' : 'var(--border-color)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
                                    }}
                                />
                            ))}
                        </div>
                    </Col>

                    {/* Image Details */}
                    <Col xs={24} lg={8}>
                        <Card
                            variant="borderless"
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                height: '100%'
                            }}
                        >
                            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                                <div>
                                    <Tag color={getCategoryColor(currentImage.category)} style={{ marginBottom: '12px' }}>
                                        {currentImage.category}
                                    </Tag>
                                    <Title level={4} style={{ color: 'var(--text-primary)', margin: 0 }}>
                                        {currentImage.title}
                                    </Title>
                                </div>

                                <Paragraph style={{ color: 'var(--text-secondary)' }}>
                                    {currentImage.description}
                                </Paragraph>

                                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                                    <Space>
                                        <CalendarOutlined style={{ color: '#1890ff' }} />
                                        <Text>{currentImage.date}</Text>
                                    </Space>
                                    <Space>
                                        <EnvironmentOutlined style={{ color: '#52c41a' }} />
                                        <Text>{currentImage.location}</Text>
                                    </Space>
                                </Space>

                                <div>
                                    <Text strong style={{ color: 'var(--text-primary)' }}>Tags:</Text>
                                    <div style={{ marginTop: '8px' }}>
                                        {currentImage.tags.map((tag, index) => (
                                            <Tag key={index} style={{ margin: '2px' }}>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </div>
                                </div>

                                <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                                    <Text type="secondary">
                                        {currentIndex + 1} of {galleryImages.length}
                                    </Text>
                                    <Button
                                        type="link"
                                        icon={<FullscreenOutlined />}
                                        size="small"
                                    >
                                        View Full Size
                                    </Button>
                                </Space>
                            </Space>
                        </Card>
                    </Col>
                </Row>

                {/* Thumbnail Strip */}
                <div style={{ marginTop: '40px' }}>
                    <Title level={4} style={{
                        textAlign: 'center',
                        marginBottom: '24px',
                        color: 'var(--text-primary)'
                    }}>
                        Quick Browse
                    </Title>

                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        overflowX: 'auto',
                        padding: '12px 0',
                        scrollBehavior: 'smooth'
                    }}>
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                onClick={() => goToSlide(index)}
                                style={{
                                    minWidth: '120px',
                                    height: '80px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    border: index === currentIndex ? '3px solid #1890ff' : '3px solid transparent',
                                    transition: 'all 0.3s ease',
                                    opacity: index === currentIndex ? 1 : 0.7
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = index === currentIndex ? '1' : '0.7';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                    preview={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Stats */}
                <Row gutter={[24, 24]} style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Col xs={8}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff', marginBottom: '8px' }}>
                                50+
                            </div>
                            <Text type="secondary">Events Attended</Text>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a', marginBottom: '8px' }}>
                                25+
                            </div>
                            <Text type="secondary">Speaking Engagements</Text>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fa8c16', marginBottom: '8px' }}>
                                15+
                            </div>
                            <Text type="secondary">Awards & Recognition</Text>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ImageGallery;