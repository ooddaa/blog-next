import React from 'react'
import { useRouter } from 'next/navigation'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'

export default function Intro() {
  const router = useRouter()
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-center p-6 lg:p-24">
      {/* bio */}
      <div className="w-full">
        <div className="pb-8">
        <TypeAnimation
            sequence={[
              'Software Engineer',
              1000, 
              'Entrepreneur',
              1000,
              'Full Time Dad',
              1000,
              'Grappler',
              1000
            ]}
            wrapper="span"
            className='text-red-400'
            speed={15}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="tracking-wide">
        <div className="pb-2">
          I get a kick out of finding out how things work, usually by breaking thing up and trying to rebuild them 😂
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
          {["TypeScript", "React", "Next.js", "Elixir", "Phoenix", "Phoenix LiveView", "Figma", "Python"]
          .map(val => <Link 
            key={val} 
            className={"p-2 pl-3 pr-3 h-auto w-max rounded-md text-sm transition delay-50 select-none hover:cursor-pointer shadow-md active:scale-[.98]"}
            href={{
              pathname: "/blog",
              query: {
                tags: [val]
              }
            }}
            >{val} </Link>)}
        </ul>  
      </div>
  </div>
  )
}
