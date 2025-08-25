import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
// import { createServerSupabaseClient } from '@/lib/supabase/server'

export default function Navbar() {
  return (
    <div className='bg-[#1F2185] h-20 flex items-center justify-between px-5'>
      <Image
        src="/logo-white.png"
        alt="MercuryQuiz Logo"
        width={100}
        height={100}
        priority
      />

      <div className='flex items-center gap-4'>
        <Button asChild className='text-white rounded-xl px-6 py-2 bg-[#1F2185] border border-white hover:bg-white hover:text-[#1E1E1E] transition'>
          <Link href="/login">Login</Link>
        </Button>

        <Button asChild className='bg-[#6392DC] text-[#1E1E1E] rounded-xl px-4 py-2 hover:bg-[#6392DC]/70'>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  )
}

// export default async function Navbar() {
//   // const supabase = createServerSupabaseClient();
//   // const {
//   //   data: { session },
//   // } = await supabase.auth.getSession();

//   return (
//     <div className='bg-[#1F2185] h-20 flex items-center justify-between px-5'>
//       <Link href='/'>
//         <Image src='/logo-white.png' alt='MercuryQuiz Logo' width={100} height={100} />
//       </Link>
//       <div className='flex items-center gap-4'>
//         {/* {session ? ( */}
//           <>
//             <Link href='/dashboard'>Dashboard</Link>
//             <Button asChild className='...'>
//               <Link href='/logout'>Logout</Link>
//             </Button>
//           </>
//         {/* ) : ( */}
//           <>
//             <Button asChild className='text-white rounded-xl px-6 py-2 bg-[#1F2185] border border-white hover:bg-white hover:text-[#1E1E1E] transition'>
//               <Link href='/login'>Login</Link>
//             </Button>
//             <Button asChild className='bg-[#6392DC] text-[#1E1E1E] rounded-xl px-4 py-2 hover:bg-[#6392DC]/70'>
//               <Link href='/signup'>Sign Up</Link>
//             </Button>
//           </>
//         {/* )} */}
//       </div>
//     </div>
//   )
// }


