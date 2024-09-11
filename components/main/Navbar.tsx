"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo from '@/public/mindcodexLogo.svg'
import toggleNav from '@/public/Burger-Nav-Outline.svg'

const Navbar = () => {
  const audio = useRef<HTMLAudioElement>(null)
  useEffect(()=>{
    document.addEventListener( "mousemove", e =>{
      audio.current?.play()
    })
  },[])
  return (
    <div className="w-full h-[65px] fixed top-0 backdrop-blur-md z-[99] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src={logo}
            alt="logo"
            width={32}
            height={32}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            MINDCODEX
          </span>
        </a>

        <div className="hidden sm:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#b7b7b7] mr-[15px] px-[20px] py-[10px] rounded-md text-gray-200  ">
            <a href="#about-me" className="cursor-pointer hover:underline">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:underline">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:underline">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden flex-row gap-5 sm:flex">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
          <audio ref={audio} loop src="/nothing_is_real_slowed_(youconvert.net).mp3" ></audio>
        </div>
       <div className="block md:hidden">
        <button>
          <Image src={toggleNav} alt="ToggleNav"/>
        </button>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
