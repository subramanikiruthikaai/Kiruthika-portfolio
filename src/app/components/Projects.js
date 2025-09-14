'use client';
import { Typography, Card, Row, Col, Button, Tag, Space, Image, Badge, Tooltip } from 'antd';
import {
    GithubOutlined,
    LinkOutlined,
    PlayCircleOutlined,
    StarOutlined,
    ForkOutlined,
    EyeOutlined,
    RobotOutlined,
    CloudOutlined,
    DatabaseOutlined,
    CodeOutlined,
    BranchesOutlined,
    TeamOutlined,
    GlobalOutlined,
    ThunderboltOutlined,
    SafetyCertificateOutlined,
    ExperimentOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Projects = () => {
    const featuredProjects = [
        {
            id: 1,
            title: "Multi-Agent AI Framework",
            subtitle: "Scalable AI Agent Orchestration System",
            description: "A comprehensive framework for building and deploying multi-agent AI systems with advanced coordination, communication protocols, and scalable architecture for enterprise applications.",
            longDescription: "This project addresses the growing need for coordinated AI systems that can work together to solve complex problems. The framework includes agent discovery, load balancing, fault tolerance, and real-time monitoring capabilities.",
            category: "AI/ML",
            status: "Active",
            year: "2024",
            thumbnail: "/api/placeholder/400/250",
            technologies: ["Python", "FastAPI", "Redis", "Docker", "Kubernetes", "TensorFlow", "gRPC"],
            features: [
                "Dynamic agent discovery and registration",
                "Load balancing across agent instances",
                "Real-time communication protocols",
                "Fault tolerance and recovery mechanisms",
                "Comprehensive monitoring dashboard",
                "RESTful API with authentication"
            ],
            metrics: {
                stars: 1247,
                forks: 203,
                issues: 12,
                contributors: 8
            },
            links: {
                github: "https://github.com/Kiruthika162003/multi-agent-framework",
                demo: "https://demo.multi-agent.dev",
                docs: "https://docs.multi-agent.dev"
            },
            color: "#1890ff",
            icon: <RobotOutlined />
        },
        {
            id: 2,
            title: "Sustainable AI Aviation Analytics",
            subtitle: "Winner - Bombardier & TCS Challenge",
            description: "AI-powered solution for optimizing aviation fuel consumption and reducing carbon emissions through predictive analytics and real-time flight optimization algorithms.",
            longDescription: "This award-winning project combines machine learning with aviation domain expertise to create actionable insights for sustainable aviation. The system processes real-time flight data to optimize routes and reduce environmental impact.",
            category: "Climate Tech",
            status: "Completed",
            year: "2024",
            thumbnail: "/api/placeholder/400/250",
            technologies: ["Python", "scikit-learn", "Apache Kafka", "React", "AWS", "PostgreSQL"],
            features: [
                "Real-time flight data processing",
                "Predictive fuel consumption models",
                "Route optimization algorithms",
                "Carbon footprint tracking",
                "Interactive analytics dashboard",
                "Integration with aviation APIs"
            ],
            metrics: {
                stars: 892,
                forks: 156,
                issues: 5,
                contributors: 4
            },
            links: {
                github: "https://github.com/Kiruthika162003/sustainable-aviation-ai",
                demo: "https://aviation-analytics.vercel.app",
                docs: "https://docs.aviation-ai.com"
            },
            color: "#52c41a",
            icon: <GlobalOutlined />
        },
        {
            id: 3,
            title: "Responsible AI Toolkit",
            subtitle: "Ethics-First AI Development Framework",
            description: "Open-source toolkit for building ethical AI systems with built-in bias detection, fairness metrics, explainability features, and comprehensive audit trails.",
            longDescription: "As AI systems become more prevalent, ensuring they are fair, transparent, and ethical is crucial. This toolkit provides developers with the tools they need to build responsible AI systems from the ground up.",
            category: "AI Ethics",
            status: "Active",
            year: "2023",
            thumbnail: "/api/placeholder/400/250",
            technologies: ["Python", "PyTorch", "Streamlit", "MLflow", "MongoDB", "Docker"],
            features: [
                "Automated bias detection algorithms",
                "Fairness metrics calculation",
                "Model explainability tools",
                "Audit trail generation",
                "Interactive bias visualization",
                "Integration with popular ML frameworks"
            ],
            metrics: {
                stars: 2156,
                forks: 387,
                issues: 23,
                contributors: 15
            },
            links: {
                github: "https://github.com/Kiruthika162003/responsible-ai-toolkit",
                demo: "https://responsible-ai.streamlit.app",
                docs: "https://responsible-ai-toolkit.readthedocs.io"
            },
            color: "#722ed1",
            icon: <SafetyCertificateOutlined />
        },
        {
            id: 4,
            title: "GenAI Content Pipeline",
            subtitle: "Automated Content Generation System",
            description: "Enterprise-grade content generation pipeline using state-of-the-art language models with custom fine-tuning, quality control, and multi-modal output support.",
            longDescription: "This system helps organizations automate their content creation workflows while maintaining quality and brand consistency. It supports text, image, and video generation with advanced customization options.",
            category: "Generative AI",
            status: "Active",
            year: "2023",
            thumbnail: "/api/placeholder/400/250",
            technologies: ["Python", "Transformers", "CUDA", "Redis", "PostgreSQL", "Next.js"],
            features: [
                "Multi-model content generation",
                "Custom fine-tuning pipelines",
                "Quality control mechanisms",
                "Brand consistency enforcement",
                "Batch processing capabilities",
                "RESTful API with rate limiting"
            ],
            metrics: {
                stars: 1689,
                forks: 234,
                issues: 18,
                contributors: 6
            },
            links: {
                github: "https://github.com/Kiruthika162003/genai-content-pipeline",
                demo: "https://genai-demo.vercel.app",
                docs: "https://genai-pipeline-docs.vercel.app"
            },
            color: "#fa8c16",
            icon: <ExperimentOutlined />
        }
    ];

    const smallerProjects = [
        {
            title: "AI Model Monitoring Dashboard",
            description: "Real-time monitoring and alerting system for ML models in production",
            tech: ["Python", "Grafana", "Prometheus"],
            stars: 456,
            color: "#13c2c2"
        },
        {
            title: "Natural Language to SQL",
            description: "Convert natural language queries to SQL using transformer models",
            tech: ["Python", "BERT", "SQLAlchemy"],
            stars: 678,
            color: "#eb2f96"
        },
        {
            title: "Federated Learning Framework",
            description: "Privacy-preserving machine learning across distributed datasets",
            tech: ["Python", "PyTorch", "gRPC"],
            stars: 789,
            color: "#f5222d"
        },
        {
            title: "AI-Powered Code Review",
            description: "Automated code review system using large language models",
            tech: ["Python", "OpenAI API", "GitHub API"],
            stars: 543,
            color: "#096dd9"
        },
        {
            title: "Smart Data Labeling Tool",
            description: "ML-assisted data annotation platform with active learning",
            tech: ["React", "Python", "TensorFlow"],
            stars: 321,
            color: "#389e0d"
        },
        {
            title: "Voice AI Assistant",
            description: "Custom voice assistant with domain-specific knowledge",
            tech: ["Python", "Speech Recognition", "NLP"],
            stars: 234,
            color: "#d48806"
        }
    ];

    const ProjectCard = ({ project }) => (
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
            cover={
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <Image
                        alt={project.title}
                        src={project.thumbnail}
                        style={{ height: '200px', objectFit: 'cover' }}
                        fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg=="
                    />
                    <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        display: 'flex',
                        gap: '8px'
                    }}>
                        <Badge count={project.status} style={{ backgroundColor: project.color }} />
                        <Badge count={project.year} style={{ backgroundColor: '#666' }} />
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        fontSize: '24px',
                        color: project.color,
                        background: 'rgba(255,255,255,0.9)',
                        padding: '8px',
                        borderRadius: '50%'
                    }}>
                        {project.icon}
                    </div>
                </div>
            }
        >
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '12px' }}>
                    <Title level={4} style={{ margin: 0, color: 'var(--text-primary)' }}>
                        {project.title}
                    </Title>
                    <Text type="secondary" style={{ fontSize: '14px' }}>
                        {project.subtitle}
                    </Text>
                </div>

                <Tag color={project.color} style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
                    {project.category}
                </Tag>

                <Paragraph
                    style={{
                        color: 'var(--text-secondary)',
                        flex: 1,
                        fontSize: '14px',
                        lineHeight: '1.5'
                    }}
                >
                    {project.description}
                </Paragraph>

                <div style={{ marginBottom: '16px' }}>
                    <Text strong style={{ color: 'var(--text-primary)', fontSize: '12px' }}>Tech Stack:</Text>
                    <div style={{ marginTop: '6px' }}>
                        {project.technologies.slice(0, 4).map((tech, index) => (
                            <Tag key={index} size="small" style={{ margin: '2px', fontSize: '11px' }}>
                                {tech}
                            </Tag>
                        ))}
                        {project.technologies.length > 4 && (
                            <Tag size="small" style={{ margin: '2px', fontSize: '11px' }}>
                                +{project.technologies.length - 4}
                            </Tag>
                        )}
                    </div>
                </div>

                <Space style={{ marginBottom: '16px', justifyContent: 'space-between', width: '100%' }}>
                    <Space size="small">
                        <Tooltip title="GitHub Stars">
                            <Space size={2}>
                                <StarOutlined style={{ color: '#fadb14' }} />
                                <Text style={{ fontSize: '12px' }}>{project.metrics.stars}</Text>
                            </Space>
                        </Tooltip>
                        <Tooltip title="Forks">
                            <Space size={2}>
                                <BranchesOutlined style={{ color: '#1890ff' }} />
                                <Text style={{ fontSize: '12px' }}>{project.metrics.forks}</Text>
                            </Space>
                        </Tooltip>
                        <Tooltip title="Contributors">
                            <Space size={2}>
                                <TeamOutlined style={{ color: '#52c41a' }} />
                                <Text style={{ fontSize: '12px' }}>{project.metrics.contributors}</Text>
                            </Space>
                        </Tooltip>
                    </Space>
                </Space>

                <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                    <Space>
                        <Tooltip title="View Code">
                            <Button size="small" icon={<GithubOutlined />} href={project.links.github} target="_blank" />
                        </Tooltip>
                        <Tooltip title="Live Demo">
                            <Button size="small" icon={<PlayCircleOutlined />} href={project.links.demo} target="_blank" />
                        </Tooltip>
                        <Tooltip title="Documentation">
                            <Button size="small" icon={<LinkOutlined />} href={project.links.docs} target="_blank" />
                        </Tooltip>
                    </Space>
                </Space>
            </div>
        </Card>
    );

    const SmallProjectCard = ({ project }) => (
        <Card
            variant="borderless"
            size="small"
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderLeft: `4px solid ${project.color}`,
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <Title level={5} style={{ margin: 0, color: 'var(--text-primary)' }}>
                    {project.title}
                </Title>
                <Space size={2}>
                    <StarOutlined style={{ color: '#fadb14', fontSize: '12px' }} />
                    <Text style={{ fontSize: '12px' }}>{project.stars}</Text>
                </Space>
            </div>

            <Paragraph style={{ color: 'var(--text-secondary)', margin: '8px 0', fontSize: '13px' }}>
                {project.description}
            </Paragraph>

            <div>
                {project.tech.map((tech, index) => (
                    <Tag key={index} size="small" color={project.color} style={{ margin: '2px', fontSize: '10px' }}>
                        {tech}
                    </Tag>
                ))}
            </div>
        </Card>
    );

    return (
        <section id="projects" style={{
            padding: '80px 0',
            background: 'var(--bg-primary)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: 'var(--text-primary)'
                }}>
                    🚀 Featured Projects
                </Title>

                <Paragraph style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    marginBottom: '60px',
                    color: 'var(--text-secondary)'
                }}>
                    Innovative AI solutions that bridge research and real-world applications,
                    focusing on scalability, ethics, and social impact.
                </Paragraph>

                {/* Featured Projects */}
                <Row gutter={[24, 24]} style={{ marginBottom: '80px' }}>
                    {featuredProjects.map((project) => (
                        <Col xs={24} lg={12} key={project.id}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>

                {/* Other Projects */}
                <Title level={3} style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    color: 'var(--text-primary)'
                }}>
                    💡 Other Notable Projects
                </Title>

                <Row gutter={[16, 16]} style={{ marginBottom: '60px' }}>
                    {smallerProjects.map((project, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <SmallProjectCard project={project} />
                        </Col>
                    ))}
                </Row>

                {/* GitHub CTA */}
                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)'
                }}>
                    <Title level={3} style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
                        Explore More on GitHub
                    </Title>
                    <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                        Discover additional projects, contributions, and open-source work on my GitHub profile.
                    </Paragraph>
                    <Button
                        type="primary"
                        size="large"
                        icon={<GithubOutlined />}
                        href="https://github.com/Kiruthika162003"
                        target="_blank"
                    >
                        View All Projects on GitHub
                    </Button>
                </div>

                {/* Project Stats */}
                <Row gutter={[24, 24]} style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff', marginBottom: '8px' }}>
                                25+
                            </div>
                            <Text type="secondary">Open Source Projects</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a', marginBottom: '8px' }}>
                                8.5K+
                            </div>
                            <Text type="secondary">Total GitHub Stars</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fa8c16', marginBottom: '8px' }}>
                                45+
                            </div>
                            <Text type="secondary">Contributors</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#722ed1', marginBottom: '8px' }}>
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

export default Projects;