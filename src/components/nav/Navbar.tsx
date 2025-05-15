'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ClipLoader } from 'react-spinners'

const Links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
]

const Navbar = () => {
    const pathname = usePathname()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => setLoading(false), 1000)
            return () => clearTimeout(timer)
        }
    }, [pathname])

    return (
        <>
            <nav className='flex gap-8 items-center relative z-100'>
                {Links.map((link, index) => {
                    const isActive = pathname === link.path
                    return (
                        <div key={index} className='relative'>
                            <Link
                                href={link.path}
                                onClick={() => setLoading(true)}
                                className={`capitalize font-medium transition-colors duration-300 
                  ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`}
                            >
                                {link.name}
                            </Link>
                            {isActive && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-accent rounded"
                                    transition={{ type: "layout", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </div>
                    )
                })}
            </nav>

            {/* Loading spinner */}
            {loading && (
                <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center">
                    <ClipLoader color="#00ff99" loading={loading} size={50} />
                </div>
            )}

        </>
    )
}

export default Navbar
