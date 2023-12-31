import { useState } from "react";
import { isFunction } from "lodash";
import { useBlogContext } from "@/contexts/blog-context";
import cx from 'clsx'

export interface Tag {
  tag: string, 
  classNames?: string, 
  handleClick?: Function
}
export default function Tag({ tag, classNames, handleClick }: Tag) {
  const { highlightedTags, filterForSelectedTag, selectedTags } = useBlogContext()
  const [clicked, setClicked] = useState(selectedTags.has(tag));
  function defaultHandleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (filterForSelectedTag !== undefined) filterForSelectedTag(tag);
    
    if (!clicked) {
      /* user selects tag */
      if (e.target instanceof HTMLElement) {
        e.target.style.backgroundColor = "#D0D6B3"; 
        e.target.style.boxShadow =
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        setClicked(true);
      }
    } else {
      if (e.target instanceof HTMLElement) {
        /* user de-selects tag */
        e.target.style.backgroundColor = "transparent";
        e.target.style.boxShadow = "";
        setClicked(false);
      }
    }
  }

  return (
    <div
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 h-auto w-max rounded-md text-sm transition delay-50 select-none hover:cursor-pointer hover:shadow-md",
        highlightedTags?.includes(tag) && "bg-orchid-pink",
        clicked && "bg-pale-spring-bud shadow-md" 
      )}
      onClick={isFunction(handleClick) ? handleClick : defaultHandleClick}
    >
      {tag}
    </div>
  );
}