const fs = require('fs');
const path = require('path');
const { getToolData } = require('./taxonomy_lookup');

// Tool name mapping from AI_list.json to app tool names
const toolNameMap = {
  'Cursor Pro': 'Cursor',
  'GPT team': 'GPT',
  'GPT': 'GPT',
  'Gemini': 'Gemini',
  'Claude Ai': 'Claude',
  'Make.com': 'Make.com',
  'perplexity.ai': 'Perplexity',
  'Midjourney': 'MidJourney',
  'Lovable': 'Lovable',
  'Replit AI': 'Replit',
  'Grok/XAI': 'Grok',
  'Gamma': 'Gamma',
  'N8n': 'n8n',
  'Dropbox': 'Dropbox Dash',
  'Notion AI': 'Notion',
  'Envato': 'Envato Elements AI',
  'elevenlabs': 'ElevenLabs',
  'invideo AI': 'InVideo AI',
  'Runway': 'RunwayML',
  'Hedra': 'Hedra',
  'HeyGen': 'HeyGen',
  'Suno': 'Suno',
  'TURBOSCRIBE.AI': 'TurboScribe',
  'Adobe Firefly Pro': 'Adobe Firefly',
  'Genspark': 'Genspark',
  'Loom': 'Loom',
  'Wispr Flow': 'Wispr Flow'
};

// Department mapping from AI_list.json to app format
const departmentMap = {
  'AI': 'Developers',
  'developers': 'Developers',
  'designers': 'Designers',
  'lead generator': 'Marketers',
  'sales manager': 'Marketers',
  'recruiter': 'Managers',
  'financial manager': 'Managers',
  'videographers': 'Videograph',
  'designers project': 'Designers'
};

// Get workspace root
// In GitHub Actions: repository root
// Locally: Dropbox root
const scriptDir = __dirname;
let workspaceRoot;

// Check if we're in GitHub Actions (check for GITHUB_WORKSPACE env var)
if (process.env.GITHUB_WORKSPACE) {
  workspaceRoot = process.env.GITHUB_WORKSPACE;
} else {
  // Local development: go up from AdminRHS-AI-Catalog-4/scripts/ to Dropbox root
  workspaceRoot = path.resolve(scriptDir, '../../../../..');
}

// Paths
const aiListPath = path.join(workspaceRoot, 'Finance Public', 'AI_list.json');
// Also try alternative path for AI_list.json (in case of different naming)
const aiListPathAlt = path.join(workspaceRoot, 'Finance Public', 'AI  - AI.json');
const smtJsPath = path.join(scriptDir, '..', 'remake AI Catalog', 'js', 'smt.js');

// Logging
const logFile = path.join(scriptDir, '..', `sync-${new Date().toISOString().split('T')[0]}.log`);
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, logMessage);
  console.log(message);
}

/**
 * Read and parse AI_list.json
 */
function readAIList() {
  try {
    // Try primary path first
    let filePath = aiListPath;
    if (!fs.existsSync(filePath)) {
      // Try alternative path
      if (fs.existsSync(aiListPathAlt)) {
        filePath = aiListPathAlt;
        log(`Using alternative path: ${aiListPathAlt}`);
      } else {
        throw new Error(`AI_list.json not found at ${aiListPath} or ${aiListPathAlt}`);
      }
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    log(`Error reading AI_list.json: ${error.message}`);
    throw error;
  }
}

/**
 * Extract tools array from smt.js
 */
function extractToolsFromSmtJs() {
  try {
    const content = fs.readFileSync(smtJsPath, 'utf8');
    
    // Find the tools array
    const toolsStart = content.indexOf('const tools = [');
    if (toolsStart === -1) {
      throw new Error('Could not find "const tools = [" in smt.js');
    }
    
    // Find the closing bracket of the array
    let bracketCount = 0;
    let inString = false;
    let stringChar = null;
    let toolsEnd = -1;
    
    for (let i = toolsStart + 'const tools = ['.length; i < content.length; i++) {
      const char = content[i];
      const prevChar = i > 0 ? content[i - 1] : '';
      
      if (!inString && (char === '"' || char === "'" || char === '`')) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        inString = false;
        stringChar = null;
      }
      
      if (!inString) {
        if (char === '[') bracketCount++;
        if (char === ']') {
          bracketCount--;
          if (bracketCount === 0) {
            toolsEnd = i + 1;
            break;
          }
        }
      }
    }
    
    if (toolsEnd === -1) {
      throw new Error('Could not find end of tools array in smt.js');
    }
    
    // Extract the array content (including the opening bracket)
    const arrayStart = toolsStart + 'const tools = '.length;
    const arrayContent = content.substring(arrayStart, toolsEnd);
    
    // Use eval to parse the JavaScript array (safe in this controlled context)
    // This is more reliable than trying to convert JS to JSON
    try {
      // Create a safe evaluation context
      const toolsArray = eval(arrayContent);
      if (!Array.isArray(toolsArray)) {
        throw new Error('Extracted content is not an array');
      }
      return toolsArray;
    } catch (evalError) {
      log(`Error evaluating tools array: ${evalError.message}`);
      throw new Error(`Failed to parse tools array: ${evalError.message}`);
    }
  } catch (error) {
    log(`Error extracting tools from smt.js: ${error.message}`);
    throw error;
  }
}

