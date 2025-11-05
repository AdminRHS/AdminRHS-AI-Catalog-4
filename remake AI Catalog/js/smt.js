// ==================== ICONS ====================
  const icons = {
    // Правые иконки (уже были SVG)
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    filter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
    edit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    
    // Иконки подписки
    lightning: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="subscription-icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    
    // 👇 ВОТ НОВЫЙ БРИЛЛИАНТ 👇
    diamond: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subscription-icon"><path d="M6 3h12l4 6-10 12L2 9l4-6Z"/><path d="M2 9h20"/><path d="m12 3-4 6 4 12 4-12-4-6Z"/></svg>`,
    
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="subscription-icon"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,

    // Иконки навигации (уже SVG, все в порядке)
    ai: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3L8 8l-5 2 5 2 2 5 2-5 5-2-5-2-2-5Z"/><path d="m18 13 2 3 3 1-3 1-2 3-2-3-3-1 3-1 2-3Z"/></svg>`,
    account: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    create: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    upload: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`
  };
    // ==================== DEPARTMENT ICONS ====================
    const departmentIcons = {
      'Developers': '🦗',
      'Managers': '🐈',
      'Marketers': '🦈',
      'Designers': '🦉',
      'All Departments': '🌎'
    };
    
const departmentLogos = {
  // 🔹 Departments
  'Developers': 'logo/developer.svg',
  'Managers': 'logo/manager.svg',
  'Marketers': 'logo/marketer.svg',
  'Designers': 'logo/designer.svg',
  'Videograph': 'logo/video.svg',

  // 🔹 Professions
  'Project Manager': 'logo/manager.svg',
  'Product Manager': 'logo/manager.svg',
  'Sales Manager': 'logo/manager.svg',
  'Content Manager': 'logo/marketer.svg',
  'SEO Manager': 'logo/marketer.svg',
  'PR Manager': 'logo/marketer.svg',
  'HR Manager': 'logo/manager.svg',
  'Financial Manager': 'logo/manager.svg',
  'Influencer Manager': 'logo/marketer.svg',

  'UI/UX Designer': 'logo/designer.svg',
  'Graphic Designer': 'logo/designer.svg',
  'Web Designer': 'logo/designer.svg',
  'Wordpress Designer': 'logo/designer.svg',

  'Front-end Developer': 'logo/developer.svg',
  'Back-end Developer': 'logo/developer.svg',
  'Full Stack Developer': 'logo/developer.svg',
  'System Administrator': 'logo/developer.svg',
  'DevOps Engineer': 'logo/developer.svg',
  'Mobile Developer': 'logo/developer.svg',

  // 🔹 Responsibilities
  'Write Code': 'logo/developer.svg',
  'Debug Software': 'logo/developer.svg',
  'Deploy Applications': 'logo/developer.svg',
  'Analyze Data': 'logo/manager.svg',
  'Manage Information': 'logo/manager.svg',
  'Create Presentations': 'logo/designer.svg',
  'Design Websites': 'logo/designer.svg',
  'Generate Images': 'logo/designer.svg',
  'Write Content': 'logo/marketer.svg',
  'Automate Workflows': 'logo/developer.svg',
  'Research Topics': 'logo/marketer.svg',
  'Summarize Documents': 'logo/manager.svg',
  'Source Assets': 'logo/designer.svg',

  // 🔹 Extra categories and tags
  'Automation': 'logo/developer.svg',
  'Design': 'logo/designer.svg',
  'Coding': 'logo/developer.svg',
  'AI Assistant': 'logo/manager.svg',
  'Productivity': 'logo/manager.svg',
  'Web Design': 'logo/designer.svg',
  'Programming': 'logo/developer.svg',
  'Tools': 'logo/manager.svg'
};





    // ==================== TOOL LOGOS ====================
    const toolLogos = {
  'n8n': {
    light: 'photo-light/n8n-color.png',
    dark: 'photo/n8n-color.png'
  },
  'Gamma': {
    light: 'photo-light/gammai.png',
    dark: 'photo/gammai-removebg-preview.png'
  },
  'MidJourney': {
    light: 'photo-light/midjourney.png',
    dark: 'photo/midjourney.png'
  },
  'GitHub Copilot': {
    light: 'photo-light/github_logo_icon.png',
    dark: 'photo/github_logo_icon.png'
  },
  'Envato Elements AI': {
    light: 'photo-light/Envato.png',
    dark: 'photo/Envato-removebg-preview.png'
  },
  'Dropbox Dash': {
    light: 'photo-light/Dropbox_Icon.svg.png',
    dark: 'photo/Dropbox_Icon.svg.png'
  },
  'Replit': {
    light: 'photo-light/replit.png',
    dark: 'photo/replit.png'
  },
  'Lovable': {
    light: 'photo-light/Lovable.png',
    dark: 'photo/Lovable.png'
  },
  'Bolt.new': {
    light: 'photo-light/bolts.png',
    dark: 'photo/bolts-removebg-preview.png'
  },
  'V0': {
    light: 'photo-light/faviconV2.png',
    dark: 'photo/faviconV2.png'
  },
  'Genspark': {
    light: 'photo-light/genspark-icon.png',
    dark: 'photo/genspark-icon.png'
  },
  'DeepSite': {
    light: 'photo-light/deepsite.png',
    dark: 'photo/deepsite.png'
  },
  'Cursor': {
    light: 'photo-light/faviconV2(1).png',
    dark: 'photo/faviconV2 (1).png'
  },
  'Claude Desktop': {
    light: 'photo-light/Claude_AL_symbol.svg.png',
    dark: 'photo/Claude_AL_symbol.svg.png'
  },
  'GPT': {
    light: 'photo-light/gpt.png',
    dark: 'photo/faviconV2.png'
  },
  'Gemini': {
    light: 'photo-light/Google_Gemin.png',
    dark: 'photo/Google_Gemin.png'
  },
  'Claude': {
    light: 'photo-light/Claude_AL_symbol.svg.png',
    dark: 'photo/Claude_AL_symbol.svg.png'
  },
  'Grok': {
    light: 'photo-light/grok.png',
    dark: 'photo/grok.png'
  },
  'AI Studio': {
    light: 'photo-light/aistudio.png',
    dark: 'photo/aistudio.png'
  },
  'NotebookLM': {
    light: 'photo-light/notebook.png',
    dark: 'photo/notebook.png'
  },
  'Notion': {
    light: 'photo-light/Notion-logo.svg.png',
    dark: 'photo/Notion-logo.svg.png'
  }
};


    // ==================== COURSE LINKS ====================
    const courseLinks = {
      'gamma': 'https://oa-y.com/courses/682ddd93006fec87d541ddfa',
      'notion': 'https://oa-y.com/courses/68d2b5f1b3a7f6de34087c1c',
      'cursor': 'https://oa-y.com/courses/6895eca862db728ad919c84e',
      'claude': 'https://oa-y.com/courses/689c982562db728ad91871e1',
      'claude desktop': 'https://oa-y.com/courses/689c982562db728ad91871e1',
      'github copilot': 'https://oa-y.com/courses/682d9578006fec87d53b3de6',
      'gpt': 'https://oa-y.com/courses/689c894d62db728ad912df36',
      'gemini': 'https://oa-y.com/courses/68133ec6238d49ed905cbc75',
      'grok': 'https://oa-y.com/courses/68132ec0238d49ed905c18bf',
      'notebooklm': 'https://oa-y.com/courses/68d12e5eb3a7f6de348e1761',
      'dropbox dash': 'https://oa-y.com/courses/689c3b9c62db728ad9f1f2a1'
    };

    // ==================== DATA - TOOLS ====================
    const tools = [
      {
        id: "tool-001",
        name: "n8n",
        url: "https://n8n.io/",
        category: ["Automation"],
        description: "Visual workflow automation platform with 400+ integrations for connecting apps and services.",
        keyFeatures: ["Visual workflow builder", "400+ integrations", "Self-hostable", "Custom functions", "API integration"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Added new AI nodes and improved performance for large workflows. Community edition remains free for self-hosting.",
        profession: ["Back-end Developer", "System Administrator", "Project Manager"],
        responsibility: ["Automate Workflows", "Write Code", "Manage Information"],
        department: ["Developers", "Managers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-002",
        name: "Gamma",
        url: "https://gamma.app/",
        category: ["Design"],
        description: "AI-powered presentation and website creation tool that generates content from text prompts.",
        keyFeatures: ["AI presentation generation", "Text-to-presentation", "Multi-format export", "Real-time collaboration", "Template library"],
        subscription: ["Freemium"],
        account: "sales@rh-s.com",
        lastUpdated: "2025-09-15",
        whatsNew: "Enhanced AI models for better content generation and added new export formats including video presentations.",
        profession: ["Project Manager", "Product Manager", "Content Manager", "Sales Manager"],
        responsibility: ["Create Presentations", "Design Websites", "Write Content"],
        department: ["Managers", "Marketers"],
        borderColor: "#dc3545"
      },
      {
        id: "tool-003",
        name: "MidJourney",
        url: "https://www.midjourney.com/",
        category: ["Design"],
        description: "Leading AI image generation platform for creating artistic and photorealistic images from text prompts.",
        keyFeatures: ["Photorealistic rendering", "Artistic styles", "Commercial usage rights", "Community gallery", "Style references"],
        subscription: ["Paid"],
        account: "niko@rh-s.com",
        lastUpdated: "2025-09-14",
        whatsNew: "V6.1 model released with improved hand rendering and better text generation within images.",
        profession: ["UI/UX Designer", "Content Manager", "Social Media Manager"],
        responsibility: ["Generate Images", "Source Assets"],
        department: ["Designers", "Marketers"],
        borderColor: "#6f42c1"
      },
      {
        id: "tool-009",
        name: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        category: ["Coding"],
        description: "AI pair programmer by GitHub that provides autocomplete-style suggestions from an AI model.",
        keyFeatures: ["Code Autocomplete", "Real-time suggestions", "Supports multiple languages", "Code explanation"],
        subscription: ["Paid"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-17",
        whatsNew: "Copilot Enterprise is now available, featuring chat within private repositories and enhanced security features.",
        profession: ["Back-end Developer", "Front-end Developer", "DevOps Engineer"],
        responsibility: ["Write Code", "Troubleshoot Issues"],
        department: ["Developers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-010",
        name: "Envato Elements AI",
        url: "https://elements.envato.com/ai",
        category: ["Design"],
        description: "AI image generator from Envato Elements, focused on generating high-quality commercial-use images.",
        keyFeatures: ["Commercial License", "High-quality Output", "Style Customization", "Integrated Asset Library"],
        subscription: ["Paid"],
        account: "niko@rh-s.com",
        lastUpdated: "2025-09-15",
        whatsNew: "New image upscaling feature that allows users to increase image resolution up to 4x while maintaining quality.",
        profession: ["UI/UX Designer", "Graphic Designer", "Content Manager"],
        responsibility: ["Generate Images", "Source Assets"],
        department: ["Designers", "Marketers"],
        borderColor: "#6f42c1"
      },
      {
        id: "tool-011",
        name: "Dropbox Dash",
        url: "https://www.dropbox.com/products/dash",
        category: ["Productivity"],
        description: "Dropbox Dash unifies your search across all apps, documents, and folders using AI.",
        keyFeatures: ["Universal Search", "AI Summarization", "Connects 3rd-party apps", "Organized Search results"],
        subscription: ["Paid"],
        account: "it-support@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "New 'Stack' feature for grouping related documents and a deeper integration with Notion and Asana.",
        profession: ["All Professionals"],
        responsibility: ["Manage Information", "Research Topics", "Summarize Documents"],
        department: ["All Departments"],
        borderColor: "#d63384"
      },
      {
        id: "tool-013",
        name: "Replit",
        url: "https://replit.com/",
        category: ["Web Design"],
        description: "Browser-based IDE with AI agents that build full-stack applications from natural language.",
        keyFeatures: ["AI-powered development", "Real-time collaboration", "Instant deployment", "Multiple frameworks", "Cloud hosting"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Launched Replit Agent 2.0 with improved code generation and better framework support.",
        profession: ["Full Stack Developer", "Front-end Developer", "Back-end Developer"],
        responsibility: ["Write Code", "Debug Software", "Deploy Applications", "Design Websites"],
        department: ["Developers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-014",
        name: "Lovable",
        url: "https://lovable.dev/",
        category: ["Web Design"],
        description: "AI-powered full-stack web application builder with GitHub integration and real-time rendering.",
        keyFeatures: ["Full-stack development", "GitHub sync", "Real-time rendering", "Component library", "Deployment automation"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-15",
        whatsNew: "Added support for serverless functions and improved React component generation.",
        profession: ["Full Stack Developer", "Web Designer"],
        responsibility: ["Write Code", "Deploy Applications", "Design Websites"],
        department: ["Developers", "Designers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-015",
        name: "Bolt.new",
        url: "https://bolt.new/",
        category: ["Web Design"],
        description: "AI web development platform for building full-stack applications with WebContainers technology.",
        keyFeatures: ["WebContainers technology", "Multiple frameworks", "Instant preview", "Code export", "AI assistance"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-14",
        whatsNew: "Updated pricing model and enhanced AI capabilities with GPT-4 Turbo integration.",
        profession: ["Full Stack Developer", "Front-end Developer"],
        responsibility: ["Write Code", "Debug Software", "Deploy Applications"],
        department: ["Developers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-016",
        name: "V0",
        url: "https://v0.dev/",
        category: ["Web Design"],
        description: "Vercel's AI-powered UI generator that creates React/Next.js components from natural language.",
        keyFeatures: ["React component generation", "Next.js integration", "Shadcn/ui components", "Tailwind CSS", "Production-ready code"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Enhanced component library and improved code quality with better TypeScript support.",
        profession: ["Front-end Developer", "UI/UX Designer"],
        responsibility: ["Write Code", "Design Websites"],
        department: ["Developers", "Designers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-017",
        name: "Genspark",
        url: "https://www.genspark.ai/",
        category: ["Web Design"],
        description: "Comprehensive Super Agent AI workspace for website building, presentations, and research.",
        keyFeatures: ["Multi-format creation", "Research capabilities", "Website building", "Presentation tools", "Content generation"],
        subscription: ["Freemium"],
        account: "lg@rh-s.com",
        lastUpdated: "2025-09-15",
        whatsNew: "Launched personal agents with GPT-4.1 and OpenAI Realtime API integration.",
        profession: ["Content Manager", "Project Manager", "Web Designer"],
        responsibility: ["Design Websites", "Create Presentations", "Research Topics", "Generate Images"],
        department: ["Marketers", "Managers", "Designers"],
        borderColor: "#d63384"
      },
      {
        id: "tool-018",
        name: "DeepSite",
        url: "https://deepsiteai.com/",
        category: ["Web Design"],
        description: "Affordable AI website generator powered by DeepSeek V3 with single HTML file output.",
        keyFeatures: ["Single HTML output", "Responsive design", "DeepSeek V3 powered", "No coding required", "Fast generation"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-13",
        whatsNew: "Integrated DeepSeek V3 model for improved website generation and added responsive templates.",
        profession: ["Web Designer", "Wordpress Designer"],
        responsibility: ["Design Websites", "Write Code"],
        department: ["Designers"],
        borderColor: "#6f42c1"
      },
      {
        id: "tool-019",
        name: "Cursor",
        url: "https://cursor.sh/",
        category: ["Programming"],
        description: "AI-first code editor with advanced completion and natural language editing capabilities.",
        keyFeatures: ["AI code completion", "Context-aware assistance", "Natural language editing", "Local file access", "Multiple AI models"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Enhanced security features and improved AI model performance with better context understanding.",
        profession: ["Back-end Developer", "Front-end Developer", "Full Stack Developer", "Mobile Developer"],
        responsibility: ["Write Code", "Debug Software", "Analyze Data"],
        department: ["Developers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-020",
        name: "Claude Desktop",
        url: "https://claude.ai/desktop",
        category: ["Programming"],
        description: "Desktop integration of Claude AI with local file access and Model Context Protocol support.",
        keyFeatures: ["Desktop integration", "Local file access", "Model Context Protocol", "Advanced reasoning", "Code analysis"],
        subscription: ["Freemium"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Added support for more file types and improved integration with development tools.",
        profession: ["Back-end Developer", "Front-end Developer", "Analyst", "Content Manager"],
        responsibility: ["Write Code", "Analyze Data", "Research Topics", "Manage Information"],
        department: ["Developers", "Managers", "Marketers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-022",
        name: "GPT",
        url: "https://openai.com/chatgpt",
        category: ["AI Assistant"],
        description: "OpenAI's flagship conversational AI with advanced reasoning, coding, and multimodal capabilities.",
        keyFeatures: ["Advanced reasoning", "Code generation", "Multimodal input", "Custom instructions", "Plugin ecosystem"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "GPT-5 preview released with enhanced reasoning and improved coding capabilities.",
        profession: ["Back-end Developer", "Content Manager", "Analyst", "Project Manager", "Copywriter"],
        responsibility: ["Write Code", "Debug Software", "Write Content", "Research Topics", "Analyze Data", "Automate Workflows"],
        department: ["Developers", "Marketers", "Managers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-023",
        name: "Gemini",
        url: "https://gemini.google.com/",
        category: ["AI Assistant"],
        description: "Google's AI assistant with deep workspace integration and extensive research capabilities.",
        keyFeatures: ["Google integration", "1M token context", "Workspace sync", "Research tools", "Multimodal capabilities"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Enhanced Google Workspace integration and improved research capabilities with real-time data access.",
        profession: ["Content Manager", "Analyst", "SEO Manager", "Project Manager"],
        responsibility: ["Write Content", "Research Topics", "Analyze Data", "Create Presentations", "Manage Information"],
        department: ["Marketers", "Managers"],
        borderColor: "#d63384"
      },
      {
        id: "tool-024",
        name: "Claude",
        url: "https://claude.ai/",
        category: ["AI Assistant"],
        description: "Anthropic's AI assistant excelling in coding performance and reasoning with extended thinking.",
        keyFeatures: ["Advanced reasoning", "Extended thinking", "Code analysis", "Long context", "Safety focus"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Claude 4 Sonnet released with improved reasoning capabilities and better code understanding.",
        profession: ["Back-end Developer", "Analyst", "Content Manager", "Project Manager"],
        responsibility: ["Write Code", "Debug Software", "Analyze Data", "Research Topics"],
        department: ["Developers", "Managers", "Marketers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-025",
        name: "Grok",
        url: "https://x.ai/",
        category: ["AI Assistant"],
        description: "X's AI assistant with real-time information access and unique personality for social media insights.",
        keyFeatures: ["Real-time data", "X platform integration", "Unfiltered responses", "Social insights", "Current events"],
        subscription: ["Paid"],
        account: "lg@rh-s.com",
        lastUpdated: "2025-09-15",
        whatsNew: "Enhanced real-time capabilities and improved social media trend analysis.",
        profession: ["Social Media Manager", "Content Manager", "PR Manager", "Influencer Manager"],
        responsibility: ["Write Content", "Research Topics", "Analyze Data"],
        department: ["Marketers"],
        borderColor: "#d63384"
      },
      {
        id: "tool-026",
        name: "AI Studio",
        url: "https://aistudio.google.com/",
        category: ["AI Assistant"],
        description: "Google's experimental AI platform providing free access to latest Gemini models without safety filters.",
        keyFeatures: ["Latest models", "No safety filters", "Free access", "Model tuning", "API access"],
        subscription: ["Free"],
        account: "dev@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Added support for Gemini 2.0 Flash and improved fine-tuning capabilities.",
        profession: ["Back-end Developer", "Graphic Designer", "Content Manager"],
        responsibility: ["Write Code", "Generate Images", "Create Presentations", "Design Websites"],
        department: ["Developers", "Designers", "Marketers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-027",
        name: "NotebookLM",
        url: "https://notebooklm.google.com/",
        category: ["AI Assistant"],
        description: "Google's research assistant specializing in document analysis with audio overview generation.",
        keyFeatures: ["Document analysis", "Audio overviews", "Citation tracking", "Research synthesis", "Source grounding"],
        subscription: ["Free"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-09-15",
        whatsNew: "Improved audio generation quality and added support for more document formats.",
        profession: ["Analyst", "Content Manager", "Project Manager", "Financial Manager"],
        responsibility: ["Research Topics", "Analyze Data", "Summarize Documents", "Manage Information"],
        department: ["Managers", "Marketers"],
        borderColor: "#dc3545"
      },
      {
        id: "tool-028",
        name: "Notion",
        url: "https://www.notion.so/",
        category: ["Tools"],
        description: "All-in-one workspace with AI-powered features for content creation and organization.",
        keyFeatures: ["AI writing assistant", "Database management", "Template library", "Collaboration tools", "Custom workflows"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-09-16",
        whatsNew: "Enhanced AI features with better content generation and improved database functionality.",
        profession: ["Project Manager", "Content Manager", "Analyst", "HR Manager"],
        responsibility: ["Create Presentations", "Write Content", "Manage Information", "Analyze Data"],
        department: ["Managers", "Marketers"],
        borderColor: "#dc3545"
      }
    ];

    // ==================== DATA - ACCOUNTS ====================
    const accounts = [
      {
        email: "niko@rh-s.com",
        toolNames: ["MidJourney", "Envato Elements AI"]
      },
      {
        email: "admin@rh-s.com",
        toolNames: ["GPT", "Gemini", "Claude", "NotebookLM", "Notion"]
      },
      {
        email: "dev@rh-s.com",
        toolNames: ["n8n", "GitHub Copilot", "Replit", "Lovable", "Bolt.new", "V0", "DeepSite", "Cursor", "Claude Desktop", "AI Studio"]
      },
      {
        email: "lg@rh-s.com",
        toolNames: ["Genspark", "Grok"]
      },
      {
        email: "sales@rh-s.com",
        toolNames: ["Gamma"]
      },
    ];

// ==================== STATE MANAGEMENT ====================
    let state = {
      theme: 'light',
      activeTab: 'catalog',
      searchQuery: '',
      filters: {
        category: [],
        department: [],
        profession: [],
        responsibility: [],
        subscription: []
      },
      isPanelOpen: false,
      openDropdown: null,
      selectedTool: null,
      isModalOpen: false,
      isSearchOpen: false,
      isEditMode: false,      // 👈 Для "режима дрожания"
      isEditMenuOpen: false // 👈 Для выпадающего меню
    };

    // ==================== HELPER FUNCTIONS ====================
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      state.theme = savedTheme || (prefersDark ? 'dark' : 'light');
      
      if (state.theme === 'dark') {
        document.body.classList.add('dark');
      }
    }

    function toggleTheme() {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      
      if (state.theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      
      localStorage.setItem('theme', state.theme);
      render(); // <-- Эта строка всё исправляет
    }

    function getAvailableFilters() {
      const filters = {
        category: new Set(),
        department: new Set(),
        profession: new Set(),
        responsibility: new Set(),
        subscription: new Set()
      };
      

      tools.forEach(tool => {
        tool.category.forEach(c => filters.category.add(c));
        tool.department.forEach(d => filters.department.add(d));
        tool.profession.forEach(p => filters.profession.add(p));
        tool.responsibility.forEach(r => filters.responsibility.add(r));
        tool.subscription.forEach(s => filters.subscription.add(s));
      });

      return {
        category: Array.from(filters.category).sort(),
        department: Array.from(filters.department).sort(),
        profession: Array.from(filters.profession).sort(),
        responsibility: Array.from(filters.responsibility).sort(),
        subscription: Array.from(filters.subscription).sort()
      };
    }

    function getFilteredTools() {
      return tools.filter(tool => {
        const searchLower = state.searchQuery.toLowerCase();
        const matchesSearch =
          state.searchQuery === '' ||
          tool.name.toLowerCase().includes(searchLower) ||
          tool.description.toLowerCase().includes(searchLower) ||
          tool.keyFeatures.some(f => f.toLowerCase().includes(searchLower));

        if (!matchesSearch) return false;

        for (const [filterKey, filterValues] of Object.entries(state.filters)) {
          if (filterValues.length > 0) {
            const toolData = tool[filterKey];
            const hasMatch = filterValues.some(val => toolData.includes(val));
            if (!hasMatch) return false;
          }
        }

        return true;
      });
    }

    function toggleFilter(group, value) {
      const index = state.filters[group].indexOf(value);
      if (index > -1) {
        state.filters[group].splice(index, 1);
      } else {
        state.filters[group].push(value);
      }
      render();
    }

    function clearFilterGroup(group) {
      state.filters[group] = [];
      render();
    }

    function clearAllFilters() {
      state.filters = {
        category: [],
        department: [],
        profession: [],
        responsibility: [],
        subscription: []
      };
      render();
    }

    function removeFilterChip(group, value) {
      const index = state.filters[group].indexOf(value);
      if (index > -1) {
        state.filters[group].splice(index, 1);
      }
      render();
    }

    function toggleDropdown(group) {
      state.openDropdown = state.openDropdown === group ? null : group;
      render();
    }

  function openModal(tool) {
  // если создаём новый тул — не выключаем edit mode
  if (tool === 'createTool') {
    state.selectedTool = 'createTool';
    state.isModalOpen = true;
    document.body.style.overflow = 'hidden';
    
    // 👉 добавляем модалку вручную, без полного render()
    document.body.insertAdjacentHTML('beforeend', renderModal());
    return;
  }

  // обычный режим (просмотр существующего)
  state.selectedTool = tool;
  state.isModalOpen = true;
  document.body.style.overflow = 'hidden';
  render();
}



function closeModal() {
  state.isModalOpen = false;
  document.body.style.overflow = '';

  setTimeout(() => {
    state.selectedTool = null;
    // ✅ не выключаем edit mode при закрытии
    render();
  }, 300);
}




    function handleToolClickFromAccount(toolName) {
      const tool = tools.find(t => 
        t.name.toLowerCase() === toolName.toLowerCase() ||
        toolName.toLowerCase().includes(t.name.toLowerCase()) ||
        t.name.toLowerCase().includes(toolName.toLowerCase())
      );

      if (tool) {
        state.activeTab = 'catalog';
        render();
        setTimeout(() => {
          openModal(tool);
        }, 150);
      }
    }

   // Close dropdowns/menus when clicking outside
document.addEventListener('click', (e) => {
  
  // Логика для фильтров
  if (!e.target.closest('.filter-dropdown')) {
    if (state.openDropdown) {
      state.openDropdown = null;
      render();
    }
  }

  // Логика для выпадающего Edit-меню
  if (!e.target.closest('.edit-toggle-btn') && !e.target.closest('.edit-menu')) {
    if (state.isEditMenuOpen) {
      state.isEditMenuOpen = false;
      render();
    }
  }
  
  // Логика для режима редактирования (jiggle mode)
  // Выключаем, если клик был НЕ по кнопке "Edit" И НЕ по кнопке "X" на карточке
  if (state.isEditMode && !e.target.closest('.edit-toggle-btn') && !e.target.closest('.card-delete-btn')) {
    state.isEditMode = false;
    render();
  }
});
    // Close modal on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.isModalOpen) {
        closeModal();
      }
    });

    // ==================== RENDER FUNCTIONS ====================
    function renderHeader() {
      return `
        <header class="header">
          <div class="header-title">
            <h1>AI Catalog</h1>
          </div>
          <div class="header-logo">
            <img 
              src="photo/any emploee logo.png" 
              alt="Any Employee"
            />
          </div>
        </header>
      `;
    }

function renderNavigation() {
  const themeIcon = state.theme === 'dark' ? icons.sun : icons.moon; // Используем SVG из объекта icons
  
  // Определяем, что должна делать главная кнопка "Edit"
  let mainEditAction = '';
  let mainEditTitle = '';
  let mainEditIcon = icons.edit;
  let mainEditClass = '';

  if (state.isEditMode) {
    // 1. Если мы в "режиме дрожания" (jiggle mode)
    mainEditAction = "state.isEditMode = false; render();"; // Кнопка "X" выключает режим
    mainEditTitle = "Done";
    mainEditIcon = icons.x;
    mainEditClass = 'active'; // Кнопка "X" будет "активной"
  } else if (state.isEditMenuOpen) {
    // 2. Если открыто выпадающее меню
    mainEditAction = "event.stopPropagation(); state.isEditMenuOpen = false; render();"; // Кнопка "X" закрывает меню
    mainEditTitle = "Close";
    mainEditIcon = icons.x;
    mainEditClass = 'active';
  } else {
    // 3. Если всё закрыто
    mainEditAction = "event.stopPropagation(); state.isEditMenuOpen = true; render();"; // Кнопка "Edit" открывает меню
    mainEditTitle = "Edit";
    mainEditIcon = icons.edit;
    mainEditClass = '';
  }

  return `
    <nav class="navigation">
      <div class="nav-content">

        <div class="nav-left">
          <button 
            class="nav-tab ${state.activeTab === 'catalog' ? 'active' : ''}"
            onclick="state.activeTab = 'catalog'; render();"
            title="AI Catalog"
          >
            <span class="nav-icon">${icons.ai}</span>
          </button>
          <button 
            class="nav-tab ${state.activeTab === 'accounts' ? 'active' : ''}"
            onclick="state.activeTab = 'accounts'; render();"
            title="Account Management"
          >
            <span class="nav-icon">${icons.account}</span>
          </button>
          <button 
            class="nav-tab"
            onclick="toggleTheme()"
            title="Toggle theme"
          >
            <span class="nav-icon" id="themeIcon">${themeIcon}</span>
          </button>
        </div>

        <div class="nav-right">
          <button 
            class="nav-tab ${state.isSearchOpen ? 'active' : ''}"
            onclick="state.isSearchOpen = !state.isSearchOpen; render();"
            title="Search"
          >
            <span class="nav-icon">${icons.search}</span>
          </button>
          <button 
            class="nav-tab ${state.isPanelOpen ? 'active' : ''}"
            onclick="state.isPanelOpen = !state.isPanelOpen; render();"
            title="Toggle Filters"
          >
            <span class="nav-icon">${icons.filter}</span>
          </button>

          <button 
            class="nav-tab edit-toggle-btn ${mainEditClass}"
            title="${mainEditTitle}"
            onclick="${mainEditAction}"
          >
            <span class="nav-icon">
              ${mainEditIcon}
            </span>
          </button>
${state.isEditMode ? `
  <button 
    class="nav-tab confirm-edit-btn"
    title="Confirm all changes"
    onclick="confirmAllChanges()"
  >
    <span class="nav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </span>
  </button>
` : ''}


          ${state.isEditMenuOpen ? `
          <div class="edit-menu" onclick="event.stopPropagation();">
            
            <button class="edit-menu-btn" title="Edit Item" 
              onclick="state.isEditMode = true; state.isEditMenuOpen = false; render();">
              <span class="nav-icon">${icons.edit}</span>
            </button>
            
            <button class="edit-menu-btn" title="Create New">
              <span class="nav-icon">${icons.create}</span>
            </button>
            <button class="edit-menu-btn" title="Upload">
              <span class="nav-icon">${icons.upload}</span>
            </button>
          </div>
          ` : ''}
          </div>
      </div>
    </nav>
  `;
}






function renderSearchAndFilter() {
  const availableFilters = getAvailableFilters();
  const filterLabels = {
    category: 'All Categories',
    department: 'All Departments',
    profession: 'All Professions',
    responsibility: 'All Responsibilities',
    subscription: 'All Subscription Types'
  };

  const totalSelected = Object.values(state.filters).flat().length;
  const allFilters = [];
  Object.entries(state.filters).forEach(([group, values]) => {
    values.forEach(value => {
      allFilters.push({ group, value });
    });
  });

  const getButtonLabel = (group) => {
    const count = state.filters[group].length;
    if (group === 'category') {
      if (count === 1) return state.filters[group][0];
      if (count > 1) return `Categories (${count})`;
      return 'All Categories';
    }
    return `${filterLabels[group]}${count > 0 ? ` (${count})` : ''}`;
  };

  return `
    <div class="search-filter">
      
      ${state.isSearchOpen ? `
      <div class="search-controls">
        <div class="search-wrapper">
          <span class="search-icon">${icons.search}</span>
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search by name, description, features..."
            value="${escapeHtml(state.searchQuery)}"
            oninput="state.searchQuery = this.value; render();"
            autofocus
          >
        </div>
      </div>
      ` : ''}

      <div class="filter-panel ${state.isPanelOpen ? 'open' : ''}">
        <div class="filter-panel-header">
          <h3 class="filter-panel-title">Filter Options</h3>
          <button class="filter-close-btn" onclick="state.isPanelOpen = false; render();">
            ${icons.x}
          </button>
        </div>

        <div class="filter-dropdowns">
          ${Object.entries(availableFilters).map(([group, values]) => {
            if (values.length === 0) return '';

            const isOpen = state.openDropdown === group;
            const selectedCount = state.filters[group].length;

            return `
              <div class="filter-dropdown">
                <button
                  class="filter-button ${isOpen ? 'open' : ''} ${selectedCount > 0 ? 'has-selections' : ''}"
                  onclick="event.stopPropagation(); toggleDropdown('${group}');"
                >
                  ${getButtonLabel(group)}
                  <span class="filter-arrow"></span>
                </button>

                <div class="filter-menu ${isOpen ? 'open' : ''}">
                  <div class="filter-menu-header">
                    <h4 class="filter-menu-title">
                      ${group === 'category' ? 'Select Category' : `Select ${filterLabels[group]}`}
                    </h4>
                    <button
                      class="filter-clear"
                      ${selectedCount === 0 ? 'disabled' : ''}
                      onclick="event.stopPropagation(); clearFilterGroup('${group}');"
                    >
                      Clear
                    </button>
                  </div>
                  <div class="filter-options">
                    ${values.map((value, index) => `
                      <button
                        class="filter-option ${state.filters[group].includes(value) ? 'selected' : ''}"
                        style="animation-delay: ${index * 0.03}s"
                        onclick="event.stopPropagation(); toggleFilter('${group}', '${escapeHtml(value)}');"
                      >
                        ${escapeHtml(value)}
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="active-filters ${totalSelected === 0 ? 'hidden' : ''}">
        <div class="active-filters-header">
          <h4 class="active-filters-title">Active Filters</h4>
          <button class="clear-all" onclick="clearAllFilters()">Clear All</button>
        </div>
        <div class="filter-chips">
          ${allFilters.map(({ group, value }) => `
            <div class="filter-chip">
              <span>${escapeHtml(value)}</span>
              <button
                class="chip-remove"
                onclick="removeFilterChip('${group}', '${escapeHtml(value)}');"
              >
                ×
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==================== FIX: ORDER OF TAGS FOR NOTION ====================
tools.forEach(tool => {
  if (tool.name === "Notion") {
    const idx = tool.responsibility.indexOf("Analyze Data");
    const marketersIdx = tool.department.indexOf("Marketers");

    // просто переставляем "Analyst" в professions — после Marketers
    const analystIdx = tool.profession.indexOf("Analyst");
    if (analystIdx !== -1) {
      tool.profession.splice(analystIdx, 1);
      const marketersProfIdx = tool.profession.indexOf("Marketers");
      if (marketersProfIdx !== -1) {
        tool.profession.splice(marketersProfIdx + 1, 0, "Analyst");
      } else {
        tool.profession.push("Analyst");
      }
    }
  }
});

function renderToolCard(tool, index) {
  // const subscriptionClass = `subscription-${tool.subscription[0].toLowerCase()}`; // ЭТА СТРОКА УДАЛЕНА
  const logoUrl =
  state.theme === 'dark'
    ? (toolLogos[tool.name]?.dark || toolLogos[tool.name]?.light)
    : (toolLogos[tool.name]?.light || toolLogos[tool.name]?.dark);

  const deptIcon = departmentIcons[tool.department[0]] || '';

// ==================== NEW: TAGS for CARD ====================
let tags = [
  ...tool.category.map(c => ({ label: c, color: '#667eea' })),      // фиолетовый
  ...tool.department.map(d => ({ label: d, color: '#28a745' })),    // зелёный
  ...tool.profession.map(p => ({ label: p, color: '#17a2b8' })),    // бирюзовый
  ...tool.responsibility.map(r => ({ label: r, color: '#0096E1' })) // синий
];

// 🔧 Если карточка Notion — переставляем Analyst и показываем 4 тега
if (tool.name === "Notion") {
  const analystIdx = tags.findIndex(t => t.label === "Analyst");
  const marketersIdx = tags.findIndex(t => t.label === "Marketers");
  if (analystIdx !== -1 && marketersIdx !== -1 && analystIdx > marketersIdx) {
    const [analystTag] = tags.splice(analystIdx, 1);
    tags.splice(marketersIdx + 1, 0, analystTag);
  }
}

// 🔹 Показываем по умолчанию 3 тега, а у Notion — 4
const maxVisibleTags = tool.name === "Notion" ? 4 : 3;
const visibleTags = tags.slice(0, maxVisibleTags);
const hiddenTags = tags.slice(maxVisibleTags);
const hiddenCount = hiddenTags.length;

const tagsHTML = [
  ...visibleTags.map(tag => {
    const logoPath = departmentLogos[tag.label];
    const iconHTML = logoPath
      ? `<img src="${logoPath}" alt="${tag.label}" class="tag-icon">`
      : '';
    return `
      <span class="tag" style="background:${tag.color};color:white;">
        ${iconHTML}
        ${escapeHtml(tag.label)}
      </span>
    `;
  }),
  ...hiddenTags.map(tag => {
    // --- Улучшенное определение иконки для тега ---
let logoPath = departmentLogos[tag.label];

// если точного совпадения нет — ищем по частичному названию
if (!logoPath) {
  const lower = tag.label.toLowerCase();
  if (lower.includes('developer') || lower.includes('engineer') || lower.includes('programmer'))
    logoPath = 'logo/developer.svg';
  else if (lower.includes('manager'))
    logoPath = 'logo/manager.svg';
  else if (lower.includes('designer'))
    logoPath = 'logo/designer.svg';
  else if (lower.includes('marketer') || lower.includes('marketing') || lower.includes('content') || lower.includes('seo') || lower.includes('social'))
    logoPath = 'logo/marketer.svg';
  else if (lower.includes('video') || lower.includes('film'))
    logoPath = 'logo/video.svg';
  else if (lower.includes('department') || lower.includes('team'))
    logoPath = 'logo/all.svg';
}

const iconHTML = logoPath
  ? `<img src="${logoPath}" alt="${tag.label}" class="tag-icon">`
  : '';

    return `
      <span class="tag hidden-tag" style="background:${tag.color};color:white;display:none;">
        ${iconHTML}
        ${escapeHtml(tag.label)}
      </span>
    `;
  })
].join('');

const moreBtnHTML = hiddenCount > 0
  ? `<button class="more-disabled-btn" onclick="toggleTags(this.closest('.tool-card'))">+${hiddenCount} more</button>`
  : '';

  // ==================== NEW: SUBSCRIPTION BADGE WITH ICONS ====================
  // Эта функция теперь просто выбирает класс, который задаст ЦВЕТ иконке
  let subscriptionBadgeHTML = '';
  switch (tool.subscription[0].toLowerCase()) {
    case 'freemium':
      subscriptionBadgeHTML = `<div class="subscription-badge subscription-freemium" title="Freemium">${icons.lightning}</div>`;
      break;
    case 'paid':
      subscriptionBadgeHTML = `<div class="subscription-badge subscription-paid" title="Paid">${icons.diamond}</div>`;
      break;
    case 'free':
      subscriptionBadgeHTML = `<div class="subscription-badge subscription-free" title="Free">${icons.lock}</div>`;
      break;
    default:
      // Запасной вариант, если подписка не 'freemium', 'paid' или 'free'
      subscriptionBadgeHTML = `<div class="subscription-badge">${escapeHtml(tool.subscription[0])}</div>`;
  }

  // ==================== CARD TEMPLATE ====================
  return `
    <div class="tool-card" style="border-color: ${tool.borderColor}; animation-delay: ${index * 50}ms">
      
      ${state.isEditMode ? `<button class="card-delete-btn" onclick="event.stopPropagation(); alert('Delete ${escapeHtml(tool.name)}?');">&times;</button>` : ''}

      ${subscriptionBadgeHTML}

      <div class="tool-card-content">
        <div class="tool-header">
          <div class="tool-logo" onclick='openModal(${JSON.stringify(tool)})'> 
            ${logoUrl 
              ? `<img src="${logoUrl}" alt="${escapeHtml(tool.name)} logo" />`
              : `<span class="tool-logo-placeholder">${tool.name[0]}</span>`
            }
          </div>
          <h3 class="tool-title" onclick='openModal(${JSON.stringify(tool)})'> 
            ${escapeHtml(tool.name)}
          </h3>
        </div>

        <div class="tool-description">
          ${escapeHtml(tool.description)}
        </div>

        <div class="tool-tags">
          ${tagsHTML}
          ${moreBtnHTML}
        </div>

        <div class="tool-meta">
          <div class="tool-updated">Updated: ${tool.lastUpdated}</div>
        </div>
      </div>
    </div>
  `;
}


// ==================== APPLY HOVER COLOR TO CARD ====================
function applyCardHoverColors() {
  document.querySelectorAll('.tool-card').forEach(card => {
    const borderColor = getComputedStyle(card).borderColor;
    // 40% прозрачности (0.4)
    const overlayColor = borderColor.replace('rgb', 'rgba').replace(')', ', 0.4)');
    card.style.setProperty('--hover-overlay-color', overlayColor);
  });
}


// ==================== TOGGLE TAGS ====================
function toggleTags(cardElement) {
  const grid = document.querySelector('.tool-grid');
  const opened = document.querySelector('.tool-card.expanded');
  let overlay = document.querySelector('.card-overlay');

  // создаём затемнение один раз
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'card-overlay';
    document.body.appendChild(overlay);
  }

  // если открыта другая карточка — закрываем её
  if (opened && opened !== cardElement) {
    const btn = opened.querySelector('.more-disabled-btn');
    const hiddenTags = opened.querySelectorAll('.hidden-tag');
    hiddenTags.forEach(tag => (tag.style.display = 'none'));
    opened.classList.remove('expanded', 'visible');
    opened.style.position = 'relative';
    opened.style.top = '';
    opened.style.left = '';
    opened.style.width = '';
    opened.style.zIndex = '';
    if (btn) btn.textContent = `+${hiddenTags.length} more`;
    overlay.classList.remove('visible');
  }

  const hiddenTags = cardElement.querySelectorAll('.hidden-tag');
  const moreBtn = cardElement.querySelector('.more-disabled-btn');
  if (!hiddenTags.length) return;

  const expanded = cardElement.classList.toggle('expanded');

  if (expanded) {
    // позиционирование карточки поверх сетки
    const rect = cardElement.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    const offsetTop = rect.top - gridRect.top + grid.scrollTop;
    const offsetLeft = rect.left - gridRect.left;
    const width = rect.width;

    // фиксируем позицию
    cardElement.style.position = 'absolute';
    cardElement.style.top = `${offsetTop}px`;
    cardElement.style.left = `${offsetLeft}px`;
    cardElement.style.width = `${width}px`;
    cardElement.style.zIndex = '1001';

    // делаем плавное появление карточки
    cardElement.classList.add('visible');
    overlay.classList.add('visible');

    hiddenTags.forEach((tag, i) => {
      tag.style.display = 'inline-flex';
      tag.style.animation = `fadeIn 0.25s ${i * 0.05}s forwards`;
    });
    moreBtn.textContent = 'Show less';

    // клик вне карточки закрывает её
    overlay.onclick = (e) => {
      if (!cardElement.contains(e.target)) {
        hiddenTags.forEach(tag => (tag.style.display = 'none'));
        cardElement.classList.remove('expanded', 'visible');
        cardElement.style.position = 'relative';
        cardElement.style.top = '';
        cardElement.style.left = '';
        cardElement.style.width = '';
        cardElement.style.zIndex = '';
        moreBtn.textContent = `+${hiddenTags.length} more`;
        overlay.classList.remove('visible');
      }
    };
  } else {
    // закрытие
    hiddenTags.forEach(tag => (tag.style.display = 'none'));
    cardElement.classList.remove('visible');
    cardElement.style.position = 'relative';
    cardElement.style.top = '';
    cardElement.style.left = '';
    cardElement.style.width = '';
    cardElement.style.zIndex = '';
    moreBtn.textContent = `+${hiddenTags.length} more`;
    overlay.classList.remove('visible');
  }
}

// === СОХРАНЕНИЕ НОВОГО ТУЛА ===
function saveNewTool() {
  // читаем значения
  const name = document.getElementById('newToolName')?.value.trim();
  const url = document.getElementById('newToolUrl')?.value.trim();
  const description = document.getElementById('newToolDescription')?.value.trim();
  const keyFeatures = document.getElementById('newToolKeyFeatures')?.value?.split(',').map(v => v.trim()).filter(Boolean) || [];
  const category = document.getElementById('newToolCategory')?.value?.split(',').map(v => v.trim()).filter(Boolean) || [];
  const department = document.getElementById('newToolDepartment')?.value?.split(',').map(v => v.trim()).filter(Boolean) || [];
  const profession = document.getElementById('newToolProfession')?.value?.split(',').map(v => v.trim()).filter(Boolean) || [];
  const responsibility = document.getElementById('newToolResponsibility')?.value?.split(',').map(v => v.trim()).filter(Boolean) || [];
  const subscription = document.getElementById('newToolSubscription')?.value || 'Freemium';
  const account = document.getElementById('newToolAccount')?.value.trim() || 'unknown@rh-s.com';
  const logoUrl = document.getElementById('newToolLogo')?.value?.trim();
  const modalImageUrl = document.getElementById('newToolModalImage')?.value?.trim();

  if (!name || !url || !description) {
    alert('Please fill out at least Name, URL, and Description.');
    return;
  }

  const newTool = {
    id: `tool-${String(tools.length + 1).padStart(3, '0')}`,
    name,
    url,
    category,
    description,
    keyFeatures,
    subscription: [subscription],
    account,
    lastUpdated: new Date().toISOString().split('T')[0],
    whatsNew: 'Newly added tool!',
    profession,
    responsibility,
    department,
    borderColor: '#808080'
  };

  if (logoUrl) {
    toolLogos[newTool.name] = {
      light: logoUrl,
      dark: logoUrl,
      modalImageUrl: modalImageUrl || ''
    };
  }

  tools.unshift(newTool);

  // очистка локального состояния тегов
  Object.keys(selectedTags).forEach(k => (selectedTags[k] = []));

  closeModal();
  render();
  alert(`✅ Tool "${newTool.name}" has been created!`);
}

// === ПОДТВЕРЖДЕНИЕ ВСЕХ ИЗМЕНЕНИЙ ===
function confirmAllChanges() {
  const confirmOverlay = document.createElement('div');
  confirmOverlay.className = 'confirm-overlay';
  confirmOverlay.innerHTML = `
    <div class="confirm-modal">
      <h3>Confirm changes?</h3>
      <p>Are you sure you want to apply all edits and exit editing mode?</p>
      <div class="confirm-buttons">
        <button class="confirm-btn cancel" onclick="closeConfirm()">Cancel</button>
        <button class="confirm-btn ok" onclick="applyChanges()">OK</button>
      </div>
    </div>
  `;
  document.body.appendChild(confirmOverlay);
}

function closeConfirm() {
  const modal = document.querySelector('.confirm-overlay');
  if (modal) modal.remove();
}

function applyChanges() {
  closeConfirm();
  state.isEditMode = false;
  state.isEditMenuOpen = false;
  render();
  alert("✅ All changes have been applied!");
}


    function renderToolGrid() {
  const filteredTools = getFilteredTools();

  // Если нет инструментов
  if (filteredTools.length === 0) {
    return `
      <div class="empty-state">
        <p>No tools found matching your criteria.</p>
        <p>Try adjusting your search or filters.</p>
      </div>
    `;
  }

  // === 🔹 Если включён режим редактирования — добавляем карточку с плюсом ===
  const addNewToolCard = state.isEditMode ? `
    <div class="tool-card add-tool-card" onclick="openModal('createTool')">
      <div class="add-tool-content">
        <div class="add-tool-icon">+</div>
        <div class="add-tool-text">Add New Tool</div>
      </div>
    </div>
  ` : '';

  // === 🔹 Рендерим сетку карточек ===
  return `
    <div class="tool-grid ${state.isEditMode ? 'edit-mode' : ''}">
      ${addNewToolCard}
      ${filteredTools.map((tool, index) => renderToolCard(tool, index)).join('')}
    </div>
  `;
}


    function renderModal() {
      if (state.selectedTool === 'createTool') {
  return `
    <div class="modal-overlay open" onclick="if(event.target === this) closeModal();">
      <div class="modal">
        <button class="modal-close" onclick="closeModal()">${icons.x}</button>
        <h2 class="modal-title">Add New Tool</h2>

        <!-- === LOGO UPLOAD === -->
        <div class="modal-section">
          <h3 class="modal-section-title">Card Logo</h3>
          <div id="logo-upload" class="upload-box" 
               ondragover="handleDragOver(event)" 
               ondragleave="handleDragLeave(event)"
               ondrop="handleFileDrop(event, 'logo')" 
               onclick="document.getElementById('logoFileInput').click()">
            <div id="logo-preview" class="upload-placeholder">+</div>
            <input type="file" id="logoFileInput" accept="image/*" style="display:none;" onchange="handleFileSelect(event, 'logo')">
          </div>
        </div>

        <!-- === MODAL BACKGROUND UPLOAD === -->
        <div class="modal-section">
          <h3 class="modal-section-title">Modal Background Image</h3>
          <div id="modal-upload" class="upload-box" 
               ondragover="handleDragOver(event)" 
               ondragleave="handleDragLeave(event)"
               ondrop="handleFileDrop(event, 'modal')" 
               onclick="document.getElementById('modalFileInput').click()">
            <div id="modal-preview" class="upload-placeholder">+</div>
            <input type="file" id="modalFileInput" accept="image/*" style="display:none;" onchange="handleFileSelect(event, 'modal')">
          </div>
        </div>
<!-- Скрытые input для выбора изображений -->
<input type="file" id="card-input" accept="image/*" style="display:none" onchange="previewImage(this.files[0], 'card')" />
<input type="file" id="modal-input" accept="image/*" style="display:none" onchange="previewImage(this.files[0], 'modal')" />

        <!-- === TOOL DETAILS === -->
        <div class="modal-section">
          <h3 class="modal-section-title">Tool Details</h3>
          <input id="newToolName" class="modal-input" placeholder="Tool Name" />
          <input id="newToolUrl" class="modal-input" placeholder="Website URL (e.g., https://example.com)" />
          <textarea id="newToolDescription" class="modal-textarea" placeholder="Description..."></textarea>
        </div>

        <!-- === TAGS === -->
        <div class="modal-section">
          <h3 class="modal-section-title">Tags</h3>

          <div class="tag-input-wrapper" data-field="keyFeatures">
            <label class="tag-label">Key Features</label>
            <div class="tag-container" id="keyFeatures-tags"></div>
            <input 
              type="text" id="keyFeatures-input" class="tag-input" placeholder="Add key feature..."
              oninput="handleTagInput(event, 'keyFeatures')"
              onkeydown="handleTagKeyDown(event, 'keyFeatures')" />
            <ul class="tag-suggestions" id="keyFeatures-suggestions"></ul>
          </div>

          <div class="tag-input-wrapper" data-field="category">
            <label class="tag-label">Category</label>
            <div class="tag-container" id="category-tags"></div>
            <input 
              type="text" id="category-input" class="tag-input" placeholder="Add category..."
              oninput="handleTagInput(event, 'category')"
              onkeydown="handleTagKeyDown(event, 'category')" />
            <ul class="tag-suggestions" id="category-suggestions"></ul>
          </div>

          <div class="tag-input-wrapper" data-field="department">
            <label class="tag-label">Department</label>
            <div class="tag-container" id="department-tags"></div>
            <input 
              type="text" id="department-input" class="tag-input" placeholder="Add department..."
              oninput="handleTagInput(event, 'department')"
              onkeydown="handleTagKeyDown(event, 'department')" />
            <ul class="tag-suggestions" id="department-suggestions"></ul>
          </div>

          <div class="tag-input-wrapper" data-field="profession">
            <label class="tag-label">Profession</label>
            <div class="tag-container" id="profession-tags"></div>
            <input 
              type="text" id="profession-input" class="tag-input" placeholder="Add profession..."
              oninput="handleTagInput(event, 'profession')"
              onkeydown="handleTagKeyDown(event, 'profession')" />
            <ul class="tag-suggestions" id="profession-suggestions"></ul>
          </div>

          <div class="tag-input-wrapper" data-field="responsibility">
            <label class="tag-label">Responsibility</label>
            <div class="tag-container" id="responsibility-tags"></div>
            <input 
              type="text" id="responsibility-input" class="tag-input" placeholder="Add responsibility..."
              oninput="handleTagInput(event, 'responsibility')"
              onkeydown="handleTagKeyDown(event, 'responsibility')" />
            <ul class="tag-suggestions" id="responsibility-suggestions"></ul>
          </div>
        </div>

        <!-- === ACCESS INFO === -->
        <div class="modal-section">
          <h3 class="modal-section-title">Access Information</h3>
          <input id="newToolAccount" class="modal-input" placeholder="Shared Account (e.g., dev@rh-s.com)" />
          <select id="newToolSubscription" class="modal-select">
            <option value="Freemium">Freemium</option>
            <option value="Paid">Paid</option>
            <option value="Free">Free</option>
          </select>
        </div>

        <!-- === ACTION BUTTONS === -->
        <div class="modal-actions">
          <button class="modal-button cancel" onclick="closeModal()">Cancel</button>
          <button class="modal-button primary" onclick="saveNewTool()">+ Create Tool</button>
        </div>
      </div>
    </div>
  `;
}


      if (!state.selectedTool) return '';

      const tool = state.selectedTool;
      const courseLink = courseLinks[tool.name.toLowerCase()] || 'https://oa-y.com/courses';
      const logoUrl =
  state.theme === 'dark'
    ? (toolLogos[tool.name]?.dark || toolLogos[tool.name]?.light)
    : (toolLogos[tool.name]?.light || toolLogos[tool.name]?.dark);


      return `
        <div class="modal-overlay ${state.isModalOpen ? 'open' : ''}" onclick="if(event.target === this) closeModal();">
          <div class="modal">
            <button class="modal-close" onclick="closeModal()">
              ${icons.x}
            </button>

            <h2 class="modal-title">${escapeHtml(tool.name)}</h2>

            <div class="modal-logo">
  <img 
    src="photo/shark.jpg" 
    alt="Shark" 
    class="modal-shark" 
  />
</div>




            <div class="modal-section">
              <h3 class="modal-section-title">Description</h3>
              <div class="modal-section-content">${escapeHtml(tool.description)}</div>
            </div>

            <div class="modal-section">
              <h3 class="modal-section-title">Key Features</h3>
              <div class="modal-tags">
                ${tool.keyFeatures.map(feature => `
                  <span class="modal-tag">${escapeHtml(feature)}</span>
                `).join('')}
              </div>
            </div>

            <div class="modal-section">
              <h3 class="modal-section-title">Relevant Professions</h3>
              <div class="modal-tags">
                ${tool.profession.map(prof => `
                  <span class="modal-tag">${escapeHtml(prof)}</span>
                `).join('')}
              </div>
            </div>

            <div class="modal-section">
              <h3 class="modal-section-title">Access Information</h3>
              <div class="modal-info-row">
                <span class="modal-info-label">Shared Account:</span>
                <span class="modal-info-value">${escapeHtml(tool.account)}</span>
              </div>
              <div class="modal-info-row">
                <span class="modal-info-label">Subscription:</span>
                <span class="modal-info-value">${escapeHtml(tool.subscription[0])}</span>
              </div>
            </div>

            <div class="modal-section">
              <h3 class="modal-section-title">Update Information</h3>
              <div class="modal-info-row">
                <span class="modal-info-label" style="font-weight: 600;">Last Updated:</span>
                <span class="modal-update-date">${tool.lastUpdated}</span>
              </div>
              ${tool.whatsNew ? `
                <div class="modal-whats-new">
                  <p><strong>What's New: </strong>${escapeHtml(tool.whatsNew)}</p>
                </div>
              ` : ''}
            </div>

            <div class="modal-actions">
              <a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener noreferrer" class="modal-button">
                Visit ${escapeHtml(tool.name)}
              </a>
              <button class="modal-button" onclick="alert('Press Ctrl/Cmd + D to bookmark ${escapeHtml(tool.name)}.')">
                Bookmark
              </button>
              <a href="${escapeHtml(courseLink)}" target="_blank" rel="noopener noreferrer" class="modal-button">
                Visit Course
              </a>
            </div>
          </div>
        </div>
      `;
    }

function renderAccountsView() {
  const groupedBySubscription = {
    Freemium: [
      "n8n", "Gamma", "Replit", "Lovable", "Bolt.new", "V0",
      "Genspark", "DeepSite", "Cursor", "Claude Desktop",
      "GPT", "Gemini", "Claude", "Notion"
    ],
    Paid: [
      "MidJourney", "GitHub Copilot", "Envato Elements AI",
      "Dropbox Dash", "Grok"
    ],
    Free: [
      "NotebookLM", "AI Studio"
    ]
  };

  if (!Array.isArray(accounts) || accounts.length === 0) {
    return `<p style="padding: 2rem; text-align: center; color: var(--muted-foreground);">
      No account data available
    </p>`;
  }

  const order = ["dev@rh-s.com", "admin@rh-s.com", "lg@rh-s.com"];

  const sortedAccounts = [...accounts].sort((a, b) => {
    const aEmail = a.email.toLowerCase();
    const bEmail = b.email.toLowerCase();
    const aIndex = order.indexOf(aEmail);
    const bIndex = order.indexOf(bEmail);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  });

  // 🔹 Отрисовка карточек
  return `
    <div class="tool-grid ${state.isEditMode ? 'edit-mode' : ''}">
      ${sortedAccounts.map((account, index) => {
        const freemiumTools = (account.toolNames || []).filter(name =>
          groupedBySubscription.Freemium.some(f => f.toLowerCase() === name.toLowerCase())
        );
        const paidTools = (account.toolNames || []).filter(name =>
          groupedBySubscription.Paid.some(f => f.toLowerCase() === name.toLowerCase())
        );
        const freeTools = (account.toolNames || []).filter(name =>
          groupedBySubscription.Free.some(f => f.toLowerCase() === name.toLowerCase())
        );

        // 🔹 функция иконки + подписи
        const renderToolIcon = (toolName) => {
          const tool = tools.find(t => t.name.toLowerCase() === toolName.toLowerCase());
          if (!tool) return '';
          const logoUrl =
            state.theme === 'dark'
              ? (toolLogos[tool.name]?.dark || toolLogos[tool.name]?.light)
              : (toolLogos[tool.name]?.light || toolLogos[tool.name]?.dark);

          return `
            <button 
              class="account-tool-btn-icon"
              onclick="handleToolClickFromAccount('${escapeHtml(tool.name)}')"
              title="${escapeHtml(tool.name)}"
            >
              <img 
            src="${logoUrl}" 
            alt="${escapeHtml(tool.name)} logo" 
            class="account-tool-icon"
          />
          </button>
          `;
        };

        // 🔹 функция категории
        const renderCategory = (title, tools, color) => {
          if (!tools.length) return "";
          return `
            <div class="account-category">
              <h4 class="account-category-title" style="color:${color};">${title}</h4>
              <div class="account-tools">
                ${tools.map(toolName => renderToolIcon(toolName)).join('')}
              </div>
            </div>
          `;
        };

        // 🔹 возвращаем разметку карточки
        return `
          <div class="account-card" style="animation-delay:${index * 60}ms">
            
            ${state.isEditMode ? `<button class="card-delete-btn" onclick="alert('Delete ${escapeHtml(account.email)}?');">&times;</button>` : ''}

            <div class="account-card-header">
              <h3>${escapeHtml(account.email)}</h3>
            </div>
            <div class="account-card-content">
              ${renderCategory("Freemium", freemiumTools, "#0096E1")}
              ${renderCategory("Paid", paidTools, "#d63384")}
              ${renderCategory("Free", freeTools, "#28a745")}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}


// ==================== MAIN RENDER FUNCTION ====================
function render() {
  const app = document.getElementById('app');
  let viewHtml = '';

  // 1. Определяем, какой контент показать (Catalog или Accounts)
  if (state.activeTab === 'catalog') {
    viewHtml = `
      ${renderSearchAndFilter()}
      ${renderToolGrid()}
    `;
  } else {
    viewHtml = renderAccountsView();
  }

  // 2. Полностью перерисовываем ВСЮ структуру приложения
  //    (Это заставит renderNavigation() запуститься заново и 
  //     правильно выставить класс .active)
  app.innerHTML = `
    ${renderHeader()}
    ${renderNavigation()} 
    <div class="container">
      ${viewHtml}
    </div>
  `;

  // 3. Отдельно рендерим модальное окно (оно вне #app)
  const oldModal = document.querySelector('.modal-overlay');
  if (oldModal) oldModal.remove();
  document.body.insertAdjacentHTML('beforeend', renderModal());

  // 4. Заново применяем JS-эффекты для карточек
  applyCardHoverColors();
}
// === ДАННЫЕ ДЛЯ ПОДСКАЗОК ===
const tagSuggestionsData = {
  category: ["Automation", "Design", "Coding", "AI Assistant", "Web Design", "Tools"],
  department: ["Developers", "Designers", "Managers", "Marketers", "Videograph"],
  profession: ["UI/UX Designer", "Front-end Developer", "Project Manager", "Copywriter"],
  responsibility: ["Write Code", "Generate Images", "Manage Information", "Research Topics"],
  keyFeatures: ["AI Integration", "Collaboration", "Multi-format Export", "Fast Performance"]
};

// === СОСТОЯНИЕ ВВЕДЁННЫХ ТЕГОВ ===
const selectedTags = {
  category: [],
  department: [],
  profession: [],
  responsibility: [],
  keyFeatures: []
};

// === ФУНКЦИЯ: ОБРАБОТКА ВВОДА ===
function handleTagInput(e, field) {
  const input = e.target.value.toLowerCase();
  const suggestionBox = document.getElementById(`${field}-suggestions`);
  suggestionBox.innerHTML = "";

  if (!input) {
    suggestionBox.style.display = "none";
    return;
  }

  const available = tagSuggestionsData[field]
    .filter(tag => tag.toLowerCase().includes(input))
    .slice(0, 6);

  available.forEach(tag => {
    const li = document.createElement("li");
    li.textContent = tag;
    li.onclick = () => addTag(tag, field);
    suggestionBox.appendChild(li);
  });

  // если ничего не найдено — предложить создать новый тег
  if (available.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `➕ Create <b>${input}</b>`;
    li.onclick = () => addTag(input, field);
    suggestionBox.appendChild(li);
  }

  suggestionBox.style.display = "block";
}

// === ДОБАВЛЕНИЕ ТЕГА ===
function addTag(tag, field) {
  if (!selectedTags[field].includes(tag)) {
    selectedTags[field].push(tag);
    renderTags(field);
  }

  document.getElementById(`${field}-input`).value = "";
  document.getElementById(`${field}-suggestions`).style.display = "none";
}

// === УДАЛЕНИЕ ТЕГА ===
function removeTag(tag, field) {
  selectedTags[field] = selectedTags[field].filter(t => t !== tag);
  renderTags(field);
}

// === ОТОБРАЖЕНИЕ ТЕГОВ ===
function renderTags(field) {
  const container = document.getElementById(`${field}-tags`);
  container.innerHTML = selectedTags[field]
    .map(tag => `
      <span class="tag-chip">
        ${tag}
        <button class="tag-remove" onclick="removeTag('${tag}', '${field}')">×</button>
      </span>
    `)
    .join("");
}

// === ENTER: добавление нового тега ===
function handleTagKeyDown(e, field) {
  if (e.key === "Enter") {
    e.preventDefault();
    const value = e.target.value.trim();
    if (value) addTag(value, field);
  }
}
// === Image Upload Handling ===
const selectedImages = { logo: null, modal: null };

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('dragover');
}

function handleDragLeave(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('dragover');
}

function handleFileDrop(e, type) {
  e.preventDefault();
  e.currentTarget.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) previewImage(file, type);
}

function handleFileSelect(e, type) {
  const file = e.target.files[0];
  if (file) previewImage(file, type);
}
// === ПРЕДПРОСМОТР ИЗОБРАЖЕНИЯ ===
function previewImage(file, type) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const preview = document.getElementById(type === 'logo' ? 'logo-preview' : 'modal-preview');
    preview.innerHTML = `
      <div class="frame-row">
        <div class="image-frame">
          <img id="${type}-img" src="${e.target.result}" alt="Preview" class="preview-img" />
        </div>
        <div class="frame-actions">
          <button class="frame-btn" title="Crop" onclick="openCropModal('${type}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2v14a2 2 0 0 0 2 2h14" />
              <path d="M18 22V8a2 2 0 0 0-2-2H2" />
            </svg>
          </button>
          <button class="frame-btn delete" title="Delete" onclick="deleteImage('${type}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
      </div>
    `;
    selectedImages[type] = e.target.result;
  };
  reader.readAsDataURL(file);
}




function deleteImage(type) {
  const preview = document.getElementById(type === 'logo' ? 'logo-preview' : 'modal-preview');
  preview.innerHTML = `<div class="upload-placeholder">+</div>`;
  selectedImages[type] = null;
}

function replaceImage(type) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => handleFileSelect(e, type);
  input.click();
}

// ============ IMAGE CROP MODAL (Fill / Crop, как в Figma) ============
let currentCropper = null;
let cropMode = "fill";

function openCropModal(type) {
  const img = document.getElementById(`${type}-img`);
  const cropModal = document.getElementById("cropModal");
  const cropImage = document.getElementById("cropImage");
  cropImage.src = img.src;
  cropModal.style.display = "flex";
  cropModal.dataset.type = type;

  if (currentCropper) currentCropper.destroy();
 currentCropper = new Cropper(cropImage, {
  viewMode: 1,
  dragMode: "move",
  background: false,
  autoCropArea: 1,
  responsive: true,
  movable: true,
  zoomable: true,
  cropBoxResizable: true,
  cropBoxMovable: true,
  guides: false,
});


  setActiveMode("fill");
}

function setActiveMode(mode) {
  cropMode = mode;
  document.querySelectorAll(".modeBtn").forEach(b => b.classList.remove("active"));
  document.querySelector(`.modeBtn[data-mode="${mode}"]`).classList.add("active");

  if (!currentCropper) return;

  if (mode === "fill") {
    currentCropper.clear();
    currentCropper.setDragMode("move");
  } 
  else if (mode === "crop") {
    // Включаем crop-режим с небольшой задержкой, чтобы DOM успел обновиться
    setTimeout(() => {
      currentCropper.setDragMode("crop");
      currentCropper.crop();
      const container = currentCropper.getContainerData();
      const image = currentCropper.getImageData();

      const padding = 24;
      const cropWidth = Math.min(image.width, container.width) - padding * 2;
      const cropHeight = Math.min(image.height, container.height) - padding * 2;

      currentCropper.setCropBoxData({
        left: (container.width - cropWidth) / 2,
        top: (container.height - cropHeight) / 2,
        width: cropWidth,
        height: cropHeight
      });

      // Активируем видимую рамку и ручки
      const box = document.querySelector(".cropper-crop-box");
      const face = document.querySelector(".cropper-face");
      if (box && face) {
        box.style.border = "2px solid rgba(255,255,255,0.8)";
        face.style.background = "rgba(0,0,0,0.4)";
      }
    }, 80);
  }
}


function closeCropModal() {
  document.getElementById("cropModal").style.display = "none";
  if (currentCropper) {
    currentCropper.destroy();
    currentCropper = null;
  }
}

function applyCrop() {
  const type = document.getElementById("cropModal").dataset.type;
  const canvas = currentCropper.getCroppedCanvas({ width: 800, height: 400 });
  document.getElementById(`${type}-img`).src = canvas.toDataURL();
  closeCropModal();
}

// Добавляем модалку при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  const cropModalHTML = `
  <div id="cropModal" class="crop-modal">
    <div class="crop-dialog">
      <button class="crop-close" onclick="closeCropModal()">&times;</button>
      <h3 class="crop-title">Crop Image</h3>

      <div class="crop-toolbar">
        <button class="modeBtn active" data-mode="fill" onclick="setActiveMode('fill')">Fill</button>
        <button class="modeBtn" data-mode="crop" onclick="setActiveMode('crop')">Crop</button>
      </div>

      <div class="crop-area">
        <img id="cropImage" alt="Crop Area" />
      </div>

      <div class="crop-actions">
        <button class="btn-secondary" onclick="closeCropModal()">Cancel</button>
        <button class="btn-primary" onclick="applyCrop()">Apply</button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", cropModalHTML);
});
// ====================== ACCOUNTS EDIT MODE ======================
let accEditMode = false;

const accEditBtn = document.getElementById("accEditBtn");
const accConfirmBtn = document.getElementById("accConfirmBtn");
const accCancelBtn = document.getElementById("accCancelBtn");

if (accEditBtn) {
  accEditBtn.addEventListener("click", () => {
    accEditMode = true;
    document.body.classList.add("acc-editing");
    console.log("🟡 ACC edit mode ON");

    // Включаем визуальное редактирование карточек
    document.querySelectorAll(".account-card").forEach(card => {
      card.classList.add("editable");
    });
  });
}

if (accConfirmBtn) {
  accConfirmBtn.addEventListener("click", () => {
    accEditMode = false;
    document.body.classList.remove("acc-editing");
    console.log("🟢 ACC edit mode confirmed");

    // Снимаем подсветку
    document.querySelectorAll(".account-card").forEach(card => {
      card.classList.remove("editable");
    });
  });
}

if (accCancelBtn) {
  accCancelBtn.addEventListener("click", () => {
    accEditMode = false;
    document.body.classList.remove("acc-editing");
    console.log("🔴 ACC edit mode canceled");

    // Снимаем подсветку
    document.querySelectorAll(".account-card").forEach(card => {
      card.classList.remove("editable");
    });
  });
}


    initTheme();
    render();

