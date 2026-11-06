import fs from 'fs';
import path from 'path';

const srcPath = 'C:/Users/Hitesh Balaji/.gemini/antigravity/brain/c344e293-97c0-4fda-9a5b-15ee70102890/.system_generated/steps/12/content.md';
const content = fs.readFileSync(srcPath, 'utf8');

// Find start of code after frontmatter / markdown separator '---'
const marker = '---';
const idx = content.indexOf(marker);
let code = content.slice(idx + marker.length).trim();

// Avoid auto-executing on initial import; only run when user clicks 'Motion' button
const target = '  start();\n})();';
const replacement = '  // Auto-start disabled; triggered via Motion button\n})();';

if (code.includes(target)) {
  code = code.replace(target, replacement);
} else {
  // alternative spacing
  code = code.replace(/start\(\);\s*\}\)\(\);/, '// start() disabled\n})();');
}

const moduleCode = `/**
 * Standalone Swarm Rebuild Engine
 * Adapted from Joel Califa (swarm-site) & imperfec-t/swarm-Antigravity
 * Wipes the page to a canvas blueprint and lets multiplayer cursors
 * rebuild it live with typing sounds, Figma ruler guides, and flocking physics.
 */

${code}

export function toggleSwarm() {
  if (typeof window !== "undefined" && window.__swarmRebuild) {
    window.__swarmRebuild.toggle();
  }
}

export function startSwarm() {
  if (typeof window !== "undefined" && window.__swarmRebuild) {
    window.__swarmRebuild.start();
  }
}

export function stopSwarm(reveal = true) {
  if (typeof window !== "undefined" && window.__swarmRebuild) {
    window.__swarmRebuild.stop(reveal);
  }
}

export function isSwarmActive() {
  return typeof window !== "undefined" && Boolean(window.__swarmRebuild && window.__swarmRebuild.app);
}
`;

fs.writeFileSync('src/swarm/swarmEngine.js', moduleCode, 'utf8');
console.log('Successfully wrote src/swarm/swarmEngine.js! Size:', moduleCode.length);
