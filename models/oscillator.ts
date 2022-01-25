import AudioSettings from "./audio-settings"

export default class Oscillator {
  initialGain: number = 0.5
  delta: number = 0.02 // In seconds
  waveType: OscillatorType = 'sine'

  oscillatorNode: OscillatorNode
  gainNode: GainNode
  frequency: number
  audioContext: AudioContext
  nextNode: AudioNode

  constructor(audioContext: AudioContext, freq: number = 440, nextNode: AudioNode) {
    this.frequency = freq
    this.audioContext = audioContext
    this.nextNode = nextNode
    this.oscillatorNode = audioContext.createOscillator()
    this.gainNode = audioContext.createGain()
    this.gainNode.gain.value = this.initialGain
  }

  play() {
    this.oscillatorNode = this.audioContext.createOscillator()
    this.oscillatorNode.type = this.waveType
    this.oscillatorNode.frequency.setValueAtTime(this.frequency, this.audioContext.currentTime)

    this.oscillatorNode
      .connect(this.gainNode)
      .connect(this.nextNode)

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
      try {
        this.oscillatorNode.stop();
      } catch (e) {
        console.log("lol");
        
      }

    }, this.delta * 1000)
  }

  setAudioSettings(settings: AudioSettings) {
    this.waveType = settings.waveType
  }
}