/**
 * Update smt.js with new tools array
 */
function updateSmtJs(tools) {
  try {
    const content = fs.readFileSync(smtJsPath, 'utf8');
    
    // Find the tools array
    const toolsStart = content.indexOf('const tools = [');
    if (toolsStart === -1) {
      throw new Error('Could not find "const tools = [" in smt.js');
    }
    
    // Find the closing bracket
    let bracketCount = 0;
    let inString = false;
    let stringChar = null;
    let toolsEnd = -1;
    
    for (let i = toolsStart + 'const tools = ['.length; i < content.length; i++) {
      const char = content[i];
      const prevChar = i > 0 ? content[i - 1] : '';
      
      if (!inString && (char === '"' || char === "'" || char === '`')) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        inString = false;
        stringChar = null;
      }
      
      if (!inString) {
        if (char === '[') bracketCount++;
        if (char === ']') {
          bracketCount--;
          if (bracketCount === 0) {
            toolsEnd = i + 1;
            break;
          }
        }
      }
    }
    
    if (toolsEnd === -1) {
      throw new Error('Could not find end of tools array in smt.js');
    }
    
    // Format tools array as JavaScript
    const toolsJs = formatToolsAsJs(tools);
    
    // Replace the array
    const before = content.substring(0, toolsStart + 'const tools = ['.length);
    const after = content.substring(toolsEnd);
    const newContent = before + '\n' + toolsJs + '\n    ];' + after;
    
    // Write back
    fs.writeFileSync(smtJsPath, newContent, 'utf8');
    log(`Successfully updated smt.js with ${tools.length} tools`);
  } catch (error) {
    log(`Error updating smt.js: ${error.message}`);
    throw error;
  }
}

/**
 * Format tools array as JavaScript with proper indentation
 */
function formatToolsAsJs(tools) {
  return tools.map((tool, index) => {
    const indent = '      ';
    const isLast = index === tools.length - 1;
    const comma = isLast ? '' : ',';
    
    return `${indent}{\n` +
           `${indent}  id: "${tool.id}",\n` +
           `${indent}  name: "${tool.name}",\n` +
           `${indent}  url: "${tool.url}",\n` +
           `${indent}  category: ${JSON.stringify(tool.category)},\n` +
           `${indent}  description: "${escapeJsString(tool.description)}",\n` +
           `${indent}  keyFeatures: ${JSON.stringify(tool.keyFeatures)},\n` +
           `${indent}  subscription: ${JSON.stringify(tool.subscription)},\n` +
           `${indent}  account: "${escapeJsString(tool.account)}",\n` +
           `${indent}  lastUpdated: "${tool.lastUpdated}",\n` +
           `${indent}  whatsNew: "${escapeJsString(tool.whatsNew)}",\n` +
           `${indent}  profession: ${JSON.stringify(tool.profession)},\n` +
           `${indent}  responsibility: ${JSON.stringify(tool.responsibility)},\n` +
           `${indent}  department: ${JSON.stringify(tool.department)},\n` +
           `${indent}  borderColor: "${tool.borderColor}"\n` +
           `${indent}}${comma}`;
  }).join('\n');
}

