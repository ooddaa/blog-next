// import "@/app/globals.css"
import './globals.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Welcome",
  icons: {
    icon: [
      {
        url: "/circles.png",
        href: "/circles.png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={manrope.className}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
