export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="w-10/12 lg:w-2/4 mx-auto">{children}</div>
  )
}