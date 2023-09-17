import type { FC } from 'react';
import Image from 'next/image';
import type { SnippetProps } from '~/types/snippet';

const Snippet: FC<SnippetProps> = (props) => {
  const { header, imgUrl, label } = props;
  return (
    <div className="flex items-center p-1">
      <div>
        <Image src={imgUrl} alt={imgUrl} width={56} height={56} />
      </div>
      <div>
        <p>{header}</p>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Snippet;
