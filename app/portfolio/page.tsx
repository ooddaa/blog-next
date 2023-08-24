/**@jsxImportSource @emotion/react */
"use client"

import React, { useState } from "react";
import TableOfContents from "./components/TableOfContents";
import ReferenceForm from "./components/ReferenceForm/ReferenceForm";
import CustomSelect from "./components/ReferenceForm/CustomSelect";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Accordion from "./components/Accordion/Accordion";
import Carousel from "./components/Carousel/Carousel";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Tables/Table1";
import Resizable from "./components/Resizable/Resizable";
import NameForm from "./components/NameForm/NameForm";
import WelcomeBackForm from "./components/WelcomeBackForm/WelcomeBack";
import Katcher from "./components/Katcher/Katcher";
import { styles as ReferenceFormStyles } from "./components/ReferenceForm/styles/styleSystem";
import MantineHeader, { HEADER_HEIGHT } from "../components/MantineHeader";
import lorem from './components/lorem'

const headerLinks = [
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



const components: { [key: string]: JSX.Element } = {
  "Reference Form": <ReferenceForm />,
  "Custom Select": (
    <CustomSelect
      value={"Portfolio"}
      options={[
        { value: "🎢 Rollercoaster" } /**@todo add a header to option */,
        { value: "♕ Queen" },
        { value: "🏂 Snowboarding" },
      ]}
      onChange={(e) => console.log(e.target.value)}
    />
  ),
  "TicTacToe": <TicTacToe />,
  "Accordion": <Accordion />,
  "Carousel": <Carousel />,
  "Pagination": <Pagination pages={20}/>,
  "Table": <Table />,
  "Resizable": <Resizable
    height={"400px"}
    width={"1000px"}
    horizontal
    border
    _css={{
      margin: "150px",
      boxShadow: "0 0 10px 2px #e5e7eb",
    }}
    dividerCSS={{
      width: "14px",
      backgroundColor: "#f3f4f6",
      border: "1px solid #e5e7eb",
      borderRadius: "5px",
      "&:hover .divider-handle": {
        backgroundColor: "#d1d5db",
        transitionDelay: "80ms",
      },
    }}
  >
    <div
      className="child--a"
      css={{
        padding: "20px",
        backgroundColor: "#fde68a",
      }}
    >
      {lorem}
      <br/>
      {lorem}
    </div>
    <div
      className="child--b"
      css={{
        padding: "20px",
        backgroundColor: "#fee2e2",
      }}
    >
      {lorem}
    </div>
</Resizable>,
  "NameForm": <NameForm />,
  "WelcomeBackForm": <WelcomeBackForm />,
  "Katcher": <Katcher />,
  // "Desktop": <DesktopWorkspace />,
};

const links = [
  { label: "Forms", link: "", order: 1 },
  { label: "Reference", link: "Reference Form", order: 2 },
  { label: "Person details", link: "NameForm", order: 2 },
  { label: "Welcome back", link: "WelcomeBackForm", order: 2 },
  { label: "Custom select", link: "Custom Select", order: 2 },
  { label: "TicTacToe", link: "TicTacToe", order: 1 },
  { label: "Accordion", link: "Accordion", order: 1 },
  { label: "Carousel", link: "Carousel", order: 1 },
  { label: "Pagination", link: "Pagination", order: 1 },
  { label: "Table", link: "Table", order: 1 },
  { label: "Resizable", link: "Resizable", order: 1 },
  { label: "Katcher", link: "Katcher", order: 1 },
  // { label: "Desktop", link: "Desktop", order: 1 },
];

export default function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(
    components["ReferenceForm"]
  );

  const selectComponent = (componentName: string) => {
    setCurrentComponent(components[componentName]);
  };

  return (
    <>
      <MantineHeader links={headerLinks}></MantineHeader>

      <div
        className="portfolio"
        css={{
          display: "grid",
          "grid-template-columns": "300px 1fr",
          width: "100vw",
        }}
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`}}
      >
        {/* NavBar */}
        <div
          className="portfolio-toc"
          css={{
            padding: "36px",
            borderRight: `1px solid ${ReferenceFormStyles.colors["border-primary"]}`,
          }}
        >
          <TableOfContents
            links={links}
            active={""}
            onClick={selectComponent}
          ></TableOfContents>
        </div>

        {/* WORKSPACE */}
        <div
          className="portfolio-workspace"
          css={{
            backgroundColor: ReferenceFormStyles.colors["bg-primary"],
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: '100px',
            paddingBottom: '100px',
          }}
          style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`}}
        >
          {currentComponent}
        </div>
      </div>
    </>
  );
}
