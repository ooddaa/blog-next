import {referenceForm} from "./Forms/ReferenceForm/ReferenceForm";
import CustomSelect, {customSelect} from "./CustomSelect/CustomSelect";
import {ticTacToe} from "./TicTacToe/TicTacToe";
import {forms} from "./Forms/Forms";
import {accordion} from "./Components/Accordion/Accordion";
import {carousel} from "./Components/Carousel/Carousel";
import {pagination} from "./Components/Pagination/Pagination";
import {table} from "./Components/Tables/Table1";
import Resizable from "./Resizable/Resizable";
import {nameForm} from "./Forms/NameForm/NameForm";
import {welcomeBack} from "./Forms/WelcomeBackForm/WelcomeBack";
import {katcher} from "./Projects/Katcher/Katcher";
import lorem from "./lorem";
import {caves} from "./Caves/Caves";
import { components } from "./Components/Components";
import { projects } from "./Projects/Projects";
import { katcherUserFlow } from "./Projects/Katcher/KatcherUserFlow";
import { homi } from "./Projects/Homi/Homi";

export type ComponentEntryValue = {component: JSX.Element, description: string | JSX.Element}
type ComponentEntry = { [key: string]: ComponentEntryValue }
export const collection: ComponentEntry = {
  "Homi": homi,
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

