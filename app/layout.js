import './globals.css'
import Head from 'next/head'
import { Navbar, Footer } from './sections'

export const metadata = {
  title: 'Metaversus',
  description: 'Nextjs and Framer motion metaverse project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='bg-primary-black relative overflow-hidden'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
