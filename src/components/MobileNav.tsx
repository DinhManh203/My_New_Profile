"use client";

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center pt-24 px-4">
        <div className="mb-40 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Sutie<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`text-xl capitalize transition-all hover:text-accent ${pathname === link.path
                  ? 'text-accent font-semibold border-b-2 border-accent'
                  : 'text-muted-foreground'
                }`}
            >
              {link.name}
            </Link>

          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
