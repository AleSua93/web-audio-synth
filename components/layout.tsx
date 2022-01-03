import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex h-full justify-center items-center'>
      <div className='grid grid-cols-3 gap-4 m-4 w-2/3'>
        <Head>
          <title>Audio Playground</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
      </div>
    </div>    
  )
}

export default Layout