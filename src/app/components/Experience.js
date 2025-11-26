
import { Typography, Timeline, Card, Row, Col, Tag, Space } from 'antd';
import {
    CalendarOutlined,
    CodeOutlined,
    CloudOutlined,
    RobotOutlined,
    StarOutlined,
    BookOutlined,
    TrophyOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Experience = () => {
    const educationData = [
        {
            degree: "Master's in Computer Science (AI/ML)",
            institution: "MILA, University of Montreal",
            period: "2024 - Present",
            location: "Montreal, Canada",
            description: "Exploring frontiers of Generative AI, Responsible AI, and Agentic systems. Research focus on multi-agent frameworks and ethical AI implementations.",
            highlights: ["Women in AI Scholarship Recipient", "Research in Generative AI", "Agentic Systems"],
            icon: <BookOutlined />,
            color: "#1890ff"
        },
        {
            degree: "Bachelor's in Computer Science & Engineering",
            institution: "M. Kumarasamy College of Engineering",
            period: "2020 - 2024",
            location: "Tamil Nadu, India",
            description: "Graduated with honors, focusing on AI, Machine Learning, and Cloud Computing. Active in technical communities and leadership roles.",
            highlights: ["Best Outgoing Student 2024", "GDSC Lead", "Dean's List"],
            icon: <StarOutlined />,
            color: "#52c41a"
        }
    ];

    const workExperience = [
        {
            title: "Data Scientist",
            company: "Bell Canada",
            period: "Aug 2025 - Present",
            location: "Montreal, Canada",
            description: "Built intelligent systems bridging research and real-world impact. Developed predictive models for customer analytics and network optimization.",
            technologies: ["Python", "R", "Scikit-learn", "PostgreSQL", "Tableau"],
            achievements: ["Increased prediction accuracy by 35%", "Automated 50+ manual processes", "Published 3 research papers"],
            icon: <CodeOutlined />,
            color: "#eb2f96"
        },
        {
            title: "Cloud Consultant",
            company: "Amazon Web Services (AWS)",
            period: "May 2025 - Jul 2025",
            location: "Toronto, Canada",
            description: "Specialized in cloud-native AI solutions and MLOps implementations. Helped enterprise clients migrate ML workloads to cloud and optimize their AI infrastructure.",
            technologies: ["AWS SageMaker", "Lambda", "EC2", "S3", "Kubernetes"],
            achievements: ["Managed 15+ client projects", "99.9% uptime achieved", "Cost optimization of 30%"],
            icon: <CloudOutlined />,
            color: "#fa8c16"
        },
        {
            title: "Generative AI Engineer",
            company: "Certkor.ai",
            period: "Jan 2025 - Apr 2025",
            location: "Remote",
            description: "Designed and implemented scalable AI pipelines and multi-agent frameworks. Led development of conversational AI systems and automated content generation tools.",
            technologies: ["Python", "TensorFlow", "LangChain", "AWS", "Docker"],
            achievements: ["Improved model accuracy by 25%", "Reduced processing time by 40%", "Led team of 3 engineers"],
            icon: <RobotOutlined />,
            color: "#722ed1"
        }
    ];

    const TimelineItem = ({ data, type }) => (
        <div style={{
            background: 'var(--bg-primary)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            marginBottom: '16px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                    fontSize: '24px',
                    color: data.color,
                    marginTop: '4px',
                    minWidth: '24px'
                }}>
                    {data.icon}
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '12px' }}>
                        <Title level={4} style={{ margin: 0, color: 'var(--text-primary)' }}>
                            {type === 'education' ? data.degree : data.title}
                        </Title>
                        <Text strong style={{ color: data.color, fontSize: '16px' }}>
                            {type === 'education' ? data.institution : data.company}
                        </Text>
                    </div>

                    <Space style={{ marginBottom: '12px', flexWrap: 'wrap' }}>
                        <Tag icon={<CalendarOutlined />} color="blue">{data.period}</Tag>
                        <Tag icon={<EnvironmentOutlined />} color="green">{data.location}</Tag>
                    </Space>

                    <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        {data.description}
                    </Paragraph>

                    {type === 'work' && data.technologies && (
                        <div style={{ marginBottom: '12px' }}>
                            <Text strong style={{ color: 'var(--text-primary)' }}>Technologies: </Text>
                            {data.technologies.map((tech, index) => (
                                <Tag key={index} style={{ margin: '2px' }}>{tech}</Tag>
                            ))}
                        </div>
                    )}

                    <div>
                        <Text strong style={{ color: 'var(--text-primary)' }}>
                            {type === 'education' ? 'Highlights:' : 'Key Achievements:'}
                        </Text>
                        <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                            {(type === 'education' ? data.highlights : data.achievements).map((item, index) => (
                                <li key={index} style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="experience" style={{
            padding: '80px 0',
            background: 'var(--bg-secondary)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    color: 'var(--text-primary)'
                }}>
                    Education & Experience
                </Title>

                <Row gutter={[32, 32]}>
                    {/* Education Section */}
                    <Col xs={24} lg={12}>
                        <Card
                            title={
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <BookOutlined style={{ color: '#1890ff' }} />
                                    <span>Education</span>
                                </div>
                            }
                            variant="borderless"
                            style={{
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                height: '100%'
                            }}
                        >
                            <Timeline
                                mode="left"
                                items={educationData.map((edu, index) => ({
                                    dot: <div style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: edu.color,
                                        border: '3px solid var(--bg-primary)',
                                        boxShadow: `0 0 0 2px ${edu.color}`
                                    }} />,
                                    children: <TimelineItem data={edu} type="education" />
                                }))}
                            />
                        </Card>
                    </Col>

                    {/* Work Experience Section */}
                    <Col xs={24} lg={12}>
                        <Card
                            title={
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <CodeOutlined style={{ color: '#52c41a' }} />
                                    <span>Work Experience</span>
                                </div>
                            }
                            variant="borderless"
                            style={{
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                height: '100%'
                            }}
                        >
                            <Timeline
                                mode="left"
                                items={workExperience.map((work, index) => ({
                                    dot: <div style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: work.color,
                                        border: '3px solid var(--bg-primary)',
                                        boxShadow: `0 0 0 2px ${work.color}`
                                    }} />,
                                    children: <TimelineItem data={work} type="work" />
                                }))}
                            />
                        </Card>
                    </Col>
                </Row>

                {/* Career Summary Stats */}
                <Row gutter={[24, 24]} style={{ marginTop: '48px' }}>
                    <Col xs={12} sm={6}>
                        <div style={{ textAlign: 'center', padding: '24px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff' }}>4+</div>
                            <Text type="secondary">Years Experience</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ textAlign: 'center', padding: '24px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a' }}>15+</div>
                            <Text type="secondary">Projects Completed</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ textAlign: 'center', padding: '24px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fa8c16' }}>6</div>
                            <Text type="secondary">Certifications</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ textAlign: 'center', padding: '24px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#722ed1' }}>205+</div>
                            <Text type="secondary">Tech Talks</Text>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Experience;