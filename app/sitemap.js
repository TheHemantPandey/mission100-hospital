import blogsData from '@/data/blogs.json';
import testsData from '@/data/tests.json';
import jobsData from '@/data/jobs.json';

export default function sitemap() {
  const baseUrl = 'https://www.mission100hospital.com';
  const now = new Date();

  // Core Static Public Pages
  const staticPages = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/find-a-test`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/book-test`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/doctor-appointment`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/memberships`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/individual-membership-plans`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/corporate-membership`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/become-partner`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/clinic-partnership`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/diagnostic-partnership`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/take-franchise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/join-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/join-us/fitness-expert`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/join-us/medical-expert`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/join-us/nutrition-expert`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/join-us/yoga-wellness-coach`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blogs`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/app-privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];

  // Specific Medical / Wellness Services
  const services = [
    'anti-aging-science',
    'behavioral-analysis',
    'body-preservation',
    'bone-strength',
    'happiness-emotional-vitality',
    'heart-attack-prevention',
    'longevity-modeling',
    'mental-health-stress',
    'metabolic-sugar-control',
    'Vitamins',
    'yoga-ayurveda'
  ];

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Individual Membership Plan Pages
  const individualPlanSlugs = [
    'free-plan',
    'silver-plan',
    'gold-plan',
    'platinum-plan',
    'pro-fitness-plan'
  ];

  const individualPlanUrls = individualPlanSlugs.map((slug) => ({
    url: `${baseUrl}/individual-membership-plans/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic Blog Posts
  const blogUrls = (blogsData || [])
    .filter((post) => post.active !== false && post.slug)
    .map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  // Dynamic Diagnostic Tests
  const testUrls = (testsData || [])
    .filter((test) => test.slug)
    .map((test) => ({
      url: `${baseUrl}/test/${test.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    }));

  // Dynamic Career Job Openings
  const jobUrls = (jobsData || [])
    .filter((job) => job.active !== false && job.slug)
    .map((job) => ({
      url: `${baseUrl}/careers/${job.slug}`,
      lastModified: job.createdAt ? new Date(job.createdAt) : now,
      changeFrequency: 'weekly',
      priority: 0.75,
    }));

  return [
    ...staticPages,
    ...serviceUrls,
    ...individualPlanUrls,
    ...blogUrls,
    ...testUrls,
    ...jobUrls,
  ];
}