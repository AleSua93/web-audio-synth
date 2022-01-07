export default class Oscillator {
  initialGain: number = 1
  delta: number = 0.01 // In seconds

  oscillatorNode: OscillatorNode
  gainNode: GainNode
  frequency: number
  audioContext: AudioContext

  constructor(audioContext: AudioContext, freq: number = 440) {
    this.frequency = freq
    this.audioContext = audioContext
    this.oscillatorNode = audioContext.createOscillator()
    this.gainNode = audioContext.createGain()
    this.gainNode.gain.value = this.initialGain
  }

  play() {
    this.oscillatorNode = this.audioContext.createOscillator()
    this.oscillatorNode.type = 'sine'
    this.oscillatorNode.frequency.setValueAtTime(this.frequency, this.audioContext.currentTime)

    this.oscillatorNode.connect(this.gainNode).connect(this.audioContext.destination)    

    this.gainNode.gain.setValueAtTime(0.0001, this.audioContext.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(1, this.audioContext.currentTime + this.delta);

    this.oscillatorNode.start()
  }

  stop() {
    this.gainNode.gain.setValueAtTime(
      this.gainNode.gain.value,
      this.audioContext.currentTime
    );

    this.gainNode.gain.exponentialRampToValueAtTime(
      0.0001, this.audioContext.currentTime + this.delta
    );

    setTimeout(() => {
      this.oscillatorNode.stop();
    }, this.delta * 1000)
  }
}