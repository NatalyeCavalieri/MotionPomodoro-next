"use client"
import { useState, useEffect } from "react"

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

  function StartCountdown() {
    setIsActive(true)
  }

  function ResetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  return (
    <div>
      <div className="flex items-center font-semibold text-sky-950">
        <div className="flex-1 flex items-center justify-evenly bg-white shadow-3xl rounded-md text-9xl text-center">
          <span className="flex-1 border-r-2 border-slate-50 font-serif">
            {minuteLeft}
          </span>
          <span className="flex-1 font-serif ">{minuteRight}</span>
        </div>
        <span className="text-8xl my-0 mx-2 font-serif">:</span>
        <div className="flex-1 flex items-center justify-evenly bg-white shadow-3xl rounded-md text-9xl text-center">
          <span className="flex-1 border-r-2 border-slate-50 font-serif">
            {secondLeft}
          </span>
          <span className="flex-1 font-serif">{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className="w-full h-[5rem] mt-8 flex items-center justify-center border-[0] rounded-md bg-green-100 text-gray-700 text-xl font-semibold border-b-4 border-green-600"
          type="button"
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              className="w-full h-[5rem] mt-8 flex items-center justify-center border-[0] rounded-md bg-red-500 text-white text-xl font-semibold hover:bg-red-600 duration-300"
              type="button"
              onClick={ResetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              className="w-full h-[5rem] mt-8 flex items-center justify-center border-[0] rounded-md bg-indigo-600 text-white text-xl font-semibold hover:bg-indigo-800 duration-300"
              type="button"
              onClick={StartCountdown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}
