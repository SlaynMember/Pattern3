import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ProjectProvider } from '@/context/ProjectProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ProjectProvider>
        <Component {...pageProps} />
      </ProjectProvider>
    </main>
  )
}
