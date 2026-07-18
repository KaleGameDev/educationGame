const fs = require('fs');
const path = require('path');

const root = 'D:/EducationGame';
const dataPath = path.join(root, 'js', 'data.js');
const scenesDir = path.join(root, 'assets', 'scenes');

const sourceFiles = fs.readdirSync(scenesDir)
  .filter((f) => /^Char_1_Scene_\d+\.png$/.test(f))
  .sort();

const prefixMap = { mai: 'Char_1', minh: 'Char_4', linh: 'Char_2', nam: 'Char_3' };
for (const prefix of ['Char_2', 'Char_3', 'Char_4']) {
  for (const src of sourceFiles) {
    const dst = path.join(scenesDir, prefix + src.slice('Char_1'.length));
    if (!fs.existsSync(dst)) {
      fs.copyFileSync(path.join(scenesDir, src), dst);
    }
  }
}

let text = fs.readFileSync(dataPath, 'utf8');
const entries = [];
const entryRegex = /"((?:mai|minh|linh|nam)_[^"]+)"\s*:\s*\{/g;
let match;
while ((match = entryRegex.exec(text))) {
  const key = match[1];
  const openBrace = text.indexOf('{', match.index);
  let depth = 0;
  let inString = false;
  let escaped = false;
  let end = -1;
  for (let i = openBrace; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
    } else if (ch === '{') {
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end !== -1) {
    entries.push({ key, start: openBrace, end });
  }
}

for (const entry of entries) {
  const block = text.slice(entry.start, entry.end + 1);
  if (!block.includes('isResult: true') || block.includes('illustration:')) continue;
  const m = entry.key.match(/^(?:mai|minh|linh|nam)_(\d+)_(sai|dung)_[a-z]$/);
  if (!m) continue;

  const qNum = parseInt(m[1], 10);
  const outcome = m[2];
  const char = entry.key.split('_')[0];
  const prefix = prefixMap[char];
  let sceneNum = (qNum * 2) - 1;
  if (outcome === 'dung') sceneNum += 1;
  sceneNum = ((sceneNum - 1) % 12) + 1;
  const illustrationValue = `assets/scenes/${prefix}_Scene_${sceneNum}.png`;

  const replacement = block.replace(/(resultColor:\s*"[^"]+",\n)/, `$1        illustration: "${illustrationValue}",\n`);
  text = text.slice(0, entry.start) + replacement + text.slice(entry.end + 1);
}

fs.writeFileSync(dataPath, text, 'utf8');
console.log('Updated data.js with illustrations for all result scenes.');
