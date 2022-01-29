import type { NextPage } from 'next'
import { KeyboardEvent } from 'react'
import Layout from '../components/layout'
import dynamic from 'next/dynamic'
import Settings from '../components/settings'
import { useState } from 'react'
import AudioSettings from '../models/audio-settings'

const PianoRollWithNoSSR = dynamic(
  () => import('../components/piano-roll'),
  { ssr: false }
)

const Home: NextPage = () => {
  const [audioSettings, setAudioSettings] = useState<AudioSettings>({
    waveType: 'sine',
    lpfCutoff: 200,
    globalGain: 0.001
  })
  const [pressedEvent, setPressedEvent] = useState<KeyboardEvent>()

  return (
    <Layout>
      <div
        className="flex flex-col flex-grow justify-between"
        tabIndex={0}
        onKeyDown={setPressedEvent}
        onKeyUp={setPressedEvent}
      >
        <Settings settings={audioSettings} setSettings={setAudioSettings}/>
        <div>
          <div className='p-4 bg-yellow-900 border-2 border-y border-gray-800'/>
          <PianoRollWithNoSSR
            audioSettings={audioSettings}
            pressedEvent={pressedEvent}
          />
          </div>
        </div>
    </Layout>
  )
}

export default Home
