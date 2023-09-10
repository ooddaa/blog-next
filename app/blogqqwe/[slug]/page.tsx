'use client'

import posts from "../components/posts"
import BlogPost from "../components/BlogPost"
import BlogPostNavigation from "../components/BlogPostNavigation";
import type { Post } from "../../types";

const findPostBySlug = (slug:string) => (post: Post) => post.slug == slug

export default function Page({ params }: { params: { slug: string } }) {
  const [post] = posts.filter(findPostBySlug(params.slug)) 
  const currentPostIndex = posts.findIndex(findPostBySlug(params.slug))
  const previousPostId = currentPostIndex > 0 ? currentPostIndex - 1 : -1
  const nextPostId = currentPostIndex < posts.length ? currentPostIndex + 1 : currentPostIndex
  return (<div className="pb-6 sm:pb-24 divide-y">
     <BlogPost post={post} />
     <BlogPostNavigation
            previousPost={posts[previousPostId]}
            nextPost={posts[nextPostId]}
          />
  </div>)
}