/**@jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import { HEADER_HEIGHT, MantineHeader } from "../components/MantineHeader";
import { collection } from "./components/collection";
import { PortfolioSidebar } from "./components/PortfolioSidebar";
import Workspace from "./components/Workspace";
import type { ComponentEntryValue } from "./components/collection";

export default function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState<ComponentEntryValue>(
    collection["Homi"],
  );

  const selectComponent = (componentName: string) => {
    setCurrentComponent(collection[componentName]);
  };

  return (
    <>
      <MantineHeader />
      <div
        className="portfolio w-full flex flex-row"
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        <div className="shrink-0 border-r">
          <PortfolioSidebar selectComponent={selectComponent} />
        </div>
        <div className="w-full">
          <Workspace>
            {currentComponent}
          </Workspace>
        </div>
      </div>
    </>
  );
}
