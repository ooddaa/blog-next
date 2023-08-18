import { Button } from "@mantine/core";
import Link from "next/link";

/* https://mantine.dev/core/button/ */

export default function BlogPostNavigation({ previousPost, nextPost }) {
  return (
    <div className="blog-post-navigation">
      <div className="previous-blog-post">
        {previousPost && (
          <Button
            component={Link}
            href={`/blog/${previousPost?.routeName}`}
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
            href={`/blog/${nextPost?.routeName}`}
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
