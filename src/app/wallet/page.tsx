"use client"
import Link from 'next/link'
import React from 'react'
import { BiPlus } from 'react-icons/bi'

const Page: React.FC = () => {
  return (
    <main className='p-5 row-span-10'>
      <Link href='/wallet/create_wallet' className='flex gap-2 items-center'>
        <BiPlus className='text-2xl' />
        <p>Create Wallet</p>
      </Link>
    </main>
  )
}

export default Page
