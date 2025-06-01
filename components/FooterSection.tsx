"use client";

import Link from "next/link";
import Image from "next/image";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "@/lib/store/useGlobal";
import { Link as LinkIcon } from "lucide-react";

const FooterSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const footer = useTranslations().footer;

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("tfan2437@gmail.com");
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const platformLinks = [
    {
      image: "/icons/linkedin.png",
      href: "https://www.linkedin.com/in/tingweifan/",
    },
    {
      image: "/icons/github.png",
      href: "https://github.com/tingweifan",
    },
    {
      image: "/icons/gmail.png",
      href: "mailto:tfan2437@gmail.com",
    },
  ];

  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center bg-black pt-20 pb-6"
    >
      <div className="responsive flex flex-col lg:justify-between items-center h-auto lg:h-[338px]">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="w-full flex h-auto gap-10 flex-col">
            <div className="w-full flex flex-col">
              <h1 className="text-2xl text-neutral-500">{footer.title}</h1>
              <p className="text-3xl text-white whitespace-pre-line mt-3">
                {footer.intro}
              </p>
            </div>
            <div className="w-full flex flex-col">
              <p className="text-sm text-neutral-500">{footer.message}</p>
              <div className="flex flex-row gap-1 items-center">
                <p className="text-base text-white font-semibold">
                  {footer.email}
                </p>
                <button
                  onClick={handleCopy}
                  disabled={isCopied}
                  className="size-6 rounded-full flex items-center cursor-pointer justify-center text-neutral-400 hover:text-green transition-colors duration-300 pt-1"
                >
                  {isCopied ? (
                    <CheckIcon className="size-4" />
                  ) : (
                    <CopyIcon className="size-4 -scale-x-100" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="w-[180px] flex flex-col gap-2 items-start lg:items-end h-full py-10 lg:pt-12">
            {footer.projects.map((project, index) => (
              <ProjectLink
                key={index}
                title={project.name}
                href={project.href}
              />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <span className="text-sm text-neutral-100">{footer.copyright}</span>
          <div className="flex gap-4 items-center">
            {platformLinks.map((link, index) => (
              <PlatformLink key={index} image={link.image} href={link.href} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;

const ProjectLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-neutral-400 flex flex-row gap-2 items-center hover:text-green transition-colors duration-300"
    >
      <span className="text-sm">{title}</span>
      <LinkIcon className="size-4" />
    </Link>
  );
};

const PlatformLink = ({ image, href }: { image: string; href: string }) => {
  return (
    <Link href={href} target="_blank" className="size-6">
      <Image src={image} alt="platform" width={32} height={32} />
    </Link>
  );
};
