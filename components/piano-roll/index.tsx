import React, { KeyboardEvent, useEffect, useState } from "react";
import Notes from "../../constants/notes";
import AudioSettings from "../../models/audio-settings";
import Note from "../../models/note";
import SynthManager from "../../models/synth-manager";
import PianoKey from "./piano-key";

interface PianoRollProps {
  audioSettings: AudioSettings
  pressedEvent?: KeyboardEvent
}

const PianoRoll = ({ audioSettings, pressedEvent }: PianoRollProps) => {
  const [synthManager] = 
    useState<SynthManager>(new SynthManager(new AudioContext()))

  useEffect(() => {
    synthManager.setLpfCutoff(audioSettings.lpfCutoff)
    synthManager.setGlobalGain(audioSettings.globalGain)
  }, [audioSettings]);
  

  return (
    <div className="flex w-full divide-x divide-black">
      {Notes.map((n: Note) => {
        return (
          <PianoKey
            synthManager={synthManager}
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