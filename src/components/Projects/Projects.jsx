import React from 'react'
import FlowingMenu from './FlowingMenu'

const Projects = () => {
    const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];
  return (
    <div className='h-screen w-full bg-[#040404]'>
        <div className='h-[20%] w-full flex justify-center items-center text-6xl'>
            <h1 className=' font-[font3] font-bold text-zinc-400'>PROJECTS</h1>
        </div>
        <div className='h-[80%] w-full'>
        <FlowingMenu items={demoItems} />
        </div>
    </div>
  )
}

export default Projects