"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/ui";

const onClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button 
      className={cn(isVisible ? "opacity-100" : "pointer-events-none opacity-0", "transition-all fixed right-5 bottom-5")}
      arial-label="Go To Top"
      onClick={onClick}
      variant="outline"
      size="icon">
      <ArrowUp />
    </Button>
  )
}
