import React, { ChangeEvent } from "react"
import AudioSettings from "../../models/audio-settings";
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

  return (
    <div className='grid grid-cols-4 gap-4 h-full p-2 bg-gray-800'>
      <SettingCard>
        <WaveSelector waveType={settings.waveType} onWaveTypeChanged={onWaveTypeChanged}/>
      </SettingCard>
      <SettingCard>
        <div>Hello</div>
      </SettingCard>
      <SettingCard>
        <div>Hello</div>
      </SettingCard>
    </div>
  )
}

export default Settings;