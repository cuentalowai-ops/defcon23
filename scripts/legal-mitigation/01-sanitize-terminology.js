#!/usr/bin/env node
const fs = require('fs');
const glob = require('glob');

const REPLACEMENTS = [
  { pattern: /alertas?\s+AML/gi, replacement: 'alertas de control interno' },
  { pattern: /micro-?fraccionamiento/gi, replacement: 'diversificación transaccional estructurada' },
  { pattern: /reducir\s+detectabilidad/gi, replacement: 'optimizar transparencia operativa' },
  { pattern: /fundación\s+cultural\s*\(como\s+vehículo\)/gi, replacement: 'entidad coordinadora de actividades culturales' },
  { pattern: /viscosidad\s+criminal/gi, replacement: 'fricción administrativa' },
  { pattern: /blanqueo\s+de\s+capitales/gi, replacement: 'optimización de tesorería corporativa' },
  { pattern: /evasión\s+fiscal/gi, replacement: 'eficiencia fiscal' },
  { pattern: /Porto\s+Carro/gi, replacement: 'Cliente A (sector logístico)' },
  { pattern: /La\s+Playa/gi, replacement: 'Cliente B (sector servicios)' },
  { pattern: /Lavapís/gi, replacement: 'zona urbana de alta densidad' },
];

const FILES_PATTERN = ['app/**/*.{tsx,mdx}', 'components/**/*.tsx', 'content/**/*.{md,json}'];

let totalReplacements = 0;
const log = [];

console.log('🔍 Starting terminology sanitization...\n');

FILES_PATTERN.forEach(pattern => {
  const files = glob.sync(pattern);
  
  files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let fileReplacements = 0;

    REPLACEMENTS.forEach(({ pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        modified = true;
        fileReplacements += matches.length;
        totalReplacements += matches.length;
        log.push(`  ✓ ${filePath}: ${matches.length}x replacement`);
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ ${filePath} (${fileReplacements} replacements)`);
    }
  });
});

fs.mkdirSync('reports', { recursive: true });
const logPath = `reports/sanitization-${Date.now()}.log`;
fs.writeFileSync(logPath, log.join('\n'), 'utf8');

console.log(`\n✅ COMPLETE: ${totalReplacements} replacements across ${log.length} files`);
console.log(`📄 Log saved: ${logPath}\n`);

process.exit(0);
