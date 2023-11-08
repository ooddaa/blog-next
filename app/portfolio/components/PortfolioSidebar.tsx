import TableOfContents from "./TableOfContents/TableOfContents";
import { useMediaQuery } from "@mantine/hooks";
import { ElementRef, useEffect, useRef } from "react";

const links = [
  { label: "Caves", order: 1, new: true },
  { label: "Projects", order: 1, new: true },
  { label: "Katcher", order: 2 },
  { label: "User Registration Flow", order: 3 },
  { label: "Homi", order: 2 },
  { label: "TicTacToe", order: 1 },
  { label: "Forms", order: 1 },
  { label: "Reference", order: 2 },
  { label: "Person details", order: 2 },
  { label: "Welcome back", order: 2 },
  { label: "Custom select", order: 2 },
  { label: "Components", order: 1 },
  { label: "Accordion", order: 2 },
  { label: "Carousel", order: 2 },
  { label: "Pagination", order: 2 },
  { label: "Table", order: 2 },
  { label: "Resizable", order: 2 },
  // { label: "Figma", order: 1 },
  // { label: "Desktop", link: "Desktop", order: 1 },
];

interface PortfolioSidebarProps {
  selectComponent: (link: string) => void;
}

export const PortfolioSidebar = (
  { selectComponent }: PortfolioSidebarProps,
) => {
  const sidebarRef = useRef<ElementRef<"div">>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => isMobile ? collapse() : resetWidth(), [isMobile]);

  const collapse = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.width = "0px";
      sidebarRef.current.style.borderRight = "none";
      sidebarRef.current.style.padding= "0";
    }
  };

  const resetWidth = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.width = "300px";
      sidebarRef.current.style.borderRight = "1px grey";
      sidebarRef.current.style.padding= "2rem";
    }
  };

  return (
    <div ref={sidebarRef} className="portfolio-toc">
      { !isMobile && <TableOfContents links={links} onClick={selectComponent} /> }
    </div>
  );
};
