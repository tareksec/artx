import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SOURCE_DIR = path.resolve(__dirname, '../artx-demo');

async function analyze() {
  const files = await fs.readdir(SOURCE_DIR);
  const imageFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'));
  
  const groups = {};
  
  for (const file of imageFiles) {
    let base = file;
    // Strip extension
    base = base.replace(/\.[^/.]+$/, "");
    // Strip dimension -580x387
    base = base.replace(/-580x387$/, "");
    // Strip trailing sequence numbers like -1-1, -1, -2, etc.
    base = base.replace(/(-\d+)+$/, "");
    
    // special case for the first two which are just 1-197 and 2-197
    if (file.includes("197")) {
        base = "197-abstract-geometric-interior";
    }
    
    if (!groups[base]) {
      groups[base] = [];
    }
    groups[base].push(file);
  }
  
  console.log(JSON.stringify(groups, null, 2));
  console.log(`\nTotal unique groups: ${Object.keys(groups).length}`);
  
  // Try mapping them to categories
  // Just print the groups
}

analyze().catch(console.error);
