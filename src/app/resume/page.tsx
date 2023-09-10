import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { proseOverride } from '~/data/proseOverride';

const getPost = (slug: string) => {
  const markdownFile = fs.readFileSync(
    path.join('src/content/resume', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    content,
  };
};

const Resume = () => {
  const resume = getPost('resume');
  const { frontMatter, content } = resume;

  return (
    <article className={proseOverride}>
      <h1>{frontMatter.title}</h1>

      <MDXRemote source={content} />
    </article>
  );
};

export default Resume;
