"use client"
import React from 'react'

const Page = () => {
  return (
    <main className='row-span-11 p-5 h-full'>
      <form action="" method="post" className='grid gap-14 mt-8'>
        <div className='grid gap-2'>
            <label htmlFor="email" className=''>Email</label>
            <input type="email" className='h-14 border rounded-md px-3' placeholder='crazyjeans@gmail.com' />
        </div>
        <button type="submit" className='bg-gradient-to-b from-secondary to-primary rounded-md h-14 text-white text-sm font-semibold'>Next</button>
      </form>
    </main>
  )
}

export default Page
