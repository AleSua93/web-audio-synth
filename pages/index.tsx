import type { NextPage } from 'next'
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
    waveType: 'sine'
  })

  return (
    <Layout>
      <div className="flex flex-col flex-grow justify-between">
        <Settings settings={audioSettings} setSettings={setAudioSettings}/>
        <PianoRollWithNoSSR audioSettings={audioSettings}/>
      </div>
    </Layout>
  )
}

export default Home
