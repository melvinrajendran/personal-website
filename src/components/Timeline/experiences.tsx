import React from 'react';

const experiences = [
  {
    organization: 'J.P. Morgan',
    roles: [
      {
        role: 'Software Engineer I',
        startDate: 'February 2025',
        endDate: 'Present',
        bullets: [
          'Develop low-latency, highly available Spring Boot microservices that power fixed-income electronic trading, enabling high-volume request-for-quote and order execution.',
          'Own technical production support for microservices that facilitate portfolio trading, performing incident root-cause analysis, driving remediation, and coordinating cross-team fixes to prevent recurrence.',
        ],
      },
    ],
  },
  {
    organization: 'PayPal',
    roles: [
      {
        role: 'Software Engineer Intern',
        startDate: 'May 2024',
        endDate: 'August 2024',
        bullets: [
          'Consolidated legacy Spring Boot microservices into a single service for retrieving and managing consumer and business credit account data. Shipped to production and cut p99 latency by removing intermediate service hops.',
          'Kept existing response contracts backward compatible so all downstream clients migrated without code changes, enabling a phased rollout with instant rollback to the legacy path.',
          'Reduced deployment overhead and retired redundant code through the consolidation, saving the team upgrade and maintenance work. Maintained unit and integration test coverage throughout the migration.',
        ],
      },
      {
        role: 'Software Engineer Intern',
        startDate: 'June 2023',
        endDate: 'August 2023',
        bullets: [
          'Built Credit Admin, an internal triage and remediation platform adopted by engineers and stakeholders to diagnose production issues across credit applications, accounts, and downstream services.',
          'Cut code required per feature implementation by standardizing on fully typed REST clients generated from OpenAPI/Swagger specs, eliminating hand-written request and response models.',
          'Piloted Next.js and tRPC at the firm, fetching data on the server to speed up page loads and implementing end-to-end type safety. Created a reference architecture for wider adoption among partner teams.',
          'Established an inner-source contribution model (contribution guides, PR templates, review process) enabling partner teams to ship features to the platform independently, removing the core maintainers as a delivery bottleneck.',
        ],
      },
      {
        role: 'Software Engineer Intern',
        startDate: 'May 2022',
        endDate: 'August 2022',
        bullets: [
          'Built the React UI and GraphQL integration for Choose Your Credit Offers, a page in PayPal checkout presenting credit financing options to users, shipping to production with Jest test coverage across all user flows.',
          'Revamped the internal tool engineers use to create test customer profiles and simulate credit acquisition scenarios, adding sensible defaults and reusable profiles that cut test data setup time.',
        ],
      },
    ],
  },
];

export default experiences;
