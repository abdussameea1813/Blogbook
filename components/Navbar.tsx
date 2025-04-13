'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path ? 'text-blue-500 font-bold' : 'text-gray-700';
  }
  return (
    <nav className='flex w-full justify-between items-center px-6 py-4 shadow-md bg-white'>
      {/* logo */}
      <Link href='/' className='text-2xl font-bold text-yellow-600'>
        Blogbook
      </Link>
      {/* links */}
      <div className='flex items-center gap-6'>
        <Link href="/" className={isActive('/')}>
          Home
        </Link>
        <Link href="/blog" className={isActive('/blog')}>
          Blog
        </Link>
        {/* Auth Links */}
        <Link href="/login" className="text-sm font-semibold bg-yellow-600 text-black px-4 py-2 rounded-md hover:bg-zinc-50 hover:font-extrabold  ">
          Login
        </Link>
        <Link href="/register" className="text-sm font-semibold text-yellow-600 bg-black px-4 py-2 rounded-md hover:bg-white hover:font-extrabold">
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Navbar