import { useCallback, useRef } from "react"
import useAudio from "../hooks/useAudio"

const Reverb = () => {
  const audioElement = useRef<HTMLAudioElement>(null)
  useAudio(audioElement)

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
      <div>Audio with reverb</div>
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
    </>
  )
}

export default Reverb;