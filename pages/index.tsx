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
      <div className="flex flex-col flex-grow justify-between">
        <div className='bg-gray-200 h-full'>01</div>
        <PianoRollWithNoSSR />
      </div>
    </Layout>
  )
}

export default Home
