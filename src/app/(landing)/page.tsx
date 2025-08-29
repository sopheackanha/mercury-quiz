'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* on small screen wanna make ah bg ng tv ey pseng */}
      <div className="bg-[url(/home-bg.png)] bg-cover bg-no-repeat bg-center min-h-screen w-full layout">
      {/* the join code bar thingy */}
        <div className="flex justify-center">
          <div className='flex items-center w-full max-w-md rounded-full bg-[#1f2185] text-3xl text-white overflow-hidden mt-5 px-2.5'>
            <button className='px-4 py-3 font-semibold'>Join</button>

            {/* <span className='h-6 w-px bg-white/50 mx-2'></span> */}

            <div className='flex items-center flex-1 px-3 py-0.5 bg-white rounded-full text-[#1e1e1e]'>
              <span className='mr-4 ml-4 text-[#1f2185] text-3xl font-bold'>#</span>
              <input type="text" placeholder='Enter code here' className='flex-1 outline-none bg-transparent text-lg placeholder-[#1e1e1e]' />
              <button className='ml-2 p-1 bg-[#1f2185] hover:bg-[#1f2185]/80 rounded-full transition'>
                <ArrowRight className='w-6 h-6 text-white'></ArrowRight>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 h-[calc(100vh-80px)]">
          {/* 100vh - 80px(ah nis approximate height of and join code bar ng) so dork vea jenhh tv leng mean blank space nv pi krom hz WONDERHOY */}
          {/* <div className="bg-[url(/homepage_bg.png)]">
            <Image src={"/homepage_bg.png"} alt="Sailor Mercury background" width={702} height={624}></Image>
          </div> */}

          <div className="col-span-3"></div>

          <div className="col-span-2 flex items-center justify-center">
            <div className="text-center space-y-8 flex flex-col justify-center items-center">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#1F2185] to-[#6392DC]">
              Welcome to
                <br />
                <span>MercuryQuiz</span>
              </h1>

              <p className="text-[#1e1e1e] text-xl leading-relaxed">
              Take quizzes to test your knowledge and create your own quiz with MercuryQuiz {"><"}
              </p>

              <Button className="bg-[#1F2185] hover:bg-[#1F2185]/80 text-white px-10 py-6 text-2xl rounded-full shadow-xl font-semibold mx-0 my-0 items-center flex flex-col justify-center cursor-pointer">
                <Link href={'/signup'}>Create Your Own Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
