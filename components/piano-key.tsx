import React, { useCallback, useEffect, useRef, useState } from "react"
import Note from "../models/note"
import Oscillator from "../models/oscillator"

interface PianoKeyProps {
  audioContext: AudioContext
  note: Note
}

const PianoKey = ({ audioContext, note }: PianoKeyProps) => {
  const [oscillator, _setOscillator] = useState(new Oscillator(audioContext, note.frequency))

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
      className={`
        flex
        items-end
        justify-center
        h-48
        w-full
        rounded-sm
        border-2
        border-gray-600
        ${note.keyType === 'black' ? 'bg-black' : 'bg-zinc-100' }
        ${note.keyType === 'black' ? 'text-white' : '' }
        hover:bg-red-400
      `}
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <span className="font-bold">{note.name}</span>
    </button>
  )
}

export default PianoKey;