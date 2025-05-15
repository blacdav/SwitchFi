"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Header = () => {
    const route = useRouter();

    const pathname = usePathname();
    const dashboard = pathname === '/dashboard';
    const transaction_details = pathname === '/dashboard/transaction_details';
    const notifications = pathname === '/dashboard/notifications';

    const wallet = pathname === '/wallet';
    const create_wallet = pathname === '/wallet/create_wallet';
    // const create_wallet = pathname.startsWith('/create_wallet');

  return (
    <header className='px-3 row-span-1 h-full grid grid-cols-12 items-center text-black *:grid *:justify-center'>
      { !dashboard && <BiArrowBack className='col-span-1 text-primary' onClick={() => route.back()} />}
      { dashboard && <Image src='/icon512_rounded.png' alt='user photo' width={100} height={100} className='col-span-2 text-primary rounded-full' />}
      { dashboard && <div className='col-span-8'></div>}
      { dashboard && <Link href='/dashboard/notifications'><Image src='/assets/bell.svg' alt='notification icon' width={100} height={100} className='w-5 h-5 col-span-2' /></Link>}
      { !dashboard && <p className={`${transaction_details || wallet || create_wallet ? 'col-span-9' : 'col-span-3'}`}>{`${transaction_details ? 'Transaction Details' : wallet ? 'Wallet' : create_wallet ? 'Create Wallet' : 'Notification'}`}</p>}
      {/* { !dashboard && <p className='col-span-2'></p>} */}
      { notifications && <p className='col-span-2'></p>}
      { notifications && <p className='col-span-1 text-xs'>All</p>}
      { notifications && <p className='col-span-2 text-xs'>Read</p>}
      { notifications && <p className='col-span-1 text-xs'>Unread</p>}
      { notifications && <p className='col-span-2 text-xs'>Offers</p>}
    </header>
  )
}

export default Header
