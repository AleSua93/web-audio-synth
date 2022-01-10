import React, { KeyboardEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react"
import AudioSettings from "../../models/audio-settings"
import Note from "../../models/note"
import Oscillator from "../../models/oscillator"

interface PianoKeyProps {
  audioContext: AudioContext
  note: Note
  audioSettings: AudioSettings
  keyPressedEvent?: KeyboardEvent
}

const PianoKey = ({ audioContext, note, keyPressedEvent, audioSettings }: PianoKeyProps) => {
  const [oscillator, _setOscillator] = useState(new Oscillator(audioContext, note.frequency))
  const [isPressed, setIsPressed] = useState<boolean>()

  useEffect(() => {
    oscillator.setAudioSettings(audioSettings)
  }, [audioSettings])

  useEffect(() => {
    if (isPressed) {
      oscillator.play()
    } else if (isPressed === false) {
      oscillator.stop()
    }
  }, [isPressed])

  useEffect(() => {
    // The osc plays if the key was just pressed for the first time
    if (
      keyPressedEvent?.type === 'keydown' &&
      keyPressedEvent?.code === note.keyCode &&
      !isPressed
    ) {
      setIsPressed(true)
    }

    // The osc stops if it was playing and the key was up
    if (
      keyPressedEvent?.type === 'keyup' &&
      keyPressedEvent?.code === note.keyCode
    ) {
      setIsPressed(false)
    }

    // Or if another key was down (mono synth behavior)
    if (
      keyPressedEvent?.type === 'keydown' &&
      keyPressedEvent?.code !== note.keyCode &&
      isPressed
    ) {
      setIsPressed(false)
    }
  }, [keyPressedEvent])

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
        ${isPressed ? 'bg-red-400' : '' }
      `}
    >
      <span className="font-bold">{note.name}</span>
    </button>
  )
}

export default PianoKey;