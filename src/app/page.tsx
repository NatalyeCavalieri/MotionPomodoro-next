
import { ChallengeBox } from "@/components/challengeBox"
import { CompletedChallenges } from "@/components/completedChallenges"
import { Countdown } from "@/components/countdown"
import { ExperienceBar } from "@/components/experienceBar"
import { Profile } from "@/components/profile"


import Head from "next/head"

export default function Home() {

  return (
    <div className="bg-blue-100 h-screen">
      <div className="h-screen max-w-[1000px] my-0 mx-auto flex flex-col bg-blue-100 ">
        <Head>
          <title>Motion Pomodoro</title>
        </Head>
        <ExperienceBar />

        <section className="flex-1 grid grid-cols-2 gap-[60px] content-center">
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </div>
  )
}
