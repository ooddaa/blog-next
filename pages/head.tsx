import Head from "next/head"
import { ReactElement } from "react"

export default function AppHead({ children }: { children: ReactElement}) {
  return (
    <div>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/circles.png"></link>
    </Head>
      {children}
    </div>
  )
}
