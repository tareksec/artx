import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const PENDING_DIR = path.join(ROOT_DIR, 'articles', 'pending');
const QUEUE_FILE = path.join(ROOT_DIR, 'src', 'content', 'blog-queue.json');

const files = fs.readdirSync(PENDING_DIR).filter(f => f.endsWith('.md')).sort();

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { metadata: {}, body: content };
  }
  const rawMeta = match[1];
  const body = match[2].trim();
  const metadata = {};

  const lines = rawMeta.split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      metadata[key] = val;
    }
  }

  return { metadata, body };
}

const queue = [];

for (const file of files) {
  const filePath = path.join(PENDING_DIR, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { metadata, body } = parseFrontmatter(raw);

  const slug = metadata.slug || file.replace(/\.md$/, '');
  const title = metadata.title || slug.replace(/-/g, ' ');
  const excerpt = metadata.metaDescription || body.slice(0, 160).replace(/[#*`>]/g, '').trim();
  const readTime = parseInt(metadata.readTime, 10) || 8;
  const category = metadata.category || 'Insights';
  const authorName = metadata.author || 'ArtX Studio';
  const authorRole = metadata.role || 'Design & Engineering';

  queue.push({
    slug,
    title,
    excerpt,
    date: metadata.date || new Date().toISOString().split('T')[0],
    readTime,
    category,
    author: {
      name: authorName,
      role: authorRole
    },
    relatedSlugs: [
      'wordpress-vs-custom-website-which-is-better',
      'how-much-does-a-website-cost-in-bangladesh-2025',
      'best-web-design-agencies-in-bangladesh-2025'
    ],
    content: body
  });
}

fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2), 'utf8');
console.log(`[SUCCESS] Populated ${queue.length} articles into ${QUEUE_FILE}`);
