import Oscillator from "./oscillator"

export default class SynthManager {
  audioContext: AudioContext
  waveType: OscillatorType = 'sine'
  oscillators: Map<string, Oscillator> = new Map<string, Oscillator>()
  lpf: BiquadFilterNode
  globalGain: GainNode

  constructor(audioContext: AudioContext) {
    this.audioContext = audioContext

    // We're bypassing this for now
    this.lpf = new BiquadFilterNode(this.audioContext, {
      type: 'lowpass',
      frequency: 100
    })
    this.globalGain = new GainNode(this.audioContext)

    this.globalGain
      .connect(audioContext.destination)
  }

  createOscillator(id: string, freq: number) {
    const osc = new Oscillator(
      this.audioContext,
      freq,
      this.globalGain
    )
    
    this.oscillators.set(id, osc)

    return osc
  }

  setLpfCutoff(cutoffFreq: number) {
    this.lpf.frequency.linearRampToValueAtTime(
      cutoffFreq,
      this.audioContext.currentTime + 0.1
    )
  }

  setGlobalGain(newGain: number) {
    this.globalGain.gain
      .exponentialRampToValueAtTime(newGain, this.audioContext.currentTime + 0.01)
  }
}