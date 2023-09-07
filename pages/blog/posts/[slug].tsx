import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Link from 'next/link'
import path from 'path'
import { TLDR } from '@/app/toolbox'
// import CustomLink from '../../components/CustomLink'
import Layout from '../components/layout'
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // a: CustomLink,
  // // It also works with dynamically-imported components, which is especially
  // // useful for conditionally loading components for certain routes.
  // // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  // Head,
}

export default function PostPage({ source, frontMatter }) {
  console.log(frontMatter)
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      {/* <div className="post-header"> */}
        <Header 
          title={frontMatter.title}
          author={frontMatter.author}
          timeToRead={frontMatter.timeToRead}
          version={frontMatter.version}
          date={frontMatter.date}
          />
        <TLDR>{frontMatter.tldr}</TLDR>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      {/* </div> */}
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}

// https://rehype-pretty-code.netlify.app/
/** @type {import('rehype-pretty-code').Options} */
const codeHighlightOptions = {
  theme: 'dark-plus',
};

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
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