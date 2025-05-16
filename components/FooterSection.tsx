"use client";

import Link from "next/link";
import Image from "next/image";
import FooterProjectLink from "./FooterProjectLink";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useState } from "react";
const FooterSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("tfan2437@gmail.com");
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <footer className="w-full flex flex-col items-center bg-black pt-[100px] pb-[50px]">
      <div className="w-full max-w-7xl flex flex-col justify-between items-center h-[338px]">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex h-[200px] justify-between flex-col">
            <div className="w-full flex flex-col">
              <h1 className="text-2xl text-neutral-500">
                Let’s Build Something Great Together
              </h1>
              <p className="text-3xl text-white whitespace-pre-line mt-3">
                {`Fullstack engineer with solid experience building \nscalable, user-focused web apps`}
              </p>
            </div>
            <div className="w-full flex flex-col">
              <p className="text-sm text-neutral-500">Send a message</p>
              <div className="flex flex-row gap-1 items-center">
                <p className="text-base text-white font-semibold">{`tfan2437@gmail.com`}</p>
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
          <div className="w-[180px] flex flex-col gap-2 items-end h-full pt-12">
            <FooterProjectLink
              title="Tovier"
              href="https://sonicfi-ai.vercel.app/"
            />
            <FooterProjectLink
              title="Orbit AI v2"
              href="https://orbit-ai-v2.vercel.app/"
            />
            <FooterProjectLink
              title="Sonicfi v2"
              href="https://sonicfi-ai.vercel.app/"
            />
            <FooterProjectLink
              title="Orbit AI v1"
              href="https://orbit-ai-v2.vercel.app/"
            />
            <FooterProjectLink
              title="Sonicfi v1"
              href="https://sonicfi-ai.vercel.app/"
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-neutral-100">
            Copyright © 2025 Ting Wei Fan. All Rights Reserved.
          </span>
          <div className="flex gap-4 items-center">
            <Link href="/" target="_blank" className="size-6">
              <Image
                src="/footer-linkedin.png"
                alt="linkedin"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/" target="_blank" className="size-6">
              <Image
                src="/footer-github.png"
                alt="github"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/" target="_blank" className="size-6">
              <Image
                src="/footer-gmail.png"
                alt="gmail"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
