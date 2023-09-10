import type { NextPage } from 'next';
// import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Link from 'next/link';

const BlogPage: NextPage = () => {
  // 1) Set blogs directory
  const blogDir = 'src/content/blog';

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(path.resolve(blogDir)));

  // // 3) For each blog found
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <section className="mx-auto mt-8 min-h-screen max-w-5xl px-3 pt-8 md:px-6 xs:px-3 xs:pt-3 3xl:max-w-[80%]">
      <h2 className="text-2xl font-bold">Latest Blogs</h2>
      <div className="py-2">
        {blogs.map((blog) => (
          <Link href={'/blog/' + blog.slug} passHref key={blog.slug}>
            <div className="flex justify-between gap-2 py-2 align-middle">
              <div>
                <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                <p>{blog.meta.description}</p>
              </div>
              <div className="my-auto">
                <p>{blog.meta.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
