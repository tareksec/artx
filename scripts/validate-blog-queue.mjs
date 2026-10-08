import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const queueFile = path.join(rootDir, "src", "content", "blog-queue.json");

if (!fs.existsSync(queueFile)) {
  console.log("Blog queue file not found; nothing to validate.");
  process.exit(0);
}

let queue;
try {
  queue = JSON.parse(fs.readFileSync(queueFile, "utf8"));
} catch (error) {
  console.error(`Could not parse ${queueFile}: ${error.message}`);
  process.exit(1);
}

if (!Array.isArray(queue)) {
  console.error("Blog queue must be a JSON array.");
  process.exit(1);
}

const errors = [];
const seenSlugs = new Set();
const forbiddenPhrases = ["lorem ipsum", "todo", "tbd", "insert source", "[source needed]"];

for (const [index, post] of queue.entries()) {
  const label = `queue item ${index + 1}`;
  const slug = typeof post?.slug === "string" ? post.slug : "";
  const content = typeof post?.content === "string" ? post.content : "";
  const relatedSlugs = Array.isArray(post?.relatedSlugs) ? post.relatedSlugs : [];

  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    errors.push(`${label}: slug must be lowercase kebab-case.`);
  }
  if (seenSlugs.has(slug)) {
    errors.push(`${label}: duplicate slug "${slug}".`);
  }
  seenSlugs.add(slug);

  if (typeof post?.title !== "string" || post.title.trim().length < 20 || post.title.trim().length > 110) {
    errors.push(`${label} (${slug}): title must be 20–110 characters.`);
  }
  if (typeof post?.excerpt !== "string" || post.excerpt.trim().length < 50 || post.excerpt.trim().length > 180) {
    errors.push(`${label} (${slug}): excerpt must be 50–180 characters.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(post?.date ?? ""))) {
    errors.push(`${label} (${slug}): date must use YYYY-MM-DD.`);
  }
  if (!post?.author?.name || !post?.author?.role) {
    errors.push(`${label} (${slug}): author name and role are required.`);
  }
  if (content.length < 3500) {
    errors.push(`${label} (${slug}): article content is shorter than 3,500 characters.`);
  }
  if (!/^# .+/m.test(content)) {
    errors.push(`${label} (${slug}): missing Markdown H1.`);
  }
  if (!/##\s+(?:Quick Answer|The Short Answer|What|How|Why)/i.test(content)) {
    errors.push(`${label} (${slug}): missing a direct-answer section.`);
  }
  if (!/##\s+Frequently Asked Questions/i.test(content)) {
    errors.push(`${label} (${slug}): missing FAQ section.`);
  }
  if ((content.match(/^###\s+/gm) ?? []).length < 3) {
    errors.push(`${label} (${slug}): FAQ/content needs at least three H3 subsections.`);
  }
  if ((content.match(/\]\(\//g) ?? []).length < 2) {
    errors.push(`${label} (${slug}): needs at least two internal links.`);
  }
  const lowerContent = content.toLowerCase();
  for (const phrase of forbiddenPhrases) {
    if (lowerContent.includes(phrase)) {
      errors.push(`${label} (${slug}): contains forbidden placeholder text "${phrase}".`);
    }
  }
  if (new Set(relatedSlugs).size !== relatedSlugs.length) {
    errors.push(`${label} (${slug}): relatedSlugs contains duplicates.`);
  }
  if (relatedSlugs.includes(slug)) {
    errors.push(`${label} (${slug}): relatedSlugs cannot include its own slug.`);
  }
}

if (errors.length > 0) {
  console.error(`Blog queue validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Blog queue validation passed: ${queue.length} queued article(s) checked.`);
