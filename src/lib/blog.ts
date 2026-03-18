import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  author?: string;
  authorTitle?: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      slug: file.replace(/\.mdx$/, ""),
      author: data.author,
      authorTitle: data.authorTitle,
    } as PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  if (slug.includes("/") || slug.includes("\\") || slug.includes(".."))
    return null;

  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      slug,
      author: data.author,
      authorTitle: data.authorTitle,
    } as PostMeta,
    content,
  };
}
