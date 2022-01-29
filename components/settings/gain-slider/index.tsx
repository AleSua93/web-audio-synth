import React, { ChangeEvent } from "react";

interface GainSliderProps {
  gain: number
  onGainChanged: (ev: ChangeEvent<HTMLInputElement>) => void
}

const GainSlider = ({ gain, onGainChanged }: GainSliderProps) => {
  return (
    <div className="flex flex-col text-center gap-1">
      <h2 className="text-lg mb-4">Gain</h2>
      <div className="flex flex-col justify-center">
        <input
          id="gain"
          type="range"
          name="gain"
          min="0.001"
          max="1"
          step="0.1"
          style={{
            transformOrigin: '75px 75px',
            transform: 'rotate(-90deg)'
          }}
          onChange={onGainChanged}
          value={gain}
        />
        <label htmlFor="gain">Gain {gain}</label>
      </div>
    </div>
  )
}

export default GainSlider;