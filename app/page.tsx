import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col h-screen items-center p-32 '>
      <div className=' text-sm sm:text-2xl lg:text-2xl p-5 from-neutral-300 '>
        Under construction
      </div>{' '}
      <Image
        src='/logo-removebg-preview.png'
        alt='Vercel Logo'
        width={150}
        height={75}
        priority
      />
      <div className='text-sm sm:text-2xl lg:text-2xl p-5 from-neutral-300'>
        <a
          className='text-white-500 bg-blue-500'
          href='https://www.facebook.com/profile.php?id=100093073745609'
        >
          Please visit this Facebook page
        </a>
      </div>
    </main>
  );
}
