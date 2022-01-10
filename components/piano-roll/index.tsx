import React, { KeyboardEvent, useEffect, useState } from "react"
import Notes from "../../constants/notes";
import AudioSettings from "../../models/audio-settings";
import Note from "../../models/note";
import PianoKey from "./piano-key";

interface PianoRollProps {
  audioSettings: AudioSettings
}

const PianoRoll = ({ audioSettings }: PianoRollProps) => {
  const [audioContext, _setAudioContext] = useState(new AudioContext())
  const [pressedEvent, setPressedEvent] = useState<KeyboardEvent>()

  return (
    <div
      className="flex w-full"
      tabIndex={0}
      onKeyDown={setPressedEvent}
      onKeyUp={setPressedEvent}
    >
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