'use client';
import { Typography, Card, Row, Col, Tag, Space, Divider, Badge } from 'antd';
import {
    StarOutlined,
    TrophyOutlined,
    GlobalOutlined,
    BulbOutlined,
    TeamOutlined,
    FileTextOutlined,
    CrownOutlined,
    RocketOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Achievements = () => {
    const mainAchievements = [
        {
            title: "Google Developer Expert (AI)",
            description: "Recognized expert in AI/ML technologies by Google, contributing to the developer community through talks, content, and mentorship.",
            icon: <StarOutlined />,
            color: "#1890ff",
            category: "Recognition",
            year: "2024"
        },
        {
            title: "IBM Dual Champion",
            description: "Dual recognition in Data AI and IBM Z systems, demonstrating expertise across multiple IBM technology domains.",
            icon: <CrownOutlined />,
            color: "#722ed1",
            category: "Recognition",
            year: "2024"
        },
        {
            title: "Speaker at Techxchange 2025",
            description: "Selected to speak at IBM's premier technical conference in Florida, USA, sharing insights on AI innovation.",
            icon: <GlobalOutlined />,
            color: "#52c41a",
            category: "Speaking",
            year: "2025"
        },
        {
            title: "Top Influencer 2024",
            description: "Recognized by IBM as a top influencer in the AI and technology space, for community contributions and thought leadership.",
            icon: <BulbOutlined />,
            color: "#fa8c16",
            category: "Recognition",
            year: "2024"
        },
        {
            title: "Delivered 205+ Talks Worldwide",
            description: "Extensive speaking experience across global conferences, meetups, and tech events, sharing AI knowledge and best practices.",
            icon: <FileTextOutlined />,
            color: "#13c2c2",
            category: "Speaking",
            year: "2020-2024"
        },
        {
            title: "Author of 2 AI Books",
            description: "Published author of books on Generative AI and practical AI implementations, contributing to AI education globally.",
            icon: <FileTextOutlined />,
            color: "#eb2f96",
            category: "Publication",
            year: "2022-2023"
        }
    ];

    const awards = [
        {
            title: "Women in AI Scholarship (MILA, 2025)",
            description: "Prestigious scholarship for pursuing advanced AI research at MILA, University of Montreal.",
            icon: <TrophyOutlined />,
            amount: "Full Tuition",
            type: "Scholarship"
        },
        {
            title: "Winner – Sustainable AI Aviation Challenge",
            description: "First place in Bombardier & TCS challenge for developing AI solutions for sustainable aviation.",
            icon: <TrophyOutlined />,
            amount: "$10,000",
            type: "Competition"
        },
        {
            title: "Best Outgoing Student",
            description: "Highest honor awarded by M. Kumarasamy College for academic excellence and leadership.",
            icon: <StarOutlined />,
            amount: "Merit",
            type: "Academic"
        },
        {
            title: "Gemma 3 Recognition",
            description: "Special recognition from Google for contributions to AI model development and community building.",
            icon: <RocketOutlined />,
            amount: "Recognition",
            type: "Industry"
        }
    ];

    const leadership = [
        {
            role: "Women Techmakers Ambassador",
            organization: "Google",
            description: "Leading initiatives to increase women's participation in technology and fostering inclusive tech communities.",
            period: "2023 - Present",
            color: "#1890ff"
        },
        {
            role: "DeepLearning.AI Community Organizer",
            organization: "DeepLearning.AI",
            description: "Organizing community events, workshops, and educational content for AI enthusiasts and professionals.",
            period: "2023 - Present",
            color: "#52c41a"
        },
        {
            role: "GDSC Lead",
            organization: "Google Developer Student Clubs",
            description: "Led a team of 50+ students, organized 30+ events, and mentored aspiring developers in modern technologies.",
            period: "2022 - 2023",
            color: "#fa8c16"
        },
        {
            role: "Intel Student Ambassador (AI)",
            organization: "Intel Corporation",
            description: "Represented Intel in academic settings, promoting AI education and Intel's developer tools.",
            period: "2022 - 2024",
            color: "#722ed1"
        },
        {
            role: "IBM Z Systems Captain",
            organization: "IBM",
            description: "Led initiatives around mainframe technology education and promoted IBM Z systems in academic communities.",
            period: "2023 - 2024",
            color: "#eb2f96"
        },
        {
            role: "#IamRemarkable Facilitator",
            organization: "Google",
            description: "Certified facilitator helping individuals, especially women and underrepresented groups, speak openly about their accomplishments.",
            period: "2023 - Present",
            color: "#13c2c2"
        }
    ];

    const AchievementCard = ({ achievement }) => (
        <Card
            variant="borderless"
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
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
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{
                    fontSize: '48px',
                    color: achievement.color,
                    marginBottom: '16px',
                    background: `${achievement.color}20`,
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                }}>
                    {achievement.icon}
                </div>
                <Tag color={achievement.color} style={{ marginBottom: '8px' }}>
                    {achievement.category} • {achievement.year}
                </Tag>
                <Title level={4} style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>
                    {achievement.title}
                </Title>
                <Paragraph style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    {achievement.description}
                </Paragraph>
            </div>
        </Card>
    );

    const AwardCard = ({ award }) => (
        <Card
            variant="borderless"
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
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
            <Space align="start" style={{ width: '100%' }}>
                <div style={{ fontSize: '24px', color: '#1890ff', marginTop: '4px' }}>
                    {award.icon}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <Title level={5} style={{ margin: 0, color: 'var(--text-primary)' }}>
                            {award.title}
                        </Title>
                        <Tag color="gold">{award.amount}</Tag>
                    </div>
                    <Tag color="blue" size="small" style={{ marginBottom: '8px' }}>
                        {award.type}
                    </Tag>
                    <Paragraph style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '14px' }}>
                        {award.description}
                    </Paragraph>
                </div>
            </Space>
        </Card>
    );

    const LeadershipCard = ({ role }) => (
        <Card
            variant="borderless"
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderLeft: `4px solid ${role.color}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{ marginBottom: '12px' }}>
                <Title level={5} style={{ margin: 0, color: 'var(--text-primary)' }}>
                    {role.role}
                </Title>
                <Text strong style={{ color: role.color }}>
                    {role.organization}
                </Text>
                <div style={{ marginTop: '4px' }}>
                    <Tag color="blue" size="small">{role.period}</Tag>
                </div>
            </div>
            <Paragraph style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '14px' }}>
                {role.description}
            </Paragraph>
        </Card>
    );

    return (
        <section id="achievements" style={{
            padding: '80px 0',
            background: 'var(--bg-primary)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    color: 'var(--text-primary)'
                }}>
                    Achievements & Recognition
                </Title>

                {/* Main Achievements */}
                <Title level={3} style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    color: 'var(--text-primary)'
                }}>
                    🌟 Major Achievements
                </Title>

                <Row gutter={[24, 24]} style={{ marginBottom: '60px' }}>
                    {mainAchievements.map((achievement, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <AchievementCard achievement={achievement} />
                        </Col>
                    ))}
                </Row>

                <Divider />

                {/* Awards Section */}
                <Title level={3} style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    color: 'var(--text-primary)'
                }}>
                    🏆 Awards & Scholarships
                </Title>

                <Row gutter={[24, 24]} style={{ marginBottom: '60px' }}>
                    {awards.map((award, index) => (
                        <Col xs={24} md={12} key={index}>
                            <AwardCard award={award} />
                        </Col>
                    ))}
                </Row>

                <Divider />

                {/* Leadership & Community */}
                <Title level={3} style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    color: 'var(--text-primary)'
                }}>
                    🌍 Leadership & Community Impact
                </Title>

                <Row gutter={[24, 24]}>
                    {leadership.map((role, index) => (
                        <Col xs={24} md={12} lg={8} key={index}>
                            <LeadershipCard role={role} />
                        </Col>
                    ))}
                </Row>

                {/* Impact Stats */}
                <Row gutter={[24, 24]} style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1890ff', marginBottom: '8px' }}>
                                205+
                            </div>
                            <Text type="secondary">Technical Talks</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#52c41a', marginBottom: '8px' }}>
                                10K+
                            </div>
                            <Text type="secondary">Community Members Impacted</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#fa8c16', marginBottom: '8px' }}>
                                50+
                            </div>
                            <Text type="secondary">Events Organized</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#722ed1', marginBottom: '8px' }}>
                                100+
                            </div>
                            <Text type="secondary">Medium Articles</Text>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Achievements;