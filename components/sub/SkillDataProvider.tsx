"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    index: number;
}

const SkillDataProvider = ({ src, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: index * animationDelay}}
  className="flex justify-center backdrop-blur-md outline outline-[0.1px] outline-[#fefefe]/25 w-[160px] h-[120px]  bg-gradient-to-tl from-[#151A21]/55 from-10% via-[#333]/75  to-[#14171B]/55 rounded-lg"
  >
    <Image
src={src}
alt='skill image'
width={64}
height={64}
    />
  </motion.div>
  )
}

export default SkillDataProvider