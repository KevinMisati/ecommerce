"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className=''>
        <Image 
            src="/menu.png"
            alt='menu'
            width={28}
            height={28}
            className='cursor-pointer'
            onClick={() => setOpen(prev => !prev)}
        />
        {
            open && (
                <div>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">Abput</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Cart(1)</Link>
                    <Link href="/">Logout</Link>
                </div>
            )
        }
    </div>
  )
}

export default Menu