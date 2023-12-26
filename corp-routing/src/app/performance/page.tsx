import performanceImg from '/public/performance.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt='Image of performance'
      title='Performance of any scale'
    />
  );
}
