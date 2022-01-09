import React, { KeyboardEvent, useState } from "react"
import Notes from "../constants/notes";
import Note from "../models/note";
import PianoKey from "./piano-key";

const PianoRoll = () => {
  const [audioContext, _setAudioContext] = useState(new AudioContext())
  const [pressedEvent, setPressedEvent] = useState<KeyboardEvent>()

  return (
    <div className="flex w-full" tabIndex={0} onKeyDown={setPressedEvent} onKeyUp={setPressedEvent}>
      {Notes.map((n: Note) => {
        return (
          <PianoKey
            audioContext={audioContext}
            key={n.name}
            note={n}
            keyPressedEvent={pressedEvent}
          />
        )
      })}
    </div>
  )
}

export default PianoRoll;