/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.nwanyi-bu-ife.com.ng",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/private"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/api"],
        crawlDelay: 5,
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/image-sitemap.xml`,
    ],
  },
  exclude: [
    "/admin*",
    "/api*",
    "/404",
    "/500",
    "/private*",
    "/dashboard*",
    "/account*",
  ],
  autoLastmod: true,
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0, // Homepage - highest priority
      "/register": 0.9, // Conversion-focused page
      "/nominations": 0.9,
      "/schedule": 0.85,
      "/speakers": 0.85,
      "/news": 0.8,
      "/interviews": 0.8,
      "/gallery": 0.7,
      "/partners": 0.7,
      "/about": 0.6,
      "/contact": 0.6,
    };

    // Set priority for dynamic routes pattern
    const dynamicPriority = 0.7;

    // Determine priority
    let priority = priorityMap[path] || config.priority;

    // Apply special priority for dynamic routes
    if (path.startsWith("/news/") || path.startsWith("/interviews/")) {
      priority = dynamicPriority;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
