"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slideOptions = [
  { id: "buttons", title: "Buttons", subtitle: "One correct answer" },
  { id: "checkboxes", title: "Checkboxes", subtitle: "Multiple correct answer" },
  { id: "reorder", title: "Reorder", subtitle: "Place answers in the correct order" },
  { id: "truefalse", title: "True or False", subtitle: "Either true or false answer" },
  { id: "typeanswer", title: "Type Answer", subtitle: "Type the correct answer" },
];

export default function AddSlide() {
  const handleOptionClick = (id: string) => {
    console.log(`Selected slide type: ${id}`);
    // navigate to slide creation page or open modal
  };

  return (
    <div className="min-h-screen">

      {/* Page Content */}
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold text-[#1f2185] mb-10">Add Slide</h1>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {slideOptions.map((option) => (
            <Button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className="bg-blue-300 hover:bg-blue-400 text-black font-semibold rounded-lg px-6 py-4 flex flex-col items-start space-y-1 shadow-md"
            >
              <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2">
                ✔
              </span>
              <span className="text-lg">{option.title}</span>
              <span className="text-sm text-gray-700">{option.subtitle}</span>
              <Link href={'/button'}></Link>
            </Button>
          ))}

          <Button
            onClick={() => handleOptionClick("typeanswer")}
            className="bg-blue-300 hover:bg-blue-400 text-black font-semibold rounded-lg px-6 py-4 flex flex-col items-start space-y-1 shadow-md col-span-2"
          >
            <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2">
              ✎
            </span>
            <span className="text-lg">Type Answer</span>
            <span className="text-sm text-gray-700">Type the correct answer</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

