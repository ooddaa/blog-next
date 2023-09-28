import { GradientSpan, PB4 } from "@/app/toolbox"
function Katcher() {
  return <div className='w-4/5 p-12'><img src="/katcher.png" alt="" /></div>
}

export const katcher = {component: <Katcher />, description: (<><a href="https://www.katcher.bio"><GradientSpan from="green" to="blue">
Katcher
</GradientSpan></a> <b>is a job search platform for Life Science professionals.</b> 
<PB4/>
My friend and I started it in 2022 and as of the end of August 2023 its MVP is almost complete.
<PB4/>
I wrote it <a href="https://elixir-lang.org/" className='text-sky-500 underline'>Elixir</a> | <a href="https://www.phoenixframework.org/" className='text-sky-500 underline'>Phoenix</a> | <a href="https://hexdocs.pm/phoenix_live_view/welcome.html" className='text-sky-500 underline'>Phoenix LiveView</a> which has been a heavenly experience 😁
<PB4/> 
Have a look, register and get yourself a great job in Life Sciences! Check it out 👉 <a href="https://www.katcher.bio"><GradientSpan from="green" to="blue">
Katcher
</GradientSpan></a></>)}