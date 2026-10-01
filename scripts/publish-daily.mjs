import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT_DIR = path.resolve(__dirname, '..')
const QUEUE_FILE = path.join(ROOT_DIR, 'src', 'content', 'blog-queue.json')
const BLOG_POSTS_FILE = path.join(ROOT_DIR, 'src', 'content', 'blog-posts.ts')
const SITE_FILE = path.join(ROOT_DIR, 'src', 'content', 'site.ts')
const HISTORY_FILE = path.join(ROOT_DIR, 'src', 'content', 'publish-history.json')
const PENDING_DIR = path.join(ROOT_DIR, 'articles', 'pending')
const PUBLISHED_DIR = path.join(ROOT_DIR, 'articles', 'published')

if (!fs.existsSync(QUEUE_FILE)) {
  console.log('No blog queue file found.')
  process.exit(0)
}

let queue = []
try {
  queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'))
} catch {
  queue = []
}

if (!Array.isArray(queue) || queue.length === 0) {
  console.log('Blog queue is empty. No articles to publish today.')
  process.exit(0)
}

// 1. Pop exactly 1 article from queue
const postToPublish = queue.shift()
console.log(`Publishing 1 post for ArtX: ${postToPublish.title} (${postToPublish.slug})`)

// Update post date to current ISO date
postToPublish.date = new Date().toISOString().split('T')[0]

// 2. Insert into blogPosts array in blog-posts.ts (or site.ts fallback)
const targetPostFile = fs.existsSync(BLOG_POSTS_FILE) ? BLOG_POSTS_FILE : SITE_FILE
if (fs.existsSync(targetPostFile)) {
  const content = fs.readFileSync(targetPostFile, 'utf8')
  const marker = 'export const blogPosts: BlogPost[] = ['
  
  if (content.includes(marker)) {
    const postSnippet = '  ' + JSON.stringify(postToPublish, null, 2).replace(/\n/g, '\n  ') + ',\n'
    const updatedContent = content.replace(marker, marker + '\n' + postSnippet)
    fs.writeFileSync(targetPostFile, updatedContent, 'utf8')
    console.log(`Appended ${postToPublish.slug} to blogPosts in ${path.basename(targetPostFile)}`)
  } else {
    console.warn(`Could not locate blogPosts marker in ${path.basename(targetPostFile)}`)
  }
}

// 3. Move markdown file from articles/pending to articles/published (if present)
if (!fs.existsSync(PUBLISHED_DIR)) {
  fs.mkdirSync(PUBLISHED_DIR, { recursive: true })
}
const pendingMdFile = path.join(PENDING_DIR, `${postToPublish.slug}.md`)
const publishedMdFile = path.join(PUBLISHED_DIR, `${postToPublish.slug}.md`)

if (fs.existsSync(pendingMdFile)) {
  fs.renameSync(pendingMdFile, publishedMdFile)
  console.log(`Moved ${postToPublish.slug}.md from articles/pending to articles/published`)
}

// 4. Save remaining queue
fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2), 'utf8')

// 5. Update history
let history = []
if (fs.existsSync(HISTORY_FILE)) {
  try {
    history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'))
  } catch {
    history = []
  }
}

history.push({
  slug: postToPublish.slug,
  title: postToPublish.title,
  publishedAt: new Date().toISOString(),
  remainingInQueue: queue.length
})

fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf8')

console.log(`\n[SUCCESS] ArtX post published: ${postToPublish.title}`)
console.log(`Remaining in ArtX queue: ${queue.length}`)
