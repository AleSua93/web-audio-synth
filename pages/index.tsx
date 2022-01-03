import type { NextPage } from 'next'
import NormalAudio from '../components/normal-audio'
import ReverbAudio from '../components/reverb-audio'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <NormalAudio />
      <NormalAudio />
      <NormalAudio />
      <NormalAudio />
      <NormalAudio />
      <ReverbAudio />
    </Layout>
  )
}

export default Home
