'use client';
import { Typography, Card, Row, Col, Button, Tag, Space, Badge, Tooltip } from 'antd';
import {
    GithubOutlined,
    LinkOutlined,
    PlayCircleOutlined,
    StarOutlined,
    ForkOutlined,
    BranchesOutlined,
    TeamOutlined,
    RobotOutlined,
    CloudOutlined,
    DatabaseOutlined,
    CodeOutlined,
    SafetyCertificateOutlined,
    ExperimentOutlined,
    BookOutlined,
    BulbOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Projects = () => {
    const featuredProjects = [
        {
            id: 1,
            title: "Clinical Risk Prediction System with LLM Integration",
            subtitle: "Multilingual Pregnancy Risk Scoring Pipeline",
            description: "Built an end-to-end pipeline for multilingual pregnancy risk scoring that improved diagnostic precision by 23%, reduced triage time by 40%, and enabled real-time voice-based feedback in 3 languages.",
            category: "Healthcare AI",
            status: "Active",
            year: "2024",
            technologies: ["Python", "LLMs", "NLP", "Voice Recognition", "Flask", "TensorFlow"],
            features: [
                "Multilingual risk assessment (3 languages)",
                "Real-time voice-based feedback system",
                "23% improvement in diagnostic precision",
                "40% reduction in patient triage time",
                "End-to-end clinical pipeline integration",
                "Advanced LLM integration for medical insights"
            ],
            metrics: {
                stars: 15,
                forks: 4,
                issues: 2,
                contributors: 1
            },
            links: {
                github: "https://github.com/Kiruthika162003",
                demo: null,
                docs: null
            },
            color: "#722ed1",
            icon: <SafetyCertificateOutlined />
        },
        {
            id: 2,
            title: "LLM–SciBERT Classification Pipeline",
            subtitle: "Research Paper Classification with 94% Accuracy",
            description: "Developed a hybrid model combining SciBERT embeddings and fine-tuned LLMs to classify research abstracts, achieving 94% accuracy and 90% F1-score across 10 classes, automating classification for 5,000+ papers.",
            category: "NLP Research",
            status: "Active",
            year: "2024",
            technologies: ["Python", "SciBERT", "Transformers", "PyTorch", "HuggingFace", "Pandas"],
            features: [
                "Hybrid SciBERT + LLM architecture",
                "94% classification accuracy achieved",
                "90% F1-score across 10 research categories",
                "Automated processing of 5,000+ research papers",
                "Fine-tuned transformer models",
                "Scalable research paper categorization"
            ],
            metrics: {
                stars: 28,
                forks: 8,
                issues: 1,
                contributors: 1
            },
            links: {
                github: "https://github.com/Kiruthika162003",
                demo: null,
                docs: null
            },
            color: "#1890ff",
            icon: <BulbOutlined />
        },
        {
            id: 3,
            title: "Medical Test Web Application",
            subtitle: "Multi-Disease Prediction Platform",
            description: "Comprehensive web application for predicting multiple diseases including Malaria, Pneumonia, Diabetes, Cancer, Heart disease, Liver disease, and Kidney disease using machine learning models.",
            category: "Healthcare ML",
            status: "Completed",
            year: "2020",
            technologies: ["Python", "Flask", "OpenCV", "Scikit-learn", "TensorFlow", "HTML", "CSS"],
            features: [
                "7 different disease prediction models",
                "Web-based interface for easy access",
                "Image analysis for Malaria and Pneumonia",
                "CSV datasets for training and validation",
                "Deployed on Heroku cloud platform",
                "Interactive forms for patient data input"
            ],
            metrics: {
                stars: 12,
                forks: 25,
                issues: 3,
                contributors: 1
            },
            links: {
                github: "https://github.com/Kiruthika162003/Medical-test-web-app",
                docs: null
            },
            color: "#52c41a",
            icon: <ExperimentOutlined />
        },
        {
            id: 4,
            title: "NHL Hockey Data Science Project",
            subtitle: "Advanced Sports Analytics with Interactive Visualizations",
            description: "Comprehensive NHL data analysis project using the NHL stats API for data acquisition, processing, and advanced visualizations including interactive shot maps and performance analytics.",
            category: "Data Science",
            status: "Completed",
            year: "2023",
            technologies: ["Python", "Pandas", "Plotly", "NHL API", "Jupyter", "Data Visualization"],
            features: [
                "NHL stats API integration and data caching",
                "Interactive debugging tools for play-by-play data",
                "Advanced shot maps and heatmap visualizations",
                "Exploratory data analysis with statistical insights",
                "Team and player performance analytics",
                "Comprehensive data processing pipeline"
            ],
            metrics: {
                stars: 6,
                forks: 2,
                issues: 0,
                contributors: 3
            },
            links: {
                github: "https://github.com/Kiruthika162003/IFT-6758B-Data-Science-Milestone-1",
                demo: null,
                docs: null
            },
            color: "#fa8c16",
            icon: <DatabaseOutlined />
        }
    ];

    const smallerProjects = [
        {
            title: "Responsible AI - Fairness Analysis",
            description: "Machine learning fairness evaluation and bias mitigation using Fairlearn library with demographic parity and equalized odds metrics",
            tech: ["Python", "Fairlearn", "Scikit-learn", "Jupyter"],
            stars: 3,
            color: "#13c2c2",
            github: "https://github.com/Kiruthika162003/Responsible-AI---Fairness"
        },
        {
            title: "Named Entity Recognition with BERT",
            description: "NER implementation using BERT achieving 78.5% F1-score, 81.2% precision on 838K+ entities across 17 categories",
            tech: ["Python", "BERT", "Transformers", "NLP"],
            stars: 8,
            color: "#eb2f96",
            github: "https://github.com/Kiruthika162003/Named-Entity-Recognition-NER-with-BERT"
        },
        {
            title: "Email Spam Classification",
            description: "Spam detection using TF-IDF vectorization and SVM on TREC 2007 and Enron datasets with high accuracy",
            tech: ["Python", "TF-IDF", "SVM", "Scikit-learn"],
            stars: 5,
            color: "#f5222d",
            github: "https://github.com/Kiruthika162003/Email-Spam-Classification"
        },
        {
            title: "IBM Watson Speech-to-Text",
            description: "Speech recognition implementation using IBM Watson API with real-time audio transcription capabilities",
            tech: ["Python", "IBM Watson", "Speech Recognition"],
            stars: 3,
            color: "#096dd9",
            github: "https://github.com/Kiruthika162003/-IBM-Watson-Speech-to-Text-"
        },
        {
            title: "Sentiment Analysis with NLTK",
            description: "Social media sentiment analysis tool for tweet classification into positive, negative, or neutral sentiments",
            tech: ["Python", "NLTK", "NLP", "Sentiment Analysis"],
            stars: 1,
            color: "#389e0d",
            github: "https://github.com/Kiruthika162003/Sentimental-Analysis-using-NLTK"
        },
        {
            title: "Additional AI Projects",
            description: "Collection of machine learning experiments, data processing scripts, and AI research implementations",
            tech: ["Python", "TensorFlow", "Data Science"],
            stars: 2,
            color: "#d48806",
            github: "https://github.com/Kiruthika162003"
        }
    ];

    const ProjectCard = ({ project }) => (
        <Card
            variant="borderless"
            style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                height: '100%',
                transition: 'all 0.3s ease'
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
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Project Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                }}>
                    <div style={{ flex: 1 }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '8px'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                color: project.color,
                                background: `${project.color}15`,
                                padding: '8px',
                                borderRadius: '8px'
                            }}>
                                {project.icon}
                            </div>
                            <div>
                                <Title level={4} style={{ margin: 0, color: 'var(--text-primary)' }}>
                                    {project.title}
                                </Title>
                                <Text type="secondary" style={{ fontSize: '14px' }}>
                                    {project.subtitle}
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Badge count={project.status} style={{ backgroundColor: project.color }} />
                        <Badge count={project.year} style={{ backgroundColor: '#666' }} />
                    </div>
                </div>

                <Tag color={project.color} style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
                    {project.category}
                </Tag>

                <Paragraph
                    style={{
                        color: 'var(--text-secondary)',
                        flex: 1,
                        fontSize: '14px',
                        lineHeight: '1.5',
                        marginBottom: '16px'
                    }}
                >
                    {project.description}
                </Paragraph>

                {/* Features */}
                <div style={{ marginBottom: '16px' }}>
                    <Text strong style={{ color: 'var(--text-primary)', fontSize: '12px' }}>Key Features:</Text>
                    <ul style={{ marginTop: '6px', paddingLeft: '16px', margin: '6px 0' }}>
                        {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index} style={{
                                color: 'var(--text-secondary)',
                                fontSize: '12px',
                                marginBottom: '2px'
                            }}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
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

                {/* Metrics */}
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

                {/* Action Buttons */}
                <Space style={{ justifyContent: 'flex-start', width: '100%' }}>
                    <Tooltip title="View Code">
                        <Button size="small" icon={<GithubOutlined />} href={project.links.github} target="_blank">
                            Code
                        </Button>
                    </Tooltip>
                    {project.links.demo && (
                        <Tooltip title="Live Demo">
                            <Button size="small" icon={<PlayCircleOutlined />} href={project.links.demo} target="_blank">
                                Demo
                            </Button>
                        </Tooltip>
                    )}
                    {project.links.docs && (
                        <Tooltip title="Documentation">
                            <Button size="small" icon={<LinkOutlined />} href={project.links.docs} target="_blank">
                                Docs
                            </Button>
                        </Tooltip>
                    )}
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
            onClick={() => window.open(project.github, '_blank')}
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
                    Open-source projects showcasing AI, machine learning, and software development expertise
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
                                20+
                            </div>
                            <Text type="secondary">Public Repositories</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a', marginBottom: '8px' }}>
                                5+
                            </div>
                            <Text type="secondary">Programming Languages</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fa8c16', marginBottom: '8px' }}>
                                100+
                            </div>
                            <Text type="secondary">Commits This Year</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#722ed1', marginBottom: '8px' }}>
                                10+
                            </div>
                            <Text type="secondary">Active Projects</Text>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Projects;