import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai",
    categoryName: "Artificial Intelligence",
    description: "Core AI engineering disciplines, generative model integration, intelligent pipelines, and automated creative production workflows.",
    icon: "Brain",
    skills: [
      {
        name: "Artificial Intelligence",
        description: "Designing and integrating intelligent logic, predictive modules, and data-driven systems.",
        tags: ["Core AI", "Algorithms", "Intelligence Systems"]
      },
      {
        name: "AI Development",
        description: "Implementing AI-powered features, REST API integrations, and model inference pipelines.",
        tags: ["Inference", "API Integration", "Python"]
      },
      {
        name: "AI Production",
        description: "Deploying AI workflows into studio environments, digital media, and automated content operations.",
        tags: ["Studio Pipelines", "Automation", "Batch Processing"]
      },
      {
        name: "Generative AI",
        description: "Harnessing modern Large Language Models and diffusion architectures for creative and analytical generation.",
        tags: ["LLMs", "Diffusion Models", "Prompt Engineering"]
      },
      {
        name: "AI Tools & Workflows",
        description: "Developing custom automation scripts, pipeline orchestration, and creative AI software integration.",
        tags: ["Workflows", "Tooling", "Pipeline Scripts"]
      }
    ]
  },
  {
    id: "programming",
    categoryName: "Programming & Development",
    description: "Full-stack software engineering foundations, backend logic, modern frontend architectures, and responsive user interfaces.",
    icon: "Code",
    skills: [
      {
        name: "Python",
        description: "Writing clean, object-oriented, and efficient Python code for scripting, AI algorithms, and backend services.",
        tags: ["Python 3", "OOP", "Data Structures", "Automation"]
      },
      {
        name: "Python Full-Stack Development",
        description: "End-to-end web architectures pairing Python backend frameworks with modern interactive frontends.",
        tags: ["Full-Stack", "FastAPI / Django", "REST APIs"]
      },
      {
        name: "Web Development",
        description: "Building responsive, modern, accessible, and high-performance web applications.",
        tags: ["React", "TypeScript", "HTML5", "CSS3 / Tailwind"]
      },
      {
        name: "Full-Stack Development",
        description: "Holistic engineering spanning database modeling, API development, state management, and UI design.",
        tags: ["Frontend", "Backend", "State Architecture"]
      },
      {
        name: "Website Development",
        description: "Creating client-facing web presences with strict attention to cross-browser compatibility and speed.",
        tags: ["Responsive Design", "UX/UI", "Performance"]
      }
    ]
  },
  {
    id: "ecommerce",
    categoryName: "E-Commerce & Platforms",
    description: "Specialized commerce engineering, digital storefront setup, custom themes, and complete online retail operations.",
    icon: "ShoppingBag",
    skills: [
      {
        name: "Shopify",
        description: "Comprehensive experience across the Shopify ecosystem, store architectures, and third-party ecosystems.",
        tags: ["Shopify Admin", "App Ecosystem", "Store Setup"]
      },
      {
        name: "Shopify Development",
        description: "Custom Liquid theme development, template modifications, schema settings, and custom cart features.",
        tags: ["Liquid", "Custom Sections", "Theme Customization"]
      },
      {
        name: "Shopify Management",
        description: "Managing live product catalogs, payment gateways, checkout policies, and customer journey analytics.",
        tags: ["Catalog Ops", "Payment Gateways", "Order Management"]
      },
      {
        name: "E-Commerce Platforms",
        description: "Building, optimizing, and maintaining multi-vendor or standalone digital commerce architectures.",
        tags: ["Conversion Rate", "Checkout Funnels", "Product Feeds"]
      }
    ]
  },
  {
    id: "hosting",
    categoryName: "Hosting & Deployment",
    description: "Infrastructure management, cloud hosting platforms, continuous deployment, and web maintenance.",
    icon: "Server",
    skills: [
      {
        name: "Hostinger",
        description: "Hands-on experience deploying, managing, and maintaining cloud and shared hosting environments on Hostinger.",
        tags: ["Hostinger Panel", "Server Config", "Resource Scaling"]
      },
      {
        name: "Website Hosting",
        description: "Configuring web servers, managing server environments, SSL certificates, and storage configurations.",
        tags: ["Server Config", "SSL / TLS", "Storage & Backups"]
      },
      {
        name: "Website Deployment",
        description: "End-to-end production launch workflows, continuous integration, DNS routing, and domain setups.",
        tags: ["DNS Routing", "Nameservers", "Live Launch", "CI/CD"]
      },
      {
        name: "Website Management",
        description: "Ongoing platform maintenance, uptime monitoring, security updates, and performance tuning.",
        tags: ["Uptime 99.9%", "Security Audits", "Performance Tuning"]
      }
    ]
  }
];
