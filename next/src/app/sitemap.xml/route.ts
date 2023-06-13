import { NextResponse } from "next/server";
import { blogPostUrl } from "@/services/url";
import { BlogPostType } from "@/types";
import { getSitemap } from "@/services/sitemap";

type SitemapEntry = {
  loc: string;
};

const staticPages = ["/", "/blogi"];

function generateSiteMap(entries: SitemapEntry[]) {
  const absolutified = entries.map((e) => {
    return {
      ...e,
      loc: `${process.env.SITE_URL}${e.loc}`
    };
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${absolutified
       .map((entry) => {
         return `
       <url>
         <loc>${entry.loc}</loc>
         <changefreq>daily</changefreq>
         <priority>0.7</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export async function GET() {
  const ret = await getSitemap();
  const posts: BlogPostType[] = ret.blogPostCollection.items;

  const postEntries = posts.map((p) => {
    return {
      loc: blogPostUrl(p)
    };
  });

  const staticPageEntries = staticPages.map((loc) => {
    return {
      loc
    };
  });

  const entries: SitemapEntry[] = [...staticPageEntries, ...postEntries];

  const sitemap = generateSiteMap(entries);

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "text/xml"
    }
  });
}
