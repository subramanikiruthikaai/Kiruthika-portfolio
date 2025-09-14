'use client';
import { Row, Col, Typography, Card, Tag, Avatar, Divider, Badge, Space } from 'antd';
import { skills, certifications, personalInfo } from '../data/content';

const { Title, Paragraph, Text } = Typography;

const About = () => {
    return (
        <section id="about" style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--text-primary)' }}>
                    About Me
                </Title>

                <Row gutter={[32, 32]} align="middle">
                    <Col xs={24} md={8}>
                        <div style={{ textAlign: 'center' }}>
                            <Avatar size={200} src="/images/profile.jpg" />
                            <div style={{ marginTop: '20px' }}>
                                <Title level={4}>{personalInfo.name}</Title>
                                <Text type="secondary">AI Professional & Data Scientist</Text>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={16}>
                        <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                            {personalInfo.bio}
                        </Paragraph>
                        <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                            Recognized as a Google Developer Expert, IBM Dual Champion, and Google Cloud Champion Innovator,
                            I actively contribute to the global AI community through 200+ talks, blogs, and mentorship.
                            With 4x cloud certifications and two authored books, I&apos;m deeply committed to making AI accessible and responsible.
                        </Paragraph>
                        <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                            Currently, I&apos;m pursuing my Master&apos;s at MILA, University of Montreal, where I continue to explore
                            the frontiers of Generative AI, Responsible AI, and Agentic systems.
                        </Paragraph>
                    </Col>
                </Row>

                <Divider />

                {/* Skills Section */}
                <Title level={3} style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-primary)' }}>
                    Technical Skills
                </Title>
                <Row gutter={[24, 24]}>
                    {skills.map((skillGroup, index) => (
                        <Col xs={24} md={12} lg={8} key={index}>
                            <Card
                                title={skillGroup.category}
                                variant="borderless"
                                style={{
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {skillGroup.items.map((skill, idx) => (
                                    <Tag
                                        key={idx}
                                        color={skillGroup.color}
                                        style={{
                                            margin: '4px',
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {skill}
                                    </Tag>
                                ))}
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Divider />

                {/* Certifications */}
                <Title level={3} style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-primary)' }}>
                    Certifications
                </Title>
                <Row gutter={[16, 16]}>
                    {certifications.map((cert, index) => (
                        <Col xs={24} sm={12} key={index}>
                            <Card
                                size="small"
                                variant="borderless"
                                style={{
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Space>
                                    <Badge dot color="#52c41a" />
                                    <Text style={{ color: 'var(--text-primary)' }}>{cert}</Text>
                                </Space>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default About;