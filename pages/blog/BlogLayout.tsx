import MantineHeader, { links } from '@/app/components/MantineHeader';
import localFont from 'next/font/local'

const font = localFont({
  src: '../../public/fonts/LibreFranklin.woff2',
  display: 'swap',
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <MantineHeader links={links}></MantineHeader>
      <div className={[
        "wrapper", 
        font.className, 
        "w-full", 
        "text-base/6 sm:text-lg/8"]
        .join(" ")}>{children}</div>
    </>
  )
}