"use client"

import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <main>
      <div className='text-center mb-7 text-2xl text-[#1e1e1e] font-semibold'>
        <h1>Login</h1>
      </div>

      <div className='flex flex-col gap-4 px-7'>
        <Input className='bg-[#ffffff] border-1 border-[#A4A0A0] shadow-md hover:shadow-lg ' placeholder="Username" />
        <Input className='bg-[#ffffff] border-1 border-[#A4A0A0] shadow-md hover:shadow-lg' placeholder="Password" type="password" />

        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-[#1F2185] cursor-pointer">
            <input type="checkbox" className="mr-2 [accent-color:#1F2185] cursor-pointer" />
            Remember me
          </label>
        </div>

        <Button className="bg-[#1F2185] text-white rounded-md shadow-md hover:bg-[#1F2185]/80 cursor-pointer">
          <Link href={'/dashboard'}>Login</Link>
        </Button>

        <div className="flex justify-center gap-3 text-center text-sm text-[#1e1e1e]">
          <p>Don&apos;t have an account yet?</p>
          <span className='text-[#1F2185]'><Link href="/signup">Sign Up</Link></span>
        </div>

        <div className="relative flex justify-center items-center mt-5">
          <div className="absolute left-0 w-2/5 border-b border-[#A4A0A0]"></div>
          <span className="text-[#585F62] px-2 text-sm">or</span>
          <div className="absolute right-0 w-2/5 border-b border-[#A4A0A0]"></div>
        </div>

        <Button className="bg-white text-[#1e1e1e] border-1 border-[#A4A0A0] shadow-md hover:bg-gray-200 cursor-pointer hover:shadow-lg">
          <div className="flex items-center justify-center">
            <Image src="/google-icon.png" alt="Google Icon" width={20} height={20} className="mr-2" />
            <span>Login with Google</span>
          </div>
        </Button>
      </div>
    </main>
  )
}
