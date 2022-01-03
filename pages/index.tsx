import type { NextPage } from 'next'
import AudioPlayer from '../components/audio-player'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <AudioPlayer />
    </Layout>
  )
}

export default Home
