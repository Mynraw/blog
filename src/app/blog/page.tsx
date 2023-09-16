import type { NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '~/components/header';

const BlogPage: NextPage = () => {
  const title: string = 'All Posts';
  const label: string =
    'Mostly about web, sometimes tech and rarely about life.';

  const blogDir = 'src/content/blog';
  const files = fs.readdirSync(path.join(path.resolve(blogDir)));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <section className="mx-auto mt-8 min-h-screen max-w-5xl px-3 pt-8 md:px-6 xs:mt-3 xs:px-3 xs:pt-3 3xl:max-w-[80%]">
      <Header label={label} title={title} />
      <div className="py-12">
        {blogs.map((blog) => (
          <Link href={'/blog/' + blog.slug} passHref key={blog.slug}>
            <article className="flex flex-col gap-y-3">
              <p className="my-auto">{blog.meta.date}</p>
              <h3 className="text-2xl font-bold">{blog.meta.title}</h3>
              <p>{blog.meta.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
