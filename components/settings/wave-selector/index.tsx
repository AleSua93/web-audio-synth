import React, { ChangeEvent } from "react"

interface WaveSelectorProps {
  waveType: string
  onWaveTypeChanged: (ev: ChangeEvent<HTMLInputElement>) => void
}

const WaveSelector = ({ waveType, onWaveTypeChanged }: WaveSelectorProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl">Wave type</h2>
      <span>
        <input
          type="radio"
          value='sine'
          checked={waveType === 'sine'}
          onChange={onWaveTypeChanged}
        /> Sine
      </span>
      <span>
        <input
          type="radio"
          value='square'
          checked={waveType === 'square'}
          onChange={onWaveTypeChanged}
        /> Square
      </span>
      <span>
        <input
          type="radio"
          value='sawtooth'
          checked={waveType === 'sawtooth'}
          onChange={onWaveTypeChanged}
        /> Sawtooth
      </span>
      <span>
        <input
          type="radio"
          value='triangle'
          checked={waveType === 'triangle'}
          onChange={onWaveTypeChanged}
        /> Triangle
      </span>
    </div>
  )
}

export default WaveSelector;