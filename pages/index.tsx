import type { NextPage } from 'next'
import NormalAudio from '../components/normal-audio'
import Reverb from '../components/reverb'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <NormalAudio />
      <Reverb />
    </Layout>
  )
}

export default Home
