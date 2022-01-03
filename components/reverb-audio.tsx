import React, { useCallback, useEffect, useRef, useState } from "react"
import useAudio from "../hooks/useAudio"

const ReverbAudio = () => {
  const audioElement = useRef<HTMLAudioElement>(null)
  const [gainNode, setGainNode] = useState<GainNode>()
  const { audioContext, audioSourceNode } = useAudio(audioElement)

  useEffect(() => {
    if (audioSourceNode && audioContext) {
      const gainNode = audioContext.createGain()
      audioSourceNode.connect(gainNode).connect(audioContext.destination)

      setGainNode(gainNode)
    }
  }, [audioContext, audioSourceNode])

  const play = useCallback(
    () => {      
      audioElement.current && audioElement.current.play()
    },
    [audioElement],
  )

  const pause = useCallback(
    () => {      
      audioElement.current && audioElement.current.pause()
    },
    [audioElement],
  )

  const setVolume = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      console.log(ev.target.value);
      
      if (gainNode) gainNode.gain.value = Number(ev.target.value)
    },
    [gainNode],
  )

  return (
    <div className="flex flex-col gap-3 text-center border border-black p-4">
      <audio ref={audioElement} src="test_audio.wav" />
      <h1 className="text-xl">Audio with reverb</h1>
      <button
        type="button"
        className="btn btn-blue"
        onClick={play}
      >Play</button>
      <button
        type="button"
        className="btn btn-green"
        onClick={pause}
      >Pause</button>
      <input
        type="range"
        min="0"
        max="2"
        defaultValue={0.5}
        step="0.01"
        onChange={setVolume}
      ></input>
    </div>
  )
}

export default ReverbAudio;