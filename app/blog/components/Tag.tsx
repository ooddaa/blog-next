import { useState } from "react";
import { Center, createStyles } from "@mantine/core";
import has from "lodash/has";
import { log } from "../../toolbox";

export interface Tag {
  tag: string, 
  classNames?: string, 
  highlightedTags?: string[], 
  sendTagUp: Function
}
export default function Tag({ tag, classNames, highlightedTags, sendTagUp }: Tag) {
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();
  const [clicked, setClicked] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    sendTagUp(tag);
    if (!clicked) {
      /* user selects tag  */

      /* https://coolors.co/d55347-d4cbe5-cfc7d2-7c7f65-5c6b73 */
      // e.target.style.backgroundColor = "#fbc350";
      // e.target.style.backgroundColor = "#FABC3C";
      // e.target.style.backgroundColor = "#FABCCC";
      // if (has(e.target, "style")) {
        e.target.style.backgroundColor = "#D0D6B3"; // pale-spring-bud
      // } 
      /* shadow-md */
      e.target.style.boxShadow =
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
      setClicked(true);
    } else {
      /* user de-selects tag  */
      e.target.style.backgroundColor = "transparent";
      e.target.style.boxShadow = null;
      setClicked(false);
    }
  }

  /**
   * @todo If nothing to highlight, all tags are yellow.
   * We aren't actually highlighting, we are dimming tags.
   * https://tailwindcss.com/docs/customizing-colors
   */
  return (
    <Center
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 h-auto w-max rounded-md text-sm transition delay-50 select-none hover:cursor-pointer hover:shadow-md",
        highlightedTags?.includes(tag) ? 
        // "bg-[#FABC3C]" : 
        // "bg-[#D0D6B3]" : 
        "bg-orchid-pink" : 
        "bg-transparent"
      )}
      onClick={handleClick}
    >
      {tag}
    </Center>
  );
}
