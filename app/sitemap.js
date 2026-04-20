export default function sitemap() {
  return [
    {
      url: 'https://mission100.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // If you have other pages like /about or /contact, add them here:
    // {
    //   url: 'https://mission100.in/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}