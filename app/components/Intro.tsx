import React from 'react'
import { useRouter } from 'next/navigation'
import { GradientSpan } from '../toolbox'
import Tag from '../blogqqwe/components/Tag'

export default function Intro() {
  const router = useRouter()
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-center p-6 lg:p-24">
      {/* bio */}
      <div className="w-full">
        <div className="pb-2">
          <ul className="py-4">
            <li><GradientSpan from="red" to="orange">Business Developer</GradientSpan></li>
            <li><GradientSpan from="orange" to="yellow">Software Engineer</GradientSpan></li>
            <li><GradientSpan from="yellow" to="green">English teacher</GradientSpan></li>
            <li><GradientSpan from="green" to="blue">Entrepreneur</GradientSpan></li>
            <li><GradientSpan from="blue" to="purple">Full time dad</GradientSpan></li>
          </ul>
        </div>
        <div className="tracking-wide">
        <div className="pb-2">
          I get a kick out of finding out how things work, usually by breaking them up 😂
        </div>
        <div className="pb-2">
          whilst keeping records and writing things down so I don&apos;t forget
        </div>
        <div className="pb-2">
        if you find anything interesting here, send an <a className="underline text-blue-500" href="mailto:ooddaa@gmail.com">email</a> or message me on <a className="underline text-blue-500" href="https://discordapp.com/users/774603540278673419">Discord</a>
        </div>
        <div className="mb-8">
          I like <a className="underline text-purple-950" href="https://rogergracie.com/">BJJ</a> and think that capital letters are overrated
        </div>
        </div>
      </div>
      {/* toys */}
      <div className="w-full">
        <ul className="flex flex-row flex-wrap gap-2">
          {["TypeScript", "React", "Next.js", "Elixir", "Phoenix", "Phoenix LiveView", "Figma" ]
          .map(val => <Tag 
            tag={val} 
            key={val} 
            classNames={"p-2 pl-3 pr-3 h-auto w-max rounded-md text-sm transition delay-50 select-none hover:cursor-pointer shadow-md active:scale-[.98]"}
            handleClick={() => router.push(`/blog?tag=${val}`)}
            />)}
        </ul>  
      </div>
  </div>
  )
}
