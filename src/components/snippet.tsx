import type { FC } from 'react';
import Image from 'next/image';
import type { SnippetProps } from '~/types/snippet';
import Link from 'next/link';

const Snippet: FC<SnippetProps> = (props) => {
  const { slug, description, icon, title } = props;

  return (
    <Link href={`/snippets/${slug}`} key={slug}>
      <div className="flex items-center gap-x-6 rounded-xl border border-transparent p-4 text-primary shadow-intense shadow-primary transition-all hover:shadow-md dark:text-secondary dark:shadow-intense-dark dark:transition-all dark:hover:shadow-md dark:hover:shadow-secondary xs:p-2">
        <div className="relative h-20 w-20 xs:h-14 xs:w-14">
          <Image src={`/icons/${icon}.svg`} alt={icon} fill />
        </div>

        <div className="h-20 space-y-2 overflow-hidden xs:h-14 xs:space-y-0">
          <h3 className="overflow-ellipsis whitespace-nowrap text-xl font-bold">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Snippet;
