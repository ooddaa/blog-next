import BlogTopic from "./BlogTopic";
import { H3, resolveMonth, log } from "../../toolbox";
import type { Post } from "../../types"

interface BlogTOCGroup { 
  year: number, 
  month: number, 
  posts: Post[], 
  setHighlightedTags: Function }
  
function BlogTOCGroup({ year, month, posts, setHighlightedTags }: BlogTOCGroup) {
  return (
    <div className="blog__toc-group flex-col p-10">
      <div className="blog__toc-group__head ">
        <H3>{resolveMonth(month, { short: false })}, {year}</H3>
      </div>
      <div className="blog__toc-group__body">
        {posts.map((post: Post) => (
          <BlogTopic
            key={post.id}
            post={post}
            setHighlightedTags={setHighlightedTags}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogTOCGroup;
