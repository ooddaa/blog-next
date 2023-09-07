import React from 'react'
import { Span, resolveMonth, parseDateToNumbers } from '@/app/toolbox'

interface BlogHeaderProps {
  title: string, 
  author: string, 
  date: string, 
  timeToRead: string, 
  version: string
}
export default function Header({ title, author, date, timeToRead, version }: BlogHeaderProps): JSX.Element {
  let [year, month, day] = [1111, 1, 1]
  if (typeof date == "string") [year, month, day] = parseDateToNumbers(date)

  return (
    <>
    <div className="blog-post__header">
      <div className="blog-post__header__title">
        <h1>{title || "no title"}</h1>
      </div>

      <div className="blog-post__header__author">
        <div className="flex flex-row gap-8 justify-center items-center border-t text-sm sm:text-base text-slate-500">
          <div> <Span className="oda">{author}</Span> </div>
          <div> 
            {day} {resolveMonth(month)},{" "}{year}
          </div>
          <div>
            {timeToRead} read
          </div>
          {version ? <div>version: {version}</div> : ""}
          <div>
          </div>
        </div>
      </div>
    </div>
     <style jsx>{`
     .blog-post__header__title h1 {
       padding-bottom: 1.5rem;
       text-align: center;
       font-weight: 700;
       font-size: 2.25rem;
       line-height: 2.5rem;
     }

     .post-header {
       margin-bottom: 2rem;
     }
     .description {
       opacity: 0.6;
     }
   `}</style>
   </>
  )
}
