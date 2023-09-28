import React, { useState } from "react";
import './accordion.css'

const body = (
  <div className="content">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      dolor at sequi obcaecati cupiditate. Voluptates repellendus cupiditate
      aperiam! Incidunt amet quo neque.
    </p>
    <ul>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
      <li>Quasi accusamus corporis totam tempora suscipit ab obcaecati.</li>
      <li>Tempora, et atque officia at consequatur laborum!</li>
      <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
    </ul>
  </div>
);
const data = [
  {
    id: "01",
    header: "Where is Wally?",
    body,
  },
  {
    id: "02",
    header: "Where is Whitebeard?",
    body,
  },
  {
    id: "03",
    header: "Where is Olaf?",
    body,
  },
];

export function AccordionElement({ elm }) {
  const [isOpen, toggleOpen] = useState(false);

  const chevronDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
  const cross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div
      className={`accordion__elm elm--${elm.id} ${isOpen ? "open" : "closed"}`}
    >
      <div className={`top-green-border`}></div>
      <div className={`accordion__head`}>
        <div className="accordion-left">
          <div className={`accordion__head--id ${isOpen && "text-green"}`}>
            {elm.id}
          </div>
          <div className={`accordion__head--text ${isOpen && "text-green"}`}>
            {elm.header}
          </div>
        </div>
        <div className="right">
          <div
            className="accordion__head--btn"
            onClick={() => toggleOpen((val) => !val)}
          >
            {isOpen ? cross : chevronDown}
          </div>
        </div>
      </div>
      <div className={`accordion__body`}>{elm.body}</div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion mt-12">
      {data.map((elm, i) => (
        <AccordionElement key={elm.id} elm={elm}></AccordionElement>
      ))}
    </div>
  );
}

export const accordion = { component: <Accordion/>, description: (<div>Accordion component.</div>)}
