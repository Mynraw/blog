import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { SnippetProps } from '~/types/snippet';

const Snippet: FC<SnippetProps> = (props) => {
  const { header, imgUrl, label, slugUrl } = props;
  return (
    <Link href={slugUrl} className="flex items-center p-1">
      <div>
        <Image src={imgUrl} alt={imgUrl} width={56} height={56} />
      </div>
      <div>
        <p>{header}</p>
        <p>{label}</p>
      </div>
    </Link>
  );
};

export default Snippet;
