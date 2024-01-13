import React, { type FC } from 'react';
import Link from 'next/link';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { cardData } from '~/data/cardData';

const Socials: FC = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Link href={`mailto:${cardData.email}`}>
        <MdOutlineMail className="text-2xl" />
      </Link>
      <Link
        href={`https://linkedin.com/in/${cardData.socials.linkedIn}`}
        target="_blank"
      >
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link
        href={`https://github.com/${cardData.socials.github}`}
        target="_blank"
      >
        <FaGithub className="text-2xl" />
      </Link>
      <Link
        href={`https://twitter.com/${cardData.socials.twitter}`}
        target="_blank"
      >
        <FaXTwitter className="text-2xl" />
      </Link>
    </div>
  );
};

export default Socials;
