import React, { useState } from "react"
import Notes from "../constants/notes";
import Note from "../models/note";
import PianoKey from "./piano-key";

const PianoRoll = () => {
  const [audioContext, _setAudioContext] = useState(new AudioContext())

  return (
    <div className="flex w-full">
      {Notes.map((n: Note) => {
        return (
          <PianoKey
            audioContext={audioContext}
            key={n.name}
            note={n}
          />
        )
      })}
    </div>
  )
}

export default PianoRoll;