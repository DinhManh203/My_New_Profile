"use client"

import React from 'react'
import CountUp from 'react-countup';

const stats = [
    {
        num: 50,
        title: "Years of Experience",
    },
    {
        num: 50,
        title: "Projects Completed",
    },
    {
        num: 50,
        title: "Technologies Mastered",
    },
    {
        num: 100,
        title: "Code Committed",
    },
]

const Stats = () => {
    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                    {stats.map((item, index) => (
                        <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                            <CountUp start={0} end={item.num} duration={2} delay={1} className='text-4xl xl:text-6xl font-extrabold' />
                            <p className={`${item.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.title}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Stats