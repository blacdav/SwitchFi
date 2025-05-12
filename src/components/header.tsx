"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Header = () => {
    const route = useRouter();

    const pathname = usePathname();
    const dashboard = pathname === '/dashboard';
    const dashboard_children = pathname.startsWith('/dashboard/');

    const create_wallet = pathname === '/create_wallet';
    const wallet = pathname === '/wallet';

  return (
    <header className='p-5 border-2 row-span-1 h-full grid grid-cols-12 items-center *:grid *:justify-center'>
      <BiArrowBack className='col-span-2 text-primary' onClick={() => route.back()} />
      <p className='col-span-8'></p>
      <p className='col-span-2'></p>
    </header>
  )
}

export default Header
