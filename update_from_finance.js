// Script to update tools and accounts from Finance Public/AI - AI.json
const fs = require('fs');
const path = require('path');

// Read the finance JSON file
const financePath = '/Users/nikolay/Library/CloudStorage/Dropbox/Finance Public/AI  - AI.json';
const financeData = JSON.parse(fs.readFileSync(financePath, 'utf8'));

// Tool name mapping from finance JSON to app tool names
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

// Group by account
const accountsMap = {};
const toolAccountsMap = {}; // Track which accounts have which tools

financeData.forEach(item => {
  const account = item.Acc || '';
  if (!account || account.includes('password')) return; // Skip entries without account or with passwords
  
  // Clean account email (remove password info)
  const cleanAccount = account.split(' password:')[0].trim();
  if (!cleanAccount) return;
  
  const toolName = toolNameMap[item.AI] || item.AI;
  const status = item.Status?.toLowerCase() || 'not paid';
  
  // Initialize account if not exists
  if (!accountsMap[cleanAccount]) {
    accountsMap[cleanAccount] = {
      email: cleanAccount,
      toolNames: []
    };
  }
  
  // Add tool to account if not already present
  if (!accountsMap[cleanAccount].toolNames.includes(toolName)) {
    accountsMap[cleanAccount].toolNames.push(toolName);
  }
  
  // Track tool-account relationships
  if (!toolAccountsMap[toolName]) {
    toolAccountsMap[toolName] = [];
  }
  if (!toolAccountsMap[toolName].includes(cleanAccount)) {
    toolAccountsMap[toolName].push(cleanAccount);
  }
});

// Convert to array and sort
const accounts = Object.values(accountsMap).sort((a, b) => {
  const order = ["dev@rh-s.com", "admin@rh-s.com", "lg@rh-s.com", "niko@rh-s.com", "sales@rh-s.com"];
  const aIndex = order.indexOf(a.email);
  const bIndex = order.indexOf(b.email);
  if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
  if (aIndex !== -1) return -1;
  if (bIndex !== -1) return 1;
  return a.email.localeCompare(b.email);
});

console.log('=== ACCOUNTS TO UPDATE ===');
console.log(JSON.stringify(accounts, null, 2));

console.log('\n=== TOOL ACCOUNTS MAPPING ===');
console.log(JSON.stringify(toolAccountsMap, null, 2));

// Determine subscription status for tools
const toolStatusMap = {};
financeData.forEach(item => {
  const toolName = toolNameMap[item.AI] || item.AI;
  const status = item.Status?.toLowerCase() || 'not paid';
  
  if (!toolStatusMap[toolName]) {
    toolStatusMap[toolName] = { paid: 0, notPaid: 0, free: 0 };
  }
  
  if (status === 'paid') toolStatusMap[toolName].paid++;
  else if (status === 'free') toolStatusMap[toolName].free++;
  else toolStatusMap[toolName].notPaid++;
});

console.log('\n=== TOOL SUBSCRIPTION STATUS ===');
Object.entries(toolStatusMap).forEach(([tool, status]) => {
  let subscription = 'Freemium';
  if (status.paid > 0 && status.notPaid === 0 && status.free === 0) subscription = 'Paid';
  else if (status.free > 0 && status.paid === 0 && status.notPaid === 0) subscription = 'Free';
  else if (status.paid > 0) subscription = 'Paid'; // If any paid, mark as Paid
  console.log(`${tool}: ${subscription} (paid: ${status.paid}, not paid: ${status.notPaid}, free: ${status.free})`);
});

// Save accounts to a file for easy copy-paste
const outputPath = path.join(__dirname, 'updated_accounts.json');
fs.writeFileSync(outputPath, JSON.stringify(accounts, null, 2));
console.log(`\n✅ Accounts saved to: ${outputPath}`);

