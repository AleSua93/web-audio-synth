import React, { ChangeEvent } from "react"

interface WaveRadioButtonProps {
  id: string
  name: string
  value: string
  label: string
  selectedWaveType: OscillatorType
  onWaveTypeChanged: (ev: ChangeEvent<HTMLInputElement>) => void
}

const WaveRadioButton = (props: WaveRadioButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={props.id}
        name={props.name}
        type="radio"
        value={props.value}
        checked={props.selectedWaveType === props.id}
        onChange={props.onWaveTypeChanged}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default WaveRadioButton;