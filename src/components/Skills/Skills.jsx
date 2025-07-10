import React, { useRef } from "react";
import ImageTrail from "./ImageTrail";

const skills = [
  { name: "Java", img: "java3d.png" },
  { name: "JavaScript", img: "js3d.png" },
  { name: "HTML", img: "html3d.png" },
  { name: "CSS", img: "css3d.png" },
  { name: "React Js", img: "react3d.png" },
  { name: "GSAP", img: "gsap.png" },
  { name: "Git", img: "git.png" },
  { name: "Node.js", img: "node3d.png" },
  { name: "Tailwind CSS", img: "tailwindcss3d.png" },
  { name: "Three Js", img: "threejs.png" },
];

const Skills = () => {
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-[#040404] text-white flex flex-col justify-center items-center px-6 py-20 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center z-10 relative">
        My <span className="text-zinc-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full z-10 relative">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#040404] to-zinc-800 border border-[#333] rounded-2xl h-24 flex flex-col items-center justify-center text-center text-base leading-tight font-medium shadow-lg"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-8 h-8 mb-1 object-contain"
            />
            <span className="block px-2 text-sm sm:text-base">{skill.name}</span>
          </div>
        ))}
      </div>

     <div className=" h-screen absolute w-full">
         <ImageTrail
        items={[
          "html3d.png",
          "css3d.png",
          "tailwindcss3d.png",
          "java3d.png",
          "gsap.png",
          "node3d",
          "js3d.png",
          "./react3d.png",
        ]}
        variant={1}
      />
      </div>
    </div>
  );
};

export default Skills;
