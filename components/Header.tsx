'use client';

import { useState, useEffect } from 'react';
import HamburgerButton from '@/components/HamburgerButton';
import HeaderMenu from '@/components/HeaderMenu';
import Logo from '@/components/Logo';
import { Container } from '@/components/ui/container';
import { Wrapper } from '@/components/ui/wrapper';
import { cn } from '@/lib/utils';
import StatusIndicator from './StatusIndicator';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper as="header" className={cn('sticky top-0 z-40 lg:shadow-md')} color="reef-25">
      <StatusIndicator />
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
          <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} open={menuOpen} />
        </Container>
        <HeaderMenu menuOpen={menuOpen} />
      </Container>
    </Wrapper>
  );
};

export default Header;
