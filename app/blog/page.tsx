"use client"
import { useEffect, useState } from "react";
import BlogTOC from "./components/BlogTOC";
import BlogTags from "./components/BlogTags";
import posts from "./components/posts";
import { log } from "../toolbox";
import type { Post } from "../types";
import flatten from "lodash/flatten";
import identity from "lodash/identity";
import MantineHeader from "../components/MantineHeader";
import { useSearchParams } from 'next/navigation'

export default function Blog() {
  const searchParams = useSearchParams()
  const selectedTags = searchParams.getAll('tag')
  /* State
  ________________________________________________________________*/

  const [highlightedTags, setHighlightedTags] = useState(selectedTags || []);
  const [filteredPosts, setFilteredPosts] = useState(posts ?? []);
  const [clickedTags, setClickedTags] = useState<Set<string>>(new Set());

  /* !state
  ________________________________________________________________*/

  /* init  */
  useEffect(() => {
    window.scrollTo({ top: 0 });
    let filteredPosts = filterPostsByTags(highlightedTags, posts)
    setFilteredPosts(filteredPosts)
  }, []);

  function generateTagContainers(posts: Post[]): string[] {
    /**
     * @todo this also might be solved via adding refs to each Tag.
     * @param {Set<string>} acc
     * @param {Post} post
     */
    function postsToTags(acc: Set<string>, post: Post) {
      post?.tags?.forEach((elm) => acc.add(elm));
      return acc;
    }

    const allTags: Set<string> = posts.reduce(postsToTags, new Set());
    const arr = Array.from(allTags.values());
    const rv: string[] = flatten(
      arr.map((tag: string) => {
        /** @todo custom React Hook function to provide refs? */
        return [tag /* , useRef(tag) */];
      })
    );
    return rv;
  }

  function getClickedTag(tag: string) {
    /* Tag gets clicked, Blog knows about it. */

    if (clickedTags.has(tag)) {
      /* user is trying to remove tag from filter */
      clickedTags.delete(tag);
      setClickedTags(new Set([...clickedTags]));
    } else {
      /* user is adding tag to filter*/
      clickedTags.add(tag);
    }

    /* posts must be filtered as per clickedTags */
    let filtered;
    if (clickedTags.size === 0) {
      filtered = posts;
    } else {
      filtered = posts.filter(({ tags }) => {
        const rv = tags
          .map(isInClickedTags) // clickedTags set has any of these tags
          .some(identity); // which are true
        return rv;
      });
    }
    setFilteredPosts(filtered);

    //////////////////// FUN ////////////////////
    function isInClickedTags(x: string) {
      return clickedTags.has(x);
    }
  }

  /**
   * User selects tags and blog filters posts that refer to these tags.
   * Selected tags may come from Welcome page as well as from within Blog.  
   */
  function filterPostsByTags(tags: string[], posts: Post[]): Post[] {
    if (tags.length == 0) return posts
    return posts
      .filter(post => intersection(post.tags, tags).size != 0)
  }

  const links = [
    {
      link: "/",
      label: "Main",
    },
    {
      link: "/blog",
      label: "Blog",
    },
    {
      link: "https://github.com/ooddaa",
      label: "Github",
    },
    {
      link: "/portfolio",
      label: "Portfolio",
    },
    {
      link: "/playground",
      label: "Playground",
    },
  ];

  return (
    <div className="blog flex flex-col lg:flex-row">

      {/* TABLE OF CONTENTS */}
      <div className="left basis-full pb-48 sm:basis-3/5 bg-baby-powder min-h-screen">
        <MantineHeader links={links}></MantineHeader>
        {BlogTOC({
          posts: filteredPosts,
          setHighlightedTags,
          classNames: ["pt-24"],
        })}
      </div>

      {/* TAGS */}
      <div className="right basis-2/5 pb-24 bg-white">
        <BlogTags
          tagContainers={generateTagContainers(posts)}
          highlightedTags={highlightedTags}
          sendTagUp={getClickedTag}
          classNames="pt-24 w-96 mx-auto h-max p-max"
        />
      </div>
    </div>
  );
}

function intersection(a: any, b: any) {
  const setA = new Set(a), setB = new Set(b), _intersection = new Set();
  for (const elem of setB) if (setA.has(elem)) _intersection.add(elem);
  return _intersection;
}
// function intersection(setA: Set<any>, setB: Set<any>) {
//   const _intersection = new Set();
//   for (const elem of setB) if (setA.has(elem)) _intersection.add(elem);
//   return _intersection;
// }