export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: { label: string; value: string }[];
  architecture: string[];
  isRepresentative?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'gps-platform',
    title: 'High-Scale GPS Platform',
    subtitle: 'Real-time location processing infrastructure',
    description:
      'Backend infrastructure designed for high-frequency GPS tracking and real-time location processing. The system handles continuous device telemetry, processes location data through an optimized pipeline, and delivers real-time updates to monitoring dashboards.',
    tags: ['Node.js', 'Redis', 'PostgreSQL', 'WebSocket', 'Docker', 'AWS'],
    highlights: [
      { label: 'Throughput', value: '140+ req/s' },
      { label: 'Architecture', value: 'Event-driven' },
      { label: 'Processing', value: 'Real-time' },
    ],
    architecture: [
      'Devices',
      'API Gateway',
      'Processing Pipeline',
      'Redis Cache',
      'PostgreSQL',
      'Dashboard',
    ],
  },
  {
    id: 'saas-platform',
    title: 'Multi-Tenant SaaS Platform',
    subtitle: 'Enterprise SaaS with tenant isolation',
    description:
      'A multi-tenant SaaS platform with complete tenant isolation, role-based access control, subscription management, and a scalable API architecture designed for enterprise deployment.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Docker'],
    highlights: [
      { label: 'Architecture', value: 'Multi-tenant' },
      { label: 'Access Control', value: 'RBAC' },
      { label: 'Data', value: 'Tenant-isolated' },
    ],
    architecture: [
      'Client App',
      'API Layer',
      'Auth & RBAC',
      'Tenant Router',
      'PostgreSQL',
      'Redis',
    ],
    isRepresentative: true,
  },
  {
    id: 'ai-platform',
    title: 'AI Engineering Platform',
    subtitle: 'Production AI with RAG and agent workflows',
    description:
      'An AI-powered platform integrating large language models, retrieval-augmented generation, and agent-based workflows for automated document processing and intelligent search.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'React'],
    highlights: [
      { label: 'AI', value: 'LLM + RAG' },
      { label: 'Search', value: 'Vector-based' },
      { label: 'Pipelines', value: 'Agent workflows' },
    ],
    architecture: [
      'Documents',
      'Embedding Pipeline',
      'Vector Store',
      'LLM Reasoning',
      'Agent Orchestration',
      'User Interface',
    ],
    isRepresentative: true,
  },
];
