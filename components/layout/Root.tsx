"use client";

import Header from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";
import { Wrapper } from "@/components/ui/wrapper";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Lexend } from "next/font/google";
import { ReactNode } from "react";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <Skeleton className="h-80 md:h-60 lg:h-56" />,
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Wrapper className={cn(lexend.variable, "min-h-screen")}>
      <Header />
      <main className="flex w-full flex-col">{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default RootLayout;
