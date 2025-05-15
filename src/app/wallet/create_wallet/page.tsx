import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='p-5 row-span-10'>
      <div className='grid gap-5'>
        <p>Select which wallet</p>

        <div className='grid gap-5 mb-14'>
            <div className='flex gap-3 items-center'>
                <input type="radio" name="wallet" value='ctypto wallet' className='accent-primary h-5 w-5' />
                <label htmlFor="crypto-wallet">Crypto Wallet</label>
            </div>
            <div className='flex gap-3 items-center'>
                <input type="radio" name="wallet" value='ngn wallet' className='accent-primary h-5 w-5' />
                <label htmlFor="NGN-wallet">NGN Wallet</label>
            </div>
        </div>

        <button className='bg-gradient-to-t from-primary to-secondary text-white h-14 rounded-md opacity-75'>Create</button>
        <Link href='' className='bg-gradient-to-t from-primary to-secondary text-white h-14 rounded-md flex justify-center items-center'>Next</Link>
      </div>
    </main>
  )
}

export default Page
