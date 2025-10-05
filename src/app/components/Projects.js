'use client';
import { Typography, Card, Row, Col, Button, Tag, Space, Badge, Tooltip } from 'antd';
import {
    LinkOutlined,
    RobotOutlined,
    SafetyCertificateOutlined,
    DatabaseOutlined,
    TeamOutlined,
    CheckCircleOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Projects = () => {
    const featuredProjects = [
        {
            id: 1,
            title: "Autonomous Financial Analyst and Reporting Agent Network",
            subtitle: "Collaborative Multi-Agent Financial Research System",
            description: "Designed an MCP-driven Multi-Agent System (Planner, Analyst, Reporter) for sequential market research and reporting. Implemented Model Chaining where the Analyst agent critiqued and synthesized data retrieved by the Planner using dynamic tool-use. Utilized an MCP to standardize communication protocols and integrate custom tools for real-time financial data feeds. Reduced human latency in generating actionable reports by 60% while maintaining high traceability and autonomy.",
            category: "Multi-Agent Systems",
            status: "Private",
            year: "2024",
            technologies: ["MCP", "Multi-Agent Systems", "Model Chaining", "Agent Orchestration", "Tool Use", "Python"],
            features: [
                "MCP-driven Multi-Agent System architecture",
                "Sequential workflow with Planner, Analyst, Reporter agents",
                "Model Chaining for data critique and synthesis",
                "Real-time financial data feed integration",
                "60% reduction in report generation latency",
                "High traceability and autonomous operation"
            ],
            metrics: {
                impact: "60%",
                accuracy: "High",
                agents: 3
            },
            color: "#722ed1",
            icon: <RobotOutlined />
        },
        {
            id: 2,
            title: "Multimodal RAG for Compliance and Contract Verification",
            subtitle: "Multi-Modal Contract Analysis with Grounded RAG",
            description: "Engineered a Multimodal RAG pipeline to index text, tables (PDF images via OCR), and embedded video training materials. Utilized LangChain's indexing and retrieval modules with advanced reranking to optimize relevance across diverse document types. Implemented robust citation grounding, achieving 98% factual accuracy for critical compliance and contractual queries. Enhanced data integrity by converting unstructured data into traceable, verifiable knowledge assets.",
            category: "RAG & Multimodality",
            status: "Private",
            year: "2024",
            technologies: ["RAG", "LangChain", "Multimodal Embeddings", "OCR", "Indexing & Retrieval", "Grounding"],
            features: [
                "Multimodal RAG pipeline (text, tables, video)",
                "Advanced OCR for PDF table extraction",
                "LangChain indexing with intelligent reranking",
                "98% factual accuracy in compliance queries",
                "Robust citation grounding mechanism",
                "Unstructured to structured data conversion"
            ],
            metrics: {
                impact: "98%",
                accuracy: "Factual",
                modalities: "3+"
            },
            color: "#1890ff",
            icon: <SafetyCertificateOutlined />
        },
        {
            id: 3,
            title: "Contextual Customer Support Agent with Persistent Memory",
            subtitle: "State-Aware Customer Support Agent",
            description: "Developed a persistent-memory agent using LangChain's state management to maintain long-term conversation history and context across sessions. Integrated a proprietary RAG pipeline to answer complex product inquiries, with responses filtered for confidence thresholds. Used an LLM as a router (Agent) to dynamically choose between retrieval, external API tools, or internal knowledge base queries. Improved first-call resolution rate for technical inquiries by 30% through superior context retention and grounded responses.",
            category: "LangChain & Agents",
            status: "Private",
            year: "2024",
            technologies: ["LangChain", "RAG", "Agentic Routing", "Context Management", "Tool-Use", "Memory Systems"],
            features: [
                "Persistent memory across conversation sessions",
                "LangChain state management integration",
                "Proprietary RAG pipeline with confidence filtering",
                "Dynamic LLM routing for optimal responses",
                "30% improvement in first-call resolution",
                "Superior context retention mechanism"
            ],
            metrics: {
                impact: "30%",
                accuracy: "Resolution",
                sessions: "Multi"
            },
            color: "#52c41a",
            icon: <TeamOutlined />
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
                        <Badge count={project.status} style={{ backgroundColor: '#666' }} />
                        <Badge count={project.year} style={{ backgroundColor: project.color }} />
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
                        lineHeight: '1.6',
                        marginBottom: '16px'
                    }}
                >
                    {project.description}
                </Paragraph>

                {/* Features */}
                <div style={{ marginBottom: '16px' }}>
                    <Text strong style={{ color: 'var(--text-primary)', fontSize: '12px' }}>Key Features:</Text>
                    <ul style={{ marginTop: '6px', paddingLeft: '16px', margin: '6px 0' }}>
                        {project.features.slice(0, 4).map((feature, index) => (
                            <li key={index} style={{
                                color: 'var(--text-secondary)',
                                fontSize: '12px',
                                marginBottom: '4px'
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
                        {project.technologies.map((tech, index) => (
                            <Tag key={index} size="small" style={{ margin: '2px', fontSize: '11px' }}>
                                {tech}
                            </Tag>
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                <Space style={{ marginBottom: '16px', justifyContent: 'space-between', width: '100%' }}>
                    <Space size="small">
                        <Tooltip title="Impact Metric">
                            <Space size={2}>
                                <ThunderboltOutlined style={{ color: '#fadb14' }} />
                                <Text style={{ fontSize: '12px' }}>{project.metrics.impact} Impact</Text>
                            </Space>
                        </Tooltip>
                        <Tooltip title="Accuracy">
                            <Space size={2}>
                                <CheckCircleOutlined style={{ color: '#52c41a' }} />
                                <Text style={{ fontSize: '12px' }}>{project.metrics.accuracy}</Text>
                            </Space>
                        </Tooltip>
                    </Space>
                </Space>

                {/* Private Project Badge */}
                <div style={{
                    padding: '8px 12px',
                    background: '#f0f0f0',
                    borderRadius: '6px',
                    textAlign: 'center'
                }}>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        🔒 Private Repository - Proprietary Implementation
                    </Text>
                </div>
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
                    Cutting-edge AI projects showcasing expertise in Multi-Agent Systems, RAG, and LangChain
                </Paragraph>

                {/* Featured Projects */}
                <Row gutter={[24, 24]} style={{ marginBottom: '80px' }}>
                    {featuredProjects.map((project) => (
                        <Col xs={24} lg={12} xl={8} key={project.id}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>

                {/* Project Stats */}
                <Row gutter={[24, 24]} style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#722ed1', marginBottom: '8px' }}>
                                3
                            </div>
                            <Text type="secondary">Advanced AI Projects</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff', marginBottom: '8px' }}>
                                98%
                            </div>
                            <Text type="secondary">Peak Accuracy</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#52c41a', marginBottom: '8px' }}>
                                60%
                            </div>
                            <Text type="secondary">Efficiency Improvement</Text>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={{ padding: '20px' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fa8c16', marginBottom: '8px' }}>
                                100%
                            </div>
                            <Text type="secondary">Production Ready</Text>
                        </div>
                    </Col>
                </Row>

                {/* Technology Focus */}
                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    marginTop: '40px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)'
                }}>
                    <Title level={3} style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
                        Core Technology Stack
                    </Title>
                    <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                        Specialized in building production-grade AI systems with modern frameworks and architectures
                    </Paragraph>
                    <Space wrap size="middle" style={{ justifyContent: 'center' }}>
                        <Tag color="#722ed1" style={{ padding: '8px 16px', fontSize: '14px' }}>Multi-Agent Systems</Tag>
                        <Tag color="#1890ff" style={{ padding: '8px 16px', fontSize: '14px' }}>RAG Pipelines</Tag>
                        <Tag color="#52c41a" style={{ padding: '8px 16px', fontSize: '14px' }}>LangChain</Tag>
                        <Tag color="#fa8c16" style={{ padding: '8px 16px', fontSize: '14px' }}>Model Chaining</Tag>
                        <Tag color="#eb2f96" style={{ padding: '8px 16px', fontSize: '14px' }}>MCP Protocol</Tag>
                        <Tag color="#13c2c2" style={{ padding: '8px 16px', fontSize: '14px' }}>Multimodal AI</Tag>
                    </Space>
                </div>
            </div>
        </section>
    );
};

export default Projects;