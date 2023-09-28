import Tag from "./Tag";
import cx from 'clsx'

interface BlogTags {
  tags: string[],
  classNames?: string,
}
const BlogTags = ({
  tags,
  classNames,
}: BlogTags) => {
  const defaultClasses = "blog-tags flex flex-wrap gap-2";

  return (
    <div className={cx(defaultClasses, classNames)}> 
      {tags?.sort().map((tag: string) => (
        <Tag
          tag={tag}
          key={tag}
        />
      ))}
    </div>
  );
};

export default BlogTags;
