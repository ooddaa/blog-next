/**@jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import TableOfContents from "./components/TableOfContents";
import Workspace from "./components/Workspace";
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
import MantineHeader, {
  HEADER_HEIGHT,
  links as headerLinks,
} from "../components/MantineHeader";
import lorem from "./components/lorem";
import { GradientSpan, PB4 } from "../toolbox";

export type ComponentEntryValue = {component: JSX.Element, description: string | JSX.Element}
type ComponentEntry = { [key: string]: ComponentEntryValue }
const components: ComponentEntry = {
  "Reference": {component: <ReferenceForm />, description: "A Reference Form for a user to submit their referees/guarantors."},
  "Custom Select": {component: (
    <CustomSelect
      value={"Portfolio"}
      options={[
        { value: "🎢 Rollercoaster" } /**@todo add a header to option */,
        { value: "♕ Queen" },
        { value: "🏂 Snowboarding" },
      ]}
      onChange={(e) => console.log(e.target.value)}
    />
  ), description: ""},
  TicTacToe: {component: <TicTacToe />,  description: (<div>I completed a basic tic-tac-toe game as part of a tech interview. To begin with, I was provided with the initial app structure and had to:
  <br/>
  1. Implement the stubbed-out functions in order to make the game functional
  <br/>
  2. Make the game state persistent between refreshes
  <br/>
  3. Implement a persistent game history, that allows the user to step back and forth through each state of the game. 
  <br/>
  Afterwards, I enhanced the visual appearance by incorporating CSS-in-JS to make it more visually appealing. 
  <br/>
  The result passed the interview 👍 <br/> The source code can be found <a href="https://github.com/ooddaa/blog-next/blob/main/app/portfolio/components/TicTacToe/TicTacToe.tsx" className="text-sky-700 hover:text-sky-500">here</a>.</div>)},
  Accordion: {component: <Accordion />, description: ""},
  Carousel: {component: <Carousel />, description: ""},
  Pagination: {component: <Pagination pages={20} />, description: ""},
  Table: {component: <Table />, description: ""},
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
          backgroundColor: "#fde68a",
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
          backgroundColor: "#fee2e2",
        }}
      >
        {lorem}
      </div>
    </Resizable>
  ), description: ""},
  'Person details': {component: <NameForm />, description: ""},
  "Welcome back": {component: <WelcomeBackForm />, description: ""},
  Katcher: {component: <Katcher />, description: (<><a href="https://www.katcher.bio"><GradientSpan from="green" to="blue">
  Katcher
</GradientSpan></a> is a job search platform for Life Science professionals. 
<br/>
My friend and I started it in 2022 and as of the end of August 2023 its MVP is almost complete.
<PB4/>
I wrote it <a href="https://elixir-lang.org/" className='text-sky-500 underline'>Elixir</a> | <a href="https://www.phoenixframework.org/" className='text-sky-500 underline'>Phoenix</a> | <a href="https://hexdocs.pm/phoenix_live_view/welcome.html" className='text-sky-500 underline'>Phoenix LiveView</a> which has been a heavenly experience 😁
<PB4/> 
Have a look, register and get yourself a great job in Life Sciences!
<PB4/>
go check it out 👉 <a href="https://www.katcher.bio"><GradientSpan from="green" to="blue">
Katcher
</GradientSpan></a></>)},
  // "Desktop": <DesktopWorkspace />,
};

const links = [
  { label: "TicTacToe", order: 1 },
  { label: "Katcher", order: 1, new: true },
  { label: "Intro", order: 1 },
  { label: "Forms", order: 1 },
  { label: "Reference", order: 2 },
  { label: "Person details", order: 2 },
  { label: "Welcome back", order: 2 },
  { label: "Custom select", order: 2 },
  { label: "Accordion", order: 1 },
  { label: "Carousel", order: 1 },
  { label: "Pagination", order: 1 },
  { label: "Table", order: 1 },
  { label: "Resizable", order: 1 },
  // { label: "Desktop", link: "Desktop", order: 1 },
];

export default function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState<ComponentEntryValue>(
    components["Reference"]
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
