"use client"
import Image from 'next/image'
import React from 'react'

const Page: React.FC = () => {
  return (
    <main className='p-5 row-span-10'>
      <div className='grid text-sm'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center mb-2 gap-2'>
                <Image src='/assets/circle-arrow-data-transfer-vertical.svg' alt='circle-arrow-data-transfer-vertical' width={100} height={100} className='w-5 h-5' />
                <p>Deposit Confirmed</p>
            </div>
            <div className='h-2 w-2 rounded-full bg-green-700'></div>
        </div>
        <p className='text-text font-semibold'>Deposit amount: 50 USDT</p>
        <div className='flex justify-between items-center'>
            <p className='text-text font-semibold'>Deposit Address: TG Stores(USDT)</p>
            <div>
                <p>0 secs ago</p>
                <p className='text-text font-semibold'>27/01/2025</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Page
