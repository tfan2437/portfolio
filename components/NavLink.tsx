"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavLink = ({
  href,
  text,
  offset = 67,
}: {
  href: string;
  text: string;
  offset?: number;
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
  };

  return (
    <Link href={href} onClick={handleClick}>
      <Button variant="link" className="cursor-pointer">
        <span className="font-inter">{text}</span>
      </Button>
    </Link>
  );
};

export default NavLink;
