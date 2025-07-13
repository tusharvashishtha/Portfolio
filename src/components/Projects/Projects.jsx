import React, { useRef, useEffect } from "react";
import FlowingMenu from "./FlowingMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const demoItems = [
    {
      link: "https://bewakoof-store-clone-react-project-1-bi6840yfz8u9.vercel.app/",
      text: "Bewakoof store clone",
      image: "./BewakoofLogo.png",
    },
    { link: "https://movies-hub-beta.vercel.app/", text: "Movies Hub", image: "./tvFill.png" },
    { link: "https://ai-image-enhancer-puce.vercel.app/", text: "Ai image enhancer", image: "https://picsum.photos/600/400?random=3" },
    { link: "", text: "The MCU", image: "./mcu.png" },
  ];


  const headingRef = useRef(null);
  const underlineRef = useRef(null);

  const showUnderline = () =>
    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left", duration: 0.5, ease: "power2.out" }
    );

  const hideUnderline = () =>
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.5,
      ease: "power2.inOut",
    });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        keyframes: {
          "0%":  { color: "#27272a" }, 
          "25%": { color: "#D1C7BD" },
          "50%": { color: "#E15D1D" },
          "75%": { color: "#548FAB" }, 
          "100%":{ color: "#9F9FA9" } 
        },
        ease: "none",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "bottom 20%",
          scrub: 1,
          duration: 0.8
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen overflow-hidden w-full bg-[#040404]">

      <div className="h-[20%] mb-3 w-full p-5 flex justify-center border-b-1 border-zinc-400 items-center">
        <h1
          // ref={headingRef}
          className="relative text-6xl md:text-8xl p-2 font-[font2] font-bold text-zinc-400 cursor-pointer"
          onMouseEnter={showUnderline}
          onMouseLeave={hideUnderline}
        >
          My Work
          <span
            ref={underlineRef}
            className="absolute left-0 -bottom-2 h-[4px] w-full bg-zinc-400 scale-x-0"
          />
        </h1>
      </div>
      


      <div className="h-[80%] w-full">
        <FlowingMenu items={demoItems} />
      </div>
     
    </div>
  );
};

export default Projects;
