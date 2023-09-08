import type { FC } from 'react';
import Link from 'next/link';

const ShortRedirects: FC = () => {
    return <section className='text-[18px] flex flex-col gap-y-1'>
        <Link href='/projects' className='flex items-center gap-x-2 py-1 hover:underline'><i className='twa twa-x twa-atom-symbol' /><span>What have I done so far?</span></Link>
        <Link href='/resume' className='flex items-center gap-x-2 py-1 hover:underline'><i className='twa twa-x twa-poop' /><span>My memeful career</span></Link>
        <Link href='/blog' className='flex items-center gap-x-2 py-1 hover:underline'><i className='twa twa-x twa-eyes' /><span>My writings</span></Link>
        <Link href='/about' className='flex items-center gap-x-2 py-1 hover:underline'><i className='twa twa-x twa-boom' /><span>Wanna know more about me?</span></Link>
    </section>
}

export default ShortRedirects;