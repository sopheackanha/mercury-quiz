'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/client'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className='flex flex-col gap-4 px-7'>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
        <Input
          className='bg-[#ffffff] border-1 border-[#A4A0A0] shadow-md hover:shadow-lg '
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className='bg-[#ffffff] border-1 border-[#A4A0A0] shadow-md hover:shadow-lg'
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-[#1F2185] cursor-pointer">
            <input type="checkbox" className="mr-2 [accent-color:#1F2185] cursor-pointer" />
            Remember me
          </label>
        </div>

        <Button
          type="submit"
          className="bg-[#1F2185] text-white rounded-md shadow-md hover:bg-[#1F2185]/80 cursor-pointer"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>

        <div className="flex justify-center gap-3 text-center text-sm text-[#1e1e1e]">
          <p>Don&apos;t have an account yet?</p>
          <span className='text-[#1F2185]'><Link href="/signup">Sign Up</Link></span>
        </div>

        <div className="relative flex justify-center items-center mt-5">
          <div className="absolute left-0 w-2/5 border-b border-[#A4A0A0]"></div>
          <span className="text-[#585F62] px-2 text-sm">or</span>
          <div className="absolute right-0 w-2/5 border-b border-[#A4A0A0]"></div>
        </div>

        <Button className="bg-white text-[#1e1e1e] border-1 border-[#A4A0A0] shadow-md hover:bg-gray-200 cursor-pointer hover:shadow-lg" onClick={handleGoogleLogin} disabled={loading}>
          <div className="flex items-center justify-center">
            <Image src="/google-icon.png" alt="Google Icon" width={20} height={20} className="mr-2" />
            <span>Login with Google</span>
          </div>
        </Button>
      </div>  )
}
