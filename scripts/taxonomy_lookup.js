const fs = require('fs');
const path = require('path');

// Department mapping from Taxonomy to App format
const departmentMap = {
  'Dev': 'Developers',
  'Design': 'Designers',
  'AI': 'Developers', // AI team uses developer tools
  'LG': 'Marketers',
  'Video': 'Videograph',
  'Managers': 'Managers',
  'Sales': 'Marketers',
  'HR': 'Managers'
};

// Subscription mapping
function parseSubscription(costStructure) {
  if (!costStructure) return ['Freemium'];
  const lower = costStructure.toLowerCase();
  if (lower.includes('free') && (lower.includes('tier') || lower.includes('available'))) {
    return ['Freemium'];
  } else if (lower.includes('free') && !lower.includes('paid') && !lower.includes('subscription')) {
    return ['Free'];
  } else if (lower.includes('paid') || lower.includes('subscription') || lower.includes('pro')) {
    if (lower.includes('free') || lower.includes('tier')) {
      return ['Freemium'];
    }
    return ['Paid'];
  }
  return ['Freemium']; // default
}

// Category mapping
function parseCategory(categoryString) {
  const categories = [];
  if (!categoryString) return ['Tools'];
  
  const lower = categoryString.toLowerCase();
  
  if (lower.includes('code editor') || lower.includes('development environment') || lower.includes('programming')) {
    categories.push('Programming');
  }
  if (lower.includes('ai') || lower.includes('llm')) {
    categories.push('AI Assistant');
  }
  if (lower.includes('design')) {
    categories.push('Design');
  }
  if (lower.includes('automation')) {
    categories.push('Automation');
  }
  if (lower.includes('web design') || lower.includes('website')) {
    categories.push('Web Design');
  }
  if (lower.includes('productivity')) {
    categories.push('Productivity');
  }
  if (lower.includes('video')) {
    categories.push('Video');
  }
  
  return categories.length > 0 ? categories : ['Tools'];
}

// Responsibility mapping from use cases
function mapUseCaseToResponsibility(useCase) {
  if (!useCase) return 'Manage Information';
  const lower = useCase.toLowerCase();
  if (lower.includes('code') || lower.includes('generate') || lower.includes('build') || lower.includes('implement')) {
    return 'Write Code';
  }
  if (lower.includes('debug') || lower.includes('fix') || lower.includes('refactor')) {
    return 'Debug Software';
  }
  if (lower.includes('design') || lower.includes('component') || lower.includes('ui') || lower.includes('style')) {
    return 'Design Websites';
  }
  if (lower.includes('deploy') || lower.includes('host')) {
    return 'Deploy Applications';
  }
  if (lower.includes('analyze') || lower.includes('research') || lower.includes('extract')) {
    return 'Research Topics';
  }
  if (lower.includes('automate') || lower.includes('workflow')) {
    return 'Automate Workflows';
  }
  if (lower.includes('manage') || lower.includes('organize')) {
    return 'Manage Information';
  }
  if (lower.includes('presentation') || lower.includes('content')) {
    return 'Create Presentations';
  }
  if (lower.includes('image') || lower.includes('generate')) {
    return 'Generate Images';
  }
  return 'Manage Information'; // default
}

// Map profession names to standard format
function mapProfession(user) {
  if (!user) return null;
  if (user.includes('Frontend') || user.includes('Front-end')) return 'Front-end Developer';
  if (user.includes('Backend') || user.includes('Back-end')) return 'Back-end Developer';
  if (user.includes('Full Stack') || user.includes('Full-Stack')) return 'Full Stack Developer';
  if (user.includes('UI/UX Designer') || user.includes('UI/UX')) return 'UI/UX Designer';
  if (user.includes('Graphic Designer')) return 'Graphic Designer';
  if (user.includes('Web Designer')) return 'Web Designer';
  if (user.includes('Designer')) return 'UI/UX Designer';
  if (user.includes('Developer')) return user;
  if (user.includes('Engineer')) return user;
  if (user.includes('Manager')) return user;
  if (user.includes('All departments') || user.includes('All professionals')) return 'All Professionals';
  return user;
}

