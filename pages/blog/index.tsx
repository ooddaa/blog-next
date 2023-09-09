import fs from 'fs'
import Path from 'path'
import { useEffect, useState } from "react";
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import BlogLayout from './BlogLayout'
import BlogTOC from "./components/BlogTOC";
import { POSTS_PATH } from '../../utils/mdxUtils'
import { useSearchParams } from 'next/navigation'
import {parseDateToDate } from "@/app/toolbox"
import MantineHeader from '@/app/components/MantineHeader';
import type { Post } from '@/app/types';

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

export default function Index({ posts }: {posts: Post[]}) {
  return (
    <BlogLayout>
      <div className="blog flex flex-col lg:flex-row">
        <div className="left basis-full pb-48 sm:basis-3/5 bg-baby-powder min-h-screen">
          <MantineHeader links={links}></MantineHeader>
          <BlogTOC posts={sortPosts(posts)} />
        </div>   
      </div>
    </BlogLayout>
  )
}

function sortPosts(posts: Post[]): Post[] {
  return posts.sort((a,b) => {
    if (parseDateToDate(a.data.date) >= parseDateToDate(b.data.date)) return -1
    return 1
  })
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
