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
  const { title, lastUpdated } = frontMatter;

  return (
    <article className={proseOverride}>
      <div className="mt-8 flex items-center justify-between xs:flex-wrap xs:gap-y-4">
        <h1 className="m-0">{title}</h1>
        <strong>
          Last Updated:{' '}
          <span className="font-light italic text-primary dark:text-secondary">
            {lastUpdated}
          </span>
        </strong>
      </div>
      <MDXRemote source={content} />
    </article>
  );
};

export default Resume;
