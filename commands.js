const StrategyEngine = require('./plugin.js');
const path = require('path');

const engine = new StrategyEngine(path.dirname(__filename));

const commands = {
  'strategy:go': {
    description: 'Strategy engine entry point. Routes to the right mode.',
    handler: (input) => ({
      skill: 'go',
      context: engine.buildContext('go'),
      userInput: input
    })
  },
  'strategy:research': {
    description: 'Deep desk research with verified sources.',
    handler: (input) => ({
      skill: 'research',
      context: engine.buildContext('research'),
      userInput: input
    })
  },
  'strategy:brief': {
    description: 'One-page creative brief using Sacred Six framework.',
    handler: (input) => ({
      skill: 'brief',
      context: engine.buildContext('brief'),
      userInput: input
    })
  },
  'strategy:narrative': {
    description: 'Full strategy document + slide-ready copy.',
    handler: (input) => ({
      skill: 'narrative',
      context: engine.buildContext('narrative'),
      userInput: input
    })
  },
  'strategy:courtroom': {
    description: '10 agents debate your idea across 2 rounds.',
    handler: (input) => ({
      skill: 'courtroom',
      context: engine.buildContext('courtroom'),
      userInput: input
    })
  },
  'strategy:pressure-test': {
    description: 'Fast adversarial critique from 7 angles.',
    handler: (input) => ({
      skill: 'pressure-test',
      context: engine.buildContext('pressure-test'),
      userInput: input
    })
  },
  'strategy:product': {
    description: 'Product vision, spec, or component map.',
    handler: (input) => ({
      skill: 'product',
      context: engine.buildContext('product'),
      userInput: input
    })
  },
  'strategy:distill': {
    description: 'Compress copy without losing meaning.',
    handler: (input) => ({
      skill: 'distill',
      context: engine.buildContext('distill'),
      userInput: input
    })
  },
  'strategy:insight-distill': {
    description: 'Research → insights, tensions, hypotheses.',
    handler: (input) => ({
      skill: 'insight-distill',
      context: engine.buildContext('insight-distill'),
      userInput: input
    })
  },
  'strategy:narrative-review': {
    description: 'Score narrative against brief before stakeholders.',
    handler: (input) => ({
      skill: 'narrative-review',
      context: engine.buildContext('narrative-review'),
      userInput: input
    })
  },
  'strategy:pipeline': {
    description: 'Full 7-step sequence: intake → research → brief → spec → map → build.',
    handler: (input) => ({
      skill: 'pipeline',
      context: engine.buildContext('pipeline'),
      userInput: input
    })
  },
  'strategy:ecosystems': {
    description: 'Ecosystem analysis: map, audit, find gaps, crawl as a persona.',
    handler: (input) => ({
      skill: 'ecosystems',
      context: engine.buildContext('ecosystems'),
      userInput: input
    })
  }
};

module.exports = commands;
