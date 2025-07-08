import React from 'react';
import Spline from '@splinetool/react-spline';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
const Home = () => {
     const spanRef = useRef(null);

 useEffect(() => {
  gsap.fromTo(
    spanRef.current,
    { y: 18 },          
    {
      y: -4,           
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    }
  );
}, []);

const [disablePointer, setDisablePointer] = useState(false);

  return (
    <div className="h-screen relative overflow-hidden w-full flex flex-col items-center justify-center">
      {/* Spline canvas */}
      <div className={`absolute inset-0 z-0 ${disablePointer ? 'pointer-events-none' : ''}`}>
        <Spline scene="https://prod.spline.design/rHX8I4rdEzyySrXY/scene.splinecode" />
      </div>

      <div className="group absolute bottom-4 right-5 bg-black h-10 w-35 rounded-2xl border-[0.1px] border-zinc-400 flex items-center justify-center cursor-pointer">
          <span ref={spanRef} className="relative inline-block text-zinc-300  duration-600 text-sm z-10">SCROLL  <i class="ri-arrow-down-s-line"></i></span>
        </div>
    </div>
  );
};

export default Home;
