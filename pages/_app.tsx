import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ProjectProvider } from '@/context/ProjectProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'Arial', 'sans-serif']
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ProjectProvider>
        <Component {...pageProps} />
      </ProjectProvider>
    </main>
  )
}