// Tool name to Taxonomy file mapping
function getTaxonomyFileName(toolName) {
  // Map common variations
  const nameMap = {
    'Cursor': 'Cursor.json',
    'Claude': 'Claude.json',
    'GPT': 'ChatGPT.json',
    'Gemini': 'Gemini.json',
    'Perplexity': 'Perplexity.json',
    'MidJourney': 'Midjourney.json',
    'Midjourney': 'Midjourney.json',
    'Lovable': 'Lovable_dev.json',
    'Replit': 'Replit.json',
    'Grok': 'Grok.json',
    'Gamma': 'Gamma_app.json',
    'n8n': 'N8n.json',
    'Notion': 'Notion.json',
    'ElevenLabs': 'ElevenLabs.json',
    'InVideo AI': 'InVideo.json',
    'RunwayML': 'RunwayML.json',
    'Runway': 'RunwayML.json',
    'Hedra': 'Hedra.json',
    'HeyGen': 'HeyGen.json',
    'Suno': 'Suno.json',
    'TurboScribe': 'TurboScribe.json',
    'Adobe Firefly': 'Adobe_Firefly.json',
    'Genspark': 'Genspark_ai.json',
    'Loom': 'Loom.json',
    'Wispr Flow': 'Wispr_Flow.json'
  };
  
  if (nameMap[toolName]) {
    return nameMap[toolName];
  }
  
  // Try to construct filename from tool name
  const sanitized = toolName
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '')
    .replace(/_+/g, '_');
  
  return `${sanitized}.json`;
}

/**
 * Look up tool data in Taxonomy
 * @param {string} toolName - Name of the tool to look up
 * @param {string} workspaceRoot - Root path of the workspace
 * @returns {Object|null} - Tool data from Taxonomy or null if not found
 */
function lookupToolInTaxonomy(toolName, workspaceRoot) {
  const taxonomyPath = path.join(
    workspaceRoot,
    'Taxonomy',
    'Entities',
    'LIBRARIES',
    'Tools',
    'AI_Tools'
  );
  
  // Try exact filename match first
  const filename = getTaxonomyFileName(toolName);
  const filePath = path.join(taxonomyPath, filename);
  
  if (fs.existsSync(filePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return data;
    } catch (error) {
      console.warn(`Error reading Taxonomy file ${filePath}:`, error.message);
    }
  }
  
  // Try alternative: search all files for matching name
  try {
    if (fs.existsSync(taxonomyPath)) {
      const files = fs.readdirSync(taxonomyPath);
      for (const file of files) {
        if (file.endsWith('.json') && file !== 'AI_Tools_Master_Listing.json') {
          const filePath = path.join(taxonomyPath, file);
          try {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (data.name && data.name.toLowerCase() === toolName.toLowerCase()) {
              return data;
            }
          } catch (e) {
            // Skip invalid JSON files
            continue;
          }
        }
      }
    }
  } catch (error) {
    console.warn(`Error searching Taxonomy directory:`, error.message);
  }
  
  return null;
}

/**
 * Convert Taxonomy tool data to App format
 * @param {Object} taxonomyTool - Tool data from Taxonomy
 * @param {Object} defaults - Default values to use if Taxonomy data is missing
 * @returns {Object} - Tool in App format
 */
