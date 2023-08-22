import React from 'react'
import Link from 'next/link'
import { Span } from '../toolbox'

interface NavbarProps {
  innerWidth: number
}
export default function Navbar({ innerWidth }: NavbarProps) {
  return (
    <div className="h-[300px] pt-12 lg:pt-48 lg:h-full w-full lg:w-1/2 bg-green-800/50 flex flex-col justify-center items-center lg:justify-start text-slate-900 relative">
      <div className="noise--img absolute top-0 left-0 w-full h-full -z-10"></div>
      <div className="max-sm:min-h-[128px] pt-24 text-[36px] lg:text-[64px] font-bold lg:font-semibold flex flex-row justify-center items-center text-center"> 
        {innerWidth <= 600 ? "Dmitry Vikhorev" : "Dmitry 'Oda' Vikhorev"}
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
    )
}
