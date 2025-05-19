"use client"

import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    href: '',
  },
  {
    num: '03',
    title: 'Logo Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    href: '',
  },
  {
    num: '04',
    title: 'Branding',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    href: '',
  },
]

const page = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: 'easeIn' } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((services, index) => {
            return (
              <div key={index} className='flex flex-1 flex-col justify-center group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{services.num}</div>
                  <Link href={services.href} className='w-[30px] h-[30px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'> 
                    <BsArrowDownRight className='text-xl text-primary' />
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{services.title}</h2>
                <p className='text-white/60 '>
                  {services.desc}
                </p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default page
