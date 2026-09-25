import {
  Code2,
  Brain,
  Layers,
  Zap,
  Smartphone,
  Cloud,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  href: string;
  tags: string[];
  capabilities: string[];
}

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Custom Software',
    shortTitle: 'Software',
    description:
      'Web platforms, APIs, internal systems and business applications built for your specific requirements.',
    longDescription:
      'We build custom software that solves real business problems. From internal tools and operational dashboards to customer-facing web platforms, every system is designed around your workflow, data, and growth trajectory.',
    icon: Code2,
    href: '/services/software-development',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST', 'GraphQL'],
    capabilities: [
      'Web applications & platforms',
      'Internal business tools',
      'API design & development',
      'Database architecture',
      'Third-party integrations',
      'Legacy system modernization',
    ],
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    shortTitle: 'SaaS',
    description:
      'Multi-tenant SaaS architecture, billing, authentication, dashboards and integrations.',
    longDescription:
      'We architect and build SaaS platforms from the ground up — multi-tenancy, role-based access control, subscription billing, onboarding flows, analytics dashboards, and the API layer that powers it all.',
    icon: Layers,
    href: '/services/saas-development',
    tags: ['Multi-tenant', 'Stripe', 'RBAC', 'PostgreSQL', 'Redis', 'API'],
    capabilities: [
      'Multi-tenant architecture',
      'Subscription & billing systems',
      'Role-based access control',
      'Tenant isolation & data security',
      'Admin & analytics dashboards',
      'API-first platform design',
    ],
  },
  {
    id: 'ai-development',
    title: 'AI Engineering',
    shortTitle: 'AI',
    description:
      'AI agents, LLM integrations, RAG systems, document intelligence and AI-powered workflows.',
    longDescription:
      'We build production AI systems — not prototypes. From RAG pipelines and AI agents to document intelligence and automated reasoning, we integrate AI where it creates genuine operational value.',
    icon: Brain,
    href: '/services/ai-development',
    tags: ['OpenAI', 'Anthropic', 'LangChain', 'RAG', 'Vectors', 'Agents'],
    capabilities: [
      'AI agent development',
      'RAG system architecture',
      'LLM integration & fine-tuning',
      'Document intelligence',
      'AI-powered search',
      'Workflow automation with AI',
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    shortTitle: 'Automation',
    description:
      'Business process automation, API integrations, CRM automation and intelligent workflows.',
    longDescription:
      'We automate repetitive business processes, connect disparate systems through API integrations, and build intelligent workflows that reduce manual work and operational overhead.',
    icon: Zap,
    href: '/services/automation',
    tags: ['APIs', 'Webhooks', 'Queues', 'CRM', 'ETL', 'Workflows'],
    capabilities: [
      'Business process automation',
      'System & API integration',
      'CRM & sales automation',
      'Data pipeline automation',
      'Notification & alerting systems',
      'Scheduled task management',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    shortTitle: 'Mobile',
    description:
      'Cross-platform mobile applications and backend infrastructure.',
    longDescription:
      'We build cross-platform mobile applications with React Native, backed by robust API layers and cloud infrastructure. From consumer apps to enterprise mobile tools.',
    icon: Smartphone,
    href: '/services/mobile-development',
    tags: ['React Native', 'iOS', 'Android', 'APIs', 'Push', 'Offline'],
    capabilities: [
      'Cross-platform development',
      'Native iOS & Android',
      'Mobile API backends',
      'Push notifications',
      'Offline-first architecture',
      'App store deployment',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud',
    description:
      'Cloud infrastructure, Docker, CI/CD, observability, scaling and performance engineering.',
    longDescription:
      'We design, deploy, and manage cloud infrastructure. From containerized deployments and CI/CD pipelines to monitoring, scaling strategies, and performance optimization.',
    icon: Cloud,
    href: '/services/cloud-devops',
    tags: ['AWS', 'Docker', 'CI/CD', 'Nginx', 'Monitoring', 'Terraform'],
    capabilities: [
      'Cloud architecture & migration',
      'Container orchestration',
      'CI/CD pipeline design',
      'Infrastructure as code',
      'Monitoring & observability',
      'Performance engineering',
    ],
  },
];
