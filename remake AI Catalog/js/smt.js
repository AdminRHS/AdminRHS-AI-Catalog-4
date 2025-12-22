
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

  "Make.com": {
    light: "photo/make.png",
    dark: "photo/make.png"
  },

  "InVideo AI": {
    light: "photo/InVideoAI.png",
    dark: "photo/InVideoAI.png"
  },

  "RunwayML": {
    light: "photo/RunwayML.png",
    dark: "photo/RunwayML.png"
  },

  "Perplexity": {
    light: "photo/Perplexity.webp",
    dark: "photo/Perplexity.webp"
  },

  "Pollo.ai": {
    light: "photo/Pollo.ai.png",
    dark: "photo/Pollo.ai.png"
  },

  "supabase.com": {
    light: "photo/supabase.com.png",
    dark: "photo/supabase.com.png"
  },

  "Huggingface": {
    light: "photo/Huggingface.svg",
    dark: "photo/Huggingface.svg"
  },

  "OpenRouter": {
    light: "photo/OpenRouterlight.png",
    dark: "photo/OpenRouterdark.png"
  },

  "Loom": {
    light: "photo-light/loom.png",
    dark: "photo/loom.png"
  },

  "hailuoai.video": {
    light: "photo/hailuoai.video.png",
    dark: "photo/hailuoai.video.png"
  },

  "Hailo": {
    light: "photo/Hailo.png",
    dark: "photo/Hailo.png"
  },

  "Manus": {
    light: "photo/Manuslight.png",
    dark: "photo/Manusdark.png"
  },

  "Hedra": {
    light: "photo/hedralight.png",
    dark: "photo/hedradark.png"
  },

  "Vozo AI": {
    light: "photo/VozoAI.png",
    dark: "photo/VozoAI.png"
  },

  "HeyGen": {
    light: "photo/HeyGen.jpeg",
    dark: "photo/HeyGen.jpeg"
  },

  "Google Cloud (AI)": {
    light: "photo/Google Cloud (AI).png",
    dark: "photo/Google Cloud (AI).png"
  },

  "Wispr Flow": {
    light: "photo/Wispr Flow.jpg",
    dark: "photo/Wispr Flow.jpg"
  },

  "TurboScribe": {
    light: "photo/TurboScribe.png",
    dark: "photo/TurboScribe.png"
  },

  "WHALESWING": {
    light: "photo/WHALESWING.svg",
    dark: "photo/WHALESWING.svg"
  },

  "Freepik": {
    light: "photo/Freepik.png",
    dark: "photo/Freepik.png"
  },

  "Suno": {
    light: "photo/Suno.png",
    dark: "photo/Suno.png"
  },

  "ElevenLabs": {
    light: "photo/ElevenLabslight.svg",
    dark: "photo/ElevenLabsdark.png"
  },

  "Adobe Firefly": {
    light: "photo/Adobe Firefly.svg.png",
    dark: "photo/Adobe Firefly.svg.png"
  },

  "n8n": {
    light: "photo-light/n8n-color.png",
    dark: "photo/n8n-color.png"
  },

  "Gamma": {
    light: "photo-light/gammai.png",
    dark: "photo/gammai-removebg-preview.png"
  },

  "MidJourney": {
    light: "photo-light/midjourney.png",
    dark: "photo/midjourney.png"
  },

  "GitHub Copilot": {
    light: "photo-light/github_logo_icon.png",
    dark: "photo/github_logo_icon.png"
  },

  "Envato Elements AI": {
    light: "photo-light/Envato.png",
    dark: "photo/Envato-removebg-preview.png"
  },

  "Dropbox Dash": {
    light: "photo-light/Dropbox_Icon.svg.png",
    dark: "photo/Dropbox_Icon.svg.png"
  },

  "Replit": {
    light: "photo-light/replit.png",
    dark: "photo/replit.png"
  },

  "Lovable": {
    light: "photo-light/Lovable.png",
    dark: "photo/Lovable.png"
  },

  "Bolt.new": {
    light: "photo-light/bolts.png",
    dark: "photo/bolts-removebg-preview.png"
  },

  "V0": {
  light: "photo/v0dark.png",
  dark: "photo/V0.png"
},


  "Genspark": {
    light: "photo-light/genspark-icon.png",
    dark: "photo/genspark-icon.png"
  },

  "DeepSite": {
    light: "photo-light/deepsite.png",
    dark: "photo/deepsite.png"
  },

  "Cursor": {
    light: "photo-light/faviconV2(1).png",
    dark: "photo/faviconV2 (1).png"
  },

  "Claude Desktop": {
    light: "photo-light/Claude_AL_symbol.svg.png",
    dark: "photo/Claude_AL_symbol.svg.png"
  },

  "GPT": {
    light: "photo-light/gpt.png",
    dark: "photo/faviconV2.png"
  },

  "Gemini": {
    light: "photo-light/Google_Gemin.png",
    dark: "photo/Google_Gemin.png"
  },

  "Claude": {
    light: "photo-light/Claude_AL_symbol.svg.png",
    dark: "photo/Claude_AL_symbol.svg.png"
  },

  "Grok": {
    light: "photo-light/grok.png",
    dark: "photo/grok.png"
  },

  "AI Studio": {
    light: "photo-light/aistudio.png",
    dark: "photo/aistudio.png"
  },

  "NotebookLM": {
    light: "photo-light/notebook.png",
    dark: "photo/notebook.png"
  },
