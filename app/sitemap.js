import { services } from "@/data/services";

const baseUrl = "https://YOUR-DOMAIN-HERE.ge";

export default function sitemap() {
  const servicePages = [];

  services.forEach((service) => {
    service.branches.forEach((branchSlug) => {
      servicePages.push({
        url: `${baseUrl}/services/${service.slug}/${branchSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
  ];
}