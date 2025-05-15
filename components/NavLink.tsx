"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href}>
      <Button variant="link" className="cursor-pointer">
        <span className="font-inter">{text}</span>
      </Button>
    </Link>
  );
};

export default NavLink;
