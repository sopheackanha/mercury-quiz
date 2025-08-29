"use client";

import React from "react";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import Image from "next/image";

const slideOptions = [
  { id: "buttons", title: "Buttons", subtitle: "One correct answer", icon: "/add-slide-icons/button-icon.png" },
  { id: "checkboxes", title: "Checkboxes", subtitle: "Multiple correct answer", icon: "/add-slide-icons/checkbox-icon.png" },
  { id: "reorder", title: "Reorder", subtitle: "Place answers in the correct order", icon: "/add-slide-icons/reorder-icon.png" },
  { id: "truefalse", title: "True or False", subtitle: "Either true or false answer", icon: "/add-slide-icons/true-false-icon.png" },
  { id: "typeanswer", title: "Type Answer", subtitle: "Type the correct answer", icon: "/add-slide-icons/type-ans-icon.png" },
];

export default function AddSlide() {
  const handleOptionClick = (id: string) => {
    console.log(`Selected slide type: ${id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold text-[#1f2185] mb-10">Add Slide</h1>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {slideOptions.map((option) => (
            <Button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className="bg-blue-300 hover:bg-blue-400 text-black font-semibold rounded-lg px-6 py-10 flex flex-col items-start space-y-1 shadow-md"
            >
              <span className="flex items-center justify-center w-8 h-8 bg-[#6392DC] text-white rounded-full mb-2">
              <Image src={option.icon} alt={`${option.title} icon`} width={30} height={30}></Image>
              </span>
              <span className="text-lg">{option.title}</span>
              <span className="text-sm text-[#1e1e1e]">{option.subtitle}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

