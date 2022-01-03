import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react"

interface AudioObjects {
  audioContext?: AudioContext
  audioSourceNode?: MediaElementAudioSourceNode
}

const useAudio = (audioElementRef: RefObject<HTMLMediaElement>):
  AudioObjects => {
  const [audioContext, setAudioContext] = useState<AudioContext>()
  const [audioSourceNode, setAudioSourceNode] = useState<MediaElementAudioSourceNode>()

  useEffect(() => {
    const context = new AudioContext()

    if (audioElementRef?.current) {
      const track = context.createMediaElementSource(audioElementRef.current)

      track.connect(context.destination)

      setAudioSourceNode(track)
    }

    setAudioContext(context)
  }, [])

  return {
    audioContext,
    audioSourceNode
  }
}

export default useAudio