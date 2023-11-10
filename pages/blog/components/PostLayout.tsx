import localFont from 'next/font/local'
import { MantineHeader } from '@/app/components/MantineHeader'
const font = localFont({
  src: '../../../public/fonts/LibreFranklin.woff2',
  display: 'swap',
})

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <MantineHeader />
      <div className={["wrapper", font.className, "w-full max-md:px-4 md:w-3/5 pb-8 mx-auto text-base/6 md:text-lg/8"].join(" ")}>{children}</div>
    </>
  )
}
