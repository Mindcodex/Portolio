import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <img src={"/vecteezy_galaxy-overlay-space_26548589.png"} alt="" className="absolute scale-150 lg:scale-100 top-[198px] lg:-top-[298px] opacity-[55%]"/>
      <img src={"/person.png"} alt="" className="absolute scale-[50%] top-[120px]  lg:-top-[558px] lg:scale-[30%] z-30"/>
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
      <HeroContent />
    </div>
  );
};

export default Hero;
