"use client";

import { useState, useEffect } from "react";
import CTAButton from "@/components/button/CTA";
import HamburgerButton from "@/components/button/Hamburger";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Wrapper } from "@/components/ui/wrapper";
import { menuItems } from "@/constants/menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper
      as="header"
      className={cn("sticky top-0 z-40 lg:shadow-md")}
      color="reef-25"
    >
      {/* Status Indicator */}
      <Wrapper className="z-50" color="reef-700">
        <Container
          className="flex items-center justify-center gap-3"
          variant="note"
        >
          <div className="bg-reef-300 h-3 w-3 animate-pulse rounded-full" />
          <Typography variant="span">Doctors Online Now</Typography>
        </Container>
      </Wrapper>

      {/* Main */}
      <Container
        className="bg-inherit py-0 max-lg:shadow-md lg:flex lg:flex-row lg:items-center lg:justify-between"
        scope="fromDesktop"
        variant="header"
      >
        <Container
          className="flex items-center justify-between gap-4 bg-inherit md:gap-6 lg:gap-8"
          scope="untilTablet"
          variant="header"
        >
          <Logo />
          <HamburgerButton
            onClick={() => setMenuOpen(!menuOpen)}
            open={menuOpen}
          />
        </Container>

        {/* Menu */}
        <Wrapper
          className={cn(
            "font-medium transition-all max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:-z-10",
            menuOpen ? "max-lg:translate-y-0" : "max-lg:-translate-y-full"
          )}
          color="reef-25"
        >
          <Container
            aria-label="Main menu"
            as="nav"
            className="flex flex-col items-start justify-start gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-end lg:gap-10"
            scope="untilTablet"
            variant="section"
          >
            {menuItems.slice(1).map((item) => (
              <Button
                key={item.href}
                href={item.href}
                size="fit"
                variant="menu"
              >
                {item.label}
                <span />
              </Button>
            ))}
            <CTAButton isMenu={true} />
          </Container>
        </Wrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
