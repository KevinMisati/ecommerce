import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className="h-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className='h-full flex items-center justify-between'>
        {/* Mobile */}
        <Link href="/">LAMA</Link>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar