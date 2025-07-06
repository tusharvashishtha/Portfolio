import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsopen] = useState(false)
    function menuClose() {
    setIsopen(prev => !prev);
     }


  return (
    <div className='w-full h-screen overflow-hidden'>
    <div className='w-full h-[10vh] fixed z-99 flex justify-between items-center transparent  px-15 pt-5'>
        <div className='h-[100%] w-[5%] flex justify-center items-center'>
            <h1 className='text-5xl select-none font-bold'>
            T
            </h1>
        </div>
        <div onClick={menuClose} className='h-[100%] flex items-center justify-center w-[5%]'>
            <h1 className='text-4xl font-light'>
                {isOpen ? <i class="ri-close-large-fill"></i> : <i className="ri-menu-2-line"></i>}
                </h1>
        </div>
    </div>

   {
    isOpen && 
    <div className='bg-amber-800 sm:flex h-screen w-full'>
      <div className='sm:w-[50%] w-full sm:h-[100%] h-[50%] bg-red-400 gap-3 capitalize font-[font1] flex flex-col font-bold items-center justify-center'>
      <div className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl h-fit bg-yellow-500 overflow-hidden w-fit sm:w-[37vw]'><h1>HOME</h1></div>
      <div className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl h-fit bg-yellow-500 overflow-hidden w-fit sm:w-[37vw]'><h1>ABOUT</h1></div>
      <div className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl h-fit bg-yellow-500 overflow-hidden w-fit sm:w-[37vw]'><h1>PROJECTS</h1></div>
      <div className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl h-fit bg-yellow-500 overflow-hidden w-fit sm:w-[37vw]'><h1>CONTACT</h1></div>
      </div>
      <div className='sm:w-[50%] w-full sm:h-[100%] flex flex-col items-start justify-end h-[50%] bg-purple-500'>
         <button className="text-black hover:text-zinc-400 duration-500 hover:bg-black h-5 w-5 px-8 py-8 flex items-center justify-center rounded-full bg-zinc-400   font-bold transform hover:-translate-y-1 transition">
  <i class="ri-linkedin-box-fill  text-2xl"></i>
</button>
      </div>
    </div>
   }

    </div>
  )
}

export default Navbar