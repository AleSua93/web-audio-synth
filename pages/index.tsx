import type { NextPage } from 'next'
import Layout from '../components/layout'
import dynamic from 'next/dynamic'

const PianoRollWithNoSSR = dynamic(
  () => import('../components/piano-roll'),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <Layout>
      <PianoRollWithNoSSR />
    </Layout>
  )
}

export default Home
