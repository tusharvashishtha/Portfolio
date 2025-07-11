import React from "react";

const Contact = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center overflow-hidden bg-black">
        <div className="h-fit w-full flex items-center justify-center font-bold m-10 ">
            <h1 className = "text-8xl font-[font1] uppercase text-zinc-400">Let's Connect</h1>
        </div>
      <div
        className="group relative inline-flex h-16 w-40 items-center
                   justify-center rounded-full
                   border border-zinc-400 cursor-pointer"
      >

        <span
          className="absolute inset-0 bg-zinc-400 transform scale-0
                     group-hover:scale-110 transition-transform duration-400
                     ease-out rounded-full"
        />
    
        <span
          className="relative z-10 font-[font1] text-2xl text-zinc-300
                     group-hover:text-black transition-colors duration-300"
        >
          Start Project
        </span>
      </div>
      <div id="navbarIconsContainer" className="h-fit p-10  border-b-1 border-zinc-400 w-full justify-evenly flex gap-4">
        <div className="navbar2ndIcons group relative h-13 w-20 sm:w-28 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-instagram-line relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
        <div className="navbar2ndIcons group relative h-13 w-20 sm:w-30 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-github-fill relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
        <div className="navbar2ndIcons group relative  h-13 w-20 sm:w-30 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-twitter-x-fill relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
        <div className="navbar2ndIcons group relative h-13 w-20 sm:w-30 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-linkedin-box-fill relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
      </div>

      <div className= "h-fit w-full flex items-center pl-8 justify-start">
        <h1 className= "text-[18rem] text-zinc-600  font-[font7]">
            TUSHAR<span className="text-[5rem] fonnt-light text-zinc-400 font-[font6] italic">VASHISHTHA</span> 
        </h1>
      </div>
    </div>
  );
};

export default Contact;
