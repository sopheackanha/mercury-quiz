import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: "--font-inter" 
})

export const metadata: Metadata = {
  title: "MercuryQuiz",
  description: "A quiz app based on Sailor Mercury theme ><",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}>
            <div className='bg-[#1F2185] h-20 flex items-center justify-between px-5'>
                <Link href={'/dashboard'}>
                <Image
                src="/logo-white.png"
                alt="MercuryQuiz Logo"
                width={100}
                height={100}
                priority
                />
                </Link>

                <div className='flex items-center gap-4'>
                    <Button asChild className='text-white rounded-xl px-6 py-5 bg-[#1F2185] border border-white hover:bg-white hover:text-[#1E1E1E] transition'>
                        <Link href="/dashboard">Save</Link>
                    </Button>

                    <Button asChild className='bg-[#6392DC] text-[#1E1E1E] rounded-xl px-6 py-5 hover:bg-[#6392DC]/70'>
                        <Link href="/">Start</Link>
                    </Button>
                </div> 
            </div>
            <div className="bg-[url('/quiz-bg.png')] bg-cover bg-no-repeat">
                {children}
            </div>
      </body>
    </html>
  );
}
