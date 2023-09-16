import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '~/components/header';
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
  const { lastUpdated } = frontMatter;

  const resumeTitle: string = 'Resume';
  const resumeDescription: string = 'My experiences and skills';
  const lastUpdateDate = lastUpdated as string;

  return (
    <article className={proseOverride}>
      <div className="mt-8 xs:mt-3">
        <Header
          title={resumeTitle}
          label={resumeDescription}
          lastUpdated={lastUpdateDate}
        />
      </div>
      <MDXRemote source={content} />
    </article>
  );
};

export default Resume;
