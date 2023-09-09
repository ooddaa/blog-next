import fs from 'fs'
import Path from 'path'
import { useState } from 'react'
import matter from 'gray-matter'
import BlogLayout from './BlogLayout'
import BlogTOC from "./components/BlogTOC";
import { POSTS_PATH } from '../../utils/mdxUtils'
import { sortPosts, intersection } from "@/app/toolbox"
import MantineHeader from '@/app/components/MantineHeader';
import type { Post } from '@/app/types';
import BlogTags from './components/BlogTags';
import { flatten, uniq } from 'lodash';

const links = [
  {
    link: "/",
    label: "Main",
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "https://github.com/ooddaa",
    label: "Github",
  },
  {
    link: "/portfolio",
    label: "Portfolio",
  },
  {
    link: "/playground",
    label: "Playground",
  },
];

interface BlogProps {posts: Post[], preselectedTags?: string[]}

export default function Blog({ posts, preselectedTags }: BlogProps) {
  const [highlightedTags, setHighlightedTags] = useState(preselectedTags || []);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [filteredPosts, setFilteredPosts] = useState(sortPosts(posts));

  function filterForSelectedTag(tag: string) {
    let currentlySelectedTags: Set<string> = selectedTags
    
    // toggle tag's presense
    selectedTags.has(tag) 
    ? currentlySelectedTags.delete(tag) 
    : currentlySelectedTags.add(tag)
    
    setSelectedTags(currentlySelectedTags)

    // no selected tags == show all posts
    if (!currentlySelectedTags.size) return setFilteredPosts(sortPosts(posts))
    return setFilteredPosts(filterPostsByTags(posts, currentlySelectedTags))
  }
  return (
    <BlogLayout>
      <MantineHeader links={links}></MantineHeader>
      <div className="blog flex flex-col lg:flex-row relative bg-slate-50">
        <div className="left basis-full pb-48 sm:basis-3/5  min-h-screen">
          <BlogTOC 
            posts={filteredPosts} 
            setHighlightedTags={setHighlightedTags}
          />
        </div>   
        <div className='right sticky top-0 w-full h-max sm:w-1/3 pt-12 sm:pt-24 mx-auto'>
          <BlogTags 
            tags={extractTagsFromPosts(posts)}
            highlightedTags={highlightedTags}
            filterForSelectedTag={filterForSelectedTag}
            />
        </div>
      </div>
    </BlogLayout>
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

export async function getStaticProps() {
  const posts = await loadPosts()
  return { props: { posts } }
}

async function loadPosts() {
  const paths = fs.readdirSync(POSTS_PATH)
  const posts = 
    paths
    .map(path => {
      const mdx = fs.readFileSync(Path.join(POSTS_PATH, path))
      let {content, data} = matter(mdx)
      data = { filePath: path, ...data}
      return {content, data}
    })

  return posts
}

