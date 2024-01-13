import React, { type FC } from 'react';
import type { EmojiProps } from '~/types/emoji';

const Emoji: FC<EmojiProps> = ({ emoji }) => {
  return <i className={`${emoji} !mb-0 inline-block`} />;
};

export default Emoji;
