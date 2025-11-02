'use client'
import { useState, useEffect, useRef } from 'react';
import { Typography, Image, Button } from 'antd';
import {
    LeftOutlined,
    RightOutlined,
    PlayCircleOutlined,
    PauseCircleOutlined,
    FullscreenOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    // Simple image array - just 5 images
    const galleryImages = [
        {
            id: 1,
            src: "/gallery/1.jpeg"
        },
        {
            id: 2,
            src: "/gallery/2.jpeg"
        },
        {
            id: 3,
            src: "/gallery/3.jpeg"
        },
        {
            id: 4,
            src: "/gallery/4.jpeg"
        },
        {
            id: 5,
            src: "/gallery/5.jpeg"
        }
    ];

    // Auto-scroll functionality
    useEffect(() => {
        if (isPlaying && !isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 4000);
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

    return (
        <section id="gallery" style={{
            padding: '80px 0',
            background: 'var(--bg-primary)',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: 'var(--text-primary)'
                }}>
                    Photo Gallery
                </Title>

                <Paragraph style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    marginBottom: '60px',
                    color: 'var(--text-secondary)'
                }}>
                    A collection of memorable moments
                </Paragraph>

                {/* Main Image Display */}
                <div style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: 'var(--bg-secondary)',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '100%',
                    margin: '0 auto'
                }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Main Image with Dynamic Size */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '400px',
                        maxHeight: '700px'
                    }}>
                        <Image
                            src={currentImage.src}
                            alt={`Gallery image ${currentIndex + 1}`}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '700px',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                                transition: 'all 0.5s ease'
                            }}
                            fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4="
                            preview={{
                                mask: <FullscreenOutlined style={{ fontSize: '24px' }} />
                            }}
                        />

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
                                background: 'rgba(0,0,0,0.6)',
                                border: 'none',
                                color: 'white',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                opacity: 0.8,
                                transition: 'opacity 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
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
                                background: 'rgba(0,0,0,0.6)',
                                border: 'none',
                                color: 'white',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                opacity: 0.8,
                                transition: 'opacity 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
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
                                background: 'rgba(0,0,0,0.6)',
                                border: 'none',
                                color: 'white',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                zIndex: 10,
                                opacity: 0.8,
                                transition: 'opacity 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                        />
                    </div>
                </div>

                {/* Image Indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    marginTop: '30px'
                }}>
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '50%',
                                border: 'none',
                                background: index === currentIndex ? '#1890ff' : 'var(--border-color)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)',
                                boxShadow: index === currentIndex ? '0 2px 8px rgba(24, 144, 255, 0.4)' : 'none'
                            }}
                            onMouseEnter={(e) => {
                                if (index !== currentIndex) {
                                    e.currentTarget.style.background = '#40a9ff';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (index !== currentIndex) {
                                    e.currentTarget.style.background = 'var(--border-color)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }
                            }}
                        />
                    ))}
                </div>

                {/* Thumbnail Strip */}
                <div style={{ marginTop: '40px' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                        padding: '20px 0'
                    }}>
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                onClick={() => goToSlide(index)}
                                style={{
                                    width: '120px',
                                    height: '80px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    border: index === currentIndex ? '3px solid #1890ff' : '3px solid transparent',
                                    transition: 'all 0.3s ease',
                                    opacity: index === currentIndex ? 1 : 0.7,
                                    boxShadow: index === currentIndex ? '0 4px 12px rgba(24, 144, 255, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = index === currentIndex ? '1' : '0.7';
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = index === currentIndex ? '0 4px 12px rgba(24, 144, 255, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)';
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={`Thumbnail ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                    preview={false}
                                    fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2NjYyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg=="
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Counter */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    color: 'var(--text-secondary)',
                    fontSize: '14px'
                }}>
                    {currentIndex + 1} / {galleryImages.length}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;