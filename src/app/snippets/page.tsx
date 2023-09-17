import type { NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '~/components/header';
// import Snippet from '~/components/snippet';
import Image from 'next/image';

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
          <Link href={`/snippets/${snippet.slug}`} key={snippet.slug}>
            <div className="flex items-center gap-x-6 rounded-xl border border-transparent p-4 text-primary shadow-intense shadow-primary transition-all hover:shadow-md dark:text-secondary dark:shadow-intense-dark dark:transition-all dark:hover:shadow-md dark:hover:shadow-secondary xs:p-2">
              <div className="relative h-20 w-20 xs:h-14 xs:w-14">
                <Image
                  src={`/icons/${snippet.meta.icon}.svg`}
                  alt={snippet.meta.icon as string}
                  objectFit="center"
                  fill
                />
              </div>

              <div className="h-20 space-y-2 overflow-hidden">
                <h3 className="overflow-ellipsis whitespace-nowrap text-xl font-bold">
                  {snippet.meta.title}
                </h3>
                <p>{snippet.meta.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SnippetsPage;
