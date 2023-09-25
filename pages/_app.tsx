// These styles apply to every route in the application
import '@/app/globals.css'
import { Suspense } from 'react'
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component {...pageProps} />
    </Suspense>
  )
}