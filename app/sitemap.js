export default function sitemap() {
  const baseUrl = 'https://www.mission100hospital.com';
  
  // List all your specific services here
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

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/book-test`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.5 },
    ...serviceUrls, // This injects all your service pages into the map
  ];
}