const fs = require('fs');
const path = require('path');

// Load all skills from the skills/ directory
const skillsDir = path.join(__dirname, 'skills');
const skills = {};

fs.readdirSync(skillsDir).forEach(skillName => {
  const skillPath = path.join(skillsDir, skillName, 'SKILL.md');
  if (fs.existsSync(skillPath)) {
    const content = fs.readFileSync(skillPath, 'utf-8');
    skills[`strategy:${skillName}`] = {
      description: `Strategy Engine: ${skillName}`,
      content: content
    };
  }
});

module.exports = {
  skills,
  version: '0.1.0'
};
