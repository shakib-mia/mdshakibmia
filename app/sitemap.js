// app/lib/sitemap.js
import { projectsCollection } from "@/app/lib/mongodb";

export default async function sitemap() {
  try {
    // Fetch projects from MongoDB
    const projects = await projectsCollection.find().toArray();

    // Map project slugs to URLs
    const projectUrls = projects.map((item) => ({
      url: `${process.env.DOMAIN_NAME}projects/${item.slug}`,
      lastModified: item.updatedAt
        ? new Date(item.updatedAt).toISOString()
        : new Date().toISOString(),
    }));

    // Static pages
    const staticLastMod = "2025-11-30T15:17:00.000Z";
    const staticUrls = [
      "",
      "contact",
      "experience",
      "my-journey",
      "projects",
      "skills",
    ].map((path) => ({
      url: `${process.env.DOMAIN_NAME}${path}`,
      lastModified: staticLastMod,
    }));

    return [...staticUrls, ...projectUrls];
  } catch (err) {
    console.error("Sitemap error:", err);
    return [];
  }
}
