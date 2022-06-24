import Head from 'next/head'
import { FC, ReactNode } from 'react'
import NavBar from '../ui/NavBar'

interface IProps {
  children: ReactNode | ReactNode[]
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
        <NavBar />
      </nav>

      <main style={{ padding: '20px 50px' }}>
        { children }
      </main>
    </>
  )
}

export default Layout