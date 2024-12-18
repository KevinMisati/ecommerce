import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>12345 Hurlingham Court, Mbagathi Rd, Hurlingham</p>
          <span className="font-semibold">hello@lama.dev</span>
          <span className="font-semibold">+1234567890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex">center</div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className='flex'>
            <input type='text' placeholder='Email address' className='p-4 w-3/4'/>
            <button className='w-1/4 bg-lama text-white'>
            JOIN</button>
            <span className='font-semibold'>Secure payments</span>
          </div>
        </div>
      </div>
      {/* Bottom */}
    </div>
  );
}

export default Footer