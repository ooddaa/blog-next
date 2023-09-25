import React from 'react'
import { caveSystem, renderCaveSystem, Test } from './solution'
import { WebLink } from '@/app/toolbox'

function Caves() {
  return (
    <div className='border h-full w-full'>{renderCaveSystem(caveSystem)}</div>
    // <div className='border h-full w-full'>
    //   <Test/>
    // </div>
  )
}

export const caves = {component: Caves(), description: (<><WebLink href="https://adventofcode.com/2021/day/12" alt="Advent of Code 2021 day 12">Advent of Code 2021: --- Day 12: Passage Pathing --- </WebLink> <br /> WIP </>)}