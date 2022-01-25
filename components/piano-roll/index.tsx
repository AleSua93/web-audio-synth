import React, { KeyboardEvent, useEffect, useState } from "react";
import Notes from "../../constants/notes";
import AudioSettings from "../../models/audio-settings";
import Note from "../../models/note";
import OscillatorManager from "../../models/oscillator-manager";
import PianoKey from "./piano-key";

interface PianoRollProps {
  audioSettings: AudioSettings
  pressedEvent?: KeyboardEvent
}

const PianoRoll = ({ audioSettings, pressedEvent }: PianoRollProps) => {
  const [oscillatorManager] = 
    useState<OscillatorManager>(new OscillatorManager(new AudioContext()))

  useEffect(() => {
    oscillatorManager.setLpfCutoff(audioSettings.lpfCutoff)
  }, [audioSettings]);
  

  return (
    <div className="flex w-full divide-x divide-black">
      {Notes.map((n: Note) => {
        return (
          <PianoKey
            oscillatorManager={oscillatorManager}
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