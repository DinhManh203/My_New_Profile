"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import Link from 'next/link'
import WorkSliderBtns from '@/components/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'SutieGang',
    description: 'A web application that allows users to create and manage their own online store. It provides a user-friendly interface for managing products, orders, and customers.',
    stack: [
      {
        name: 'Html5'
      },
      {
        name: 'Css3'
      },
      {
        name: 'Css3'
      }
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'SutieGang',
    description: 'A web application that allows users to create and manage their own online store. It provides a user-friendly interface for managing products, orders, and customers.',
    stack: [
      {
        name: 'React'
      },
      {
        name: 'Nextjs'
      },
      {
        name: 'Tailwindcss'
      }
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'SutieGang',
    description: 'A web application that allows users to create and manage their own online store. It provides a user-friendly interface for managing products, orders, and customers.',
    stack: [
      {
        name: '1'
      },
      {
        name: '2'
      },
      {
        name: '3'
      }
    ],
    image: '/assets/work/thumb3.png',
    live: '',
    github: '',
  },
]

const page = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2>{project.category} Project</h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item,index) => {
                  return (
                    <li key={index} className='text-cl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsArrowUpRight className='text-white text-xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsGithub className='text-white text-xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github</p>
                    </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full h-[460px]'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 z-10'>

                      <div className='absolute bg-black top-0 bottom-0 ư-full h-full'></div>

                      <div className='relative w-full h-full'>
                        <Image src={project.image} alt={project.title} fill className='object-cover' quality={100} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconStyles={undefined}                />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default page
