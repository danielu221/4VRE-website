import fs from "fs";
import path from "path";
import prettier from "prettier";
import { fileURLToPath } from "url";

// Get current file path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = "https://4vre.pl";
const PUBLIC_DIR = path.join(path.dirname(__dirname), "public");
const PAGES_DIR = path.join(path.dirname(__dirname), "src", "app");

// Function to get the last modified date of a file
const getLastModifiedDate = (filePath) => {
  try {
    const stats = fs.statSync(filePath);
    return new Date(stats.mtime).toISOString().split("T")[0];
  } catch (error) {
    console.error(`Error getting last modified date for ${filePath}:`, error);
    return new Date().toISOString().split("T")[0];
  }
};

// Function to recursively get all page paths
const getPagePaths = (dir, basePath = "") => {
  let pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      // Skip directories that start with _ or .
      if (entry.name.startsWith("_") || entry.name.startsWith(".")) {
        continue;
      }

      // Skip components, hooks, and admin directories
      if (["components", "hooks", "admin"].includes(entry.name)) {
        continue;
      }

      pages = [...pages, ...getPagePaths(fullPath, relativePath)];
    } else if (
      entry.name === "page.tsx" ||
      entry.name === "page.jsx" ||
      entry.name === "page.js"
    ) {
      // Convert file path to URL path
      let urlPath = basePath.replace(/\\/g, "/");

      // Handle index pages
      if (urlPath === "") {
        pages.push("/");
      } else {
        pages.push("/" + urlPath);
      }
    }
  }

  return pages;
};

// Main function to generate sitemap
const generateSitemap = async () => {
  try {
    // Get all page paths
    const pagePaths = getPagePaths(PAGES_DIR);

    // Add static routes and anchors
    const routes = [
      ...pagePaths,
      "/#o-nas",
      "/#zalety",
      "/#projekty",
      "/#kontakt",
    ];

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${routes
    .map((route) => {
      // Determine priority based on route depth
      const depth = (route.match(/\//g) || []).length;
      const priority = Math.max(0.5, 1 - depth * 0.2).toFixed(1);

      // Determine change frequency
      const changefreq = route === "/" ? "weekly" : "monthly";

      // Get last modified date
      const lastmod = getLastModifiedDate(PAGES_DIR);

      return `<url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${
      route === "/"
        ? `<image:image>
      <image:loc>${SITE_URL}/4vre-logo-horizontal-black.svg</image:loc>
      <image:title>4 Vision Real Estate Logo</image:title>
    </image:image>`
        : ""
    }
  </url>`;
    })
    .join("\n  ")}
</urlset>`;

    // Format XML with prettier
    const formattedSitemap = await prettier.format(sitemap, {
      parser: "html",
      printWidth: 120,
    });

    // Write sitemap to file
    fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), formattedSitemap);

    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

// Run the generator
generateSitemap();
