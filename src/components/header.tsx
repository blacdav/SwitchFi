"use client"
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Header = () => {
    const route = useRouter();

    const pathname = usePathname();
    const dashboard = pathname === '/dashboard';
    const transaction_details = pathname === '/dashboard/transaction_details';
    // const notifications = pathname === '/dashboard/notifications';

    // const wallet = pathname === '/wallet';
    // const create_wallet = pathname.startsWith('/create_wallet');

  return (
    <header className='px-3 row-span-1 h-full grid grid-cols-12 items-center text-black *:grid *:justify-center'>
      { !dashboard && <BiArrowBack className='col-span-2 text-primary' onClick={() => route.back()} />}
      { dashboard && <Image src='/icon512_rounded.png' alt='user photo' width={100} height={100} className='col-span-2 text-primary rounded-full' />}
      { dashboard && <div className='col-span-8'></div>}
      { dashboard && <Image src='/icon512_rounded.png' alt='user photo' width={100} height={100} className='col-span-2' />}
      { !dashboard && <p className='col-span-8'>{`${transaction_details ? 'Transaction Details' : 'Notification'}`}</p>}
      { !dashboard && <p className='col-span-2'></p>}
    </header>
  )
}

export default Header
