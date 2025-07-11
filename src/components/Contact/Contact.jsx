import "./Contact.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.set(imageRef.current, { height: 0 });

    gsap.to(imageRef.current, {
      height: "150vh",
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top top",
        markers: true,
        scrub: true,
        pin: true
      },
    });
  }, []);

  return (
    <div className="h-[200vh] w-full flex flex-col justify-center items-center bg-amber-600">
      {/* Absolute Centered Text */}
      <div className="absolute z-10">
        <h1 className="text-6xl uppercase text-center text-zinc-400 font-bold">
          In a world of <br /> full noise
        </h1>
      </div>

      {/* Masked Image */}
      <div className="contact2seconddev">
        <img
          ref={imageRef}
          className="masked-image"
          src="/mask.png"
          alt="background"
        />
      </div>
    </div>
  );
}

export default Contact;
