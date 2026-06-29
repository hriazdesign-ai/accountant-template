import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = ["", "/services", "/about", "/pricing", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
