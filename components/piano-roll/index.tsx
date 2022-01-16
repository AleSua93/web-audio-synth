import React, { KeyboardEvent, useState } from "react"
import Notes from "../../constants/notes";
import AudioSettings from "../../models/audio-settings";
import Note from "../../models/note";
import PianoKey from "./piano-key";

interface PianoRollProps {
  audioSettings: AudioSettings
  pressedEvent?: KeyboardEvent
}

const PianoRoll = ({ audioSettings, pressedEvent }: PianoRollProps) => {
  const [audioContext, _setAudioContext] = useState(new AudioContext())

  return (
    <div className="flex w-full divide-x divide-black">
      {Notes.map((n: Note) => {
        return (
          <PianoKey
            audioContext={audioContext}
            key={n.name}
            note={n}
            keyPressedEvent={pressedEvent}
            audioSettings={audioSettings}
          />
        )
      })}
    </div>
  )
}

export default PianoRoll;