import { useCallback, useRef } from "react"
import useAudio from "../hooks/useAudio"

const NormalAudio = () => {
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
      <div>Regular audio</div>
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
    </>
  )
}

export default NormalAudio;