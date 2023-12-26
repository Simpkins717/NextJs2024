import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}
export default function Hero(props: HeroProps) {
  return (
    <div className='relative h-screen'>
      <div className='pt-48 flex justify-center items-center  '>
        <h1 className='text-white text-6xl z-30 '>{props.title}</h1>
      </div>
      {/* Next Image, auto preloads an image to fit the size of the screen */}
      <div className='-z-10'>
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900 z-40' />
      </div>
    </div>
  );
}
