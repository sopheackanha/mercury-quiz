import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashboardHeader from "@/components/DashboardHeader";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: "--font-inter" 
})

export const metadata: Metadata = {
  title: "MercuryQuiz",
  description: "A quiz app based on Sailor Mercury theme ><",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} antialiased`}>
        <DashboardHeader />
        {children}
    </div>
  );
}
