import React from 'react'
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const page = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1 mb-6'>Hello I am <br /> <span className='text-accent'>Sutie XuXi</span> </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam error </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className='uppercase flex items-center'>
                <span>Dowload CV</span>
                <FiDownload className='text-xl ml-2' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  )
}

export default page

