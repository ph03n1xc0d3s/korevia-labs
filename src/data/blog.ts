export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  isDraft: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-multi-tenant-saas-architecture',
    title: 'Designing Multi-Tenant SaaS Architecture',
    excerpt:
      'A practical guide to building multi-tenant systems with proper data isolation, tenant routing, and scalable database patterns.',
    date: '2026-09-15',
    readTime: '12 min',
    category: 'Architecture',
    tags: ['SaaS', 'PostgreSQL', 'Multi-tenancy', 'Architecture'],
    isDraft: true,
    content: `## Designing Multi-Tenant SaaS Architecture

*This is a draft article — content is representative and will be updated.*

Multi-tenancy is one of the most critical architectural decisions in SaaS development. The approach you choose affects data isolation, performance, cost, and operational complexity.

### Tenancy Models

There are three primary approaches to multi-tenancy:

**Shared Database, Shared Schema** — All tenants share the same tables with a \`tenant_id\` column. Simple to implement but requires careful query discipline.

**Shared Database, Separate Schema** — Each tenant gets their own database schema. Better isolation with moderate complexity.

**Separate Database** — Each tenant gets a dedicated database. Maximum isolation but highest operational overhead.

### Choosing the Right Model

The right model depends on your data sensitivity requirements, expected tenant count, and operational capacity. Most early-stage SaaS products start with shared schema and migrate as needed.

### Key Implementation Considerations

- Row-level security policies
- Tenant-aware connection pooling
- Cross-tenant query prevention
- Tenant-specific configuration
- Data export and portability

*Full article coming soon.*`,
  },
  {
    slug: 'building-production-ready-ai-agents',
    title: 'Building Production-Ready AI Agents',
    excerpt:
      'Moving AI agents from prototype to production requires structured reasoning, error handling, and human-in-the-loop design.',
    date: '2026-09-10',
    readTime: '15 min',
    category: 'AI Engineering',
    tags: ['AI', 'LLM', 'Agents', 'LangChain', 'Production'],
    isDraft: true,
    content: `## Building Production-Ready AI Agents

*This is a draft article — content is representative and will be updated.*

Most AI agent demos work impressively in controlled environments. Production deployment is a different challenge entirely.

### The Gap Between Demo and Production

Production AI agents need:

- **Structured error handling** — LLMs fail in unpredictable ways
- **Observability** — Token usage, latency, reasoning traces
- **Human-in-the-loop** — Escalation paths for uncertain outputs
- **Cost management** — Token budgets and model routing
- **Testing** — Evaluation frameworks beyond unit tests

### Agent Architecture Patterns

We typically structure agents around a core loop: Perceive → Reason → Act → Reflect. Each step has explicit failure modes and fallback strategies.

### Tool Design

The quality of an agent system depends heavily on tool design. Well-scoped, typed tools with clear descriptions outperform generic catch-all functions.

*Full article coming soon.*`,
  },
  {
    slug: 'postgresql-performance-engineering',
    title: 'PostgreSQL Performance Engineering',
    excerpt:
      'Practical techniques for query optimization, indexing strategies, and connection management in high-traffic PostgreSQL deployments.',
    date: '2026-09-05',
    readTime: '10 min',
    category: 'Backend',
    tags: ['PostgreSQL', 'Performance', 'Database', 'Backend'],
    isDraft: true,
    content: `## PostgreSQL Performance Engineering

*This is a draft article — content is representative and will be updated.*

PostgreSQL is remarkably capable out of the box, but high-traffic applications require deliberate performance engineering.

### Query Optimization

Start with \`EXPLAIN ANALYZE\`. Understand sequential scans, index scans, and bitmap heap scans. Most performance issues stem from missing indexes or poorly structured queries.

### Indexing Strategy

- B-tree indexes for equality and range queries
- GIN indexes for full-text search and JSONB
- Partial indexes for commonly filtered subsets
- Composite indexes aligned with query patterns

### Connection Management

Use PgBouncer or built-in connection pooling. Each PostgreSQL connection consumes ~10MB of memory. Unmanaged connection growth is a common source of production incidents.

*Full article coming soon.*`,
  },
  {
    slug: 'redis-patterns-for-scalable-applications',
    title: 'Redis Patterns for Scalable Applications',
    excerpt:
      'Caching strategies, session management, rate limiting, and pub/sub patterns using Redis in production systems.',
    date: '2026-08-28',
    readTime: '8 min',
    category: 'Backend',
    tags: ['Redis', 'Caching', 'Performance', 'Architecture'],
    isDraft: true,
    content: `## Redis Patterns for Scalable Applications

*This is a draft article — content is representative and will be updated.*

Redis is more than a cache. Used correctly, it becomes a critical piece of application infrastructure.

### Common Patterns

- **Cache-aside** — Read from cache, fall back to database, populate cache
- **Write-through** — Update cache on every write
- **Session storage** — Fast session reads without database pressure
- **Rate limiting** — Sliding window counters with INCR and EXPIRE
- **Distributed locks** — Coordinating access across multiple workers
- **Pub/Sub** — Real-time event broadcasting

### Cache Invalidation

The hardest problem in caching. Use TTL-based expiration for most cases. For critical data, implement explicit invalidation on write paths.

*Full article coming soon.*`,
  },
  {
    slug: 'when-to-use-go-vs-nodejs-vs-php',
    title: 'When to Use Go vs Node.js vs PHP',
    excerpt:
      'A practical comparison of Go, Node.js, and PHP for backend development — strengths, trade-offs, and when each makes sense.',
    date: '2026-08-20',
    readTime: '11 min',
    category: 'Engineering',
    tags: ['Go', 'Node.js', 'PHP', 'Backend', 'Architecture'],
    isDraft: true,
    content: `## When to Use Go vs Node.js vs PHP

*This is a draft article — content is representative and will be updated.*

Language choice matters less than most developers think, but it's not irrelevant. Each language has genuine strengths.

### PHP (with Symfony/Laravel)

Best for: Content-heavy applications, e-commerce, rapid CRUD development. Laravel's ecosystem is exceptionally productive for typical web applications.

### Node.js (with NestJS/Express)

Best for: Real-time applications, API-heavy systems, teams that want TypeScript across the stack. Event-driven architecture handles I/O-bound workloads efficiently.

### Go

Best for: High-concurrency services, infrastructure tooling, performance-critical APIs. Go's simplicity and compiled performance make it excellent for backend microservices.

### Our Approach

We choose the language based on the problem, not personal preference. Most projects benefit from a pragmatic, boring-technology approach.

*Full article coming soon.*`,
  },
  {
    slug: 'building-secure-apis',
    title: 'Building Secure APIs',
    excerpt:
      'Authentication, authorization, input validation, rate limiting, and security headers for production API development.',
    date: '2026-08-15',
    readTime: '9 min',
    category: 'Security',
    tags: ['API', 'Security', 'Authentication', 'Backend'],
    isDraft: true,
    content: `## Building Secure APIs

*This is a draft article — content is representative and will be updated.*

API security isn't a feature — it's a baseline requirement. Every public-facing API needs multiple layers of protection.

### Authentication

- JWT with short expiration and refresh tokens
- API key authentication for service-to-service
- OAuth 2.0 for third-party integrations

### Authorization

- Role-based access control (RBAC)
- Resource-level permissions
- Tenant isolation in multi-tenant systems

### Input Validation

Never trust client input. Validate types, ranges, formats, and sizes at the API boundary. Use schema validation libraries.

### Rate Limiting

Protect against abuse with per-user and per-IP rate limits. Implement sliding window counters with Redis.

*Full article coming soon.*`,
  },
  {
    slug: 'ai-automation-for-business-workflows',
    title: 'AI Automation for Business Workflows',
    excerpt:
      'Practical applications of AI in business process automation — document processing, customer support, and operational workflows.',
    date: '2026-08-10',
    readTime: '7 min',
    category: 'AI Engineering',
    tags: ['AI', 'Automation', 'Business', 'Workflows'],
    isDraft: true,
    content: `## AI Automation for Business Workflows

*This is a draft article — content is representative and will be updated.*

AI automation delivers the most value when applied to repetitive, high-volume tasks that currently require human judgment.

### High-Impact Use Cases

- **Document processing** — Extract structured data from invoices, contracts, and forms
- **Customer support** — AI-powered triage, suggested responses, and automated resolution
- **Data enrichment** — Augment CRM records with publicly available information
- **Content classification** — Automatically categorize and route incoming communications
- **Compliance checks** — Flag potential issues in documents and transactions

### Implementation Approach

Start with a single, well-defined workflow. Measure the current manual cost. Build an AI-assisted version with human oversight. Gradually reduce human involvement as confidence grows.

*Full article coming soon.*`,
  },
];
