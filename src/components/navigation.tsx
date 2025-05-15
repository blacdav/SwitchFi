"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navigation = () => {
  const pathname = usePathname();
  
  const home = pathname.startsWith('/dashboard');
  const wallet = pathname.startsWith('/wallet');
  const transaction_history = pathname.startsWith('/transaction_history');
  const user = pathname.startsWith('/user');
  
  return (
    <nav className='row-span-1 grid grid-cols-12 items-center *:grid *:justify-center'>
        <Link href='/dashboard' className='col-span-3'><Image src={`${home ? '/assets/home-solid.svg' : '/assets/home-stroke.svg'}`} alt='home' width={500} height={500} className='w-8 h-8' /></Link>
        <Link href='/wallet' className='col-span-3'><Image src={`${wallet ? '/assets/wallet-solid.svg' : '/assets/wallet-stroke.svg'}`} alt='home' width={500} height={500} className='w-8 h-8' /></Link>
        <div className='col-span-3'><Image src={`${transaction_history ? '/assets/transaction-history-solid.svg' : '/assets/transaction-history-stroke.svg'}`} alt='home' width={500} height={500} className='w-8 h-8' /></div>
        <div className='col-span-3'><Image src={`${user ? '/assets/user-solid.svg' : '/assets/user-stroke.svg'}`} alt='home' width={500} height={500} className='w-8 h-8' /></div>
    </nav>
  )
}

export default Navigation
