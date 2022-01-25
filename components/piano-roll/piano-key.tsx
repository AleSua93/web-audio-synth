import React, { KeyboardEvent, useEffect, useState } from "react"
import AudioSettings from "../../models/audio-settings"
import Note from "../../models/note"
import Oscillator from "../../models/oscillator"
import OscillatorManager from "../../models/oscillator-manager"

interface PianoKeyProps {
  oscillatorManager: OscillatorManager
  note: Note
  audioSettings: AudioSettings
  keyPressedEvent?: KeyboardEvent
}

const PianoKey = ({ oscillatorManager, note, keyPressedEvent, audioSettings }: PianoKeyProps) => {
  const [oscillator] = useState<Oscillator>(
    oscillatorManager.createOscillator(note.name, note.frequency)
  )
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