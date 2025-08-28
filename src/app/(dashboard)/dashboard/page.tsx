"user client"

import React from 'react'
import { QuizCategory } from '@/components/QuizCategory'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
// import { createClient } from '@/utils/supabase/server'
// import { redirect } from 'next/navigation'

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

export default async function Dashboard() {
  // i don't think this code is used? since everything write nv login signup idk T^T
  // const supabase = await createClient();

  // const {
  //   data: { user},
  // } = await supabase.auth.getUser(); // error klg auth nis dak await klg const supabase = createClient()

  // if (!user) {
  //   redirect('/login');
  // }

  // if (!user.email_confirmed_at) {
  //   redirect('/verify-email');
  // }

  const mathematicsQuizzes = dummyQuizzes.filter(q => q.category === 'Mathematics');
  const chemistryQuizzes = dummyQuizzes.filter(q => q.category === 'Chemistry');
  const physicsQuizzes = dummyQuizzes.filter(q => q.category === 'Physics');
  const biologyQuizzes = dummyQuizzes.filter(q => q.category === 'Biology');
  const englishQuizzes = dummyQuizzes.filter(q => q.category === 'English');

  return (
    <div className="flex flex-col min-h-screen bg-[url('/dashboard-bg.png')] bg-cover bg-center">

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8 px-6 flex flex-col lg:flex-row items-center lg:items-center gap-8">
            <div className="w-full lg:w-1/2 flex flex-col px-15 space-y-10 justify-center">
              <div className='flex justify-center'>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#1F2185] to-[#6392DC]">Welcome, User!</h1> {/* klg nis suppose to be {username}*/}
              </div>

              <div className='flex items-center flex-1 px-3 py-0.5 bg-white border border-[#1F2185] rounded-full text-[#1e1e1e]'>
                <span className='mr-4 ml-4 text-[#1f2185] text-3xl font-bold'>#</span>
                <input type="text" placeholder='Enter code here' className='flex-1 outline-none bg-transparent text-lg placeholder-[#1e1e1e]' />
                <button className='ml-2 p-1 bg-[#1f2185] hover:bg-[#1f2185]/80 rounded-full transition'>
                  <ArrowRight className='w-6 h-6 text-white cursor-pointer'></ArrowRight>
                </button>
              </div>

              <Button className="bg-[#1F2185] hover:bg-[#1F2185]/80 text-white px-10 py-6 text-2xl rounded-full shadow-xl font-semibold mx-0 my-0 items-center flex flex-col justify-center cursor-pointer">
                <Link href={'/signup'}>Create Your Own Quiz</Link>
              </Button>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center'>
              <Image src={'/dashboard-img.png'} alt='Sailor Mercury Image' width={490} height={400}></Image>
            </div>
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
