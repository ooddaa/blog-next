import PropTypes from "prop-types";
// import { Fragment } from "react";
import { resolveMonth, Span, Emoji } from "../../toolbox";
// import { Text, Image } from "@mantine/core";
import MantineHeader from "./MantineHeader";

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

const propTypes = {
  defaultHeader: PropTypes.string,
  post: PropTypes.object,
};
const defaultProps = {
  defaultHeader: "Default Header",
};

function BlogPost({ post, defaultHeader }) {
  const {
    header,
    // subheader,
    dateCreated,
    body,
    author,
    timeToRead,
    version,
    // timeToThink,
  } = post;
  const [year, month, day] = dateCreated;
  return (
    <>
      <MantineHeader links={links}></MantineHeader>
    
    <div className="blog-post">
      <div className="blog-post__header">
        <div className="log-post__header__title pb-8 font-bold text-6xl">
          <h1>{header || defaultHeader}</h1>

        </div>

        <div className="blog-post__header__author">
          <div className="flex flex-row gap-8 justify-center items-center border-t">
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
      <div className="blog-post__body">{body}</div>
    </div>
    </>
  );
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
