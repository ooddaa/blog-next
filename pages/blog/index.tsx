import fs from "fs"
import { useState } from 'react'
import BlogLayout from './BlogLayout'
import BlogTOC from "./components/BlogTOC";
import { POSTS_PATH } from '../../utils/mdxUtils'
import { sortPosts, intersection, loadPosts } from "@/app/toolbox"
import type { Post } from '@/app/types';
import BlogTags from './components/BlogTags';
import { flatten, isArray, isString, uniq } from 'lodash';
import BlogContextProvider from "@/contexts/blog-context";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";

/**
 * Decided to use url search params as state vs useState.
 * It will allow me sharing a link that will display sorted
 * blogposts. 
 */
export default function Blog({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const [highlightedTags, setHighlightedTags] = useState([]);

  // there may be a single/multiple tags in the url query
  // we need to cast them as array
  const {tags} = router.query
  const _tags: Set<string> = 
    tags
      ? new Set(isString(tags) ? [tags] : tags) 
      : new Set()
  const [selectedTags, setSelectedTags] = useState<Set<string>>(_tags);
  const [filteredPosts, setFilteredPosts] = useState(sortPosts(filterPostsByTags(posts, selectedTags)));

  function filterForSelectedTag(tag: string) {
    if (tagInUrlParams(tag)) {
      const newTags = removeTagFromQuery(tag)
      router.push(generateUrl(newTags))
      setSelectedTags(new Set(newTags))
      setFilteredPosts(sortPosts(filterPostsByTags(posts, new Set(newTags))))
    } else {
      const newTags = addTagToQuery(tag)
      router.push(generateUrl(newTags))
      setSelectedTags(new Set(newTags))
      setFilteredPosts(sortPosts(filterPostsByTags(posts, new Set(newTags))))
    } 
  }

  type Tags = string[]
  function generateUrl(tags: Tags): object {
    return { query: { tags: tags }}
  }

  function removeTagFromQuery(tag: string): Tags {
    let {tags} = router.query
    if (tags && isArray(tags)) {
      tags.splice(tags.indexOf(tag), 1)
      return tags
    }
    return []
  }

  function addTagToQuery(tag: string): Tags {
    const {tags} = router.query
    if (tags && isString(tags)) return [tags, tag]
    if (tags && isArray(tags)) return [...tags, tag]
    return [tag]
  }

  function tagInUrlParams(tag: string): boolean {
    const {tags} = router.query
    if (tags && isString(tags)) return tags === tag
    if (tags && isArray(tags)) return tags.includes(tag)
    return false
  }

  return (
      <BlogContextProvider value={{ highlightedTags, setHighlightedTags, filterForSelectedTag, selectedTags }}>
        <BlogLayout>
          <div className="blog flex flex-col lg:flex-row relative bg-slate-50 max-sm:pb-12">
            <div className="left basis-full sm:pb-48 sm:basis-3/5  min-h-screen">
              <BlogTOC posts={filteredPosts}/>
            </div>   
            <div className='right sticky top-0 w-full h-max sm:w-1/3 pt-12 max-sm:px-6 sm:pt-24 mx-auto'>
              <BlogTags tags={extractTagsFromPosts(posts)}/>
            </div>
          </div>
        </BlogLayout>
      </BlogContextProvider>
  )
}

function getPostTags({data: {tags: tags}}: Post): string[] {
  return tags  
}

/**
 * Use to display all available tags across all posts. 
 */
function extractTagsFromPosts(posts: Post[]): string[] {
  return uniq(flatten(posts.map(getPostTags)))
}

/**
 * User clicks on a tag and this filters the relevant posts.
 * Use to filter posts whose tags include those clicked by user.
 */
function filterPostsByTags(posts: Post[], currentlySelectedTags: Set<string>): Post[] {
  if (!currentlySelectedTags.size) return posts
  return posts.filter(filter(getPostTags, currentlySelectedTags))
}

/**
 * We just want to get intersection of each Posts's tags against 
 * currently selected tags
 */
function filter(getterFn: Function, setB: Set<string>): (value: Post, index: number, array: Post[]) => boolean  {
  return function inner(value: Post, index: number, array: Post[]): boolean {
    const setA: Set<string> = new Set(getterFn(value))
    return intersection(setA, setB).size != 0
  }
}

type BlogProps = { posts: Post[] }

export async function getServerSideProps(context: GetServerSideProps<BlogProps>) {
  const posts = await loadPosts(POSTS_PATH, fs)
  return { props: { posts } }
} 