"use client"

import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import "./welcome.css";

export default function Welcome(): JSX.Element {
  const [innerWidth, setInnerWidth] = useState<number>(0)

  useEffect(()=> {
    setInnerWidth(window.innerWidth)
  }, [])

  return (
    <div className="w-screen h-full sm:h-screen relative z-0 bg-[#f9fafc]">
      {innerWidth > 600 ? <div className="welcome--img bg-top absolute top-[156px] left-0 w-full h-[calc(100%-156px)] -z-10"></div> : ""}
      
      <div className="w-full sm:h-screen flex flex-col lg:flex-row z-50">
        {/* left */}
        <Navbar innerWidth={innerWidth}/>
        {/* right */}
        <Intro />
      </div>

      <Footer />
    </div>
  );
}

