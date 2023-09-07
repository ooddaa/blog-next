import React from 'react'
import { Span, resolveMonth, parseDateToNumbers } from '@/app/toolbox'

interface BlogHeaderProps {
  title: string, 
  subtitle?: string, 
  author: string, 
  date: string|number, 
  timeToRead: string, 
  version: string,
}
export default function Header({ title, subtitle, author, date, timeToRead, version }: BlogHeaderProps): JSX.Element {
  const [year, month, day] = parseDateToNumbers(date)
  return (
    <>
    <div className="blog-post__header my-12">
      <div className="blog-post__header__title pb-4 text-center text-4xl sm:text-6xl font-bold">
        <h1>{title || "no title"}</h1>
      </div>
      {subtitle && 
        <div className="blog-post__header__subtitle pb-8 text-center text-slate-500 text-lg sm:text-2xl font-regular opacity-75">
            {subtitle}
        </div>
      }
      <div className="blog-post__header__author">
        <div className="flex flex-row gap-8 justify-center items-center border-t text-sm sm:text-base text-slate-500">
          <div> <Span className="oda">{author}</Span> </div>
          <div> 
            {day.toString()} {resolveMonth(month)},{" "}{year}
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
   </>
  )
}
