import Link from "next/link";
import { log } from "../../toolbox";
export default function BlogTopic({ post, onClick, setHighlightedTags }) {
  const day = post.dateCreated[2];
  return (
    /* palette https://coolors.co/ff4a19-e9eaec-fabc3c-fa7d5a-fa592d */
    <div className="blog__topic flex gap-x-4 ">
      <div className="blog__topic__head w-10 font-bold shrink-0 p-1 text-lg flex items-center">
        {day}
      </div>
      <div
        className="blog__topic__body p-1 text-md flex items-center"
        // className="blog__topic__body p-1 text-md hover:text-white"
        // className="blog__topic__body p-1 text-md hover:text-[#E9EAEC]"
        onMouseEnter={() => {
          console.log("setHighlightedTags")
          console.log(setHighlightedTags)
          setHighlightedTags?.(post.tags);
        }}
        onMouseLeave={() => {
          setHighlightedTags?.([]);
        }}
      >
        {
          <Link href={post.routeName} onClick={() => onClick(post.id)}>
            {post.header}
          </Link>
        }
      </div>
    </div>
  );
}
