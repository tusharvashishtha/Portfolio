import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'


const Navbar = () => {
  
    const [isOpen, setIsopen] = useState(false)
    function menuClose() {
    setIsopen(prev => !prev);
     }

     const titlesRef = useRef([]);
  const underlineRef = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(underlineRef.current[index], {
      width: '100%',
      duration: 0.5,
      ease: 'none',
    });


    titlesRef.current.forEach((el, i) => {
      if (i !== index) {
        gsap.to(el, {
          color: 'gray',
          opacity: 0.6,
  
        });
      }
    });
  };

  const handleMouseLeave = (index) => {

    gsap.to(underlineRef.current[index], {
      width: '0%',
      duration: 0.5,
      ease: 'none',
    });

    titlesRef.current.forEach((el) => {
      gsap.to(el, {
        color: 'black',
        opacity: 1,
      });
    });
  };

     
  return (
    <div className='w-full h-screen overflow-hidden'>
    <div className='w-full h-[10vh] fixed z-99 flex justify-between items-center transparent px-6  sm:px-15 sm:pt-5'>
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
    <div className='bg-zinc-300 sm:flex h-screen w-full'>
      <div className='sm:w-[50%] w-full  sm:h-[100%] h-[50%] gap-3 capitalize font-[font1] flex flex-col font-extrabold items-center md:items-end sm:justify-center justify-end'>
         <div className='hover-group  w-fit sm:h-[100%] h-fit gap-3 capitalize font-[font1] flex flex-col font-bold items-center md:items-end sm:justify-center justify-end'>

      {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((text, index) => (
        <div
          key={index}
          className='group xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-6xl h-fit overflow-hidden self-start w-fit relative'
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <h1
            ref={(el) => (titlesRef.current[index] = el)}
            className='text-black transition-all duration-75'
          >
            {text}
          </h1>
          <div
            ref={(el) => (underlineRef.current[index] = el)}
            className='h-[4px] bg-black w-0 absolute bottom-0 left-0 transition-all duration-75'
          ></div>
        </div>
      ))}

    </div>
 

</div>
      <div id='navbar2ndPart' className='sm:w-[50%] w-full sm:h-[100%] pt-5  sm:pt-0 flex flex-col items-center justify-self-start sm:justify-center h-[50%] '>
       <div className='w-fit flex p-3 flex-col gap-4'>
        <div id='navbarIconsContainer' className='h-fit w-fit  flex gap-4'>
            <div className="group relative h-13 w-13 sm:w-10 sm:h-10 rounded-full border border-black flex items-center justify-center cursor-pointer">
                <span className="absolute inset-0 bg-black scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
                <i className="ri-instagram-line relative text-black group-hover:text-white duration-600 text-2xl z-10"></i>
            </div>
            <div className="group relative h-13 w-13  sm:w-10 sm:h-10  rounded-full  border border-black flex items-center justify-center cursor-pointer">
                <span className="absolute inset-0 bg-black scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
                <i className="ri-github-fill relative text-black group-hover:text-white duration-600 text-2xl z-10"></i>
            </div>
            <div className="group relative h-13 w-13  sm:w-10 sm:h-10  rounded-full  border border-black flex items-center justify-center cursor-pointer">
                <span className="absolute inset-0 bg-black scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
                <i className="ri-twitter-x-fill relative text-black group-hover:text-white duration-600 text-2xl z-10"></i>
            </div>
            <div className="group relative h-13 w-13  sm:w-10 sm:h-10  rounded-full  border border-black flex items-center justify-center cursor-pointer">
                <span className="absolute inset-0 bg-black scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
                <i className="ri-linkedin-box-fill relative text-black group-hover:text-white duration-600 text-2xl z-10"></i>
            </div>
        </div>

        <div className='h-fit font-[font3] w-fit'>
          <h4>(Inquiries)</h4>
            <h3 class="relative cursor-pointer text-xl font-semibold group">
    john@jt-studio.com
    <span
      class="absolute bottom-0 left-0 w-full h-0.5 bg-black 
             transform scale-x-100 group-hover:scale-x-0
             origin-left group-hover:origin-right
             transition-transform duration-600 ease-in-out">
    </span>
  </h3>

          
        </div>
        <div className='h-fit font-[font3] w-fit '>
           <h4>(Phone)</h4>
           <h3 class="relative cursor-pointer text-xl font-semibold group">
    +491234 56789
    <span
      class="absolute bottom-0 left-0 w-full h-0.5 bg-black 
             transform scale-x-100 group-hover:scale-x-0
             origin-left group-hover:origin-right
             transition-transform duration-600 ease-in-out">
    </span>
  </h3>
        </div>
          </div>
       
      </div>
    </div>
   }

    </div>
  )
}

export default Navbar