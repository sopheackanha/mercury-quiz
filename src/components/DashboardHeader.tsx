import React from 'react'
import Image from 'next/image'

export default function DashboardHeader() {
  return (
    <div className='bg-[#1F2185] h-20 flex items-center justify-between px-5'>
        <Image
        src="/logo-white.png"
        alt="MercuryQuiz Logo"
        width={100}
        height={100}
        priority
        />

        <div className='flex items-center px-4 py-0.5 bg-[#6392DC] rounded-full text-[#1e1e1e]'>
            <input type="text" placeholder='Find a quiz' className='flex-1 outline-none bg-transparent text-lg placeholder-[#1e1e1e]' />
            <span>
                <Image src="/search-icon.png" alt="search icon" width={25} height={25} className='cursor-pointer'></Image>
            </span>
        </div>

        <div>
          <Image src="/account-icon.png" alt='account icon' width={40} height={40} className='cursor-pointer'></Image>
        </div>
    </div>
  )
}
