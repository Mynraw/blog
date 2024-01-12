import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { proseOverride } from '~/data/proseOverride';
import Pre from '~/components/pre';

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
  const snippetDir = 'src/content/snippet';
  const files = fs.readdirSync(path.join(snippetDir));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
};

const getSnippet = ({ slug }: { slug: string }) => {
  const markdownFile = fs.readFileSync(
    path.join('src/content/snippet', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
};

const SnippetPost = ({ params }: ParamProps) => {
  const props = getSnippet(params);
  const { frontMatter, content } = props;

  return (
    <article className={proseOverride}>
      <h1>{frontMatter.description}</h1>

      <MDXRemote components={{ pre: Pre }} source={content} />
    </article>
  );
};

export default SnippetPost;
