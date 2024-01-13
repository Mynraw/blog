import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '~/components/header';
import { proseOverride } from '~/data/proseOverride';
import Emoji from '~/components/emoji';
import Socials from '~/components/socials';

const getPost = (slug: string) => {
  const markdownFile = fs.readFileSync(
    path.join('src/content/about', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    content,
  };
};

const AboutPage: NextPage = () => {
  const about = getPost('about');
  const { frontMatter, content } = about;
  const { lastUpdated, description, title } = frontMatter;

  return (
    <article className={proseOverride}>
      <div className="mt-8 xs:mt-3">
        <Header
          title={title as string}
          label={description as string}
          lastUpdated={lastUpdated as string}
        />
      </div>
      <MDXRemote source={content} components={{ Emoji, Socials }} />
    </article>
  );
};

export default AboutPage;
