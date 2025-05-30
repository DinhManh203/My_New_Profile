"use client"

import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div 
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.9,
                        duration: 0.4,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute top-0 left-0 -z-10'>
                    <Image src="/assets/photo.png" priority quality={100} fill alt="" className='object-contain' />
                </div>
            </motion.div>

            <motion.svg 
                className='w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]'
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns='http://www.w3.org/2000/svg'
            >
                <motion.circle 
                    cx="253" 
                    cy="253" 
                    r="250" 
                    stroke="#00ff99" 
                    strokeWidth="4" 
                    fill="transparent" 
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1
                    }}
                 />
                <motion.circle/>
            </motion.svg>
        </div>
    )
}

export default Photo
