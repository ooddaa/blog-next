import { resolveMonth, sortPosts } from "@/app/toolbox";
import { Post } from "@/app/types";
import Link from "next/link";
import { groupBy, keys, reverse } from "lodash";
import { useBlogContext } from "@/contexts/blog-context";

type BlogTOCparams = {
  posts: Post[],
}

export default function BlogTOC({posts}: BlogTOCparams) {
  const { setHighlightedTags } = useBlogContext()

  if (posts === undefined || !posts.length) return <h2>No posts yet</h2>;
  return (
    <div className="p-12 w-full text-slate-800">
      {groupByYear(posts)
        .map(({year, posts}) => {
          return <div key={year}>
            <div className="flex text-2xl text-slate-300 mb-8 w-full border-b justify-end">{year}</div>
            {groupByMonth(posts, "desc")
              .map(({month, posts}) => {
                return <div key={month}>
                  <div className="text-xl text-slate-500 pb-4">{resolveMonth(month)}</div>
                  <div className="pb-12">
                    {sortPosts(posts, "asc")
                      .map(({data}) => (
                        <div key={data.filePath} className='flex flex-row gap-4'>
                          <div className='min-w-[32px] text-slate-500'>{parseDay(data.date)}</div>
                          <div 
                            onMouseEnter={() => {setHighlightedTags?.(data.tags)}}
                            onMouseLeave={() => {setHighlightedTags?.([])}}
                          >
                          <Link
                            as={`/blog/posts/${data.filePath.replace(/\.mdx?$/, '')}`}
                            href={`/blog/posts/[slug]`}
                            className="tracking-wide"
                            >
                            {data.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            })}
          </div>
        })}
    </div>
  )
}

type YearlyPost = {
  year: string,
  posts: Post[]
}
type SortOrder = "desc" | "asc"
function groupByYear(posts: Post[], sortOrder: SortOrder = "desc"): YearlyPost[] {
  let groupped = groupBy(posts, ({data}) => parseYear(data.date))
  return reverse(keys(groupped))
  .sort(sortOrder == "asc" ? asc : desc)
  .map(year => ({ year, posts: groupped[year] }))
}

type MonthlyPost = {
  month: string,
  posts: Post[]
}
function groupByMonth(posts: Post[], sortOrder: SortOrder = "desc"): MonthlyPost[] {
  let groupped = groupBy(posts, ({data}) => parseMonth(data.date))
  return keys(groupped)
  .sort(sortOrder == "asc" ? asc : desc)
  .map(month => ({ month, posts: groupped[month] }))
}

function asc(a: string, b: string) {
  if (a >= b) return 1
  return -1 
}
function desc(a: string, b: string) { 
  return asc(b,a)
}

function parseYear(date: number): number {
  return Number.parseInt(date.toString().substring(0, 4))
}
function parseMonth(date: number): number {
  return Number.parseInt(date.toString().substring(4, 6))
}
function parseDay(date: number): number {
  return Number.parseInt(date.toString().substring(6, 8))
}