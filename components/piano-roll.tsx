import React, { useState } from "react"
import NoteFrequencies from "../constants/note-frequencies";
import PianoKey from "./piano-key";

const PianoRoll = () => {
  const [audioContext, _setAudioContext] = useState(new AudioContext())

  return (
    <>
      {Object.keys(NoteFrequencies).map((note) => {
        return (
          <PianoKey
            audioContext={audioContext}
            frequency={NoteFrequencies[note]}
            key={note}
            note={note}
          />  
        )
      })}
      
    </>
  )
}

export default PianoRoll;