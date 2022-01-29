import React, { ChangeEvent } from "react"
import AudioSettings from "../../models/audio-settings";
import GainSlider from "./gain-slider";
import LpfSlider from "./lpf-slider";
import SettingCard from "./setting-card";
import WaveSelector from "./wave-selector";

interface SettingsProps {
  settings: AudioSettings
  setSettings: (settings: AudioSettings) => void
}

const Settings = ({ settings, setSettings }: SettingsProps) => {
  const onWaveTypeChanged = (ev: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      waveType: ev.target.value as OscillatorType
    })
  }

  const onLpfCutoffChanged = (ev: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      lpfCutoff: parseInt(ev.target.value)
    })
  }

  const onGlobalGainChanged = (ev: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      globalGain: parseFloat(ev.target.value)
    })
  }

  return (
    <div className='flex divide-x gap-4 p-4'>
      <SettingCard>
        <WaveSelector waveType={settings.waveType} onWaveTypeChanged={onWaveTypeChanged}/>
      </SettingCard>
      <SettingCard>
        <LpfSlider cutoff={settings.lpfCutoff} onCutoffChanged={onLpfCutoffChanged} />
      </SettingCard>
      <SettingCard>
        <GainSlider gain={settings.globalGain} onGainChanged={onGlobalGainChanged} />
      </SettingCard>
    </div>
  )
}

export default Settings;