"use client";

import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

interface FooterProjectLinkProps {
  title: string;
  href: string;
}

const FooterProjectLink = ({ title, href }: FooterProjectLinkProps) => {
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
export default FooterProjectLink;
