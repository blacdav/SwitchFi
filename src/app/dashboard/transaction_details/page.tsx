"use client"
import React from 'react'

const Page = () => {
  return (
    <main className='p-5 row-span-10'>
      <p className='text-center mb-2'>Quality</p>
      <p className='text-center'>-500 USDT</p>
      <p className='text-center text-green-600'>Successful</p>

      <section className='*:flex *:justify-between *:items-center grid gap-3 text-xl mt-10'>
        <div>
          <p className='text-text font-semibold'>Deposit Account</p>
          <p className='font-semibold'>TG Stores</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Type</p>
          <p className='font-semibold'>P2P</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Order No</p>
          <p className='font-semibold'>1234567891044567</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Price</p>
          <p className='font-semibold'>1530.00 NGN/USDT</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Total Amount</p>
          <p className='font-semibold'>300000.00 NGN</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Fee</p>
          <p className='font-semibold'>0 USDT</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Status</p>
          <p className='font-semibold'>Completed</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Order Type</p>
          <p className='font-semibold'>Sell</p>
        </div>
        <div>
          <p className='text-text font-semibold'>Time</p>
          <p className='font-semibold'>2023 - 03 - 27, 08:37:04</p>
        </div>
      </section>
    </main>
  )
}

export default Page
