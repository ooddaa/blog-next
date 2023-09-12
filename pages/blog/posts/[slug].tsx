import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import Header from '../components/Header'
import Image from 'next/image'
import { Post } from '@/app/types'
import { TLDR, PB2, PB4, PB8, MB4, Code, H2, H3, Bold, SpongeBob, WebLink, Span, loadPosts, sortPosts } from '@/app/toolbox'
import Layout from '../components/layout'
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils'
import { Blockquote, List } from "@mantine/core";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import BlogNavigation from '../components/BlogNavigation'
import { MDXComponents } from 'mdx/types'
import Link from 'next/link'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  h2: H2,
  h3: H3,
  MB4,
  PB2,
  PB4,
  PB8,
  TLDR, 
  Code,
  Bold,
  List,
  SpongeBob,
  WebLink,
  Blockquote,
  Span,
  Image,
  Link
}

export default function PostPage({ currentPost: {source, data}, previousPost, nextPost}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Header 
        title={data.title}
        subtitle={data.subtitle}
        author={data.author}
        timeToRead={data.timeToRead}
        version={data.version}
        date={data.date}
        />
      {data.description && <p className="description">{data.description}</p>}
      <main>
        <MDXRemote {...source} components={components as MDXComponents}/>
      </main>
      <BlogNavigation previousPost={previousPost} nextPost={nextPost}/>
    </Layout>
  )
}

// https://rehype-pretty-code.netlify.app/
// https://unpkg.com/browse/shiki@0.14.2/themes/
/** @type {import('rehype-pretty-code').Options} */
const codeHighlightOptions = {
  theme: 'github-dark',
  defaultLang: 'zsh',
  keepBackground: true
};

type MDXSource = MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
type frontMatterData = { [key: string]: any }

// https://nextjs.org/docs/pages/api-reference/functions/get-static-props
export const getStaticProps: GetStaticProps<{currentPost: {source: MDXSource, data: frontMatterData}, previousPost: Post|null, nextPost: Post|null}> = async ({ params }) => {
  const posts = await loadPosts(POSTS_PATH, fs).then(sortPosts)
  const [currentPost] = posts.filter(({filePath}) => filePath === `${params?.slug}.mdx`)
  const { content, data } = matter(currentPost)

  const navigation = calculateNavigation(currentPost, posts)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, codeHighlightOptions]],
    },
    scope: data,
  })

  return {
    props: {
      currentPost: {
        source: mdxSource,
        data,
      },
      ...navigation
    },
  }
}

function calculateNavigation(currentPost: Post, posts: Post[]) {
  // posts are in desc order now
  const currentIndex = posts.findIndex(({filePath}) => (filePath == currentPost.filePath))
  if (currentIndex === -1) throw new Error(`calculateNavigation: cannot find current post index:\ncurrentPost.filePath: ${JSON.stringify(currentPost.filePath)}`)
  if (currentIndex === 0) return {previousPost: posts.length > 1 ? posts[currentIndex + 1] : null, nextPost: null}
  if (currentIndex === posts.length - 1) return {previousPost: null, nextPost: posts.length > 1 ? posts[currentIndex - 1] : null}
  return {previousPost: posts[currentIndex + 1], nextPost: posts[currentIndex - 1]}
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}