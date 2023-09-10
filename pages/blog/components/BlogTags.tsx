import React from "react";
import Tag from "./Tag";
import { log, emptyObject } from "@/app/toolbox";
import { createStyles } from "@mantine/core";
// import { useRouter } from "next/navigation";

interface BlogTags {
  tags: string[],
  highlightedTags?: string[],
  filterForSelectedTag?: Function,
  classNames?: string,
}
const BlogTags = ({
  tags,
  highlightedTags,
  filterForSelectedTag,
  classNames,
}: BlogTags) => {
  const { cx } = createStyles(emptyObject)();
  const defaultClasses = "blog-tags flex flex-wrap gap-2";

  return (
    <div
      className={cx(defaultClasses, classNames)}
      // style={{
      //   position: "sticky",
      //   top: "0",
      // }}
    > 
    {/* <div>
    <button onClick={() => router.push("/blog")}>
      clear all tags
    </button>
    </div> */}
      {tags?.sort().map((tag: string) => (
        <Tag
          tag={tag}
          key={tag}
          highlighted={highlightedTags?.includes(tag)}
          filterForSelectedTag={filterForSelectedTag}
        />
      ))}
    </div>
  );
};

export default BlogTags;
