import React, { useCallback, useEffect, useRef, useState } from "react"

interface PianoKeyProps {
  audioContext: AudioContext
  frequency: number
  note: string
}

const PianoKey = ({ audioContext, frequency, note }: PianoKeyProps) => {
  const [oscillator, setOscillator] = useState<OscillatorNode>()
  const [gainNode, setGainNode] = useState<GainNode>()

  const play = useCallback(
    () => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain();

      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)

      oscillator.connect(gainNode).connect(audioContext.destination)

      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1);
      oscillator.start()

      setOscillator(oscillator)
      setGainNode(gainNode)

      return () => {
        oscillator.stop()
      }
    },
    [oscillator],
  )

  const stop = useCallback(
    () => {
      oscillator?.stop()
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