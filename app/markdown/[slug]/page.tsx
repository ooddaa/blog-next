'use client'

// import posts from "../components/posts"
// import BlogPost from "../components/BlogPost"
// import BlogPostNavigation from "../components/BlogPostNavigation";
// import type { Post } from "../../types";

// const findPostBySlug = (slug:string) => (post: Post) => post.slug == slug

// export default function Page({ params }: { params: { slug: string } }) {
//   const [post] = posts.filter(findPostBySlug(params.slug)) 
//   const currentPostIndex = posts.findIndex(findPostBySlug(params.slug))
//   const previousPostId = currentPostIndex > 0 ? currentPostIndex - 1 : -1
//   const nextPostId = currentPostIndex < posts.length ? currentPostIndex + 1 : currentPostIndex
//   return (<div className="pb-6 sm:pb-24 divide-y">
//      <BlogPost post={post} />
//      <BlogPostNavigation
//             previousPost={posts[previousPostId]}
//             nextPost={posts[nextPostId]}
//           />
//   </div>)
// }

// https://nextjs.org/docs/app/api-reference/functions/use-router
import { usePathname, useRouter } from 'next/navigation'
// import Path from "node:path"

function getPostBySlug(slug: string | undefined): Promise<any> {
  const post = import(`../posts/${slug}.mdx`)
    .then(module => module)
    .catch(err => console.error(err))
  return post
}
// import First from "../posts/first.mdx"

export default function Page() {
  const router = useRouter()
  const pathname = usePathname()
  const slug = pathname.split(`/`).slice(-1).at(0)
  const post = getPostBySlug(slug)
  return (<div className="pb-6 sm:pb-24 divide-y">
   {/* <p>Post: {slug}</p> */}
    {/* <First/> */}
    {/* {post()} */}
 </div>)
//   if (typeof slug == "string") {
//   return getPostBySlug(slug).then(post => {
//     return (<div className="pb-6 sm:pb-24 divide-y">
//   {/* <p>Post: {slug}</p> */}
//   {post}
// </div>)}
// )}
  // return (<div className="pb-6 sm:pb-24 divide-y">
  //     {/* <p>Post: {slug}</p> */}
  //     {post}
  // </div>)
  // } 
}