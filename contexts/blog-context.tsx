import { useContext, createContext } from "react";

type BlogContextProps = {
  highlightedTags: string[], 
  setHighlightedTags: Function, 
  filterForSelectedTag: Function
}
type BlogContextProviderProps = {
  children: React.ReactNode,
  value: BlogContextProps
}
const BlogContext = createContext<BlogContextProps|null>(null)

export default function BlogContextProvider({ children, value }: BlogContextProviderProps) {
  return (
  <BlogContext.Provider value={value}>
    {children}
  </BlogContext.Provider>)
}

export function useBlogContext() {
  const context = useContext(BlogContext)
  if (!context) throw new Error(`useBlogContext should be used within BlogContextProvider.`)
  return context
}