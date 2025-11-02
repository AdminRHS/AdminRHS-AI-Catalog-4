// ==================== SVG ICONS ====================
const icons = {
  moon: '<img src="icons/moon.svg" alt="Moon Icon" width="24" height="24" />',
  sun: '<img src="icons/sun.svg" alt="Sun Icon" width="24" height="24" />',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  filter: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  download: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>'
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
      {
        email: "it-support@rh-s.com",
        toolNames: ["Dropbox Dash"]
      }
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
      isModalOpen: false
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
      render();
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
        render();
      }, 300);
      render();
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

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.filter-dropdown')) {
        if (state.openDropdown) {
          state.openDropdown = null;
          render();
        }
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
  const themeIcon = state.theme === 'dark' ? 'icons/sun.svg' : 'icons/moon.svg';

  return `
    <nav class="navigation">
      <div class="nav-content">

        <!-- Левая часть: иконки -->
        <div class="nav-left">
          <button 
            class="nav-tab ${state.activeTab === 'catalog' ? 'active' : ''}"
            onclick="state.activeTab = 'catalog'; render();"
            title="AI Catalog"
          >
            <img src="icons/ai.svg" alt="AI Catalog" class="nav-icon" />
          </button>

          <button 
            class="nav-tab ${state.activeTab === 'accounts' ? 'active' : ''}"
            onclick="state.activeTab = 'accounts'; render();"
            title="Account Management"
          >
            <img src="icons/acc.svg" alt="Account Management" class="nav-icon" />
          </button>

          <button 
            class="nav-tab"
            onclick="toggleTheme()"
            title="Toggle theme"
          >
            <img 
              src="${themeIcon}" 
              alt="Toggle Theme"
              id="themeIcon"
              class="nav-icon"
            />
          </button>
        </div>

 <!-- Правая часть: поиск + фильтр -->
<div class="nav-right">
  <div class="nav-search">
    <span class="search-icon">🔍</span>
    <input 
      type="text" 
      class="nav-search-input"
      placeholder="Search by name..."
      value="${escapeHtml(state.searchQuery)}"
      oninput="state.searchQuery = this.value.toLowerCase(); render();"
    />
  </div>

  <!-- 👇 Фильтр рядом с поиском, отдельной кнопкой -->
  <button 
    class="filter-toggle-btn nav-tab"
    onclick="state.isPanelOpen = !state.isPanelOpen; render();"
    title="Toggle Filters"
  >
    <span class="nav-icon">${icons.filter}</span>
  </button>
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
      <!-- 🔹 Панель с фильтрами (открывается при клике на иконку сверху) -->
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

      <!-- 🔹 Активные фильтры -->
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
  const subscriptionClass = `subscription-${tool.subscription[0].toLowerCase()}`;
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

  // ==================== CARD TEMPLATE ====================
  return `
    <div class="tool-card" style="border-color: ${tool.borderColor}; animation-delay: ${index * 50}ms">
      <div class="subscription-badge ${subscriptionClass}">
        ${escapeHtml(tool.subscription[0])}
      </div>

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
    card.style.setProperty('--hover-shadow-color', `${borderColor}80`); // 50% прозрачности
    card.addEventListener('mouseenter', () => {
      card.style.setProperty('--hover-shadow-color', `${borderColor}80`);
      card.style.setProperty('--before-bg', borderColor);
      card.querySelector('::before');
      card.style.setProperty('color', borderColor);
      card.style.setProperty('--hover-color', borderColor);
      card.style.setProperty('--hover-bg', borderColor + '4D'); // 30% яркости
      card.style.setProperty('--hover-border', borderColor);
      card.style.setProperty('--hover-overlay', borderColor + '4D');
      card.style.setProperty('--hover-shadow-color', borderColor + '55');
      card.style.setProperty('--hover-tint', borderColor + '4D');
      card.style.setProperty('--hover-highlight', borderColor + '44');
      card.style.setProperty('--hover-light', borderColor + '33');
    });
    // красим ::before при помощи встроенного фильтра
    card.addEventListener('mouseover', () => {
      card.style.setProperty('--before-bg', borderColor);
      card.style.setProperty('--hover-shadow-color', borderColor + '55');
      card.querySelector('style')?.remove();
      const sheet = document.createElement('style');
      sheet.innerHTML = `.tool-card[style*="${borderColor}"]:hover::before{background:${borderColor}}`;
      document.head.appendChild(sheet);
    });
  });
}
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




    function renderToolGrid() {
      const filteredTools = getFilteredTools();

      if (filteredTools.length === 0) {
        return `
          <div class="empty-state">
            <p>No tools found matching your criteria.</p>
            <p>Try adjusting your search or filters.</p>
          </div>
        `;
      }

      return `
        <div class="tool-grid">
          ${filteredTools.map((tool, index) => renderToolCard(tool, index)).join('')}
        </div>
      `;
    }

    function renderModal() {
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
    <div class="tool-grid">
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
              <span class="account-tool-name">${escapeHtml(tool.name)}</span>
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
  // Проверяем, есть ли контейнер (если нет — создаём структуру)
  let container = document.querySelector('.container');
  if (!container) {
    const app = document.getElementById('app');
app.innerHTML = `
  ${renderHeader()}
  ${renderNavigation()}
  <div class="container"><!-- full width -->
    <div class="inner"></div>  <!-- выравнивающий блок -->
  </div>
`;


    container = document.querySelector('.container');
  }

  if (state.activeTab === 'catalog') {
    container.innerHTML = `
      ${renderSearchAndFilter()}
      ${renderToolGrid()}
    `;
  } else {
    container.innerHTML = renderAccountsView();
  }

  // Модальное окно создаём отдельно, чтобы не мигало
  const oldModal = document.querySelector('.modal-overlay');
  if (oldModal) oldModal.remove();
  document.body.insertAdjacentHTML('beforeend', renderModal());
  applyCardHoverColors();

}
document.addEventListener("DOMContentLoaded", () => {
  const card = document.createElement("div");
card.classList.add("tool-card");

// 🎯 Добавляем уникальный класс только карточке Notion
if (tool.name === "Notion") {
  card.classList.add("notion-card");
}


  cards.forEach(card => {
    const title = card.querySelector(".tool-title");
    if (title && title.textContent.trim().toLowerCase() === "notion") {
      const tagsContainer = card.querySelector(".tool-tags");
      if (tagsContainer) {
        tagsContainer.classList.add("tool-tags--wrap");
      }
    }
  });
});

    // ==================== INITIALIZE ====================
    initTheme();
    render();

function toggleTheme() {
  document.body.classList.toggle("dark");
  const themeIcon = document.getElementById("themeIcon");
  if (document.body.classList.contains("dark")) {
    themeIcon.src = "icons/sun.svg"; // ☀️ темная тема
  } else {
    themeIcon.src = "icons/moon.svg"; // 🌙 светлая тема
  }
}
