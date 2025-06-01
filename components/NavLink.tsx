"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SetStateAction } from "react";
import { Dispatch } from "react";

const NavLink = ({
  href,
  text,
  offset = 67,
  isMobile = false,
  setIsMenuOpen = null,
}: {
  href: string;
  text: string;
  offset?: number;
  isMobile?: boolean;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>> | null;
}) => {
  const isInternalLink = href.startsWith("#");

  const handleClick = (e: React.MouseEvent) => {
    if (isInternalLink) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    if (isMobile && setIsMenuOpen !== null) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="py-4 md:py-0 border-b-1 border-neutral-200 md:border-b-0 w-full flex justify-center"
    >
      <Button variant="link" className="cursor-pointer">
        <span className="font-inter">{text}</span>
      </Button>
    </Link>
  );
};

export default NavLink;
