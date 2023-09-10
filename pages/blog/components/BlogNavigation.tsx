import fs from "fs";
import React from "react";
import { Post } from "@/app/types";
import { loadPosts } from "@/app/toolbox";
import { POSTS_PATH } from "../../../utils/mdxUtils";
import Link from "next/link";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

interface BlogNavigationProps {
  postDate: number;
  navigation: {
    previousPost: Post | null;
    nextPost: Post | null;
  };
}
export default function BlogNavigation({
  postDate,
  navigation: { previousPost, nextPost },
}: BlogNavigationProps) {
  return (
    <div className="footer w-full flex flex-row justify-between items-center mb-24 pt-12">
      {previousPost && (
        <div className="group underline text-slate-800 flex flex-row gap-2 items-center">
          <IconArrowNarrowLeft size={24} strokeWidth={2} className="group-hover:text-slate-500 text-slate-800" />
          <Link
            as={`/blog/posts/${previousPost?.data.filePath.replace(
              /\.mdx?$/,
              ""
            )}`}
            href={`/blog/posts/[slug]`}
            className="group-hover:text-slate-500"
          >
            {previousPost?.data.title}
          </Link>
        </div>
      )}
      {nextPost && (
        <div className="group active:scale-[.98] underline text-slate-800 flex flex-row gap-2 items-center">
          <Link
            as={`/blog/posts/${nextPost?.data.filePath.replace(/\.mdx?$/, "")}`}
            href={`/blog/posts/[slug]`}
            className="group-hover:text-slate-500"
          >
            {nextPost?.data.title}
          </Link>
          <IconArrowNarrowRight size={24} strokeWidth={2} className="group-hover:text-slate-500 text-slate-800"/>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await loadPosts(POSTS_PATH, fs);
  return { props: { posts } };
}
