import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsKeyboard } from 'react-icons/bs';
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { VscMention } from 'react-icons/vsc';
import { cardData } from '~/data/cardData';

const PersonalCard: FC = () => {
  return (
    <section>
      <Image src={'/card.png'} alt="Mynraw himself" width={300} height={400} />
      <p>{cardData.name}</p>
      <p className="opacity-70">{cardData.shorter}</p>
      <div className="flex items-center gap-x-2">
        <BsKeyboard className="text-2xl" />
        <p>{cardData.title}</p>
        <span>@ {cardData.company}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <MdOutlineLocationOn className="text-2xl" />
        <p>{cardData.location}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <MdOutlineMail className="text-2xl" />
        <Link href={`mailto:${cardData.email}`}>{cardData.email}</Link>
      </div>
      <div className="flex items-center gap-x-2">
        <VscMention className="text-2xl" />
      </div>
    </section>
  );
};

export default PersonalCard;
