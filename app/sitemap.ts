import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-11-16"),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "fr-TN": site.url,
          fr: site.url,
        },
      },
    },
  ];
}