/**
 * Escape string for JavaScript
 */
function escapeJsString(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

/**
 * Process AI_list.json data and group by tool
 */
function processAIListData(aiListData) {
  const toolsMap = {};
  
  aiListData.forEach(item => {
    const originalName = item.AI?.trim();
    if (!originalName) return;
    
    const toolName = toolNameMap[originalName] || originalName;
    
    if (!toolsMap[toolName]) {
      toolsMap[toolName] = {
        name: toolName,
        accounts: new Set(),
        subscriptions: [],
        departments: new Set(),
        links: [],
        validUntil: [],
        paidDates: []
      };
    }
    
    // Process account
    const account = item.Acc?.trim() || '';
    if (account && !account.includes('password')) {
      const cleanAccount = account.split(' password:')[0].trim();
      if (cleanAccount) {
        toolsMap[toolName].accounts.add(cleanAccount);
      }
    }
    
    // Process subscription status
    const status = item.col_3?.toLowerCase() || 'not paid';
    toolsMap[toolName].subscriptions.push(status);
    
    // Process department
    if (item.Department) {
      const dept = item.Department.split(',').map(d => d.trim()).filter(d => d);
      dept.forEach(d => {
        const mappedDept = departmentMap[d.toLowerCase()] || d;
        toolsMap[toolName].departments.add(mappedDept);
      });
    }
    
    // Process link
    if (item.Link?.trim()) {
      const link = item.Link.trim();
      if (link && !toolsMap[toolName].links.includes(link)) {
        toolsMap[toolName].links.push(link);
      }
    }
    
    // Process dates
    if (item['valid until']?.trim()) {
      toolsMap[toolName].validUntil.push(item['valid until'].trim());
    }
    if (item['Paid date']?.trim()) {
      toolsMap[toolName].paidDates.push(item['Paid date'].trim());
    }
  });
  
  // Convert Sets to Arrays and determine subscription
  Object.keys(toolsMap).forEach(toolName => {
    const tool = toolsMap[toolName];
    tool.accounts = Array.from(tool.accounts);
    tool.departments = Array.from(tool.departments);
    
    // Determine subscription status
    const paidCount = tool.subscriptions.filter(s => s === 'paid').length;
    const freeCount = tool.subscriptions.filter(s => s === 'free').length;
    const notPaidCount = tool.subscriptions.filter(s => s === 'not paid').length;
    
    if (paidCount > 0 && notPaidCount === 0 && freeCount === 0) {
      tool.subscription = ['Paid'];
    } else if (freeCount > 0 && paidCount === 0 && notPaidCount === 0) {
      tool.subscription = ['Free'];
    } else if (paidCount > 0) {
      tool.subscription = ['Paid'];
    } else {
      tool.subscription = ['Freemium'];
    }
    
    // Format account string
    if (tool.accounts.length === 0) {
      tool.account = 'unknown@rh-s.com';
    } else if (tool.accounts.length === 1) {
      tool.account = tool.accounts[0];
    } else {
      tool.account = 'Multiple accounts: ' + tool.accounts.join(', ');
    }
    
    // Get primary URL
    tool.url = tool.links.length > 0 ? tool.links[0] : '';
    
    // Get latest valid until date
    tool.latestValidUntil = tool.validUntil.length > 0 
      ? tool.validUntil.sort().reverse()[0] 
      : null;
  });
  
  return toolsMap;
}

/**
 * Generate next tool ID
 */
function getNextToolId(existingTools) {
  const ids = existingTools
    .map(t => t.id)
    .filter(id => id && id.startsWith('tool-'))
    .map(id => {
      const match = id.match(/tool-(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    });
  
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;
  const nextId = maxId + 1;
  return `tool-${String(nextId).padStart(3, '0')}`;
}

/**
 * Main sync function
 */
function syncCatalog() {
  log('Starting AI Catalog sync...');
  
  try {
    // Read AI_list.json
    log('Reading AI_list.json...');
    const aiListData = readAIList();
    log(`Found ${aiListData.length} entries in AI_list.json`);
    
    // Process AI_list data
    const processedTools = processAIListData(aiListData);
    log(`Processed ${Object.keys(processedTools).length} unique tools`);
    
    // Read existing tools from smt.js
    log('Reading existing tools from smt.js...');
    const existingTools = extractToolsFromSmtJs();
    log(`Found ${existingTools.length} existing tools`);
    
    // Create map of existing tools by name (case-insensitive)
    const existingToolsMap = {};
    existingTools.forEach(tool => {
      const key = tool.name.toLowerCase();
      if (!existingToolsMap[key]) {
        existingToolsMap[key] = tool;
      }
    });
    
    // Process each tool from AI_list
    const updatedTools = [];
    const newTools = [];
    const toolsToAdd = [];
    
    Object.keys(processedTools).forEach(toolName => {
      const processedTool = processedTools[toolName];
      const existingKey = toolName.toLowerCase();
      const existingTool = existingToolsMap[existingKey];
      
      if (existingTool) {
        // Update existing tool
        existingTool.account = processedTool.account;
        existingTool.subscription = processedTool.subscription;
        existingTool.lastUpdated = new Date().toISOString().split('T')[0];
        
        // Update URL if we have one and existing doesn't
        if (processedTool.url && !existingTool.url) {
          existingTool.url = processedTool.url;
        }
        
        // Update departments if we have new ones
        if (processedTool.departments.length > 0) {
          const existingDepts = new Set(existingTool.department || []);
          processedTool.departments.forEach(dept => existingDepts.add(dept));
          existingTool.department = Array.from(existingDepts);
        }
        
        // Update whatsNew
        if (processedTool.latestValidUntil) {
          existingTool.whatsNew = `Updated subscription info. Valid until ${processedTool.latestValidUntil} for ${processedTool.accounts.length} account(s).`;
        } else {
          existingTool.whatsNew = `Updated subscription info. Subscription status: ${processedTool.subscription[0]}.`;
        }
        
        updatedTools.push(existingTool);
        log(`Updated tool: ${toolName}`);
      } else {
        // New tool - need to get data from Taxonomy
        log(`New tool detected: ${toolName}`);
        
        const defaults = {
          name: toolName,
          url: processedTool.url,
          account: processedTool.account,
          subscription: processedTool.subscription,
          department: processedTool.departments.length > 0 ? processedTool.departments : ['Developers'],
          lastUpdated: new Date().toISOString().split('T')[0],
          whatsNew: processedTool.latestValidUntil 
            ? `Newly added tool! Subscription status: ${processedTool.subscription[0]}. Valid until ${processedTool.latestValidUntil}.`
            : `Newly added tool! Subscription status: ${processedTool.subscription[0]}.`
        };
        
        // Get Taxonomy data (workspaceRoot should point to repository root in GitHub Actions)
        const taxonomyRoot = process.env.GITHUB_WORKSPACE || workspaceRoot;
        const toolData = getToolData(toolName, defaults, taxonomyRoot);
        toolData.id = getNextToolId(existingTools.concat(toolsToAdd));
        toolsToAdd.push(toolData);
        newTools.push(toolName);
        log(`Prepared new tool: ${toolName} (ID: ${toolData.id})`);
      }
    });
    
    // Combine: new tools first, then existing (updated + unchanged)
    // Find tools that weren't in processedTools (unchanged)
    const processedToolNames = new Set(Object.keys(processedTools).map(n => n.toLowerCase()));
    const unchangedTools = existingTools.filter(tool => {
      const key = tool.name.toLowerCase();
      return !processedToolNames.has(key);
    });
    
    const allTools = [
      ...toolsToAdd,
      ...updatedTools,
      ...unchangedTools
    ];
    
    // Update smt.js
    if (newTools.length > 0 || updatedTools.length > 0) {
      log(`Updating smt.js: ${newTools.length} new tools, ${updatedTools.length} updated tools`);
      updateSmtJs(allTools);
      log('Sync completed successfully!');
      return {
        success: true,
        newTools: newTools.length,
        updatedTools: updatedTools.length,
        totalTools: allTools.length
      };
    } else {
      log('No changes detected. Catalog is up to date.');
      return {
        success: true,
        newTools: 0,
        updatedTools: 0,
        totalTools: allTools.length
      };
    }
  } catch (error) {
    log(`Sync failed: ${error.message}`);
    log(error.stack);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  try {
    const result = syncCatalog();
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
}

module.exports = { syncCatalog };

