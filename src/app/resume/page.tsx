'use client'

import React from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'

// Tab Data
const about = {
  title: 'About Me',
  description:
    'As a passionate web developer, I thrive on building interactive, visually engaging, and performance-optimized user interfaces. My journey is fueled by a relentless curiosity and a commitment to mastering new technologies.',
  info: [
    { fieldName: 'Name', fieldValue: 'John Doe' },
    { fieldName: 'Phone', fieldValue: '+1234567890' },
    { fieldName: 'Experience', fieldValue: '1+ Years' },
    { fieldName: 'X', fieldValue: 'SutieGang' },
    { fieldName: 'Nationality', fieldValue: 'Vietnamese' },
    { fieldName: 'Email', fieldValue: 'dinhmanhoke203@gmail.com' },
    {
      fieldName: 'Frontend',
      fieldValue: 'HTML, CSS, JavaScript, React, Next.js, Tailwind CSS',
    },
    { fieldName: 'Languages', fieldValue: 'English, Vietnamese' },
  ],
}

const experience = {
  title: 'Experience',
  description:
    'Currently seeking a Frontend Developer role where I can contribute to high-impact projects while continuing to grow my skills in modern web development.',
  items: Array(6).fill({
    company: 'SutieGang Inc.',
    position: 'Front-end Developer Intern',
    duration: '2023 - Present',
    description:
      'Collaborated on real-world web projects using React, Next.js, and Tailwind CSS. Worked closely with cross-functional teams to ensure responsive and intuitive interfaces.',
  }),
}

const education = {
  title: 'Education',
  items: Array(5).fill({
    institution: 'EPU University',
    degree: 'Bachelor in Information Technology',
    duration: '2020 - 2024',
  }),
}

const skills = {
  title: 'Skills',
  description: 'Technologies and frameworks I work with daily:',
  skilllist: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
  ],
}

const ConditionalTabContent = ({
  value,
  selectedValue,
  children,
}: {
  value: string
  selectedValue: string
  children: React.ReactNode
}) => {
  if (value !== selectedValue) return null
  return (
    <TabsContent value={value} className='space-y-6'>
      {children}
    </TabsContent>
  )
}

const Page = () => {
  const [tabValue, setTabValue] = React.useState('experience')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
      }}
      exit={{ opacity: 0 }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'
      id='resume'
    >
      <div className='container mx-auto'>
        <Tabs value={tabValue} onValueChange={setTabValue} className='flex flex-col xl:flex-row gap-10'>
          {/* Tab List */}
          <TabsList className='flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className='min-h-[75vh] w-full'>
            {/* Experience */}
            <ConditionalTabContent value='experience' selectedValue={tabValue}>
              <div className='text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{experience.title}</h3>
                <p className='text-white/60 max-w-[600px] mx-auto xl:mx-0'>
                  {experience.description}
                </p>
              </div>
              <ScrollArea className='h-[400px] pr-4'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className='bg-[#232329] h-[184px] p-6 rounded-xl flex flex-col justify-center gap-2'
                    >
                      <span className='text-accent'>{item.duration}</span>
                      <h4 className='text-lg font-semibold'>{item.position}</h4>
                      <div className='flex items-center gap-2'>
                        <span className='w-2 h-2 rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </ConditionalTabContent>

            {/* Education */}
            <ConditionalTabContent value='education' selectedValue={tabValue}>
              <div className='text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{education.title}</h3>
              </div>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {education.items.map((item, index) => (
                  <li
                    key={index}
                    className='bg-[#232329] p-6 rounded-xl flex flex-col gap-2'
                  >
                    <h4 className='text-lg font-semibold'>{item.institution}</h4>
                    <span className='text-accent'>{item.duration}</span>
                    <p className='text-white/60'>{item.degree}</p>
                  </li>
                ))}
              </ul>
            </ConditionalTabContent>

            {/* Skills */}
            <ConditionalTabContent value='skills' selectedValue={tabValue}>
              <div className='text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{skills.title}</h3>
                <p className='text-white/60'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4'>
                {skills.skilllist.map((skill, index) => (
                  <li
                    key={index}
                    className='flex flex-col items-center gap-2 p-4 bg-[#232329] rounded-xl'
                  >
                    <span className='text-3xl text-accent'>{skill.icon}</span>
                    <p className='text-sm text-white'>{skill.name}</p>
                  </li>
                ))}
              </ul>
            </ConditionalTabContent>

            {/* About Me */}
            <ConditionalTabContent value='about' selectedValue={tabValue}>
              <div className='text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{about.title}</h3>
                <p className='text-white/60 max-w-[600px] mx-auto xl:mx-0'>
                  {about.description}
                </p>
              </div>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {about.info.map((item, index) => (
                  <li key={index} className='bg-[#232329] p-4 rounded-xl'>
                    <p className='text-sm text-white/40'>{item.fieldName}</p>
                    <p className='text-white font-medium'>{item.fieldValue}</p>
                  </li>
                ))}
              </ul>
            </ConditionalTabContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Page
