import React, { ChangeEvent } from "react"
import WaveRadioButton from "./wave-radio-button";

interface WaveSelectorProps {
  waveType: OscillatorType
  onWaveTypeChanged: (ev: ChangeEvent<HTMLInputElement>) => void
}

const WaveSelector = ({ waveType, onWaveTypeChanged }: WaveSelectorProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl">Wave type</h2>
      <WaveRadioButton
        id="sine"
        name="wave-radio"
        value="sine"
        onWaveTypeChanged={onWaveTypeChanged}
        selectedWaveType={waveType}
        label="Sine"
      />
      <WaveRadioButton
        id="square"
        name="wave-radio"
        value="square"
        onWaveTypeChanged={onWaveTypeChanged}
        selectedWaveType={waveType}
        label="Square"
      />
      <WaveRadioButton
        id="sawtooth"
        name="wave-radio"
        value="sawtooth"
        onWaveTypeChanged={onWaveTypeChanged}
        selectedWaveType={waveType}
        label="Sawtooth"
      />
      <WaveRadioButton
        id="triangle"
        name="wave-radio"
        value="triangle"
        onWaveTypeChanged={onWaveTypeChanged}
        selectedWaveType={waveType}
        label="Triangle"
      />
    </div>
  )
}

export default WaveSelector;