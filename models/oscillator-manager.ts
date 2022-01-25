import Oscillator from "./oscillator"

export default class OscillatorManager {
  audioContext: AudioContext
  waveType: OscillatorType = 'sine'
  oscillators: Map<string, Oscillator> = new Map<string, Oscillator>()
  lpf: BiquadFilterNode

  constructor(audioContext: AudioContext) {
    this.audioContext = audioContext

    this.lpf = new BiquadFilterNode(this.audioContext, {
      type: 'lowpass',
      frequency: 100
    })
    this.lpf.connect(audioContext.destination)
  }

  createOscillator(id: string, freq: number) {
    const osc = new Oscillator(
      this.audioContext,
      freq,
      this.audioContext.destination
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
}