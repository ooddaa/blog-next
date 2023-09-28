/**@jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import TableOfContents from "./components/TableOfContents/TableOfContents";
import Workspace from "./components/Workspace";
import {referenceForm} from "./components/Forms/ReferenceForm/ReferenceForm";
import CustomSelect, {customSelect} from "./components/CustomSelect/CustomSelect";
import {ticTacToe} from "./components/TicTacToe/TicTacToe";
import {forms} from "./components/Forms/Forms";
import {accordion} from "./components/Components/Accordion/Accordion";
import {carousel} from "./components/Components/Carousel/Carousel";
import {pagination} from "./components/Components/Pagination/Pagination";
import {table} from "./components/Components/Tables/Table1";
import Resizable from "./components/Resizable/Resizable";
import {nameForm} from "./components/Forms/NameForm/NameForm";
import {welcomeBack} from "./components/Forms/WelcomeBackForm/WelcomeBack";
import {katcher} from "./components/Projects/Katcher/Katcher";
import { styles as ReferenceFormStyles } from "./components/Forms/ReferenceForm/styles/styleSystem";
import {
  MantineHeader,
  HEADER_HEIGHT,
} from "../components/MantineHeader";
import lorem from "./components/lorem";
import {caves} from "./components/Caves/Caves";
import { components } from "./components/Components/Components";
import { projects } from "./components/Projects/Projects";
import { katcherUserFlow } from "./components/Projects/Katcher/KatcherUserFlow";

export type ComponentEntryValue = {component: JSX.Element, description: string | JSX.Element}
type ComponentEntry = { [key: string]: ComponentEntryValue }
const collection: ComponentEntry = {
  "Reference": referenceForm,
  "Custom select": {component: (<div className="mt-12">
    <CustomSelect
      value={"Portfolio"}
      options={[
        { value: "🎢 Rollercoaster" } /**@todo add a header to option */,
        { value: "♕ Queen" },
        { value: "🏂 Snowboarding" },
      ]}
      onChange={(e) => console.log(e.target.value)}
    />
  </div>), description: customSelect.description},
  TicTacToe: ticTacToe,
  Forms: forms,
  Accordion: accordion,
  Carousel: carousel,
  Pagination: pagination, 
  Table: table,
  Resizable: {component: (
    <Resizable
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
          backgroundColor: "#fff",
        }}
      >
        {lorem}
        <br />
        {lorem}
      </div>
      <div
        className="child--b"
        css={{
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        {lorem}
      </div>
    </Resizable>
  ), description: (<div>A resizable split panes component.</div>)},
  'Person details': nameForm,
  "Welcome back": welcomeBack,
  Caves: caves,
  Katcher: katcher,
  Components: components,
  Projects: projects,
  "User Registration Flow": katcherUserFlow
};

const links = [
  { label: "Caves", order: 1, new: true },
  { label: "Projects", order: 1, new: true},
  { label: "Katcher", order: 2 },
  { label: "User Registration Flow", order: 3},
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

export default function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState<ComponentEntryValue>(
    collection["Caves"]
  );

  const selectComponent = (componentName: string) => {
    setCurrentComponent(collection[componentName]);
  };

  return (
    <>
      <MantineHeader />

      <div
        className="portfolio"
        css={{
          display: "grid",
          "grid-template-columns": "300px 1fr",
          width: "100vw",
        }}
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        {/* NavBar */}
        <div
          className="portfolio-toc"
          css={{
            padding: "36px",
            borderRight: `1px solid ${ReferenceFormStyles.colors["border-primary"]}`,
          }}
        >
          <TableOfContents links={links} onClick={selectComponent} />
        </div>

        {/* WORKSPACE */}
        <Workspace>
          {currentComponent}
        </Workspace>
      </div>
    </>
  );
}
