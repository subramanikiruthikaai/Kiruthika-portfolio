'use client';
import { useState } from 'react';
import { Typography, Card, Row, Col, Button, Form, Input, Select, Space, Divider, Tag, Tooltip, message } from 'antd';
import emailjs from '@emailjs/browser';
import {
    MailOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    GithubOutlined,
    MessageOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    SendOutlined,
    TeamOutlined,
    GlobalOutlined,
    BookOutlined,
    SoundOutlined,
    RocketOutlined,
    BulbOutlined,
    HeartOutlined,
    ClockCircleOutlined,
    LoadingOutlined,
    DownloadOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const Contact = () => {
    const [form] = Form.useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // EmailJS Configuration - Replace with your actual values
    const EMAILJS_CONFIG = {
        serviceId: 'YOUR_SERVICE_ID',        // Replace with your EmailJS service ID
        templateId: 'YOUR_TEMPLATE_ID',      // Replace with your EmailJS template ID
        publicKey: 'YOUR_PUBLIC_KEY'         // Replace with your EmailJS public key
    };

    const contactInfo = {
        email: "kiruthikas2020ai@gmail.com",
        linkedin: "https://www.linkedin.com/in/techwithkrithi/",
        twitter: "https://twitter.com/kiruthika_ai",
        github: "https://github.com/Kiruthika162003",
        location: "Montreal, Canada / Remote",
        timezone: "EST (UTC-5)"
    };

    const collaborationTypes = [
        {
            type: "AI Consulting",
            description: "Strategic AI implementation and architecture consulting for enterprises",
            icon: <BulbOutlined />,
            color: "#1890ff"
        },
        {
            type: "Speaking Engagements",
            description: "Technical talks, keynotes, and workshops on AI, ML, and responsible technology",
            icon: <SoundOutlined />,
            color: "#52c41a"
        },
        {
            type: "Research Collaboration",
            description: "Joint research projects in Generative AI, Multi-agent systems, and AI Ethics",
            icon: <BookOutlined />,
            color: "#722ed1"
        },
        {
            type: "Open Source Projects",
            description: "Contributing to or maintaining open-source AI and ML projects",
            icon: <GithubOutlined />,
            color: "#fa8c16"
        },
        {
            type: "Mentorship",
            description: "Guiding aspiring AI professionals and students in their career journey",
            icon: <TeamOutlined />,
            color: "#13c2c2"
        },
        {
            type: "Startup Advisory",
            description: "Technical advisory for AI startups and product development guidance",
            icon: <RocketOutlined />,
            color: "#eb2f96"
        }
    ];

    const socialLinks = [
        {
            platform: "LinkedIn",
            icon: <LinkedinOutlined />,
            url: contactInfo.linkedin,
            color: "#0077b5",
            description: "Professional network and career updates"
        },
        {
            platform: "GitHub",
            icon: <GithubOutlined />,
            url: contactInfo.github,
            color: "#333",
            description: "Open source projects and code repositories"
        },
        // {
        //     platform: "Twitter",
        //     icon: <TwitterOutlined />,
        //     url: contactInfo.twitter,
        //     color: "#1da1f2",
        //     description: "Tech insights and industry discussions"
        // },
        {
            platform: "Email",
            icon: <MailOutlined />,
            url: `mailto:${contactInfo.email}`,
            color: "#ea4335",
            description: "Direct communication for partnerships"
        }
    ];

    const upcomingEvents = [
        {
            event: "DEVFEST DC 2025",
            date: "Oct 3, 2025",
            location: "GMU Fuse at Mason Square, DC",
            type: "Conference"
        },
        {
            event: "IBM TechXchange",
            date: "Oct 9 2025",
            location: "Orlando, Florida",
            type: "Conference"
        },
        {
            event: "WAT.DEV FEST 2025",
            date: "Oct 17,28 2025",
            location: "Waterloo, Canada",
            type: "Conference"
        }
    ];

    const onFinish = async (values) => {
        setIsSubmitting(true);

        try {
            // Prepare email parameters
            const templateParams = {
                from_name: values.name,
                from_email: values.email,
                collaboration_type: values.collaboration,
                subject: values.subject,
                message: values.message,
                to_email: contactInfo.email,
                // Add timestamp for reference
                submitted_at: new Date().toLocaleString()
            };

            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            console.log('Email sent successfully:', result);

            // Show success message
            message.success({
                content: 'Message sent successfully! I\'ll get back to you within 24-48 hours.',
                duration: 5,
            });

            // Reset form
            form.resetFields();

        } catch (error) {
            console.error('Email sending failed:', error);

            // Show error message
            message.error({
                content: 'Failed to send message. Please try again or contact me directly via email.',
                duration: 5,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const CollaborationCard = ({ collab }) => (
        <Card
            variant="borderless"
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderLeft: `4px solid ${collab.color}`,
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <Space align="start">
                <div style={{
                    fontSize: '24px',
                    color: collab.color,
                    background: `${collab.color}15`,
                    padding: '8px',
                    borderRadius: '8px'
                }}>
                    {collab.icon}
                </div>
                <div>
                    <Title level={5} style={{ margin: 0, color: 'var(--text-primary)' }}>
                        {collab.type}
                    </Title>
                    <Paragraph style={{ color: 'var(--text-secondary)', margin: '8px 0 0 0', fontSize: '14px' }}>
                        {collab.description}
                    </Paragraph>
                </div>
            </Space>
        </Card>
    );

    const SocialCard = ({ social }) => (
        <Tooltip title={social.description}>
            <Card
                variant="borderless"
                style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow)';
                    e.currentTarget.style.borderColor = social.color;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
                onClick={() => window.open(social.url, '_blank')}
            >
                <div style={{
                    fontSize: '32px',
                    color: social.color,
                    marginBottom: '12px'
                }}>
                    {social.icon}
                </div>
                <Text strong style={{ color: 'var(--text-primary)' }}>
                    {social.platform}
                </Text>
            </Card>
        </Tooltip>
    );

    return (
        <section id="contact" style={{
            padding: '80px 0',
            background: 'var(--bg-secondary)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: 'var(--text-primary)'
                }}>
                    💬 Let&apos;s Connect & Collaborate
                </Title>

                <Paragraph style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    marginBottom: '60px',
                    color: 'var(--text-secondary)'
                }}>
                    Interested in AI collaboration, speaking opportunities, or just want to discuss the future of technology?
                    I&apos;d love to hear from you!
                </Paragraph>

                <Row gutter={[32, 32]}>
                    {/* Contact Form */}
                    <Col xs={24} lg={12}>
                        <Card
                            title={
                                <Space>
                                    <MessageOutlined style={{ color: '#1890ff' }} />
                                    <span>Send a Message</span>
                                </Space>
                            }
                            variant="borderless"
                            style={{
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                height: '100%'
                            }}
                        >
                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Row gutter={16}>
                                    <Col xs={24} sm={12}>
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[{ required: true, message: 'Please enter your name' }]}
                                        >
                                            <Input placeholder="Your full name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12}>
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            rules={[
                                                { required: true, message: 'Please enter your email' },
                                                { type: 'email', message: 'Please enter a valid email' }
                                            ]}
                                        >
                                            <Input placeholder="your.email@example.com" />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item
                                    name="collaboration"
                                    label="Type of Collaboration"
                                    rules={[{ required: true, message: 'Please select collaboration type' }]}
                                >
                                    <Select placeholder="Select the type of collaboration">
                                        {collaborationTypes.map((collab, index) => (
                                            <Option key={index} value={collab.type}>
                                                {collab.type}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="subject"
                                    label="Subject"
                                    rules={[{ required: true, message: 'Please enter a subject' }]}
                                >
                                    <Input placeholder="Brief description of your inquiry" />
                                </Form.Item>

                                <Form.Item
                                    name="message"
                                    label="Message"
                                    rules={[{ required: true, message: 'Please enter your message' }]}
                                >
                                    <TextArea
                                        rows={6}
                                        placeholder="Tell me more about your project, idea, or how we can collaborate..."
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        icon={isSubmitting ? <LoadingOutlined /> : <SendOutlined />}
                                        loading={isSubmitting}
                                        block
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>

                    {/* Contact Information */}
                    <Col xs={24} lg={12}>
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            {/* Contact Details */}
                            <Card
                                title={
                                    <Space>
                                        <MailOutlined style={{ color: '#52c41a' }} />
                                        <span>Contact Information</span>
                                    </Space>
                                }
                                variant="borderless"
                                style={{
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                                    <Space>
                                        <MailOutlined style={{ color: '#ea4335' }} />
                                        <Text copyable>{contactInfo.email}</Text>
                                    </Space>
                                    <Space>
                                        <EnvironmentOutlined style={{ color: '#1890ff' }} />
                                        <Text>{contactInfo.location}</Text>
                                    </Space>
                                    <Space>
                                        <ClockCircleOutlined style={{ color: '#fa8c16' }} />
                                        <Text>{contactInfo.timezone}</Text>
                                    </Space>
                                </Space>
                            </Card>

                            {/* Social Links */}
                            <Card
                                title={
                                    <Space>
                                        <GlobalOutlined style={{ color: '#722ed1' }} />
                                        <span>Connect on Social</span>
                                    </Space>
                                }
                                variant="borderless"
                                style={{
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <Row gutter={[12, 12]}>
                                    {socialLinks.map((social, index) => (
                                        <Col xs={12} sm={6} key={index}>
                                            <SocialCard social={social} />
                                        </Col>
                                    ))}
                                </Row>
                            </Card>

                            {/* Upcoming Events */}
                            <Card
                                title={
                                    <Space>
                                        <CalendarOutlined style={{ color: '#13c2c2' }} />
                                        <span>Upcoming Events</span>
                                    </Space>
                                }
                                variant="borderless"
                                style={{
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                                    {upcomingEvents.map((event, index) => (
                                        <div key={index} style={{
                                            padding: '12px',
                                            background: 'var(--bg-secondary)',
                                            borderRadius: '8px',
                                            border: '1px solid var(--border-color)'
                                        }}>
                                            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                                                <div>
                                                    <Text strong style={{ color: 'var(--text-primary)' }}>{event.event}</Text>
                                                    <br />
                                                    <Text type="secondary" style={{ fontSize: '12px' }}>
                                                        {event.date} • {event.location}
                                                    </Text>
                                                </div>
                                                <Tag color="blue" size="small">{event.type}</Tag>
                                            </Space>
                                        </div>
                                    ))}
                                </Space>
                            </Card>
                        </Space>
                    </Col>
                </Row>

                <Divider style={{ margin: '60px 0' }} />

                {/* Collaboration Types */}
                <Title level={3} style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    color: 'var(--text-primary)'
                }}>
                    🤝 Ways We Can Collaborate
                </Title>

                <Row gutter={[24, 24]}>
                    {collaborationTypes.map((collab, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <CollaborationCard collab={collab} />
                        </Col>
                    ))}
                </Row>

                {/* Call to Action */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '60px',
                    padding: '40px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '16px',
                    color: 'white'
                }}>
                    <HeartOutlined style={{ fontSize: '48px', marginBottom: '20px', opacity: 0.9 }} />
                    <Title level={3} style={{ color: 'white', marginBottom: '16px' }}>
                        Ready to Build Something Amazing Together?
                    </Title>
                    <Paragraph style={{ color: 'white', fontSize: '16px', marginBottom: '24px', opacity: 0.9 }}>
                        Whether you&apos;re looking to implement AI solutions, need a speaker for your event,
                        or want to collaborate on research, I&apos;m here to help make it happen.
                    </Paragraph>
                    <Space size="large">
                        {/* <Button size="large" style={{ background: 'white', color: '#667eea', border: 'none' }}>
                            Schedule a Call
                        </Button> */}
                        <Button
                            size="large"
                            type="default"
                            ghost
                            icon={<DownloadOutlined />}
                            onClick={() => {
                                // Create download link
                                const link = document.createElement('a');
                                link.href = '/document/Kiruthika_CV.pdf';
                                link.download = 'Kiruthika_CV.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Download CV
                        </Button>
                    </Space>
                </div>
            </div>
        </section>
    );
};

export default Contact;