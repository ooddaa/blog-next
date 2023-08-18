"use client"
// import Image from 'next/image'

import React from "react";
// import AppFooter from "../../layout/Footer";
import { Text, Highlight } from "@mantine/core";
import { GradientSpan, Span, Bold, PB4 } from "./toolbox";
import Link from 'next/link'
import "./welcome.css";

export default function Welcome(): JSX.Element {
  return (
    <div className={`welcome w-screen h-screen relative`}>
      {window.innerWidth > 400 ? <div className="welcome--img bg-top absolute top-[156px] left-0 w-full h-[calc(100%-156px)] -z-10"></div> : ""}
      
        <section className="w-full h-full lg:h-screen flex flex-col lg:flex-row">
        
          {/* header */}
          <section className="h-[300px] pt-12 lg:pt-48 lg:h-full w-full lg:w-1/2 bg-green-800/50 flex flex-col justify-center items-center lg:justify-start text-slate-900">
            <div
                className="max-sm:min-h-[128px] pt-24 text-[36px] lg:text-[64px] font-bold lg:font-semibold flex flex-row justify-center items-center text-center"
            > 
              {window.innerWidth <= 400 ? "Dmitry Vikhorev" : "Dmitry 'Oda' Vikhorev"}
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

        <section className="bio welcome-last-text w-full lg:w-1/2 flex flex-col justify-start items-center p-12">
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
              <ul className="flex flex-row gap-4 flex-wrap">
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Elixir</li>
                <li>Phoenix</li>
                <li>Phoenix LiveView</li>
                <li>Figma</li>
              </ul>  
            </section>
        </section>
      </section>

      {/* <section className="welcome--img bg-center h-[1000px] w-full">
        <div className="welcome-footer h-full flex flex-col justify-end items-center">
          <AppFooter classes=""></AppFooter>
        </div>
      </section> */}
    </div>
  // </div>
  );
}

