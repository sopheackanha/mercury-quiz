import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EnterCode() {
  return (
    <div className='flex items-center flex-1 px-3 py-0.5 bg-white rounded-full text-[#1e1e1e]'>
        <span className='mr-4 ml-4 text-[#1f2185] text-3xl font-bold'>#</span>
        <input type="text" placeholder='Enter code here' className='flex-1 outline-none bg-transparent text-lg placeholder-[#1e1e1e]' />
        <button className='ml-2 p-1 bg-[#1f2185] hover:bg-[#1f2185]/80 rounded-full transition'>
            <ArrowRight className='w-6 h-6 text-white'></ArrowRight>
        </button>
    </div>
  )
}