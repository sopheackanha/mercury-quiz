"user client"

import React from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { QuizCategory } from '@/components/QuizCategory'

const dummyQuizzes = [
  { id: 'math1', title: 'Basic Algebra', category: 'Mathematics' },
  { id: 'math2', title: 'Geometry Fun', category: 'Mathematics' },
  { id: 'math3', title: 'Calculus Intro', category: 'Mathematics' },
  { id: 'chem1', title: 'Elements Basics', category: 'Chemistry' },
  { id: 'chem2', title: 'Chemical Bonds', category: 'Chemistry' },
  { id: 'phys1', title: 'Newtonian Laws', category: 'Physics' },
  { id: 'phys2', title: 'Quantum Intro', category: 'Physics' },
  { id: 'eng1', title: 'Grammar Test', category: 'English' },
  { id: 'eng2', title: 'Literary Devices', category: 'English' },
];

export default function Dashboard() {
  const mathematicsQuizzes = dummyQuizzes.filter(q => q.category === 'Mathematics');
  const chemistryQuizzes = dummyQuizzes.filter(q => q.category === 'Chemistry');
  const physicsQuizzes = dummyQuizzes.filter(q => q.category === 'Physics');
  const biologyQuizzes = dummyQuizzes.filter(q => q.category === 'Biology');
  const englishQuizzes = dummyQuizzes.filter(q => q.category === 'English');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8"> {/* This makes the main content scrollable */}
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8 p-6 bg-gradient-to-br from-[#1F2185] to-[#6392DC] text-white rounded-2xl shadow-lg relative overflow-hidden">
            <h1 className="text-4xl font-extrabold mb-2">Welcome, User! 👋</h1>
            <p className="text-lg mb-6">What do you want to learn today?</p>
            <div className="relative max-w-lg">
              <Input
                type="text"
                placeholder="Explore new quizzes or topics..."
                className="pl-12 pr-4 py-3 w-full rounded-xl border-none bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>

            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/ami-reading.png")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}></div>
          </div>

          <QuizCategory title="Mathematics" quizzes={mathematicsQuizzes} />
          <QuizCategory title="Chemistry" quizzes={chemistryQuizzes} />
          <QuizCategory title="Physics" quizzes={physicsQuizzes} />
          <QuizCategory title="Biology" quizzes={biologyQuizzes} />
          <QuizCategory title="English" quizzes={englishQuizzes} />
        </div>
      </div>
    </div>
  )
}