"Vectal Pro": {
  light: "photo/Vectal Pro.png",
  dark: "photo/Vectal Pro.png"
},

  "Notion": {
    light: "photo-light/Notion-logo.svg.png",
    dark: "photo/Notion-logo.svg.png"
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
        id: "tool-019",
        name: "Cursor",
        url: "https://cursor.sh/",
        category: ["Coding / Programming"],
        description: "Cursor is an AI-powered code editor built for AI-first development workflows.",
        keyFeatures: ["Multi-model support","Agents view","Codebase-aware suggestions","@ symbol file referencing","Built-in browser preview"],
        subscription: ["Paid"],
        account: "Multiple accounts: admin@rh-s.com, dev@rh-s.com, niko@rh-s.com, dd@rh-s.com, lg@rh-s.com, sales@rh-s.com, hr@remotemployees.com, hr@rem-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/6/2025 for 8 account(s).",
        profession: ["Front-end Developer","Full Stack Developer","UI/UX Designer","AI Prompt Engineer","Design Systems Engineer","Financial Manager","Sales Manager","Recruiter"],
        responsibility: ["Design Websites","Write Code"],
        department: ["Developers","Designers","Managers","Marketers","AI"],
        borderColor: "#28a745"
      },
      {
        id: "tool-030",
        name: "Make.com",
        url: "https://www.make.com/en",
        category: ["Automation / Integrations"],
        description: "Automation platform used by Designers team.",
        keyFeatures: ["AI-powered automations","User-friendly interface"],
        subscription: ["Freemium"],
        account: "content@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Freemium.",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Designers"],
        borderColor: "#808080"
      },
      {
        id: "tool-022",
        name: "GPT",
        url: "https://openai.com/chatgpt",
        category: ["AI Assistant"],
        description: "OpenAI's flagship conversational AI.",
        keyFeatures: ["Advanced reasoning","Code generation","Multimodal input","Custom instructions","Plugin ecosystem"],
        subscription: ["Paid"],
        account: "Multiple accounts: niko@rh-s.com, hr@rem-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/3/2025 for 2 account(s).",
        profession: ["Back-end Developer","Content Manager","Analyst","Project Manager","Copywriter"],
        responsibility: ["Write Code","Debug Software","Write Content","Research Topics","Analyze Data","Automate Workflows"],
        department: ["Developers","Marketers","Managers","AI","Recruiters","Designers","Videograph"],
        borderColor: "#28a745"
      },
      {
        id: "tool-023",
        name: "Gemini",
        url: "https://gemini.google.com/",
        category: ["AI Assistant"],
        description: "Google's AI assistant with deep workspace integration.",
        keyFeatures: ["Google integration","1M token context","Workspace sync","Research tools","Multimodal capabilities"],
        subscription: ["Paid"],
        account: "niko@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/3/2025 for 1 account(s).",
        profession: ["Content Manager","Analyst","SEO Manager","Project Manager"],
        responsibility: ["Write Content","Research Topics","Analyze Data","Create Presentations","Manage Information"],
        department: ["Marketers","Managers","Developers","AI","Designers","Videograph"],
        borderColor: "#d63384"
      },
      {
        id: "tool-031",
        name: "InVideo AI",
        url: "https://invideo.io",
        category: ["Video Generation / Video Tools"],
        description: "Video creation tool for Videograph team.",
        keyFeatures: ["AI video creation","User-friendly interface"],
        subscription: ["Freemium"],
        account: "contact@fv-e.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Freemium.",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Videograph"],
        borderColor: "#808080"
      },
      {
        id: "tool-032",
        name: "RunwayML",
        url: "https://app.runwayml.com",
        category: ["Video Generation / Video Tools"],
        description: "Professional AI video editing and generation platform.",
        keyFeatures: ["Video editing","AI-powered effects","Video generation","Image-to-video","High-quality output"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/23/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Write Code","Manage Information","Generate Images"],
        department: ["Designers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-029",
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        category: ["Research & Search Engines"],
        description: "AI-powered search engine with citations.",
        keyFeatures: ["Real-time search","Citations","Direct answers","Research mode","Multi-model support"],
        subscription: ["Paid"],
        account: "Multiple accounts: admin@rh-s.com, dev@rh-s.com, dd@rh-s.com, lg@rh-s.com, sales@rh-s.com, hr@remotemployees.com, niko@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 10/9/2025 for 7 account(s).",
        profession: ["Back-end Developer","Content Manager","Analyst","Project Manager","Financial Manager"],
        responsibility: ["Research Topics","Analyze Data","Write Content","Manage Information"],
        department: ["Developers","Designers","Marketers","Managers","AI"],
        borderColor: "#28a745"
      },
      {
        id: "tool-003",
        name: "MidJourney",
        url: "https://www.midjourney.com/",
        category: ["Image Generation"],
        description: "Leading AI image generation platform.",
        keyFeatures: ["Photorealistic rendering","Artistic styles","Commercial usage rights","Community gallery","Style references"],
        subscription: ["Paid"],
        account: "dd@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/15/2025 for 1 account(s).",
        profession: ["UI/UX Designer","Content Manager","Social Media Manager"],
        responsibility: ["Generate Images","Source Assets"],
        department: ["Designers","Marketers"],
        borderColor: "#6f42c1"
      },
      {
        id: "tool-024",
        name: "Claude",
        url: "https://claude.ai/",
        category: ["AI Assistant"],
        description: "Anthropic’s high-reasoning AI assistant with excellent coding and analysis abilities.",
        keyFeatures: ["Advanced reasoning","Extended thinking","Code analysis","Long context","Safety focus"],
        subscription: ["Paid"],
        account: "Multiple accounts: admin@rh-s.com, dev@rh-s.com, niko@rh-s.com, hr@remotemployees.com, sales@rh-s.com, lg@rh-s.com, contact@fv-e.com, hr@rem-s.com, dd@rh-s.com, pr@tynesam.com, content@rh-s.com, bmselfie@gmail.com, remhelpers@gmail.com, nikokar999@gmail.com, vlad22natali321s@gmail.com, anastasia.kashk@gmail.com, remotemployees@gmail.com, artem.dady1@gmail.com, sellbuytraffic.com@gmail.com, rhdocuments2022@gmail.com, a.doubleclients@gmail.com, desig.doubleclients@gmail.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/7/2025 for 22 account(s).",
        profession: ["Back-end Developer","Analyst","Content Manager","Project Manager"],
        responsibility: ["Write Code","Debug Software","Analyze Data","Research Topics"],
        department: ["Developers","Managers","Marketers","AI","Recruiters","Designers","Videograph","Artemchuk","Niko"],
        borderColor: "#28a745"
      },
      {
        id: "tool-014",
        name: "Lovable",
        url: "https://lovable.dev/",
        category: ["Web Development / Web Design"],
        description: "AI-powered full-stack web builder with GitHub integration.",
        keyFeatures: ["Full-stack development","GitHub sync","Real-time rendering","Component library","One-click deployment"],
        subscription: ["Paid"],
        account: "Multiple accounts: admin@rh-s.com, dev@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 9/1/2025 for 2 account(s).",
        profession: ["Full Stack Developer","Web Designer"],
        responsibility: ["Write Code","Deploy Applications","Design Websites"],
        department: ["Developers","Designers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-013",
        name: "Replit",
        url: "https://replit.com/",
        category: ["Web Development / Coding"],
        description: "Browser-based cloud IDE with AI coding tools.",
        keyFeatures: ["AI agents","Instant deployment","Realtime collaboration","Multiple frameworks","Cloud hosting"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 9/30/2025 for 1 account(s).",
        profession: ["Full Stack Developer","Front-end Developer","Back-end Developer"],
        responsibility: ["Write Code","Debug Software","Deploy Applications","Design Websites"],
        department: ["Developers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-025",
        name: "Grok",
        url: "https://x.ai/",
        category: ["AI Assistant"],
        description: "X's AI assistant with real-time data access.",
        keyFeatures: ["Real-time data","X platform integration","Unfiltered answers","Social insights","Current events"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 10/26/2025 for 1 account(s).",
        profession: ["Social Media Manager","Content Manager","PR Manager"],
        responsibility: ["Write Content","Research Topics","Analyze Data"],
        department: ["Marketers","AI"],
        borderColor: "#d63384"
      },
      {
        id: "tool-033",
        name: "Pollo.ai",
        url: "https://pollo.ai/",
        category: ["Developer Utilities"],
        description: "Developer-focused AI tool.",
        keyFeatures: ["AI features","Simple interface"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 7/12/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-034",
        name: "Vectal Pro",
        url: "https://www.vectal.ai/",
        category: ["Developer Utilities"],
        description: "AI tool for Developers team.",
        keyFeatures: ["AI features","Simple interface"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Freemium.",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-035",
        name: "supabase.com",
        url: "https://supabase.com/",
        category: ["Developer Utilities","Backend Tools"],
        description: "Open-source backend and authentication platform.",
        keyFeatures: ["Database hosting","Auth","Storage","APIs","Dashboard"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 10/8/2025 for 1 account(s).",
        profession: ["Developers"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-036",
        name: "Huggingface",
        url: "https://huggingface.co/",
        category: ["AI Models / Developer Tools"],
        description: "Hub for AI models, datasets, and pipelines.",
        keyFeatures: ["Model hosting","Datasets","Inference APIs"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Freemium.",
        profession: ["Developers","AI Engineers"],
        responsibility: ["Manage Information"],
        department: ["Developers","AI"],
        borderColor: "#808080"
      },
      {
        id: "tool-017",
        name: "Genspark",
        url: "https://www.genspark.ai/",
        category: ["Image Generation","Web Design","Research & Search Engines"],
        description: "Super-agent workspace for websites, presentations, and research.",
        keyFeatures: ["Website builder","Presentations","Research tools","Multi-format creation"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Freemium.",
        profession: ["Content Manager","Project Manager","Web Designer"],
        responsibility: ["Design Websites","Create Presentations","Research Topics","Generate Images"],
        department: ["Marketers","Managers","Designers"],
        borderColor: "#d63384"
      },
      {
        id: "tool-002",
        name: "Gamma",
        url: "https://gamma.app/",
        category: ["Web Design","Presentations"],
        description: "AI-powered tool for presentations, micro-websites, and visuals generated from text prompts.",
        keyFeatures: ["AI presentation generation","Multi-format export","Website creation","Real-time collaboration","Template library"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/25/2025 for 1 account(s).",
        profession: ["Project Manager","Product Manager","Content Manager","Sales Manager"],
        responsibility: ["Create Presentations","Design Websites","Write Content"],
        department: ["Managers","Marketers","Designers","AI","ai"],
        borderColor: "#dc3545"
      },
      {
        id: "tool-037",
        name: "OpenRouter",
        url: "https://openrouter.ai/",
        category: ["AI Models / Developer Tools"],
        description: "Universal API for running multiple AI models from various providers.",
        keyFeatures: ["Multi-model access","Usage tracking","Flexible pricing","Unified API"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Freemium.",
        profession: ["Developers","AI Engineers"],
        responsibility: ["Manage Information","Run Models"],
        department: ["Developers","AI"],
        borderColor: "#808080"
      },
      {
        id: "tool-038",
        name: "Loom",
        url: "https://www.loom.com/",
        category: ["Video Generation","Productivity"],
        description: "Video messaging and screen recording platform for async communication.",
        keyFeatures: ["Screen recording","Instant sharing","Workspace collaboration","Camera + screen mode","Fast exporting"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/18/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["AI","Developers","Marketers","Designers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-039",
        name: "hailuoai.video",
        url: "https://hailuoai.video/",
        category: ["Video Generation"],
        description: "Simple AI tool for creating short videos and assets.",
        keyFeatures: ["Easy-to-use tools","Fast export"],
        subscription: ["Freemium"],
        account: "dd@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 6/21/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-040",
        name: "Hailo",
        url: "https://hailo.ai/",
        category: ["Tools"],
        description: "AI tool for Developers team.",
        keyFeatures: ["AI-powered features","User-friendly interface"],
        subscription: ["Freemium"],
        account: "dd@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 6/21/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-001",
        name: "n8n",
        url: "https://n8n.io/",
        category: ["Automation","Developer Utilities"],
        description: "Workflow automation platform with 400+ integrations.",
        keyFeatures: ["Visual workflow builder","400+ integrations","Self-hosted support","Custom functions"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/26/2025 for 1 account(s).",
        profession: ["Backend Developer","SysAdmin","Project Manager"],
        responsibility: ["Automate Workflows","Write Code","Manage Information"],
        department: ["Developers","Managers"],
        borderColor: "#28a745"
      },
      {
        id: "tool-041",
        name: "Manus",
        url: "https://manus.im/app",
        category: ["AI Assistant"],
        description: "Lightweight AI assistant for developers and teams.",
        keyFeatures: ["AI-powered features","Team utilities"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 9/25/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-042",
        name: "Hedra",
        url: "https://www.hedra.com/",
        category: ["Video Generation","AI Assistant"],
        description: "AI video platform with avatars and video editing tools.",
        keyFeatures: ["Video generation","AI-powered avatars","Editing features"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/8/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Videograph"],
        borderColor: "#28a745"
      },
      {
        id: "tool-043",
        name: "Vozo AI",
        url: "https://app.vozo.ai/",
        category: ["Video Generation"],
        description: "AI tool for video creators.",
        keyFeatures: ["AI features","User-friendly interface"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 10/26/2025 for 1 account(s).",
        profession: ["Videograph"],
        responsibility: ["Manage Information"],
        department: ["Videograph"],
        borderColor: "#808080"
      },
      {
        id: "tool-044",
        name: "HeyGen",
        url: "https://www.heygen.com/",
        category: ["Video Generation","AI Assistant"],
        description: "AI-powered video generator with avatars and voice cloning.",
        keyFeatures: ["AI avatars","Voice cloning","Multilingual support","Professional video generation"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/27/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Videograph"],
        borderColor: "#28a745"
      },
      {
        id: "tool-045",
        name: "Google Cloud (AI)",
        url: "https://cloud.google.com/",
        category: ["AI Models / Developer Tools"],
        description: "Google’s cloud AI infrastructure and APIs.",
        keyFeatures: ["AI APIs","Compute","ML tools"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 10/21/2025 for 1 account(s).",
        profession: ["Developers"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-046",
        name: "Wispr Flow",
        url: "https://wisprflow.ai/",
        category: ["Marketing / AI Assistant"],
        description: "AI tool for marketing and productivity automation.",
        keyFeatures: ["AI workflows","Marketing support"],
        subscription: ["Paid"],
        account: "Multiple accounts: admin@rh-s.com, niko@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/7/2025 for 2 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Marketers","Managers","Developers","AI","Designers","Videograph"],
        borderColor: "#808080"
      },
      {
        id: "tool-011",
        name: "Dropbox Dash",
        url: "https://www.dropbox.com/products/dash",
        category: ["Productivity","AI Assistant"],
        description: "Universal AI search tool that connects and searches across all apps and files.",
        keyFeatures: ["Universal Search","AI Summaries","Third-party app connections","Smart organization","Fast file access"],
        subscription: ["Paid"],
        account: "Multiple accounts: dev@rh-s.com, admin@rh-s.com, lg@rh-s.com, niko@rh-s.com, content@rh-s.com, dd@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/4/2025 for 6 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information","Research Topics","Summarize Documents"],
        department: ["All Departments","Developers","AI","Marketers","Managers","Videograph","Designers"],
        borderColor: "#d63384"
      },
      {
        id: "tool-047",
        name: "TurboScribe",
        url: "https://turboscribe.ai/",
        category: ["Transcription","AI Assistant"],
        description: "AI transcription tool for converting audio/video into clean text.",
        keyFeatures: ["Accurate transcription","Fast processing","Speaker detection","Export to multiple formats"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/4/2025 for 1 account(s).",
        profession: ["All Professionals"],
        responsibility: ["Manage Information","Summarize Documents"],
        department: ["Videograph","Designers","Marketers"],
        borderColor: "#808080"
      },
      {
        id: "tool-048",
        name: "WHALESWING",
        url: "https://whaleswing.com/",
        category: ["Developer Utilities"],
        description: "AI-powered developer assistant for experiments and debugging.",
        keyFeatures: ["AI tools","Developer utilities","Fast deployment"],
        subscription: ["Freemium"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Freemium.",
        profession: ["All Professionals"],
        responsibility: ["Manage Information"],
        department: ["Developers"],
        borderColor: "#808080"
      },
      {
        id: "tool-028",
        name: "Notion",
        url: "https://www.notion.so/",
        category: ["Productivity","AI Assistant"],
        description: "All-in-one workspace with AI tools for content creation and organization.",
        keyFeatures: ["AI Writing Assistant","Databases","Templates","Team Collaboration","Custom Workflows"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 6/19/2026 for 1 account(s).",
        profession: ["Managers","Marketers","Analysts","HR"],
        responsibility: ["Manage Information","Write Content","Create Presentations","Analyze Data"],
        department: ["Managers","Marketers","AI"],
        borderColor: "#dc3545"
      },
      {
        id: "tool-010",
        name: "Envato Elements AI",
        url: "https://elements.envato.com/ai",
        category: ["Image Generation","Design"],
        description: "AI tool for high-quality commercial images and creative assets.",
        keyFeatures: ["Commercial license","Large asset library","AI image generation","Style customization"],
        subscription: ["Paid"],
        account: "unknown@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 8/7/2026 for 0 account(s).",
        profession: ["UI/UX Designer","Graphic Designer","Content Manager"],
        responsibility: ["Generate Images","Source Assets"],
        department: ["Designers","Marketers"],
        borderColor: "#6f42c1"
      },
      {
        id: "tool-049",
        name: "Freepik",
        url: "https://www.freepik.com/",
        category: ["Design","Image Generation"],
        description: "Creative marketplace and AI image generator for commercial assets.",
        keyFeatures: ["AI-powered tools","Large resource library"],
        subscription: ["Paid"],
        account: "dd@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/4/2026 for 1 account(s).",
        profession: ["Designers"],
        responsibility: ["Manage Information"],
        department: ["Designers"],
        borderColor: "#808080"
      },
      {
        id: "tool-050",
        name: "Suno",
        url: "https://sunoai-music.com/",
        category: ["Audio Generation"],
        description: "AI music generator for creating full songs instantly.",
        keyFeatures: ["Full song generation","Lyrics + vocals","Genre control"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 11/29/2025 for 1 account(s).",
        profession: ["Videograph","Designers","Creatives"],
        responsibility: ["Generate Audio","Manage Information"],
        department: ["Videograph"],
        borderColor: "#808080"
      },
      {
        id: "tool-051",
        name: "ElevenLabs",
        url: "https://elevenlabs.io/",
        category: ["Audio Generation","AI Assistant"],
        description: "Industry-leading text-to-speech and voice cloning platform.",
        keyFeatures: ["Ultra-realistic voices","Voice cloning","Multilingual","Fast generation"],
        subscription: ["Free"],
        account: "dd@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Subscription status: Free.",
        profession: ["Video Editors","Content Creators","Designers"],
        responsibility: ["Create Voiceovers","Generate Audio"],
        department: ["Designers","Video Editors","Marketing"],
        borderColor: "#28a745"
      },
      {
        id: "tool-052",
        name: "Adobe Firefly",
        url: "https://firefly.adobe.com/",
        category: ["Image Generation","Design"],
        description: "Adobe's AI image generator for commercial design workflows.",
        keyFeatures: ["Commercial license","Generative fill","Vector generation","High-quality output"],
        subscription: ["Paid"],
        account: "admin@rh-s.com",
        lastUpdated: "2025-12-22",
        whatsNew: "Updated subscription info. Valid until 12/17/2025 for 1 account(s).",
        profession: ["Designers","Content Creators"],
        responsibility: ["Generate Images","Enhance Photos"],
        department: ["Designers"],
        borderColor: "#808080"
      }
    ];;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


    // ==================== DATA - ACCOUNTS ====================
    const accounts = [
      {
        email: "dev@rh-s.com",
        toolNames: ["Cursor", "Perplexity", "Claude", "Lovable", "Dropbox Dash", "n8n", "GitHub Copilot", "Replit", "Bolt.new", "V0", "DeepSite", "Claude Desktop", "AI Studio"]
      },
      {
        email: "admin@rh-s.com",
        toolNames: ["Cursor", "RunwayML", "Perplexity", "Claude", "Lovable", "Replit", "Grok", "Pollo.ai", "Vectal Pro", "supabase.com", "Huggingface", "Genspark", "Gamma", "OpenRouter", "Loom", "n8n", "Manus", "Hedra", "Vozo AI", "HeyGen", "Google cloud (AI)", "Wispr Flow", "Dropbox Dash", "TurboScribe", "WHALESWING", "Notion", "Suno", "Adobe Firefly", "GPT", "Gemini", "NotebookLM"]
      },
      {
        email: "lg@rh-s.com",
        toolNames: ["Cursor", "Perplexity", "Claude", "Dropbox Dash", "Genspark", "Grok"]
      },
      {
        email: "niko@rh-s.com",
        toolNames: ["Cursor", "GPT", "Gemini", "Perplexity", "Claude", "Wispr Flow", "Dropbox Dash", "MidJourney", "Envato Elements AI"]
      },
      {
        email: "sales@rh-s.com",
        toolNames: ["Cursor", "Perplexity", "Claude", "Gamma"]
      },
      {
        email: "content@rh-s.com",
        toolNames: ["Make.com", "Dropbox Dash"]
      },
      {
        email: "dd@rh-s.com",
        toolNames: ["Cursor", "Perplexity", "MidJourney", "Claude", "hailuoai.video", "Hailo", "Freepik", "Dropbox Dash"]
      },
      {
        email: "design@rh-s.com",
        toolNames: ["ElevenLabs"]
      },
      {
        email: "hr@rem-s.com",
        toolNames: ["Cursor", "GPT", "Claude"]
      },
      {
        email: "hr@remotemployees.com",
        toolNames: ["Cursor", "Perplexity", "Claude"]
      },
      {
        email: "bmselfie@gmail.com",
        toolNames: ["Claude"]
      },
    ];

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
  isEditMode: false,       // 🔹 режим редактирования
  isEditMenuOpen: false,   // 🔹 выпадающее меню редактирования

  // 🔹 модалка для аккаунтов
  isAccountModalOpen: false,
  isAccountDetailsModalOpen: false,
  selectedAccount: null,
  accountDraft: {
    email: '',
    free: [],
    freemium: [],
    paid: []
  },
  accountModalError: ''
};

    // ==================== HELPER FUNCTIONS ====================
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
// ==================== ACCOUNTS: HELPERS ====================
function normalizeToolName(name) {
  return (name || '').toString().trim();
}

function getToolByName(name) {
  if (!name) return null;
  const lower = name.toLowerCase();
  return tools.find(t => t.name.toLowerCase() === lower);
}

// Строка "GPT, Gemini, Notion" -> ["GPT","Gemini","Notion"]
function parseToolInput(str) {
  if (!str) return [];
  return str
    .split(',')
    .map(s => normalizeToolName(s))
    .filter(Boolean);
}

// Проверяем, что все тулзы из списка существуют в массиве tools
function validateToolNames(list) {
  const unknown = list.filter(n => !getToolByName(n));
  return { ok: unknown.length === 0, unknown };
}

// Удобный рендер маленьких «чипов» (логотипы из toolLogos)
function renderToolChips(list) {
  return list.map(name => {
    const t = getToolByName(name);
    if (!t) return '';
    const logoUrl =
      state.theme === 'dark'
        ? (toolLogos[t.name]?.dark || toolLogos[t.name]?.light)
        : (toolLogos[t.name]?.light || toolLogos[t.name]?.dark);

    return `
      <span class="chip tool-chip" title="${escapeHtml(t.name)}">
        ${logoUrl ? `<img src="${logoUrl}" alt="${escapeHtml(t.name)}" class="chip-icon"/>` : ''}
        ${escapeHtml(t.name)}
      </span>
    `;
  }).join('');
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


// ========================
// Close dropdowns/menus when clicking outside
// ========================
// === исправленный глобальный обработчик кликов ===
document.addEventListener('click', (e) => {
  if (e.target.closest('.add-tool-card')) {
    e.stopPropagation();
    return;
  }

  // ✅ исправлено: правильный id crop-модалки
  if (e.target.closest('#cropModal') || e.target.closest('#openCropModalBtn')) {
    return; 
  }

  if (!e.target.closest('.filter-dropdown') && state.openDropdown) {
    state.openDropdown = null;
    render();
  }

  if (
    !e.target.closest('.edit-toggle-btn') &&
    !e.target.closest('.edit-menu') &&
    state.isEditMenuOpen
  ) {
    state.isEditMenuOpen = false;
    render();
  }

  if (!e.target.closest('.edit-toggle-btn') && !e.target.closest('.edit-menu')) {
    if (state.isEditMenuOpen) {
      state.isEditMenuOpen = false;
      render();
    }
  }
});


// =================================================================================

    // ==================== RENDER FUNCTIONS ====================
function renderHeader() {
  return `
    <header class="header">
      
      <!-- ЛОГОТИП СЛЕВА -->
      <div class="header-logo">
        <img 
          src="logo/anylogo.svg" 
          alt="Any Employee"
        />
      </div>

      <!-- ТЕКСТ СПРАВА -->
      <div class="header-title">
        <h1>AI Catalog</h1>
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
            
            <button
  class="edit-menu-btn"
  title="Create New"
  onclick="event.stopPropagation(); if (state.activeTab === 'accounts') { openAccountModal(); } else { openModal('createTool'); }"
>
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

// 🔹 Показываем по умолчанию 3 тега, а у Notion — тоже максимум 3
const maxVisibleTags = 3;
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
  <div class="tool-card" data-id="${tool.id || tool.name}" style="animation-delay:${index * 60}ms">

      
      ${state.isEditMode ? `<button class="card-delete-btn" onclick="event.stopPropagation(); alert('Delete ${escapeHtml(tool.name)}?');">&times;</button>` : ''}
${state.isEditMode && tool.name ? `
  <button 
    class="card-edit-btn" 
    onclick="event.stopPropagation(); openToolEditById('${escapeHtml(tool.id)}')" 
    title="Edit ${escapeHtml(tool.name)}"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" 
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    </svg>
  </button>
` : ''}
${state.isEditMode && tool.name !== "Add New Tool" ? `
  <button class="card-edit-btn" 
          onclick="event.stopPropagation(); openToolEditById('${tool.id || tool.name}')">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         viewBox="0 0 24 24">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  </button>
` : ''}

${state.isEditMode && tool.name !== "Add New Tool" ? `
  <button class="card-edit-btn" onclick="event.stopPropagation(); openToolEditById('${tool.id || tool.name}')">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      viewBox="0 0 24 24">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  </button>
` : ''}

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

        <div class="tool-description" style="max-height: 3.6em; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-height: 1.8em;">
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
    // позиционирование карточки поверх сетки с фиксированной позицией относительно viewport
    const rect = cardElement.getBoundingClientRect();
    const width = rect.width;
    const scrollY = window.scrollY || window.pageYOffset;

    // Используем fixed positioning для более надежного позиционирования
    cardElement.style.position = 'fixed';
    cardElement.style.top = `${rect.top + scrollY}px`;
    cardElement.style.left = `${rect.left}px`;
    cardElement.style.width = `${width}px`;
    cardElement.style.maxWidth = 'calc(100vw - 2rem)';
    cardElement.style.zIndex = '1001';
    cardElement.style.margin = '0';

    // делаем плавное появление карточки
    cardElement.classList.add('visible');
    overlay.classList.add('visible');

    hiddenTags.forEach((tag, i) => {
      tag.style.display = 'inline-flex';
      tag.style.animation = `fadeIn 0.25s ${i * 0.05}s forwards`;
    });
    moreBtn.textContent = 'Show less';

    // Обновляем позицию при скролле
    const updatePosition = () => {
      if (cardElement.classList.contains('expanded')) {
        const newRect = cardElement.getBoundingClientRect();
        const newScrollY = window.scrollY || window.pageYOffset;
        cardElement.style.top = `${newRect.top + newScrollY}px`;
      }
    };

    // Клик вне карточки закрывает её
    const handleOverlayClick = (e) => {
      if (!cardElement.contains(e.target)) {
        closeExpandedCard();
      }
    };

    const closeExpandedCard = () => {
      hiddenTags.forEach(tag => (tag.style.display = 'none'));
      cardElement.classList.remove('expanded', 'visible');
      cardElement.style.position = '';
      cardElement.style.top = '';
      cardElement.style.left = '';
      cardElement.style.width = '';
      cardElement.style.maxWidth = '';
      cardElement.style.zIndex = '';
      cardElement.style.margin = '';
      moreBtn.textContent = `+${hiddenTags.length} more`;
      overlay.classList.remove('visible');
      overlay.onclick = null;
      window.removeEventListener('scroll', updatePosition);
    };

    overlay.onclick = handleOverlayClick;
    window.addEventListener('scroll', updatePosition, { passive: true });
  } else {
    // закрытие
    hiddenTags.forEach(tag => (tag.style.display = 'none'));
    cardElement.classList.remove('visible');
    cardElement.style.position = '';
    cardElement.style.top = '';
    cardElement.style.left = '';
    cardElement.style.width = '';
    cardElement.style.maxWidth = '';
    cardElement.style.zIndex = '';
    cardElement.style.margin = '';
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
  <div class="upload-box" id="logo-upload" onclick="openFileInput('logo')">
    <div class="upload-placeholder">+</div>
    <input type="file" id="logoFileInput" accept="image/*" style="display:none" onchange="handleFileSelect(event, 'logo')">
  </div>
</div>

<!-- === MODAL BACKGROUND UPLOAD === -->
<div class="modal-section">
  <h3 class="modal-section-title">Modal Background Image</h3>
  <div class="upload-box" id="modal-upload" onclick="openFileInput('modal')">
    <div class="upload-placeholder">+</div>
    <input type="file" id="modalFileInput" accept="image/*" style="display:none" onchange="handleFileSelect(event, 'modal')">
  </div>
</div>

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
if (state.modalMode === 'editTool' && state.toolDraft) {
  const t = state.toolDraft;
  return `
    <div class="modal-overlay open" onclick="if(event.target === this){ state.isModalOpen=false; state.modalMode='view'; this.remove(); document.body.style.overflow=''; }">
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal-close" onclick="state.isModalOpen=false; state.modalMode='view'; document.querySelector('.modal-overlay')?.remove(); document.body.style.overflow='';">
          ${icons.x}
        </button>
        <h2 class="modal-title">Edit Tool</h2>

        <div class="modal-section">
          <input id="editName" class="modal-input" placeholder="Tool Name" value="${escapeHtml(t.name)}" />
          <input id="editUrl" class="modal-input" placeholder="Website URL" value="${escapeHtml(t.url)}" />
          <textarea id="editDescription" class="modal-textarea">${escapeHtml(t.description || '')}</textarea>
        </div>

        <div class="modal-section">
          <input id="editAccount" class="modal-input" placeholder="Shared Account" value="${escapeHtml(t.account || '')}" />
          <select id="editSubscription" class="modal-select">
            ${['Freemium','Paid','Free'].map(v => `
              <option value="${v}" ${t.subscription?.[0] === v ? 'selected':''}>${v}</option>
            `).join('')}
          </select>
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">Tags</h3>
          <input id="editFeatures" class="modal-input" placeholder="Key Features" value="${escapeHtml((t.keyFeatures||[]).join(', '))}" />
          <input id="editProfessions" class="modal-input" placeholder="Relevant Professions" value="${escapeHtml((t.profession||[]).join(', '))}" />
          <input id="editDepartments" class="modal-input" placeholder="Departments" value="${escapeHtml((t.department||[]).join(', '))}" />
          <input id="editResponsibilities" class="modal-input" placeholder="Responsibilities" value="${escapeHtml((t.responsibility||[]).join(', '))}" />
        </div>

        <div class="modal-actions">
          <button class="modal-button" onclick="state.isModalOpen=false; state.modalMode='view'; document.querySelector('.modal-overlay')?.remove(); document.body.style.overflow='';">Cancel</button>
          <button class="modal-button primary" onclick="saveEditedTool()">Save Changes</button>
        </div>
      </div>
    </div>
  `;
}

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
                ${(tool.profession || []).map(profession => `
                  <span class="modal-tag">${escapeHtml(profession)}</span>
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
// ==================== ACCOUNT MODAL ====================

function openAccountModal() {
  state.isAccountModalOpen = true;
  render();
}

function closeAccountModal() {
  // Закрываем окно, не трогая isEditMode
  state.isAccountModalOpen = false;
  const modal = document.querySelector('.account-modal-overlay');
  if (modal) modal.remove();
}

function openAccountDetailsModal(email) {
  if (state.isEditMode) return; // Don't open modal in edit mode
  const account = accounts.find(acc => acc.email === email);
  if (!account) return;
  
  state.selectedAccount = account;
  state.isAccountDetailsModalOpen = true;
  document.body.style.overflow = 'hidden';
  render();
}

function closeAccountDetailsModal() {
  state.isAccountDetailsModalOpen = false;
  state.selectedAccount = null;
  const modal = document.querySelector('.account-details-modal-overlay');
  if (modal) modal.remove();
  document.body.style.overflow = '';
}

function renderAccountDetailsModal() {
  if (!state.isAccountDetailsModalOpen || !state.selectedAccount) return '';
  
  const account = state.selectedAccount;
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
  
  const freemiumTools = (account.toolNames || []).filter(name =>
    groupedBySubscription.Freemium.some(f => f.toLowerCase() === name.toLowerCase())
  );
  const paidTools = (account.toolNames || []).filter(name =>
    groupedBySubscription.Paid.some(f => f.toLowerCase() === name.toLowerCase())
  );
  const freeTools = (account.toolNames || []).filter(name =>
    groupedBySubscription.Free.some(f => f.toLowerCase() === name.toLowerCase())
  );
  
  const renderToolList = (tools, color) => {
    if (!tools.length) return '<p style="color: var(--muted-foreground);">No tools in this category</p>';
    return tools.map(toolName => {
      return `<div class="account-tool-item" style="border-left: 3px solid ${color}; padding-left: 0.75rem; margin-bottom: 0.5rem;">
        <strong>${escapeHtml(toolName)}</strong>
      </div>`;
    }).join('');
  };
  
  return `
    <div class="account-details-modal-overlay modal-overlay open" onclick="if(event.target === this) closeAccountDetailsModal();">
      <div class="modal">
        <button class="modal-close" onclick="closeAccountDetailsModal()">${icons.x}</button>
        <h2 class="modal-title">Account Details</h2>
        
        <div class="modal-section">
          <h3 class="modal-section-title">Email</h3>
          <div class="modal-section-content">${escapeHtml(account.email)}</div>
        </div>
        
        <div class="modal-section">
          <h3 class="modal-section-title" style="color: #0096E1;">Freemium Tools (${freemiumTools.length})</h3>
          <div class="modal-section-content">
            ${renderToolList(freemiumTools, "#0096E1")}
          </div>
        </div>
        
        <div class="modal-section">
          <h3 class="modal-section-title" style="color: #d63384;">Paid Tools (${paidTools.length})</h3>
          <div class="modal-section-content">
            ${renderToolList(paidTools, "#d63384")}
          </div>
        </div>
        
        <div class="modal-section">
          <h3 class="modal-section-title" style="color: #28a745;">Free Tools (${freeTools.length})</h3>
          <div class="modal-section-content">
            ${renderToolList(freeTools, "#28a745")}
          </div>
        </div>
        
        <div class="modal-section">
          <h3 class="modal-section-title">Total Tools</h3>
          <div class="modal-section-content">
            <strong>${(account.toolNames || []).length} tools</strong> across all subscription types
          </div>
        </div>
      </div>
    </div>
  `;
}



function renderAccountModal() {
  if (!state.isAccountModalOpen) return '';
  const err = state.accountModalError ? `<div class="form-error">${escapeHtml(state.accountModalError)}</div>` : '';

  // Подсказка: список известных тулзов для удобства
  const known = tools.map(t => t.name).sort();
  const hint = known.slice(0, 18).join(', ') + (known.length > 18 ? '…' : '');

  return `
    <div class="account-modal-overlay modal-overlay open" onclick="if(event.target === this) closeAccountModal();">
      <div class="modal account-modal">
        <button class="modal-close" onclick="closeAccountModal()">${icons.x}</button>
        <h2 class="modal-title">Add Account</h2>

        <div class="modal-section">
          <h3 class="modal-section-title">Account Email</h3>
          <input 
            id="accEmailInput" 
            class="modal-input" 
            placeholder="e.g., dev@rh-s.com" 
            oninput="state.accountDraft.email = this.value.trim()"
          />
        </div>

        <div class="modal-section">
          <h3 class="modal-section-title">Tools by Subscription</h3>

          <div class="form-row">
            <label class="form-label">Freemium</label>
            <input id="accFreemiumInput" class="modal-input" placeholder="Comma-separated (e.g., GPT, Notion)" 
              oninput="
                const list = parseToolInput(this.value);
                state.accountDraft.freemium = list;
                document.getElementById('accFreemiumChips').innerHTML = renderToolChips(list);
              " />
            <div id="accFreemiumChips" class="chips-row"></div>
          </div>

          <div class="form-row">
            <label class="form-label">Paid</label>
            <input id="accPaidInput" class="modal-input" placeholder="Comma-separated (e.g., GitHub Copilot, MidJourney)" 
              oninput="
                const list = parseToolInput(this.value);
                state.accountDraft.paid = list;
                document.getElementById('accPaidChips').innerHTML = renderToolChips(list);
              " />
            <div id="accPaidChips" class="chips-row"></div>
          </div>

          <div class="form-row">
            <label class="form-label">Free</label>
            <input id="accFreeInput" class="modal-input" placeholder="Comma-separated (e.g., NotebookLM)" 
              oninput="
                const list = parseToolInput(this.value);
                state.accountDraft.free = list;
                document.getElementById('accFreeChips').innerHTML = renderToolChips(list);
              " />
            <div id="accFreeChips" class="chips-row"></div>
          </div>

          <div class="form-hint">
            Known tools: ${escapeHtml(hint)}
          </div>
          ${err}
        </div>

        <div class="modal-actions">
          <button class="modal-button" onclick="closeAccountModal()">Cancel</button>
          <button class="modal-button primary" onclick="saveAccountFromModal()">Add</button>
        </div>
      </div>
    </div>
  `;
}

// Escape-обработчик для аккаунт-модалки
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.isAccountModalOpen) {
    closeAccountModal();
  }
});
function saveAccountFromModal() {
  const email = (state.accountDraft.email || '').trim();
  if (!email) {
    state.accountModalError = 'Please enter account email.';
    const old = document.querySelector('.account-modal-overlay');
    if (old) old.replaceWith(new DOMParser().parseFromString(renderAccountModal(), 'text/html').body.firstChild);
    return;
  }

  const freemiumList = state.accountDraft.freemium || [];
  const paidList = state.accountDraft.paid || [];
  const freeList = state.accountDraft.free || [];

  // Валидация существования тулзов
  const vf = validateToolNames(freemiumList);
  const vp = validateToolNames(paidList);
  const vfree = validateToolNames(freeList);

  if (!vf.ok || !vp.ok || !vfree.ok) {
    const bad = [...(vf.unknown || []), ...(vp.unknown || []), ...(vfree.unknown || [])];
    state.accountModalError = `Unknown tool(s): ${bad.join(', ')}`;
    const old = document.querySelector('.account-modal-overlay');
    if (old) old.replaceWith(new DOMParser().parseFromString(renderAccountModal(), 'text/html').body.firstChild);
    // восстановим значения полей
    setTimeout(() => {
      document.getElementById('accEmailInput').value = email;
      document.getElementById('accFreemiumInput').value = freemiumList.join(', ');
      document.getElementById('accPaidInput').value = paidList.join(', ');
      document.getElementById('accFreeInput').value = freeList.join(', ');
      document.getElementById('accFreemiumChips').innerHTML = renderToolChips(freemiumList);
      document.getElementById('accPaidChips').innerHTML = renderToolChips(paidList);
      document.getElementById('accFreeChips').innerHTML = renderToolChips(freeList);
    }, 0);
    return;
  }

  // Собираем toolNames (единый список — как у твоих карточек)
  const toolNames = [...freemiumList, ...paidList, ...freeList];

  // Добавляем новый аккаунт в начало
  accounts.unshift({
    email,
    toolNames
  });

  closeAccountModal();
  render();
  alert(`✅ Account "${email}" has been created!`);
}

function deleteAccount(email) {
  if (!email) return;
  
  // Find the index of the account to delete
  const index = accounts.findIndex(acc => acc.email === email);
  
  if (index === -1) {
    alert(`Account "${email}" not found.`);
    return;
  }
  
  // Remove the account from the array
  accounts.splice(index, 1);
  
  // Re-render to update the view
  render();
  
  alert(`✅ Account "${email}" has been deleted!`);
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

  // ✅ не выходим из функции, даже если массив пуст
  const hasAccounts = Array.isArray(accounts);
  const sortedAccounts = hasAccounts ? [...accounts] : [];
  const isEmpty = sortedAccounts.length === 0;

  // Определяем порядок сортировки по email
  const order = ["dev@rh-s.com", "admin@rh-s.com", "lg@rh-s.com"];

  if (!isEmpty) {
    sortedAccounts.sort((a, b) => {
      const aEmail = a.email.toLowerCase();
      const bEmail = b.email.toLowerCase();
      const aIndex = order.indexOf(aEmail);
      const bIndex = order.indexOf(bEmail);
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return 0;
    });
  }

  // 🔹 функция для отображения иконки тулза
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
        <img src="${logoUrl}" alt="${escapeHtml(tool.name)} logo" class="account-tool-icon"/>
      </button>
    `;
  };

  // 🔹 функция для рендера блока Freemium / Paid / Free
  const renderCategory = (title, toolsArr, color) => {
    if (!toolsArr.length) return "";
    return `
      <div class="account-category">
        <h4 class="account-category-title" style="color:${color};">${title}</h4>
        <div class="account-tools">
          ${toolsArr.map(toolName => renderToolIcon(toolName)).join('')}
        </div>
      </div>
    `;
  };

  // 🔹 Сетка карточек аккаунтов
  const grid = `
    <div class="tool-grid ${state.isEditMode ? 'edit-mode' : ''}">

      <!-- 🔹 Add Account card (показывается только при редактировании) -->
      ${state.isEditMode ? `
        <div class="tool-card add-tool-card" onclick="event.stopPropagation(); openAccountModal();">
          <div class="add-tool-content">
            <div class="add-tool-icon">+</div>
            <div class="add-tool-text">Add Account</div>
          </div>
        </div>
      ` : ''}

      <!-- 🔹 Основные карточки аккаунтов -->
      ${
        !isEmpty
          ? sortedAccounts.map((account, index) => {
              const freemiumTools = (account.toolNames || []).filter(name =>
                groupedBySubscription.Freemium.some(f => f.toLowerCase() === name.toLowerCase())
              );
              const paidTools = (account.toolNames || []).filter(name =>
                groupedBySubscription.Paid.some(f => f.toLowerCase() === name.toLowerCase())
              );
              const freeTools = (account.toolNames || []).filter(name =>
                groupedBySubscription.Free.some(f => f.toLowerCase() === name.toLowerCase())
              );

              return `
                <div class="account-card" style="animation-delay:${index * 60}ms" onclick="if(!state.isEditMode) openAccountDetailsModal('${escapeHtml(account.email)}')">
                  ${
                    state.isEditMode
                      ? `<button class="card-delete-btn" onclick="event.stopPropagation(); if(confirm('Delete ${escapeHtml(account.email)}?')) deleteAccount('${escapeHtml(account.email)}');">&times;</button>`
                      : ''
                  }
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
            }).join('')
          : `
            <p style="padding: 1.25rem; text-align: center; color: var(--muted-foreground);">
              No account data available
            </p>
          `
      }
    </div>
  `;

  return grid;
}




// ==================== MAIN RENDER FUNCTION ====================
function render() {
  try {
    const app = document.getElementById('app');
    if (!app) {
      console.error('❌ App element not found. DOM may not be ready.');
      return;
    }
    let viewHtml = '';

const currentEdit = state.isEditMode;


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

// +++ вставка модалки аккаунтов (если открыта)
document.body.insertAdjacentHTML('beforeend', renderAccountModal());
// +++ вставка модалки деталей аккаунта (если открыта)
document.body.insertAdjacentHTML('beforeend', renderAccountDetailsModal());

// ♻️ возвращаем состояние editMode после рендера
if (currentEdit) state.isEditMode = true;
console.log("🟢 EditMode restored:", state.isEditMode, "ActiveTab:", state.activeTab);

// 4. Заново применяем JS-эффекты для карточек
applyCardHoverColors();
  } catch (error) {
    console.error('❌ Error in render():', error);
    console.error('Error stack:', error.stack);
  }
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

// === OPEN FILE INPUT ===
function openFileInput(type) {
  document.getElementById(`${type}FileInput`).click();
}

// === HANDLE FILE SELECTION ===
function handleFileSelect(e, type) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const uploadBox = document.getElementById(`${type}-upload`);
    uploadBox.onclick = null; // отключаем открытие input при клике на саму область

uploadBox.innerHTML = `
  <div class="image-container">
    <img src="${event.target.result}" alt="Preview" class="crop-image" id="${type}-img">
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

  };
  reader.readAsDataURL(file);
}

// === DELETE IMAGE ===
function deleteImage(type) {
  const uploadBox = document.getElementById(`${type}-upload`);

  // полностью возвращаем исходный "+" без открытия диалога
  uploadBox.innerHTML = `
    <div class="upload-placeholder">+</div>
    <input type="file" id="${type}FileInput" accept="image/*" style="display:none" onchange="handleFileSelect(event, '${type}')">
  `;

  uploadBox.onclick = () => openFileInput(type);
}



function replaceImage(type) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => handleFileSelect(e, type);
  input.click();
}




// ==================== IMAGE CROP (Telegram-style, stable) ====================
let currentCropper = null;
let cropMode = "fill"; // "fill" | "fit" | "crop"

// Загружаем Cropper.js (один раз)
async function ensureCropperLoaded() {
  if (window.Cropper) return;

  await new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/cropperjs/dist/cropper.min.css";
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });

  await new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://unpkg.com/cropperjs/dist/cropper.min.js";
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}




// Создаём модальное окно обрезки (если его нет)
function ensureCropModalDOM() {
  if (document.getElementById("tgCropperStyles")) return;
  const styles = `
  .crop-modal{position:fixed;inset:0;background:rgba(0,0,0,.86);display:none;align-items:center;justify-content:center;z-index:4000}
.crop-modal.open{display:flex !important}
.crop-modal{z-index:9999;}
  .crop-dialog{background:#fff;border-radius:14px;padding:16px;width:min(92vw,960px);color:#111;box-shadow:0 20px 80px rgba(0,0,0,.3)}
  .crop-title{margin:0 0 8px 0;font:600 17px/1.3 'Nunito Sans',system-ui;color:#1a1a1a}
  .crop-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:6px 0 10px}
  .modeBtn,.crop-btn{border:1px solid rgba(0,0,0,.12);background:#f6f6f6;border-radius:10px;padding:8px 10px;font:500 13px/1 system-ui;color:#111;cursor:pointer;transition:.15s}
  .modeBtn.active,.crop-btn.primary{background:#e8f0ff;border-color:#3a7afe;color:#0d47a1}
  .crop-area{position:relative;background:#fafafa;border-radius:12px;overflow:hidden;height:min(60vh,520px);display:flex;align-items:center;justify-content:center}
  #cropImage{max-width:100%;max-height:100%;display:block}
  .crop-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:12px}
  .crop-btn.primary{background:#3a7afe;color:#fff;border-color:#3a7afe}
  .crop-btn.ghost{background:transparent;color:#444}
  `;
  const styleTag = document.createElement("style");
  styleTag.id = "tgCropperStyles";
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);

  const modalHTML = `
  <div id="cropModal" class="crop-modal" role="dialog" aria-modal="true">
    <div class="crop-dialog">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <h3 class="crop-title">Edit & Crop</h3>
        <button class="crop-btn ghost" onclick="closeCropModal()">✕</button>
      </div>

      <div class="crop-toolbar">
        <button class="modeBtn" data-mode="fit" onclick="setActiveMode('fit')">Fit</button>
        <button class="modeBtn active" data-mode="fill" onclick="setActiveMode('fill')">Fill</button>
        <button class="modeBtn" data-mode="crop" onclick="setActiveMode('crop')">Crop</button>
        <span style="flex:1"></span>
        <button class="crop-btn" onclick="currentCropper && currentCropper.zoom(-0.15)">−</button>
        <button class="crop-btn" onclick="currentCropper && currentCropper.zoom(0.15)">+</button>
        <button class="crop-btn" onclick="currentCropper && currentCropper.rotate(-90)">↺</button>
        <button class="crop-btn" onclick="currentCropper && currentCropper.rotate(90)">↻</button>
        <button class="crop-btn" onclick="currentCropper && currentCropper.reset()">Reset</button>
      </div>

      <div class="crop-area">
        <img id="cropImage" alt="Crop Area"/>
      </div>

      <div class="crop-actions">
        <button class="crop-btn ghost" onclick="closeCropModal()">Cancel</button>
        <button class="crop-btn primary" onclick="applyCrop()">Apply</button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// Открываем модалку
async function openCropModal(type) {
  await ensureCropperLoaded();
  console.log("🟢 openCropModal triggered for:", type);
  ensureCropModalDOM();
  const img = document.getElementById(`${type}-img`);
  if (!img) return;

  const modal = document.getElementById("cropModal");
  const cropImage = document.getElementById("cropImage");
  modal.dataset.type = type;
  cropImage.src = img.src;

  await new Promise((res) => {
    if (cropImage.complete) res();
    else { cropImage.onload = res; cropImage.onerror = res; }
  });

  if (currentCropper) { try { currentCropper.destroy(); } catch(_) {} currentCropper = null; }

currentCropper = new Cropper(cropImage, {
  viewMode: 1,
  dragMode: "move",
  background: false,
  autoCrop: true,          // ✅ включаем рамку сразу
  autoCropArea: 0.9,       // ✅ рамка занимает 90% области
  responsive: true,
  movable: true,
  zoomable: true,
  scalable: true,
  rotatable: true,
  wheelZoomRatio: 0.1,
  guides: true,            // ✅ видимые направляющие
  highlight: true,
  cropBoxResizable: true,  // ✅ можно тянуть углы
  cropBoxMovable: true,    // ✅ можно двигать рамку
});
console.log("✅ Cropper initialized:", !!currentCropper, cropImage.src);

console.log("✅ Crop modal opened for:", type);


  modal.classList.add("open");
  setActiveMode(img.dataset.mode === "fit" ? "fit" : "fill");
}

// Выбор режима
// === исправленный setActiveMode ===
function setActiveMode(mode) {
  cropMode = mode;
  document.querySelectorAll(".modeBtn").forEach(b =>
    b.classList.toggle("active", b.dataset.mode === mode)
  );

  if (!currentCropper) return;

  const ci = document.getElementById("cropImage"); // <-- теперь определён
  if (!ci) return;

  if (mode === "fill") {
    ci.style.objectFit = "cover";
    currentCropper.clear();
    currentCropper.setDragMode("move");
  } else if (mode === "fit") {
    ci.style.objectFit = "contain";
    currentCropper.clear();
    currentCropper.setDragMode("move");
  } else if (mode === "crop") {
    ci.style.objectFit = "contain";
    currentCropper.setDragMode("crop");
    currentCropper.crop();
  }
}




// Применяем
function applyCrop() {
  const type = document.getElementById("cropModal")?.dataset.type;
  const targetImg = document.getElementById(`${type}-img`);
  if (!targetImg) return;
  if (cropMode === "fit" || cropMode === "fill") {
  targetImg.dataset.mode = cropMode;
  targetImg.style.objectFit = cropMode === "fit" ? "contain" : "cover";
  closeCropModal();
  return;
}


  if (cropMode === "crop" && currentCropper) {
    const canvas = currentCropper.getCroppedCanvas({
      maxWidth: 2048,
      maxHeight: 2048,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: "high",
    });
    targetImg.src = canvas.toDataURL("image/png");
    targetImg.dataset.mode = "fill";
  }

  closeCropModal();
}

// Закрываем crop-модалку
function closeCropModal() {
  const modal = document.getElementById("cropModal");
  if (modal) {
    modal.classList.remove("open");
  }

  // Уничтожаем текущий инстанс Cropper, если он существует
  if (window.currentCropper) {
    try {
      window.currentCropper.destroy();
    } catch (e) {
      console.warn("Cropper destroy error:", e);
    }
    window.currentCropper = null;
  }

  document.body.style.overflow = "";
}

// Открываем окно редактирования тулза по ID
function openToolEditById(id) {
  const tool = (window.tools || []).find(
    t => String(t.id) === String(id) || t.name === id
  );
  if (!tool) {
    console.warn('Tool not found for id:', id);
    return;
  }

  // Устанавливаем состояние "редактирование"
  window.state.modalMode = 'editTool';
  window.state.toolDraft = JSON.parse(JSON.stringify(tool));
  window.state.isModalOpen = true;

  // Перерисовываем только модалку
  document.querySelector('.modal-overlay')?.remove();
  document.body.insertAdjacentHTML('beforeend', renderModal());
  document.body.style.overflow = 'hidden';

  console.log('Editing tool:', tool.name);
}

// 7) Делегируем клики: ✏️ или клик по самой карточке
document.addEventListener('click', (e) => {
  // Клик по карандашу (всегда открывает редактирование)
  const editBtn = e.target.closest('.card-edit-btn');
  if (editBtn) {
    const card = editBtn.closest('.tool-card, .account-card');
    if (!card) return;

    if (card.classList.contains('tool-card')) {
      const id = card.dataset.id;
      if (id) openToolEditById(id);
    } else {
      // TODO: аналогично для аккаунтов, если понадобится
    }
    e.stopPropagation();
    return;
  }

  // Клик по карточке (логотип, название, фон) — всегда открывает модалку этого тулза
  const toolCard = e.target.closest('.tool-card');
  if (toolCard && !e.target.closest('a,button,input,select,textarea')) {
    const id = toolCard.dataset.id;
    if (id) openToolEditById(id);
  }
});


// 8) Сохранение изменений из формы редактирования (перерисовываем только карточку)
window.saveEditedTool = function saveEditedTool() {
  if (!state.toolDraft) return;

  // забираем значения из формы
  const get = (id) => document.getElementById(id)?.value ?? '';
  const draft = {
    ...state.toolDraft,
    name: get('editToolName').trim(),
    url: get('editToolUrl').trim(),
    description: get('editToolDescription').trim(),
    account: get('editToolAccount').trim(),
    subscription: [document.getElementById('editToolSubscription')?.value || state.toolDraft.subscription?.[0] || 'Freemium'],
    keyFeatures: get('editToolKeyFeatures').split(',').map(s => s.trim()).filter(Boolean),
    category: get('editToolCategory').split(',').map(s => s.trim()).filter(Boolean),
    department: get('editToolDepartment').split(',').map(s => s.trim()).filter(Boolean),
    profession: get('editToolProfession').split(',').map(s => s.trim()).filter(Boolean),
    responsibility: get('editToolResponsibility').split(',').map(s => s.trim()).filter(Boolean),
  };

  // обновляем массив
  const idx = (window.tools || []).findIndex(t => String(t.id) === String(draft.id));
  if (idx === -1) return console.warn('[edit] saveEditedTool: tool index not found');

  window.tools[idx] = draft;

  // точечно перерисовываем карточку
  const oldCard = document.querySelector(`.tool-card[data-id="${draft.id}"]`);
  if (oldCard) {
    const newHTML = renderToolCard(draft, idx);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = newHTML.trim();
    const fresh = wrapper.firstElementChild;
    if (fresh) {
      // восстановим ключевые dataset
      fresh.dataset.id = String(draft.id);
      oldCard.replaceWith(fresh);
    }
  }

  // закрываем модалку, но остаёмся в Edit Mode
  state.isModalOpen = false;
  state.modalMode = 'view';
  state.toolDraft = null;
  document.querySelector('.modal-overlay')?.remove();
  document.body.style.overflow = '';

  // вернём ✏️ на место
  injectPencils();
};





    // Wait for DOM to be ready before initializing
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        render();
      });
    } else {
      // DOM is already ready
      initTheme();
      render();
    }
