import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.resolve(__dirname, '../artx-demo');
const TARGET_DIR = path.resolve(__dirname, '../public/concepts');

async function processImages() {
  await fs.mkdir(TARGET_DIR, { recursive: true });

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
  
  // Sort files within each group to ensure deterministic -1, -2 ordering
  for (const key in groups) {
    groups[key].sort();
  }

  // Predefined mapping for categories and friendly slugs based on our manual list
  const slugMapping = {
    "197-abstract-geometric-interior": { slug: "abstract-geometric-3d", cat: "Brand" },
    "Cyclone-Environment-Presentation-Graphics": { slug: "cyclone-environment-presentation", cat: "Presentation" },
    "Division-Business-Presentation-Template-Graphics": { slug: "division-business-presentation", cat: "Presentation" },
    "Fashion-Presentation-Ensemble-Graphics": { slug: "ensemble-fashion-presentation", cat: "Presentation" },
    "Lema-Preview-PPTX": { slug: "lema-preview-presentation", cat: "Presentation" },
    "Medical-Presentation-Caringmax-Graphics": { slug: "caringmax-medical-presentation", cat: "Health & Medical" },
    "Modular-Technology-Presentation-Template-Graphics": { slug: "modular-tech-presentation", cat: "Presentation" },
    "Stacy-Travelling-Presentation-Template-Graphics": { slug: "stacy-travel-presentation", cat: "Presentation" },
    "YUFFINY-Fashion-Presentation-Design-Graphics": { slug: "yuffiny-fashion-presentation", cat: "Presentation" },
    "agency": { slug: "nexus-ai-dashboard", cat: "SaaS" },
    "agenyc.prin": { slug: "nexus-ai-pricing", cat: "SaaS" },
    "blogs-all": { slug: "modern-blog-archive", cat: "Blog & News" },
    "book-hero": { slug: "book-launch-hero", cat: "E-commerce" },
    "books": { slug: "bookstore-platform", cat: "E-commerce" },
    "coursesall": { slug: "elearning-course-catalog", cat: "Education" },
    "coustom-admin": { slug: "custom-admin-dashboard", cat: "SaaS" },
    "doctor-hero": { slug: "medical-clinic-hero", cat: "Health & Medical" },
    "doctors-hero": { slug: "telehealth-platform-hero", cat: "Health & Medical" },
    "doctors": { slug: "medical-specialists-directory", cat: "Health & Medical" },
    "fastfod-hero": { slug: "fast-food-delivery-hero", cat: "Food & Beverage" },
    "foodmart-menu": { slug: "foodmart-grocery-app", cat: "Food & Beverage" },
    "fooodmart-hero": { slug: "foodmart-delivery-hero", cat: "Food & Beverage" },
    "menu-fast": { slug: "restaurant-digital-menu", cat: "Food & Beverage" },
    "musics-song": { slug: "music-streaming-app", cat: "Web" },
    "news": { slug: "global-news-portal", cat: "Blog & News" },
    "newses": { slug: "daily-journal-homepage", cat: "Blog & News" },
    "organic": { slug: "organic-farm-store", cat: "E-commerce" },
    "organics": { slug: "organic-produce-market", cat: "E-commerce" },
    "portfolio": { slug: "creative-agency-portfolio", cat: "Agency" },
    "schooles": { slug: "international-school-portal", cat: "Education" },
    "services-portfolio": { slug: "design-studio-services", cat: "Agency" },
    "songmuisc": { slug: "audio-platform-interface", cat: "Web" },
    "srvices,hospitol": { slug: "hospital-services-portal", cat: "Health & Medical" },
    "tarvale.blog": { slug: "travel-destination-blog", cat: "Blog & News" }
  };

  console.log(`Found ${Object.keys(groups).length} distinct concept groups.`);

  let processCount = 0;
  for (const [base, groupFiles] of Object.entries(groups)) {
    const mapping = slugMapping[base];
    if (!mapping) {
      console.warn(`No mapping found for base ID: ${base}. Skipping ${groupFiles.length} files.`);
      continue;
    }

    const { slug } = mapping;
    
    for (let i = 0; i < groupFiles.length; i++) {
      const file = groupFiles[i];
      const inputPath = path.join(SOURCE_DIR, file);
      // Generate output name with index (1-based)
      const outputPathThumb = path.join(TARGET_DIR, `${slug}-${i + 1}-thumb.webp`);
      const outputPathFull = path.join(TARGET_DIR, `${slug}-${i + 1}.webp`);

      try {
        // Generate thumbnail (800px)
        await sharp(inputPath)
          .webp({ quality: 75 })
          .resize(800, null, { withoutEnlargement: true })
          .toFile(outputPathThumb);
          
        // Generate full size (1600px)
        await sharp(inputPath)
          .webp({ quality: 80 })
          .resize(1600, null, { withoutEnlargement: true })
          .toFile(outputPathFull);
          
        console.log(`Processed: ${slug}-${i + 1} (thumb + full) from ${file}`);
        processCount++;
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }

  console.log(`Successfully processed ${processCount} images across ${Object.keys(groups).length} groups.`);
}

processImages().catch(console.error);
