export interface TechCategory {
  name: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'React Native'],
  },
  {
    name: 'Backend',
    items: ['PHP', 'Symfony', 'Laravel', 'Node.js', 'NestJS', 'Go'],
  },
  {
    name: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    name: 'Infrastructure',
    items: ['Docker', 'AWS', 'Nginx', 'CI/CD', 'RabbitMQ', 'SQS'],
  },
  {
    name: 'AI',
    items: ['OpenAI', 'Anthropic', 'LangChain', 'LangGraph', 'RAG', 'Vector DBs'],
  },
];
