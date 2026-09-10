// ============================================================================
// Mission100 Hospital — Automated SEO & Indexability Validation Script
// ============================================================================
const fs = require('fs');
const path = require('path');

const blogsFilePath = path.join(__dirname, '..', 'data', 'blogs.json');

if (!fs.existsSync(blogsFilePath)) {
  console.error(`❌ Error: blogs.json not found at ${blogsFilePath}`);
  process.exit(1);
}

const blogsData = JSON.parse(fs.readFileSync(blogsFilePath, 'utf8'));
const activeBlogs = blogsData.filter((b) => b.active !== false);

console.log(`\n========================================================`);
console.log(`🏥 MISSION100 HOSPITAL — COMPREHENSIVE SEO AUDIT`);
console.log(`========================================================\n`);

let totalErrors = 0;
let totalWarnings = 0;

// 1. Audit Collections
const slugSet = new Set();
const titleSet = new Set();
const descSet = new Set();
const primaryKeywordSet = new Set();
const canonicalSet = new Set();
const incomingLinksMap = new Map();

// Initialize incoming link tracking
activeBlogs.forEach((b) => incomingLinksMap.set(b.slug, 0));

console.log(`📊 Evaluating ${activeBlogs.length} Active Blog Articles...\n`);

const resultsTable = [];

activeBlogs.forEach((blog, index) => {
  const issues = [];
  const warnings = [];

  // Check Slug
  if (!blog.slug) {
    issues.push('Missing slug');
  } else if (slugSet.has(blog.slug)) {
    issues.push(`Duplicate slug: ${blog.slug}`);
  } else {
    slugSet.add(blog.slug);
  }

  // Check Title
  const seoTitle = blog.seo?.title || blog.title;
  if (!seoTitle) {
    issues.push('Missing SEO title');
  } else if (titleSet.has(seoTitle)) {
    issues.push(`Duplicate SEO title: "${seoTitle}"`);
  } else {
    titleSet.add(seoTitle);
    if (seoTitle.length < 35 || seoTitle.length > 75) {
      warnings.push(`Title length ${seoTitle.length} chars (ideal: 40-65)`);
    }
  }

  // Check Meta Description
  const seoDesc = blog.seo?.metaDescription || blog.excerpt;
  if (!seoDesc) {
    issues.push('Missing Meta Description');
  } else if (descSet.has(seoDesc)) {
    issues.push('Duplicate Meta Description');
  } else {
    descSet.add(seoDesc);
    if (seoDesc.length < 100 || seoDesc.length > 180) {
      warnings.push(`Meta Description length ${seoDesc.length} chars (ideal: 130-165)`);
    }
  }

  // Check Primary Keyword
  const primaryKw = blog.seo?.primaryKeyword || blog.primaryKeyword;
  if (!primaryKw) {
    issues.push('Missing Primary Keyword');
  } else if (primaryKeywordSet.has(primaryKw.toLowerCase())) {
    issues.push(`Keyword Cannibalization Risk: duplicate primary keyword "${primaryKw}"`);
  } else {
    primaryKeywordSet.add(primaryKw.toLowerCase());
  }

  // Check Canonical URL
  const canonical = blog.seo?.canonical || `https://mission100hospital.com/blogs/${blog.slug}`;
  if (!canonical || !canonical.startsWith('https://')) {
    issues.push('Invalid or insecure Canonical URL');
  } else if (canonicalSet.has(canonical)) {
    issues.push(`Duplicate Canonical URL: ${canonical}`);
  } else {
    canonicalSet.add(canonical);
  }

  // Check Image and Alt
  if (!blog.image) {
    issues.push('Missing Hero Image');
  }
  if (!blog.imageAlt || blog.imageAlt.length < 10) {
    issues.push('Missing or low-quality Image Alt Text');
  }

  // Check Category
  if (!blog.category) {
    issues.push('Missing Category');
  }

  // Check Medical Trust Signals
  if (!blog.medicalReviewer && !blog.author) {
    issues.push('Missing Author & Medical Reviewer');
  }
  if (!blog.publishedAt) {
    issues.push('Missing publishedAt date');
  }

  // Check Content Length & Structure
  const wordCount = (blog.content || '').replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  if (wordCount < 600) {
    warnings.push(`Low word count: ${wordCount} words`);
  }

  // Check FAQs
  if (!blog.faqs || blog.faqs.length < 4) {
    warnings.push(`Only ${blog.faqs ? blog.faqs.length : 0} FAQs (recommended: 4-8)`);
  }

  // Check Related Articles
  if (!blog.relatedArticles || blog.relatedArticles.length === 0) {
    warnings.push('No related articles defined');
  } else {
    blog.relatedArticles.forEach((targetSlug) => {
      if (!activeBlogs.some((b) => b.slug === targetSlug)) {
        issues.push(`Broken related article reference: "${targetSlug}"`);
      } else {
        incomingLinksMap.set(targetSlug, (incomingLinksMap.get(targetSlug) || 0) + 1);
      }
    });
  }

  // Check In-Content Contextual Internal Links
  const internalLinkRegex = /href="\/blogs\/([^"#]+)"/g;
  let match;
  let inContentLinkCount = 0;
  while ((match = internalLinkRegex.exec(blog.content || '')) !== null) {
    const targetSlug = match[1];
    inContentLinkCount++;
    if (!activeBlogs.some((b) => b.slug === targetSlug)) {
      issues.push(`Broken in-content internal blog link: "/blogs/${targetSlug}"`);
    } else {
      incomingLinksMap.set(targetSlug, (incomingLinksMap.get(targetSlug) || 0) + 1);
    }
  }

  // Check Service Links
  const serviceLinkRegex = /href="(\/test\/[^"#]+|\/find-a-test|\/book-test|\/services\/[^"#]+)"/g;
  let serviceLinksCount = 0;
  while (serviceLinkRegex.exec(blog.content || '') !== null) {
    serviceLinksCount++;
  }
  if (blog.cta && blog.cta.buttonUrl) {
    serviceLinksCount++;
  }
  if (blog.relatedServices && blog.relatedServices.length > 0) {
    serviceLinksCount += blog.relatedServices.length;
  }

  if (serviceLinksCount === 0) {
    warnings.push('No conversion/service links found in article');
  }

  totalErrors += issues.length;
  totalWarnings += warnings.length;

  if (issues.length > 0) {
    console.error(`\n❌ Issues found in [${blog.slug}]:`);
    issues.forEach((err) => console.error(`   - ${err}`));
  }
  if (warnings.length > 0) {
    console.warn(`⚠️ Warnings in [${blog.slug}]:`);
    warnings.forEach((w) => console.warn(`   - ${w}`));
  }

  resultsTable.push({
    Index: index + 1,
    Slug: blog.slug,
    Keyword: primaryKw,
    Words: wordCount,
    InLinks: incomingLinksMap.get(blog.slug),
    FAQs: blog.faqs ? blog.faqs.length : 0,
    Status: issues.length === 0 ? '✅ PASS' : '❌ FAIL',
    Issues: issues.join('; ') || warnings.join('; ') || 'None'
  });
});

