import React from 'react'
import { cn } from './utils'
import { MacbookScroll } from './macbook-scroll'

const About = () => {
  return (
    <div className='h-fit overflow-hidden w-full bg-gradient-to-br from-[#010101] to-zinc-400'>
    <MacbookScroll></MacbookScroll>
    </div>
  )
}

export default About