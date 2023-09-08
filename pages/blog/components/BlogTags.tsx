import React from "react";
import Tag from "./Tag";
import { log, emptyObject } from "../../toolbox";
import { createStyles } from "@mantine/core";
// import { useRouter } from "next/navigation";

interface BlogTags {
  tagContainers: string[],
  highlightedTags: string[],
  sendTagUp: Function,
  classNames: string,
}
const BlogTags = ({
  tagContainers,
  highlightedTags,
  sendTagUp,
  classNames,
}: BlogTags) => {
  // const router = useRouter()
  const { cx } = createStyles(emptyObject)();
  const defaultClasses = "blog-tags flex flex-wrap gap-2";

  return (
    <div
      className={cx(defaultClasses, classNames)}
      style={{
        position: "sticky",
        top: "0",
      }}
    > 
    <div>
    {/* <button onClick={() => router.push("/blog")}>
      clear all tags
    </button> */}
    </div>
      {tagContainers?.sort().map((tag: string) => (
        <Tag
          tag={tag}
          key={tag}
          highlightedTags={highlightedTags}
          sendTagUp={sendTagUp}
        />
      ))}
    </div>
  );
};

export default BlogTags;
