import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsKeyboard } from 'react-icons/bs';
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { VscMention } from 'react-icons/vsc';
import { cardData } from '~/data/cardData';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const PersonalCard: FC = () => {
  return (
    <section className="mx-auto rounded-xl border border-black dark:border-white">
      <Image
        className="rounded-t-lg"
        src={'/card.png'}
        alt="Mynraw himself"
        width={300}
        height={400}
      />
      <div className="flex flex-col gap-y-2 px-4 py-4">
        <div className="flex flex-col gap-y-1">
          <p className="text-lg">{cardData.name}</p>
          <p className="opacity-70">{cardData.shorter}</p>
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
