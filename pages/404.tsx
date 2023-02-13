import notfountimage from '@/src/404.jpg';
import Image from 'next/image';

export default function notFount()
{
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center gap-y-4 bg-404">
            <span className='text-5xl font-bold'>404</span>
            <Image src={notfountimage} alt='404'></Image>
        </div>
    );
}