import './Contact.css'
import React, { useRef, useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const h1Ref = useRef(null)
  const underlineRef = useRef(null)
  const textRef = useRef(null)

  const showUnderline = () =>
    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: 'left', duration: 0.5, ease: 'power2.out' }
    )

  const hideUnderline = () =>
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: 'right',
      duration: 0.5,
      ease: 'power2.inOut'
    })

  const showSlideshow = () => textRef.current.classList.add('slideshow')
  const hideSlideshow = () => textRef.current.classList.remove('slideshow')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(h1Ref.current, {
        keyframes: {
          '0%': { color: '#27272a' },
          '25%': { color: '#D1C7BD' },
          '50%': { color: '#27272a' },
          '75%': { color: '#27272a' },
          '100%': { color: '#9F9FA9' }
        },
        ease: 'none',
        scrollTrigger: {
          trigger: h1Ref.current,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: 1
        }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="flex h-fit w-full flex-col pt-20 items-center overflow-hidden bg-black">
      <div className=" h-screen absolute w-full">
                        <Dither
                waveColor={[0.1, 0.1, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
              />
                  </div>
      <div className="h-fit w-full flex items-center justify-center font-bold m-10">
        <h1
          ref={h1Ref}
          className="relative text-6xl md:text-8xl font-[font2] uppercase text-zinc-400 m-5 sm:m-10 cursor-pointer"
          onMouseEnter={showUnderline}
          onMouseLeave={hideUnderline}
        >
          Let&apos;s Connect
          <span
            ref={underlineRef}
            className="absolute left-0 -bottom-2 h-[4px] w-full bg-zinc-400 scale-x-0"
          />
        </h1>
      </div>

      <div
        className="group relative inline-flex m-5 sm:m-10 h-16 w-40 items-center justify-center rounded-full border border-zinc-400 cursor-pointer"
        onMouseEnter={showSlideshow}
        onMouseLeave={hideSlideshow}
      >
        <span className="absolute inset-0 bg-zinc-400 transform scale-0 group-hover:scale-110 transition-transform duration-400 ease-out rounded-full" />
        <span className="relative z-10 font-[font1] text-2xl text-zinc-300 group-hover:text-black transition-colors duration-300">
          Start Project
        </span>
      </div>

      <div
        id="navbarIconsContainer"
        className="h-fit p-10 border-b-1 border-zinc-400 w-full justify-evenly flex gap-4"
      >
        <div className="navbar2ndIcons group relative h-13 w-20 sm:w-28 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-instagram-line relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
        <div className="navbar2ndIcons group relative h-13 w-20 sm:w-30 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-github-fill relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
        <div className="navbar2ndIcons group relative h-13 w-20 sm:w-30 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-twitter-x-fill relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
        <div className="navbar2ndIcons group relative h-13 w-20 sm:w-30 sm:h-10 rounded-full border border-zinc-400 flex items-center justify-center cursor-pointer">
          <span className="absolute inset-0 bg-zinc-400 scale-0 group-hover:scale-120 transition-transform duration-600 origin-center rounded-full"></span>
          <i className="ri-linkedin-box-fill relative text-zinc-300 group-hover:text-black duration-600 text-2xl z-10"></i>
        </div>
      </div>

      <div className="h-fit w-full flex py-10 items-center pl-8 justify-start">
        <h1
          ref={textRef}
          className="text-4xl md:text-[18rem] text-zinc-600 font-[font7] slideshow-target"
        >
          TUSHAR
          <span className="text-2xl md:text-[5rem] sm:p-0 fonnt-light text-zinc-400 font-[font6] italic">
            VASHISHTHA
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Contact
