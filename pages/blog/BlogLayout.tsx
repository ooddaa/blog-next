import { Libre_Franklin } from 'next/font/google'
import MantineHeader, { links } from '@/app/components/MantineHeader';

const font = Libre_Franklin({ subsets: ["latin"], weight: ["400", "500", "700", "900"] })

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