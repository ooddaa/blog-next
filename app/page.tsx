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
    <div className={`welcome w-screen`}>
      <section className="w-full h-[1000px] flex flex-col lg:flex-row">
      {/* hello world */}
        <section className="welcome--lorem h-full w-full lg:w-1/2 bg-green-800/50 flex flex-col justify-center items-center text-slate-900">
        <div className="container-1-4 w-3/4">
          {/* hell world */}
          <div
            className="mb-32 text-[64px] font-semibold flex flex-row justify-center items-center"
            style={{ textAlign: "center" }}
          >
            {"Dmitry 'Oda' Vikhorev"}
          </div>

          <div className="mb-16 font-['Inter'] text-[18px] font-medium flex flex-col justify-center items-center gap-4 relative">
            {/* <span>welcome to my</span> */}

            <div className="navbar-links">
              <Link href="/blog">
                <GradientSpan from="grape" to="orange">
                  blog
                </GradientSpan>
              </Link>
              
              {" "}
              <Span color="grey">|</Span>{" "}
              <Link href="/portfolio">
                <GradientSpan from="green" to="black">
                portfolio
                </GradientSpan>
              </Link>
              
              {" "}
              <Span color="grey">|</Span>{" "}
              <a href="https://github.com/ooddaa">
                <GradientSpan from="blue" to="grape">
                  github
                </GradientSpan>
              </a>

              {" "}
              <Span color="grey">|</Span>{" "}
              <Link href="/playground">
                <GradientSpan from="orange" to="green">
                  playground
                </GradientSpan>
              </Link>

            </div>
          </div>
        </div>
      </section>



        <section className="bio welcome-last-text h-full w-full lg:w-1/2 flex flex-col justify-start items-center p-12">
            <Text size="lg">
              <div className="pb-4">
                Over the past decade, working as a{" "}
                <GradientSpan from="green" to="cyan">
                  Business Developer
                </GradientSpan>{" "}
                /{" "}
                <GradientSpan from="red" to="orange">
                  Software Engineer
                </GradientSpan>,{" "}
                I have accumulated a bunch of designs, notes, projects,  googlesheets and business ideas. I would like to keep playing with them, so I need a sandbox. This is my sandbox, everyone&lsquo;s welcome, BYOT 
              </div>
              <div className="mb-8">
                I also like <a href="https://rogergracie.com/">BJJ</a>.
              </div>
            </Text>
            <section className="my-toys">
              <ul>
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

      <section className="welcome--img bg-center h-[1000px] w-full">
        <div className="welcome-footer h-full flex flex-col justify-end items-center">
          {/* <AppFooter classes=""></AppFooter> */}
        </div>
      </section>
    </div>
  );
}

