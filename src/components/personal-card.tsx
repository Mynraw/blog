import type { FC } from 'react';
import Link from 'next/link';
import { BsKeyboard } from 'react-icons/bs';
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { VscMention } from 'react-icons/vsc';
import { FaXTwitter, FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa6';
import { cardData } from '~/data/cardData';
import type { ImageType } from '~/types/image';
import StatefulImage from './stateful-image';

const PersonalCard: FC = () => {
  const imgProps: ImageType = {
    url: '/card.png',
    alt: 'Mynraw himself',
    width: 334,
    height: 320,
    priority: true,
  };

  return (
    <section className="ml-auto hidden overflow-hidden rounded-2xl border border-primary transition-all hover:scale-105 hover:transition-all dark:border-dashed dark:border-celtic lg:block">
      <StatefulImage
        url={imgProps.url}
        alt={imgProps.alt}
        width={imgProps.width}
        height={imgProps.height}
        priority={imgProps.priority}
      />
      <div className="flex flex-col gap-y-2 px-4 py-4">
        <div className="flex flex-col gap-y-1">
          <p className="text-lg">{cardData.name}</p>
          <p className="font-light opacity-70">{cardData.shorter}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <BsKeyboard className="text-2xl opacity-70" />
          <p>{cardData.title}</p>
          <span>@ {cardData.company}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlineLocationOn className="text-2xl opacity-70" />
          <p>{cardData.location}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <MdOutlineMail className="text-2xl opacity-70" />
          <Link href={`mailto:${cardData.email}`}>{cardData.email}</Link>
        </div>
        <div className="flex items-center gap-x-2">
          <VscMention className="text-2xl opacity-70" />
          <Link
            href={`https://twitter.com/${cardData.socials.twitter}`}
            target="_blank"
          >
            <FaXTwitter className="text-2xl" />
          </Link>
          <Link
            href={`https://github.com/${cardData.socials.github}`}
            target="_blank"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            href={`https://linkedin.com/in/${cardData.socials.linkedIn}`}
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link
            href={`https://open.spotify.com/user/${cardData.socials.spotify}`}
            target="_blank"
          >
            <FaSpotify className="text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalCard;
