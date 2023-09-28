import React from 'react'
import { caveSystem, renderCaveSystem, Test } from './solution'
import { WebLink } from '@/app/toolbox'

function Caves() {
  return (
    <div className='h-full w-full'>
      {renderCaveSystem(caveSystem)}
      </div>
  )
}

export const caves = {component: Caves(), description: (<><WebLink href="https://adventofcode.com/2021/day/12" alt="Advent of Code 2021 day 12">Advent of Code 2021: --- Day 12: Passage Pathing --- </WebLink> <br /> WIP. Once finished, I will be able to: 
<ul className='list-disc list-inside'>
  <li>change the cave system: add/remove caves;</li>
  <li>run the path finding algorithm; (hmm can I connect to Elixir running in LiveBook?)</li>
  <li>generate a report of the found valid paths</li>
</ul>
</>)}