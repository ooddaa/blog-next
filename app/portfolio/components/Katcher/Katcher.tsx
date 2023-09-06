import React from 'react'
import {Span, GradientSpan, PB4} from "../../../toolbox"

export default function Katcher() {
  return (
    <div className='p-6 bg-white shadow rounded-md w-1/2 text-lg/8'>
       <a href="https://katcher.bio"><GradientSpan from="green" to="blue">
        Katcher
      </GradientSpan></a> is a job platform for Life Science professionals. My friend and I started it in 2022 and as of the end of August 2023 its MVP is almost complete.
      <PB4/>
      I wrote it <a href="https://elixir-lang.org/" className='text-sky-500 underline'>Elixir</a> | <a href="https://www.phoenixframework.org/" className='text-sky-500 underline'>Phoenix</a> | <a href="https://hexdocs.pm/phoenix_live_view/welcome.html" className='text-sky-500 underline'>Phoenix LiveView</a> which has been a heavenly experience 😁
      <PB4/> 
      Have a look, register and get yourself a great job in Life Sciences!
      <PB4/>
      go check it out 👉 <a href="https://www.katcher.bio"><GradientSpan from="green" to="blue">
    Katcher
  </GradientSpan></a>
    </div>
  )
}