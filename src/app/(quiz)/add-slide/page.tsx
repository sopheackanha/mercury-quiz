"use client";

import React from "react";
import { Button } from "@/components/ui/button";
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
    <div>
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold text-[#1f2185] mb-10">Add Slide</h1>
        <div className="grid grid-cols-2 gap-6 md:gap-8 mt-6">
          {slideOptions.slice(0, 4).map((option) => (
            <Button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className="bg-gradient-to-br from-[#1F2185]/80 to-[#6392DC]/80 hover:from-[#1F2185]/100 hover:to-[#6392DC]/100 text-black font-semibold rounded-lg pl-6 py-10 flex space-y-1 shadow-md cursor-pointer"
            >
              <span className="flex items-center justify-center w-12 h-12 bg-[#6392DC] text-white rounded-full mb-2 shrink-0">
              <Image src={option.icon} alt={`${option.title} icon`} width={30} height={30}></Image>
              </span>

              <div className="flex flex-col justify-center items-start ">
                <span className="text-2xl">{option.title}</span>
                <span className="text-base text-[#1e1e1e] font-light">{option.subtitle}</span>
              </div>
            </Button>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            key={slideOptions[4].id}
            onClick={() => handleOptionClick(slideOptions[4].id)}
            className="bg-gradient-to-br from-[#1F2185]/80 to-[#6392DC]/80 hover:from-[#1F2185]/100 hover:to-[#6392DC]/100 text-black font-semibold rounded-lg px-12 py-10 flex space-y-1 shadow-md cursor-pointer"
          >
            <span className="flex items-center justify-center w-12 h-12 bg-[#6392DC] text-white rounded-full mb-2 shrink-0">
              <Image src={slideOptions[4].icon} alt={`${slideOptions[4].title} icon`} width={30} height={30}></Image>
            </span>
            <div className="flex flex-col justify-center items-start ">
              <span className="text-2xl">{slideOptions[4].title}</span>
              <span className="text-base text-[#1e1e1e] font-light">{slideOptions[4].subtitle}</span>

            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

