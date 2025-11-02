import { Typography, Card, Row, Col, Button, Tag, Space, Rate, Avatar, Divider } from 'antd';
import {
    BookOutlined,
    StarOutlined,
    ShoppingCartOutlined,
    DownloadOutlined,
    ReadOutlined,
    CalendarOutlined,
    UserOutlined,
    GlobalOutlined,
    HeartOutlined,
    ShareAltOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Books = () => {
    const booksData = [
        {
            id: 1,
            title: "Generative Artificial Intelligence – Unleashing Imagination",
            subtitle: "A Comprehensive Guide to Modern AI",
            year: "2023",
            platform: "Amazon",
            isbn: "978-1234567890",
            pages: 342,
            language: "English",
            rating: 4.8,
            reviews: 127,
            price: "$29.99",
            description: "Dive deep into the revolutionary world of Generative AI with this comprehensive guide that bridges the gap between theoretical concepts and practical implementations. This book covers everything from foundational models to cutting-edge applications in various industries.",
            coverColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            topics: [
                "Large Language Models",
                "Diffusion Models",
                "GANs and VAEs",
                "Prompt Engineering",
                "Fine-tuning Techniques",
                "Ethical AI Implementation",
                "Industry Applications",
                "Future Trends"
            ],
            chapters: [
                "Introduction to Generative AI",
                "Understanding Transformer Architecture",
                "Building Your First LLM",
                "Image Generation with Diffusion Models",
                "Prompt Engineering Mastery",
                "Fine-tuning and Optimization",
                "Ethical Considerations",
                "Real-world Applications",
                "The Future of Generative AI"
            ],
            testimonials: [
                {
                    name: "Dr. Sarah Chen",
                    role: "AI Research Scientist at Google",
                    comment: "An exceptional guide that makes complex concepts accessible. A must-read for anyone in AI.",
                    rating: 5
                },
                {
                    name: "Michael Rodriguez",
                    role: "CTO at TechStart",
                    comment: "Practical insights that we immediately applied in our company. Highly recommended!",
                    rating: 5
                }
            ]
        },
        {
            id: 2,
            title: "AI for a Better Tomorrow – Algorithms in Action",
            subtitle: "Practical Applications for Social Good",
            year: "2022",
            platform: "Academic Publishers",
            isbn: "978-0987654321",
            pages: 278,
            language: "English",
            rating: 4.6,
            reviews: 89,
            price: "$24.99",
            description: "Explore how artificial intelligence can be harnessed to solve pressing global challenges. This book showcases real-world applications of AI algorithms that are making a positive impact on society, from healthcare to environmental conservation.",
            coverColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            topics: [
                "AI in Healthcare",
                "Environmental AI",
                "Social Impact ML",
                "Algorithmic Fairness",
                "Sustainable Computing",
                "AI for Education",
                "Crisis Response Systems",
                "Community-Driven Solutions"
            ],
            chapters: [
                "AI's Role in Social Good",
                "Healthcare Revolution",
                "Environmental Protection",
                "Education Enhancement",
                "Crisis Management",
                "Algorithmic Bias and Fairness",
                "Sustainable AI Development",
                "Building Inclusive Systems",
                "Community Implementation"
            ],
            testimonials: [
                {
                    name: "Prof. Emily Watson",
                    role: "Director of AI Ethics Institute",
                    comment: "A thoughtful exploration of AI's potential for positive change. Inspiring and practical.",
                    rating: 5
                },
                {
                    name: "David Kim",
                    role: "Non-profit Tech Director",
                    comment: "This book gave us the roadmap to implement AI solutions in our humanitarian work.",
                    rating: 4
                }
            ]
        }
    ];

    const upcomingBook = {
        title: "Responsible AI Engineering",
        subtitle: "Building Ethical AI Systems at Scale",
        expectedYear: "2025",
        status: "In Progress",
        progress: 65,
        description: "A comprehensive guide to building AI systems that are not just powerful, but also ethical, fair, and responsible. Coming in 2025.",
        topics: ["AI Ethics", "Responsible Development", "Bias Mitigation", "Explainable AI"]
    };

    const BookCard = ({ book }) => (
        <Card
            variant="borderless"
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                height: '100%',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <Row gutter={[24, 24]}>
                {/* Book Cover */}
                <Col xs={24} sm={8}>
                    <div
                        style={{
                            background: book.coverColor,
                            height: '300px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            color: 'white',
                            textAlign: 'center',
                            padding: '20px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <BookOutlined style={{ fontSize: '60px', marginBottom: '20px', opacity: 0.9 }} />
                        <Title level={4} style={{ color: 'white', textAlign: 'center', margin: 0 }}>
                            {book.title}
                        </Title>
                        <Text style={{ color: 'white', opacity: 0.8, marginTop: '8px' }}>
                            {book.subtitle}
                        </Text>
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            background: 'rgba(255,255,255,0.2)',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '12px'
                        }}>
                            {book.year}
                        </div>
                    </div>
                </Col>

                {/* Book Details */}
                <Col xs={24} sm={16}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <Title level={4} style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>
                                {book.title}
                            </Title>
                            <Text type="secondary" style={{ fontSize: '16px' }}>
                                {book.subtitle}
                            </Text>
                        </div>

                        <Space wrap style={{ marginBottom: '16px' }}>
                            <Tag icon={<CalendarOutlined />} color="blue">{book.year}</Tag>
                            <Tag icon={<GlobalOutlined />} color="green">{book.platform}</Tag>
                            <Tag color="orange">{book.pages} pages</Tag>
                            <Tag color="purple">{book.language}</Tag>
                        </Space>

                        <div style={{ marginBottom: '16px' }}>
                            <Space align="center">
                                {/* <Rate disabled defaultValue={book.rating} allowHalf /> */}
                                {/* <Text strong>{book.rating}</Text> */}
                                {/* <Text type="secondary">({book.reviews} reviews)</Text>
                                <Text strong style={{ color: '#1890ff', fontSize: '18px' }}>{book.price}</Text> */}
                            </Space>
                        </div>

                        <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '16px', flex: 1 }}>
                            {book.description}
                        </Paragraph>

                        <div style={{ marginBottom: '16px' }}>
                            <Text strong style={{ color: 'var(--text-primary)' }}>Key Topics: </Text>
                            <div style={{ marginTop: '8px' }}>
                                {book.topics.slice(0, 4).map((topic, index) => (
                                    <Tag key={index} style={{ margin: '2px', fontSize: '12px' }}>{topic}</Tag>
                                ))}
                                {book.topics.length > 4 && (
                                    <Tag style={{ margin: '2px', fontSize: '12px' }}>+{book.topics.length - 4} more</Tag>
                                )}
                            </div>
                        </div>

                        {/* <Space>
                            <Button type="primary" icon={<ShoppingCartOutlined />}>
                                Buy Now
                            </Button>
                            <Button icon={<ReadOutlined />}>
                                Preview
                            </Button>
                            <Button icon={<ShareAltOutlined />} />
                            <Button icon={<HeartOutlined />} />
                        </Space> */}
                    </div>
                </Col>
            </Row>
        </Card>
    );

    const TestimonialCard = ({ testimonial }) => (
        <Card
            variant="borderless"
            size="small"
            style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                margin: '8px 0'
            }}
        >
            <Space align="start">
                <Avatar icon={<UserOutlined />} />
                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '8px' }}>
                        <Text strong style={{ color: 'var(--text-primary)' }}>{testimonial.name}</Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: '12px' }}>{testimonial.role}</Text>
                    </div>
                    <Rate disabled defaultValue={testimonial.rating} size="small" />
                    <Paragraph style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0', fontSize: '14px' }}>
                        &ldquo;{testimonial.comment}&rdquo;
                    </Paragraph>
                </div>
            </Space>
        </Card>
    );

    const UpcomingBookCard = () => (
        <Card
            variant="borderless"
            title={
                <Space>
                    <BookOutlined style={{ color: '#fa8c16' }} />
                    <span>Upcoming Book</span>
                    <Tag color="orange">{upcomingBook.status}</Tag>
                </Space>
            }
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)'
            }}
        >
            <Title level={4} style={{ color: 'var(--text-primary)' }}>
                {upcomingBook.title}
            </Title>
            <Text type="secondary" style={{ fontSize: '16px' }}>
                {upcomingBook.subtitle}
            </Text>

            <div style={{ margin: '16px 0' }}>
                <Text strong>Expected Release: </Text>
                <Tag color="blue">{upcomingBook.expectedYear}</Tag>
            </div>

            <div style={{ marginBottom: '16px' }}>
                <Text strong>Writing Progress:</Text>
                <div style={{ marginTop: '8px' }}>
                    <div style={{
                        background: 'var(--bg-secondary)',
                        borderRadius: '10px',
                        height: '20px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            background: 'linear-gradient(90deg, #52c41a, #73d13d)',
                            height: '100%',
                            width: `${upcomingBook.progress}%`,
                            borderRadius: '10px',
                            transition: 'width 0.3s ease'
                        }} />
                        <Text style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}>
                            {upcomingBook.progress}%
                        </Text>
                    </div>
                </div>
            </div>

            <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {upcomingBook.description}
            </Paragraph>

            <div style={{ marginBottom: '16px' }}>
                <Text strong>Key Topics:</Text>
                <div style={{ marginTop: '8px' }}>
                    {upcomingBook.topics.map((topic, index) => (
                        <Tag key={index} color="orange" style={{ margin: '2px' }}>{topic}</Tag>
                    ))}
                </div>
            </div>

            <Button type="primary" style={{ background: '#fa8c16', borderColor: '#fa8c16' }}>
                Get Notified When Available
            </Button>
        </Card>
    );

    return (
        <section id="books" style={{
            padding: '80px 0',
            background: 'var(--bg-secondary)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: 'var(--text-primary)'
                }}>
                    📚 Published Books
                </Title>

                <Paragraph style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    marginBottom: '60px',
                    color: 'var(--text-secondary)'
                }}>
                    Sharing knowledge through comprehensive guides on AI, Machine Learning, and responsible technology development.
                </Paragraph>

                {/* Published Books */}
                <Row gutter={[0, 48]}>
                    {booksData.map((book, index) => (
                        <Col xs={24} key={book.id}>
                            <BookCard book={book} />

                            {/* Testimonials for each book */}
                            {/* <div style={{ marginTop: '24px' }}>
                                <Title level={5} style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
                                    What Readers Say:
                                </Title>
                                <Row gutter={[16, 16]}>
                                    {book.testimonials.map((testimonial, idx) => (
                                        <Col xs={24} md={12} key={idx}>
                                            <TestimonialCard testimonial={testimonial} />
                                        </Col>
                                    ))}
                                </Row>
                            </div> */}

                            {index < booksData.length - 1 && <Divider style={{ margin: '48px 0' }} />}
                        </Col>
                    ))}
                </Row>

                <Divider style={{ margin: '60px 0' }} />

                {/* Upcoming Book */}
                {/* <Row justify="center">
                    <Col xs={24} lg={16}>
                        <UpcomingBookCard />
                    </Col>
                </Row> */}

                {/* Writing Stats */}
                {/* <Row gutter={[24, 24]} style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff', marginBottom: '8px' }}>
                                2
                            </div>
                            <Text type="secondary">Published Books</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a', marginBottom: '8px' }}>
                                620+
                            </div>
                            <Text type="secondary">Total Pages</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fa8c16', marginBottom: '8px' }}>
                                4.7
                            </div>
                            <Text type="secondary">Average Rating</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#722ed1', marginBottom: '8px' }}>
                                216
                            </div>
                            <Text type="secondary">Total Reviews</Text>
                        </div>
                    </Col>
                </Row> */}
            </div>
        </section>
    );
};

export default Books;