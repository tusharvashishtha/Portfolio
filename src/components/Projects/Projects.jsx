import React from 'react'
import FlowingMenu from './FlowingMenu'

const Projects = () => {
    const demoItems = [
    { link: 'https://bewakoof-store-clone-react-project-1-bi6840yfz8u9.vercel.app/', text: 'Bewakoof store clone', image: './BewakoofLogo.png' },
  { link: 'https://movies-hub-beta.vercel.app/', text: 'Movies Hub', image: './tvFill.png' },
  { link: 'https://ai-image-enhancer-puce.vercel.app/', text: 'Ai image enhancer', image: 'https://picsum.photos/600/400?random=3' },
  { link: 'https://the-mcu.vercel.app/', text: 'The MCU', image: './mcu.png' }
];
  return (
    <div className='h-screen w-full bg-[#040404]'>
        <div className='h-[20%] w-full flex justify-center items-center text-2xl md:text-6xl'>
            <h1 className=' font-[font3] font-bold text-zinc-400'>PROJECTS</h1>
        </div>
        <div className='h-[80%] w-full'>
        <FlowingMenu items={demoItems} />
        </div>
    </div>
  )
}

export default Projects