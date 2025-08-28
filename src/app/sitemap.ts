// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bryanhoublon.com";
  const locales = ["fr", "en"]; 
  const routes = [""];    

  const urls: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of routes) {
      urls.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      });
    }
  }
  return urls;
}
