import type { FC } from 'react';
import { introductionData } from '~/data/introductionData';

const Introduction: FC = () => {
    return <article className='flex flex-col gap-y-2'>
        {introductionData.map((content) => (
            <p key={content.id}>{content.content}</p>
        ))}
    </article>
}

export default Introduction;