function convertTaxonomyToApp(taxonomyTool, defaults = {}) {
  // Get key features from strengths and integration capabilities
  const keyFeatures = [];
  if (taxonomyTool.strengths && Array.isArray(taxonomyTool.strengths)) {
    keyFeatures.push(...taxonomyTool.strengths.slice(0, 5));
  }
  if (keyFeatures.length < 5 && taxonomyTool.integration_capabilities) {
    const additional = taxonomyTool.integration_capabilities
      .slice(0, 5 - keyFeatures.length)
      .filter(f => !keyFeatures.some(kf => kf.toLowerCase().includes(f.toLowerCase().split(' ')[0])));
    keyFeatures.push(...additional);
  }
  
  // Map professions
  const professions = [];
  if (taxonomyTool.actual_remote_helpers_usage?.users) {
    const mapped = taxonomyTool.actual_remote_helpers_usage.users
      .map(mapProfession)
      .filter(p => p !== null);
    professions.push(...mapped);
  }
  
  // Map responsibilities from use cases
  const responsibilities = [];
  if (taxonomyTool.actual_remote_helpers_usage?.use_cases) {
    const mapped = taxonomyTool.actual_remote_helpers_usage.use_cases
      .slice(0, 6)
      .map(mapUseCaseToResponsibility);
    responsibilities.push(...new Set(mapped));
  }
  
  // Map departments
  const departments = [];
  if (taxonomyTool.departments_using) {
    const mapped = taxonomyTool.departments_using
      .map(dept => departmentMap[dept] || dept)
      .filter(d => d);
    departments.push(...new Set(mapped));
  }
  
  // Build tool object
  const tool = {
    name: taxonomyTool.name || defaults.name || 'Unknown Tool',
    url: taxonomyTool.documentation_url || defaults.url || '',
    category: parseCategory(taxonomyTool.category || defaults.category),
    description: taxonomyTool.description || taxonomyTool.purpose || defaults.description || 'AI tool for team collaboration.',
    keyFeatures: keyFeatures.length > 0 ? keyFeatures.slice(0, 5) : defaults.keyFeatures || ['AI-powered features', 'User-friendly interface'],
    subscription: parseSubscription(taxonomyTool.cost_structure || defaults.subscription),
    account: defaults.account || 'unknown@rh-s.com',
    lastUpdated: defaults.lastUpdated || new Date().toISOString().split('T')[0],
    whatsNew: taxonomyTool.actual_remote_helpers_usage?.workflows?.[0] || 
              defaults.whatsNew || 
              `Enhanced features and improved ${taxonomyTool.name || defaults.name} capabilities.`,
    profession: professions.length > 0 ? professions : defaults.profession || ['All Professionals'],
    responsibility: responsibilities.length > 0 ? responsibilities.slice(0, 5) : defaults.responsibility || ['Manage Information'],
    department: departments.length > 0 ? departments : defaults.department || ['Developers'],
    borderColor: defaults.borderColor || '#28a745'
  };
  
  return tool;
}

/**
 * Get tool data from Taxonomy with fallback to defaults
 * @param {string} toolName - Name of the tool
 * @param {Object} defaults - Default values if Taxonomy lookup fails
 * @param {string} workspaceRoot - Root path of the workspace
 * @returns {Object} - Tool data in App format
 */
function getToolData(toolName, defaults = {}, workspaceRoot) {
  const taxonomyData = lookupToolInTaxonomy(toolName, workspaceRoot);
  
  if (taxonomyData) {
    return convertTaxonomyToApp(taxonomyData, defaults);
  }
  
  // Return defaults if Taxonomy lookup failed
  return {
    name: defaults.name || toolName,
    url: defaults.url || '',
    category: defaults.category || ['Tools'],
    description: defaults.description || `AI tool for ${defaults.department?.[0] || 'team'} team.`,
    keyFeatures: defaults.keyFeatures || ['AI-powered features', 'User-friendly interface'],
    subscription: defaults.subscription || ['Freemium'],
    account: defaults.account || 'unknown@rh-s.com',
    lastUpdated: defaults.lastUpdated || new Date().toISOString().split('T')[0],
    whatsNew: defaults.whatsNew || 'Newly added tool!',
    profession: defaults.profession || ['All Professionals'],
    responsibility: defaults.responsibility || ['Manage Information'],
    department: defaults.department || ['Developers'],
    borderColor: defaults.borderColor || '#808080'
  };
}

module.exports = {
  lookupToolInTaxonomy,
  convertTaxonomyToApp,
  getToolData,
  parseSubscription,
  parseCategory,
  mapUseCaseToResponsibility,
  mapProfession
};

