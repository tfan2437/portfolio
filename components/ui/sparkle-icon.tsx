import React from "react";
import { cn } from "@/lib/utils";

interface SparkleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const SparkleIcon = ({
  size = 24,
  className,
  ...props
}: SparkleIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      <path
        d="M3 12C9.26752 12 12 9.36306 12 3C12 9.36306 14.7134 12 21 12C14.7134 12 12 14.7134 12 21C12 14.7134 9.26752 12 3 12Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparkleIcon;
