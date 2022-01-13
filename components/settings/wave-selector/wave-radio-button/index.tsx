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
  const isChecked = props.selectedWaveType === props.id

  return (
    <div className="flex items-center gap-2 w-full">
      <input
        id={props.id}
        name={props.name}
        type="radio"
        value={props.value}
        checked={isChecked}
        onChange={props.onWaveTypeChanged}
        className="hidden"
      />
      <label
        htmlFor={props.id}
        className={`btn w-full text-center text-white ${isChecked ? 'btn-green' : 'btn-blue'}`}
      >{props.label}</label>
    </div>
  )
}

export default WaveRadioButton;