import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='grid grid-rows-12 h-screen p-5'>
      <Image src='/assets/Exchange.png' alt='logo' width={300} height={300} className='row-span-9 m-auto' />
      <p className='px-3 text-base font-semibold text-center'><span className='text-primary'>SwitchFi</span> nulla suspendisse da Lorem ipsum dolor sit amet <span className='text-primary'>consectetur.</span>Varius orci</p>
      <Link href='/onboarding' className='font-semibold text-sm mt-3 bg-gradient-to-b from-secondary to-primary rounded-md text-white h-14 grid justify-center items-center'>Lets Get Started</Link>
      <p className='font-semibold text-sm mt-3 mx-auto'>Already have an account? <span className='text-primary underline'><Link href=''>Log In</Link></span></p>
    </main>
  )
}

export default Page
