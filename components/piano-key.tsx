import React, { useCallback, useEffect, useRef, useState } from "react"
import Oscillator from "../helpers/oscillator"

interface PianoKeyProps {
  audioContext: AudioContext
  frequency: number
  note: string
}

const PianoKey = ({ audioContext, frequency, note }: PianoKeyProps) => {
  const [oscillator, setOscillator] = useState(new Oscillator(audioContext, frequency))

  const play = useCallback(
    () => {
      oscillator.play()
    },
    [oscillator],
  )

  const stop = useCallback(
    () => {
      oscillator.stop()
    },
    [oscillator],
  )

  return (
    <button
      type="button"
      className="flex rounded-sm border-2 border-gray-600 bg-zinc-100 h-32 w-10 items-end justify-center hover:bg-red-300"
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <span className="font-bold">{note}</span>
    </button>
  )
}

export default PianoKey;