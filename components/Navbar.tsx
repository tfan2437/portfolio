"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

import { useI18nStore, useTranslations } from "@/lib/store/useGlobal";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const path = usePathname();
  const { locale, setLocale } = useI18nStore();
  const wording = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLocaleChange = () => {
    setLocale(locale === "en" ? "zh-TW" : "en");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-30 flex justify-center bg-white ">
      <div className="responsive flex justify-between items-center w-full py-3 relative">
        <Link
          href="/"
          className="flex items-center gap-2 w-auto md:w-60 select-none"
        >
          <Image
            src="/metadata/avator.webp"
            alt="logo"
            width={42}
            height={42}
            className="rounded-full block"
            draggable={false}
            priority
          />
          <div className="flex flex-col">
            <span className="text-[18px] font-semibold font-inter">
              {wording.hero.name}
            </span>
            <span
              className={twMerge(
                "text-xs text-neutral-600 font-inter",
                locale === "en" && "font-light"
              )}
            >
              {wording.hero.occupation}
            </span>
          </div>
        </Link>
        <div className="items-center gap-3 hidden md:flex">
          {path.startsWith("/project") ? (
            <NavLink href="/" text={wording.nav.home} offset={100} />
          ) : (
            <NavLink href="#about" text={wording.nav.about} offset={100} />
          )}
          <NavLink href="#projects" text={wording.nav.projects} offset={100} />
          <NavLink href="#contact" text={wording.nav.contact} offset={100} />
        </div>
        <div className="items-center gap-2 w-60 justify-end hidden md:flex">
          <Button
            variant="link"
            className="cursor-pointer"
            onClick={() => handleLocaleChange()}
          >
            <div className="w-12 flex items-center justify-end">
              <span className="font-inter">
                {locale === "en" ? "中文" : "English"}
              </span>
            </div>
          </Button>
          <Link
            href={"mailto:tfan2437@gmail.com"}
            target="_blank"
            className="bg-black group text-white pl-4 pr-6 py-1.5 rounded-full cursor-pointer flex items-center gap-2 hover:bg-green hover:text-black border-2 border-black transition-colors duration-300 select-none"
          >
            <Image
              src="/icons/waving-hand.png"
              alt="waving-hand"
              width={20}
              height={20}
              className="group-hover:scale-120 transition-transform duration-300 pb-0.5"
            />
            <span className="font-semibold">{wording.nav.letsTalk}</span>
          </Link>
        </div>
        <div className="block md:hidden">
          <MenuIcon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="size-6 text-black"
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute bg-white md:hidden top-16 left-0 w-full h-auto border-t-1 border-neutral-200 z-20 flex flex-col items-center">
          {path.startsWith("/project") ? (
            <NavLink
              href="/"
              text={wording.nav.home}
              offset={100}
              isMobile={true}
              setIsMenuOpen={setIsMenuOpen}
            />
          ) : (
            <NavLink
              href="#about"
              text={wording.nav.about}
              offset={100}
              isMobile={true}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
          <NavLink
            href="#projects"
            text={wording.nav.projects}
            offset={100}
            isMobile={true}
            setIsMenuOpen={setIsMenuOpen}
          />
          <NavLink
            href="#contact"
            text={wording.nav.contact}
            offset={100}
            isMobile={true}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      )}
    </nav>
  );
};
export default Navbar;
