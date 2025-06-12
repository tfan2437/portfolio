"use client";

import { useState, useEffect } from "react";

export const useDevice = () => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const getDevice = () => {
      const width = window.innerWidth;
      if (width >= 1200) return "desktop";
      if (width >= 600) return "tablet";
      return "mobile";
    };

    setDevice(getDevice());

    const handleResize = () => setDevice(getDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
