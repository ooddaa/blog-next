import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

 
const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // for custom elements -> https://nextjs.org/docs/pages/building-your-application/configuring/mdx#custom-elements
    providerImportSource: "@mdx-js/react",
  },
})
export default withMDX(nextConfig)