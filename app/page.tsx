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
    <div className={`welcome w-screen h-screen relative`}>
      {innerWidth > 400 ? <div className="welcome--img bg-top absolute top-[156px] left-0 w-full h-[calc(100%-156px)] -z-10"></div> : ""}
      
      <section className="w-full h-full lg:h-screen flex flex-col lg:flex-row">
        
        {/* left */}
        <section className="h-[300px] pt-12 lg:pt-48 lg:h-full w-full lg:w-1/2 bg-green-800/50 flex flex-col justify-center items-center lg:justify-start text-slate-900">
            <div
                className="max-sm:min-h-[128px] pt-24 text-[36px] lg:text-[64px] font-bold lg:font-semibold flex flex-row justify-center items-center text-center"
            > 
              {innerWidth <= 400 ? "Dmitry Vikhorev" : "Dmitry 'Oda' Vikhorev"}
            </div>

              <div className="text-[18px] max-sm:pb-12 lg:pt-24 font-medium flex flex-col justify-center items-center gap-4 relative">
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
        </section>

        {/* right */}
        <section className="w-full lg:w-1/2 flex flex-col justify-start items-center p-12">
            <Text size="lg">
              <div className="pb-4">
                Over the past decade, I worked as:
                <ul className="pt-4">
                  <li><GradientSpan from="green" to="cyan">Business Developer</GradientSpan></li>
                  <li><GradientSpan from="red" to="orange">Software Engineer</GradientSpan></li>
                  <li><GradientSpan from="cyan" to="green">Full time dad</GradientSpan></li>
                  <li><GradientSpan from="cyan" to="blue">English teacher</GradientSpan></li>
                  <li><GradientSpan from="Purple" to="blue">Entrepreneur</GradientSpan></li>
                </ul>
              </div>
              <div className="pb-4">
                I get a knack out of keeping records and writing things down.
              </div>
              <div className="pb-4">
              As the result I have accumulated a bunch of designs, notes, projects, code, googlesheets and business ideas. I would like to keep playing with some of them and learn more. 
              </div>
              <div className="pb-4">
              If you find anything interesting here, I&apos;d love to <a className="underline text-blue-500" href="mailto:ooddaa@gmail.com">talk</a>! 
              </div>
              <div className="pb-4">
              This is my sandbox, everyone&lsquo;s welcome, BYOT
              </div>
              <div className="mb-8">
                I also like <a className="underline text-purple-950" href="https://rogergracie.com/">BJJ</a>.
              </div>
            </Text>
            <section className="my-toys w-full">
              <h2 className="font-semibold pb-4 text-lg">Stack that I&apos;m using daily:</h2>
              <ul className="flex flex-row flex-wrap">
                {["TypeScript", "React", "Next.js", "Elixir", "Phoenix", "Phoenix LiveView", "Figma"]
                 .map(val => <Tag tag={val} key={val} classNames={"p-2 pl-3 pr-3 m-2 h-auto w-max rounded-md text-sm transition delay-50 select-none hover:cursor-pointer shadow-md"}/>)}
                
              </ul>  
            </section>
        </section>
      </section>

      <div className="bg-transparent h-[16px] px-4 my-4 absolute bottom-0">
        <p className="text-gray-500 text-sm"> 
          made with 👾 by <span className="oda text-amber-500">oda</span> | photo by{" "}
          <a href="https://unsplash.com/photos/cBhk90BuOeU">Greg Torosiants</a>
        </p>
      </div>
    </div>
  );
}

