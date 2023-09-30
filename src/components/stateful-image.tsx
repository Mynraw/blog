'use client';

import { useState, type FC } from 'react';
import Image from 'next/image';
import type { ImageType } from '~/types/image';

const StatefulImage: FC<ImageType> = (props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { alt, height, url, width, priority } = props;

  return (
    <Image
      className={`${!isLoaded ? 'blur-md' : 'blur-0'} transition-all`}
      alt={alt}
      width={width}
      height={height}
      src={url}
      priority={priority}
      onLoadingComplete={() => setIsLoaded(true)}
    />
  );
};

export default StatefulImage;
