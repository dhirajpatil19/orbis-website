// Blog posts — editable via the CMS dashboard (content/posts/*.md).
// Reads markdown at build time (server components only).
import fs from "node:fs";
import path from "node:path";
import { parseFrontmatter, markdownToParagraphs } from "./parse";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  cover: string;
  body: string[];
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function loadPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, body } = parseFrontmatter(raw);
      return {
        slug: String(data.slug ?? file.replace(/\.md$/, "")),
        title: String(data.title ?? ""),
        excerpt: String(data.excerpt ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        date: String(data.date ?? ""),
        cover: String(data.cover ?? "/images/hero-1.jpg"),
        body: markdownToParagraphs(body),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const POSTS: BlogPost[] = loadPosts();

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
