import { Button } from "@mantine/core";
import Link from "next/link";
import type { Post } from "@/app/types"

/* https://mantine.dev/core/button/ */
interface BlogPostNavigation { previousPost: Post, nextPost: Post }
export default function BlogPostNavigation({ previousPost, nextPost }: BlogPostNavigation) {
  return (
    <div className="blog-post-navigation w-full flex flex-row justify-between pt-6">
      <div className="previous-blog-post">
        {previousPost && (
          <Button
            component={Link}
            href={`/blog/${previousPost?.slug}`}
            variant="outline"
            color="orange"
          >
            previous
          </Button>
        )}
      </div>
      <div className="next-blog-post">
        {nextPost && (
          <Button
            component={Link}
            href={`/blog/${nextPost?.slug}`}
            variant="outline"
            color="orange"
          >
            next
          </Button>
        )}
      </div>
    </div>
  );
}
