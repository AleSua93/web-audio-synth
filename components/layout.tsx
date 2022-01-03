import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex justify-center items-center h-full gap-2'>
      <Head>
        <title>Audio Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}

export default Layout