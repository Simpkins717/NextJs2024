import Link from 'next/link';

export default function Header() {
  return (
    <div className='border-2 border-white py-4 flex justify-around '>
      <Link href='/'>Home</Link>
      <Link href='/performance'>Performance</Link>
      <Link href='/reliability'>Reliability</Link>
      <Link href='/scale'>Scale</Link>
    </div>
  );
}
