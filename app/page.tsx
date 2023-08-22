"use client"

import React, {useEffect, useState} from "react";
import { Text } from "@mantine/core";
import { GradientSpan, Span } from "./toolbox";
import Tag from "./blog/components/Tag";
import Link from 'next/link'
import "./welcome.css";

export default function Welcome(): JSX.Element {
  const [innerWidth, setInnerWidth] = useState<number>(0)

  useEffect(()=> {
    setInnerWidth(window.innerWidth)
  }, [])

  return (
    <div className={`welcome w-screen h-full sm:h-screen relative bg-[#f9fafc] -z-20`}>
      {innerWidth > 600 ? <div className="welcome--img bg-top absolute top-[156px] left-0 w-full h-[calc(100%-156px)] -z-10"></div> : ""}
      
      <div className="w-full sm:h-screen flex flex-col lg:flex-row">
        
        {/* left */}
        <div className="h-[300px] pt-12 lg:pt-48 lg:h-full w-full lg:w-1/2 bg-green-800/50 flex flex-col justify-center items-center lg:justify-start text-slate-900">
            <div
                className="max-sm:min-h-[128px] pt-24 text-[36px] lg:text-[64px] font-bold lg:font-semibold flex flex-row justify-center items-center text-center"
            > 
              {innerWidth <= 400 ? "Dmitry Vikhorev" : "Dmitry 'Oda' Vikhorev"}
            </div>

            <div className="text-[18px] max-sm:py-12 lg:pt-24 flex flex-col justify-center items-center gap-4 relative">
                <div className="navbar-links">
                  <Link href="/blog"> blog </Link>
                  
                  {" "}
                  <Span color="grey">|</Span>{" "}
                  <Link href="/portfolio"> portfolio</Link>
                  
                  {" "}
                  <Span color="grey">|</Span>{" "}
                  <a href="https://github.com/ooddaa">github</a>

                  {" "}
                  <Span color="grey">|</Span>{" "}
                  <Link href="/playground">playground</Link>
                </div>
            </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center p-6 lg:p-24">
            {/* bio */}
            <div className="w-full">
              <div className="pb-4">
                {/* I worked as: */}
                <ul className="pt-4">
                  <li><GradientSpan from="red" to="orange">Business Developer</GradientSpan></li>
                  <li><GradientSpan from="orange" to="yellow">Software Engineer</GradientSpan></li>
                  <li><GradientSpan from="yellow" to="green">Full time dad</GradientSpan></li>
                  <li><GradientSpan from="green" to="blue">English teacher</GradientSpan></li>
                  <li><GradientSpan from="blue" to="purple">Entrepreneur</GradientSpan></li>
                </ul>
              </div>
              <div className="pb-4">
                I get a knack out of finding out how things work, usually by breaking them up 😂
              </div>
              <div className="pb-4">
                whilst keeping records and writing things down so I don&apos;t forget
              </div>
              <div className="pb-4">
              if you find anything interesting here, send an <a className="underline text-blue-500" href="mailto:ooddaa@gmail.com">email</a> or message me on <a className="underline text-blue-500" href="https://discordapp.com/users/774603540278673419">Discord</a>
              </div>
              <div className="pb-4">
              this is my sandbox, everyone&lsquo;s welcome, BYOT
              </div>
              <div className="mb-8">
                I like <a className="underline text-purple-950" href="https://rogergracie.com/">BJJ</a> and think that capital letters are overrated
              </div>
            </div>
            {/* toys */}
            <div className="w-full">
              <ul className="flex flex-row flex-wrap gap-2">
                {["TypeScript", "React", "Next.js", "Elixir", "Phoenix", "Figma", "Phoenix LiveView", ]
                 .map(val => <Tag tag={val} key={val} classNames={"p-2 pl-3 pr-3 h-auto w-max rounded-md text-sm transition delay-50 select-none hover:cursor-pointer shadow-md"}/>)}
              </ul>  
            </div>
        </div>
      </div>

      <div className="bg-transparent h-[16px] px-4 my-4 max-sm:py-4 lg:absolute lg:bottom-0">
        <p className="text-gray-500 text-sm"> 
          made with 👾 by <span className="oda text-amber-500">oda</span> | photo by{" "}
          Greg Torosiants
        </p>
      </div>
    </div>
  );
}

