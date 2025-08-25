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

      <div className='flex items-center flex-1 px-3 py-0.5 bg-[#] rounded-full text-[#1e1e1e]'>
        <input type="text" placeholder='Find a quiz' className='flex-1 outline-none bg-transparent text-lg placeholder-[#1e1e1e]' />
        <span>
            <Image src="/search-icon.png" alt="search icon" width={30} height={30}></Image>
        </span>
    </div>
    </div>
  )
}
