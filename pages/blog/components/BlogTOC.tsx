import { resolveMonth, sortPosts } from "@/app/toolbox";
import { Post } from "@/app/types";
import { IconCircleX } from "@tabler/icons-react";
import Link from "next/link";
import { groupBy, keys, reverse } from "lodash";

/**
 * Renders:
 *
 * Left nav bar - Year on year with total number of posts per year / per month
 * Right nav bar - Tags with total numbers of mentions in posts
 * Center - Month-on-month list of links to posts. Head == MMM DD Body = Topic
 */

type BlogTOCparams = {
  posts: Post[],
  handlePostNavigation?: Function,
  setHighlightedTags?: Function
}

export default function BlogTOC({
  posts,
  handlePostNavigation,
  setHighlightedTags,
} = {} as BlogTOCparams) {
  if (posts === undefined || !posts.length) return <h2>No posts yet</h2>;
  // when tag is clicked, we filter TOC to show only tag-related posts

  return (
    <div className="p-12 w-full text-slate-800">
      {groupByYear(posts)
       .map(({year, posts}) => {
          return <div key={year} className="">
            <div className="flex text-2xl text-slate-300 mb-8 w-full border-b justify-end">{year}</div>
            {groupByMonth(posts)
             .map(({month, posts}) => {
              return <div key={month} className="">
                <div className="text-xl text-slate-500 pb-4">{resolveMonth(month)}</div>
                <div className="pb-12">
                {sortPosts(posts, "asc")
                  .map(({data}) => (
                    <div key={data.filePath} className='flex flex-row gap-4'>
                    <div className='w-[128px] text-slate-500'>
                      {parseDay(data.date)}
                    </div>
                    <div 
                      onMouseEnter={() => {setHighlightedTags?.(data.tags)}}
                      onMouseLeave={() => {setHighlightedTags?.([])}}
                    >
                    <Link
                      as={`/blog/posts/${data.filePath.replace(/\.mdx?$/, '')}`}
                      href={`/blog/posts/[slug]`}
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
function groupByYear(posts: Post[]): YearlyPost[] {
  let groupped = groupBy(posts, ({data}) => parseYear(data.date))
  return reverse(keys(groupped)).map(year => ({ year, posts: sortPosts(groupped[year]) }))
}

type MonthlyPost = {
  month: string,
  posts: Post[]
}
function groupByMonth(posts: Post[]): MonthlyPost[] {
  let groupped = groupBy(posts, ({data}) => parseMonth(data.date))
  // return keys(groupped).map(month => ({ month, posts: groupped[month] }))
  return keys(groupped).map(month => ({ month, posts: sortPosts(groupped[month]) }))
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


// _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
//   (result[value] || (result[value] = [])).push(key);
// }, {});
// // => { '1': ['a', 'c'], '2': ['b'] }


// return (
  //     <div>
  //       <ul className='ml-12 mt-12'>
  //           {posts
  //             .map(({data}) => (
  //             <li key={data.filePath} className='flex flex-row gap-4'>
  //               <div className='w-[256px]'>
  //                 {humanizeDate(data.date, ["year", "day", "month"])}
  //               </div>
  //               <div>
  //               <Link
  //                 as={`/blog/posts/${data.filePath.replace(/\.mdx?$/, '')}`}
  //                 href={`/blog/posts/[slug]`}
  //                 >
  //                 {data.title}
  //               </Link>
  //               </div>
  //             </li>
  //           ))}
  //         </ul>
  //     </div>
 // );
