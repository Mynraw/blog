import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { proseOverride } from '~/data/proseOverride';
interface ParamProps {
  params: {
    frontMatter: {
      [key: string]: string;
    };
    slug: string;
    content: string;
  };
}

export const generateStaticParams = () => {
  const blogDir = 'src/content/blog';
  const files = fs.readdirSync(path.join(blogDir));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
};

const getPost = ({ slug }: { slug: string }) => {
  const markdownFile = fs.readFileSync(
    path.join('src/content/blog', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
};

const BlogPost = ({ params }: ParamProps) => {
  const props = getPost(params);
  const { frontMatter, content } = props;

  return (
    <article className={proseOverride}>
      <h1>{frontMatter.title}</h1>

      <MDXRemote source={content} />
    </article>
  );
};

export default BlogPost;
