import Image from 'next/image';
import homeImg from '/public/home.jpg';
import Hero from '@/components/hero';
//name of this component does not matter, only used for debugging
export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt='car factory'
      title='Cloud Corp Cloud Web Hosting'
    />
  );
}
