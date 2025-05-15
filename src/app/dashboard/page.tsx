import React from 'react'
import { BiCopy, BiPlus } from 'react-icons/bi'

const Page = () => {
  return (
    <main className='p-3 row-span-10'>
      <div>
        <h1 className='font-semibold mb-2'>Welcome TG Exchange,</h1>
        <div className='h-12 grid grid-cols-3 rounded-md overflow-hidden *:grid *:items-center text-xs'>
            <p className='h-full col-span-2 px-2 text-text'>bhh</p>
            <div className='h-full col-span-1 flex bg-tertiary px-1'><p>Exchange Link</p><BiCopy /></div>
        </div>
      </div>

      <div className='h-1/4 grid text-sm font-semibold px-5 bg-gradient-to-tr from-primary to-secondary rounded-md text-white mt-5'>
        <div className='flex justify-between items-center'>
            <p>Your balance</p>
            <p></p>
        </div>
        <div className='flex justify-between items-center'>
            <p className='text-2xl'>N200,000</p>
            <p>Switch Account</p>
        </div>
      </div>

      <div className='mt-8'>
        <div className='flex gap-5 items-center'>
            <BiPlus className='text-2xl' />
            <p className='font-semibold'>Fund Wallet</p>
        </div>

        <div className='mt-6'>
            <p className='text-text font-semibold'>Recents</p>

            <div className='mt-6'>
                <div className='flex gap-2 text-sm font-semibold'>
                    <p>O</p>
                    <div>
                        <p className='text-green-600'>Transaction successful</p>
                        <p>-500 USDT</p>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex gap-2 text-sm font-semibold'>
                    <p>O</p>
                    <div>
                        <p className='text-green-600'>Transaction successful</p>
                        <p>-500 USDT</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Page
