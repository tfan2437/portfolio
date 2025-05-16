"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-10 flex justify-center bg-white">
      <div className="flex justify-between items-center w-full max-w-7xl py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/avatar2.jpg"
            alt="avatar"
            width={44}
            height={44}
            className="rounded-full block"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold font-inter">
              Ting Wei Fan
            </span>
            <span className="text-sm font-light text-neutral-600 font-inter">
              Software Engineer
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <NavLink href="/about" text="ABOUT" />
          <NavLink href="/projects" text="PROJECTS" />
          <NavLink href="/contact" text="CONTACT" />
        </div>
        <button
          className="bg-black text-white pl-4 pr-6 py-1.5 rounded-full cursor-pointer flex items-center gap-2 hover:bg-green hover:text-black border-2 border-black transition-colors duration-300"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={twMerge(isHovering && "animate-wave")}>
            <Image
              src="/waving-hand.png"
              alt="waving-hand"
              width={16}
              height={16}
            />
          </div>
          <span className="font-semibold">{`Let's Talk`}</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
