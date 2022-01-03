import { useCallback, useRef } from "react"
import useAudio from "../hooks/useAudio"

const ReverbAudio = () => {
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
    </div>
  )
}

export default ReverbAudio;