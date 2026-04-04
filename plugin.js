const fs = require('fs');
const path = require('path');

class StrategyEngine {
  constructor(pluginPath) {
    this.pluginPath = pluginPath;
    this.skills = {};
    this.agents = {};
    this.rules = {};
    this.references = {};
    this.feedbackLog = null;
    this.loadAllAssets();
  }

  loadAllAssets() {
    // Load all markdown files by category
    this.loadDirectory('skills', this.skills);
    this.loadDirectory('agents', this.agents);
    this.loadDirectory('rules', this.rules);
    this.loadDirectory('references', this.references);
    this.loadFeedbackLog();
  }

  loadDirectory(dirname, target) {
    const dirPath = path.join(this.pluginPath, dirname);
    if (!fs.existsSync(dirPath)) return;

    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (file.endsWith('.md')) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const key = fullPath.replace(dirPath, '').replace(/\.md$/, '');
          target[key] = content;
        }
      });
    };
    walkDir(dirPath);
  }

  loadFeedbackLog() {
    const feedbackPath = path.join(this.pluginPath, 'feedback-log.md');
    if (fs.existsSync(feedbackPath)) {
      this.feedbackLog = fs.readFileSync(feedbackPath, 'utf-8');
    }
  }

  getSkillContent(skillName) {
    const skillPath = `/go/${skillName}`;
    const skill = this.skills[skillPath] || this.skills[`/${skillName}`] || this.skills[skillName];
    return skill || null;
  }

  buildContext(skillName) {
    // Build the full context for a skill: the skill itself + relevant rules + feedback log
    const skill = this.getSkillContent(skillName);
    if (!skill) return null;

    const voiceRules = this.rules['/voice'] || this.rules['/voice.md'] || '';
    const qualityGates = this.rules['/quality-gates'] || this.rules['/quality-gates.md'] || '';
    const processRules = this.rules['/process'] || this.rules['/process.md'] || '';

    let context = '';
    
    if (this.feedbackLog) {
      context += `# FEEDBACK LOG (BINDING)\n${this.feedbackLog}\n\n`;
    }

    context += `# SKILL: ${skillName}\n${skill}\n\n`;

    if (voiceRules) context += `# VOICE RULES\n${voiceRules}\n\n`;
    if (qualityGates) context += `# QUALITY GATES\n${qualityGates}\n\n`;
    if (processRules) context += `# PROCESS RULES\n${processRules}\n\n`;

    return context;
  }

  getAvailableSkills() {
    return Object.keys(this.skills)
      .filter(k => k.includes('/SKILL.md') || k.endsWith('SKILL'))
      .map(k => k.split('/')[1])
      .filter(Boolean);
  }
}

module.exports = StrategyEngine;
