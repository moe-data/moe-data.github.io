const fs = require('fs');
const path = require('path');

const DEFAULT_DIRS = ['.'];

function loadPathsConfig(rootDir) {
  const pkgPath = path.join(rootDir, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    return { dirs: DEFAULT_DIRS };
  }
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const raw = pkg.paths;
    if (!raw || typeof raw !== 'object') {
      return { dirs: DEFAULT_DIRS };
    }
    if (Array.isArray(raw.dirs) && raw.dirs.length > 0) {
      return { dirs: raw.dirs.map((d) => String(d).replace(/\\/g, '/')) };
    }
    if (typeof raw.dir === 'string' && raw.dir.trim()) {
      return { dirs: [raw.dir.trim().replace(/\\/g, '/')] };
    }
  } catch {
    // fall through
  }
  return { dirs: DEFAULT_DIRS };
}

/**
 * Paths passed to executeHtmlAndCollectLogs (leading slash, posix segments).
 * @param {string} [rootDir] - repo root; default: three levels up from this file (cv/)
 */
function getAllHtmlFiles(rootDir = path.join(__dirname, '..', '..', '..')) {
  const { dirs } = loadPathsConfig(rootDir);
  const paths = [];
  for (const rel of dirs) {
    const absDir = path.join(rootDir, ...rel.split('/'));
    if (!fs.existsSync(absDir) || !fs.statSync(absDir).isDirectory()) {
      continue;
    }
    for (const file of fs.readdirSync(absDir)) {
      if (file.endsWith('.html')) {
        paths.push('/' + path.posix.join(rel, file));
      }
    }
  }
  return paths.sort();
}

module.exports = { getAllHtmlFiles, loadPathsConfig };
