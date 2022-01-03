import { LegacyRef, useCallback, useEffect, useRef, useState } from "react"
import useAudio from "../hooks/useAudio"

const AudioPlayer = () => {
  const audioElement = useRef<HTMLAudioElement>(null)
  const { audioSourceNode } = useAudio(audioElement)

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

  return (
    <>
      <audio ref={audioElement} src="test_audio.wav" />
      <div>Audio player here!</div>
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
    </>
  )
}

export default AudioPlayer;