import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '~/components/header';
import Snippet from '~/components/snippet';

const SnippetsPage: NextPage = () => {
  const snippetTitle: string = 'Snippets';
  const snippetLabel: string = 'Little useful code pieces';

  const snippetDir = 'src/content/snippet';
  const files = fs.readdirSync(path.join(path.resolve(snippetDir)));
  const snippets = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(snippetDir, filename),
      'utf-8',
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <section className="mx-auto mt-8 min-h-screen max-w-5xl px-3 pt-8 md:px-6 xs:mt-3 xs:px-3 xs:pt-3 3xl:max-w-[80%]">
      <Header label={snippetLabel} title={snippetTitle} />
      <div className="grid-cols-2 py-12 lg:grid">
        {snippets.map((snippet) => (
          <Snippet
            key={snippet.slug}
            slug={snippet.slug}
            description={snippet.meta.description as string}
            title={snippet.meta.title as string}
            icon={snippet.meta.icon as string}
          />
        ))}
      </div>
    </section>
  );
};

export default SnippetsPage;
