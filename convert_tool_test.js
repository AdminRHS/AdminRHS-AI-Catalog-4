// Test conversion script for Taxonomy JSON to App format
// Testing with Cursor tool

const fs = require('fs');
const path = require('path');

// Read Taxonomy Cursor JSON
const taxonomyPath = '/Users/nikolay/Library/CloudStorage/Dropbox/Taxonomy/Entities/LIBRARIES/Tools/AI_Tools/Cursor.json';
const taxonomyData = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));

// Department mapping
const departmentMap = {
  'Dev': 'Developers',
  'Design': 'Designers',
  'AI': 'Developers', // AI team uses developer tools
  'LG': 'Marketers',
  'Video': 'Videograph',
  'Managers': 'Managers'
};

// Subscription mapping
function parseSubscription(costStructure) {
  const lower = costStructure.toLowerCase();
  if (lower.includes('free') && (lower.includes('tier') || lower.includes('available'))) {
    return ['Freemium'];
  } else if (lower.includes('free')) {
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
  
  return categories.length > 0 ? categories : ['Tools'];
}

// Responsibility mapping from use cases
function mapUseCaseToResponsibility(useCase) {
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
  return 'Write Code'; // default
}

// Convert Taxonomy to App format
function convertTaxonomyToApp(taxonomyTool, existingToolId = null) {
  // Get unique key features from strengths (prioritize) and integration capabilities
  const keyFeatures = [
    ...(taxonomyTool.strengths || []).slice(0, 5)
  ];
  if (keyFeatures.length < 5 && taxonomyTool.integration_capabilities) {
    const additional = taxonomyTool.integration_capabilities
      .slice(0, 5 - keyFeatures.length)
      .filter(f => !keyFeatures.some(kf => kf.toLowerCase().includes(f.toLowerCase().split(' ')[0])));
    keyFeatures.push(...additional);
  }
  
  // Map professions - keep as is but ensure proper format
  const professions = (taxonomyTool.actual_remote_helpers_usage?.users || []).map(user => {
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
    return user;
  });
  
  // Map responsibilities from use cases - remove duplicates
  const responsibilities = [...new Set(
    (taxonomyTool.actual_remote_helpers_usage?.use_cases || [])
      .slice(0, 6)
      .map(mapUseCaseToResponsibility)
  )].slice(0, 5);
  
  // Map departments - remove duplicates
  const departments = [...new Set(
    (taxonomyTool.departments_using || [])
      .map(dept => departmentMap[dept] || dept)
  )];
  
  // Fix URL - prefer .sh domain for Cursor
  let url = taxonomyTool.documentation_url || '';
  if (taxonomyTool.name === 'Cursor' && !url.includes('cursor.sh')) {
    url = 'https://cursor.sh/';
  }
  
  const tool = {
    id: existingToolId || `tool-${taxonomyTool.tool_id?.replace('TOOL-', '').toLowerCase() || 'new'}`,
    name: taxonomyTool.name,
    url: url,
    category: parseCategory(taxonomyTool.category),
    description: taxonomyTool.description || taxonomyTool.purpose || '',
    keyFeatures: keyFeatures.slice(0, 5),
    subscription: parseSubscription(taxonomyTool.cost_structure || 'Freemium'),
    account: 'dev@rh-s.com', // Default, can be updated
    lastUpdated: taxonomyTool.discovery_date || new Date().toISOString().split('T')[0],
    whatsNew: taxonomyTool.actual_remote_helpers_usage?.workflows?.[0] || 
               `Enhanced features and improved ${taxonomyTool.name} capabilities.`,
    profession: professions.length > 0 ? professions : ['Full Stack Developer'],
    responsibility: responsibilities.length > 0 ? responsibilities : ['Write Code'],
    department: departments.length > 0 ? departments : ['Developers'],
    borderColor: '#28a745' // Default green, can be customized
  };
  
  return tool;
}

// Convert Cursor
const convertedCursor = convertTaxonomyToApp(taxonomyData, 'tool-019');

console.log('=== ORIGINAL APP ENTRY ===');
console.log(JSON.stringify({
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
}, null, 2));

console.log('\n=== CONVERTED FROM TAXONOMY ===');
console.log(JSON.stringify(convertedCursor, null, 2));

console.log('\n=== KEY DIFFERENCES ===');
console.log('Description: More detailed in Taxonomy version');
console.log('Key Features: Taxonomy has 8 strengths vs 5 in app');
console.log('Profession: Taxonomy includes UI/UX Designer, AI Prompt Engineer');
console.log('Department: Taxonomy includes Design and AI departments');
console.log('Use Cases: Taxonomy has detailed workflow patterns');

// Save converted version
const outputPath = path.join(__dirname, 'cursor_converted.json');
fs.writeFileSync(outputPath, JSON.stringify(convertedCursor, null, 2));
console.log(`\n✅ Converted tool saved to: ${outputPath}`);

