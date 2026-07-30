// This script generates the site.ts and translations.ts additions

import { fileURLToPath } from 'url';
import path from 'path';

const fileMapping = {
  "1-197-580x387.jpg": { slug: "abstract-geometric-3d", category: "Brand" },
  "2-197-580x387.jpg": { slug: "minimal-interior-render", category: "Brand" },
  "Cyclone-Environment-Presentation-Graphics-8543587-1-1-580x387.jpg": { slug: "cyclone-environment-deck", category: "Presentation" },
  "Cyclone-Environment-Presentation-Graphics-8543587-3-580x387.jpg": { slug: "cyclone-environment-slides", category: "Presentation" },
  "Division-Business-Presentation-Template-Graphics-8438147-1-1-580x387.jpg": { slug: "division-business-deck", category: "Presentation" },
  "Division-Business-Presentation-Template-Graphics-8438147-2-580x387.jpg": { slug: "division-business-slides", category: "Presentation" },
  "Fashion-Presentation-Ensemble-Graphics-30696025-1-1-580x387.jpg": { slug: "ensemble-fashion-deck", category: "Presentation" },
  "Fashion-Presentation-Ensemble-Graphics-30696025-2-580x387.jpg": { slug: "ensemble-fashion-slides", category: "Presentation" },
  "Fashion-Presentation-Ensemble-Graphics-30696025-3-580x387.jpg": { slug: "ensemble-fashion-lookbook", category: "Presentation" },
  "Lema-Preview-PPTX-1-580x387.jpg": { slug: "lema-preview-deck", category: "Presentation" },
  "Medical-Presentation-Caringmax-Graphics-71527059-1-1-580x387.jpg": { slug: "caringmax-medical-deck", category: "Health & Medical" },
  "Medical-Presentation-Caringmax-Graphics-71527059-2-580x387.jpg": { slug: "caringmax-medical-slides", category: "Health & Medical" },
  "Medical-Presentation-Caringmax-Graphics-71527059-3-580x387.jpg": { slug: "caringmax-medical-overview", category: "Health & Medical" },
  "Modular-Technology-Presentation-Template-Graphics-8438159-2-580x387.jpg": { slug: "modular-tech-deck", category: "Presentation" },
  "Modular-Technology-Presentation-Template-Graphics-8438159-4-580x387.jpg": { slug: "modular-tech-slides", category: "Presentation" },
  "Stacy-Travelling-Presentation-Template-Graphics-8506031-1-1-580x387.jpg": { slug: "stacy-travel-deck", category: "Presentation" },
  "Stacy-Travelling-Presentation-Template-Graphics-8506031-2-580x387.jpg": { slug: "stacy-travel-slides", category: "Presentation" },
  "Stacy-Travelling-Presentation-Template-Graphics-8506031-3-580x387.jpg": { slug: "stacy-travel-overview", category: "Presentation" },
  "YUFFINY-Fashion-Presentation-Design-Graphics-85026950-1-1-580x387.jpg": { slug: "yuffiny-fashion-deck", category: "Presentation" },
  "YUFFINY-Fashion-Presentation-Design-Graphics-85026950-2-580x387.jpg": { slug: "yuffiny-fashion-slides", category: "Presentation" },
  "YUFFINY-Fashion-Presentation-Design-Graphics-85026950-3-580x387.jpg": { slug: "yuffiny-fashion-lookbook", category: "Presentation" },
  "agency.png": { slug: "nexus-ai-dashboard", category: "SaaS" },
  "agenyc.prin.png": { slug: "nexus-ai-pricing", category: "SaaS" },
  "blogs-all.png": { slug: "modern-blog-archive", category: "Blog & News" },
  "book-hero.png": { slug: "book-launch-hero", category: "E-commerce" },
  "books.png": { slug: "bookstore-platform", category: "E-commerce" },
  "coursesall.png": { slug: "elearning-course-catalog", category: "Education" },
  "coustom-admin.png": { slug: "custom-admin-dashboard", category: "SaaS" },
  "doctor-hero.png": { slug: "medical-clinic-hero", category: "Health & Medical" },
  "doctors-hero.png": { slug: "telehealth-platform-hero", category: "Health & Medical" },
  "doctors.png": { slug: "medical-specialists-directory", category: "Health & Medical" },
  "fastfod-hero.png": { slug: "fast-food-delivery-hero", category: "Food & Beverage" },
  "foodmart-menu.png": { slug: "foodmart-grocery-app", category: "Food & Beverage" },
  "fooodmart-hero.png": { slug: "foodmart-delivery-hero", category: "Food & Beverage" },
  "menu-fast.png": { slug: "restaurant-digital-menu", category: "Food & Beverage" },
  "musics-song.png": { slug: "music-streaming-app", category: "Web" },
  "news.png": { slug: "global-news-portal", category: "Blog & News" },
  "newses.png": { slug: "daily-journal-homepage", category: "Blog & News" },
  "organic.png": { slug: "organic-farm-store", category: "E-commerce" },
  "organics.png": { slug: "organic-produce-market", category: "E-commerce" },
  "portfolio.png": { slug: "creative-agency-portfolio", category: "Agency" },
  "schooles.png": { slug: "international-school-portal", category: "Education" },
  "services-portfolio.png": { slug: "design-studio-services", category: "Agency" },
  "songmuisc.png": { slug: "audio-platform-interface", category: "Web" },
  "srvices,hospitol.png": { slug: "hospital-services-portal", category: "Health & Medical" },
  "tarvale.blog.png": { slug: "travel-destination-blog", category: "Blog & News" }
};

const items = Object.values(fileMapping);

let siteOutput = `
export type ConceptItem = {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  category: string;
  image: string;
};

export const conceptWork: ConceptItem[] = [
`;

let enTranslations = `    concepts: {\n      disclaimer: "Concept explorations — not commissioned client work.",\n      items: {\n`;
let bnTranslations = `    concepts: {\n      disclaimer: "কনসেপ্ট ডিজাইন — এগুলো কোনো ক্লায়েন্টের জন্য করা কাজ নয়়।",\n      items: {\n`;

items.forEach(item => {
  const camelSlug = item.slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  siteOutput += `  { slug: "${item.slug}", titleKey: "${camelSlug}Title", descriptionKey: "${camelSlug}Desc", category: "${item.category}", image: "/concepts/${item.slug}.webp" },\n`;
  
  let titleEn = item.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  let descEn = `A conceptual design exploring layouts and visual hierarchy for the ${item.category.toLowerCase()} space.`;
  
  let titleBn = titleEn; // Approximate fallback for script
  let descBn = `এটি ${item.category.toLowerCase()} স্পেসের জন্য একটি কনসেপচুয়াল ডিজাইন, যা লেআউট এবং ভিজ্যুয়াল হায়ারার্কি অন্বেষণ করে।`;

  enTranslations += `        ${camelSlug}Title: "${titleEn}",\n        ${camelSlug}Desc: "${descEn}",\n`;
  bnTranslations += `        ${camelSlug}Title: "${titleBn}",\n        ${camelSlug}Desc: "${descBn}",\n`;
});

siteOutput += `];\n`;
enTranslations += `      }\n    },`;
bnTranslations += `      }\n    },`;

import fs from 'fs';
fs.writeFileSync('scripts/generated_content.txt', siteOutput + '\n\n' + enTranslations + '\n\n' + bnTranslations);
console.log('done');
