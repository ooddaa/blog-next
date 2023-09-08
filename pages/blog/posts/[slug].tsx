import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import Header from '../components/Header'
import Image from 'next/image'
import path from 'path'
import { TLDR, PB2, PB4, PB8, MB4, Code, H2, H3, Bold, SpongeBob, WebLink, Span } from '@/app/toolbox'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils'
import { Text, Blockquote, Center, List } from "@mantine/core";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


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
  Image
}

export default function PostPage({ source, frontMatter }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Header 
        // title={frontMatter.title}
        // subtitle={frontMatter.subtitle}
        // author={frontMatter.author}
        // timeToRead={frontMatter.timeToRead}
        // version={frontMatter.version}
        // date={frontMatter.date}
        {...frontMatter}
        />
      {frontMatter.description && (
        <p className="description">{frontMatter.description}</p>
      )}
      <main>
        <MDXRemote {...source} components={components}/>
      </main>
      <div className='footer w-full h-12'></div>
    </Layout>
  )
}

// https://rehype-pretty-code.netlify.app/
// https://unpkg.com/browse/shiki@0.14.2/themes/
/** @type {import('rehype-pretty-code').Options} */
const codeHighlightOptions = {
  theme: 'github-dark',
  defaultLang: 'plaintext',
  keepBackground: true
};

type MDXSource = MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
type frontMatterData = { [key: string]: any }

// https://nextjs.org/docs/pages/api-reference/functions/get-static-props
export const getStaticProps: GetStaticProps<{source: MDXSource, frontMatter: frontMatterData}> = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, codeHighlightOptions]],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
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