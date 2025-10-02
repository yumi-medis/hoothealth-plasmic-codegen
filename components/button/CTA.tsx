"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  isMenu?: boolean;
  label?: string;
  link?: string;
  variant?: "CTA" | "Primary";
}

const CTAButton = ({
  className,
  isMenu = false,
  label = "Get Started",
  link = "/welcome",
  variant = "Primary",
  ...props
}: CTAButtonProps) => {
  return (
    <Button
      aria-label={`${label} button`}
      className={cn(!isMenu && "mt-3", className)}
      href={link}
      variant={variant}
      {...props}
    >
      {label} <ArrowRight />
    </Button>
  );
};

export default CTAButton;
