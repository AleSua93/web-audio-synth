import React, { ChangeEvent } from "react";

interface LpfSliderProps {
  cutoff: number
  onCutoffChanged: (ev: ChangeEvent<HTMLInputElement>) => void
}

const LpfSlider = ({ cutoff, onCutoffChanged }: LpfSliderProps) => {
  return (
    <div className="flex flex-col text-center gap-1">
      <h2 className="text-lg mb-4">LPF</h2>
      <div className="flex flex-col justify-center">
        <input
          id="lpf"
          type="range"
          name="lpf"
          min="50"
          max="300"
          style={{
            transformOrigin: '75px 75px',
            transform: 'rotate(-90deg)'
          }}
          onChange={onCutoffChanged}
          value={cutoff}
        />
        <label htmlFor="lpf">Cutoff {cutoff}</label>
      </div>
    </div>
  )
}

export default LpfSlider;