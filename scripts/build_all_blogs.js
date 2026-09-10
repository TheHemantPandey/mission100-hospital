const fs = require('fs');
const path = require('path');

const cluster1 = require('./articles_cluster1');
const cluster2_part1 = require('./articles_cluster2_part1');
const cluster2_part2 = require('./articles_cluster2_part2');
const cluster3 = require('./articles_cluster3');

const allArticles = [
  ...cluster1,
  ...cluster2_part1,
  ...cluster2_part2,
  ...cluster3
];

console.log(`\n--- Aggregating all articles ---`);
console.log(`Total articles compiled: ${allArticles.length}`);

// Validation
const publicDir = path.join(__dirname, '..', 'public');
const seenSlugs = new Set();
let errorCount = 0;

allArticles.forEach((art, index) => {
  if (!art.id || !art.slug || !art.title || !art.content) {
    console.error(`❌ Article index ${index} missing core fields!`);
    errorCount++;
  }
  if (seenSlugs.has(art.slug)) {
    console.error(`❌ Duplicate slug detected: ${art.slug}`);
    errorCount++;
  }
  seenSlugs.add(art.slug);

  // Check image exists
  const imgPath = path.join(publicDir, art.image.replace(/^\//, ''));
  if (!fs.existsSync(imgPath)) {
    console.warn(`⚠️ Warning: Image not found on disk: ${art.image} (full path: ${imgPath})`);
  } else {
    // console.log(`✓ Image verified for ${art.slug}: ${art.image}`);
  }

  // Check word count approximation
  const textOnly = art.content.replace(/<[^>]+>/g, ' ');
  const words = textOnly.trim().split(/\s+/).length;
  console.log(`[${index + 1}/20] Slug: ${art.slug.padEnd(45)} | Approx Words: ${words.toString().padStart(5)} | FAQs: ${art.faqs.length} | TOC items: ${art.tableOfContents.length}`);
});

if (errorCount > 0) {
  console.error(`\nFound ${errorCount} errors. Aborting write to blogs.json.`);
  process.exit(1);
}

const outputPath = path.join(__dirname, '..', 'data', 'blogs.json');
fs.writeFileSync(outputPath, JSON.stringify(allArticles, null, 2), 'utf8');
console.log(`\n✅ Successfully updated ${outputPath} with ${allArticles.length} rich articles!\n`);
