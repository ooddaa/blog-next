import MantineHeader, { links } from '@/app/components/MantineHeader';
import localFont from 'next/font/local'

const font = localFont({
  src: '../../../public/fonts/LibreFranklin.woff2',
  display: 'swap',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <MantineHeader links={links}></MantineHeader>
      <div className={["wrapper", font.className, "w-full max-sm:px-4 sm:w-2/5 mx-auto text-base/6 sm:text-lg/8"].join(" ")}>{children}</div>
      <style jsx global>{`
        code {
          font-family: 'Menlo';
          font-size: 14px;
          line-height: 20px;
        }
        span > code > span > span {
          font-family: 'Menlo';
          font-size: 14px;
          line-height: 20px;
          padding: 4px;
          background-color: #f9fafb;
          color: #1e293b;
        }
        pre {
          border-radius: 8px;
          padding: 16px;
        }
        [data-highlighted-chars] {
          background-color: grey;
        }
      `}</style>
    </>
  )
}