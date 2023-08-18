import BlogTopic from "./BlogTopic";
import { H3, resolveMonth, log } from "../../toolbox";

function BlogTOCGroup({ year, month, posts, onClick, setHighlightedTags }) {
  return (
    <div className="blog__toc-group flex-col p-10">
      <div className="blog__toc-group__head ">
        <H3>{resolveMonth(month, { short: false })}, {year}</H3>
      </div>
      <div className="blog__toc-group__body">
        {posts.map((post) => (
          <BlogTopic
            key={post.id}
            post={post}
            onClick={onClick}
            setHighlightedTags={setHighlightedTags}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogTOCGroup;
