import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.resolve(__dirname, '../artx-demo/2 step');
const TARGET_DIR = path.resolve(__dirname, '../public/concepts');

async function processImages() {
  const files = await fs.readdir(SOURCE_DIR);
  const imageFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'));
  
  const groups = {};
  
  for (const file of imageFiles) {
    let base = file;
    // Strip extension
    base = base.replace(/\.[^/.]+$/, "");
    // Strip dimension -580x387 or -580x435 or -580x412
    base = base.replace(/-\d+x\d+(\s*\(\d+\))?$/, "");
    // Strip trailing sequence numbers like -1-1, -1, -2, -5 etc.
    base = base.replace(/(-\d+)+$/, "");
    
    if (!groups[base]) {
      groups[base] = [];
    }
    groups[base].push(file);
  }
  
  for (const key in groups) {
    groups[key].sort();
  }

  const slugMapping = {
    "Business-Website-Ui-PSD-Figma-Graphics": { slug: "business-website-ui", cat: "Brand" },
    "Consulting-website-design-Figma-Psd-Graphics": { slug: "consulting-website-design", cat: "Agency" },
    "Criminal-Defense-Law-UI-PSD-Figma-Graphics": { slug: "criminal-defense-law-ui", cat: "Brand" },
    "Hela-Women-Shoes-Landing-Page-Graphics": { slug: "hela-women-shoes", cat: "E-commerce" },
    "Personal-Portfolio-Website-Design-UI-Graphics": { slug: "personal-portfolio-ui", cat: "Personal Brand" },
    "PetPals-Pet-Care-Website-Graphics": { slug: "petpals-pet-care", cat: "Brand" },
    "Shopify-Ecommerce-Website-Template-Graphics": { slug: "shopify-ecommerce-template", cat: "E-commerce" },
    "Sportswear-ECommerce-Website-Design-Graphics": { slug: "sportswear-ecommerce", cat: "E-commerce" },
    "Website-Design-for-Lawyer-Agency-Graphics": { slug: "lawyer-agency-website", cat: "Agency" },
    "eCommerce-Websites-Templates-Graphics": { slug: "ecommerce-websites-templates", cat: "E-commerce" },
  };

  for (const [base, groupFiles] of Object.entries(groups)) {
    const mapping = slugMapping[base] || { slug: base.toLowerCase(), cat: "Web" };
    const { slug } = mapping;
    
    for (let i = 0; i < groupFiles.length; i++) {
      const file = groupFiles[i];
      const inputPath = path.join(SOURCE_DIR, file);
      const outputPathFull = path.join(TARGET_DIR, `${slug}-${i + 1}.webp`);

      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .resize(800, null, { withoutEnlargement: true })
          .toFile(outputPathFull);
          
        console.log(`Processed: ${slug}-${i + 1}.webp from ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processImages().catch(console.error);
