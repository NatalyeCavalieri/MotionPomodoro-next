import Image from "next/image";
import ImageIcon from '../../public/icons/Icon.svg'
import ImageExercise from '../../public/icons/exercise.svg'


export function ChallengeBox(){
  const hasActiveChallenge = true

  return (
    <>
      {hasActiveChallenge ? (
        <div className=" bg-white h-[500px] w-[465px] flex flex-col justify-center items-center rounded-md shadow-3xl">
          <div className="h-full flex flex-col items-center py-6 px-14">
            <header className="text-indigo-600 font-semibold text-xl border-b-[1px] border-gray-300 mb-16 pt-0 px-8 pb-6">
              Ganhe 400 xp
            </header>
            <main className="flex flex-col justify-center items-center">
              <Image src={ImageExercise} alt="" width={140} height={112} />
              <strong className="mt-6 mb-2 text-3xl text-blue-950">
                Exercite-se
              </strong>
              <p className="text-base text-gray-700 text-center mb-9">
                É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e
                estique suas pernas pra você ficar saudável.
              </p>
            </main>
            <footer className="flex gap-2">
              <button className="bg-red-500 text-white py-4 px-16 rounded-md font-semibold hover:brightness-90 duration-400">
                Falhei
              </button>
              <button className="bg-green-600 text-white py-4 px-16 rounded-md font-semibold hover:brightness-90">
                Completei
              </button>
            </footer>
          </div>
        </div>
      ) : (
        <div className=" bg-white h-[500px] w-[470px] flex flex-col justify-center items-center py-36 px-20 rounded-md shadow-3xl">
          <div className="flex flex-col items-center gap-10">
            <strong className="text-2xl text-center font-medium">
              Inicie um ciclo para receber desafios a serem completados
            </strong>
            <p className="flex gap-4">
              <Image src={ImageIcon} alt="" width={32} height={43} />
              Complete-os e ganhe experiência e avance de leve.
            </p>
          </div>
        </div>
      )}
    </>
  )
}