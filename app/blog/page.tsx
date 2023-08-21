"use client"
import { useEffect, useState } from "react";
import { Center } from "@mantine/core";
import BlogPost from "./components/BlogPost";
import BlogPostNavigation from "./components/BlogPostNavigation";
import BlogTOC from "./components/BlogTOC";
import BlogTags from "./components/BlogTags";
import posts from "./components/posts";
import { log } from "../toolbox";
import type { TagContainer } from "../types";
import flatten from "lodash/flatten";
import identity from "lodash/identity";
import MantineHeader from "./components/MantineHeader";

export default function Blog({ _posts, postId }) {
  /* State
  ________________________________________________________________*/

  // const [currentPostId, setCurrentPostId] = useState(null);
  // const [previousPostId, setPreviousPostId] = useState(null);
  // const [nextPostId, setNextPostId] = useState(null);
  const [highlightedTags, setHighlightedTags] = useState([]);

  const [filteredPosts, setFilteredPosts] = useState(posts ?? []);
  const [clickedTags, setClickedTags] = useState(new Set());

  /* !state
  ________________________________________________________________*/

  /* init  */
  useEffect(() => {
    /* scroll to top */
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0 });
  }, []);

  // function handlePostNavigation(currentPostId_) {
  //   /* update currentPost */
  //   setCurrentPostId(currentPostId_);

  //   /* calculate previous */
  //   if (isNaN(currentPostId_) || currentPostId_ === 0) {
  //     setPreviousPostId(null);
  //   } else {
  //     setPreviousPostId(currentPostId_ - 1);
  //   }

  //   /* calculate next */
  //   if (isNaN(currentPostId_) || currentPostId_ >= posts.length - 1) {
  //     // console.log(posts.length);
  //     setNextPostId(null);
  //   } else {
  //     setNextPostId(currentPostId_ + 1);
  //   }
  // }

  // useEffect(() => {
  //   /* init previousPostId & nextPostId */
  //   if (posts && posts.length && isNaN(postId) === false) {
  //     handlePostNavigation(postId);
  //   }
  // });

  function generateTagContainers(posts): TagContainer[] {
    /**
     * @todo this also might be solved via adding refs to each
     * Tag but atm I have no idea how to do it.
     * @param {Set} acc
     * @param {Post} post
     */
    function postsToTags(acc, post) {
      post?.tags?.forEach((elm) => acc.add(elm));
      return acc;
    }

    const allTags: Set = posts.reduce(postsToTags, new Set());
    const arr = Array.from(allTags.values());
    const rv: TagContainer[] = flatten(
      arr.map((tag) => {
        /** @todo custom React Hook function to provide refs? */
        return [tag /* , useRef(tag) */];
      })
    );
    return rv;
  }

  // if (posts?.length && isNaN(postId) === false) {
  //   return (
  //     <Center className="flex-row">
  //       <div>
  //         <BlogPost post={posts[postId]} />
  //         <BlogPostNavigation
  //           previousPost={posts[previousPostId]}
  //           nextPost={posts[nextPostId]}
  //         />
  //       </div>
  //     </Center>
  //   );
  // }

  function getClickedTag(tag) {
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
    function isInClickedTags(x) {
      return clickedTags.has(x);
    }
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
      {/* <div className="left basis-full pb-48 sm:basis-3/5 bg-[#fd5e47]"> */}
      {/* <div className="left basis-full pb-48 sm:basis-3/5 bg-[#E9EAEC]"> */}
      <div className="left basis-full pb-48 sm:basis-3/5 bg-baby-powder min-h-screen">
        <MantineHeader links={links}></MantineHeader>
        {BlogTOC({
          posts: filteredPosts,
          // handlePostNavigation,
          setHighlightedTags,
          classNames: ["pt-24"],
        })}
      </div>

      {/* TAGS */}
      {/* <div className="right basis-2/5 pb-24 bg-[#E9EAEC]"> */}
      {/* <div className="right basis-2/5 pb-24 bg-[#E4EAF1]"> */}
      <div className="right basis-2/5 pb-24 bg-white">
        <BlogTags
          tagContainers={generateTagContainers(posts)}
          highlightedTags={highlightedTags}
          sendTagUp={getClickedTag}
          classNames={["pt-24 w-96 mx-auto h-max p-max"]}
        />
      </div>
    </div>
  );
}
