import { RefObject, useEffect, useState } from "react"

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
      const sourceNode = context.createMediaElementSource(audioElementRef.current)

      setAudioSourceNode(sourceNode)
    }

    setAudioContext(context)
  }, [])

  return {
    audioContext,
    audioSourceNode
  }
}

export default useAudio