import { resolveMonth, Span, Emoji } from "../../toolbox";
import type { Post } from "../../types"
import MantineHeader from "../../components/MantineHeader";

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


interface BlogPost {
  post: Post,
  defaultHeader?: string
}
export default function BlogPost({ post, defaultHeader }: BlogPost) {
  defaultHeader = defaultHeader ?? "Oops, no header 🫣"
  const {
    header,
    dateCreated,
    body,
    author,
    timeToRead,
    version,
  } = post;
  const [year, month, day] = dateCreated;
  return (
    <>
      <MantineHeader links={links}></MantineHeader>
    
      <div className="blog-post py-6 sm:py-24">
        <div className="blog-post__header">
          <div className="log-post__header__title pb-8 font-bold text-4xl sm:text-6xl text-center">
            <h1>{header || defaultHeader}</h1>
          </div>

          <div className="blog-post__header__author">
            <div className="flex flex-row gap-8 justify-center items-center border-t text-sm sm:text-base text-slate-500">
              <div> <Span className="oda">{author}</Span> </div>
              <div> 
                {day} {resolveMonth(month)},{" "}{year}
              </div>
              <div>
                {timeToRead} read
              </div>
              {version ? <div>version: {version}</div> : ""}
              <div>
              </div>
            </div>
          </div>
        </div>
      <div className="blog-post__body pt-6 sm:pt-24">{body}</div>
    </div>  
    </>
  );
}

