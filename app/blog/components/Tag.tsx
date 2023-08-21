import { useState } from "react";
import { Center, createStyles } from "@mantine/core";
import { log } from "../../toolbox";

export interface Tag {
  tag: string, 
  classNames?: string, 
  highlightedTags?: string[], 
  sendTagUp?: Function
}
export default function Tag({ tag, classNames, highlightedTags, sendTagUp }: Tag) {
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();
  const [clicked, setClicked] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (sendTagUp !== undefined) {
      sendTagUp(tag);
    }
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
    <Center
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 h-auto w-max rounded-md text-sm transition delay-50 select-none hover:cursor-pointer hover:shadow-md",
        highlightedTags?.includes(tag) ? 
        "bg-orchid-pink" : 
        "bg-transparent"
      )}
      onClick={handleClick}
    >
      {tag}
    </Center>
  );
}
