import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import EnterCode from "@/components/EnterCode";
import Image from "next/image";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: "--font-inter" 
})

export const metadata: Metadata = {
  title: "MercuryQuiz",
  description: "A quiz app based on Sailor Mercury theme ><",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} antialiased`}>
      <div className="flex h-screen ">
        {/* this 2/5 screen is the left side the one for join as participant */}
        <div className="w-2/5 flex flex-col items-center justify-center bg-gradient-to-b from-[#1F2185] to-[#6392DC]">
          <div className="flex-1 flex items-center justify-center text-center text-white">
            <div className="space-y-8">
              <h1 className="text-3xl font-semibold">Join as participant</h1>
              <p>Account not needed</p>
              <EnterCode/>
            </div>
          </div>

          <div className="w-3xl h-3xl flex items-end justify-center mt-auto">
            <Image src="/ami-reading.png" alt="Cute Sailor Mercury walking to school with book in her hand" width={150} height={150} />
          </div>
        </div>

        {/* while this the right side where login/signup card locate */}
        <div className="w-3/5 bg-[url('/auth-bg.png')] bg-cover bg-no-repeat bg-center">
          <div className="flex justify-center mt-5">
            <Image src="/logo-blue.png" alt="Mercury App Logo" width={70} height={70}></Image>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <div className="bg-[#1F2185]/10 p-7 rounded-2xl">
            {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