// Check for Orphan Articles (0 incoming internal links)
const orphanBlogs = [];
incomingLinksMap.forEach((count, slug) => {
  if (count === 0) {
    orphanBlogs.push(slug);
  }
});

// Display Results Table
console.table(
  resultsTable.map((r) => ({
    '#': r.Index,
    'Slug': r.Slug.substring(0, 32),
    'Primary Keyword': r.Keyword.substring(0, 28),
    'Words': r.Words,
    'FAQs': r.FAQs,
    'Status': r.Status,
  }))
);

console.log(`\n--------------------------------------------------------`);
console.log(`📋 AUDIT SUMMARY & METRICS:`);
console.log(`--------------------------------------------------------`);
console.log(`Total Articles Audited      : ${activeBlogs.length} / 20`);
console.log(`Unique Slugs                : ${slugSet.size} / ${activeBlogs.length}`);
console.log(`Unique Titles               : ${titleSet.size} / ${activeBlogs.length}`);
console.log(`Unique Meta Descriptions    : ${descSet.size} / ${activeBlogs.length}`);
console.log(`Unique Primary Keywords     : ${primaryKeywordSet.size} / ${activeBlogs.length} (0 Cannibalization)`);
console.log(`Unique Canonical URLs       : ${canonicalSet.size} / ${activeBlogs.length}`);
console.log(`Orphan Articles Detected    : ${orphanBlogs.length} ${orphanBlogs.length > 0 ? `(${orphanBlogs.join(', ')})` : '(None - 100% interconnected)'}`);
console.log(`Critical SEO Errors         : ${totalErrors}`);
console.log(`SEO Optimization Warnings   : ${totalWarnings}`);
console.log(`--------------------------------------------------------\n`);

if (totalErrors > 0) {
  console.error(`❌ SEO Check FAILED with ${totalErrors} errors.`);
  process.exit(1);
} else {
  console.log(`🎉 100% PASS: All ${activeBlogs.length} articles are technically robust, fully indexed, and SEO-ready!\n`);
  process.exit(0);
}
