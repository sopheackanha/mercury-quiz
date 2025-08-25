import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
