import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ["latin"] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={["wrapper", open_sans.className, "w-full sm:w-2/5 mx-auto text-base/6 sm:text-lg/8"].join(" ")}>{children}</div>
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
      {/* <style jsx>{`
        .wrapper {
          max-width: 50%;
          margin: 0 auto;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }

        html {
          font: 100%/1.5 system-ui;
        }

        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }

        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }

        h1,
        p {
          margin-bottom: 1.5rem;
        }

        
      `}</style> */}
    </>
  )
}