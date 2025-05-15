"use client"
import Image from 'next/image';
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
        <div className='col-span-3'><Image src={`${home ? '/assets/home-solid.png' : '/assets/home-stroke.png'}`} alt='home' width={500} height={500} className='w-8 h-8' /></div>
        <div className='col-span-3'><Image src={`${wallet ? '/assets/wallet-solid.png' : '/assets/wallet-stroke.png'}`} alt='home' width={500} height={500} className='w-8 h-8' /></div>
        <div className='col-span-3'><Image src={`${transaction_history ? '/assets/transaction-history-solid.png' : '/assets/transaction-history-stroke.png'}`} alt='home' width={500} height={500} className='w-8 h-8' /></div>
        <div className='col-span-3'><Image src={`${user ? '/assets/user-solid.png' : '/assets/user-stroke.png'}`} alt='home' width={500} height={500} className='w-8 h-8' /></div>
    </nav>
  )
}

export default Navigation
