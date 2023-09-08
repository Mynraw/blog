import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsKeyboard } from 'react-icons/bs';
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { VscMention } from 'react-icons/vsc';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { cardData } from '~/data/cardData';
import type { ImageType } from '~/types/image';

const PersonalCard: FC = () => {
  const imgProps: ImageType ={ url:'/card.png', alt: 'Mynraw himself', width: 310, height: 350};

  return (
    <section className="ml-auto hidden overflow-hidden rounded-lg border border-primary dark:border-celtic lg:block">
      <Image
        src={imgProps.url}
        alt={imgProps.alt}
        width={imgProps.width}
        height={imgProps.height}
        priority
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
            <FaTwitter className="text-2xl" />
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
        </div>
      </div>
    </section>
  );
};

export default PersonalCard;
