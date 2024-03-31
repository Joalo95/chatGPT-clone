import Head from 'next/head'
import { Aside } from '@/components/Aside'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chat IA</title>
      </Head>
      <div className='relative w-full h-screen bg-gptgray'>
        <Aside />
        {children}
      </div>
    </>
  )
}
