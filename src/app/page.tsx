
import { CompletedChallenges } from "@/components/completedChallenges"
import { Countdown } from "@/components/countdown"
import { ExperienceBar } from "@/components/experienceBar"
import { Profile } from "@/components/profile"


import Head from "next/head"

export default function Home() {

  return (
    <div className="h-screen max-w-[992px] my-0 mx-auto py-10 px-8 flex flex-col bg-slate-50">
      <Head>
        <title>Motion Pomodoro</title>
      </Head>
      <ExperienceBar />

      <section className="flex-1 grid grid-cols-2 gap-24 content-center">
        <div>
        <Profile/>
        <CompletedChallenges/>
        <Countdown/>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
