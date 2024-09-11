import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  System_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import KnowledgeCard from "../knowledge-card";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-3 h-full relative overflow-hidden py-20 w-full"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className=" flex flex-row justify-center 2xl:justify-between sm:pl-16 flex-wrap mt-4 gap-5 ">
        <h3 className="w-full text-white font-medium text-2xl">Frontend</h3>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            index={index}
          />
        ))}
      </div>
      <div className="flex justify-center lg:justify-start flex-row sm:pl-16 flex-wrap mt-4 gap-5 items-center">
      <h3 className="w-full text-white font-medium text-2xl">Backend</h3>
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src= {image.Image}
            index={index}
          />
        ))}
      </div>
      <div className="flex justify-center lg:justify-start flex-row pl-16 flex-wrap mt-4 gap-5 items-center">
        {/* {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))} */}
      </div>
      <div className="flex justify-center lg:justify-start flex-row sm:pl-16 flex-wrap mt-4 gap-5 items-center">
      <h3 className="w-full text-white font-medium text-2xl">Sistemas</h3>
        {System_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          {/* <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
