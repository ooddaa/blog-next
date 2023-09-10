import React from "react";
import { Span, resolveMonth, humanizeDate } from "@/app/toolbox";
import { Libre_Franklin } from "next/font/google";

const header_font = Libre_Franklin({ subsets: ["latin"] });

interface BlogHeaderProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string | number;
  timeToRead: string;
  version: string;
}
export default function Header({
  title,
  subtitle,
  author,
  date,
  timeToRead,
  version,
}: BlogHeaderProps): JSX.Element {
  return (
    <>
      <div
        className={["blog-post__header my-12", header_font.className].join(" ")}
      >
        <div className="blog-post__header__title pb-4 text-center text-4xl sm:text-6xl/[72px] font-bold">
          <h1>{title || "no title"}</h1>
        </div>
        {subtitle && (
          <div className="blog-post__header__subtitle pb-8 text-center text-slate-500 text-lg sm:text-2xl font-thin">
            {subtitle}
          </div>
        )}
        <div className="blog-post__header__author">
          <div className="flex flex-col sm:flex-row pt-2 gap-2 sm:gap-8 justify-start sm:justify-center items-start sm:items-center border-t text-sm sm:text-base text-slate-500">
            <div className="flex flex-row gap-4 justify-start items-center">
              <div>
                {" "}
                <Span className="oda">{author}</Span>{" "}
              </div>
              <div>
                {humanizeDate(date)}
              </div>
            </div>

            <div className="flex flex-row gap-4 justify-start items-center">
              <div>{timeToRead} read</div>
              {version ? <div>version: {version}</div> : <div>{""}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
