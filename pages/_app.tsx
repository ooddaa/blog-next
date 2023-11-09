// These styles apply to every route in the application
// import '@/styles/globals.css'
import '@/app/globals.css'
import "@mantine/core/styles.css"
import "./code-highlight.css"
import { MantineProvider } from '@mantine/core'
import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import AppHead from './head'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppHead>
      <MantineProvider>
        <Suspense fallback={<div>loading...</div>}>
          <Component {...pageProps} />
        </Suspense>
      </MantineProvider>
    </AppHead>
  )
}
