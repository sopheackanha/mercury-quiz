import React from 'react'

interface QuizCardProps {
    category: string;
    title: string;
    thumbnailUrl?: string;
    className?: string;
}

export default function QuizCard({ category, title, thumbnailUrl, className }: QuizCardProps ) {
  return (
    <div className={`min-w-[200px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[280px] h-[150px] sm:h-[160px] md:h-[170px] lg:h-[180px] flex flex-col justify-between p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out bg-white border border-gray-200 ${className}`}>
        <div className="flex items-center justify-between">
            <div className="w-12 h-12 bg-[#6392DC]/20 rounded-full flex items-center justify-center text-[#1F2185] font-bold text-lg">Q</div>
            <span className="text-xs text-gray-500">{category}</span>
        </div>

        <div>
          <div>{thumbnailUrl}</div>
        </div>

        <div className="flex-grow flex items-center justify-center">
            <p className="text-xl font-bold text-[#1F2185] uppercase tracking-wide">{title}</p>
        </div>
    </div>
  )
}
